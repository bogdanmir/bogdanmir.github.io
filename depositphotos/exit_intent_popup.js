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
		document.addEventListener("mouseleave", function( event ) {
			var startCountDownTimer = setInterval(function(){
				minutesToSeconds = minutesToSeconds-1;
				var timer = getTime();
				var stroke_dasharray = $(".title_counter .modal_progressbar svg [stroke-dasharray]").attr('stroke-dasharray');
				var count_p = minutesToSeconds*100 / minutesToSeconds_start;
				$(".title_counter .modal_progressbar svg [stroke-dasharray]").attr('stroke-dashoffset',Math.floor(stroke_dasharray - (stroke_dasharray/100*count_p)));
				$(".title_counter .counter").html(timer[0]+"."+timer[1]);
				if (minutesToSeconds == 0) {
					clearInterval(startCountDownTimer);
					$('.modal-container').remove();
					$('._overlay.modal-overlay').remove();
					console.log("completed");
				}
			},1000)
		});
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


			$outhtml  = '<div class="modal-container">';

			$outhtml += 	'<div class="modal modal_with-poster modal_offer">';
			$outhtml += 		'<div class="modal__dialog">';
			$outhtml += 			'<div class="modal__header _drag-handler"><i class="modal__close-round icon icon-close-cross icon-round-hover _close"></i></div>';
			$outhtml += 			'<div class="modal__body _body modal__body_signup">';


			$outhtml +=					'<div class="signup-user signup-user_modal">';

												
			$outhtml +=						'<div class="title_counter">'
			$outhtml +=							'<h3 class="signup_modal_title">One-time offer!</h3>'

			$outhtml +=							'<div class="modal_progressbar">'
			$outhtml +=								'<svg width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="none" stroke="#eeeeee" stroke-width="4"></circle><circle cx="27" cy="27" r="25" fill="none" stroke="#e74c3c" stroke-width="4" stroke-dasharray="157.56" stroke-dashoffset="0"></circle></svg><div class="counter"> 15.00 </div>'
			$outhtml +=							'</div>'

			$outhtml +=						'</div>'


			$outhtml +=						'<div class="body_counter">'
			$outhtml +=							'<div class="modal_img">' +imgPlan+ '</div>'
			$outhtml +=							'<div class="modal_describe"> <p>Download this image and</p> <p>9 more for <span class="modal_describe_color">FREE</span></p></div>'
			$outhtml +=						'</div>';

			$outhtml +=						'<div class="btn_counter"><a href="" class="modal_btn button-red">Download this image for FREE</a></div>'
			$outhtml +=						'<p class="modal_bottom_describe"> in 7 days FREE Trial </p>'

			$outhtml +=					'</div>';


			$outhtml +=				'</div>';
			$outhtml += 		'</div>';
			$outhtml += 	'</div>';

			$outhtml += 	'<div class="_overlay modal-overlay"></div>';
			$outhtml += '</div>';
			$('html').append($outhtml);



		var styles = "<style>";
		styles += `
			.modal_progressbar svg{
				position: absolute;
			}
			.modal_progressbar{
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
			    margin-left: 17px;
			}
			.modal_offer {
				font-family: Arial,Helvetica,sans-serif;
			}
			.modal_offer .modal__dialog {
				border-radius: 16px;
			}
			.modal_offer .modal__body {
				padding: 40px 50px 50px;
			}
			.modal_offer .title_counter {
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 0;
			}
			.modal_offer .signup_modal_title {
				color: #3C3C3C;
				font-size: 32px;
				font-weight: 700;
				margin: 0;
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
				margin: 40px 0 0;
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