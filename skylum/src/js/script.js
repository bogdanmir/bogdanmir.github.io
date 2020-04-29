$('.after-head__figure.preload').detach().appendTo('.tone-mapping');

$('.tone-mapping__slider-wrap').detach().prependTo('.after-head__head .container');


// $('.tone-mapping_slide').length  => 6
$('.tone-mapping_slide').each(function() {

	$(this).find('.tone-mapping_slide-front .create-hdr').click();
	// var imgResult = $(this).find('.tone-mapping_slide .img-result').html();
	var imgResult = $(this).find('.tone-mapping_slide-result').html();

	$(this).find('.tone-mapping_slide-front .img-wrap').append(imgResult);
});



if (window.matchMedia('(min-width: 1800px)').matches){
	$('.tone-mapping__slider .slick-track').css('left', '-1560px');
	console.log('min-width: 1800px')
}
if (window.matchMedia("(min-width: 1280px) and (max-width: 1799px)").matches) {
	$('.tone-mapping__slider .slick-track').css('left', '-1200px');
	console.log('(min-width: 1280px) and (max-width: 1799px)')
}
if (window.matchMedia("(min-width: 960px) and (max-width: 1279px)").matches) {
	$('.tone-mapping__slider .slick-track').css('left', '-900px');
	console.log('(min-width: 960px) and (max-width: 1279px)')
}

