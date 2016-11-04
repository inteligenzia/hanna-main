


$(document).ready(function() {
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 50000,
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

});
$(window).on("resize", function(){
    $('#sticky').data('bs.affix').options.offset = $(window).height();
});

//Show or hide slider menu on desktop
$(window).scroll(function() {
    if ($(window).width() > 1359){
        if ($(this).scrollTop() > 80) {
            $('.nav-slider').fadeOut( "slow" );
        } else {
            $('.nav-slider').fadeIn( "slow" );
        }
    }
});


