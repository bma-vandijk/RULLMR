/**
 * Accordion for Syllabus and Schedule.
 *
 * What this file does:
 * - Finds every block with class "parts-accordion" (the click-to-open lists).
 * - For each session/part, a button.part-toggle opens or closes the panel
 *   underneath (div.chapters) by toggling the class "open" and animating height.
 * - If the URL contains a hash like #part-3, that session opens and the page
 *   scrolls to it. Useful for linking from Home to a specific topic.
 *
 * You do not need to edit this unless you change the HTML class names.
 */
(function () {
  function wire(container) {
    container.querySelectorAll(":scope > .part").forEach(function (part) {
      var btn = part.querySelector(":scope > .part-toggle");
      var panel = part.querySelector(":scope > .chapters");
      if (!btn || !panel) return;

      btn.addEventListener("click", function () {
        var isOpen = part.classList.contains("open");
        if (isOpen) {
          panel.style.maxHeight = "0px";
          part.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
        } else {
          part.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  }

  document.querySelectorAll(".parts-accordion").forEach(wire);

  var hash = window.location.hash.match(/^#part-(\d+)$/);
  if (hash) {
    var target = document.querySelector(
      '.parts-accordion .part[data-part="' + hash[1] + '"]'
    );
    if (target) {
      var toggle = target.querySelector(":scope > .part-toggle");
      if (toggle) toggle.click();
      target.scrollIntoView({ block: "start" });
    }
  }
})();
