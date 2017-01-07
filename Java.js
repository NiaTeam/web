// top button
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() &gt; 100) {
			jQuery(&#39;#topcontrol&#39;).css({bottom:&quot;15px&quot;});
		} else {
			jQuery(&#39;#topcontrol&#39;).css({bottom:&quot;-100px&quot;});
		}
	});
	jQuery(&#39;#topcontrol&#39;).click(function(){
		jQuery(&#39;html, body&#39;).animate({scrollTop: &#39;0px&#39;}, 800);
		return false;
	});
