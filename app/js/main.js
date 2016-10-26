

$(document).ready(function() {
	$('.header-toggle__btn').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).toggleClass('active');
		$('.header-nav__nav').toggleClass('active');
	});
	$('.slider-list').slick({
		slidesToShow: 1,
		dots: true,
		arrows: false,
	})

	$('input, select').styler({
		selectSmartPositioning: false
	})
});