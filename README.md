# Unily – Landing Page

A Next.js 14 landing page for Unily, the college super-app.

## Project Structure

```
unily/
├── app/
│   ├── globals.css       # Global styles & CSS variables
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (assembles all components)
├── components/
│   ├── Blobs.tsx         # Animated background blobs
│   ├── Navbar.tsx        # Sticky top navigation
│   ├── Hero.tsx          # Hero section with CTA
│   ├── Features.tsx      # 3 feature cards
│   ├── HowItWorks.tsx    # 3-step explainer
│   ├── CTAStrip.tsx      # Bottom waitlist CTA
│   └── Footer.tsx        # Site footer
├── package.json
├── next.config.js
└── tsconfig.json
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the dev server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

## Build for Production

```bash
npm run build
npm run start
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS-in-JS (inline styles + style tags per component)
- **Fonts**: Syne (display) + DM Sans (body) via Google Fonts

## Customisation Tips

- Colors are in `app/globals.css` under `:root` — change `--accent1`, `--accent2` etc. to retheme
- Waitlist buttons are non-functional by design — wire them up to a form/API when ready
- Each section is its own component — easy to reorder or extend
