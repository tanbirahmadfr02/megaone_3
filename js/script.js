// =====circle progress bar plugin start =====

$(function () {
  $('.circlechart').circlechart();
});


// =====circle progress bar plugin end =====

// =====pfolio part start =======
$('.slider_main').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  prevArrow: '<i class="fa-solid fa-chevron-left prevarrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right nextarrow"></i>',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// =====pfolio part end =======


// =====testimonial part start ======

$('.test_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// =====testimonial part end ======

// =====logo slider part start ======

$('.logo_main').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// =====logo slider part end ======


// =========sticky menu part ========
var main_menu = document.getElementById("main_menu");
window.addEventListener("scroll", function () {
  main_menu.classList.toggle("sticky", window.scrollY > 100);
})
// =========sticky menu part ========


// ========back to top part ======
var back_to_top = document.querySelector(".back_to_top")

window.addEventListener("scroll", function () {

  back_to_top.classList.toggle("bottom_to_top", window.scrollY > 150)
})
// ========back to top part ======


// ========active page part start ======

navbar = document.querySelector(".navbar").querySelectorAll("a")
console.log(navbar);

navbar.forEach(element => {
  element.addEventListener("click", function () {
    navbar.forEach(nav => nav.classList.remove("active"))
    this.classList.add("active");
  })
});

// ========active page part end ======