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

		window.interval = null;
		function myTimer() {
			if($('html').find('.signup_modal_boxtitle').length < 1) {
				$('.modal_signup').addClass('modal_signup_image');
			}
			if($('.modal_signup.modal_signup_image').length > 0 && $('html').find('.signup_modal_boxtitle').length < 1) {
				$('.modal_signup').addClass('modal_signup_image');
				$('.modal_signup_image .signup-user_modal').append('<div class="signup_modal_boxtitle"><div class="progress_line"><span class="digit">50%</span></div><span class="signup_modal_title">Create an account to save your image</span></div>');
				
				$('.modal_signup_image .signup-user__left').append('<div class="img_wrapp"></div>');

				var img = $('html').find('.view-file-box__image-box .view-file-box__image');
				img.clone().appendTo(".modal_signup_image .signup-user_modal .signup-user__left .img_wrapp");
			} 
		}
		function myStopFunction() {
			if(typeof window.interval){
				clearInterval(window.interval);
			}
		}

		$('body').on('click','.price-table-classic__download', function(){
			myStopFunction();
			window.interval = setInterval(myTimer);
		})

		$('body').on('mousedown', '.view-file-box__action-item.button-download', function(){
			myStopFunction();
			window.interval = setInterval(myTimer);
		})
		$('body').on('mousedown', '.modal_signup_image+.modal-overlay', function(){
			myStopFunction();
			if($('.modal_signup.modal_signup_image').length > 0) {
				$('.modal_signup_image .modal__close-round').click();
				$('html').find('.signup_modal_boxtitle').remove();
				$('html').find(".modal_signup_image .signup-user_modal .signup-user__left .view-file-box__image").remove();
				$('.modal_signup').removeClass('modal_signup_image');
			}
		})

		$('body').on('mousedown', '.modal_signup_image .modal__close-round', function(){
			myStopFunction();
			if($('.modal_signup.modal_signup_image').length > 0) {
				$('.modal_signup_image .modal__close-round').click();
				$('html').find('.signup_modal_boxtitle').remove();
				$('html').find(".modal_signup_image .signup-user_modal .signup-user__left .view-file-box__image").remove();
				$('.modal_signup').removeClass('modal_signup_image');
			}
		})

		//log out user
		$('.content').find('.plans').closest('.subscribe__wrapper').prepend('<div class="progress_line"><span class="digit">70%</span></div>');
		//log in user
		$('.content').find('.subscribe__plans-box').closest('.subscribe').prepend('<div class="progress_line"><span class="digit">70%</span></div>');

		$('.billing-custom .billing-custom__wrap').prepend('<div class="progress_line_wrap"><div class="progress_line"><span class="digit">90%</span></div></div>');


		var styles = "<style>";
		styles += `
			.modal_signup_image .signup-user__title {
				position: relative;
			}
			.modal_signup_image .signup_modal_boxtitle {
				position: absolute;
				left: 0;
				right: 0;
				margin: auto;
				top: 35px;
				text-align: center;
			}
			.progress_line {
				color: #96B72C;
				background: #F2F2F2;
				border-radius: 40px;
				position: relative;
				font-size: 16px;
				font-weight: 700;
				max-width: 630px;
				margin: 0 auto 12px;
				padding: 3px;
			}
			.progress_line:before {
				content: '';
				position: absolute;
				top: 4px;
				left: 4px;
				background: #96B72C;
				border-radius: 40px;
				width: calc(50% - 10px);
				height: calc(100% - 8px);
			}
			.progress_line .digit {
				margin-left: 30px;
			}
			.subscribe .subscribe__wrapper .progress_line{
				margin: 25px auto 0;
			}
			.subscribe.subscribe_mixed .progress_line {
				margin: 75px auto 0;
				z-index: 2;
			}
			.subscribe .subscribe__wrapper .progress_line:before,
			.subscribe.subscribe_mixed .progress_line:before {
				width: 70%;
			}
			.subscribe .subscribe__wrapper .progress_line .digit,
			.subscribe.subscribe_mixed .progress_line .digit {
				margin-left: calc(70% + 14px);
			}
			.subscribe.subscribe_fresh .subscribe__wrapper .subscribe__title-box,
			.subscribe.subscribe_mixed .subscribe__title-box{
				margin-top: 12px;
			}
			.modal_signup_image .signup_modal_title {
				font-weight: bold;
				font-size: 32px;
				color: #3C3C3C;
			}
			.modal_signup_image .modal__body_signup .signup-user_modal .signup-user__left {
				background: #fff;
				padding-top: 148px;
				padding-left: 30px;
				padding-bottom: 30px;
				width: 442px;
				min-height: 380px;
				margin-right: -16px;
				padding-right: 16px;
			}
			.modal_signup_image .modal__body_signup .signup-user_modal .signup-user__right {
				padding-top: 168px;
			}
			.modal_signup_image .signup-user_modal .signup-user__title,
			.modal_signup_image .signup-user_modal .signup-user__right .signup-user__sub-title,
			.modal_signup_image .signup-user_modal .signup-user__advantages {
				display: none;
			}
			.modal_signup_image .img_wrapp {
				border-radius: 16px;
				position: relative;
				height: 100%;
				width: 100%;
				overflow: hidden;
			}
			.modal_signup_image .signup-user_modal .signup-user__left .view-file-box__image {
				border-radius: 16px;
				cursor: auto;

				position: absolute;
				top: 0;
				left: 0;
				object-fit: cover;
				height: calc(100% + 27px);
				max-height: calc(100% + 27px);
			}
			.modal_signup_image .signup-user__back {
				left: -420px;
			}
			.billing-custom .billing-custom__wrap {
				position: relative;
				padding-top: 110px;
			}
			.billing-custom .billing-custom__wrap .progress_line_wrap {
				position: absolute;
				top: 43px;
				left: 0;
				width: 100%;
			}
			.billing-custom .billing-custom__wrap .progress_line {
				
			}
			.billing-custom .billing-custom__wrap .progress_line:before {
				width: calc(90% - 10px);
			}
			.billing-custom .billing-custom__wrap .progress_line .digit {
				margin-left: calc(90% + 3px);
			}
			@media screen and (min-width: 541px) {
				.modal_signup_image .modal__body_signup .signup-user_modal .signup-user__right {
					padding-left: 50px;
				}
			}
			@media screen and (min-width: 991px) {
				.modal_signup_image .modal__body_signup .signup-user_modal {
					width: 895px;
				}
			}
			@media screen and (max-width: 1199px) {
				.subscribe .subscribe__wrapper .progress_line {
					margin: 45px auto 0;
				}
			}
		`;
		styles    += "</style>";
		$('body').append(styles);
	});
}