/* catadoption.in — Cuelinks affiliate link conversion.
 *
 * WHY THIS FILE EXISTS (OD, 2026-09-07): Cuelinks' own instructions say "paste the
 * JavaScript site-wide, in the footer of every page". We deliberately do NOT do that.
 *
 * Site-wide auto-conversion would silently monetise any merchant link that ever lands
 * on learn.html or on a distress-adjacent page — which are the two things the locked
 * rules in README.md forbid. A rule that depends on nobody ever pasting an Amazon link
 * in the wrong file is not a rule; it's a hope.
 *
 * So this loads PER PAGE, opt-in. An article earns money only if someone deliberately
 * adds the <script defer src="assets/cuelinks.js"></script> line to it. Default is clean.
 *
 * HOW IT WORKS: Cuelinks rewrites ordinary merchant links (amazon.in, flipkart, pet
 * retailers) into tracked affiliate links at click time. That means the HTML holds
 * plain, honest, human-readable URLs that still work for the reader if Cuelinks is
 * down, blocked by an ad blocker, or the account lapses. No baked-in affiliate IDs
 * to rot. A merchant Cuelinks doesn't cover simply stays an ordinary link.
 *
 * ⚙ WHAT IS CONFIRMED (read off the Cuelinks dashboard, 2026-09-07):
 *   • Account → My Channels: one channel, https://www.catadoption.in, "Website / Blog",
 *     channel ID 315477. Instagram is NOT a channel yet; each traffic source is its own
 *     channel, reviewed by their team, with its own ID.
 *   • Installation → JavaScript shows the snippet this file reproduces: a global
 *     `cId` holding the channel ID, and one fixed script, cdn0.cuelinks.com/js/cuelinksv2.js.
 *     The id below IS that channel ID. Their snippet also carries an http: fallback;
 *     this site is https-only, so it is dropped.
 *   • The same page has a "Check javascript installation" box: paste a live article URL
 *     there after deploying to confirm the script is seen. That is the acceptance test.
 *   • Channel verification (better campaigns/payouts, they say) is a separate step:
 *     a <meta> tag in index.html's <head>, or a DNS TXT record. Not this file's job.
 *
 * The channel is registered with "www." while canonical URLs here have none. Both
 * hostnames point at GitHub Pages, which redirects www to the apex, so it should be
 * fine; if clicks ever fail to track, edit the channel URL to https://catadoption.in.
 *
 * TO LEAVE CUELINKS: articles hold plain merchant URLs, so swapping networks is
 * replacing this one file with another loader. Nothing in any article changes.
 */

(function () {
  var CUELINKS_CID = "315477";

  if (CUELINKS_CID === "REPLACE_ME") return;   // kept so a fork can disarm it in one edit

  // Don't fire on local edits — keeps test clicks out of the earnings report.
  var h = location.hostname;
  if (h === "localhost" || h === "127.0.0.1" || h === "" || location.protocol === "file:") return;

  window.cId = CUELINKS_CID;                                  // cuelinksv2.js reads this global
  var s = document.createElement("script");
  s.src = "https://cdn0.cuelinks.com/js/cuelinksv2.js";
  s.async = true;
  (document.body || document.head).appendChild(s);
})();
