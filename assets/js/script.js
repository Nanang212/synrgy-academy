const navbar = document.getElementById("navbar");

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    header.classList.add("navbar-blur");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    header.classList.remove("navbar-blur");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// owlCarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    // nav: true,
    responsive: {
      0: {
        items: 0,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2.3,
      },
    },
  });
  $(".owl-prev").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
    changeButtonColor(this);
  });

  $(".owl-next").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
    changeButtonColor(this);
  });
  function changeButtonColor(button) {
    $(".owl-prev, .owl-next").css("background-color", "");
    $(".owl-prev, .owl-next").find("box-icon").css("color", "");

    $(button).css("background-color", "#5cb85f");
    $(button).find("box-icon").css("color", "white");
  }
});
