/* ..............................................
  Back to top
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
      2000
    );
    return false;
  });
});

/* ..............................................
  Padding header when scroll
............................................... */
$(document).ready(function () {
  // change logo
  $(".navbar__left a img:first-child").hide();
  $(".navbar__left a img:nth-child(2)").show();

  $(".navbar-btn > i").css("color", "var(--white-color)"); // change icon tablet - mobile

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("header-background");
      $(".navbar__left a img:first-child").show();
      $(".navbar__left a img:nth-child(2)").hide();
      $(".navbar-btn > i").css("color", "var(--black-color)"); // change icon tablet - mobile
    } else {
      $(".header").removeClass("header-background");
      $(".navbar__left a img:first-child").hide();
      $(".navbar__left a img:nth-child(2)").show();
      $(".navbar-btn > i").css("color", "var(--white-color)"); // change icon tablet - mobile
    }
  });
});

/* ..............................................
  Choose list items in special menu
............................................... */
$(document).ready(function () {
  $(".navbar-menu li").click(function () {
    var choose = $(this).attr("index");

    if (choose == 0) {
      $(".menu-list__items-drink").show(700);
      $(".menu-list__items-lunch").show(700);
      $(".menu-list__items-dinner").show(700);
    } else if (choose == 1) {
      $(".menu-list__items-drink").show(700);
      $(".menu-list__items-lunch").hide(700);
      $(".menu-list__items-dinner").hide(700);
    } else if (choose == 2) {
      $(".menu-list__items-drink").hide(700);
      $(".menu-list__items-lunch").show(700);
      $(".menu-list__items-dinner").hide(700);
    } else {
      $(".menu-list__items-drink").hide(700);
      $(".menu-list__items-lunch").hide(700);
      $(".menu-list__items-dinner").show(700);
    }
  });
});

/* ..............................................
  Scroll to contact
............................................... */
$(document).ready(function () {
  $(".scroll-to-contact").click(function () {
    $("html, body").animate({
        scrollTop: $("#go-to-contact").offset().top,
      },
      2000
    );
  });
});

/* ..............................................
  Active navbar when click
............................................... */
// pc
$(document).ready(function () {
  $(".navbar__right ul li a").click(function () {
    $(".navbar__right ul li a.active").removeClass("active");
    $(this).addClass("active");
  });
});
// tablet - mobile
$(document).ready(function () {
  $(".navbar-list li a").click(function () {
    $(".navbar-list li a.active").removeClass("active");
    $(this).addClass("active");
  });
});

/* ..............................................
  Special Menu - Active when click items
............................................... */
$(document).ready(function () {
  $(".navbar-menu li a").click(function () {
    $(".navbar-menu li a.active").removeClass("active");
    $(this).addClass("active");
  });
});

/* ..............................................
  Animation
    ............................................... */
AOS.init({
  offset: 150,
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
  } else {
    swal("Xảy ra lỗi !", "Bạn chưa nhập thông tin !", "error");
  }
}

function registerCheck() {
  var register = document.getElementById("register");
  if (
    register.value != "" &&
    register.value.indexOf("@") != -1 &&
    register.value.indexOf(".") != -1
  ) {
    swal(
      "Bạn đã đăng ký nhận thông tin thành công!",
      "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi !",
      "success"
    );
  } else {
    swal("Xảy ra lỗi !", "Bạn chưa nhập thông tin !", "error");
  }
}

function searching() {
  var check = document.getElementById("search");

  if (check.value != "") {
    swal({
      title: "Xin lỗi !",
      text: "Tính năng chưa được phát triển, vui lòng thử lại sau !",
      icon: "info",
    });
  } else {
    swal("Xảy ra lỗi !", "Bạn chưa nhập thông tin !", "error");
  }
}