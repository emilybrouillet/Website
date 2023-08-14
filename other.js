
$(document).ready(function () {
  $(window).scroll(function () {
    $(".animation").each(function () {
      var sectionTop = $(this).offset().top;
      var windowHeight = $(window).height();
      if (sectionTop < windowHeight * 0.8) {
        $(this).addClass("fade-in");
      }
    });
  });
  $(window).trigger("scroll");
});