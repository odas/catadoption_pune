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
 * ⚙ SETUP — what the dashboard and Cuelinks' own KB say (checked 2026-09-07):
 *   • Account → My Channels lists ONE channel by default: https://www.catadoption.in,
 *     category "Website / Blog", channel ID 315477, currently UNVERIFIED. Each extra
 *     traffic source (Instagram etc.) is its own channel, reviewed by their team, and
 *     gets its own ID. Verified channels are promised better campaigns and payouts.
 *   • Installation → JavaScript is where the snippet lives. Paste its id/key below.
 *     315477 is the likely value, but confirm it on that page before pasting; until
 *     CUELINKS_CID is replaced this file deliberately does nothing at all.
 *   • Note the channel is registered with "www." while this site's canonical URLs
 *     have none. If clicks ever fail to track, that mismatch is the first suspect.
 *
 * ⚠ If the dashboard's snippet does not match the src line below (some accounts are
 * documented using cdn-widget.cuelinks.com/js/cuelinks.js with a `var cuelinks =
 * {key:'...'}` global instead of the id-in-URL form), THE DASHBOARD IS AUTHORITATIVE —
 * replace the two marked lines with theirs verbatim and leave everything else alone.
 */

(function () {
  var CUELINKS_CID = "REPLACE_ME";

  if (CUELINKS_CID === "REPLACE_ME") return;   // not configured yet — stay silent

  // Don't fire on local edits — keeps test clicks out of the earnings report.
  var h = location.hostname;
  if (h === "localhost" || h === "127.0.0.1" || h === "" || location.protocol === "file:") return;

  var s = document.createElement("script");                          // ← dashboard line 1
  s.src = "https://cdn0.cuelinks.com/js/" + CUELINKS_CID + ".js";    // ← dashboard line 2
  s.async = true;
  document.head.appendChild(s);
})();
