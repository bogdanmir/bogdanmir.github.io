 if($('.filter-bar__options').length>0){
 	var tags = [
 	{
 		'type' : 'filter',
 		'group' : 'filter_size',
 		'text' : 'size'
 	}, 
 	{
 		'type' : 'sorting',
 		'group' : 'best-selling',
 		'text' : 'Best Sellers'
 	}, 
 	{
 		'type' : 'filter',
 		'group' : 'filter_pricing',
 		'text' : 'pricing'
 	}, 
 	{
 		'type' : 'filter',
 		'group' : 'filter_gemstone',
 		'text' : 'gemstone'
 	}, 
 	{
 		'type' : 'filter',
 		'group' : 'filter_category',
 		'text' : 'category'
 	}, 
 	{
 		'type' : 'filter',
 		'group' : 'filter_color',
 		'text' : 'color'
 	}, 
 	{
 		'type' : 'sorting',
 		'group' : 'price-ascending',
 		'text' : 'price'
 	},
 	{
 		'type' : 'filter',
 		'group' : 'filter_material',
 		'text' : 'material'
 	}
 	];
 	function clear_js_wraper_styles(){
 		if($('.collection-mobile__container-js [style]').length > 0){
 			$('.collection-mobile__container-js [style]').attr('style','');
 		}
 	}
 	function rewrite_btn_filter(){
 		// var btn_clone = $('#collection-mobile__filter .filter-bar__form-buttons .filter-apply').clone();
 		// btn_clone.attr('id','');
 		// if($('.collection-mobile__container-js .btn_clone-wrapper').length > 0){
 		// 	$('.collection-mobile__container-js .btn_clone-wrapper').remove();
 		// }
 		// $('.collection-mobile__container-js .collection-filter-list-wrapper .collection-filter-list').append('<div class="btn_clone-wrapper"></div>');
 		// $('.collection-mobile__container-js .collection-filter-list-wrapper .collection-filter-list .btn_clone-wrapper').append(btn_clone);
 	}
 	$('.site-header__main.bar.bar-fixed-on.bar-on').append('<div class="tags-bar-wraper"><ul class="tags-bar"></ul></div>');
 	$('.filter-bar__options').appendTo('.site-header__main.bar.bar-fixed-on.bar-on');
 	$('.filter-bar__options').find('.collection-mobile__container').appendTo('body');
 	$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list').removeClass('open');
 	$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-group').css({
			'max-height' : '0px',
			'overflow'   : 'hidden',
			'transition' : '',
		});
 	$('body').find('.collection-mobile__container').append('<div class="collection-mobile__container-bg"></div>');
 	$('body').find('.filter-bar__form--header .mobile-close-filter').html('<span>Filters</span> <a href="#" class="mobile-close-icon"><i class="close"></i></a>');
 	$('body').find('.filter-bar__form--header .mobile-close-filter').removeClass('mobile-close-filter').addClass('mobile-close-filter-head');
 	$('body').on('click','.apply-triger-filter',function(index, el) {
 		if(!$(this).hasClass('disabled')){
 			$('body').find('.collection-mobile__container #mobile-filter-apply').click();
 		}
 		return false;
 	});
 	$('body').find('.collection-mobile__container .collection-filter-list .collection-filter-title').each(function(index, el) {
 		$(el).before('<a href="#" class="mobile-btn-back-filter"><i class="fa fa-angle-left"></i></a>');
 		$(el).after('<a href="#" class="mobile-btn-close-filter"></a>');
 	});
 	// $('.collection-mobile__container .filter-apply').css('display', 'none');
 	// var html = $('.collection-mobile__container .filter-apply').html();
 	// $('.collection-mobile__container .filter-apply').after('<a class="apply-triger-filter" href="#">'+html+'</a>');
 	setInterval(function(){
 		$('.collection-mobile__container .filter-apply').css('display', 'none');
 		var html = $('.collection-mobile__container .filter-apply').html();
 		if($('body').find('.collection-mobile__container .apply-triger-filter').length < 1){
 			$('body').find('.collection-mobile__container .filter-apply').after('<a class="apply-triger-filter" href="#"></a>');
 		}
 		if($('body').find('.collection-mobile__container .collection-filter-list.open').length > 0){
 			$('body').find('.collection-mobile__container .apply-triger-filter').addClass('show-btn');
 		}else{
 			$('body').find('.collection-mobile__container .apply-triger-filter').removeClass('show-btn');
 		}
 		if(html == 'NO RESULTS (0)'){
 			var current_html = $('body').find('.collection-mobile__container .apply-triger-filter').html();
 			if('show' != current_html){
 				$('body').find('.collection-mobile__container .apply-triger-filter').addClass('disabled');
 				$('body').find('.collection-mobile__container .apply-triger-filter').html('show');
 			}
 		}
 		if(html != 'NO RESULTS (0)'){
 			html = html.replace(new RegExp('VIEW','g'),'show');
 			var current_html = $('body').find('.collection-mobile__container .apply-triger-filter').html();
 			if(html != current_html){
 				$('body').find('.collection-mobile__container .apply-triger-filter').removeClass('disabled');
 				$('body').find('.collection-mobile__container .apply-triger-filter').html(html);
 			}
 		}
 	})
 	
 // 	clone.find('[id="collectionMobileButtonSort"]').addClass('btn-js-Sort');
 // 	clone.find('[id="collectionMobileButtonFilter"]').addClass('btn-js-Filter');
 // 	clone.find('[id]').attr('id','');
 // 	clone.find('[style]').attr('style','');
 // 	clone.find('[data-ref]').attr('data-ref','');
 // 	clone.find('.collection-filter-item').each(function(index, el) {
 // 		var val = $(el).find('input').val();
 // 		$(el).find('input').removeClass('collection-filter-checkbox');
 // 		$(el).find('[for]').attr("for",'');
 // 		$(el).find('input').val("");
 // 		$(el).find('input').attr("data-old-vl",val);
 // 	});
 // 	clone.find('.filter-bar__form').attr('class','').addClass('.filter-bar__form-abtest');
 // 	// clone.find('[for]').attr('for','');
 // 	clone.find('.collection-mobile__container .collection-filter-title').wrap('<div class="filter-title-wrapper"></div>');
 // 	clone.find('.collection-mobile__container .collection-filter-title').after('<a href="#" class="close-js-menu"></a>');
 // 	clone.find('.collection-mobile__container').addClass('collection-mobile__container-js');
 // 	clone.find('.collection-mobile__container').removeClass('collection-mobile__container');
 // 	clone.find('.collection-filter-item').attr('class','').addClass('collection-filter-item-test');
 // 	var btn_clone = $('#collection-mobile__filter .filter-bar__form-buttons .filter-apply').clone();
 // 	var clonecontainer = clone.find('.collection-mobile__container-js').clone();
 // 	clonecontainer.find('.collection-filter-list').wrap('<div class="collection-filter-list-wrapper"></div>');
 // 	clonecontainer = clonecontainer.html();
 // 	$('body').append('<div class="collection-mobile__container-js">'+clonecontainer+'</div>');
 // 	clone.find('.collection-mobile__container-js').remove();
 // 	btn_clone.attr('id','');
 // 	$('.collection-mobile__container-js .collection-filter-list-wrapper .collection-filter-list').append('<div class="btn_clone-wrapper"></div>');
 // 	$('.collection-mobile__container-js .collection-filter-list-wrapper .collection-filter-list .btn_clone-wrapper').append(btn_clone);
	// // console.log(html);
	$.each(tags,function(ind,el){
		if(el.type == 'filter'){
			if($('body').find('[data-filter-group="'+el.group+'"]').length > 0){
				var active_class = "";
				if($('body').find('[data-filter-group="'+el.group+'"] input[type="checkbox"]').prop('checked') == true){
					active_class = "active";
				}
				$('.site-header__main.bar.bar-fixed-on.bar-on').find('.tags-bar').append('<li class="tag-item '+active_class+'"><a href="#" class="tag-element" data-group-elements="'+el.group+'" data-type="'+el.type+'">'+el.text+'</a></li>');
			}
		}
		if(el.type == 'sorting'){
			if($('body').find('#sortby [data-sort="'+el.group+'"]').length > 0){
				var active_class = "";
				if($('body').find('#sortby [data-sort="'+el.group+'"]').hasClass('active')){
					active_class = "active";
				}
				$('.site-header__main.bar.bar-fixed-on.bar-on').find('.tags-bar').append('<li class="tag-item '+active_class+'"><a href="#" class="tag-element" data-group-elements="'+el.group+'" data-type="'+el.type+'">'+el.text+'</a></li>');
			}
		}
	})
	// // $('body').on('click', '.collection-mobile__container-js .collection-filter-item input, .collection-mobile__container-js .collection-filter-item label',function(){
	// // 	return false;
	// // });
	// $('body').on('click', '.collection-mobile__container-js .collection-filter-item-test', function(event) {
	// 	console.log($(this));
	// 	console.log($(this).find('input').length);
	// 	if($(this).find('input').length > 0){
	// 		// console.log($(this).find('input').length);
	// 		// console.log($('body').find('.collection-filter-checkbox#producttype-ring-mobile').length);
	// 		// console.log($('body').find('.collection-filter-checkbox#producttype-ring-mobile'));
	// 		// $('body').find('.collection-filter-checkbox#producttype-ring-mobile').click();
	// 		// var label = $(this).find('input');
	// 		// var val = $(this).find('input').val();
	// 		var id_element = $(this).find('input').attr('data-old-vl');
	// 		console.log(id_element);
	// 		// console.log($('body').find('#'+id_element).length);
	// 		// $('body').find('.collection-filter-checkbox#producttype-ring-mobile');
	// 			// console.log(id_element);
	// 			// $('body').find('#collection-mobile__filter input[value="producttype-ring"]').click();
	// 			$('body').find('#collection-mobile__filter [value="'+id_element+'"]').click();
	// 			// console.log($('body').find('#collection-mobile__filter input[value="'+val+'"]').click());
	// 			// var is_checked = $('body').find('#collection-mobile__filter #'+id_element).is(':checked');
	// 			// console.log(is_checked);
	// 			// if(is_checked == false){
	// 			// 	is_checked = true;
	// 			// }else{
	// 			// 	is_checked = false;
	// 			// }
	// 			// $('body').find('#'+id_element).prop('checked',is_checked);
	// 			// $('body').find('#'+id_element).trigger('chenge');
	// 		// $(this).find('input').prop('checked',is_checked);
	// 		// rewrite_btn_filter();
	// 		// return false;
	// 	}
	// 	return false;
	// 	// event.preventDefault();
	// });
	// $('body').on('click', '.collection-mobile__container-js .btn_clone-wrapper .filter-apply', function(event) {
	// 	clear_js_wraper_styles();
	// 	$('.collection-mobile__container-js').removeClass('active');
	// 	$('.collection-mobile__container-js .active').removeClass('active');
	// 	console.log($('#collection-mobile__filter .filter-bar__form-buttons .filter-apply'));
	// 	$('#collection-mobile__filter .filter-bar__form-buttons .filter-apply').click();
	// 	return false;
	// });
	$('body').on('click', '.collection-mobile__container .filter-bar__form-lists .collection-filter-title', function(event) {
		$('body').find('.collection-mobile__container .filter-bar__form-lists').addClass('filter-open');
	});
	$('body').on('click', '.mobile-btn-close-filter, .mobile-close-icon, .collection-mobile__container-bg', function(event) {
		$('body').removeClass('mobFilterOpen');
		$('.site-header').attr('style','');
		$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list').removeClass('open');
		$('body').find('.collection-mobile__container .filter-bar__form-lists').removeClass('filter-open');
		$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list .collection-filter-group').css({
			// 'max-height' : '253px',
			'max-height' : '0px',
			'overflow'   : 'hidden',
			'transition' : '',
		});
		$('body').find('.collection-mobile__container .collection-mobile__sort').removeClass('active');
		$('body').find('.collection-mobile__container .collection-mobile__filter').removeClass('active');
		return false;
	});
	$('body').on('click', '.collection-mobile__container .collection-filter-list.open .collection-filter-title', function(event) {
		console.log('Hello');
		return false;
	});
	$('body').on('click', '.mobile-btn-back-filter', function(event) {
		$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list').removeClass('open');
		$('body').find('.collection-mobile__container .filter-bar__form-lists').removeClass('filter-open');
		$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list .collection-filter-group').css({
			// 'max-height' : '253px',
			'max-height' : '0px',
			'overflow'   : 'hidden',
			'transition' : '',
		});
		// $('body').find('.collection-mobile__container .collection-mobile__filter').removeClass('active');
		return false;
	});
	// $('body').on('click', '.btn-js-Filter', function(event) {
	// 	clear_js_wraper_styles();
	// 	$('.collection-mobile__container-js .active').removeClass('active');
	// 	$('.collection-mobile__container-js').addClass('active');
	// 	$('.collection-mobile__container-js .collection-mobile__filter').addClass('active');
	// });
	// $('body').on('click', '.btn-js-Sort', function(event) {
	// 	clear_js_wraper_styles();
	// 	$('.collection-mobile__container-js .active').removeClass('active');
	// 	$('.collection-mobile__container-js').addClass('active');
	// 	$('.collection-mobile__container-js .collection-mobile__sort').addClass('active');
	// });
	// // $('body').on('change', '.collection-mobile__container-js input[type="checkbox"]', function(event) {
	// // 	var val = $(this).val();
	// // 	var name = $(this).attr('name');
	// // 	var checked = $(this).prop('checked');
	// // 	$('#collection-mobile__filter input[value="'+val+'"]').prop('checked',checked);
	// // 	$('#collection-mobile__filter input[value="'+val+'"]').trigger('change');
	// // });
	// $('body').on('click', '.collection-mobile__container-js .filter-clear', function(event) {
	// 	$('.filter-bar__form.filter-bar__toggle').each(function(index, el) {
	// 		$(el).get(0).reset();
	// 	});
	// });
	// $('body').on('click', '.collection-mobile__container-js .collection-filter-title', function(event) {
	// 	clear_js_wraper_styles();
	// 	$(this).closest('[data-filter-group]').toggleClass('active');
	// 	$(this).closest('.collection-filter-list-wrapper').toggleClass('active');
	// });
	// $('body').on('click', '.collection-mobile__container-js .close-js-menu', function(event) {
	// 	clear_js_wraper_styles();
	// 	$('body').find('.collection-mobile__container-js').removeClass('active');
	// 	$('body').find('.collection-mobile__container-js .active').removeClass('active');
	// 	return false;
	// });
	$('body').on('click', '.tags-bar .tag-element', function(event) {
		var type = $(this).attr('data-type');
		if(type == 'filter'){
			var group = $(this).attr('data-group-elements');
			// $('body').find('.collection-mobile__container-js .collection-mobile__'+type).addClass('active');
			// $('body').find('.collection-mobile__container-js').addClass('active');
			// $('body').find('.collection-mobile__container-js [data-filter-group="'+group+'"]').addClass('active');
			$('body').find('.filter-bar__options #collectionMobileButtonFilter').click();
			$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list').removeClass('open');
			$('body').find('.collection-mobile__container .filter-bar__form-lists').removeClass('filter-open');
			$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list .collection-filter-group').css({
				// 'max-height' : '253px',
				'max-height' : '0px',
				'overflow'   : 'hidden',
				'transition' : '',
			});
			// $('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list .collection-filter-group').attr('style','');
			// $('body').find('[data-filter-group="'+group+'"]').closest('.collection-filter-title').click();
			// $('body').find('[data-filter-group="'+group+'"]').closest('.collection-filter-list').addClass('open');
			$('body').find('.collection-mobile__container [data-filter-group="'+group+'"]').css({
				'max-height' : '253px',
				// 'max-height' : '0px',
				'overflow'   : 'hidden',
				'transition' : '',
			});
			$('body').find('.collection-mobile__container [data-filter-group="'+group+'"]').closest('.filter-bar__form-lists').addClass('filter-open');
			$('body').find('.collection-mobile__container [data-filter-group="'+group+'"]').closest('.collection-filter-list').addClass('open');
		}
		if(type == 'sorting'){
			var group = $(this).attr('data-group-elements');

			// $('body').find('.collection-mobile__container-js .collection-mobile__'+type).addClass('active');
			// $('body').find('.collection-mobile__container-js').addClass('active');
			console.log(group);
			$('body').find('.collection-sort-item[data-sort="'+group+'"]').click();
			// $('body').find('.collection-mobile__container-js [data-filter-group="'+group+'"]').closest('.collection-filter-list-wrapper').addClass('active');
		}
		event.preventDefault();
	}); 
	function is_res(){
		if($(window).scrollTop() > 10){
			$('.site-header__main.bar.bar-fixed-on.bar-on').addClass('header__main__scrolling');
		}else{
			$('.site-header__main.bar.bar-fixed-on.bar-on').removeClass('header__main__scrolling');
		}
	}
	$(window).scroll(function() {
		is_res();
	});
	is_res();
	// $('.site-header__main.bar.bar-fixed-on.bar-on').append(clone);
}

