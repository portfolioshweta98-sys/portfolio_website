/**
 * Helper script to download testimonial images
 * 
 * Usage:
 * 1. Update the imageUrls array below with LinkedIn image URLs
 * 2. Run: node scripts/download-testimonial-images.js
 * 3. Images will be saved to public/testimonials/
 * 
 * Note: You may need to manually download some images if LinkedIn blocks direct access
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const testimonialsDir = path.join(__dirname, '../public/testimonials');

// Ensure directory exists
if (!fs.existsSync(testimonialsDir)) {
  fs.mkdirSync(testimonialsDir, { recursive: true });
}

// Map of testimonial ID to image URL and name
const imageUrls = [
  { id: 1, name: 'manish-mishra', url: 'https://media.licdn.com/dms/image/v2/D4D03AQHtCA8UC2OWfA/profile-displayphoto-scale_100_100/B4DZjirTCmHsAs-/0/1756149661161?e=1762387200&v=beta&t=qyrWFu8WG18dUfGjqxMNbrW28Trq1uHHZPpvSpWU3IE' },
  { id: 2, name: 'kaleemullah-shaikh', url: '' }, // Empty - needs manual download
  { id: 3, name: 'sumitra-iyer', url: 'https://media.licdn.com/dms/image/v2/D4D03AQHRlsyB0M2xQw/profile-displayphoto-crop_800_800/B4DZlHOKzCIgAI-/0/1757836522635?e=1761177600&v=beta&t=T8gMa4yJdRJH_3PhDG22jvKTZOzdiWvRP3ysQyKE6Ds' },
  // Add more as needed
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    if (!url || url.trim() === '') {
      console.log(`⚠️  Skipping empty URL for ${filepath}`);
      resolve(false);
      return;
    }

    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${filepath}`);
          resolve(true);
        });
      } else {
        console.log(`❌ Failed to download ${url}: Status ${response.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`❌ Error downloading ${url}: ${err.message}`);
      resolve(false);
    });
  });
}

async function downloadAll() {
  console.log('Starting image downloads...\n');
  
  for (const item of imageUrls) {
    const filename = `testimonial-${item.id}-${item.name}.jpg`;
    const filepath = path.join(testimonialsDir, filename);
    
    if (item.url) {
      await downloadImage(item.url, filepath);
    } else {
      console.log(`⚠️  No URL for ${filename} - please download manually`);
    }
  }
  
  console.log('\n✅ Download process complete!');
  console.log('Note: Some images may need to be downloaded manually from LinkedIn.');
}

downloadAll();

