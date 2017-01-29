;(function () {

	'use strict';



	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			items: 1,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoPlayHoverPause: true,
		  loop: true,
		  margin: 0,
		  responsiveClass: true,
		  //  nav: true,
		   dots: true,
		  //  smartSpeed: 500
		  //  navText: [
		  //     "<i class='icon-chevron-left owl-direction'></i>",
		  //     "<i class='icon-chevron-right owl-direction'></i>"
	    //  	]
		});
	};

	// Owl Carousel


	// Parallax
	// var parallax = function() {
	// 	$(window).stellar();
	// };


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);

			return false;
		});

	};


	// Offcanvas and cloning of the main menu
	var offcanvas = function() {

		var $clone = $('.nav').clone();
		$clone.attr({
			'id' : 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class' : '',
			'id' : ''
		});

		$('.box-wrap').prepend($clone);

		// click the burger
		$('.js-fh5co-nav-toggle').on('click', function(){

			if ( $('body').hasClass('fh5co-offcanvas') ) {
				$('body').removeClass('fh5co-offcanvas');
			} else {
				$('body').addClass('fh5co-offcanvas');
			}
			// $('body').toggleClass('fh5co-offcanvas');

		});

		$('#offcanvas-menu').css('height', $(window).height());

		$(window).resize(function(){
			var w = $(window);


			$('#offcanvas-menu').css('height', w.height());

			if ( w.width() > 769 ) {
				if ( $('body').hasClass('fh5co-offcanvas') ) {
					$('body').removeClass('fh5co-offcanvas');
				}
			}

		});

	}


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			}

		});
	};



	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};



	// Document on load.
	$(function(){



		// Animations
		owlCrouselFeatureSlide();
		contentWayPoint();
		// parallax();


	});
	function include(arr, obj) {

	    for(var i=0; i<arr.length; i++) {
	        if (arr[i] === obj) return true;
	    }
	}

	var arr = [ "11212", "11213", "11216", "11233", "11238", "11209", "11214", "11228", "11204", "11218", "11219", "11230", "11234", "11236", "11239", "11249", "11223", "11224", "11229", "11235", "11201", "11205", "11215", "11217", "11217", "11231", "11203", "11210", "11225", "11226", "11207", "11208", "11211", "11222", "11220", "11232", "11206", "11221", "11237", "10004", "10005", "10006", "10048", "10038", "10007", "10013", "10002", "10012", "10014", "10011", "10003", "10009", "10010", "10001", "10018", "10016", "10017", "10036", "10019", "10022", "10021", "10023", "10024", "10028", "10128", "10105", "10165", "10168", "10055", "10155", "10162", "10118", "10176", "10111", "10153", "10170", "10174", "10166", "10169", "10167", "10177", "10172", "10171", "10154", "10152", "10270", "10112", "10155", "10122", "10107", "10104", "10271", "10278", "10110", "10175", "10151", "10173", "10178", "10119", "10121", "10158", "10041", "10120", "10301", "10302", "10303", "10304", "10305", "10306", "10307", "10308", "10309", "10310", "10311", "10312", "10314", "10313" ];

	$('#zipCode').keypress(function(event){
	    if (event.keyCode == 10 || event.keyCode == 13){
	        event.preventDefault();
			};
	});

	$("#submit").click(function(e){
	e.preventDefault();

	    var val = $("#zipCode").val();
			var hidePast = $('.zip-empty, .zip-success, .zip-fail').hide();

			if (val.length === 0 ){
					$('.zip-empty').fadeIn( function(){
						hidePast;
					}).delay(5000).fadeOut();
			} else if(include(arr, val)){
	        $('.zip-success').fadeIn().delay(5000).fadeOut();
			} else {
					$('.zip-fail').fadeIn().delay(5000).fadeOut();
			}

	});


}());
