(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Footer booking form -> email via Web3Forms
    // Get a free access key at https://web3forms.com (enter the email that should receive enquiries)
    var WEB3FORMS_ACCESS_KEY = "684526b4-8122-41fb-98e5-0db1b633eff7";

    $('#footerBookingForm').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        var $button = $form.find('button[type="submit"]');
        var $status = $form.find('.footer-form-status');

        var data = {};
        $.each($form.serializeArray(), function (_, field) {
            data[field.name] = field.value;
        });
        data.access_key = WEB3FORMS_ACCESS_KEY;

        $button.prop('disabled', true).text('Sending...');
        $status.text('');

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(function (response) { return response.json(); })
            .then(function (result) {
                if (result.success) {
                    $status.text('Thank you! Your enquiry has been sent. We will contact you soon.');
                    $form[0].reset();
                } else {
                    $status.text('Sorry, something went wrong. Please call us or try again.');
                }
            })
            .catch(function () {
                $status.text('Sorry, something went wrong. Please call us or try again.');
            })
            .finally(function () {
                $button.prop('disabled', false).text('Book Now');
            });
    });


    // Explore Tour carousels (Domestic, International, Spiritual, Honeymoon)
    $(".DomesticTour-carousel, .InternationalTour-carousel, .SpiritualTour-carousel, .HoneymoonTour-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Recalculate carousel widths when a hidden Explore Tour tab is shown
    $('.ExploreTour a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
        $($(e.target).attr('href')).find('.owl-carousel').trigger('refresh.owl.carousel');
    });


    // packages carousel
    $(".packages-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // destination attractions carousel
    $(".attractions-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // partners carousel
    $(".partners-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);

