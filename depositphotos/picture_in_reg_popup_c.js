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
				$('.modal_signup_image .signup-user_modal').append('<div class="signup_modal_boxtitle"><div class="progress_line progress_line_50"><span class="digit">50%</span></div><span class="signup_modal_title">Create an account to save your image</span></div>');
				
				$('.modal_signup_image .signup-user__left').append('<div class="img_wrapp"></div>');

				if($('.wrapper_file-view .file-view-page_video').length > 0) {
					var videoPlaceholder = $('html').find('.view-file-box__video._video-placeholder .view-file-box__video-poster');
					videoPlaceholder.clone().appendTo(".modal_signup_image .signup-user_modal .signup-user__left .img_wrapp");
				}
				
				if( $('.wrapper_file-view .view-file-box__image-box .view-file-box__image').length > 0 ) {
					var img = $('html').find('.view-file-box__image-box .view-file-box__image');
					img.clone().appendTo(".modal_signup_image .signup-user_modal .signup-user__left .img_wrapp");
				}

				if( $('.modal-container .file-view_bg-black .file-view__thumb .view-file-box__image-box_label .view-file-box__image').length > 0 ) {
					var imgCategory = $('html').find('.modal-container .file-view_bg-black .file-view__thumb .view-file-box__image-box_label .view-file-box__image');
					imgCategory.clone().appendTo(".modal_signup_image .signup-user_modal .signup-user__left .img_wrapp");
				}
			}
		}

		function myTimerFavorites() {
			if($('html').find('.signup_modal_boxtitle').length < 1) {
				$('.modal_signup').addClass('modal_signup_image');
			}
			if($('.modal_signup.modal_signup_image').length > 0 && $('html').find('.signup_modal_boxtitle').length < 1) {
				$('.modal_signup').addClass('modal_signup_image');
				$('.modal_signup_image .signup-user_modal').append('<div class="signup_modal_boxtitle"><div class="progress_line progress_line_50"><span class="digit">50%</span></div><span class="signup_modal_title">Register to add this image to favorites</span></div>');
				
				$('.modal_signup_image .signup-user__left').append('<div class="img_wrapp"></div>');

				if($('.wrapper_file-view .file-view-page_video').length > 0) {
					var videoPlaceholder = $('html').find('.view-file-box__video._video-placeholder .view-file-box__video-poster');
					videoPlaceholder.clone().appendTo(".modal_signup_image .signup-user_modal .signup-user__left .img_wrapp");
				}
				
				if( $('.wrapper_file-view .view-file-box__image-box .view-file-box__image').length > 0 ) {
					var img = $('html').find('.view-file-box__image-box .view-file-box__image');
					img.clone().appendTo(".modal_signup_image .signup-user_modal .signup-user__left .img_wrapp");
				}

				if( $('.modal-container .file-view_bg-black .file-view__thumb .view-file-box__image-box_label .view-file-box__image').length > 0 ) {
					var imgCategory = $('html').find('.modal-container .file-view_bg-black .file-view__thumb .view-file-box__image-box_label .view-file-box__image');
					imgCategory.clone().appendTo(".modal_signup_image .signup-user_modal .signup-user__left .img_wrapp");
				}
			}
		}

		function myTimerAddCart() {
			if($('html').find('.signup_modal_boxtitle').length < 1) {
				$('.modal_signup').addClass('modal_signup_image');
			}
			if($('.modal_signup.modal_signup_image').length > 0 && $('html').find('.signup_modal_boxtitle').length < 1) {
				$('.modal_signup').addClass('modal_signup_image');
				$('.modal_signup_image .signup-user_modal').append('<div class="signup_modal_boxtitle"><div class="progress_line progress_line_50"><span class="digit">50%</span></div><span class="signup_modal_title">Register to add this image to cart</span></div>');
				
				$('.modal_signup_image .signup-user__left').append('<div class="img_wrapp"></div>');

				if($('.wrapper_file-view .file-view-page_video').length > 0) {
					var videoPlaceholder = $('html').find('.view-file-box__video._video-placeholder .view-file-box__video-poster');
					videoPlaceholder.clone().appendTo(".modal_signup_image .signup-user_modal .signup-user__left .img_wrapp");
				}
				
				if( $('.wrapper_file-view .view-file-box__image-box .view-file-box__image').length > 0 ) {
					var img = $('html').find('.view-file-box__image-box .view-file-box__image');
					img.clone().appendTo(".modal_signup_image .signup-user_modal .signup-user__left .img_wrapp");
				}

				if( $('.modal-container .file-view_bg-black .file-view__thumb .view-file-box__image-box_label .view-file-box__image').length > 0 ) {
					var imgCategory = $('html').find('.modal-container .file-view_bg-black .file-view__thumb .view-file-box__image-box_label .view-file-box__image');
					imgCategory.clone().appendTo(".modal_signup_image .signup-user_modal .signup-user__left .img_wrapp");
				}
			}
		}

		function myStopFunction() {
			if(typeof window.interval){
				clearInterval(window.interval);
			}
		}

		$('body').on('click','.price-table-classic__download', function(){
			myStopFunction();
			window.interval = setInterval(myTimer, 1);

			localStorage.setItem('popup_active', true);
			if (localStorage.getItem('popup_active') == "true") {
				console.log('1')
			} else {
				console.log('2')
			}
		})

		$('body').on('mousedown', '.view-file-box__action-item.button-download', function(){
			myStopFunction();
			window.interval = setInterval(myTimer, 1);

			localStorage.setItem('popup_active', true);
			if (localStorage.getItem('popup_active') == "true") {
				console.log('1')
			} else {
				console.log('2')
			}
		})

		// category modal
		$('body').on('mousedown','.modal-container .price-table-classic__download', function(){
			myStopFunction();
			window.interval = setInterval(myTimer, 1);

			localStorage.setItem('popup_active', true);
			if (localStorage.getItem('popup_active') == "true") {
				console.log('1')
			} else {
				console.log('2')
			}
		})

		$('body').on('mousedown', '.modal-container .view-file-box__action-item.button-download', function(){
			myStopFunction();
			window.interval = setInterval(myTimer, 1);

			localStorage.setItem('popup_active', true);
			if (localStorage.getItem('popup_active') == "true") {
				console.log('1')
			} else {
				console.log('2')
			}
		})

		//add to favorites
		$('body').on('mousedown', '.view-file-box__action-item.button-add-to-favorites', function(){
			myStopFunction();
			window.interval = setInterval(myTimerFavorites, 1);

			localStorage.setItem('popup_active', true);
			if (localStorage.getItem('popup_active') == "true") {
				
			} else {
				
			}
		})
		//add to favorites listing
		$('body').on('mousedown', '.file-container__actions-item.button-add-to-favorites', function(){
			myStopFunction();
			window.interval = setInterval(myTimerFavorites, 1);

			localStorage.setItem('popup_active', true);
		})
		//add to cart
		$('body').on('mousedown', '.view-file-box__action-item.button-add-to-cart', function(){
			if (!$(this).hasClass("active")) {
				myStopFunction();
				window.interval = setInterval(myTimerAddCart, 1);

				localStorage.setItem('popup_active', true);
				if (localStorage.getItem('popup_active') == "true") {
					
				} else {
					
				}
			}
		})
		//add to cart listing
		$('body').on('mousedown', '.file-container__actions-item.button-add-to-cart', function(){
			if (!$(this).hasClass("active")) {
				myStopFunction();
				window.interval = setInterval(myTimerAddCart, 1);

				localStorage.setItem('popup_active', true);
			}
		})

		$('body').on('mousedown', '.modal-container_file-zoom .modal__zoom-caption-button ._download', function(){
			myStopFunction();
			window.interval = setInterval(myTimer, 1);

			localStorage.setItem('popup_active', true);
			if (localStorage.getItem('popup_active') == "true") {
				
			} else {
				
			}
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

		if (localStorage.getItem('popup_active') == "true") {
			console.log('1')
			$('body').addClass('progress_wrap');
			//log out user
			setInterval(function() {
				if($('.subscribe__wrapper .plans').length > 0 && $('.progress_line').length < 1 ) {
					$('.subscribe__wrapper .plans').closest('.progress_wrap').find('.content').prepend('<div class="progress_line_logout"><div class="progress_line progress_line_70"><span class="digit">70%</span></div></div>');
				}
			},0);

			//log in user
			setInterval(function() {
				if($('.subscribe__plans-box').length > 0 && $('.progress_line').length < 1 ) {
					$('.subscribe__plans-box').closest('.progress_wrap').find('.content').prepend('<div class="progress_line progress_line_70"><span class="digit">70%</span></div>');
				}
			},0);

			setInterval(function() {
				if($('.billing-custom .billing-custom__wrap').length > 0 && $('.progress_line').length < 1 ) {
					$('body').find('.billing-custom .billing-custom__wrap').closest('.content').prepend('<div class="progress_line_wrap"><div class="progress_line progress_line_90"><span class="digit">90%</span></div></div>');
				}
			},0);
		} else {
			$('body').removeClass('progress_wrap');
			console.log('2')
		}


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
				height: calc(100% - 8px);
			}
			.progress_line_50:before {
				width: calc(50% - 10px);
			}
			.progress_line .digit {
				margin-left: 30px;
			}
			.progress_wrap .subscribe .subscribe__wrapper .progress_line {
				margin: 25px auto 0;
			}
			.progress_wrap .progress_line {
				margin: 0 auto;

				position: absolute;
				width: 630px;
				left: 0;
				right: 0;
				top: 75px;
				z-index: 2;
			}
			.progress_wrap .progress_line_70:before {
				width: 70%;
			}
			.progress_wrap .progress_line_70 .digit {
				margin-left: calc(70% + 14px);
			}
			.progress_wrap .subscribe.subscribe_fresh .subscribe__wrapper .subscribe__title-box {
				margin-top: 65px;
			}
			.progress_wrap .subscribe.subscribe_mixed .subscribe__title-box {
				margin-top: 112px;
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
				right: 0;
				object-fit: cover;
				height: calc(100% + 27px);
				max-height: calc(100% + 27px);
			}
			.modal_signup_image .signup-user__back {
				left: -420px;
			}
			.progress_wrap .billing-custom .billing-custom__wrap {
				position: relative;
				padding-top: 110px;
			}
			.progress_wrap .progress_line_wrap {
				position: absolute;
				top: 96px;
				left: 0;
				width: 100%;
			}
			.progress_wrap .progress_line_wrap .progress_line {
				position: relative;
			}
			.progress_wrap .progress_line_wrap .progress_line_90:before {
				width: calc(90% - 10px);
			}
			.progress_wrap .progress_line_wrap .progress_line_90 .digit {
				margin-left: calc(90% + 3px);
			}

			.modal_signup_image .progress_line {
				color: #96B72C;
				background: #F2F2F2;
				border-radius: 40px;
				position: relative;
				font-size: 16px;
				font-weight: 700;
				max-width: 630px;
				margin: 0 auto 12px;
				padding: 3px;
				top: 0;
			}
			.modal_signup_image .progress_line:before {
				content: '';
				position: absolute;
				top: 4px;
				left: 4px;
				background: #96B72C;
				border-radius: 40px;
				height: calc(100% - 8px);
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
				.progress_wrap .subscribe .subscribe__wrapper .progress_line {
					margin: 45px auto 0;
				}
			}
		`;
		styles    += "</style>";
		$('body').append(styles);
	});
}