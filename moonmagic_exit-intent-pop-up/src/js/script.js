
if( $('.cart-popup .cart-popup__list .cart-popup__item').length > 1 ){
    var item_content = "We can’t guarantee the availability<br> of all products in you cart<br> if you don’t complete the purchase now";
} else {
    var item_content = "We can’t guarantee its availability<br> if you don't complete the purchase now";
}

window.slide_items = new Array();
$('.cart-popup .cart-popup__list .cart-popup__item').each(function() {
    var item_img = $(this).find('.cart-popup__item-image').html();
    var item_title = $(this).find('.cart-popup__item-info .cart-popup__item-title').text();
    var item_size = $(this).find('.cart-popup__item-info .cart-popup__item-size').text();
    var item_price = $(this).find('.cart-popup__item-info .cart-popup__item-price').text();
    
    // var item_slide = '<div class="swiper-slide">'+ item_img +'<p class="slide_title">'+ item_title +'</p> <p class="slide_size">'+ item_size +'</p><p class="slide_price">'+ item_price +'</p></div>';
    var objdata = {
        img: item_img,
        title: item_title,
        size: item_size,
        price: item_price,
    };
    window.slide_items.push(objdata);
});

$exit_popup  = '<div class="exit_popup_container">';
$exit_popup +=   '<div class="exit_popup modal_dialog">';
$exit_popup +=      '<div class="modal_header"><i class="modal_close"></i></div>';
$exit_popup +=          '<div class="modal__body">';
$exit_popup +=              '<h3 class="modal_title">It’s almost yours!</h3>';
$exit_popup +=              '<p class="modal_subtitle">Only one step left:</p>';
$exit_popup +=              '<div class="modal_slider_wrap">';
                                // <!-- Slider main container -->
$exit_popup +=                  '<div class="swiper-container modal_slider">';
                                // <!-- Additional required wrapper -->
$exit_popup +=                  '<div class="swiper-wrapper">';
                                // <!-- Slides -->
    $.each(window.slide_items,function(ind,el){
        $exit_popup +='<div class="swiper-slide">'+ el.img +'<p class="slide_title">'+ el.title +'</p> <p class="slide_size">'+ el.size +'</p><p class="slide_price">'+ el.price +'</p></div>';
    })
$exit_popup +=                  '</div>';
$exit_popup +=                  '<div class="swiper-pagination-modal"></div>';
$exit_popup +=              '</div>';
$exit_popup +=          '</div>';
$exit_popup +=          '<div class="modal_content">';
$exit_popup +=              '<p>' + item_content + '</p>';
$exit_popup +=          '</div>';
$exit_popup +=     '</div>';
$exit_popup +=     '<a href="" class="modal_btn">complete my order now</a>';
$exit_popup +=   '</div>';
$exit_popup += '</div>';

if( $('.cart-popup .cart-popup__list .cart-popup__item').length > 0 ){
    $('body').append($exit_popup);
    $('body').append('<div class="exit_popup_overlay"></div>'); 
}

$('body').on('click', '.modal_close', function() {
    $('body').find('.exit_popup_container').remove();
    $('body').find('.exit_popup_overlay').remove();
});


if( $('.cart-popup .cart-popup__list .cart-popup__item').length > 1 ){
    var mySwiper = new window.Swiper('.modal_slider', {
        speed: 400,
        spaceBetween: 15,
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination-modal',
            type: 'bullets',
            clickable: true
        }
    });
} else {
    console.log('one item in card')
}
$('body').find('.swiper-slide').prepend("<div class='slider_tooltip_box'>This is a popular choice,<br> we may run out of stock soon</div>");

