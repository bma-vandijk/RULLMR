/**
 * Light / dark theme toggle.
 *
 * Default is light. The visitor's choice is stored in localStorage
 * under "rullmr-theme". A small script in the page <head> applies the
 * saved value before the CSS loads, so the page does not flash.
 */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("rullmr-theme", theme);
    } catch (err) {
      /* private mode can block storage; the choice still applies for this visit */
    }
    var dark = theme === "dark";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }

  apply(current());
  btn.addEventListener("click", function () {
    apply(current() === "dark" ? "light" : "dark");
  });
})();
