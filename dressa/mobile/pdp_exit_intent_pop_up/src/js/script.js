// language.some_slug
// alert(language.some_slug);

setInterval(function(){
	if(window.url_is != location.pathname){
		$(document).trigger('url_change',location.pathname);
		window.url_is = location.pathname;
	}
});
window.popup_added_to_cart = '';
setInterval(function(){
	window.abtard = window.abtard || false;
	if(window.abtard == false){
		var product_img   = '';
		var product_title = '';
		var product_size_title  = '';
		var product_size_value  = '';
		var exist_product_data = window.abtgpd();
		var isEmptyObject = $.isEmptyObject(exist_product_data);
		if($('html').find('.basket-page .item').length){
			var last_item       = $('body').find('.basket-page .item').length - 1;
			var element         = $('.basket-page .item:eq('+last_item+')');
			exist_product_data = {};
			exist_product_data.i         = element.find('.item__photo img').attr('src');
			exist_product_data.t       = element.find('.item__info_title').html();
			exist_product_data.ts  = element.find('.select__value').html().substr(0, 8);
			exist_product_data.tv  = element.find('.select__value').html().substr(8, 11);
			window.abtspd(exist_product_data);
			window.abtard = true;
		}
		if($('html').find('.cart__slider .slide').length){
			var last_item       = $('html').find('.cart__slider .slide').length - 1;
			var element         = $('.cart__slider .slide:eq('+last_item+')');
			exist_product_data = {};
			exist_product_data.i   = element.find('.slide__photo img').attr('src');
			exist_product_data.t   = element.find('.slide__title').html();
			exist_product_data.ts  = element.find('.slide__size').html().substr(0, 8);
			exist_product_data.tv  = element.find('.slide__size').html().substr(8, 11);
			window.abtspd(exist_product_data);
			window.abtard = true;
		}
	}
});
$(document).trigger('url_change',location.pathname);





// popup


// exitPopup();