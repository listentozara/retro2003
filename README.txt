ZARA WEBSITE — HOSTINGER UPLOAD

FILES
index.html
styles.css
script.js
assets/hero-desktop.jpg
assets/hero-mobile.jpg
assets/zara-logo-white.png
fonts/ (optional licensed Dustnote Scribble webfont)

BEFORE LAUNCH
1. YouTube: when you have the channel URL, edit index.html. Replace the disabled YouTube <span> with an <a href="YOUR-YOUTUBE-URL" ...> using the same SVG, or ask a developer to do it.
2. Dustnote Scribble: this package does NOT include the commercial font file. Purchase a Webfont license, put the supplied WOFF2 file at fonts/DustnoteScribble.woff2, then uncomment the @font-face block at the top of styles.css. Until then the site uses a handwriting fallback.

HOSTINGER — PUBLISH
1. Sign in to Hostinger hPanel.
2. Open Websites > Manage for your domain.
3. Open File Manager and enter public_html.
4. Remove/rename the default index file if Hostinger created one.
5. Upload the CONTENTS of this package (index.html, styles.css, script.js, assets folder, fonts folder) directly into public_html. Do not leave everything one folder deeper.
6. Confirm public_html/index.html exists.
7. Open your domain in a private/incognito tab and test desktop + mobile, logo click, close button, Instagram/TikTok/SoundCloud.
8. In hPanel, enable SSL/HTTPS for the domain if it is not already active. Hostinger commonly provisions SSL automatically after the domain points to the hosting account.
9. If your domain is registered elsewhere, point it to Hostinger using the nameservers/DNS values shown in hPanel, then allow DNS propagation time.
10. Clear Hostinger/browser cache after future updates if an old version appears.

DESIGN NOTES
- Desktop uses a generated full-width extension of the supplied portrait: the original image remains centered while a softened, darker extension fills the sides.
- Mobile uses the original portrait for maximum image detail.
- Clicking the ZARA logo triggers a brief VHS/RGB bloom, then opens a glass-blurred overlay with the bio text “Since 2023”.
- Social icons are inline SVG and require no external library.
