/* Send: an answer's link goes to the phone's share sheet where there is one.
 * Without one, or with no script at all, the same link opens WhatsApp with the words and the address,
 * so it works everywhere. The board's Share (inline in adoptable.html) is the same idea. */
document.addEventListener("click", function (ev) {
  var b = ev.target.closest ? ev.target.closest("a[data-send]") : null;
  if (!b || !navigator.share) return;
  ev.preventDefault();
  navigator.share({ text: b.getAttribute("data-send-text"), url: b.getAttribute("data-send") }).catch(function (e) {
    // a reader who closed the sheet meant it; any other failure (some in-app browsers) falls back to WhatsApp
    if (!e || e.name !== "AbortError") window.open(b.href, "_blank", "noopener");
  });
});
