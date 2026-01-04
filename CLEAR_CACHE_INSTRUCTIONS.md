# How to Fix Browser Caching Issue

## Quick Fix (For You):
1. **Hard Refresh** your browser:
   - **Chrome/Edge (Windows/Linux):** `Ctrl + Shift + R` or `Ctrl + F5`
   - **Chrome/Edge (Mac):** `Cmd + Shift + R`
   - **Firefox:** `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
   - **Safari:** `Cmd + Option + R`

2. **Clear Browser Cache:**
   - **Chrome:** Settings → Privacy and Security → Clear browsing data → Cached images and files
   - **Firefox:** Settings → Privacy & Security → Clear Data → Cached Web Content
   - **Safari:** Develop → Empty Caches (enable Develop menu first)

3. **Clear Site Data:**
   - Open DevTools (F12)
   - Application tab → Storage → Clear site data

## For Your Visitors:
The Netlify configuration has been updated to prevent aggressive caching. After the next deployment, visitors should see the latest version.

## Why This Happens:
- Browsers cache HTML/CSS/JS files for faster loading
- Netlify also caches static assets
- Incognito mode doesn't use cache, so it shows the latest version

## After Next Deployment:
The cache headers will ensure fresh content is served, but existing visitors may still need to hard refresh once.
