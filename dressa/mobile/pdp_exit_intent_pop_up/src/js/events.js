// $(document).on('click','body',function (event) {
//         console.log('body click');
// });
// https://dressa.com.ua/c/zhenskaia-odezhda-bolshikh-razmerov/platia-bolshikh-razmerov/f/tsvet/zhieltyi

$(document).on('url_change',function (event,url) {
    var product_id = $.inArray(url,window.top_items);
    if(product_id != -1){
        $(document).trigger('is_on_top', {'pathname':location.pathname,'product_id':product_id});
    }
    $(document).trigger('change_path',location.pathname);
    console.log('url is '+url);
});
$(document).on('change_path',function (event,url) {
    console.log('change_path');
    console.log('is_some_product_in_top');
    var is_some_product_in_top = window.abtispit();
    console.log(is_some_product_in_top);
    var is_popup_already_display = window.abtipad();
    if(url == '/cart' && is_some_product_in_top == true && is_popup_already_display == false){
        console.log('display popup');
        window.abtpod();
        window.block_out_links = true;
        // window.abtexitPopup();
    }
});

$(document).on('click','.header__back,a.item__photo, .button__inner--white,.header__logo,.basket__text a',function (event,data) {
    window.block_out_links = window.block_out_links || false;
   if(window.block_out_links == true){
        window.abtexitPopup();
        return false;
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
$(document).on('click','.ab_exit_popup .modal_close',function (event) {
    console.log('click close modal');
    if($('body').find('.exit_popup_container').length){
        $('body').find('.exit_popup_container').remove();
        $('body').find('.exit_popup_overlay').remove();
    }
});

// checkout modal button
$(document).on('click','.ab_exit_popup .ab_checkout_btn ',function (event) {
    console.log('click checkout');
    $('body').find('.exit_popup_container').remove();
    $('body').find('.exit_popup_overlay').remove();
    $('body').find('.basket-page .buttons__checkout .button__inner--buy').trigger('click');
});