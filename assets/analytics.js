/* catadoption.in — visitor counting.
 *
 * One file on purpose: every page loads this, so the site code and the tool choice live
 * here only, and swapping the tool is a one-file edit.
 *
 * GoatCounter: no cookies, no personal data, no consent banner needed, ~3.5KB. It reads
 * utm_source and utm_campaign from the URL, which is what makes the tagged links readable.
 * Until SITE_CODE is set, this file does nothing.
 */

(function () {
  var SITE_CODE = "catadoption";

  if (SITE_CODE === "REPLACE_ME") return;   // not configured yet — stay silent

  // Don't count visits from a local copy of the site.
  var h = location.hostname;
  if (h === "localhost" || h === "127.0.0.1" || h === "" || location.protocol === "file:") return;

  window.goatcounter = { endpoint: "https://" + SITE_CODE + ".goatcounter.com/count" };

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  document.head.appendChild(s);
})();
