// Hotjar trigger to record video sessions of the alternative variation of the experiment
try {
	(function(h,o,t,j,a,r){
	    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
	    h._hjSettings={hjid:1953436,hjsv:6};
	    a=o.getElementsByTagName('head')[0];
	    r=o.createElement('script');r.async=1;
	    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
	    a.appendChild(r);
	})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
	window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
	hj('trigger', 'pdp_sticky_button_credit');
}
catch(e) {}

// Page-hiding snippet
(function(a, s, y, n, c, h, i, d, e) {
    s.className += ' ' + y
    h.start = 1 * new Date()
    h.end = i = function() {
      s.className = s.className.replace(RegExp(' ?' + y), '')
    }
    ;(a[n] = a[n] || []).hide = h
    setTimeout(function() {
      i()
      h.end = null
    }, c)
    h.timeout = c
})(window, document.documentElement, 'async-hide', 'dataLayer', 0, {
    'GTM-P46SHG8': true,
})

// Activation of the alt variation
window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'PDP sticky button credit',
	'eventAction': 'loaded'
});



$(document).on('click', '.proposition_button_credit', function () {

	document.querySelectorAll('#react_phones_bottom .phones_item:first-child .cro-button')[0].click();

	// Button inquire about the loan click Узнать о кредитах на это авто
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'PDP sticky button credit',
		'eventAction': 'click sticky button',
		'eventLabel': language.credit_text
	});
	console.log('click on '+ language.credit_text)

	var img_car = $('.image-gallery .image-gallery-slide:first-child .image-gallery-image picture').html();

	if(typeof window.display_info != 'undefined'){
		clearInterval(window.display_info);
	}

	window.display_info = setInterval(function() {
		if( $('.ab_test_modal').length == 0 ) {
			$('body').find('.react_modal').addClass('ab_test_modal');
		}
	

		if($('.ab_test_modal').length) {

			if( $('.ab_test_modal .modal_title').length == 0 ) {
				$('.ab_test_modal .phones_modal__item').prepend('<div class="modal_title"><p>Узнать о кредитных предложениях на этот автомобиль можно по телефону:</p></div>');
				if($('.ab_test_modal .phones_modal__item').length > 0){
					$('.ab_test_modal .react_modal__body').prepend('<div class="modal_photo-car">'+ img_car +'</div>');
				}
			}

			if( $('.ab_test_modal .modal_form').length == 0 ) {
				$('.ab_test_modal .phones_modal__item').append('<div class="text_devider"><p>или</p></div>');
				$('.ab_test_modal .phones_modal__item').append('<div class="sub_title"><p>оставьте свой номер телефона</p></div>');
				$('.ab_test_modal .phones_modal__item').append('<div class="info_text"><p>мы перезвоним и дадим информацию по кредитам</p></div>');
				$('.ab_test_modal .phones_modal__item').append('<form class="modal_form" id="example-form"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.26705 0.980004C2.43105 0.815985 2.62805 0.688713 2.84499 0.606631C3.06192 0.524549 3.29383 0.489534 3.52533 0.503908C3.75683 0.518282 3.98263 0.581717 4.18774 0.690004C4.39286 0.798292 4.5726 0.948957 4.71505 1.132L6.39605 3.294C6.70505 3.69 6.81405 4.207 6.69205 4.694L6.17905 6.747C6.15237 6.85353 6.15373 6.96515 6.183 7.071C6.21226 7.17685 6.26844 7.27331 6.34605 7.351L8.65005 9.654C8.72774 9.73162 8.82421 9.78779 8.93005 9.81706C9.0359 9.84632 9.14752 9.84768 9.25405 9.821L11.3061 9.308C11.5467 9.24789 11.7979 9.2433 12.0407 9.29458C12.2834 9.34587 12.5113 9.45167 12.7071 9.604L14.8691 11.285C15.6461 11.889 15.7181 13.038 15.0221 13.733L14.0521 14.703C13.3591 15.396 12.3221 15.701 11.3551 15.361C8.88146 14.4903 6.6356 13.074 4.78405 11.217C2.92669 9.36555 1.51 7.11969 0.639051 4.646C0.299051 3.679 0.604051 2.642 1.29705 1.948L2.26705 0.979004V0.980004Z" fill="#9B9B9B"/></svg> <input placeholder="(000) 000 00 00" class="input_number" maxlength="15"><button type="button" class="modal_btn button--green">Позвонить мне</button></form>');
			}


			if( $('.ab_test_modal .offline_list').length ) {
				$('.ab_test_modal').addClass('evening_modal')
			} else {
				$('.ab_test_modal').removeClass('evening_modal')
			}

			// $('.ab_test_modal').prepend('<a href="#" class="button-option mobile-cancel-call-2" data-button="cancel">×</a>');
			// $('body').find('.ab_test_modal #mobile-cancel-call').detach().prependTo('.ab_test_modal').html('×');

			// $('.ab_test_modal').prepend('<div class="pdp_modal_backdrop"></div>')

			// $('.ab_test_modal .seller-overlay').prepend('<div class="modal_title"><p>Узнать о кредитных предложениях на этот автомобиль можно по телефону:</p></div>');
			// $('.ab_test_modal .seller-overlay').prepend('<div class="modal_photo-car">'+ img_car +'</div>');


			// $('body').find('.ab_test_modal .rate-call .btn_success').html('Успешный звонок');
			// $('body').find('.ab_test_modal .rate-call .btn_reported').html('Пожаловаться');
			// $('.ab_test_modal .rate-call').prepend('<form class="modal_form" id="example-form"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.26705 0.980004C2.43105 0.815985 2.62805 0.688713 2.84499 0.606631C3.06192 0.524549 3.29383 0.489534 3.52533 0.503908C3.75683 0.518282 3.98263 0.581717 4.18774 0.690004C4.39286 0.798292 4.5726 0.948957 4.71505 1.132L6.39605 3.294C6.70505 3.69 6.81405 4.207 6.69205 4.694L6.17905 6.747C6.15237 6.85353 6.15373 6.96515 6.183 7.071C6.21226 7.17685 6.26844 7.27331 6.34605 7.351L8.65005 9.654C8.72774 9.73162 8.82421 9.78779 8.93005 9.81706C9.0359 9.84632 9.14752 9.84768 9.25405 9.821L11.3061 9.308C11.5467 9.24789 11.7979 9.2433 12.0407 9.29458C12.2834 9.34587 12.5113 9.45167 12.7071 9.604L14.8691 11.285C15.6461 11.889 15.7181 13.038 15.0221 13.733L14.0521 14.703C13.3591 15.396 12.3221 15.701 11.3551 15.361C8.88146 14.4903 6.6356 13.074 4.78405 11.217C2.92669 9.36555 1.51 7.11969 0.639051 4.646C0.299051 3.679 0.604051 2.642 1.29705 1.948L2.26705 0.979004V0.980004Z" fill="#9B9B9B"/></svg> <input placeholder="(000) 000 00 00" class="input_number" maxlength="15"><button type="button" class="modal_btn button--green">Позвонить мне</button></form>');
			// $('.ab_test_modal .rate-call').prepend('<div class="info_text"><p>мы перезвоним и дадим информацию по кредитам</p></div>');
			// $('.ab_test_modal .rate-call').prepend('<div class="sub_title"><p>оставьте свой номер телефона</p></div>');
			// $('.ab_test_modal .rate-call').prepend('<div class="text_devider"><p>или</p></div>');
		}
	})

});


$('body').on('click', '.ab_test_modal .react_modal__close', function () {
	if(!$('body').find('.ab_test_modal').hasClass('thankyou')){
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
		        'event': 'event-to-ga',
		        'eventCategory': 'PDP sticky button credit',
		        'eventAction': 'click Pop up loan',
		        'eventLabel': 'close'
		});
		console.log('click on close NOT Thank You');
	} else {
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
		        'event': 'event-to-ga',
		        'eventCategory': 'PDP sticky button credit',
		        'eventAction': 'click Pop up TY',
		        'eventLabel': 'close'
		});
		console.log('click on close Thank You');
	}
});


$('body').on('click', '.react_modal__close, .react_modal__backdrop', function () {
	if(typeof window.display_info != 'undefined'){
		clearInterval(window.display_info);
	}
	window.customer_click = false;

	// close_event_dataLayer();

	$('body').find('.react_modal').removeClass('ab_test_modal');
	$('body').find('.react_modal').addClass('hide_modal');

	$('.react_modal .modal_photo-car').remove();
	$('.react_modal .modal_title').remove();
	$('.react_modal .text_devider').remove();
	$('.react_modal .sub_title').remove();
	$('.react_modal .info_text').remove();
	$('.react_modal .modal_form').remove();

	// $('body').find('.ab_test_modal').removeClass('thankyou');
});


$('body').on('click', '.ab_test_modal .react_modal__body .btn-border', function () {
	if(typeof window.display_info != 'undefined'){
		clearInterval(window.display_info);
	}

	// close_event_dataLayer();

	if(!$('body').find('.ab_test_modal').hasClass('thankyou')){
		if($(this).hasClass('btn-border--red')){
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'PL - enguire about credit offer',
				'eventAction': 'click on button Пожаловаться',
				'eventLabel': language.events_label
			});
			console.log('click on button Пожаловаться');
			console.log(language.events_label);
		}
		if($(this).hasClass('btn-border--green')){
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'PL - enguire about credit offer',
				'eventAction': 'click on button Успешный звонок',
				'eventLabel': language.events_label
			});
			console.log('click on button Успешный звонок');
			console.log(language.events_label);
		}
	}else{
		if($(this).hasClass('btn-border--red')){
			// TY event
			// window.dataLayer = window.dataLayer || [];
			// dataLayer.push({
			// 	'event': 'event-to-ga',
			// 	'eventCategory': 'PL - enguire about credit offer',
			// 	'eventAction': 'TY - click on button Пожаловаться',
			// 	'eventLabel': language.events_label
			// });

			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
			        'event': 'event-to-ga',
			        'eventCategory': 'PDP sticky button credit',
			        'eventAction': 'click Pop up TY',
			        'eventLabel': 'Пожаловаться'
			});

			console.log('click on button Пожаловаться thank you');
			console.log(language.events_label);
		}
		if($(this).hasClass('btn-border--green')){
			// TY event
			// window.dataLayer = window.dataLayer || [];
			// dataLayer.push({
			// 	'event': 'event-to-ga',
			// 	'eventCategory': 'PL - enguire about credit offer',
			// 	'eventAction': 'TY - click on button Успешный звонок',
			// 	'eventLabel': language.events_label
			// });
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
			        'event': 'event-to-ga',
			        'eventCategory': 'PDP sticky button credit',
			        'eventAction': 'click Pop up TY',
			        'eventLabel': 'Успешный звонок'
			});

			console.log('click on button Успешный звонок thank you');
			console.log(language.events_label);
		}
	}
	$('body').find('.react_modal').removeClass('ab_test_modal');
	$('.react_modal__body .modal_photo-car').remove();
	$('.phones_modal_wrap').removeClass('thx_wrap');
	$('.react_modal__body .thx_holder').remove();
});



// $('body').on('click', '.react_modal__close', function () {
// 	window.dataLayer = window.dataLayer || [];
// 	dataLayer.push({
// 	        'event': 'event-to-ga',
// 	        'eventCategory': 'PDP sticky button credit',
// 	        'eventAction': 'click Pop up loan',
// 	        'eventLabel': 'close'
// 	});
// 	console.log('Pop up loan click close');
// });

$('body').on('click', '.react_modal__backdrop', function () {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	        'event': 'event-to-ga',
	        'eventCategory': 'PDP sticky button credit',
	        'eventAction': 'click Pop up loan',
	        'eventLabel': 'close'
	});
	console.log('Pop up loan click modal__backdrop');
});




////////////////////////////////////

// $('body').on('click', '.ab_test_modal .mobile-cancel-call-2, .pdp_modal_backdrop', function () {
// 	$('#mobile-cancel-call').get(0).click();
// 	close_event_dataLayer();
// });

// $('body').on('click', '.ab_test_modal .mobile-cancel-call-2, .pdp_modal_backdrop', function () {
// 	$('body').find('.ab_test_modal').removeClass('thankyou');
// 	console.log('removeClass thankyou');
// });
// $('body').on('click', '.ab_test_modal .rate-call .btn_success, .ab_test_modal .rate-call .btn_reported', function () {
// 	$('body').find('.ab_test_modal').addClass('thankyou');
// 	console.log('add Class thankyou');
// });
// $('body').on('click', '.ab_test_modal .rate-call .btn_success, .ab_test_modal .rate-call .btn_reported, .ab_test_modal .mobile-cancel-call-2, .pdp_modal_backdrop', function () {
// 	$('body').find('.seller-contact').removeClass('ab_test_modal');
// 	$('.seller-contact .modal_photo-car').remove();
// 	$('.seller-contact .modal_title').remove();
// 	$('.seller-contact .text_devider').remove();
// 	$('.seller-contact .sub_title').remove();
// 	$('.seller-contact .info_text').remove();
// 	$('.seller-contact .modal_form').remove();

// 	$('.seller-overlay').removeClass('thx_wrap');
// 	$('.seller-overlay .thx_holder').remove();

// 	$('.mobile-cancel-call-2').remove();
// 	$('.pdp_modal_backdrop').remove();
// 	close_event_dataLayer();
// });

/////////////////////





$(document).on('keydown keyup input','.input_number',function (e) {
	// console.log('1')
	var key = e.charCode || e.keyCode || 0;
	// console.log(e);
	$phone = $(this);

	// Auto-format- do not expose the mask as the user begins to type
	if (key !== 8 && key !== 9) {
		if ($phone.val().length === 0) {
			$phone.val($phone.val() + '(');
		}
		if ($phone.val().length === 4) {
			$phone.val($phone.val() + ')');
		}
		if ($phone.val().length === 5) {
			$phone.val($phone.val() + ' ');
		}			
		if ($phone.val().length === 9) {
			$phone.val($phone.val() + ' ');
		}
		if ($phone.val().length === 12) {
			$phone.val($phone.val() + ' ');
		}
	}

	if($phone.val().length === 15){
		$(this).closest('.modal_form').removeClass('error');
		$(this).closest('.modal_form').find('.error_msg').remove();
	}
	if(key == 8 || key == 9){
		$phone.val('');
	}
	return (key == 8 || 
			key == 9 ||
			key == 46 ||
			(key >= 48 && key <= 57) ||
			(key >= 96 && key <= 105));

})
	
$(document).on('focus click','.input_number',function (e) {
	// console.log('2')
	$phone = $(this);
	
	if ($phone.val().length === 0) {
		$phone.val('(');
	}
	else {
		var val = $phone.val();
		$phone.val('').val(val); // Ensure cursor remains at the end
	}
	console.log('focus, click - on number input')
})


$(document).on('click','.input_number',function (e) {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'PDP sticky button credit',
		'eventAction': 'click Pop up loan',
		'eventLabel': 'number input'
	});
	console.log('click on number input')
});

$(document).on('blur','.input_number',function (e) {
	// console.log('3')
	$phone = $(this);
	
	if ($phone.val() === '(') {
		$phone.val('');
	}

	if($phone.val().length < 15){
		$(this).closest('.modal_form').addClass('error');
		if($('.error_msg').length < 1){
			$(this).closest('.modal_form').append('<p class="error_msg">Мобильный телефон некорректен. Пример 0931234567</p>');
		}
	} else {
		$(this).closest('.modal_form').removeClass('error');
		$(this).closest('.modal_form').find('.error_msg').remove();
	}
	// console.log($phone.val().length)
});


$(document).on('click','.modal_btn',function () {

	$phone = $('.input_number');
	if($phone.val().length < 15){
		$(this).closest('.modal_form').addClass('error');
		if($('.error_msg').length < 1){
			$(this).closest('.modal_form').append('<p class="error_msg">Мобильный телефон некорректен. Пример 0931234567</p>');
		}
	} else {
		$(this).closest('.modal_form').removeClass('error');
		$(this).closest('.modal_form').find('.error_msg').remove();
		console.log($phone.val());
		if(window.customer_click){
			send_user_call(window.customer_click,$phone.val());
		}
		$('body').find('.react_modal').addClass('thankyou');
		$('.react_modal__body .modal_photo-car').remove();
		$('.phones_modal__item').addClass('is-disabled');

		$(this).closest('.ab_test_modal').find('.phones_modal_wrap').addClass('thx_wrap').prepend('<div class="thx_holder"><div class="modal_title"><p>Спасибо за вашу заявку!</p></div><div class="info_text"><p>Мы с вами свяжемся в ближайшее время</p></div></div>');
	}
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'PDP sticky button credit',
		'eventAction': 'click Pop up loan',
		'eventLabel': 'Позвонить мне'
	});
	console.log('Позвонить мне');
});

$('body').on('click','.ab_test_modal .phones_modal__item .phone',function(){
	console.log('clickToCall');
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	        'event': 'event-to-ga',
	        'eventCategory': 'PDP sticky button credit',
	        'eventAction': 'click Pop up loan',
	        'eventLabel': 'clickToCall'
	});
});


// $('body').on('click','.thankyou .react_modal__close',function(){
// 	window.dataLayer = window.dataLayer || [];
// 	dataLayer.push({
// 		'event': 'event-to-ga',
// 		'eventCategory': 'PDP sticky button credit',
// 		'eventAction': 'click Pop up TY',
// 		'eventLabel': 'close'
// 	});
// });



// $('body').on('click','.thankyou .btn_success',function(){
// 	window.dataLayer = window.dataLayer || [];
// 	dataLayer.push({
// 		'event': 'event-to-ga',
// 		'eventCategory': 'PDP sticky button credit',
// 		'eventAction': 'click Pop up TY',
// 		'eventLabel': 'Успешный звонок'
// 	});
// 	console.log('Успешный звонок thank you');
// });
// $('body').on('click','.thankyou .btn_reported',function(){
// 	window.dataLayer = window.dataLayer || [];
// 	dataLayer.push({
// 		'event': 'event-to-ga',
// 		'eventCategory': 'PDP sticky button credit',
// 		'eventAction': 'click Pop up TY',
// 		'eventLabel': 'Пожаловаться'
// 	});
// 	console.log('Пожаловаться thank you');
// });
