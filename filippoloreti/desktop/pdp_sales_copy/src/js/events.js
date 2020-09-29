

$(document).on('click', '.read_more', function (event) {
	event.preventDefault();

	$(this).removeClass('read_more').addClass('read_less');
	// $('.sales_text').addClass('show');
	$('.sales_text .text_hidden').slideDown();
});

$(document).on('click', '.read_less', function (event) {
	event.preventDefault();

	$(this).removeClass('read_less').addClass('read_more');
	// $('.sales_text').removeClass('show');
	$('.sales_text .text_hidden').slideUp();
});



