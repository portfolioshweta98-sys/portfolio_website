/**
 * Improved script to extract LinkedIn profile images
 * Uses multiple methods to get profile images from LinkedIn URLs
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Testimonials data with LinkedIn URLs
const testimonials = [
  { id: 1, name: "Manish Mishra", linkedinUrl: "https://www.linkedin.com/in/manish-mishra-243a2220/", hasImage: true },
  { id: 2, name: "Kaleemullah Shaikh", linkedinUrl: "https://www.linkedin.com/in/kaleemullah-shaikh-846772109/" },
  { id: 3, name: "Sumitra Iyer", linkedinUrl: "https://www.linkedin.com/in/sumitraiyer/", hasImage: true },
  { id: 4, name: "Omkar Patil", linkedinUrl: "https://www.linkedin.com/in/omkar-patil-5ab62b190/" },
  { id: 5, name: "Parag Wagh", linkedinUrl: "https://www.linkedin.com/in/paragwagh/", hasImage: true },
  { id: 6, name: "Rimjhim Sandhir", linkedinUrl: "https://www.linkedin.com/in/rimjhim-sandhir-61377a50/", hasImage: true },
  { id: 7, name: "Ansh Harjai", linkedinUrl: "https://www.linkedin.com/in/ansh-harjai-7a422b245/" },
  { id: 8, name: "Omkar Warade", linkedinUrl: "https://www.linkedin.com/in/omkar-warade-a721b7163/" },
  { id: 9, name: "Vrunda Mange", linkedinUrl: "https://www.linkedin.com/in/vrunda-mange/" },
  { id: 10, name: "Saiprasad Ganesan", linkedinUrl: "https://www.linkedin.com/in/saiprasad-ganesan-823933182/" },
  { id: 11, name: "Dr. Masooda Modak", linkedinUrl: "https://www.linkedin.com/in/dr-masooda-modak-264a7695/" },
  { id: 12, name: "Dilmanpreet Singh", linkedinUrl: "https://www.linkedin.com/in/dilmanpreetsingh/", hasImage: true },
  { id: 13, name: "Aravind Acharya", linkedinUrl: "https://www.linkedin.com/in/aravind-acharya-317710129/", hasImage: true },
  { id: 14, name: "Manish Mishra", linkedinUrl: "https://www.linkedin.com/in/manish-mishra-243a2220/", hasImage: true },
  { id: 15, name: "Aniket Rahane", linkedinUrl: "https://www.linkedin.com/in/aniket-rahane-a9327516b/" },
  { id: 16, name: "Sayli Karanjkar", linkedinUrl: "https://www.linkedin.com/in/sayli-karanjkar/" },
  { id: 17, name: "Dr. Namrata Patel", linkedinUrl: "https://www.linkedin.com/in/dr-namrata-patel-99bab4126/" },
  { id: 18, name: "Altamash Qureshi", linkedinUrl: "https://www.linkedin.com/in/altamashq/" },
  { id: 19, name: "Surya Walujkar", linkedinUrl: "https://www.linkedin.com/in/surya-walujkar-002909180/" },
  { id: 20, name: "Omkar Patil", linkedinUrl: "https://www.linkedin.com/in/omkar-patil-5ab62b190/" },
  { id: 21, name: "Aniket Patil", linkedinUrl: "https://www.linkedin.com/in/aniket-patil-76a00377/" },
];

// Proxy services to try
const proxyServices = [
  (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
  (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
];

async function fetchWithProxy(url) {
  for (const proxyFn of proxyServices) {
    try {
      const proxyUrl = proxyFn(url);
      const response = await fetch(proxyUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.contents || data;
      }
    } catch (error) {
      continue;
    }
  }
  return null;
}

function extractImageUrl(html) {
  if (!html) return null;

  // Method 1: Try og:image meta tag
  const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  if (ogImageMatch && ogImageMatch[1]) {
    return ogImageMatch[1];
  }

  // Method 2: Try LinkedIn profile image pattern
  const linkedinImageMatch = html.match(/https:\/\/media\.licdn\.com\/dms\/image\/[^"'\s]+profile-displayphoto[^"'\s]+/i);
  if (linkedinImageMatch && linkedinImageMatch[0]) {
    return linkedinImageMatch[0];
  }

  // Method 3: Try any LinkedIn media image
  const mediaImageMatch = html.match(/https:\/\/media\.licdn\.com\/dms\/image\/[^"'\s]+/i);
  if (mediaImageMatch && mediaImageMatch[0]) {
    return mediaImageMatch[0];
  }

  return null;
}

async function extractImageForTestimonial(testimonial) {
  console.log(`\n[${testimonial.id}] Extracting image for ${testimonial.name}...`);
  console.log(`   URL: ${testimonial.linkedinUrl}`);

  try {
    // Try to fetch profile page
    const html = await fetchWithProxy(testimonial.linkedinUrl);
    
    if (!html) {
      console.log(`   ❌ Could not fetch profile page`);
      return null;
    }

    // Extract image URL
    const imageUrl = extractImageUrl(html);
    
    if (imageUrl) {
      console.log(`   ✅ Found image: ${imageUrl.substring(0, 80)}...`);
      return imageUrl;
    } else {
      console.log(`   ❌ Could not extract image URL from profile`);
      return null;
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log("Starting LinkedIn image extraction...\n");
  console.log("=" .repeat(60));

  const results = [];

  for (const testimonial of testimonials) {
    // Skip if already has image
    if (testimonial.hasImage) {
      console.log(`\n[${testimonial.id}] ${testimonial.name} - Already has image, skipping`);
      continue;
    }

    const imageUrl = await extractImageForTestimonial(testimonial);
    
    results.push({
      id: testimonial.id,
      name: testimonial.name,
      linkedinUrl: testimonial.linkedinUrl,
      imageUrl: imageUrl || "",
    });

    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Output results
  console.log("\n" + "=".repeat(60));
  console.log("\nRESULTS:\n");
  
  const outputFile = path.join(__dirname, 'extracted-images.json');
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`Results saved to: ${outputFile}\n`);

  // Generate code snippet for testimonials.ts
  console.log("Code snippet for testimonials.ts:\n");
  results.forEach(result => {
    if (result.imageUrl) {
      console.log(`// ${result.name} (ID: ${result.id})`);
      console.log(`personAvatar: "${result.imageUrl}",`);
      console.log("");
    }
  });

  const successCount = results.filter(r => r.imageUrl).length;
  console.log(`\n✅ Successfully extracted ${successCount} out of ${results.length} images`);
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { extractImageForTestimonial, extractImageUrl };

