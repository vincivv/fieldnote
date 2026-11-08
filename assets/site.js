// Fieldnote demo site: small interactions plus a little live content (counters, "synced x min ago").
(function () {
  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Live counters: conversations read keeps ticking up.
  document.querySelectorAll("[data-live-count]").forEach(function (el) {
    var n = parseInt(el.getAttribute("data-live-count"), 10) + Math.floor(Math.random() * 900);
    var fmt = function (v) { return v.toLocaleString("en-US"); };
    el.textContent = fmt(n);
    setInterval(function () { n += 1 + Math.floor(Math.random() * 4); el.textContent = fmt(n); }, 2200);
  });

  // "Synced 3 min ago"
  document.querySelectorAll("[data-ago]").forEach(function (el) {
    var m = 1 + Math.floor(Math.random() * 9);
    el.textContent = el.getAttribute("data-ago") + " " + m + " min ago";
  });

  // Pricing: monthly / annual
  var buttons = document.querySelectorAll("[data-billing]");
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var mode = b.getAttribute("data-billing");
      buttons.forEach(function (x) { x.classList.toggle("on", x === b); });
      document.querySelectorAll("[data-monthly]").forEach(function (p) {
        p.textContent = p.getAttribute(mode === "annual" ? "data-annual" : "data-monthly");
      });
    });
  });
})();
