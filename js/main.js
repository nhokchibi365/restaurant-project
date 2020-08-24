/* ..............................................
        Map Full
    ............................................... */
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#go-to-top").fadeIn();
    } else {
      $("#go-to-top").fadeOut();
    }
  });
  $("#go-to-top").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      1500
    );
    return false;
  });
});

/* ..............................................
        Special Menu
............................................... */
(function () {
  var current = $("li > a.active");
  $("li > a").click(function () {
    current.removeClass("active");
    current = $(this);
    current.addClass("active");
  });
})();
var $root = $("html, body");

$('a[href^="#"]').click(function () {
  var href = $.attr(this, "href");

  $root.animate({
      scrollTop: $(href).offset().top,
    },
    1000,
    function () {
      window.location.hash = href;
    }
  );

  return false;
});
/* ..............................................
        Animation
    ............................................... */
AOS.init({
  offset: 200,
  delay: 0,
  duration: 1000,
});

/* ..............................................
        Carousel (Qoute, Customer Reivews)
    ............................................... */
$(document).ready(function () {
  $(".qoute").slick({
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  });
});
$(document).ready(function () {
  $(".reviews").slick({
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  });
});

/* ..............................................
        BaguetteBox
    ............................................... */
baguetteBox.run(".gallery");