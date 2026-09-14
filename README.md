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
- **`cat-closeup.jpg` and `cat-yawn.jpg` in `assets/` are still Unsplash placeholders**
  awaiting real, brand-graded photos. **`hero-cat.jpg` was replaced 2026-09-14** with
  `assets/ginger-white-cat-tree-skyline.jpg` — one of OD's own cats, from her phone dump
  in `video/assets/cats/originals/` (that folder's `README.md` has the full set, now all
  descriptively named). The in-article photos (day-one, cat hair, accidents,
  kitten wet food, litter box, feeding strays) are licensed Adobe Stock, free-collection tier,
  each row logged in `video/adobe/api-log.md`; several are still waiting on OD's own phone
  shots to replace them (noted in each page's head comment).
- **`assets/day-one-checklist.mp4` is silent on purpose.** It is the day-one page's hero, cut from the
  channel's Short; the Short's music is licensed for YouTube only, so the site's copy carries none.
- **The drawings are a system, not decoration.** `assets/style.css` § THE SKETCHBOOK LAYER holds
  the ladder, the card deck and the line-art rules (ink strokes, no fill, red used only for
  prohibition), added 2026-09-12 so a page can be understood before it is read. Colour carries
  meaning there — periwinkle the situation, yellow act now, sage safe, sky wait and watch, butter
  the free version — so don't recolour a block for looks. Words inside a diagram stay live text,
  never drawn, so they can be selected, translated and found by search. `found-kitten-pune.html`
  is the first page built this way and `assets/found-kitten-card.svg` its drawn card image;
  `send-a-cat.html` is the second, with `assets/send-a-cat-card.svg`. Six of its nine panel
  drawings are reused from the found-kitten set unchanged — the set is meant to be composed
  from, not redrawn per page.
- **`adoptable.html` is generated, never hand-written.** A script builds it from the
  adoptable-cats sheet; edit it here and the next run overwrites you.

## Layout

`index` · `about` · `adopt` · `adopter-form` · `learn` (the care hub) · `resources` (Emergency &
NGOs) · `visit` · `send-a-cat` (the rescuer's door) · `privacy` and the articles ·
`adoptable.html` (the board) · `blog.html` (redirect) · `article-template.html` · `404.html`.
Eighteen pages are in the sitemap; the template, the redirect and 404 deliberately are not.
`found-kitten-pune.html` and `send-a-cat.html` were noindex drafts until 2026-09-13 and are now
indexed like any other page.

---

*Operating records, decisions and working material for this site are kept privately and
are not part of this repository.*
