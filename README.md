# catadoption.in — site

Static site for catadoption_pune. No build step, no dependencies — these files ARE the site.

## Go live (one time, ~15 min of clicking + DNS wait)

Repo: https://github.com/odas/catadoption_pune (this folder is already a git repo with one commit).

1. **Push** (from this `site/` folder):
   ```
   git remote add origin https://github.com/odas/catadoption_pune.git
   git push -u origin main
   ```
2. **GitHub Pages:** repo → Settings → Pages → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
3. **Namecheap** → Domain List → catadoption.in → Advanced DNS. Delete parking records, then add:
   | Type | Host | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | odas.github.io. |
4. **Back in Pages settings:** Custom domain → `catadoption.in` → Save → wait for the DNS check (minutes–hours) → tick **Enforce HTTPS** once it appears.
5. **Verify:** https://catadoption.in loads all 4 pages on phone + laptop.
6. **Search Console:** https://search.google.com/search-console → add property `catadoption.in` (Domain type; verify via a Namecheap TXT record) → Sitemaps → submit `https://catadoption.in/sitemap.xml`. Repeat at Bing Webmaster Tools (imports from Search Console).
7. **Google Business Profile:** add `https://catadoption.in` as the website link.

## Rules baked into this site (don't undo by accident)

- `learn.html` carries **no affiliate links, ever** (care education = trust layer).
- New articles: copy `article-template.html`, follow the comments inside it, add to `sitemap.xml`.
- Design system lives in `assets/style.css` — palette and fonts are locked decisions (see `../project-state-od.md`).
- The three cat photos in `assets/` are **Unsplash placeholders** — replace with brand-graded real photos (post-live task).
