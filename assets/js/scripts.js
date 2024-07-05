$(document).ready(function() {
    // navbar sticky 
    let navbar = $('#upside');
    let stickyThreshold = 1;

    function stickyNavbar() {
        if ($(window).scrollTop() >= stickyThreshold) {
            navbar.addClass("sticky");
        } else {
            navbar.removeClass("sticky");
        }
    }

    $(window).on('scroll', function() {
        stickyNavbar();
    });


    // for category submenu 
    $('.submenu').hover(function() {
        var $submenu = $(this);
        var submenuHeight = $submenu.outerHeight();
        var $secondSubmenu = $submenu.find('.second-submenu');
        if ($secondSubmenu.find('ul li').length > 0) {
            $secondSubmenu.css('height', submenuHeight + 'px');
        }
    });

    // featured section slider
    $('.main-slider').slick({
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        pauseOnHover: true,
    });

    // product slider
    $('.product-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
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

    $('#prev').click(function() {
        $('.product-slider').slick('slickPrev');
    });

    $('#next').click(function() {
        $('.product-slider').slick('slickNext');
    });

    // product slider
    $('.product-slider-2').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, // Disable default arrows
        vertical: true, // Enable vertical sliding
        slidesToShow: 2, // Show 2 items side by side
        slidesToScroll: 1, // Scroll one slide at a time
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true // Show dots navigation
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
            slidesToShow: 1, // Show 1 item side by side on small screens
            slidesToScroll: 1
            }
        }
        ]
    });
    $('#prev2').click(function() {
        $('.product-slider-2').slick('slickPrev');
    });

    $('#next2').click(function() {
        $('.product-slider-2').slick('slickNext');
    });
});

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 4);

function padWithZero(number) {
    return number < 10 ? '0' + number : number;
}


function updateCountdown() {
    const now = new Date();
    const remainingTime = targetDate - now;

    if (remainingTime <= 0) {
        document.getElementById('timer').innerHTML = 'Countdown finished!';
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);


    document.getElementById('days').textContent = padWithZero(days);
    document.getElementById('hours').textContent = padWithZero(hours);
    document.getElementById('minutes').textContent = padWithZero(minutes);
    document.getElementById('seconds').textContent = padWithZero(seconds);
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

