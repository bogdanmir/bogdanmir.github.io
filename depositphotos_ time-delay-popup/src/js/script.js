var check_modal_show = localStorage.getItem('modal_show');
if(check_modal_show == null){
	localStorage.setItem('modal_show', false);
}
window.test_popup_timer = 25;
var time_start = localStorage.getItem('_ts') || new Date().getTime();
localStorage.setItem('_ts',time_start);
// depositphotos.com/stock-photos
if( $('.content_search').length > 0 || $('.folder-content').length > 0 && localStorage.getItem('modal_show') == 'false') {
	function run_popup_text2() {
	    $('.search-box__result .flex-files .file-container:nth-child(1) .file-container__link .button-add-to-favorites').click();
	    $('._portal').addClass('modal_time_delay');
		localStorage.setItem('_utap','true');
	    localStorage.setItem('modal_show','true');
		setTimeout(function() {
			$('.modal_time_delay .modal__header').prepend('<div class="modal_text_holder"><h3 class="modal_title">Hard to find</h3><p class="sub_modal_title">an image in mobile?</p><p class="modal_body_title">Download 10 images for FREE</p><p class="modal_italic">on your computer</p><p class="modal_bold">in 7 days trial</p><ul class="modal_list"><li>Use advanced filtering</li><li>Add and compare images<br> in personal collections</li><li>Open and download images<br> in high-resolution</li></ul></div>');
		}, 500);
	}
	window.interval_out = setInterval(function(){
		if( (Number(time_start)+(window.test_popup_timer*1000) )  < new Date().getTime() ){
			run_popup_text2();
			clearInterval(window.interval_out);
		}
	},1000);
}

$outhtml  = '<div class="modal-container modal_time_delay modal_time_delay_other">';
$outhtml += 	'<div class="modal">';
$outhtml += 		'<div class="modal__dialog">';
$outhtml += 			'<div class="modal__header _drag-handler"><i class="modal__close-round icon icon-close-cross icon-round-hover _close"></i></div>';
$outhtml += 			'<div class="modal__body _body modal__body_signup">';
$outhtml +=					'<div class="signup-user signup-user_modal">';
$outhtml +=						'<div class="modal_body">'
$outhtml +=							'<h3 class="modal_title">Hard to find</h3>'
$outhtml += 						'<p class="sub_modal_title">an image in mobile?</p>'
$outhtml +=							'<div class=""><p class="modal_body_title">Download 10 images for FREE</p>'
$outhtml +=								'<p class="modal_italic">on your computer</p>'
$outhtml +=								'<p class="modal_bold">in 7 days trial</p>'
$outhtml +=							'</div>'
$outhtml +=							'<ul class="modal_list">'
$outhtml +=								'<li>Use advanced filtering</li>'
$outhtml +=								'<li>Add and compare images<br> in personal collections</li>'
$outhtml +=								'<li>Open and download images<br> in high-resolution</li>'
$outhtml +=							'</ul>'
$outhtml +=							'<div class="social_holder"> </div>'
$outhtml +=						'</div>'
$outhtml +=					'</div>';
$outhtml +=				'</div>';
$outhtml += 		'</div>';
$outhtml += 	'</div>';
$outhtml += 	'<div class="_overlay modal-overlay modal_time_delay_overlay"></div>';
$outhtml += '</div>';


// home page

// console.log($('.content-type-page__featured').length);
// console.log(localStorage.getItem('modal_show') == 'false');
if( $('.content-type-page__featured').length > 0 && localStorage.getItem('modal_show') == 'false' ) {
	function run_popup_text1(){
		$('html').append($outhtml);
		localStorage.setItem('_utap','true');
		console.log($('.featured-box .featured').length);
		$('.featured-box .featured').detach().appendTo('.modal_time_delay .social_holder');
		localStorage.setItem('modal_show','true');
	}
	window.interval_out = setInterval(function(){
		if( (Number(time_start)+(window.test_popup_timer*1000) )  < new Date().getTime() ){
			run_popup_text1();
			clearInterval(window.interval_out);
		}
	},1000);
	$(document).on('click','.modal_time_delay .modal__close-round', function(){
		$('.modal_time_delay .social_holder .featured').detach().appendTo('.content-type-page__featured .featured-box');
	});
	$(document).on('click','.modal_time_delay_overlay', function(){
		$('.modal_time_delay .social_holder .featured').detach().appendTo('.content-type-page__featured .featured-box');
	});
}										

// product page 1
if( $('.file-view-page-upgrade').length > 0  && localStorage.getItem('modal_show') == 'false' ) {
	function run_popup_text() {
		$('html').append($outhtml);
		localStorage.setItem('_utap','true');
		$('.file-view-page-upgrade .file-view-upgrade__auth-box').detach().appendTo('.modal_time_delay .social_holder');
		localStorage.setItem('modal_show','true');
		console.log('modal_show');
	}
	window.interval_out = setInterval(function(){
		if( (Number(time_start)+(window.test_popup_timer*1000) )  < new Date().getTime() ){
			run_popup_text();
			clearInterval(window.interval_out);
		}
	},1000);
	$(document).on('click','.modal_time_delay .modal__close-round', function(){
		$('.modal_time_delay .social_holder .file-view-upgrade__auth-box').detach().appendTo('.file-view-page-upgrade .file-view-upgrade__purchase-box');
	});
	$(document).on('click','.modal_time_delay_overlay', function(){
		$('.modal_time_delay .social_holder .file-view-upgrade__auth-box').detach().appendTo('.file-view-page-upgrade .file-view-upgrade__purchase-box');
	});
}

setInterval(function() {
	if($(".modal_time_delay").html() == '') {
		$('._portal').removeClass('modal_time_delay');
	}
}, 2000);

$(document).on('click','.modal_time_delay .modal__close-round', function(){
	$(this).closest('.modal_time_delay_other').remove();
	$('._portal').removeClass('modal_time_delay');
	$('._portal').find('.modal-container._modal-container').remove();
	localStorage.setItem('_utap','false');
	console.log('close');
	// window.dataLayer = window.dataLayer || [];
	// window.dataLayer.push({
	//  'event': 'gaEv',
	//  'eventCategory': 'Exp - exit-intent popup',
	//  'eventAction': 'Click X to close popup',
	//  'eventLabel': ''
	// });
});
$(document).on('click','.modal_time_delay .modal-overlay', function(){
	$('.modal_time_delay_other').remove();
	$('._portal').removeClass('modal_time_delay');
	$('._portal').find('.modal-container._modal-container').remove();
	localStorage.setItem('_utap','false');
	console.log('close');
	// window.dataLayer = window.dataLayer || [];
	// window.dataLayer.push({
	//  'event': 'gaEv',
	//  'eventCategory': 'Exp - exit-intent popup',
	//  'eventAction': 'Click on background to close popup',
	//  'eventLabel': ''
	// });

});




// chekout
if( localStorage.getItem('modal_show') == 'true' ) {
	$('.order-info_trial .order-info__items').html('<div class="order-info__item"><i class="icon icon-ok-dark"></i><span class="order-info__item-text">Download any 10 images or vectors for free</span></div><div class="order-info__item"><i class="icon icon-ok-dark"></i><span class="order-info__item-text">7 days free, then $299 annualy for 360 images</span></div><div class="order-info__item"><i class="icon icon-ok-dark"></i><span class="order-info__item-text">Cancel anytime before your free trial is over</span></div><div class="order-info__item"><i class="icon icon-ok-dark"></i><span class="order-info__item-text">Unused downloads transfer to the next month</span></div>')
}

setInterval(function(){
	var user_already_be_aouth = localStorage.getItem('_uaba') || 'false';
	var user_click_on_modal   = localStorage.getItem('_utap') || 'false';
	if($('.signup-user__login').length == 0 && user_click_on_modal == 'true' && user_already_be_aouth == 'false'){
		console.log('_uaba');
		localStorage.setItem('_uaba','true');
		location.href = 'https://depositphotos.com/subscribe/trial.html?id=10&product=membership&backURL%5Bpage%5D=%2Fsubscribe.html?test=true';
	}
})
// $(document).on('click','.modal_time_delay .signup-user-box__social-btn',function (event) {
// 	localStorage.setItem('_utap','true');
// 	console.log('_utap');
// });