// function test_function(){
//     console.log('test_function run');
// }
// test_function();


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        if(days != 0){
            date.setTime(date.getTime() + (days*24*60*60*1000));
        }
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    console.log('set Cookie '+name + "=" + (value || ""));
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    console.log('get Cookie '+name);
    return null;
}
// Remove product from top
window.abtrpft = function(remove_key){
    var _pot        = getCookie('_pot') || '[]';
    var _pot_json   = JSON.parse(_pot);
    var _new_pot = new Array();
    for (var i=0;i<_pot_json.length;i++){
        if(i != remove_key){
            var newdata = _pot_json[i];
            _new_pot.push(newdata);
        }
    }
    var _pot = JSON.stringify(_new_pot);
    setCookie('_pot',_pot,7);
}
window.save_top_product = function(url){
    console.log('save_top_product');
    var product_id  = $.inArray(url,window.top_items);
    var _pot        = getCookie('_pot') || '[]';
    var _pot_json   = JSON.parse(_pot);
    var is_in_array = $.inArray(product_id,_pot_json);save_top_product
    if( product_id !== -1 ){
        if( is_in_array == -1 ){
            _pot_json.push(product_id);
            var _pot = JSON.stringify(_pot_json);
            setCookie('_pot',_pot,7);
            console.log('save_top_product '+url);
        }else{
            console.log('already added '+url);
        }
    }
    if(window.abtispstsd(url) == false){
        window.abtsptsd(url);
    }
}
window.is_product_in_top = function (url){
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
    if( _pot_json.length > 0 ){
        return true;
    }
    return false;
}
// is_popup_already_display
window.abtipad = function(){
    var _pod        = getCookie('_pod') || false;
    return _pod;
}
// Set popup_already_display
window.abtpod = function (){
    setCookie('_pod',true,1);
}
// Save product data
window.abtspd = function(data){
    var productdata = JSON.stringify(data);
    // AB test product data
    window.localStorage.setItem('_abtpd',productdata);
    // console.log('Save data',data);
}
// Get product data
window.abtgpd = function(){
    // AB test product data
    var productdata = window.localStorage.getItem('_abtpd') || '{}';
    productdata = JSON.parse(productdata);
    // console.log('Get data',productdata);
    return productdata;
}
// Get products data
window.abtgptsd = function(){
    // AB test products data
    var productdata = window.localStorage.getItem('_abtptsd') || '[]';
    productdata = JSON.parse(productdata);
    return productdata;
}
// is product in products data
window.abtispstsd = function(url){
    // AB test products data
    var productdata = window.localStorage.getItem('_abtptsd') || '[]';
    productdata = JSON.parse(productdata);
    var product_id  = $.inArray(url,productdata);
    return (product_id > -1);
}
// Save products data
window.abtsptsd = function(data){
    var productdata = window.localStorage.getItem('_abtptsd') || '[]';
    productdata = JSON.parse(productdata);
    productdata.push(data);
    var save_productdata = JSON.stringify(productdata);
    window.localStorage.setItem('_abtptsd',save_productdata);
}
// exitPopup
window.abtexitPopup = function () {
    console.log('exitPopup');
    var product_img        = '';
    var product_title      = '';
    var product_size_title = '';
    var product_size_value = '';
    var exist_product_data = window.abtgpd();
    console.log('exist_product_data');
    var isEmptyObject = $.isEmptyObject(exist_product_data);
    if(isEmptyObject != true){
        product_img        = exist_product_data.i;
        product_title      = exist_product_data.t;
        product_size_title = exist_product_data.ts;
        product_size_value = exist_product_data.tv;
        window.abtspd(exist_product_data);
    $exit_popup  = '<div class="exit_popup_container">';
    $exit_popup +=    '<div class="ab_exit_popup modal_dialog">';
    $exit_popup +=        '<div class="ab_header"><i class="modal_close"></i></div>';
    $exit_popup +=           '<div class="ab__body">';
    $exit_popup +=              '<h3 class="ab_title">Последняя единица товара этого размера</h3>';
    $exit_popup +=              '<p class="ab_subtitle">Поспешите завершить покупку!</p>';
    $exit_popup +=              '<div class="ab_item_wrap">';
    $exit_popup +=                  '<div class="ab_item">';
    $exit_popup +=   					'<div class="product_img"><img class="item__image" src="'+product_img+'" alt="'+product_title+'"></div>';
    $exit_popup +=   					'<div class="product_title"><p>'+product_title+'</p></div>';
    if(product_size_title != ''){
        $exit_popup +=   					'<div class="product_size">'+product_size_title+'<span class="product_size_value">'+product_size_value+'</span></div>';
    }
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
    $exit_popup += '</div><div class="exit_popup_overlay"></div>';

    var reg = /(\d{7})(\d{1})/;
    $('.product_size').each(function() {
        var $this = $(this);
        var text = $this.text();
        text = text.replace(reg, "$1<span>$2</span>");
        $this.html(text);
    });

    $('body').append($exit_popup);

    // timer
    var seconds = 15*60+1, h,m,s,t;
    function countDown() {
        if (seconds > 0) {
            seconds --;
            h = seconds/3600 ^ 0,
                m = (seconds-h*3600)/60 ^ 0,
                s = seconds-h*3600-m*60,
                time = (m<10?"0"+m:m)+"  :  "+(s<10?"0"+s:s);
            if($("body").find('.ab_exit_popup .ab_timer').length > 0){
                $("body").find('.ab_exit_popup .ab_timer').text(time);
                setTimeout(function() {
                    countDown();
                }, 1000);
            }
        }else{
            if($('body').find('.exit_popup_container').length){
                $('body').find('.exit_popup_container').remove();
                $('body').find('.exit_popup_overlay').remove();
            }
        }
    }
    countDown();

    }
}

// trigger display popup
window.abttdp = function (event,data) {
    window.abtexitPopup();
    console.log('run abtexitPopup');
    window.abtpod();

    // View pop-up
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
            'event': 'autoEvent',
            'gtmUaEventCategory': 'PDP exit intent pop up',
            'gtmUaEventAction': 'view popup'
    });
}
window.saveproduct_data = function(size){
    console.log('saveproduct_data',size);
    var image = $('body').find('.swiper-wrapper .swiper-slide:eq(0) img');
    if(image.length){
        var imagesrc = image.attr('src');
        var title_text = $('.info__title_text').text();
        var exist_product_data = {
            'i'  : imagesrc,
            't'  : title_text,
            'ts' : 'Размер:',
            'tv' : size,
        }
        window.abtspd(exist_product_data);
    }
}