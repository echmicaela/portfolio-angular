$(document).ready(function () {
  $(".menu_movil").click(function () {
    $("nav#menu").slideToggle();
  });

  if ($(".modalPortfolio")[0]) {
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
});
