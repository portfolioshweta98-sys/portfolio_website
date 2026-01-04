# Testimonial Images

Place testimonial avatar images in this folder.

## Naming Convention

Use the format: `testimonial-{id}-{name-slug}.jpg` or `.png`

Examples:
- `testimonial-1-manish-mishra.jpg`
- `testimonial-2-kaleemullah-shaikh.jpg`
- `testimonial-3-sumitra-iyer.jpg`

## How to Update

1. Download the person's profile image from LinkedIn
2. Save it in this folder with the naming convention above
3. Update `data/testimonials.ts` to use the local path:
   ```typescript
   personAvatar: "/testimonials/testimonial-1-manish-mishra.jpg"
   ```

## Benefits of Local Images

- ✅ Always loads reliably
- ✅ No CORS issues
- ✅ Faster loading (served from your domain)
- ✅ Works offline
- ✅ No dependency on LinkedIn URLs

