jQuery(document).ready(function($) {
    $(document).ready(function() {
        //Set sticky at top
        $('#sticky').affix({
            offset: {
                top: 0
            }
        });
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









