#!/usr/bin/env node

/**
 * Script to extract LinkedIn profile images and company logos
 * Usage: node scripts/extract-linkedin-images.js
 */

const fs = require('fs');
const path = require('path');

// Read testimonials data
const testimonialsPath = path.join(__dirname, '../data/testimonials.ts');
const testimonialsContent = fs.readFileSync(testimonialsPath, 'utf-8');

// Extract testimonials with missing images using regex
const missingImages = [];

// Match all testimonial objects
const testimonialRegex = /\{\s*id:\s*(\d+),[\s\S]*?personAvatar:\s*["']([^"']*)["'],[\s\S]*?companyUrl:\s*["']([^"']*)["'],[\s\S]*?title:\s*["']([^"']*)["'],[\s\S]*?company:\s*["']([^"']*)["'],[\s\S]*?linkedinUrl:\s*["']([^"']*)["']/g;

let match;
while ((match = testimonialRegex.exec(testimonialsContent)) !== null) {
  const id = parseInt(match[1]);
  const personAvatar = match[2];
  const companyUrl = match[3];
  const title = match[4];
  const company = match[5];
  const linkedinUrl = match[6];
  
  // Check if this testimonial has missing images and a valid LinkedIn URL
  if (linkedinUrl && linkedinUrl.includes('linkedin.com/in/')) {
    if (!personAvatar || !companyUrl) {
      missingImages.push({
        id,
        title,
        company,
        linkedinUrl,
        personAvatar: personAvatar || '',
        companyUrl: companyUrl || '',
      });
    }
  }
}

console.log('Found', missingImages.length, 'testimonials with missing images:\n');
console.log('='.repeat(80));

// Function to extract image from LinkedIn profile
async function extractLinkedInImage(profileUrl) {
  try {
    // Try multiple proxy services
    const proxies = [
      `https://api.allorigins.win/get?url=${encodeURIComponent(profileUrl)}`,
      `https://corsproxy.io/?${encodeURIComponent(profileUrl)}`,
    ];

    let html = null;
    for (const proxyUrl of proxies) {
      try {
        const response = await fetch(proxyUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          },
        });

        if (response.ok) {
          const data = await response.json();
          html = data.contents || data;
          break;
        }
      } catch (e) {
        continue;
      }
    }

    if (!html) {
      return null;
    }

    // Extract og:image (profile picture)
    const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
    const profileImage = ogImageMatch ? ogImageMatch[1] : null;

    // Also try to find profile image in other meta tags
    let profileImageAlt = null;
    if (!profileImage) {
      const imageMatch = html.match(/<meta\s+name=["']image["']\s+content=["']([^"']+)["']/i);
      if (imageMatch) {
        profileImageAlt = imageMatch[1];
      }
    }

    // Try to extract from JSON-LD
    let profileImageJson = null;
    const jsonLdMatch = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/is);
    if (jsonLdMatch) {
      try {
        const jsonLd = JSON.parse(jsonLdMatch[1]);
        if (jsonLd.image) {
          profileImageJson = Array.isArray(jsonLd.image) ? jsonLd.image[0] : jsonLd.image;
        }
      } catch (e) {
        // Ignore JSON parse errors
      }
    }

    return {
      profileImage: profileImage || profileImageAlt || profileImageJson,
      companyLogo: null, // Company logos need to be fetched from company pages
    };
  } catch (error) {
    console.error(`Error extracting image from ${profileUrl}:`, error.message);
    return null;
  }
}

// Process each missing image
async function processMissingImages() {
  console.log('\nExtracting images from LinkedIn profiles...\n');
  console.log('='.repeat(80));
  
  const results = [];
  
  for (const testimonial of missingImages) {
    console.log(`\n[${testimonial.id}] ${testimonial.title} at ${testimonial.company}`);
    console.log(`LinkedIn: ${testimonial.linkedinUrl}`);
    
    const images = await extractLinkedInImage(testimonial.linkedinUrl);
    
    if (images) {
      const result = {
        id: testimonial.id,
        title: testimonial.title,
        company: testimonial.company,
        linkedinUrl: testimonial.linkedinUrl,
        personAvatar: images.profileImage || testimonial.personAvatar || '',
        companyUrl: images.companyLogo || testimonial.companyUrl || '',
      };
      
      results.push(result);
      
      if (images.profileImage) {
        console.log(`✓ Profile Image: ${images.profileImage.substring(0, 80)}...`);
      } else {
        console.log('✗ Profile Image: Not found');
      }
      
      if (images.companyLogo) {
        console.log(`✓ Company Logo: ${images.companyLogo.substring(0, 80)}...`);
      } else {
        console.log('✗ Company Logo: Not found (may need to check company page)');
      }
    } else {
      console.log('✗ Failed to extract images');
      results.push({
        id: testimonial.id,
        title: testimonial.title,
        company: testimonial.company,
        linkedinUrl: testimonial.linkedinUrl,
        personAvatar: testimonial.personAvatar || '',
        companyUrl: testimonial.companyUrl || '',
      });
    }
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Generate output
  console.log('\n\n' + '='.repeat(80));
  console.log('RESULTS - Copy and paste these into your testimonials.ts file:\n');
  console.log('='.repeat(80));
  
  results.forEach(result => {
    console.log(`\n// ID ${result.id}: ${result.title} at ${result.company}`);
    if (result.personAvatar) {
      console.log(`personAvatar: "${result.personAvatar}",`);
    } else {
      console.log(`personAvatar: "", // TODO: Add image URL`);
    }
    if (result.companyUrl) {
      console.log(`companyUrl: "${result.companyUrl}",`);
    } else {
      console.log(`companyUrl: "", // TODO: Add company logo URL`);
    }
  });
  
  // Also generate a JSON file for easy import
  const outputPath = path.join(__dirname, '../linkedin-images-output.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n\n✓ Results also saved to: ${outputPath}`);
}

// Run the script
if (require.main === module) {
  processMissingImages().catch(console.error);
}

module.exports = { extractLinkedInImage, processMissingImages };

