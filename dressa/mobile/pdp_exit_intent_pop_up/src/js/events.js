// $(document).on('click','body',function (event) {
//         console.log('body click');
// });
// https://dressa.com.ua/c/zhenskaia-odezhda-bolshikh-razmerov/platia-bolshikh-razmerov/f/tsvet/zhieltyi

// Hotjar trigger to record video sessions
(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1914694,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
try {
        hj('trigger', 'PDP_exit_intent_pop_up');
}
catch(e) {}

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
    console.log(is_some_product_in_top);
    var is_popup_already_display = window.abtipad();
    var can_display_popup = false;
    console.log('main__product',$('html').find('.main__product').length);
    if(is_some_product_in_top == true && is_popup_already_display == false){
        // switch (url){
        //     case '/cart':
        //     case '/checkout/customer-information':
        console.log($('html').find('.main__product'));
        //     if($('html').find('.main__product').length){
        //
        //     }
                // can_display_popup = true;
                // break;
        // }
    }
    if(can_display_popup == true){
        console.log('display popup');
        window.block_out_links = true;
    }

});
$(document).on('click','.checkout__text a,.checkout__text--link,.header__back,a.item__photo, .button__inner--white,.header__logo,.basket__text a,.header .link',function (event,data) {
    console.log('block_out_links')
    console.log(window.block_out_links);
    window.block_out_links = window.block_out_links || false;
    console.log(window.block_out_links == true);
   if(window.block_out_links == true){
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
    }else{
        window.wait_select_size = location.pathname;
        console.log('wait_select_size');
    }
});
$(document).on('click','.product-wrapper .product__hidden_purchase',function (event) {
    var href = $(this).closest('.product-wrapper').find('.product__link').attr('href');
    console.log(href+' href');
    save_top_product(href);
    // return event.preventDefault();
});
$(document).on('click','.main__product .sizes__list_item',function (event) {
    console.log('click wait_select_size');
    if(typeof window.wait_select_size != 'undefined'){
        save_top_product(window.wait_select_size);
        console.log('save_top_product');
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
    // console.log('click wait_select_size');
    // if(typeof window.wait_select_size != 'undefined'){
    //     save_top_product(window.wait_select_size);
    //     console.log('save_top_product');
    // }
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
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
            'event': 'autoEvent',
            'gtmUaEventCategory': 'PDP exit intent pop up',
            'gtmUaEventAction': 'close popup - X'
    });
});

// Close pop-up with click on the background
$(document).on('click','.exit_popup_overlay',function (event) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
            'event': 'autoEvent',
            'gtmUaEventCategory': 'PDP exit intent pop up',
            'gtmUaEventAction': 'close popup - background'
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