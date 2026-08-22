/* catadoption.in — visitor counting.
 *
 * WHY THIS FILE EXISTS (OD, 2026-08-22): before this, the site had no analytics
 * at all, so "is anyone clicking the adoptable board from Instagram?" was not a
 * low number — it was an unanswerable question. Google Search Console only ever
 * reports Google Search; Instagram traffic is invisible to it by design.
 *
 * ONE FILE ON PURPOSE. Every page loads this; the site code and the tool choice
 * live here only. Swapping analytics tools later is a one-file edit, not thirteen.
 *
 * GoatCounter: no cookies, no personal data, no consent banner needed, ~3.5KB.
 * Free for personal / small-site use. It reads utm_source & utm_campaign from the
 * URL automatically and builds a Campaigns dashboard with no configuration — which
 * is what makes the tagged Instagram links in ../link-tags.md (in P-website/) readable.
 *
 * ⚙ SETUP — replace SITE_CODE below with the code from your goatcounter.com signup
 * (you pick it; the dashboard then lives at https://<code>.goatcounter.com).
 * Until it is replaced, this file deliberately does nothing at all.
 */

(function () {
  var SITE_CODE = "catadoption";

  if (SITE_CODE === "REPLACE_ME") return;   // not configured yet — stay silent

  // Don't count OD's own visits while working on the site locally.
  var h = location.hostname;
  if (h === "localhost" || h === "127.0.0.1" || h === "" || location.protocol === "file:") return;

  window.goatcounter = { endpoint: "https://" + SITE_CODE + ".goatcounter.com/count" };

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  document.head.appendChild(s);
})();
