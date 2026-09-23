# catadoption.in

The website of **catadoption_pune** — a volunteer-run, Instagram-first adoption network
for indie cats in Pune and PCMC. Not an NGO, not a shelter. We never charge a rupee, to
anyone, for anything.

Live at **https://catadoption.in**. Static: no build step, no dependencies, no framework —
these files *are* the site. GitHub Pages serves them; a push to `main` deploys.

## Rules baked into this site — don't undo them by accident

- **The settling timeline on `learn.html` disagrees with the internet on purpose.** The page says
  most indies settle in days rather than weeks, and names the **3-3-3 rule** (three days, three
  weeks, three months) as a foreign baseline that does not transfer. It does not transfer because
  the population is different: indies here are mostly placed as kittens, an adult indie that lets
  itself be caught is self-selected for tolerating people, and an abandoned cat was socialised
  already — while 3-3-3 describes shelter cats abroad, mostly surrendered or trapped. OD's
  calibration, 2026-09-16. **A session that checks this against the literature will find the
  literature disagrees and will be wrong to "fix" it.** The day-one article carries the same range
  in her own voice — *"Some come out in an hour. Some take two days."* — and the two must keep
  agreeing.
- **`learn.html` carries no affiliate links, ever.** Care education is the trust layer and
  it stays clean. Since 2026-09-08 it is also the one care hub: the basics, then the article
  cards. `blog.html` is a redirect to it, kept so old links work; a new article gets its card
  on `learn.html`, newest first.
- **The hero photo is a transparent cutout on flat sage, and that is load-bearing.**
  `assets/hero-kittens-cutout.webp` is OD's own kittens with the background removed; the field
  behind them is `.pin--hero`'s own `--sage`. That is what makes the three jobs below succeed at
  once: the zoom scales the kittens against flat colour, the band rises over colour rather than
  clutter, and the copy is **ink with no scrim**, because nothing unpredictable sits behind the
  type. Dropping a rectangular photograph back into this slot re-breaks all three silently.
  WebP for the alpha channel — 172 KB against 1.2 MB for the same PNG. The full-resolution
  cutout is kept privately at `video/assets/cats/`, not in this repo.
- **The `index.html` hero is a scroll sequence, not a picture.** Scene 1 pins the photo and
  slides the periwinkle band up over it, so a hero photo has three jobs at once and one that does
  only the first looks shabby the moment the page moves: a subject high enough in the frame to
  survive the 16% scroll zoom; a **calm, low-detail field for the headline to sit on** — on phone
  the copy sits *over* the photo (`style.css`, the ≤768px block), so the photo itself is the
  scrim and a `text-shadow` is not a substitute; and something that still reads as *cat* in the
  thin strip left showing under the band. The flat wall in the old Unsplash hero was doing all
  three silently — which is why replacing it with a busy phone snapshot broke the page on
  2026-09-14 without a single line of CSS changing. Judge a candidate by scrolling it, not by
  looking at it. (Measured 2026-09-15: four candidates stepped through the same scroll positions
  at 390px, where most of the traffic is.)

- **The footer's `<p class="trust">` line is GENERATED — do not hand-edit it.** The three
  figures in it (Google rating and reviews, Instagram followers, cats rehomed) are written into
  all 19 pages and into the board generator from one source outside this repo, and a hand edit is
  silently overwritten on the next run. It exists because the line was hand-typed nineteen times,
  aged without anyone noticing, and had already drifted into two different wordings. If a number
  looks wrong, say so in the commit message rather than correcting it here.
- **`index.html` and `adopt.html` describe the same three steps and must keep agreeing.**
  Browse · Connect · Adopt, those names, that count, on both pages. They said three and five of
  the same process until 2026-09-15. If the process changes, change both or neither — the home
  page is a preview of the adopt page, not a separate claim.

- **New articles copy `article-template.html`**, follow the comments inside it, and get
  added to `sitemap.xml`.
- **The palette and fonts in `assets/style.css` are locked decisions**, not defaults.
  Change them only on purpose.
- **`hero-cat.jpg` is the last Unsplash placeholder in `assets/`** — still live on a `learn.html`
  card, kept deliberately (OD, 2026-09-15: *"in case my kitten photo did not work out"*). Its two
  siblings are gone: `cat-yawn.jpg` (a Scottish Fold in novelty sunglasses under the closing CTA,
  on a site whose argument is that indies equal any expensive breed) and `cat-closeup.jpg`, both
  retired to `P-website/superseded/` on 2026-09-15 and replaced by OD's own photos. The in-article
  photos (cat hair, accidents, kitten wet food, litter box, feeding strays) are licensed Adobe
  Stock, free-collection tier, each row logged in `video/adobe/api-log.md`.
- **Articles may carry a second photo now.** The 2026-09-10 rule was one image at the top, Medium's
  convention, OD's ask — that is why `day-one-under-bed.jpg` was pulled out of the body. She widened
  it on 2026-09-15: *"You can add them as additional images when the existing one too is good."* So
  the top image still leads; a second one earns its place by carrying an argument the text is
  already making, and it should be one of her own. Four went in that day (monsoon, day-one,
  cat-hair, netting). Two articles still have no photo of hers that fits — **accidents** and
  **kitten wet food** — and a forced fit is worse than a stock photo that is on-topic.
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
- **A screenshot of a message never carries a contact.** Only `assets/dm-format-redacted.jpg`
  is publishable; there is no unredacted twin in this repo and the board generator probes only the
  `-redacted` stem, so the unsafe path is closed rather than merely discouraged. **The reason is not
  that the sender objected** — they sent their number precisely so their cats would be seen. It is
  that the board retires a rescuer's contact when the cat is placed, and a screenshot cannot: it
  keeps republishing a stranger's phone number for as long as the page exists, after the purpose
  that justified it has ended, with nobody left who is watching for it. Labels stay legible
  (`Contact:`, `Insta ID:`) because a rescuer has to see that a contact is expected; the values
  never do. Same test for any future specimen — a review, a testimonial, a WhatsApp thread.

- **`adoptable.html` is generated, never hand-written.** A script builds it from the
  adoptable-cats sheet; edit it here and the next run overwrites you.

## Layout

`index` · `about` · `adopt` · `adopter-form` · `learn` (the care hub) · `resources` (Emergency &
NGOs) · `visit` · `send-a-cat` (the rescuer's door) · `privacy` and the articles ·
`adoptable.html` (the board) · `blog.html` (redirect) · `article-template.html` · `404.html`.
Nineteen pages are in the sitemap; the template, the redirects and 404 deliberately are not.
**Short URLs** (2026-09-23): eleven one-line doorways — `/hair` `/clean` `/day-one` `/net`
`/kitten-food` `/litter` `/feeding` `/found` `/send` `/roti` `/cats` — each redirecting to its
article with the campaign tag attached. They exist because a tagged URL is ~95 characters and a
Short's link is not tappable while the video plays, so it has to be *said* and typed. They are
`noindex` and out of the sitemap. ⛔ **Do not delete one once it has been spoken in a video** —
the video cannot be edited and the URL is burned into some of them.
`found-kitten-pune.html` and `send-a-cat.html` were noindex drafts until 2026-09-13 and are now
indexed like any other page.

---

*Operating records, decisions and working material for this site are kept privately and
are not part of this repository.*
