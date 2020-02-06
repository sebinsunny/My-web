jQuery(document).ready(function($) {
	"use strict";

	/* window */
	var window_width, window_height, scroll_top;

	/* admin bar */
	var adminbar = $('#wpadminbar');
	var adminbar_height = 0;
   
	/* header menu */
	var header = $('#cshero-header');
	var header_top = 0;
    
	/* scroll status */
	var scroll_status = '';

	/**
	 * window load event.
	 * 
	 * Bind an event handler to the "load" JavaScript event.
	 * @author Fox
	 */
	$(window).on('load', function() {
	    
        
		/** current scroll */
		scroll_top = $(window).scrollTop();

		/** current window width */
		window_width = $(window).width();

		/** current window height */
		window_height = $(window).height();

		/* get admin bar height */
		adminbar_height = adminbar.length > 0 ? adminbar.outerHeight(true) : 0 ;

		/* get top header menu */
		header_top = header.length > 0 ? header.offset().top - adminbar_height : 0 ;

		cms_stiky_menu();

		cms_lightbox_popup();

		cms_filter();

		custom_iframe();

         
	});

	/**
	 * reload event.
	 * 
	 * Bind an event handler to the "navigate".
	 */
	window.onbeforeunload = function(){
	}
	 
	/**
	 * resize event.
	 * 
	 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
	 * @author Fox
	 */
	$(window).on('resize', function(event, ui) {
		/** current window width */
		window_width = $(event.target).width();

		/** current window height */
		window_height = $(window).height();

		/** current scroll */
		scroll_top = $(window).scrollTop();

		custom_iframe();
         
	});


	/**
	 * scroll event.
	 * 
	 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
	 * @author Fox
	 */
	$(window).on('scroll', function() {
		/** current scroll */
		scroll_top = $(window).scrollTop();
		header_top = header.length > 0 ? header.offset().top - adminbar_height : 0 ;
		cms_stiky_menu();
        cms_back_to_top();
	});
	/**
	 * Back to top
	 */
	$('body').on('click', '.ef3-back-to-top', function () {
		$('body, html').animate({scrollTop:0}, '1000');
	})

	  /* Show or hide buttom  */
	function cms_back_to_top(){
		/* back to top */
        if (scroll_top < window_height) {
        	$('.ef3-back-to-top').addClass('off').removeClass('on');
        } else {
        	$('.ef3-back-to-top').removeClass('off').addClass('on');
        }
	}

	function cms_filter(){
		/* filter */
        if ($(".page-title-text").hasClass("text-right")) {
        	$('.cms-grid-filter').addClass('filter-left').removeClass('filter-right');
        }
	}

	function custom_iframe(){
		var iframe_width = $(".format-video").width();
		var iframe_height = (iframe_width*9)/16;
		$(".format-video iframe").width('100%');
		$(".format-video iframe").height(iframe_height);
	}

	// RESPONSIVE MENU
    $('.icon-mobile-menu').on('click', function () {
        $('.menu-main-menu').slideToggle();
    });

    // Lightbox Popup
    function cms_lightbox_popup() {   
		$('.magic-popup').magnificPopup({
			// delegate: 'a',
			type: 'image',
			mainClass: 'mfp-3d-unfold',
			removalDelay: 500,  
			callbacks: {
				beforeOpen: function() {
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				}
			},
			closeOnContentClick: true,
			midClick: true  
		});
	}
	function cms_stiky_menu(){
		if (header_top>0) {
    		header.addClass('affix-top');
    	}else{
    		header.removeClass('affix-top');
    	}
	}
	//
        $(".right-menu").on('click', function () {
            $("body").hasClass("slidemenu-opened") ? k() : T()
        });

	    function T() {
	        $("body").addClass("slidemenu-opened")
	    }

	    function k() {
	        $("body").removeClass("slidemenu-opened")
	    }

	// SWITCHER OPEN
    $('.color-switcher .open').on('click', function () {
        $('.color-switcher').toggleClass("open-switcher");
    });
    $(window).scroll(function () {
    	if($('body').hasClass('admin-bar') && $(window).width() <= 600){
			var e = $(window).scrollTop();
			if (e >= 46) {
				$('.admin-bar .slidemenu-fixed').css('top','0');
			}else{
				$('.admin-bar .slidemenu-fixed').css('top','46px');
			}
		}
	});
    $('.picard-search-icon').on('click', function(){
  		$('#headersearch-form').slideToggle();
    })
   	$('#headersearch-form > i').on('click', function(){
  		$('#headersearch-form').slideUp();
    })
   	$('#headersearch-form .bg-picard').on('click', function(){
		$('#headersearch-form').slideUp();
    })
});