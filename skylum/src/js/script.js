
if (window.matchMedia("(min-width: 768px)").matches) {
	//desktop
	// $('.header .header__wrap').html ('<h2 class="sk-h2">Thank you for your purchase! The link to download is sent to your email.</h2>');
	var langs_title = {
	    'en': 'Thank you for your purchase! The link to download is sent to your email.',
	    'de': 'Vielen Dank für deinen Kauf! Der Link zum Herunterladen wird dir per E-Mail zugesandt.',
	    'ko': '구매해주셔서 감사합니다! 이메일로 다운로드 링크를 보내드렸습니다.',
	    'jp': 'ご購入ありがとうございます。ダウンロードリンクをあなたのメールに送信しました。',
	    'fr': 'Merci pour votre achat ! Le lien de téléchargement a été envoyé par email dans votre boîte de réception.',
	    'nl': 'Bedankt voor je aankoop! De te downloaden link wordt naar je e-mail verzonden.',
	    'it': 'Grazie per il tuo acquisto! Il link per il download è stato inviato alla tua email.',
	    'es': 'Gracias por tu compra! El link para la descarga se ha enviado a tu correo.',
	}
	$.each(langs_title,function(index, el) {
	    if( $('body.'+index).length > 0 ) {
	        $('.header .header__wrap').html('<h2 class="sk-h2">'+el+'</h2>');
	    }
	});

	

	$('body').find('.tone-mapping__slider-wrap').prependTo('.after-head__head .container');

	$('body').find('.after-head__figure').appendTo('.tone-mapping.sk-section');
	console.log($('body').find('.after-head__figure').length);

	$('.tone-mapping__slider-wrap').prepend('<div class="slide-text-holder"><h3 class="slide-title">It’s hard to capture a perfect light sometimes, right?</h3><p>Create a perfect light for your image with world’s most advanced high dynamic range editing (HDR) in a few clicks.</p></div>')

	$('.after-head__platforms.sk-text_type_neutral').after('<div class="text-holder_platforms"><span class="txt-digit txt-line-through">99$</span> only <span class="txt-digit-bg">69$</span> together with Luminar 4</div>');

	$('.after-head__head .after-head__buy-wrap .au-buy-btn').text('Add to your Luminar 4 order');
	$('.after-head__head .sk-subtitle.after-head__subtitle').appendTo('.after-head__head>.container>.row>div:nth-child(2)');

	$('.after-head__head .after-head__buy-wrap .sk-text_size_small.after-head__btn-subtitle').appendTo('.after-head__head>.container>.row>div:nth-child(2)');
	$('.after-head__head .after-head__awards img').attr({
		src: 'https://media.macphun.com/img/uploads/uploads/aurora/home-2019/au-awards.png?size=1x'
	});

	$('.tone-mapping_slide').each(function() {
		$(this).find('.tone-mapping_slide-front .create-hdr').click();
		var imgResult = $(this).find('.tone-mapping_slide-result').html();
		$(this).find('.tone-mapping_slide-front .img-wrap').append('<p class="arorow_in_slide"><img alt="img-arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAqCAYAAABLGYAnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAELSURBVHgBxdfBCoJAEAbg1UUCD13qUpd6/0fyASKCyEMUHaRmySBE3Zndf8aBX1EHvv+4Fu47R8rGxedBaSidA4zv7y1lRakj+xVlTblR3g6EL1LAD55NC/iRd2YF/MR7kwJ+5pt6AR/5rloghqsW4OBqBbi4SgEJDi8gxaEFUnBpgarfh+GSAnW/1yLx7AK5eFYBBJ5cAIVLC4S5I3FpgTMa5xYoKdfS6cyLseM18B1lH9kJp98nGufAYS7hgsS5cDj7n5C4BG5+D4XLHyncofBkOBfPgnPwA2XL2Jv9sUzBIXAKDoOlOBSW4HCYi6vAHFwNjuGq8ByuDk/hJvAYbgYPcVP4HzeHw3wAlUlvpxSQi6kAAAAASUVORK5CYII=" /></p>');
		$(this).find('.tone-mapping_slide-front .img-wrap').append(imgResult);
	});

	$('body').find('.aurora-buy-sec .aurora-buy-sec__btns').append('<a class="new-btn sk-btn sk-btn-large sk-btn_type_primary-2 after-head__buy-btn au-buy-btn paddle_sk_button" href="https://aurora.onfastspring.com/aurora-hdr-bundle-discount" data-fsc-item-path="aurora-hdr-bundle-discount">Buy Now</a>');

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

	if (navigator.appVersion.indexOf("Chrome/") != -1) {
		$('body').addClass('chrome_variant')
	} else {
		$('body').removeClass('chrome_variant')
	}
} else {
	// mobile
	$('.header .header__wrap').html ('<h2 class="sk-h2">Thank you for your purchase!</h2><p class="sk-text">The link to download is sent to your email.</p>');

	$('body').find('.tone-mapping__slider-wrap').prependTo('.after-head__head .container');
	$('body').find('.after-head__figure').appendTo('.tone-mapping.sk-section');

	$('.tone-mapping__slider-wrap').prepend('<div class="slide-text-holder"><h3 class="slide-title">It’s hard to capture a perfect light sometimes, right?</h3></div>');
	$('.tone-mapping_slide .tone-mapping_slide-front .sk-h4').text('Create a perfect image from a few too dark or too bright photos with HDR');
	$('.tone-mapping_slide .tone-mapping_slide-front .sk-btn').text('See how HDR works');
	$('.after-head__head .after-head__awards img').attr({
		src: 'https://media.macphun.com/img/uploads/uploads/aurora/home-2019/au-awards.png?size=1x'
	});

	$('body').find('.aurora-buy-sec .aurora-buy-sec__btns').append('<a class="new-btn sk-btn sk-btn-large sk-btn_type_primary-2 after-head__buy-btn au-buy-btn paddle_sk_button" href="https://aurora.onfastspring.com/aurora-hdr-bundle-discount" data-fsc-item-path="aurora-hdr-bundle-discount">Buy Now</a>');

	$('body').find('.tone-mapping_slide-result .tone-mapping_slide-result-btns').append('<a class="new-btn sk-btn sk-btn-large sk-btn_type_primary-2 au-buy-btn" href="https://aurora.onfastspring.com/aurora-hdr-bundle-discount" data-fsc-item-path="aurora-hdr-bundle-discount">Buy Now</a>');
}