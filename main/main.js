$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 25,
        responsiveClass: true,
        navText: [
            '<i  class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],

        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
            },
        },
    });
});
$("#button").click(function(e) {
    e.preventDefault();

    $(this).next().toggleClass("head");
    //     $(this).next().animate({ opacity: "0.5" });
});

$("h3").click(function(param) {
    $(this).next().toggleClass("show");
});