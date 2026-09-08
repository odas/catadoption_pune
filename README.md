# catadoption.in

The website of **catadoption_pune** — a volunteer-run, Instagram-first adoption network
for indie cats in Pune and PCMC. Not an NGO, not a shelter. We never charge a rupee, to
anyone, for anything.

Live at **https://catadoption.in**. Static: no build step, no dependencies, no framework —
these files *are* the site. GitHub Pages serves them; a push to `main` deploys.

## Rules baked into this site — don't undo them by accident

- **`learn.html` carries no affiliate links, ever.** Care education is the trust layer and
  it stays clean. Since 2026-09-08 it is also the one care hub: the basics, then the article
  cards. `blog.html` is a redirect to it, kept so old links work; a new article gets its card
  on `learn.html`, newest first.
- **New articles copy `article-template.html`**, follow the comments inside it, and get
  added to `sitemap.xml`.
- **The palette and fonts in `assets/style.css` are locked decisions**, not defaults.
  Change them only on purpose.
- **The three cat photos in `assets/` are Unsplash placeholders** awaiting real,
  brand-graded photos.
- **`adoptable.html` is generated, never hand-written.** A script builds it from the
  adoptable-cats sheet; edit it here and the next run overwrites you.

## Layout

`index` · `about` · `adopt` · `adopter-form` · `learn` (the care hub) · `resources` (Emergency &
NGOs) · `visit` · `privacy` and the articles · `adoptable.html` (the board) · `blog.html`
(redirect) · `article-template.html` · `404.html`.
Fourteen pages are in the sitemap; the template, the redirect and 404 deliberately are not.

---

*Operating records, decisions and working material for this site are kept privately and
are not part of this repository.*
