# Haitham Attab — Portfolio

A responsive React portfolio for mobile development work, professional experience, education, and contact details.

## Development

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173/haitham-attab/`).

```sh
npm run lint
npm run build
npm run preview
```

## Updating content

- Edit `src/data/portfolio.js` for projects, work history, skills, and contact links.
- Replace `src/assets/resume-haitham.pdf` to update all résumé downloads.
- The project illustrations are interface concepts, not screenshots of released applications. Their markup lives in `src/components/Projects.jsx`.
- Styles and responsive breakpoints live in `src/index.css`. Animation respects the visitor’s reduced-motion preference.
- Technology logos are bundled SVGs from [Devicon](https://github.com/devicons/devicon). Its MIT license is included in `public/licenses/devicon.txt`.

The site includes technology filters, native project dialogs with Escape dismissal, expandable experience entries, a mobile navigation menu, and email copying with status feedback. Contact actions use email links and do not require a backend.

## Deployment

The Vite base path is `/haitham-attab/` for the existing GitHub Pages repository. `npm run deploy` builds and publishes `dist` using `gh-pages`. Change `base` in `vite.config.js` if hosting at a different path.
