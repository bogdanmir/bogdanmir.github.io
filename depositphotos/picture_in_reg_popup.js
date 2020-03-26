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

		if ($('.header .not-auth-box').length > 0) {

			window.interval = null;
			function myTimer() {
				if($('html').find('.signup_modal_boxtitle').length < 1) {
					$('.modal_signup').addClass('modal_signup_image');
				}
				if($('.modal_signup.modal_signup_image').length > 0 && $('html').find('.signup_modal_boxtitle').length < 1) {

					try {
						hj('trigger', 'exp-picture_in_reg_popup');
					}
					catch(e) {}
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
					 'event': 'gaEv',
					 'eventCategory': 'Exp - reg popup',
					 'eventAction': 'activated'
					});

					$('.modal_signup').addClass('modal_signup_image');
					$('.modal_signup_image .signup-user_modal').append('<div class="signup_modal_boxtitle"><span class="signup_modal_title">Create an account to save your image</span></div>');
					
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

			function myTimerBtn(element) {
				if($('html').find('.signup_modal_boxtitle').length < 1) {
					$('.modal_signup').addClass('modal_signup_image');
				}
				if($('.modal_signup.modal_signup_image').length > 0 && $('html').find('.signup_modal_boxtitle').length < 1) {

					try {
						hj('trigger', 'exp-picture_in_reg_popup');
					}
					catch(e) {}
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
					 'event': 'gaEv',
					 'eventCategory': 'Exp - reg popup',
					 'eventAction': 'activated'
					});

					$('.modal_signup').addClass('modal_signup_image');
					var title = typeof element.title != 'undefined' ? element.title : 'Register to add this image to favorites';
					$('.modal_signup_image .signup-user_modal').append('<div class="signup_modal_boxtitle"><span class="signup_modal_title">'+title+'</span></div>');
					
					$('.modal_signup_image .signup-user__left').append('<div class="img_wrapp"></div>');

					var file      = null;
					element = element.item;
					if(element.closest('[data-id]').find('.view-file-box__video-poster').length > 0){
						file      = element.closest('[data-id]').find('.view-file-box__video-poster');
					}
					if(element.closest('[data-id]').find('.view-file-box__image').length > 0){
						file      = element.closest('[data-id]').find('.view-file-box__image');
					}
					if(element.closest('[data-id]').find('.file-container__image').length > 0){
						file      = element.closest('[data-id]').find('.file-container__image');
					}
					if(file !== null){
						var clone = file.clone();
						var src_img = clone.attr('src');
						try{
							src_img = src_img.replace(new RegExp('\/111\/'),'/950/');
							var img = $('<img src="'+src_img+'" alt="" />');
							img.load(function(data) {});
							clone.attr('src',src_img);
							
						}catch(e){console.log(e);}
						clone.appendTo(".modal_signup_image .signup-user_modal .signup-user__left .img_wrapp");
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
					// $('html').find('.modal_signup.modal_signup_image').remove();
					$('html').find('.signup_modal_boxtitle').remove();
					$('html').find(".modal_signup_image .signup-user_modal .signup-user__left .view-file-box__image").remove();
					$('.modal_signup').removeClass('modal_signup_image');
				}
			})

			$('body').on('mousedown', '.modal_signup_image .modal__close-round', function(){
				myStopFunction();
				if($('.modal_signup.modal_signup_image').length > 0) {
					$('.modal_signup_image .modal__close-round').click();
					// $('html').find('.modal_signup.modal_signup_image').remove();
					$('html').find('.signup_modal_boxtitle').remove();
					$('html').find(".modal_signup_image .signup-user_modal .signup-user__left .view-file-box__image").remove();
					$('.modal_signup').removeClass('modal_signup_image');
				}
			})


			// category modal
			$('body').on('mousedown','.modal-container .price-table-classic__download', function(){
				myStopFunction();
				window.interval = setInterval(myTimer, 1);

				if (localStorage.getItem('popup_active') == "true") {
					console.log('1')
				} else {
					console.log('2')
				}
			})

			$('body').on('mousedown', '.modal-container .view-file-box__action-item.button-download', function(){
				myStopFunction();
				window.interval = setInterval(myTimer, 1);

				if (localStorage.getItem('popup_active') == "true") {
					console.log('1')
				} else {
					console.log('2')
				}
			})

			//add to favorites PDP
			$('body').on('mousedown', '.view-file-box__action-item.button-add-to-favorites', function(){
				myStopFunction();
				window.interval = setInterval(myTimerBtn, 1, {'item':$(this)});
			})
			//add to favorites listing
			$('body').on('mousedown', '.file-container__actions-item.button-add-to-favorites', function(){
				myStopFunction();
				window.interval = setInterval(myTimerBtn, 1, {'item':$(this)});
			})

			//add to cart PDP
			$('body').on('mousedown', '.view-file-box__action-item.button-add-to-cart', function(){
				if (!$(this).hasClass("active")) {
					myStopFunction();
					window.interval = setInterval(myTimerBtn, 1,{'item': $(this),'title': 'Register to add this image to cart'});
				}
			})
			//add to cart listing
			$('body').on('mousedown', '.file-container__actions-item.button-add-to-cart', function(){
				if (!$(this).hasClass("active")) {
					myStopFunction();
					window.interval = setInterval(myTimerBtn, 1,{'item': $(this),'title': 'Register to add this image to cart'});
				}
			})

			$('body').on('mousedown', '.modal-container_file-zoom .modal__zoom-caption-button ._download', function(){
				myStopFunction();
				window.interval = setInterval(myTimer, 1);
			})

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
					top: 42px;
					text-align: center;
				}
				.modal_signup_image .signup_modal_title {
					font-weight: bold;
					font-size: 32px;
					color: #3C3C3C;
				}
				.modal_signup_image .modal__body_signup .signup-user_modal .signup-user__left {
					background: #fff;
					padding-top: 120px;
					padding-left: 30px;
					padding-bottom: 30px;
					width: 442px;
					min-height: 380px;
					margin-right: -16px;
					padding-right: 16px;
				}


				.modal_signup_image .modal__body_signup .signup-user_modal .signup-user__right {
					padding-top: 140px;
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

				.modal_signup_image .img_wrapp .file-container__image {
					height: 380px;
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
			`;
			styles    += "</style>";
			$('body').append(styles);

		} else {
			console.log('user is logged')
		}
		
	});
}