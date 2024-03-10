// slick slider plug in part start
$(document).ready(function () {
  $('.prianka').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    prevArrow: '<i class="fa fa-angle-left"></i>',
    nextArrow: '<i class="fa fa-angle-right"></i>',

    responsive: [
      {
        breakpoint: 1078,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
// slick slider plug in part end





// preloader part start
$(window).on('load', function () {
  // Prealoder
  $("#preloader").delay(700).fadeOut("slow");

  // Isotope Initialize
  function isotopeInit() {
    $('.project_items').isotope({
      itemSelector: '.item',
      masonry: {
        columnWidth: '.item'
      }
    });
    $('.project_filter_menu ul li').on('click', function () {
      $('.project_filter_menu ul li').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $('.project_items').isotope({
        filter: selector
      });
      return false;
    });
  }
  isotopeInit();
});
// preloader part end





// Video Popup Initialize part start
new VenoBox({
  selector: '.img_video',
});
// Video Popup Initialize part end





// card group counter part start
$(function () {

  // 1st number part start
  $(".num1").numScroll({
    number: 80,
    'time': 180000,
    'delay': 0
  });
  // 1st number part end

  // 2nd number part start
  $(".num2").numScroll({
    number: 120,
    'time': 180000,
    'delay': 0
  });
  // 2nd number part end

  // 3rd number part start
  $(".num3").numScroll({
    number: 115,
    'time': 180000,
    'delay': 6
  });
  // 3rd number part end

  // 4th number part start
  $(".num4").numScroll({
    number: 4000,
    'time': 180000,
    'delay': 0
  });
  // 4th number part end

});

// card group counter part end





// subscribe popup part start

  // $('.subscribe_box2').on('click', function() {
  //   XSAlert({
  //     title: '!!! Success !!!',
  //     message: 'You have successfully subscribed. Welcome to our website',
  //     autoCloseTimer: '2000',
  //     closeOnOutsideClick: 'true',
  //     closeWithESC: 'true',
  //   });
  // });





  // not a plugin but custom js code part start
  const subscribeButton = document.querySelector('.subscribe_box2');

  subscribeButton.addEventListener('click', function () {

    const popupModal = document.getElementById('popupModal');
    popupModal.style.display = 'block';

    setTimeout(function () {
      popupModal.style.display = 'none';
    }, 5000);
    
  });
  // not a plugin but custom js code part end
// subscribe popup part end





// sign up - in part password eye icon enable-disable -custom part start
function togglePassword() {
  var passwordField = document.getElementById("password1");
  var type = passwordField.getAttribute("type");
  if (type === "password") {
    passwordField.setAttribute("type", "text");
  } else {
    passwordField.setAttribute("type", "password");
  }
}
// sign up - in part password eye icon enable-disable -custom part end





// typing js for sign up page part start
// typing js for sign up page part end





// background bubble part start
// background bubble part end