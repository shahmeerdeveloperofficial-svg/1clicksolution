# 1 Click Solution: marketing website

React + Vite, centralized CSS (`src/styles.css`), static prerendering for SEO.

## Run locally

```bash
npm install
npm run dev        # live preview at http://localhost:5173
npm run build      # production build + static prerender into dist/
npm run preview    # serve the built dist/ folder locally
```

Nothing is published or deployed by this project.

## Where to edit

| What | File |
| --- | --- |
| Contact details (placeholders), module list, module status, gallery, benefits | `src/data/site.js` |
| Colors, spacing, typography | `:root` tokens at the top of `src/styles.css` |
| Screenshots | `src/assets/screens/` (keep the same file names, or update imports in `site.js`) |

### Module status
Each module in `site.js` has `status: 'available'` or `'upcoming'`. Upcoming modules show an
"Upcoming" badge. Only mark a module available once it is implemented in the CMS.

### Phone mockup
`src/assets/screens/phone.webp` is currently a crop of the real CMS sidebar (mobile-menu style).
Replace it with a real mobile screenshot (about 9:19.5) when you have one.

### Contact form
The form posts JSON to `VITE_FORM_ENDPOINT`. Copy `.env.example` to `.env`, set the endpoint
(Formspree, Getform, Basin, or your own Laravel route) and rebuild. Until it is set, the form tells
visitors honestly that the message was not sent. Replace the placeholder email, phone and address.
