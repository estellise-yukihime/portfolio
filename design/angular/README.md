# Maya Chen — Portfolio (Angular + TailwindCSS)

A single-profile personal portfolio, ported from the original HTML design to
**Angular 17 (standalone components)** styled with **TailwindCSS**. The dark
theme, type system (Space Grotesk / IBM Plex Sans / IBM Plex Mono), accent
colors, and scroll-reveal animations from the original are all preserved.

## Requirements

- Node.js 18.19+ (or 20+)
- npm 9+

## Getting started

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/portfolio
```

> This package ships source only — run `npm install` to pull Angular, the CLI,
> and Tailwind before the first build.

## Routes

Matches the original design plan exactly:

| Path                                        | Page             |
| ------------------------------------------- | ---------------- |
| `/`                                         | Home             |
| `/profiles/:profileId`                      | Profile overview |
| `/profiles/:profileId/projects`             | Career & projects|
| `/profiles/:profileId/articles`             | Article listing  |
| `/profiles/:profileId/articles/:articleId`  | Article detail   |

Because this site serves a single person, `:profileId` is informational — every
profile route resolves to the one profile in the data file. `/profiles` redirects
to the default profile, and unknown paths redirect home.

## Project structure

```
src/
  index.html            Font links + <app-root>
  styles.css            Tailwind entry, base + .prose article styles, reveal rule
  main.ts               bootstrapApplication(AppComponent)
  app/
    app.config.ts       Router provider (scroll restoration)
    app.routes.ts       Lazy-loaded route table (the spec above)
    app.component.ts    <router-outlet>
    data/
      portfolio.ts      ► ALL CONTENT LIVES HERE — model + placeholder data
    shared/
      nav.component.ts       Sticky top nav
      footer.component.ts    Footer
      reveal.directive.ts    [appReveal] scroll-in animation
    pages/
      home.component.ts
      profile.component.ts
      projects.component.ts
      articles.component.ts
      article.component.ts
```

## Editing content

Everything the site renders comes from `src/app/data/portfolio.ts` — swap in real
copy there, or replace `getProfile` / `getArticle` with calls to your own API/CMS.

- **Images** are placeholder slots (captioned diagonal-stripe boxes). Drop real
  files in `src/assets/` and replace the `images: [...]` caption strings and the
  profile portrait with `<img>` tags / URLs.
- **Résumé & social links** point at `#` — set real URLs in the `profile` object.

## Theme

The daisyUI "dark" palette is encoded as Tailwind theme colors in
`tailwind.config.js` using the `<alpha-value>` placeholder, so opacity utilities
work as expected:

- `bg-base-100` (page) · `bg-base-200` (cards) · `bg-base-300` (chips)
- `text-content` · `text-muted` · `text-faint`
- `text-primary` (indigo) · `text-secondary` (pink) · `text-accent` (teal),
  each usable with an alpha, e.g. `bg-primary/15`.

Fonts are loaded from Google Fonts in `index.html` and mapped to
`font-display` / `font-sans` / `font-mono`.
