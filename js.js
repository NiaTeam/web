});
    var stickySidebarTop = 0;
    var $fixed_enabled = jQuery("#cssmenufixed-enabled");
    if (!tie_isMobile.any() && $fixed_enabled.length > 0) {
        stickySidebarTop = 50;
        jQuery('#theme-header').imagesLoaded(function() {
            jQuery(function() {
                var navScroll_1 = jQuery(document).scrollTop();
                var headerHeight = $fixed_enabled.offset().top;
 
                $window.scroll(function() {
                    var navScroll_2 = jQuery(document).scrollTop();
 
                    if (navScroll_2 > headerHeight) {
                        $fixed_enabled.addClass('fixed-nav');
                    } else {
                        $fixed_enabled.removeClass('fixed-nav');
                    }
 
                    if (navScroll_2 > navScroll_1) {
                        $fixed_enabled.removeClass('fixed-nav-appear');
                    } else {
                        $fixed_enabled.addClass('fixed-nav-appear');
                    }
 
                    navScroll_1 = jQuery(document).scrollTop();
                });
            });
        });
    }