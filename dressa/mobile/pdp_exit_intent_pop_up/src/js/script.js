// language.some_slug
// alert(language.some_slug);

setInterval(function(){
	if(window.url_is != location.pathname){
		$(document).trigger('url_change',location.pathname);
		window.url_is = location.pathname;
	}
});
$(document).trigger('url_change',location.pathname);








// popup
var product_img   = $('.basket-page .item .item__photo').html();
var product_title = $('.basket-page .item .item__info_title').html();
var product_size  = $('.basket-page .item .select__value').html();

$exit_popup  = '<div class="exit_popup_container">';
$exit_popup +=    '<div class="ab_exit_popup modal_dialog">';
$exit_popup +=        '<div class="ab_header"><i class="modal_close"></i></div>';
$exit_popup +=           '<div class="ab__body">';
$exit_popup +=              '<h3 class="ab_title">Последняя единица товара этого размера</h3>';
$exit_popup +=              '<p class="ab_subtitle">Поспешите завершить покупку!</p>';
$exit_popup +=              '<div class="ab_item_wrap">';
$exit_popup +=                  '<div class="ab_item">';
$exit_popup +=   					'<div class="product_img">'+product_img+'</div>';
$exit_popup +=   					'<div class="product_title"><p>'+product_title+'</p></div>';
$exit_popup +=   					'<div class="product_size">'+product_size+'</div>';
$exit_popup +=                  '</div>';
$exit_popup +=              '</div>';
$exit_popup +=           '</div>';
$exit_popup +=           '<div class="ab_footer">';
$exit_popup +=              '<div class="ab_timer_wrap">';
$exit_popup +=          		'<div class="ab_timer"></div>';								
$exit_popup +=          		'<div class="sub_timer"><span class="timer_text_min">мин</span><span class="timer_text_sec">сек</span></div>';
$exit_popup +=          	'</div>';
$exit_popup +=              '<div class="ab_checkout_wrap">';
$exit_popup +=          		'<div class="ab_checkout_btn buttons__checkout">оформить заказ</div>';	
$exit_popup +=          	'</div>';
$exit_popup +=           '</div>';
$exit_popup +=        '</div>';
$exit_popup +=    '</div>';
$exit_popup += '</div>';

$('body').append($exit_popup);
$('body').append('<div class="exit_popup_overlay"></div>');

// timer
var seconds = 15*60+1, h,m,s,t;
function countDown() {
	if (seconds > 0) {
		seconds --;
		h = seconds/3600 ^ 0,
		m = (seconds-h*3600)/60 ^ 0,
		s = seconds-h*3600-m*60,
		time = (m<10?"0"+m:m)+" : "+(s<10?"0"+s:s);

		$("body").find('.ab_exit_popup .ab_timer').text(time);
	} 
	setTimeout(function() {
		countDown();
	}, 1000);
}
$(function() {
	countDown()
});