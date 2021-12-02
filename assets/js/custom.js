/* WOW */
new WOW().init();

/*PRELOADER*/
$(window).load(function() {
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({'overflow':'visible'});
});

/* STICKY */
$(window).load(function(){
	$("#header").sticky({ topSpacing: 0 });
});

/* TOGGLE */
$(function() {
	$(".navbar__toggler").click(function() {
		$("#menuNav").toggleClass('active');
	});
});

$('#menuNav .link').click(function(event) {
	$("#menuNav").toggleClass('active');
});

/* NAVIGATION SCROLL */
$('#mainNav .link').click(function(event) {
	var id = $(this).attr("href");
	var offset = 50;
	var target = $(id).offset().top - offset;
	$('html, body').animate({
		scrollTop: target
	}, 500);
	event.preventDefault();
});

$('#welcome .link').click(function(event) {
	var id = $(this).attr("href");
	var offset = 50;
	var target = $(id).offset().top - offset;
	$('html, body').animate({
		scrollTop: target
	}, 500);
	event.preventDefault();
});

/* CIRCULOS */

$(document).ready(function () {
	var hasCreatedObjects = false;
	$(window).scroll(function () {
		var y = $(this).scrollTop();
		if (y >= 100) {
			if (!hasCreatedObjects) {
				hasCreatedObjects = true;
				$("#html5-circle").circliful({
					animation: 1,
					animationStep: 3,
					target: 10,
					start: 2,
					showPercent: 1,
					percent: 90,
					backgroundColor: '#FFF',
					foregroundColor: '#0091e4',
					fontColor: '#FFF',
					iconColor: '#FFF',
					icon: 'e800',
					iconSize: '60',
					iconPosition: 'middle-v'
				});
				$("#css3-circle").circliful({
					animation: 1,
					animationStep: 3,
					target: 10,
					start: 2,
					showPercent: 1,
					percent: 90,
					backgroundColor: '#FFF',
					foregroundColor: '#0091e4',
					fontColor: '#FFF',
					iconColor: '#FFF',
					icon: 'e801',
					iconSize: '60',
					iconPosition: 'middle-v'
				});
				$("#sass-circle").circliful({
					animation: 1,
					animationStep: 3,
					target: 10,
					start: 2,
					showPercent: 1,
					percent: 85,
					backgroundColor: '#FFF',
					foregroundColor: '#0091e4',
					fontColor: '#FFF',
					iconColor: '#FFF',
					icon: 'e804',
					iconSize: '60',
					iconPosition: 'middle-v'
				});
				$("#jquery-circle").circliful({
					animation: 1,
					animationStep: 3,
					target: 10,
					start: 2,
					showPercent: 1,
					percent: 70,
					backgroundColor: '#FFF',
					foregroundColor: '#0091e4',
					fontColor: '#FFF',
					iconColor: '#FFF',
					icon: 'e802',
					iconSize: '80',
					iconPosition: 'middle-h'
				});
				$("#js-circle").circliful({
					animation: 1,
					animationStep: 3,
					target: 10,
					start: 2,
					showPercent: 1,
					percent: 60,
					backgroundColor: '#FFF',
					foregroundColor: '#0091e4',
					fontColor: '#FFF',
					iconColor: '#FFF',
					icon: 'e803',
					iconSize: '50',
					iconPosition: 'middle-v'
				});
				$("#w3c-circle").circliful({
					animation: 1,
					animationStep: 3,
					target: 10,
					start: 2,
					showPercent: 1,
					percent: 85,
					backgroundColor: '#FFF',
					foregroundColor: '#0091e4',
					fontColor: '#FFF',
					iconColor: '#FFF',
					icon: 'e806',
					iconSize: '60',
					iconPosition: 'middle-v'
				});
				$("#ps-circle").circliful({
					animation: 1,
					animationStep: 3,
					target: 10,
					start: 2,
					showPercent: 1,
					percent: 80,
					backgroundColor: '#FFF',
					foregroundColor: '#0091e4',
					fontColor: '#FFF',
					iconColor: '#FFF',
					icon: 'e805',
					iconSize: '50',
					iconPosition: 'middle-v'
				});
				$("#crossbrowser-circle").circliful({
					animation: 1,
					animationStep: 3,
					target: 10,
					start: 2,
					showPercent: 1,
					percent: 90,
					backgroundColor: '#FFF',
					foregroundColor: '#0091e4',
					fontColor: '#FFF',
					iconColor: '#FFF',
					icon: 'e843',
					iconSize: '55',
					iconPosition: 'middle-v'
				});

			}
		}
	});
});
