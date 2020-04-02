function initjQuery(callback) {
	var script = document.createElement( "script" )
	script.type = "text/javascript";
	if(script.readyState) {
	script.onreadystatechange = function() {
		if ( script.readyState === "loaded" || script.readyState === "complete" ) {
			script.onreadystatechange = null;
			callback();
		}
	};
  } else {
	script.onload = function() {
		callback();
	};
  }
  script.src = '//code.jquery.com/jquery.min.js';
  document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
	initjQuery(function() {
		readyjQueryinit();
	});
}else{
	readyjQueryinit();
}

function readyjQueryinit() {
	jQuery(function($) {

		var displayminutes;
		var displayseconds;
		var initializeTimer = 2 // enter in minutes
		var minutesToSeconds = initializeTimer*60;
		var minutesToSeconds_start = initializeTimer*60;
		// document.addEventListener("mouseleave", function( event ) {
			var startCountDownTimer = setInterval(function(){
				minutesToSeconds = minutesToSeconds-1;
				var timer = getTime();
				var stroke_dasharray = $(".title_counter .modal_progressbar svg [stroke-dasharray]").attr('stroke-dasharray');
				var count_p = minutesToSeconds*100 / minutesToSeconds_start;
				$(".title_counter .modal_progressbar svg [stroke-dasharray]").attr('stroke-dashoffset',Math.floor(stroke_dasharray - (stroke_dasharray/100*count_p)));
				$(".title_counter .counter").html(timer[0]+"."+timer[1]);
				if (minutesToSeconds == 0) {
					clearInterval(startCountDownTimer);
					$('.modal_offer_container').remove();
					$('.modal_offer_overlay').remove();
					console.log("completed");

					if( window.location.href.indexOf("/subscribe/image.html") > -1 ) {
						$('.subscribe__label .timer-poster_subscribe').remove();
						$('.subscribe__label .holiday-poster_subscribe').removeClass('hide-offer');
					}


					if( $('body').find('.file-view-page_image-huge').length > 0 ) {
						$('.wrapper .notification-bar.notification-bar__link').removeClass('notification-bar_timer');
						$('.notification-bar__content_timer').remove();
					}


				}
			},1000)
		// });
		function getTime(){
			displayminutes = Math.floor(minutesToSeconds/60);
			displayseconds = minutesToSeconds - (displayminutes*60);
			if (displayseconds < 10) {   
				displayseconds ="0"+displayseconds;
			}
			if (displayminutes < 10) {   
				displayminutes = "0"+displayminutes;
			}
			return [displayminutes, displayseconds];
		}

		var imgPlan = $('.subscribe__title-box .images-fan__item').html();

		$outhtml  = '<div class="modal-container modal_offer_container">';
		$outhtml += 	'<div class="modal modal_with-poster modal_offer">';
		$outhtml += 		'<div class="modal__dialog">';
		$outhtml += 			'<div class="modal__header _drag-handler"><i class="modal__close-round icon icon-close-cross icon-round-hover _close"></i></div>';
		$outhtml += 			'<div class="modal__body _body modal__body_signup">';
		$outhtml +=					'<div class="signup-user signup-user_modal">';							
		$outhtml +=						'<div class="title_counter">'
		$outhtml +=							'<h3 class="signup_modal_title">Ограниченное предложение!</h3>'
		$outhtml +=							'<div class="modal_progressbar">'
		$outhtml +=								'<svg width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="none" stroke="#eeeeee" stroke-width="4"></circle><circle cx="27" cy="27" r="25" fill="none" stroke="#e74c3c" stroke-width="4" stroke-dasharray="157.56" stroke-dashoffset="0"></circle></svg><div class="counter"> 15.00 </div>'
		$outhtml +=							'</div>'
		$outhtml +=						'</div>'
		$outhtml +=						'<div class="body_counter">'
		$outhtml +=							'<div class="modal_img">' +imgPlan+ '</div>'
		$outhtml +=							'<div class="modal_describe"> <p>Скачайте это изображение</p> <p>+ 9 других <span class="modal_describe_color">БЕСПЛАТНО</span></p></div>'
		$outhtml +=						'</div>';
		$outhtml +=						'<div class="btn_counter"><a href="https://depositphotos.com/subscribe/trial.html?id=4&product=membership" class="modal_btn button-red">Скачать бесплатно</a></div>'
		$outhtml +=						'<p class="modal_bottom_describe"> в течение 7-дневного пробного периода </p>'
		$outhtml +=					'</div>';
		$outhtml +=				'</div>';
		$outhtml += 		'</div>';
		$outhtml += 	'</div>';
		$outhtml += 	'<div class="_overlay modal-overlay modal_offer_overlay"></div>';
		$outhtml += '</div>';
		var check_modal_offer = localStorage.getItem('modal_offer_active');
		if(check_modal_offer == null){
			localStorage.setItem('modal_offer_active', false);
		}
		document.addEventListener("mouseleave", function( event ) {
			if( window.location.href.indexOf("/subscribe/image.html") > -1 && $('.modal_offer_container').length < 1 && localStorage.getItem('modal_offer_active') == "false") {
				localStorage.setItem('modal_offer_active', true);
				console.log('3')
				$('html').append($outhtml);		
			} else {
				console.log('4')
			}
		});

		$(document).on('click','.modal_offer .modal__close-round', function(){
			console.log('1')
			$(this).closest('.modal_offer_container').remove();
			getTimeLabelPlans();
		});
		$(document).on('click','.modal_offer_overlay', function(){
			console.log('2')
			$('.modal_offer_container').remove();
			getTimeLabelPlans();
		});




		var	$labelOuthtml = `<div class="timer-poster_subscribe">
								<div class="title_counter">
									<div class="modal_progressbar">
										<svg width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="none" stroke="#eeeeee" stroke-width="4"></circle><circle cx="27" cy="27" r="25" fill="none" stroke="#e74c3c" stroke-width="4" stroke-dasharray="157.56" stroke-dashoffset="0"></circle></svg><div class="counter"> 15.00 </div>
									</div>
									<div>
										<h3 class="signup_modal_title">Ограниченное предложение!</h3>
										<div class="body_counter">Скачайте 10 изображений <span class="timer_describe_color">БЕСПЛАТНО</span></div>
									</div>
								</div>
								<div class="btn_counter">
									<a href="https://depositphotos.com/subscribe/trial.html?id=4&product=membership" class="timer_btn button-red">
									Скачать 10 изображений БЕСПЛАТНО
									<svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1.74512 0.0444336L8.20068 6.5L1.74512 12.9556L0.215332 11.4194L5.13477 6.5L0.215332 1.58057L1.74512 0.0444336Z" fill="white"/>
									</svg>
									</a>
								</div>
							</div>`;

		// var	$labelOuthtml_2 = `<div class="notification-bar__content_timer"><div class="timer-poster_subscribe">
		// 				<div class="title_counter">
		// 					<div class="modal_progressbar">
		// 						<svg width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="none" stroke="#eeeeee" stroke-width="4"></circle><circle cx="27" cy="27" r="25" fill="none" stroke="#e74c3c" stroke-width="4" stroke-dasharray="157.56" stroke-dashoffset="0"></circle></svg><div class="counter"> 15.00 </div>
		// 					</div>
		// 					<div>
		// 						<h3 class="signup_modal_title">Ограниченное предложение!</h3>
		// 						<div class="body_counter">Скачайте 10 изображений <span class="timer_describe_color">БЕСПЛАТНО</span></div>
		// 					</div>
		// 				</div>
		// 				<div class="btn_counter">
		// 					<a href="https://depositphotos.com/subscribe/trial.html?id=4&product=membership" class="timer_btn button-red">
		// 					Скачать 10 изображений БЕСПЛАТНО
		// 					<svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
		// 						<path d="M1.74512 0.0444336L8.20068 6.5L1.74512 12.9556L0.215332 11.4194L5.13477 6.5L0.215332 1.58057L1.74512 0.0444336Z" fill="white"/>
		// 					</svg>
		// 					</a>
		// 				</div>
		// 			</div></div>`;
			
		

		function getTimeLabelPlans(){
			if( window.location.href.indexOf("/subscribe/image.html") > -1 ) {
				$('.subscribe__label .holiday-poster_subscribe').addClass('hide-offer');

				$('.subscribe__label._label').append($labelOuthtml);

			}
		}

		// function getTimeLabelPdp(){
		// 	if( $('body').find('.file-view-page_image-huge').length > 0 ) {
		// 		$('.wrapper .notification-bar.notification-bar__link').addClass('notification-bar_timer');
		// 		$('.notification-bar_timer').append('<div class="notification-bar__content_timer"><div class="timer-poster_subscribe"><div class="title_counter"><div class="modal_progressbar"><svg width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="none" stroke="#eeeeee" stroke-width="4"></circle><circle cx="27" cy="27" r="25" fill="none" stroke="#e74c3c" stroke-width="4" stroke-dasharray="157.56" stroke-dashoffset="0"></circle></svg><div class="counter"> 15.00 </div></div><div><h3 class="signup_modal_title">Ограниченное предложение!</h3><div class="body_counter">Скачайте 10 изображений <span class="timer_describe_color">БЕСПЛАТНО</span></div></div></div><div class="btn_counter"><a href="https://depositphotos.com/subscribe/trial.html?id=4&product=membership" class="timer_btn button-red">Скачать 10 изображений БЕСПЛАТНО<svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74512 0.0444336L8.20068 6.5L1.74512 12.9556L0.215332 11.4194L5.13477 6.5L0.215332 1.58057L1.74512 0.0444336Z" fill="white"/></svg></a></div></div></div>');
		// 	}
		// }

		// function getTimeLabelListing(){
		// 	if( $('body').find('.search-box__result').length > 0 ) {
		// 		$('.wrapper .notification-bar.notification-bar__link').addClass('notification-bar_timer');
		// 		$('.notification-bar_timer').append('<div class="notification-bar__content_timer"><div class="timer-poster_subscribe"><div class="title_counter"><div class="modal_progressbar"><svg width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="none" stroke="#eeeeee" stroke-width="4"></circle><circle cx="27" cy="27" r="25" fill="none" stroke="#e74c3c" stroke-width="4" stroke-dasharray="157.56" stroke-dashoffset="0"></circle></svg><div class="counter"> 15.00 </div></div><div><h3 class="signup_modal_title">Ограниченное предложение!</h3><div class="body_counter">Скачайте 10 изображений <span class="timer_describe_color">БЕСПЛАТНО</span></div></div></div><div class="btn_counter"><a href="https://depositphotos.com/subscribe/trial.html?id=4&product=membership" class="timer_btn button-red">Скачать 10 изображений БЕСПЛАТНО<svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74512 0.0444336L8.20068 6.5L1.74512 12.9556L0.215332 11.4194L5.13477 6.5L0.215332 1.58057L1.74512 0.0444336Z" fill="white"/></svg></a></div></div></div>');
		// 	}
		// }
		

		if( localStorage.getItem('modal_offer_active') == "true" ) {
			console.log('modal_offer_active == true')
			// getTimeLabelPdp();
			if( $('body').find('.file-view-page_image-huge').length > 0 ) {
				console.log('modal_offer_active == true ->>>>>  getTimeLabelPdp')
				$('.wrapper .notification-bar.notification-bar__link').addClass('notification-bar_timer');
				$('.notification-bar_timer').append('<div class="notification-bar__content_timer"><div class="timer-poster_subscribe"><div class="title_counter"><div class="modal_progressbar"><svg width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="none" stroke="#eeeeee" stroke-width="4"></circle><circle cx="27" cy="27" r="25" fill="none" stroke="#e74c3c" stroke-width="4" stroke-dasharray="157.56" stroke-dashoffset="0"></circle></svg><div class="counter"> 15.00 </div></div><div><h3 class="signup_modal_title">Ограниченное предложение!</h3><div class="body_counter">Скачайте 10 изображений <span class="timer_describe_color">БЕСПЛАТНО</span></div></div></div><div class="btn_counter"><a href="https://depositphotos.com/subscribe/trial.html?id=4&product=membership" class="timer_btn button-red">Скачать 10 изображений БЕСПЛАТНО<svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74512 0.0444336L8.20068 6.5L1.74512 12.9556L0.215332 11.4194L5.13477 6.5L0.215332 1.58057L1.74512 0.0444336Z" fill="white"/></svg></a></div></div></div>');
			}

			// getTimeLabelListing();
			if( $('body').find('.search-box__result').length > 0 ) {
				console.log('modal_offer_active == true ->>>>>  getTimeLabelListing')
				$('.wrapper .notification-bar.notification-bar__link').addClass('notification-bar_timer');
				$('.notification-bar_timer').append('<div class="notification-bar__content_timer"><div class="timer-poster_subscribe"><div class="title_counter"><div class="modal_progressbar"><svg width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="none" stroke="#eeeeee" stroke-width="4"></circle><circle cx="27" cy="27" r="25" fill="none" stroke="#e74c3c" stroke-width="4" stroke-dasharray="157.56" stroke-dashoffset="0"></circle></svg><div class="counter"> 15.00 </div></div><div><h3 class="signup_modal_title">Ограниченное предложение!</h3><div class="body_counter">Скачайте 10 изображений <span class="timer_describe_color">БЕСПЛАТНО</span></div></div></div><div class="btn_counter"><a href="https://depositphotos.com/subscribe/trial.html?id=4&product=membership" class="timer_btn button-red">Скачать 10 изображений БЕСПЛАТНО<svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74512 0.0444336L8.20068 6.5L1.74512 12.9556L0.215332 11.4194L5.13477 6.5L0.215332 1.58057L1.74512 0.0444336Z" fill="white"/></svg></a></div></div></div>');
			}
		} else {
			console.log('modal_offer_active == false')
		}


		var styles = "<style>";
		styles += `
			.modal_progressbar svg{
				position: absolute;
				transform: rotate(-90deg);
			}
			.modal_progressbar {
			    min-width: 54px;
			    min-height: 54px;
			    position: relative;
			    display: -webkit-box;
			    display: -webkit-flex;
			    display: -ms-flexbox;
			    display: flex;
			    -webkit-box-pack: center;
			    -webkit-justify-content: center;
			    -ms-flex-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    -webkit-align-items: center;
			    -ms-flex-align: center;
			    align-items: center;
			}
			.modal_offer {
				font-family: Arial,Helvetica,sans-serif;
			}
			.modal_offer .modal__dialog {
				border-radius: 16px;
			}
			.modal_offer .modal__body {
				padding: 40px 62px 50px;
			}
			.modal_offer .title_counter {
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 0;
			}
			.modal_offer .counter {
				font-weight: 700;
				font-size: 16px;
			}
			.modal_offer .signup_modal_title {
				color: #3C3C3C;
				font-size: 32px;
				font-weight: 700;
				line-height: 1;
				margin: 0;
				max-width: 240px;
			}
			.modal_offer .body_counter {
				display: flex;
				align-items: center;
				margin: 35px 0 0;
			}
			.modal_offer .modal_describe {
				font-size: 22px;
				font-weight: 700;
				padding-left: 25px;
				color: #3C3C3C;
			}
			.modal_offer .modal_describe p {
				margin: 0;
			}
			.modal_offer .modal_describe .modal_describe_color {
				color:#9fbe3b;
			}
			.modal_offer .btn_counter {
				display: block;
				margin: 30px 0 0;
			}
			.modal_offer .modal_btn {
				color: #FFFFFF;
				display: block;
				font-size: 18px;
				font-weight: 700;

				border-radius: 60px;
				text-align: center;
				padding: 14px;
				text-decoration: none;
			}
			.modal_offer .images-fan__img {
				box-shadow: none;
				border-radius: 6px;
				width: 63px;
				height: 63px;
			}
			.modal_offer .modal_bottom_describe {
				text-align: center;
				font-size: 18px;
				color: #000000;
				margin: 20px 0 0;
			}


			.timer-poster_subscribe {
				background: #F7EEEF;
				position: relative;
				height: 80px;
				display: flex;
				align-items: center;
				justify-content: center;
				max-width: 1100px;
				margin: 100px auto 0;
			}
			.subscribe_fresh .timer-poster_subscribe {
				margin: 60px auto 36px;
			}
			.timer-poster_subscribe .title_counter {
				display: flex;
			}
			.timer-poster_subscribe .modal_progressbar {
				background: #fff;
				border-radius: 50%;
				margin-right: 19px;
			}
			.timer-poster_subscribe .signup_modal_title {
				color: #3C3C3C;
				font-size: 26px;
				margin: 0;
			}
			.timer-poster_subscribe .body_counter {
				color: #3C3C3C;
				font-size: 15px;
			}
			.timer-poster_subscribe .body_counter .timer_describe_color {
				color:#9fbe3b;
			}
			.timer-poster_subscribe .btn_counter {
				margin-left: 19px;
			}
			.timer-poster_subscribe .timer_btn {
				color: #FFFFFF;
				font-size: 15px;
				font-weight: 700;
				border-radius: 60px;
				text-align: center;
				padding: 14px 20px;
				text-decoration: none;
				display: block;
			}
			.timer-poster_subscribe .timer_btn svg {
				margin-left: 10px;
			}
			.hide-offer {
				display: none;
			}




			.notification-bar_timer {
				background: #F7EEEF !important;
			}
			.notification-bar_timer .notification-bar__content {
				display: none;
			}
			.notification-bar_timer .timer-poster_subscribe {
				margin: 0 auto;
			}

		`;
		styles    += "</style>";
		$('body').append(styles);
	});
}