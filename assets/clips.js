// Clips (video[data-clip]) load and play only once scrolled into view and pause when out of it, so a reader who
// never reaches one never downloads it. With reduced motion or Data Saver on, with no script, or where the phone
// refuses to autoplay, the poster stays and the video's own controls let the reader play it.
(() => {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches ||
    (navigator.connection && navigator.connection.saveData);
  if (still || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) v.play().catch(() => { v.controls = true; io.unobserve(v); });
    else v.pause();
  }), { threshold: 0.25 });
  document.querySelectorAll('video[data-clip]').forEach(v => { v.controls = false; io.observe(v); });
})();
