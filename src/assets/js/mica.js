$(document).ready(function () {
  // Toggle menu
  $(".menu_movil").click(function () {
    $("nav#menu").slideToggle();
  });

  if ($(window).width() < 769) {
    // Hide menu on click
    $("nav#menu li").click(function () {
      $("nav#menu").hide();
    });

    // Hide header on scroll down
    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
      ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  }
});
