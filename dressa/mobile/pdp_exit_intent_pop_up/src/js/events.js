// $(document).on('click','body',function (event) {
//         console.log('body click');
// });
// https://dressa.com.ua/c/zhenskaia-odezhda-bolshikh-razmerov/platia-bolshikh-razmerov/f/tsvet/zhieltyi

// Hotjar trigger to record video sessions
// (function(h,o,t,j,a,r){
//         h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//         h._hjSettings={hjid:1914694,hjsv:6};
//         a=o.getElementsByTagName('head')[0];
//         r=o.createElement('script');r.async=1;
//         r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//         a.appendChild(r);
// })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
// window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
// try {
//         hj('trigger', 'PDP_exit_intent_pop_up');
// }
// catch(e) {}

try {
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1914694,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};

        hj('trigger', 'PDP_exit_intent_pop_up');
}		
catch(e) {
	console.log('hotjar failed to load');
}

// Activation of the alt variation
window.dataLayer = window.dataLayer || [];
dataLayer.push({
        'event': 'autoEvent',
        'gtmUaEventCategory': 'PDP exit intent pop up',
        'gtmUaEventAction': 'loaded'
});

$(document).on('url_change',function (event,url) {
    var product_id = $.inArray(url,window.top_items);
    if(product_id != -1){
        $(document).trigger('is_on_top', {'pathname':location.pathname,'product_id':product_id});
    }
    $(document).trigger('change_path',location.pathname);
    console.log('url is '+url);
    window.abtard = false;
});
$(document).on('change_path',function (event,url) {
    console.log('change_path');
    console.log('is_some_product_in_top');
    var is_some_product_in_top = window.abtispit();
    // console.log(is_some_product_in_top);
    var is_popup_already_display = window.abtipad();
    window.can_display_popup = false;
    console.log('main__product',$('html').find('.main__product').length);
    if(is_some_product_in_top == true && is_popup_already_display == false){
        window.can_display_popup = true;
        switch (true){
                case (url == '/cart'):
                case (url == '/checkout/customer-information'):
                case (url == '/checkout/shipping-and-payment'):
                case ($('.thanks__top .thanks__title').length > 0):
                case (window.abtispstsd(url) == true):
                case (window.is_product_in_top(url) == true):
                    console.log('Test popup don\'t show');
                    can_display_popup = false;
                break;
        }
    }
});

$(document).on('is_on_top',function (event,data) {
    window.is_top = data;
});
$(document).on('click','.button>.button__inner--buy',function (event) {
    // alert('Hello');
    console.log(window.is_top);
    console.log($('body').find('.info__offers_sizes .size-select .item--selected').length);
    if($('body').find('.info__offers_sizes .size-select .item--selected').length){
        if(window.is_top != false){
            window.save_top_product(location.pathname);
            console.log('save_top_product');
        }
        var clone = $('body').find('.info__offers_sizes .size-select .item--selected:eq(0)').clone();
        clone = clone.find('.keradan-size-item-text').clone();
        clone.find('*').remove();
        var text = clone.text();
        text = text.trim();
        if(text == ''){
            var clone = $('body').find('.info__offers_sizes .size-select .item--selected:eq(0)').clone();
            clone.find('*').remove();
            var text = clone.text();
            text = text.trim();
        }
        window.saveproduct_data(text);
    }else{
        window.wait_select_size = location.pathname;
        console.log('wait_select_size');
    }
});
$(document).on('click','.product-wrapper .product__hidden_purchase',function (event) {
    var href = $(this).closest('.product-wrapper').find('.product__link').attr('href');
    console.log(href+' href');
    save_top_product(href);
});
$(document).on('click','.main__product .sizes__list_item',function (event) {
    console.log('click wait_select_size');
    var clone = $(this).clone();
    clone.find('*').remove();
    var text = clone.text();
    text = text.trim();
    window.saveproduct_data(text);
    if(typeof window.wait_select_size != 'undefined'){
        save_top_product(window.wait_select_size);
    }
});
$(document).on('click','.icon__trash',function (event) {
    console.log($(this).closest('.wrapper').find('.item__photo'));
    console.log($(this).closest('.wrapper'));
    if($(this).closest('.wrapper').find('.item__photo').length){
        var href = $(this).closest('.wrapper').find('.item__photo').attr('href');
        var is_in_array = $.inArray(href,window.top_items);
        console.log(href);
        if(is_in_array != -1){
            window.abtrpft(is_in_array);
        }
    }
    window.abtard = false;
});

// close modal
$(document).on('click','.ab_exit_popup .modal_close,.exit_popup_overlay',function (event) {
    console.log('click close modal');
    if($('body').find('.exit_popup_container').length){
        $('body').find('.exit_popup_container').remove();
        $('body').find('.exit_popup_overlay').remove();
    }
});


// Close pop-up with click on X icon
$(document).on('click','.ab_exit_popup .modal_close',function (event) {
    console.log('Close pop-up with click on X icon');
    window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	        'event': 'autoEvent',
	        'gtmUaEventCategory': 'PDP exit intent pop up',
	        'gtmUaEventAction': 'close popup - X'
	});
});

// Close pop-up with click on the background
$(document).on('click','.exit_popup_overlay',function (event) {
    console.log('Close pop-up with click on the background');
    window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	        'event': 'autoEvent',
	        'gtmUaEventCategory': 'PDP exit intent pop up',
	        'gtmUaEventAction': 'close popup - X'
	});
});

// checkout modal button
$(document).on('click','.ab_exit_popup .ab_checkout_btn ',function (event) {
    console.log('click checkout');
    $('body').find('.exit_popup_container').remove();
    $('body').find('.exit_popup_overlay').remove();
    $('body').find('.basket-page .buttons__checkout .button__inner--buy').trigger('click');

    // Click on button 'Оформить заказ' in pop-up
    window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	        'event': 'autoEvent',
	        'gtmUaEventCategory': 'PDP exit intent pop up',
	        'gtmUaEventAction': 'click on Complete order'
	});
});


var old_scroll,scrollTop = window.pageYOffset || document.documentElement.scrollTop;
$(window).scroll(function(e){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
});
setInterval(function() {
    if(old_scroll-50 > scrollTop){
        var abtgptsd = window.abtgpd();
        var is_empty = $.isEmptyObject(abtgptsd);
        var this_in_cart = window.abtispstsd(location.pathname);
        console.log('pathname is '+(location.pathname));
        console.log('this_in_cart is '+(this_in_cart == false));
        console.log('abttdp is '+(typeof window.abttdp != 'undefined'));
        console.log('abttdp is false '+(window.abtipad() == false));
        console.log('is not empty '+(!is_empty));
        console.log('can_display_popup '+(window.can_display_popup == true));
        if(typeof window.abttdp != 'undefined' && window.abtipad() == false && !is_empty && window.can_display_popup == true && this_in_cart == false && window.abtispit()){
            window.abttdp();
        }
    }
    old_scroll = scrollTop;
});