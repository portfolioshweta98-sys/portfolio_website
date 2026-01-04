# Manual LinkedIn Image Extraction Guide

LinkedIn blocks automated scraping, so we need to manually get the image URLs. Here's how:

## Method 1: Copy Image URL from LinkedIn (Easiest)

1. Go to the person's LinkedIn profile
2. **Right-click** on their profile picture
3. Select **"Copy image address"** or **"Copy image URL"**
4. Paste the URL into `data/testimonials.ts` in the `personAvatar` field

The URL will look like:
```
https://media.licdn.com/dms/image/v2/D4D03AQHtCA8UC2OWfA/profile-displayphoto-scale_100_100/B4DZjirTCmHsAs-/0/1756149661161?e=1762387200&v=beta&t=qyrWFu8WG18dUfGjqxMNbrW28Trq1uHHZPpvSpWU3IE
```

## Method 2: Browser Developer Tools

1. Go to the person's LinkedIn profile
2. Open Developer Tools (F12 or Right-click → Inspect)
3. Go to the **Network** tab
4. Refresh the page
5. Filter by **"Img"** or search for **"profile-displayphoto"**
6. Find the image request and copy its URL

## Testimonials Needing Images

Based on the data, these testimonials have empty `personAvatar` fields:

- [ ] ID 2: Kaleemullah Shaikh - https://www.linkedin.com/in/kaleemullah-shaikh-846772109/
- [ ] ID 7: Ansh Harjai - https://www.linkedin.com/in/ansh-harjai-7a422b245/
- [ ] ID 8: Omkar Warade - https://www.linkedin.com/in/omkar-warade-a721b7163/
- [ ] ID 9: Vrunda Mange - https://www.linkedin.com/in/vrunda-mange/
- [ ] ID 10: Saiprasad Ganesan - https://www.linkedin.com/in/saiprasad-ganesan-823933182/
- [ ] ID 11: Dr. Masooda Modak - https://www.linkedin.com/in/dr-masooda-modak-264a7695/
- [ ] ID 15: Aniket Rahane - https://www.linkedin.com/in/aniket-rahane-a9327516b/
- [ ] ID 16: Sayli Karanjkar - https://www.linkedin.com/in/sayli-karanjkar/
- [ ] ID 17: Dr. Namrata Patel - https://www.linkedin.com/in/dr-namrata-patel-99bab4126/
- [ ] ID 18: Altamash Qureshi - https://www.linkedin.com/in/altamashq/
- [ ] ID 19: Surya Walujkar - https://www.linkedin.com/in/surya-walujkar-002909180/
- [ ] ID 20: Omkar Patil - https://www.linkedin.com/in/omkar-patil-5ab62b190/
- [ ] ID 21: Aniket Patil - https://www.linkedin.com/in/aniket-patil-76a00377/

## Why Automated Extraction Doesn't Work

LinkedIn has strong anti-scraping measures:
- Requires authentication to view full profile pages
- Blocks proxy services
- Uses JavaScript to load content dynamically
- Has rate limiting and bot detection

## Current Solution

The Avatar component now:
1. ✅ Tries to load the LinkedIn image URL directly
2. ✅ Falls back to proxy API if direct fails
3. ✅ Shows person's **initials** if image fails (e.g., "KS" for "Kaleemullah Shaikh")
4. ✅ Shows generic user icon as last resort

This provides a good user experience even without images!

