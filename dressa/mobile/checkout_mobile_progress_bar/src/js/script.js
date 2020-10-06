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


// var intervalis_user_click_on_tab = setInterval(function(){
window.intervalis_user_click_on_tab = setInterval(function(){
	var is_user_click_on_tab = localStorage.getItem('_click_on_tab') || 'new';
	var is_emul_click = $('html').find('.checkout__form .step-one__btn-new').data('script-trigger') || 'false';
	if($('html').find('.checkout__form .step-one__btn-new').length && is_user_click_on_tab == 'new'){
		if(is_emul_click != 'true'){
			$('html').find('.checkout__form .step-one__btn-new').data('script-trigger','true');
			$('html').find('.checkout__form .step-one__btn-new').click().addClass('step-one__btn_ab');
		}
		// clearInterval(intervalis_user_click_on_tab);
	}
},300);


var sizeHolder = '<div class="size_holder">		<span class="icon_tshirt"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 1.75951V7.96755C23 8.17924 22.8284 8.35088 22.6167 8.35088C22.405 8.35088 22.2333 8.17924 22.2333 7.96755V1.75951C22.2333 1.54782 22.405 1.37618 22.6167 1.37618C22.8284 1.37618 23 1.54782 23 1.75951ZM11.5 5.31905C13.7185 5.31905 15.5484 3.62285 15.7608 1.45917L18.1401 1.69712C18.3505 1.71797 18.5385 1.56449 18.5596 1.3538C18.5806 1.14316 18.427 0.955327 18.2163 0.934243L15.4361 0.656231C15.2099 0.633806 15.0146 0.811624 15.0146 1.03765C15.0146 2.97568 13.4379 4.55238 11.4999 4.55238C9.56187 4.55238 7.98517 2.97568 7.98517 1.03765C7.98517 0.825952 7.81353 0.654314 7.60184 0.654314C7.39014 0.654314 7.2185 0.825952 7.2185 1.03765C7.2186 3.39841 9.13924 5.31905 11.5 5.31905ZM4.25898 19.3269C4.25898 19.5386 4.43061 19.7102 4.64231 19.7102H18.3576C18.5693 19.7102 18.741 19.5386 18.741 19.3269V7.96755C18.741 7.75585 18.5693 7.58421 18.3576 7.58421C18.1459 7.58421 17.9743 7.75585 17.9743 7.96755V18.9436H5.02564V7.96755C5.02564 7.75585 4.85401 7.58421 4.64231 7.58421H0.766667V2.10643L5.11218 1.67192C5.32282 1.65084 5.47654 1.463 5.4555 1.25236C5.43442 1.04172 5.24644 0.888052 5.03595 0.909039L0.345192 1.3781C0.149212 1.39769 0 1.56257 0 1.75951V7.96755C0 8.17924 0.171637 8.35088 0.383333 8.35088H4.25898V19.3269ZM22.5522 21.7147C22.5168 21.598 22.5171 21.6157 21.7856 20.8842C21.636 20.7345 21.3933 20.7345 21.2436 20.8842C21.1068 21.0209 21.0754 21.2581 21.26 21.4427H3.68958C3.47789 21.4427 3.30625 21.6144 3.30625 21.8261C3.30625 22.0378 3.47789 22.2094 3.68958 22.2094H21.26C21.0783 22.3911 21.1042 22.6286 21.2436 22.768C21.3933 22.9177 21.636 22.9176 21.7856 22.768C22.229 22.3246 22.4629 22.0941 22.4916 22.0561C22.565 21.9583 22.5876 21.8318 22.5522 21.7147ZM2.23565 20.8842C2.08596 20.7345 1.84326 20.7345 1.69357 20.8842L1.02273 21.555C0.872994 21.7047 0.872994 21.9474 1.02273 22.0971L1.69357 22.7679C1.76841 22.8428 1.8665 22.8802 1.96463 22.8802C2.30302 22.8802 2.47791 22.468 2.2357 22.2258L1.83593 21.826L2.2357 21.4262C2.38534 21.2765 2.38534 21.0338 2.23565 20.8842ZM20.2687 1.42855V16.8906C20.2687 17.1023 20.4404 17.274 20.6521 17.274C20.8638 17.274 21.0354 17.1023 21.0354 16.8906V1.42855C21.1154 1.50852 21.2025 1.5573 21.3229 1.5573C21.6613 1.5573 21.8362 1.14512 21.594 0.902906C21.5715 0.880433 20.9196 0.226754 20.895 0.206629C20.8178 0.143091 20.7161 0.111658 20.6144 0.12172C20.4403 0.138635 20.4263 0.186839 19.7102 0.902906C19.5605 1.0526 19.5605 1.2953 19.7102 1.44499C19.8469 1.58174 20.0842 1.61313 20.2687 1.42855ZM20.381 19.5575C20.5308 19.7072 20.7734 19.7072 20.9231 19.5575L21.5939 18.8867C21.7437 18.737 21.7437 18.4943 21.5939 18.3446C21.4442 18.1949 21.2015 18.1949 21.0519 18.3446L20.6521 18.7443L20.2523 18.3445C20.1026 18.1948 19.8599 18.1948 19.7102 18.3445C19.5605 18.4942 19.5605 18.7369 19.7102 18.8866L20.381 19.5575Z" fill="black"/></svg>		</span>		<p class="size_txt">100% гарантия подбора размера</p> 		<div class="info_size_holder"><span class="info-icon_size"></span>			<div class="info_tooltip"><p>Вы можете померять товар дома и вернуть в течении 14 дней, если размер не подойдет. И мы поможем выбрать товар правильного размера по телефону.</p>			</div>		</div> 	</div>';


// $('body').find('.main>.checkout>.checkout__title').after('<div class="checkout_progress_wrap"><div class="progress_holder"> 		<div class="progress_item active"><div class="step_number">1</div> <p>контакты</p></div>  		<div class="progress_item"><div class="step_number">2</div> <p>доставка</p></div>  		<div class="progress_item"><div class="step_number">3</div> <p>оплата</p></div>  </div>  '+sizeHolder+'   </div>');


$(document).on('click', '.info-icon_size', function(){	
	$(this).closest('.info_size_holder').find('.info_tooltip').toggleClass('show');
	// var thisTooltip = $(this).closest('.info_size_holder').find('.info_tooltip');
	// if(thisTooltip.hasClass('show')){
	// 	thisTooltip.removeClass('show');
	// } else {
	// 	thisTooltip.addClass('show');
	// }
});


$(document).mouseup(function (e){
	var tooltip = $(".info_tooltip");
	if (tooltip.hasClass('show') && !tooltip.is(e.target) && tooltip.has(e.target).length === 0) {
		tooltip.removeClass('show');
	}
});




$(document).on('click', '.checkout__form .step-one__btn-new', function(){
	// var is_emul_click = $('html').find('.checkout__form .step-one__btn-new').data('script-trigger') || 'false';
	// if(is_emul_click == true){
		localStorage.setItem('_click_on_tab','new');
		$('.checkout__form .new-user__step-one .step-one__requested-fields').detach().appendTo('.checkout__form .new-user__step-one form');
		$('.checkout__form').removeClass('old_user_form');
		// $('html').find('.checkout form .step-one__next>span').text('Выбрать способ доставки');
		// console.log('click on New customer');
	// }
})

$(document).on('click', '.checkout__form .step-one__btn-new.step-one__btn_ab', function(){
	localStorage.setItem('_click_on_tab','old');
	var script_trigger = $('html').find('.checkout__form .step-one__btn-new').data('script-trigger');
	if(script_trigger == 'true') {
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'autoEvent',
			'gtmUaEventCategory': 'Exp - Checkout wo registration',
			'gtmUaEventAction': 'click on New customer'
		});
		console.log('click on New customer');
	}
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
		console.log('click on Existing customer');
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

	if($('.checkout_progress_wrap').length == 0){
		$('body').find('.main>.checkout>.checkout__title').after('<div class="checkout_progress_wrap"><div class="progress_holder"> 		<div class="progress_item active"><div class="step_number">1</div> <p>контакты</p></div>  		<div class="progress_item"><div class="step_number">2</div> <p>доставка</p></div>  		<div class="progress_item"><div class="step_number">3</div> <p>оплата</p></div>  </div>  '+sizeHolder+'   </div>');
	}

	console.log('step1')
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

	// $('html').find('.form__bordered + .step-two__title .step-two__text').prepend('<span class="step-rel">4.</span>');

	if (window.location.href.indexOf("checkout/shipping-and-payment") > -1) {
	 	$('html').find('.checkout__title-inner').addClass('is-hide');
	} else {
		$('html').find('.checkout__title-inner').removeClass('is-hide');
	}

	if($('.checkout_progress_wrap').length == 0){
		$('body').find('.main>.checkout>.checkout__title').after('<div class="checkout_progress_wrap"><div class="progress_holder"> 		<div class="progress_item selected"><div class="step_number">1</div> <p>контакты</p></div>  		<div class="progress_item active"><div class="step_number">2</div> <p>доставка</p></div>  		<div class="progress_item"><div class="step_number">3</div> <p>оплата</p></div>  </div>  '+sizeHolder+'   </div>');
	}
	

	$('html').find('.step-two__title_main + form').append('<div><div _ngcontent-c31 class="btn step-two_a__next"><span>далее</span></div></div>');


	console.log('step2')
}
$(document).on('click', '.checkout__form .promo-title', function(){
	// $('html').find('.mobile-promo-code').slideToggle(200);
	$('html').find('.mobile-promo-code').addClass('is-active');
	$('html').find('.promo-title').addClass('is-hide');
});


// step 2a button
$(document).on('click', '.step-two_a__next', function(){

	console.log('STEP 2 A')

	if($('.step-two__title_main + form #city').val() == ""){
		$('.step-two__title_main + form #city').addClass('error')
	} else {
		$('.step-two__title_main + form #city').removeClass('error')
	}


	// office
	if($('.step-two__title_main + form #office').length) {
		if($('.step-two__title_main + form #office').val() == ""){
			$('.step-two__title_main + form #office').addClass('error')
		} else {
			$('.step-two__title_main + form #office').removeClass('error')
		}
	}

	// street
	if($('.step-two__title_main + form #street').length) {
		if($('.step-two__title_main + form #street').val() == ""){
			$('.step-two__title_main + form #street').addClass('error')
		} else {
			$('.step-two__title_main + form #street').removeClass('error')
		}
	}


	if( !$('.step-two__title_main + form #street').val() == "" || 
		!$('.step-two__title_main + form #office').val() == "" && 
		!$('.step-two__title_main + form #city').val() == ""){
		
		$('.recipient-info').addClass('show_step_2b');
		$('.recipient-info + form').addClass('show_step_2b');
		$('.step-two__add-comment').addClass('show_step_2b');
		$('.checkbox__wrapper').addClass('show_step_2b');
		// $('.checkbox__wrapper + .submit').addClass('show_step_2b');
		$('.step-two__requested-fields').addClass('show_step_2b');

		$('.step-two_a__next').addClass('is-hide');

		$('.checkbox__wrapper + .submit').after('<div><div class="btn step-two_b__next"><span> Перейти к оплате </span></div></div>');

		if($('.checkbox__wrapper_ab').length == 0) {
			$('.checkout__form .checkbox__wrapper').after('<div class="checkbox__wrapper checkbox__wrapper_ab show_step_2b"><label class="call-denied"><input autocomplete="new-password" class="checkbox ng-untouched ng-valid ng-dirty" name="callDeniedCheckbox2" type="checkbox"><span class="checkbox-custom"></span></label><span class="label form__checkbox-label"><span class="label__title">  Требуется консультация по поводу размера  </span>      <span class="info_size_holder"><span class="info-icon_size"></span><div class="info_tooltip"><p>Вы можете померять товар дома и вернуть в течении 14 дней, если размер не подойдет. И мы поможем выбрать товар правильного размера по телефону.</p></div></span>    </span></div>');
		
		}
	} else {
		// $('.recipient-info').removeClass('show_step_2b');
		// $('.recipient-info + form.ng-pristine').removeClass('show_step_2b');
		// $('.step-two__add-comment').removeClass('show_step_2b');
		// $('.checkbox__wrapper').removeClass('show_step_2b');
		// $('.checkbox__wrapper + .submit').removeClass('show_step_2b');
		// $('.step-two__requested-fields').removeClass('show_step_2b');
	}




});


// step 2b button
var pattern_symbol = /[^а-яА-ЯёЁ ]/g;
var pattern_phone = /[^0-9'".]/;
var pattern_email = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;


$(document).on('click', '.step-two_b__next', function(){

	console.log('STEP 2 B')

	var firstName = $('.recipient-info + form #firstName');
	var lastName = $('.recipient-info + form #lastName');
	var phone = $('.recipient-info + form #phone');
	var email = $('.recipient-info + form #newUserEmail');
	var patronymicName = $('.recipient-info + form.patronymic_check #patronymic');



	if($('.step-two__title_main + form #city').val() == ""){
		$('.step-two__title_main + form #city').addClass('error')
	} else {
		$('.step-two__title_main + form #city').removeClass('error')
	}

	// office
	if($('.step-two__title_main + form #office').length) {

		// $('.recipient-info + form').removeClass('patronymic_check')

		if($('.step-two__title_main + form #office').val() == ""){
			$('.step-two__title_main + form #office').addClass('error')
		} else {
			$('.step-two__title_main + form #office').removeClass('error')
		}
	}








	// street
	if($('.step-two__title_main + form #street').length) {

		console.log('курьерная доставка - street')

		$('.recipient-info + form').addClass('patronymic_check')

		if($('.step-two__title_main + form #street').val() == ""){
			$('.step-two__title_main + form #street').addClass('error')
		} else {
			$('.step-two__title_main + form #street').removeClass('error')
		}
	} else {
		$('.recipient-info + form').removeClass('patronymic_check')
	}


// проверка обязательных полей на кириллицу

	
	// Имя
	if( firstName.val().search(pattern_symbol) == 0 ) {
		firstName.addClass('error_ab')
		firstName.closest('.input-placeholder').next('.error-text_ab').remove();
		firstName.closest('.input-placeholder').after('<p _ngcontent-c31 class="error-text error-text_ab"> Имя должно состоять только из букв кириллицы </p>');
	}else {
		firstName.removeClass('error_ab')
		firstName.closest('.input-placeholder').next('.error-text_ab').remove();
	}

	// Фамилия
	if( lastName.val().search(pattern_symbol) == 0 ) {
		lastName.addClass('error_ab')
		lastName.closest('.input-placeholder').next('.error-text_ab').remove();
		lastName.closest('.input-placeholder').after('<p _ngcontent-c31 class="error-text error-text_ab"> Фамилия должна состоять только из букв кириллицы </p>');
	}else {
		lastName.removeClass('error_ab')
		lastName.closest('.input-placeholder').next('.error-text_ab').remove();
	}



	// Отчество
	if( patronymicName.length > 0 && patronymicName.val().search(pattern_symbol) == 0 ) {
		patronymicName.addClass('error_ab')
		patronymicName.closest('.input-placeholder').next('.error-text_ab').remove();
		patronymicName.closest('.input-placeholder').after('<p _ngcontent-c31 class="error-text error-text_ab"> Отчество должно состоять только из букв кириллицы </p>');
	}else {
		patronymicName.removeClass('error_ab')
		patronymicName.closest('.input-placeholder').next('.error-text_ab').remove();
	}


	// Телефон
	// if( phone.val().search(pattern_phone) == 0 && phone.val().length !== 18) {
	// 	phone.addClass('error_ab')
	// }else {
	// 	phone.removeClass('error_ab')
	// }

	// if( email.val().search(pattern_email) == 0 ){
	// 	console.log('mail NOT correct')
	// 	email.addClass('error_ab')
	// } else {
	// 	email.removeClass('error_ab')
	// }

	if(!pattern_email.test( email.val() )) {
		console.log('mail NOT correct')
		email.addClass('error_ab')
	} else {
		email.removeClass('error_ab')
	}

	// проверка обязательных полей на пустоту
	$('.recipient-info + form .form__input[required]').each(function (){
		// $(this).addClass('required_field
		if( $(this).val() == "" || $(this).hasClass('ng-invalid') ){
			$(this).addClass('error')
		} else {
			$(this).removeClass('error')
		}




		// if( $(this).hasClass('ng-valid') ) {
		// 	$(this).removeClass('error')
		// }
		if( $(this).filter("[name='phone']") && phone.val().search(pattern_phone) == 0 && phone.val().length != 18 ){
			console.log('phone NOT correct')
			phone.addClass('error_ab')
		} else {
			phone.removeClass('error_ab')
		}

		// email
		// if( $(this).filter("[name='newUserEmail']") && email.val().search(pattern_email) == 0 ){
		// 	console.log('not correct mail')
		// 	email.addClass('error_ab')
		// } else {
		// 	email.removeClass('error_ab')
		// }
		


		if($('.step-two__title_main + form #office').length > 0) {
			console.log('доставка в отделение - отмена отчества')
			if($(this).attr('name') == 'patronymic') {
				// $(this).removeClass('error required_field')
				$(this).removeClass('error');
				$(this).removeClass('ng-invalid');
				// console.log('patronymic removeClass error - 4 ');
			}
		}


	});

// !$('.step-two__title_main + form #street').val() == "" ||
// !$('.step-two__title_main + form #office').val() == "" && 
	if( !$('.step-two__title_main + form #city').val() == "" &&
		!firstName.val() == "" &&
		!lastName.val() == "" &&
		// ($('.step-two__title_main + form #street').length > 0 && !$('.step-two__title_main + form #patronymic').val() == "") &&
		(!patronymicName.val() == "" && !patronymicName.hasClass('error') && !patronymicName.hasClass('error_ab') || patronymicName.length < 1) &&
		!phone.val() == "" && phone.val().length == 18 && !phone.hasClass('error') &&
		!email.val() == "" && !email.hasClass('error') && !email.hasClass('error_ab')
		// && $('.recipient-info + form.ng-invalid').length == 0 
	){

		console.log('all fields correct');

		$(this).addClass('is-hide');
		$('.form__bordered').addClass('is_show');
		$('.step-two__title_main').addClass('is-hide');

		$('.step-two__title_main + form').addClass('is-hide');

		$('.recipient-info').removeClass('show_step_2b');

		// $('.recipient-info + form.ng-pristine').removeClass('show_step_2b');
		$('.recipient-info + form').removeClass('show_step_2b').addClass('is-hide');
		$('.checkout .checkbox__wrapper+.submit .hint').addClass('is-hide');

		$('.step-two__add-comment').removeClass('show_step_2b');
		$('.checkbox__wrapper').removeClass('show_step_2b');
		$('.step-two__requested-fields').removeClass('show_step_2b');

		$('.checkout .checkbox__wrapper+.submit').addClass('is_show');

		$('.progress_item.active').removeClass('active').addClass('selected');
		$('.progress_item').next().addClass('active');

		$('.submit .step-two__next > span').text('Оплатить');

	} else {
		console.log('somethink wrong');
	}

	
});





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