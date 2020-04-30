$('.header .header__wrap').html ('<h2 class="sk-h2">Thank you for the purchase! Download link is sent to your e-mail</h2>');

$('.after-head__figure.preload').appendTo('.tone-mapping');

$('.tone-mapping__slider-wrap').prependTo('.after-head__head .container');
$('.tone-mapping__slider-wrap').prepend('<div class="slide-text-holder"><h3 class="slide-title">It’s hard to capture a perfect light sometimes, right?</h3><p>Create a perfect image from a few too dark or too bright photos with high dynamic range editing (HDR) in a few clicks!</p></div>')

$('.after-head__platforms.sk-text_type_neutral').after('<div class="text-holder_platforms"><span class="txt-digit txt-line-through">99$</span> only <span class="txt-digit-bg">69$</span> together with Luminar 4</div>');

$('.after-head__head .after-head__buy-wrap .au-buy-btn').text('Add to your Luminar 4 order');
$('.after-head__head .sk-subtitle.after-head__subtitle').appendTo('.after-head__head>.container>.row>.offset-xl-2');
$('.after-head__head .after-head__buy-wrap .sk-text_size_small.after-head__btn-subtitle').appendTo('.after-head__head>.container>.row>.offset-xl-2');

$('.tone-mapping_slide').each(function() {

	$(this).find('.tone-mapping_slide-front .create-hdr').click();
	var imgResult = $(this).find('.tone-mapping_slide-result').html();

	$(this).find('.tone-mapping_slide-front .img-wrap').append('<p class="arorow_in_slide"><img alt="img-arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAqCAYAAABLGYAnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAELSURBVHgBxdfBCoJAEAbg1UUCD13qUpd6/0fyASKCyEMUHaRmySBE3Zndf8aBX1EHvv+4Fu47R8rGxedBaSidA4zv7y1lRakj+xVlTblR3g6EL1LAD55NC/iRd2YF/MR7kwJ+5pt6AR/5rloghqsW4OBqBbi4SgEJDi8gxaEFUnBpgarfh+GSAnW/1yLx7AK5eFYBBJ5cAIVLC4S5I3FpgTMa5xYoKdfS6cyLseM18B1lH9kJp98nGufAYS7hgsS5cDj7n5C4BG5+D4XLHyncofBkOBfPgnPwA2XL2Jv9sUzBIXAKDoOlOBSW4HCYi6vAHFwNjuGq8ByuDk/hJvAYbgYPcVP4HzeHw3wAlUlvpxSQi6kAAAAASUVORK5CYII=" /></p>');

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