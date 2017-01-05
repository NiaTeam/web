//Reading Position Indicator
	if( tie.is_singular && tie.reading_indicator ){

		var reading_content = $the_post.find( '.entry' );
		if( reading_content.length > 0 ){
			reading_content.imagesLoaded(function() {
				var content_height	= reading_content.height();
					window_height	= $window.height();

				$window.scroll(function() {
					var percent 		= 0,
						content_offset	= reading_content.offset().top;
						window_offest	= $window.scrollTop();

					if (window_offest > content_offset) {
						percent = 100 * (window_offest - content_offset) / (content_height - window_height);
					}
					jQuery('#reading-position-indicator').css('width', percent + '%');
				});
			});
		}
	}
