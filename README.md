# catadoption.in

The website of **catadoption_pune** — a volunteer-run, Instagram-first adoption network
for indie cats in Pune and PCMC. Not an NGO, not a shelter. Adoption is free — a cat is not a
commodity.

Live at **https://catadoption.in**. Static: no build step, no dependencies, no framework —
these files *are* the site. GitHub Pages serves them; a push to `main` deploys.

## Rules baked into this site — don't undo them by accident

- **A comment is public, in a page, the stylesheet, the script or a drawing.** Anyone can read it in the page source or in this repo. Keep
  each one short and about the code beside it: a label on a drawing, or a line that stops a
  well-meaning edit. A page's history, the reasons behind it and the owner's own words are kept
  privately, outside this repo. Commit messages are public too: say what changed and why, without
  quoting her.
- **The emergency page (`resources.html`) lists only numbers each NGO publishes itself,** checked against
  their own websites, and no one's personal number, even when their own organisation publishes it: a personal
  number on a public page gets swamped, and the cases that were screened stop getting through. Re-check a number
  before adding or changing it. The line about a hurt cat says honestly that help is thin and many numbers may not
  ring; keep it honest when editing, and don't turn it into a promise that someone will come.
- **Fonts come from this site, not from Google** (`assets/fonts/`, the `@font-face` block at the top of
  `assets/style.css`, licence in `assets/fonts/OFL.txt`). Every page preloads Hind 400 and Martel 700. Don't
  add a `fonts.googleapis.com` link back: it slowed every page and sent each visitor's address to Google.
  A new weight means downloading its files the same way, not linking Google for it.
- **Every photo carries its real `width` and `height`**, so the page keeps the space while the photo loads
  and the text doesn't jump. A photo on the first phone screen loads straight away (no `loading="lazy"`);
  photos further down wait for the scroll. The home page's kitten photo also carries `fetchpriority="high"`.
- **No page promises how long an adoption takes.** It can be a week, a month, or no calls at all, so the pages say
  there's no telling, and that kittens of 1½ to 3 months have the best chance. Don't add "about a month" back to be
  helpful: a rescuer plans around a number. The warning stays: someone who needs the cat gone by a date is told this
  is not the route. (`send-a-cat.html` panel 06 and its card, `resources.html`, the `learn.html` card; 2026-09-27.)
- **The settling timeline on `learn.html` disagrees with the internet on purpose.** The page says
  most indies settle in days rather than weeks, and names the **3-3-3 rule** (three days, three
  weeks, three months) as a foreign baseline that does not transfer. It does not transfer because
  the population is different: indies here are mostly placed as kittens, an adult indie that lets
  itself be caught is self-selected for tolerating people, and an abandoned cat was socialised
  already — while 3-3-3 describes shelter cats abroad, mostly surrendered or trapped. The owner's
  calibration, 2026-09-16. **A session that checks this against the literature will find the
  literature disagrees and will be wrong to "fix" it.** The day-one article carries the same range
  in her own voice — *"Some come out in an hour. Some take two days."* — and the two must keep
  agreeing.
- **`learn.html` carries no affiliate links, ever.** Care education is the trust layer and
  it stays clean. Since 2026-09-08 it is also the one care hub: the basics, then the article
  cards. `blog.html` is a redirect to it, kept so old links work; a new article gets its card
  on `learn.html`, newest first.
- **The hero photo is a transparent cutout on flat sage, and that is load-bearing.**
  `assets/hero-kittens-tree.webp` (and `-800` for phones) is the owner's own kittens cut out **with the
  cat-tree bowl they sit in**, the bowl bleeding off the bottom edge. The 09-15 cut-out without the
  bowl made them float, so keep the bowl in any recut. The field
  behind them is `.pin--hero`'s own `--sage`. That is what makes the three jobs below succeed at
  once: the zoom scales the kittens against flat colour, the band rises over colour rather than
  clutter, and the copy is **ink with no scrim**, because nothing unpredictable sits behind the
  type. Dropping a rectangular photograph back into this slot re-breaks all three silently.
  WebP for the alpha channel: 69 KB for phones, 127 KB for desktop. The source photo is kept privately
  with the owner's originals, not in this repo. **On a phone the hero doesn't pin** and the band
  follows it rather than sliding over it (2026-09-26): the phone band is taller than the space
  above the kittens, so it always came to rest over their faces. Desktop keeps the slide. **On a phone the
  hero is a column, the copy and then the kittens under it** (2026-10-02): the photo takes the height the copy
  leaves, so a longer headline or sub-line can never run across their ears, and the scroll zoom grows from the
  photo's top edge for the same reason. Don't tie the photo's height back to the screen's.
- **On the home page, every pinned scene fills the whole screen on a phone** (`.pin`, `100lvh`). At 72% the page's white showed
  below the photo while the spacers scrolled past, which were the "white strips" several sessions chased.
- **Below the hero the home page has one more scene, and it follows the template the site began from** (2026-10-02): one
  whole cat on flat yellow, the only thing that moves, with a small panel crossing it. The cat is a cut-out made from
  the full-size original, with its shadow in the file; its left end is where the photo cut the tail, so it runs off
  the left edge. Two things were tried here and taken out, so don't bring them back: a cut-out blown up past its own
  pixels with a straight cut where the photo ended, and a photograph faded into a colour field. A cat cut out from
  above with nothing under it reads as falling. The closing section is colour and words, then three tiles: Instagram
  and two videos, each a still kept on this site with a link out, never an embed.
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
  every page that carries it and into the board generator from one source outside this repo, and a hand edit is
  silently overwritten on the next run. It exists because the line was hand-typed nineteen times,
  aged without anyone noticing, and had already drifted into two different wordings. If a number
  looks wrong, say so in the commit message rather than correcting it here.
- **How the site is paid for is said in one place, `about.html#paid-for`**, which the footer links
  to. The one-sentence ask sits only after the affiliate disclosure, on pages that already carry
  links. Neither goes on the board or the emergency page: next to a cat, it could read as paying
  for the cat, and adoption here is free.
- **`shop.html` is Amazon only, and every card carries the free or cheaper version.** One card per product the
  guides already link, in her words from that guide, with the free version on butter (the sketchbook layer's
  colour for it), one tagged Amazon link (`aff/shop/<merchant-item>`), and a link back to the guide; each guide's
  "Also on this site" box links to the shop. The Cuelinks links stay on their articles. A card with no guide yet
  is allowed for the bigger buys, until their guide exists; the scratcher pack's card links to the day-one guide,
  which names a cardboard scratcher without linking one (owner's call, 2026-09-28). The nav carries "Shop" on every page
  except `resources.html` (owner's call, 2026-09-26; the emergency page keeps nothing about money, as with
  the footer's paid-for link), placed after Emergency so the phone's one-row menu still shows Emergency
  without a swipe. A video's end card will say `catadoption.in/shop`,
  so the path stays once that video is up.
- **`index.html` and `adopt.html` describe the same three steps and must keep agreeing.**
  Browse · Connect · Adopt, those names, that count, on both pages. They said three and five of
  the same process until 2026-09-15. If the process changes, change both or neither — the home
  page is a preview of the adopt page, not a separate claim.
  Since 2026-09-26 the home page draws them. Two drawings come first (no shelter, a rescuer's home): they are the
  reason the steps exist, not steps, so since 2026-10-02 they sit apart with one sentence and carry no number and no
  title. Then the three steps with those names.

- **New articles copy `article-template.html`**, follow the comments inside it, and get
  added to `sitemap.xml`.
- **Each guide shares with its own picture**, `assets/share/<page>.jpg`: 1200×630, its top photo or drawn card, its
  heading, and `catadoption.in` beside `@catadoption_pune`. A script kept outside this repo makes them, so a changed
  heading means remaking the card. Keep each under 300 KB, because WhatsApp shows only a small thumbnail above that.
  The medallion stays the picture for the other pages.
- **A guide's "Updated" date is its `sitemap.xml` `lastmod`**, shown in the byline and repeated as `dateModified` in the
  page's `Article` markup, because Google asks for the markup to match what the page shows. Move all three together, and
  only when the content changes, never to make a page look fresh. The byline's name links to `about.html`.
- **The palette and fonts in `assets/style.css` are locked decisions**, not defaults.
  Change them only on purpose.
- **How they are used is set by the tokens at the top of `assets/style.css`**: type sizes `--s-2` to `--s5`, the radii,
  the ink edge (`--edge`) and the hard shadow (`--lift`). A new size, radius or shadow goes into the tokens first or not
  at all. Cards carry a 2px ink edge, things you can press lift on a hard ink shadow, and each page's coloured top ends
  in a scalloped edge. Headings stay in Martel; Kalam belongs to the drawn pages and the drawings.
- **`hero-cat.jpg` is the last Unsplash placeholder in `assets/`** — still live on a `learn.html`
  card, kept deliberately as a fallback in case the kitten photo did not work out (the owner's call, 2026-09-15). Its two
  siblings are gone: `cat-yawn.jpg` (a Scottish Fold in novelty sunglasses under the closing CTA,
  on a site whose argument is that indies equal any expensive breed) and `cat-closeup.jpg`, both
  retired on 2026-09-15 and replaced by the owner's own photos. The in-article
  photos (cat hair, accidents, kitten wet food, litter box, feeding strays) are licensed Adobe
  Stock, free-collection tier, each one logged privately.
- **Articles may carry a second photo now.** The 2026-09-10 rule was one image at the top, Medium's
  convention, the owner's ask — that is why `day-one-under-bed.jpg` was pulled out of the body. She widened
  it on 2026-09-15: a second image may be added when the existing one is good too. So
  the top image still leads; a second one earns its place by carrying an argument the text is
  already making, and it should be one of her own. Four went in that day (monsoon, day-one,
  cat-hair, netting). Two articles still have no photo of hers that fits — **accidents** and
  **kitten wet food** — and a forced fit is worse than a stock photo that is on-topic.
- **`assets/day-one-checklist.mp4` is silent on purpose.** It is the day-one page's hero, cut from the
  channel's Short; the Short's music is licensed for YouTube only, so the site's copy carries none.
  `assets/where-the-cats-are.mp4`, the map clip at the top of `about.html`, is silent for the same reason.
- **The drawings are a system, not decoration.** `assets/style.css` § THE SKETCHBOOK LAYER holds
  the ladder, the card deck and the line-art rules (ink strokes, no fill, red used only for
  prohibition), added 2026-09-12 so a page can be understood before it is read. Colour carries
  meaning there — periwinkle the situation, yellow act now, sage safe, sky wait and watch, butter
  the free version — so don't recolour a block for looks. Words inside a diagram stay live text,
  never drawn, so they can be selected, translated and found by search. `found-kitten-pune.html`
  is the first page built this way and `assets/found-kitten-card.svg` its drawn card image;
  `send-a-cat.html` is the second, with `assets/send-a-cat-card.svg`. A card file is an image, so the rule above doesn't reach it: an
  SVG shown as an image cannot load the site's fonts, and the send-a-cat card's words are drawn shapes for that
  reason. Don't turn them back into text. Six of its nine panel
  drawings are reused from the found-kitten set unchanged — the set is meant to be composed
  from, not redrawn per page.
  The home page's drawings come from the same library as the YouTube videos: what sits between an
  `art:` marker pair is generated from outside this repo, so an edit made here is overwritten on the
  next export. Their colour is multiplied, so each sits on its own white card, never straight on a
  coloured panel. The draw-on runs once, on reveal; with reduced motion or no script the drawing is simply there.
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

`index` · `about` · `adopt` · `adopter-form` · `learn` (the care hub) · `shop` · `resources` (Emergency &
NGOs) · `visit` · `send-a-cat` (the rescuer's door) · `privacy` and the articles ·
`adoptable.html` (the board) · `blog.html` (redirect) · `article-template.html` · `404.html`.
Twenty pages are in the sitemap (the shop since 2026-09-26); the template, the redirects and 404 deliberately are not.
**Short URLs** (2026-09-23): eleven one-line doorways — `/hair` `/clean` `/day-one` `/net`
`/kitten-food` `/litter` `/feeding` `/found` `/send` `/roti` `/cats` — each redirecting to its
page (`/cats` to the board, the rest to an article) with the campaign tag attached. They exist because a tagged URL is ~95 characters and a
Short's link is not tappable while the video plays, so it has to be *said* and typed. They are
`noindex` and out of the sitemap. ⛔ **Do not delete one once it has been spoken in a video** —
the video cannot be edited and the URL is burned into some of them.
⛔ **The same goes for any page whose address a video shows**: `adoptable.html`, `learn.html`, and every article a
Short's closing card names (`cat-hair-pune-flat.html` and the rest). Never rename or remove one.
`found-kitten-pune.html` and `send-a-cat.html` were noindex drafts until 2026-09-13 and are now
indexed like any other page.

---

*Operating records, decisions and working material for this site are kept privately and
are not part of this repository.*
