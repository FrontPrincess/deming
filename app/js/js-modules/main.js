//= js-assets/variables

$(document).ready(function() {
	$('.slider-list').slick({
		slidesToShow: 1,
		dots: true,
		arrows: false,
	})

	$('input, select').styler({
		selectSmartPositioning: false
	})
});
