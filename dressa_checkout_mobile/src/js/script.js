// var head= document.getElementsByTagName('head')[0];
// var script= document.createElement('script');
// script.type= 'text/javascript';
// script.src= 'https://master.d1b4uiycaor7je.amplifyapp.com/skylum/build/all.js';
// head.appendChild(script);

(function(h,o,t,j,a,r){
	h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
	h._hjSettings={hjid:1914694,hjsv:6};
	a=o.getElementsByTagName('head')[0];
	r=o.createElement('script');r.async=1;
	r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
	a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'checkout_without_registration');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'autoEvent',
	'gtmUaEventCategory': 'Exp - Checkout wo registration',
	'gtmUaEventAction': 'variation activated'
});

// window.onload = function() {
// 	$('html').find('.checkout').addClass('checkout_new');
// };

// $('html').find('.checkout__form .step-one__btn-new').click().addClass('step-one__btn_ab');

$(document).on('click', '.checkout__form .step-one__btn-new', function(){
	$('.checkout__form .new-user__step-one .step-one__requested-fields').detach().appendTo('.checkout__form .new-user__step-one form');
	$('.checkout__form').removeClass('old_user_form');
	// $('html').find('.checkout form .step-one__next>span').text('Выбрать способ доставки');
	// console.log('click on New customer')
})


$(document).on('click', '.checkout__form .step-one__btn-new.step-one__btn_ab', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on New customer'
	});

	console.log('click on New customer')
})



$(document).on('click', '.checkout__form .step-one__btn-old', function(){
	$('.checkout__form .login .login__requested-fields').detach().appendTo('.checkout__form .login form .checkbox__wrapper');
	$('.checkout__form').addClass('old_user_form');
	// $('html').find('.checkout .login .login__next>span').text('Выбрать способ доставки');
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Existing customer'
	});
	console.log('click on Existing customer')
})
function run_step_1(){
	if($('.checkout .checkout__title-inner').length > 0){
		return true;
	}

	if($('.step-one__btn-old.step-form__active').length > 0) {
		$('.checkout__form').addClass('old_user_form');
	} else {
		$('.checkout__form').removeClass('old_user_form');
	}

	$('.checkout .checkout__form').append('<div class="checkout__title-inner">1. Введите ваши контакты</div>');
	$('.checkout__form .new-user__step-one .step-one__requested-fields').detach().appendTo('.checkout__form .new-user__step-one form');
	$('.checkout__form .login .login__requested-fields').detach().appendTo('.checkout__form .login form .checkbox__wrapper');
	$('.checkout__form .social__login').prepend('<div class="social_holder"><p>или войти через</p></div>');
	$('html').find('.social__login_buttons .button__inner--facebook .button__inner_text').text('facebook');
	$('html').find('.social__login_buttons .button__inner--google .button__inner_text').text('google');

	// $('html').find('.checkout form .step-one__next>span').text('Выбрать способ доставки');
	// $('html').find('.checkout .login .login__next>span').text('Выбрать способ доставки');
	// console.log('step1')
}

function run_step_2(){
	// 2
	if($('.checkout .promo-holder').length > 0){
		return true;
	}

	$('html').find('.step-two__title_main .step-two__text').html('<span>2.</span> Выберите способ доставки');
	$('html').find('.form__bordered .step-two__text').html('<span>3.</span> Выберите способ оплаты');

	$('html').find('.form__bordered .step-two__title').append('<div class="promo-holder"><div class="promo-title">Есть промокод?</div></div>');
	$('html').find('.mobile-promo-code').detach().appendTo('.promo-holder');

	$('html').find('.form__bordered + .step-two__title .step-two__text').prepend('<span class="step-rel">4.</span>');

	if (window.location.href.indexOf("checkout/shipping-and-payment") > -1) {
	 	$('html').find('.checkout__title-inner').addClass('is-hide');
	} else {
		$('html').find('.checkout__title-inner').removeClass('is-hide');
	}

	// console.log('step2')
}
$(document).on('click', '.checkout__form .promo-title', function(){
	// $('html').find('.mobile-promo-code').slideToggle(200);
	$('html').find('.mobile-promo-code').addClass('is-active');
	$('html').find('.promo-title').addClass('is-hide');
})


$(document).on('focus', '.new-user__step-one #newUserName', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'focus on Name'
	});
	console.log('focus on Name')
});
$(document).on('focus', '.new-user__step-one #newUserPhone', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'focus on Phone number'
	});
	console.log('focus on Phone number')
});
$(document).on('focus', '.new-user__step-one #newUserEmail', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'focus on Email'
	});
	console.log('focus on Email')
});
$(document).on('click', '.social__login_buttons .facebook', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Log in with FB'
	});
	console.log('click on Log in with FB')
	// localStorage.setItem('new_checkout','true');
})
$(document).on('click', '.social__login_buttons .google', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
	 	'gtmUaEventAction': 'click on Log in with Google'
	});
	console.log('click on Log in with Google')
	// localStorage.setItem('new_checkout','true');
})
$(document).on('click', '.new-user__step-one form .step-one__next', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Select shipping method'
	});
	console.log('click on Select shipping method (new user)')
	// localStorage.setItem('new_checkout','true');
})
$(document).on('click', '.new-user__step-two .select', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
	 	'gtmUaEventAction': 'click on Post office number'
	});
	console.log('click on Post office number')
})
$(document).on('focus', '.new-user__step-two #city', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Post office city'
	});
	console.log('focus on Post office city')
})
$(document).on('focus', '.new-user__step-two #office', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Post office address'
	});
	console.log('focus on Post office address')
})
$(document).on('click', '.form__bordered form>div:nth-child(1) label span', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Shipping method'
	});
	console.log('click on Shipping method')
})
$(document).on('click', '.form__bordered form>div:nth-child(2) label span', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Shipping method_2'
	});
	console.log('click on Shipping method_2')
})
$(document).on('focus', '.new-user__step-two #firstName', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Shipping first name'
	});
	console.log('focus on Shipping first name')
});
$(document).on('focus', '.new-user__step-two #lastName', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Shipping last name'
	});
	console.log('focus on Shipping last name')
});
$(document).on('focus', '.new-user__step-two #patronymic', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Shipping second name'
	});
	console.log('focus on Shipping second name')
});
$(document).on('focus', '.new-user__step-two #phone', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Shipping phone number'
	});
	console.log('focus on Shipping phone number')
});
$(document).on('focus', '.new-user__step-two #newUserEmail', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
	 	'gtmUaEventAction': 'click on Shipping email'
	});
	console.log('focus on Shipping email')
});
$(document).on('click', '.new-user__step-two .checkbox__wrapper', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Do not call me back to verify the order'
	});
	console.log('click on Do not call me back to verify the order')
});
$(document).on('click', '.submit .step-two__next', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'autoEvent',
		'gtmUaEventCategory': 'Exp - Checkout wo registration',
		'gtmUaEventAction': 'click on Complete order'
	});
	console.log('click on Complete order')
});

window.interval_out_1 = setInterval(function(){
	if($('html').find('.checkout .step-one__buttons').length > 0){
		run_step_1();
		// console.log('%cTest come','background:red;color:#fff;');
		// console.log('run_step_1 Interval')
		// clearInterval(window.interval_out_1);
	}
},300);

window.interval_out = setInterval(function(){
	if($('html').find('.checkout .social__login').length > 0){
		// console.log('added new_user true')
		localStorage.setItem('new_user','true');
	}
	if( $('html').find('.checkout .step-two__next').length > 0 && localStorage.getItem('new_user') == 'true'){
		run_step_2();
		// console.log('%cTest come','background:blue;color:#fff;');
		// clearInterval(window.interval_out);
	}
},300);