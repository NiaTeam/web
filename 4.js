/*!

Name: Scrollgress
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: August 20, 2014
Last Updated: August 20, 2014
Licensed under the MIT license

*/

;(function($) {

    $.fn.scrollgress = function(options) {
    
    	//return if no element was bound
		//so chained events can continue
		if(!this.length) { 
			return this; 
		}

		//define default parameters
        var defaults = {
            height: '5px',
            color: '#ff0000',
            success: function() {}
        }
        
        //define plugin
        var plugin = this;

        //define settings
        plugin.settings = {}
 
        //merge defaults and options
        plugin.settings = $.extend({}, defaults, options);
        
        var s = plugin.settings;

        //define element
        var el = $(this);

    	var elOverflow = el.css('overflow');
    	var elOverflowY = el.css('overflow-y');
    
    	var content_height = reading_content.height();
    
    	var windowHeight = $window.height();
    
        var window_offest = $window.scrollTop();
        
        var content_offset = reading_content.offset().top;
    
    	var progressBar = '<div class="scrollgress"><div class="scrollgress__progress"></div></div>';

    	$('body').prepend(progressBar);
    	
    	$('.scrollgress').css({
    		position: 'fixed',
    		bottom: '0px',
    		left: '0px',
    		background: 'transparent',
    		width: '100%',
    		height: s.height
    	});
    	
    	$('.scrollgress__progress').css({
    		float: 'right',
    		background: '#4e72a9',
    		width: '0%',
    		height: s.height
    	});
    	
    	elementToScroll.scroll(function(e) {
    	

    		// divide the amount of pixels scrolled by the total height to scroll minus the height of the window
    		// and round the result to two decimal places
		if (window_offest > content_offset) {
						percentScrolled = 100 * (window_offest - content_offset) / (content_height - window_height);    		
    		console.log(e.originalEvent);
    		
			
			
    		$('.scrollgress__progress').css({
        		width: percentScrolled + '%'
    		});
        });
        
        s.success.call(this);

    }

})(jQuery);
        
        
