# Manual LinkedIn Image Extraction Guide

Since LinkedIn requires authentication to view profile pages, automated extraction may not work. Use this guide to manually extract image URLs.

## How to Get Profile Image URLs

1. **Open the LinkedIn profile** in your browser (while logged in)
2. **Right-click on the profile picture**
3. **Select "Copy image address"** or "Copy image URL"
4. **Paste the URL** - it will look like:
   ```
   https://media.licdn.com/dms/image/v2/D4D03AQH.../profile-displayphoto-shrink_200_200/...
   ```

## How to Get Company Logo URLs

1. **Go to the company's LinkedIn page** (e.g., `linkedin.com/company/servify`)
2. **Right-click on the company logo**
3. **Select "Copy image address"**
4. **Paste the URL** - it will look like:
   ```
   https://media.licdn.com/dms/image/v2/D4D0BAQ.../company-logo_200_200/...
   ```

## Testimonials Needing Images

Based on the script output, these testimonials need images:

### ID 11: Dr. Masooda Modak
- LinkedIn: https://www.linkedin.com/in/dr-masooda-modak-264a7695/
- Company: MPSTME-NMIMS
- **Action**: Get profile image URL

### ID 14: Manish Mishra
- LinkedIn: https://www.linkedin.com/in/manish-mishra-243a2220/
- Company: GEP Worldwide (logo exists)
- **Action**: Get profile image URL

### ID 15: Aniket Rahane
- LinkedIn: https://www.linkedin.com/in/aniket-rahane-a9327516b/
- Company: GEP Worldwide (logo exists)
- **Action**: Get profile image URL

### ID 16: Sayli Karanjkar
- LinkedIn: https://www.linkedin.com/in/sayli-karanjkar/
- Company: GEP Worldwide (logo exists)
- **Action**: Get profile image URL

### ID 17: Dr. Namrata Patel
- LinkedIn: https://www.linkedin.com/in/dr-namrata-patel-99bab4126/
- Company: South Indian Education Society Graduate School Of Technology
- **Action**: Get profile image URL and company logo URL

### ID 18: Altamash Qureshi
- LinkedIn: https://www.linkedin.com/in/altamashq/
- Company: GEP Worldwide (logo exists)
- **Action**: Get profile image URL

### ID 19: Surya Walujkar
- LinkedIn: https://www.linkedin.com/in/surya-walujkar-002909180/
- Company: Servify
- **Action**: Get profile image URL and company logo URL

### ID 20: Omkar Patil
- LinkedIn: https://www.linkedin.com/in/omkar-patil-5ab62b190/
- Company: Fractal
- **Action**: Get profile image URL and company logo URL

### ID 21: Aniket Patil
- LinkedIn: https://www.linkedin.com/in/aniket-patil-76a00377/
- Company: GEP Worldwide (logo exists)
- **Action**: Get profile image URL

## Quick Copy-Paste Format

Once you have the URLs, you can update the testimonials file directly:

```typescript
{
  id: 14,
  personAvatar: "PASTE_PROFILE_IMAGE_URL_HERE",
  companyUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
  // ... rest of testimonial
}
```

## Alternative: Browser Extension

You can also use a browser extension like "Image URL Copier" to quickly get image URLs from LinkedIn profiles.

