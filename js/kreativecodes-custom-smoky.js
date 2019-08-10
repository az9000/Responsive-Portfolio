/*
==================
Author       : Kreative Codes
Template Name: Imprecious - OnePage Responsive Template
Version      : 1.0
~~~~~~~~~
Copyright (c) 2017 - Kreative Codes - https://themeforest.net/user/kreativecodes
~~~~~~~~~
==================
*/

(function($) {
	'use strict';
	var $window = $(window),
		$navtoggle = $('.navbar-toggle'),
		$nav = $('#nav'),
		$link = $('.nav a'),
		$waywrap = $('#wavybg-wrapper'),
		$about = $('#about'),
		$progress = $('.progress .progress-bar'),
		$counter = $('.counter'),
		$carousel = $('.owl-carousel'),
		$form = $('#myform'),
		$responsemessage = $('#responsemessage'),
		$response = $('#response');

/*
=========
Loading Animation
=========
*/

	$window.on('load', function() {
		$('.kc-table-cell').fadeOut();
		$('#kc-loading').delay(500).fadeOut('slow');
	});

/*
=========
Navbar Animation and Toggle
=========
*/

	$window.on('scroll', function() {
		if ($window.scrollTop() > 50) {
			$nav.addClass('kc-scroll');
		} else {
			$nav.removeClass('kc-scroll');
		}
	});

	$navtoggle.on('click', function() {
		$nav.toggleClass('navbg');
	});

	$link.on('click', function() {
		if ($navtoggle.css('display') !== 'none') {
			$navtoggle.trigger('click');
		}
	});

/*
=========
Smoky Animation
=========
*/

	$waywrap.waterpipe({
		gradientStart: '#ffffff',
		gradientEnd: '#cccccc',
		smokeOpacity: 0.04,
		numCircles: 2,
		maxMaxRad: 500,
		minMaxRad: 700,
		minRadFactor: 0,
		iterations: 8,
		drawsPerFrame: 2,
		lineWidth: 1,
		speed: 0.2,
		bgColorInner: "#000000",
		bgColorOuter: "#000000"
	});


/*
=========
Skills Progress Bar
=========
*/

	$about.waypoint(function() {
		$progress.css("width",
			function() {
				return $(this).attr("aria-valuenow") + "%";
			}
		);
		offset: 'bottom-in-view'
	});

/*
=========
Facts Count Up
=========
*/

	$counter.counterUp({
		delay: 10,
		offset: 80,
		time: 2000,
	});

/*
=========
OWL Carousel
=========
*/

	$carousel.owlCarousel({
		nav: true,
		animateIn: 'flipInX',
		items: 1,
		loop: true,
		autoplay: true,
		navText: false,
		margin: 10,
	});

/*
=========
Contact form
=========
*/

	$form.on('submit', function(e) {
		e.preventDefault();
		$.ajax({
			url: $(this).attr('action'),
			type: 'POST',
			data: $(this).serialize(),
			beforeSend: function() {
				$responsemessage.html('<i class="fa fa-cog fa-spin fa-fw"></i> Submitting...');
			},
			success: function(data) {
				$responsemessage.hide();
				$response.html('<i class="fa fa-check"></i> Message sent successfully!').fadeIn().delay(10000).fadeOut();
			}
		});
	});

/*
=========
WOW js
=========
*/

	new WOW().init();

/*
=========
Smooth-scroll js
=========
*/

	smoothScroll.init();

})(jQuery);