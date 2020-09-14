// function test_function(){
//     console.log('test_function run');
// }
// test_function();


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
window.save_top_product = function(url){
    var product_id  = $.inArray(url,window.top_items);
    var _pot        = getCookie('_pot') || '[]';
    var _pot_json   = JSON.parse(_pot);
    var is_in_array = $.inArray(product_id,_pot_json);
    if( product_id !== -1 ){
        if( is_in_array == -1 ){
            _pot_json.push(product_id);
            var _pot = JSON.stringify(_pot_json);
            setCookie('_pot',_pot,7);
            console.log('save_top_product '+url);
        }else{
            console.log('already added '+url);
        }
    }else{
        console.log('is not on top 25 '+url);
    }
}
function is_product_in_top(url){
    console.log('url '+url);
    var product_id  = $.inArray(url,window.top_items);
    console.log('product_id '+product_id);
    if(product_id !== -1){
        return 'true';
    }
    return 'false';
}
// is_some_product_in_top
window.abtispit = function(){
    var _pot        = getCookie('_pot') || '[]';
    var _pot_json   = JSON.parse(_pot);
    if(_pot_json.length > 0){
        return true;
    }
    return false;
}
// is_popup_already_display
window.abtipad = function(){
    var _pod        = getCookie('_pod') || false;
    return _pod;
}
// popup_already_display
window.abtpod = function (){
    setCookie('_pod',true);
}
// exitPopup
window.abtexitPopup = function () {
    var product_img   = $('.basket-page .item .item__photo').html();
    var product_title = $('.basket-page .item .item__info_title').html();

    var product_size_title  = $('.basket-page .item .select__value').html().substr(0, 8);
    var product_size_value  = $('.basket-page .item .select__value').html().substr(8, 11);

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
    $exit_popup +=   					'<div class="product_size">'+product_size_title+'<span class="product_size_value">'+product_size_value+'</span></div>';
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

    var reg = /(\d{7})(\d{1})/;
    $('.product_size').each(function() {
        var $this = $(this);
        var text = $this.text();
        text = text.replace(reg, "$1<span>$2</span>");
        $this.html(text);
    });

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
                time = (m<10?"0"+m:m)+"  :  "+(s<10?"0"+s:s);

            $("body").find('.ab_exit_popup .ab_timer').text(time);
        }
        setTimeout(function() {
            countDown();
        }, 1000);
    }
    countDown()
}