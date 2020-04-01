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
		var initializeTimer = 15 // enter in minutes
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
		});
		$(document).on('click','.modal_offer_overlay', function(){
			console.log('2')
			$('.modal_offer_container').remove();
		});

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
			
		`;
		styles    += "</style>";
		$('body').append(styles);
	});
}