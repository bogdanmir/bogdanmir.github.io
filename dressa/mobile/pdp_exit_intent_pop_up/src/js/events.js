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
});
$(document).on('is_on_top',function (event,data) {
    window.is_top = data;
});
$(document).on('click','.main__product .button__inner--buy',function (event) {
    if(window.is_top != false){
        save_top_product(location.pathname);
    }
});
$(document).on('click','.product-wrapper .product__hidden_purchase',function (event) {
    var href = $(this).closest('.product-wrapper').find('.product__link').attr('href');
    console.log(href+' href');
    save_top_product(href);
    // return event.preventDefault();
});