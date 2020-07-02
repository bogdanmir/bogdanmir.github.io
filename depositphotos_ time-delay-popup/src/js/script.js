var check_modal_show = localStorage.getItem('modal_show');
if(check_modal_show == null){
	localStorage.setItem('modal_show', false);
}

// depositphotos.com/stock-photos
if( $('.content_search').length > 0 || $('.folder-content').length > 0 && localStorage.getItem('modal_show') == 'false') {
	setTimeout(function() {
	    $('.search-box__result .flex-files .file-container:nth-child(1) .file-container__link .button-add-to-favorites').click();
	    $('._portal').addClass('modal_time_delay');
	    localStorage.setItem('modal_show','true');
	}, 2000);

	setTimeout(function() {
		$('.modal_time_delay .modal__header').prepend('<div class="modal_text_holder"><h3 class="modal_title">Hard to find</h3><p class="sub_modal_title">an image in mobile?</p><p class="modal_body_title">Download 10 images for FREE</p><p class="modal_italic">on your computer</p><p class="modal_bold">in 7 days trial</p><ul class="modal_list"><li>Use advanced filtering</li><li>Add and compare images<br> in personal collections</li><li>Open and download images<br> in high-resolution</li></ul></div>');
	}, 2500);
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
if( $('.content-type-page__featured').length > 0 && localStorage.getItem('modal_show') == 'false' ) {
	setTimeout(function() {
		$('html').append($outhtml);
		$('.featured-box .featured').detach().appendTo('.modal_time_delay .social_holder');
		localStorage.setItem('modal_show','true');
	}, 2000);
	$(document).on('click','.modal_time_delay .modal__close-round', function(){
		$('.modal_time_delay .social_holder .featured').detach().appendTo('.content-type-page__featured .featured-box');
	});
	$(document).on('click','.modal_time_delay_overlay', function(){
		$('.modal_time_delay .social_holder .featured').detach().appendTo('.content-type-page__featured .featured-box');
	});
}										

// product page
if( $('.file-view-page-upgrade').length > 0  && localStorage.getItem('modal_show') == 'false' ) {
	setTimeout(function() {
		$('html').append($outhtml);
		$('.file-view-page-upgrade .file-view-upgrade__auth-box').detach().appendTo('.modal_time_delay .social_holder');
		localStorage.setItem('modal_show','true');
	}, 2000);
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