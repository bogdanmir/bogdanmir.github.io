var langs_slider_title = {
	'en': 'It’s hard to capture a perfect light sometimes, right?',
	'de': 'Es ist manchmal schwer, ein perfektes Licht einzufangen, nicht wahr?',
	'ko': '사진을 위한 완벽한 조명을 찾기가 쉽지는 않죠?',
	'jp': '毎回完璧なライティングで撮るのは難しいですよね？',
	'fr': 'Il est parfois difficile de capturer une lumière parfaite, non ?',
	'nl': 'Het is soms moeilijk om het perfect licht vast te leggen, toch?',
	'it': 'È difficile catturare la luce perfetta a volte, giusto?',
	'es': 'Es difícil capturar el momento perfecto a veces, ¿cierto?',
}
var langs_slider_text = {
	'en': 'Create a perfect light for your image with world’s most advanced high dynamic range editing (HDR) in a few clicks.',
	'de': 'Schaffe dir mit der weltweit fortschrittlichsten HDR-Bearbeitung (High Dynamic Range Editing) mit nur wenigen Klicks ein perfektes Licht für Ihr Bild.',
	'ko': '클릭 몇 번만으로 세계에서 가장 고급 동작 범위를 가진 편집 기능(HDR)을 사용할 수 있습니다. 사진을 위한 완벽한 조명을 만들어 보세요.',
	'jp': '世界で最も高度なハイダイナミックレンジ（HDR）編集を使って完璧なライティングの画像をほんの数クリックで作成しよう。',
	'fr': 'Créez en quelques clics une lumière parfaite pour votre image avec l’édition à plage dynamique élevée (HDR) la plus avancée au monde.',
	'nl': 'Creëer het perfect licht voor je afbeelding met ’s werelds meest geavanceerde bewerking van het high dynamic range editing (HDR) in een paar klikken.',
	'it': 'Crea una luce perfetta per la tua immagine, con l’editing high dynamic range (HDR) più avanzato al mondo in pochi clic.',
	'es': 'Crea una luz perfecta para tu imagen con la edición de alto rango dinámico (HDR) más avanzada del mundo en unos pocos clics.',
}
var langs_price_text = {
	'en': '<span class="txt-digit txt-line-through">99$</span> only <span class="txt-digit-bg">69$</span> together with Luminar 4',
	'de': '<span class="txt-digit txt-line-through">99 Euro</span> - nur <span class="txt-digit-bg">69 Euro</span>  zusammen mit Luminar 4',
	'ko': 'Luminar 4를 <span class="txt-digit txt-line-through">$99</span>이 아닌 <span class="txt-digit-bg">$69</span>에 만나보실 수 있습니다.',
	'jp': 'Luminar 4とセットで<span class="txt-digit txt-line-through">99＄</span>がたった<span class="txt-digit-bg">69$</span>',
	'fr': '<span class="txt-digit txt-line-through">99 $</span> seulement <span class="txt-digit-bg">69 $</span> avec Luminar 4',
	'nl': '<span class="txt-digit txt-line-through">99$</span> slechts <span class="txt-digit-bg">69$</span> samen met Luminar 4',
	'it': '<span class="txt-digit txt-line-through">99$</span> solo <span class="txt-digit-bg">69$</span> insieme a Luminar 4',
	'es': '<span class="txt-digit txt-line-through">99$</span> sólo <span class="txt-digit-bg">69$</span> junto con Luminar 4'
}
var langs_green_btn = {
	'en': 'Add to your Luminar 4 order',
	'de': 'Zu deiner Luminar 4-Bestellung hinzufügen',
	'ko': 'Luminar 4 주문서에 추가해보세요',
	'jp': 'Luminar 4の注文に追加',
	'fr': 'Ajoutez à votre commande de Luminar 4',
	'nl': 'Toevoegen aan je Luminar 4 bestelling',
	'it': 'Aggiungi al tuo ordine di Luminar 4',
	'es': 'Agrega a tu compra de Luminar 4'
}
var langs_bottom_text = {
	'en': 'The award-winning software used by the most recognized HDR photographers around the globe.',
	'de': 'Die preisgekrönte Software, die von den bekanntesten HDR-Fotografen auf der ganzen Welt verwendet wird.',
	'ko': '세계 수상 경력의 소프트웨어입니다. 세계 저명 HDR 포토그래퍼들이 사용하고 있습니다.',                  
	'jp': '最も著名な世界中のHDR写真家らが使用する受賞ソフトウェア',
	'fr': 'Le logiciel primé utilisé par les photographes HDR les plus reconnus dans le monde entier.',
	'nl': 'De bekroonde software die wordt gebruikt door de meest erkende HDR-fotografen ter wereld.',
	'it': 'Il software pluripremiato utilizzato dai fotografi HDR più conosciuti in tutto il mondo.',
	'es': 'El software galardonado usado por los fotógrafos de HDR más reconocidos alrededor del mundo'
}



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

	$.each(langs_slider_title,function(index, el) {
		if( $('body.'+index).length > 0 ) {
			$('.tone-mapping__slider-wrap').prepend('<div class="slide-text-holder"><h3 class="slide-title">'+el+'</h3></div>');
		}
	});

	$.each(langs_slider_text,function(index, el) {
		if( $('body.'+index).length > 0 ) {
			$('.tone-mapping__slider-wrap .slide-text-holder').append('<p>'+el+'</p>');
		}
	});
	
	// $('.after-head__platforms.sk-text_type_neutral').after('<div class="text-holder_platforms"><span class="txt-digit txt-line-through">99$</span> only <span class="txt-digit-bg">69$</span> together with Luminar 4</div>');
	$.each(langs_price_text,function(index, el) {
		if( $('body.'+index).length > 0 ) {
			$('.after-head__platforms.sk-text_type_neutral').after('<div class="text-holder_platforms">'+el+'</div>');
		}
	});

	// $('.after-head__head .after-head__buy-wrap .au-buy-btn').text('Add to your Luminar 4 order');
	$.each(langs_green_btn,function(index, el) {
		if( $('body.'+index).length > 0 ) {
			$('.after-head__head .after-head__buy-wrap .au-buy-btn').text(el);
		}
	});
	
	// $('.after-head__head .sk-subtitle.after-head__subtitle').appendTo('.after-head__head>.container>.row>div:nth-child(2)');
	$.each(langs_bottom_text,function(index, el) {
		if( $('body.'+index).length > 0 ) {
			$('.after-head__head .sk-subtitle.after-head__subtitle').appendTo('.after-head__head>.container>.row>div:nth-child(2)').text(el);
		}
	});

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
	// $('.header .header__wrap').html ('<h2 class="sk-h2">Thank you for your purchase!</h2><p class="sk-text">The link to download is sent to your email.</p>');
	var langs_title = {
	    'en': '<h2 class="sk-h2">Thank you for your purchase!</h2> <p class="sk-text">The link to download is sent to your email.</p>',
	    'de': '<h2 class="sk-h2">Vielen Dank für deinen Kauf!</h2> <p class="sk-text"> Der Link zum Herunterladen wird dir per E-Mail zugesandt.</p>',
	    'ko': '<h2 class="sk-h2">구매해주셔서 감사합니다!</h2> <p class="sk-text"> 이메일로 다운로드 링크를 보내드렸습니다.</p>',
	    'jp': '<h2 class="sk-h2">ご購入ありがとうございます。</h2> <p class="sk-text">ダウンロードリンクをあなたのメールに送信しました。</p>',
	    'fr': '<h2 class="sk-h2">Merci pour votre achat !</h2> <p class="sk-text"> Le lien de téléchargement a été envoyé par email dans votre boîte de réception.</p>',
	    'nl': '<h2 class="sk-h2">Bedankt voor je aankoop!</h2> <p class="sk-text">De te downloaden link wordt naar je e-mail verzonden.</p>',
	    'it': '<h2 class="sk-h2">Grazie per il tuo acquisto!</h2> <p class="sk-text">Il link per il download è stato inviato alla tua email.</p>',
	    'es': '<h2 class="sk-h2">Gracias por tu compra!</h2> <p class="sk-text">El link para la descarga se ha enviado a tu correo.</p>',
	}
	$.each(langs_title,function(index, el) {
	    if( $('body.'+index).length > 0 ) {
	        $('.header .header__wrap').html(el);
	    }
	});

	$('body').find('.tone-mapping__slider-wrap').prependTo('.after-head__head .container');
	$('body').find('.after-head__figure').appendTo('.tone-mapping.sk-section');

	$.each(langs_slider_text,function(index, el) {
	    if( $('body.'+index).length > 0 ) {
	    	$('.tone-mapping__slider-wrap').prepend('<div class="slide-text-holder"><h3 class="slide-title">'+el+'</h3></div>');
	    }
	});

	// $('.tone-mapping_slide .tone-mapping_slide-front .sk-h4').text('Create a perfect image from a few too dark or too bright photos with HDR');
	$.each(langs_slider_text,function(index, el) {
		if( $('body.'+index).length > 0 ) {
			$('.tone-mapping_slide .tone-mapping_slide-front .sk-h4').text(el);
		}
	});

	// $('.tone-mapping_slide .tone-mapping_slide-front .sk-btn').text('See how HDR works');
	var langs_slider_btn = {
		'en': 'See how HDR works',
		'de': 'HDR-Foto erstellen',
		'ko': 'HDR 사진 생성',
		'jp': 'HDR写真を作成',
		'fr': 'Créer une photo HDR',
		'nl': 'Creëer HDR Foto',
		'it': 'Crea foto HDR',
		'es': 'Crear foto HDR'
	}
	$.each(langs_slider_btn,function(index, el) {
	    if( $('body.'+index).length > 0 ) {
	    	$('.tone-mapping_slide .tone-mapping_slide-front .sk-btn').text(el);
	    }
	});

	$('.after-head__head .after-head__awards img').attr({
		src: 'https://media.macphun.com/img/uploads/uploads/aurora/home-2019/au-awards.png?size=1x'
	});

	$('body').find('.aurora-buy-sec .aurora-buy-sec__btns').append('<a class="new-btn sk-btn sk-btn-large sk-btn_type_primary-2 after-head__buy-btn au-buy-btn paddle_sk_button" href="https://aurora.onfastspring.com/aurora-hdr-bundle-discount" data-fsc-item-path="aurora-hdr-bundle-discount">Buy Now</a>');

	$('body').find('.tone-mapping_slide-result .tone-mapping_slide-result-btns').append('<a class="new-btn sk-btn sk-btn-large sk-btn_type_primary-2 au-buy-btn" href="https://aurora.onfastspring.com/aurora-hdr-bundle-discount" data-fsc-item-path="aurora-hdr-bundle-discount">Buy Now</a>');
}