jQuery(document).ready(function($) {
    $(document).ready(function() {

        // Swiper top slider

        var mySwiper = new Swiper ('.top-swiper', {
            // Optional parameters
            direction: 'vertical',
            loop: true,
            pagination: '.top-swiper-pagination',
            paginationClickable: true,
            autoplay: 50000,
            speed: 1000,
            paginationBulletRender: function (index, className) {
                return '<span class="swiper-pagination-bullet"> 0' + (className + 1) + '.</span>';
            },
            onlyExternal: true
        });

        // Swiper notebook slider

        var notebookSwiper = new Swiper ('.notebook-swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            pagination: '.notebook-swiper-pagination',
            paginationClickable: true,
            autoplay: 50000,
            speed: 1000,
            paginationBulletRender: function (index, className) {
                return '<span class="swiper-pagination-bullet"> 0' + (className + 1) + '.</span>';
            },
            onlyExternal: true,
            nextButton: '.notebook-swiper-next',
            prevButton: '.notebook-swiper-prev'
        });

        var descriptionSwiper = new Swiper ('.desc-swiper', {
            // Optional parameters
            direction: 'vertical',
            loop: true,
            pagination: '.desc-swiper-pagination',
            paginationClickable: true,
            autoplay: 5000000,
            speed: 1000,
            paginationBulletRender: function (index, className) {
                return '<span class="swiper-pagination-bullet"> 0' + (className + 1) + '.</span>';
            },
            onlyExternal: true
        });

        //calculate when sticky menu should appear
        $('#sticky').affix({
            offset: {
                top: $(window).height()
            }
        });
        
        if (window.location.pathname.indexOf("/ru") >= 0) {

            $(".language-switcher-locale-url li:eq(0)").before($(".language-switcher-locale-url li:eq(1)"));

        }
        
    });

    //Recalculate sticky
    $(window).on("resize", function(){
        $('#sticky').data('bs.affix').options.offset = $(window).height();
    });

    //Show or hide slider menu on desktop
    $(window).scroll(function() {
        if ($(window).width() > 1210){
            if ($(this).scrollTop() > 80) {
                $('.nav-slider').fadeOut("fast");
            } else {
                $('.nav-slider').fadeIn("fast");
            }
        }

        if ($(this).scrollTop() > $(this).height()) {
            $('#block-block-1').parallax({
                imageSrc: './img/ab-bg.jpg ',
                speed: 0.6
            });

            $('#block-views-events-main-block-0').parallax({
                imageSrc: './img/events-bg.jpg',
                speed: 0.6
            });
        }

    });

    //Mobile menu interaction

    $("#hamburger").click(function() {
        $("#mobile-menu").css("width", "100%");
        $("#sticky").fadeOut("fast");
    });

    $("#mobile-close").click(function() {
        $("#mobile-menu").css("width", "0%");
        $("#sticky").fadeIn("fast" );
    });


    //Language switcher logic
    $(document).on('click', function (e) {
        if ($(e.target).closest("ul.language-switcher-locale-url").length === 0) {
            $("ul.language-switcher-locale-url li:not(.active)").fadeOut("fast");
        }
    });

    $("ul.language-switcher-locale-url li.active").click(function(event) {
        event.preventDefault();
        $(this).find("a").css("text-decoration", "none");

        var lang = $("ul.language-switcher-locale-url li:not(.active)");

        if ( $(lang).css("display") == "none" ) {
            $(lang).fadeIn("fast");
        } else {
            $(lang).fadeOut("fast");
        }

     });
});









