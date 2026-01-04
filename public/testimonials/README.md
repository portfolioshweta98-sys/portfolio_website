# Testimonial Images

**⚠️ IMPORTANT: Privacy & Copyright Notice**

**Do NOT save people's images without explicit permission.**

## Recommended Approach

**Use LinkedIn URLs directly** (current approach):
- ✅ Respects privacy and copyright
- ✅ Images remain on LinkedIn's servers
- ✅ No legal issues
- ✅ Always up-to-date if person changes their photo

The current setup uses LinkedIn URLs which is the ethical and legal approach.

## Alternative: Initials-Based Avatars

If images don't load, the component will automatically show:
- Person's initials (e.g., "MS" for "Manish Mishra")
- Generic user icon as fallback

This respects privacy while still providing visual identification.

## If You Need Local Images

**Only use local images if:**
1. ✅ You have **explicit written permission** from the person
2. ✅ The person has provided the image themselves
3. ✅ You have proper licensing/rights

**Naming Convention** (if you have permission):
- `testimonial-{id}-{name-slug}.jpg` or `.png`
- Example: `testimonial-1-manish-mishra.jpg`

**Update `data/testimonials.ts`:**
```typescript
personAvatar: "/testimonials/testimonial-1-manish-mishra.jpg"
```

## Current Best Practice

**Keep using LinkedIn URLs** - This is the recommended approach that respects privacy and copyright.

