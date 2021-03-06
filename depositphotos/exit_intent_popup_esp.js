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
  // script.src = '//code.jquery.com/jquery.min.js';

  script.src = '//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
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

	function CountdownTimer(elm, start_date, finish_date) {
	    this.initialize.apply(this, arguments);
	}
	CountdownTimer.prototype = {
	    initialize: function(elm, start_date, finish_date) {
	        this.elem = $(elm);
	        this.finish_date = finish_date;
	        // this.mes = mes;
	        this.start_date = start_date;
	    },
	    countDown: function() {
	        var timer = '';
	        var today = new Date();
	        today.setSeconds(today.getSeconds() + 1);
	        this.start_date = today;
	        var day = Math.floor((this.finish_date - this.start_date) / (24 * 60 * 60 * 1000));
	        var hour = Math.floor(((this.finish_date - this.start_date) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	        var min = Math.floor(((this.finish_date - this.start_date) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
			var sec = Math.floor(((this.finish_date - this.start_date) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
			var me = this;
			var counter = min*60;
			var seccounter = sec+counter;
	        if ((this.finish_date - this.start_date) > 0) {
	            if($(".title_counter .modal_progressbar svg [stroke-dasharray]").length > 0){
					var count_p = 15*60*100 / seccounter;
	            	var stroke_dasharray = $(".title_counter .modal_progressbar svg [stroke-dasharray]").attr('stroke-dasharray');
					$(".title_counter .modal_progressbar svg [stroke-dasharray]").attr('stroke-dashoffset',Math.floor(stroke_dasharray - (stroke_dasharray*100/count_p)));
	            }
	        	timer += this.addZero(min) + '.' + this.addZero(sec);
	        	this.elem.html(timer);

				$(document).find(this.elem).html(timer);

	            tid = setTimeout(function() {
	                me.countDown(this.start_date);
	            }, 1000);
	        } else {

				$('.modal_offer_container').remove();
				$('.modal_offer_overlay').remove();
				console.log("completed");

				localStorage.setItem('counter_finish','true');
			 
				if( window.location.href.indexOf("/subscribe/image.html") > -1 ) {
					//stop interval
					myStopFunction();

					$('.subscribe.subscribe_mixed .timer-poster_subscribe').remove();
					$('body').removeClass('hide-offer_holiday-poster');
				}

				if( $('body').find('.file-view-page_image-huge').length > 0 ) {

					//stop interval
					myStopFunction();
					$('body').removeClass('notification-bar_timer');
					$('.notification-bar__content_timer').remove();
				}

				if($('body').find('.search-box__result').length > 0 ){
					
					//stop interval
					myStopFunction();
					$('body').removeClass('notification-bar_timer');
					$('.notification-bar__content_timer').remove();
				}

				return;
			}
		},
	    addZero: function(num) {
	        return ('0' + num).slice(-2);
	    }
	}
	function Counterinit(){
	  var ct_started = localStorage.getItem('ct_started');
	  var ct_out     = localStorage.getItem('ct_out');
	  var counter_start = localStorage.getItem('counter_start');
	  if (ct_out == null && ct_started == 'true') {
	    if (counter_start == null) {
	        counter_start = new Date().getTime();
	        localStorage.setItem('counter_start', counter_start);
	    }
	    counter_start = new Date(Number(counter_start));
	    var date_start = counter_start;
	    var minutes = 15;
	    var date_finish = new Date(counter_start.getTime() + (15 * 60000));
	    var timer = new CountdownTimer('.countdownTest',date_start, date_finish);
	    timer.countDown();
	  }
	}

	var imgPlan = $('.subscribe__title-box .images-fan__item').html();

	$outhtml  = '<div class="modal-container modal_offer_container">';
	$outhtml += 	'<div class="modal modal_with-poster modal_offer">';
	$outhtml += 		'<div class="modal__dialog">';
	$outhtml += 			'<div class="modal__header _drag-handler"><i class="modal__close-round icon icon-close-cross icon-round-hover _close"></i></div>';
	$outhtml += 			'<div class="modal__body _body modal__body_signup">';
	$outhtml +=					'<div class="signup-user signup-user_modal">';							
	$outhtml +=						'<div class="title_counter">'
	$outhtml +=							'<h3 class="signup_modal_title">Oferta limitada!</h3>'
	$outhtml +=							'<div class="modal_progressbar">'
	$outhtml +=								'<svg width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="none" stroke="#eeeeee" stroke-width="4"></circle><circle cx="27" cy="27" r="25" fill="none" stroke="#e74c3c" stroke-width="4" stroke-dasharray="157.56" stroke-dashoffset="0"></circle></svg><div class="counter countdownTest"> 15.00 </div>'
	$outhtml +=							'</div>'
	$outhtml +=						'</div>'
	$outhtml +=						'<div class="body_counter">'
	$outhtml +=							'<div class="modal_img">' +imgPlan+ '</div>'
	$outhtml +=							'<div class="modal_describe"> <p>Descarga esta imagen</p> <p>y 9 más <span class="modal_describe_color">GRATIS</span></p></div>'
	$outhtml +=						'</div>';
	$outhtml +=						'<div class="btn_counter"><a href="https://depositphotos.com/subscribe/trial.html?id=10&product=membership" class="modal_btn button-red">Descargar gratis</a></div>'
	$outhtml +=						'<p class="modal_bottom_describe"> Prueba de 7 días </p>'
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

	// $(document).on('mouseout',function(event){
	// 	if(typeof event.relatedTarget == null && navigator.userAgent.toLowerCase().search('Macintosh') > -1 && navigator.userAgent.toLowerCase().search('Firefox') == 0){
	// 		console.log('Safari test')
	// 		if( window.location.href.indexOf("/subscribe/image.html") > -1 && $('.modal_offer_container').length < 1 && localStorage.getItem('modal_offer_active') == "false") {
	// 			localStorage.setItem('modal_offer_active', true);
	// 			console.log('3')
	// 			$('html').append($outhtml);
	// 			var ct_started = localStorage.getItem('ct_started');
	// 			if(ct_started != 'true'){
	// 				localStorage.setItem('ct_started','true');
	// 				Counterinit();
	// 			}
	// 		} else {
	// 			console.log('4')
	// 		}
	// 	} else {
	// 		console.log('Not Safari test')
	// 	}
	// });
	// document.addEventListener("mouseleave", function( event ) {
	// 	if( window.location.href.indexOf("/subscribe/image.html") > -1 && $('.modal_offer_container').length < 1 && localStorage.getItem('modal_offer_active') == "false") {
	// 		localStorage.setItem('modal_offer_active', true);
	// 		console.log('3')
	// 		$('html').append($outhtml);
	// 		var ct_started = localStorage.getItem('ct_started');
	// 		if(ct_started != 'true'){
	// 			localStorage.setItem('ct_started','true');
	// 			Counterinit();
	// 		}
	// 	} else {
	// 		console.log('4')
	// 	}
	// });

	$(window).mouseleave(function(event) {
		if (event.toElement == null) {
			if( window.location.href.indexOf("/subscribe/image.html") > -1 && $('.modal_offer_container').length < 1 && localStorage.getItem('modal_offer_active') == "false") {
				localStorage.setItem('modal_offer_active', true);
				console.log('3')
				$('html').append($outhtml);
				var ct_started = localStorage.getItem('ct_started');
				if(ct_started != 'true'){
					localStorage.setItem('ct_started','true');
					Counterinit();
				}
			} else {
				console.log('4')
			}
		}
	})

	function display_counnter(){
		var ct_started = localStorage.getItem('ct_started');
	  	var ct_out     = localStorage.getItem('ct_out');
		if(ct_started == 'true' && ct_out != 'true'){
			localStorage.setItem('ct_started','true');
			Counterinit();
		}
	}

	$(document).on('click','.modal_offer .modal__close-round', function(){
		// console.log('1')
		$(this).closest('.modal_offer_container').remove();
		getTimeLabelPlans();

		localStorage.setItem('ct_started','true');
		display_counnter();
	});
	$(document).on('click','.modal_offer_overlay', function(){
		// console.log('2')
		$('.modal_offer_container').remove();
		getTimeLabelPlans();

		localStorage.setItem('ct_started','true');
		display_counnter();
	});

	var	$labelOuthtml = `<div class="timer-poster_subscribe">
							<div class="title_counter">
								<div class="modal_progressbar">
									<svg width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="none" stroke="#eeeeee" stroke-width="4"></circle><circle cx="27" cy="27" r="25" fill="none" stroke="#e74c3c" stroke-width="4" stroke-dasharray="157.56" stroke-dashoffset="0"></circle></svg><div class="counter countdownTest"> 15.00 </div>
								</div>
								<div>
									<h3 class="signup_modal_title">Oferta limitada!</h3>
								</div>
							</div>
							<div class="btn_counter">
								<a href="https://depositphotos.com/subscribe/trial.html?id=10&product=membership" class="timer_btn button-red">
								Descarga 10 imágenes GRATIS
								<svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.74512 0.0444336L8.20068 6.5L1.74512 12.9556L0.215332 11.4194L5.13477 6.5L0.215332 1.58057L1.74512 0.0444336Z" fill="white"/>
								</svg>
								</a>
							</div>
						</div>`;

		function getTimeLabelPlans(){
			if( window.location.href.indexOf("/subscribe/image.html") > -1 ) {
				if( $('html').find(".timer-poster_subscribe").length < 1) {
					$('body').addClass('hide-offer_holiday-poster');
					$('.subscribe.subscribe_mixed').prepend($labelOuthtml);
				}
			}
		}

		window.interval = null;
		function getTimeLabelPlans_Reload(){
			if( window.location.href.indexOf("/subscribe/image.html") > -1 ) {
				if( $('html').find(".timer-poster_subscribe").length < 1) {
					$('body').addClass('hide-offer_holiday-poster');
					$('.subscribe.subscribe_mixed').prepend($labelOuthtml);
					display_counnter();
				}
			}
		}

		window.interval2 = null;
		window.interval3 = null;
		function getTimeLabelPdpListing_Reload(){
			if( $('html').find(".timer-poster_subscribe").length < 1) {
				$('body').addClass('notification-bar_timer');
				$('.wrapper').append('<div class="notification-bar__content_timer">' + $labelOuthtml + '</div>');
				display_counnter();
			}
		}

		function myStopFunction() {
			if(typeof window.interval){
				clearInterval(window.interval);
			}
		}
		function myStopFunction2() {
			if(typeof window.interval2){
				clearInterval(window.interval2);
			}
		}
		function myStopFunction3() {
			if(typeof window.interval3){
				clearInterval(window.interval3);
			}
		}
		
		var ct_started         = localStorage.getItem('ct_started');
		var modal_offer_active = localStorage.getItem('modal_offer_active');
		var ct_out     		   = localStorage.getItem('ct_out');
		var counter_finish     = localStorage.getItem('counter_finish');

		if( modal_offer_active == "true" && ct_started == "true" && counter_finish != 'true') {
			console.log('modal_offer_active on PDP == true')

			if( $('body').find('.file-view-page_image-huge').length > 0 ) {
				console.log('->>> add banner on PDP');
				// put in onload
				myStopFunction2();
				window.interval2 = setInterval(getTimeLabelPdpListing_Reload);
			}

			if( $('body').find('.search-box__result').length > 0 ) {
				console.log(' ->>> add banner on Listing')
				if( $('html').find(".timer-poster_subscribe").length < 1) {
					// put in onload
					myStopFunction3();
					window.interval3 = setInterval(getTimeLabelPdpListing_Reload);
				}
			}
		} else {
			console.log('modal_offer_active == false')
		}

		if( ct_started == 'true' && ct_out == null && counter_finish != 'true'){
			// put in onload
			myStopFunction();
			window.interval = setInterval(getTimeLabelPlans_Reload);
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
			    margin-left: 10px;
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
				z-index: 9;
			}
			.subscribe_fresh .timer-poster_subscribe {
				margin: 60px auto 36px;
			}
			.timer-poster_subscribe .title_counter {
				display: flex;
				align-items: center;
			}
			.timer-poster_subscribe .modal_progressbar {
				background: #fff;
				border-radius: 50%;
				margin-right: 19px;
			}
			.timer-poster_subscribe .modal_progressbar .counter {
				font-weight: 700;
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
			.notification-bar__content_timer {
				background: #F7EEEF !important;
				order: -1;
			}
			.notification-bar_timer .timer-poster_subscribe {
				margin: 0 auto;
			}
			.hide-offer_holiday-poster .subscribe__label .holiday-poster_subscribe {
				display: none !important;
			}
			.notification-bar_timer .notification-bar.notification-bar_visible {
				display: none;
			}
			@media screen and (min-width: 1681px) {
				.timer-poster_subscribe {
					margin: 30px auto 0;
				}
			}
		`;
		styles    += "</style>";
		$('body').append(styles);
	});
}