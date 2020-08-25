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

/* ..............................................
        Display dialog successful
    ............................................... */
function bookingCheck() {
  var date = document.getElementById("date");
  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");

  if (
    date.value != "" &&
    name.value != "" &&
    address.value != "" &&
    phone.value != ""
  ) {
    swal({
      title: "Xác nhận!",
      text: "Bạn chắc chắn đặt bàn chứ ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(
          "Bạn đã đặt bàn thành công!",
          "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi !", {
            icon: "success",
          }
        );
      } else {
        swal("Bạn đã huỷ đặt bàn !");
      }
    });
  }
}

function registerCheck() {
  var register = document.getElementById("register");

  if (register.value != "") {
    swal(
      "Bạn đã đăng ký nhận thông tin thành công!",
      "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi !",
      "success"
    );
  }
}