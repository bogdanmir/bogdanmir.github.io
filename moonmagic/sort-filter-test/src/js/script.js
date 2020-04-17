 if($('.filter-bar__options').length>0 && screen.width < 768){
 	try{
 		hj('trigger', 'new_filters');
 	}catch(e){}
 	window.dataLayer = window.dataLayer || [];
 	dataLayer.push({
 		'event': 'event-to-ga',
 		'eventCategory': 'Exp - New filters on product listing',
 		'eventAction': 'loaded'
 	});
 	console.log(window.dataLayer[window.dataLayer.length - 1]);
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
 		'text' : 'Select Category'
 	}, 
 	{
 		'type' : 'filter',
 		'group' : 'filter_color',
 		'text' : 'color'
 	}, 
 	{
 		'type' : 'sorting',
 		'group' : 'price-ascending',
 		'text' : 'price: low-high'
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
 	$('body').on('click', '.collection-mobile__container .filter-bar__form-lists .collection-filter-title', function(event) {
 		$('body').find('.collection-mobile__container .filter-bar__form-lists').addClass('filter-open');
 	});
 	$('body').on('click', '.mobile-btn-close-filter, .mobile-close-icon, .collection-mobile__container-bg', function(event) {
 		$('body').removeClass('mobFilterOpen');
 		$('.site-header').attr('style','');
 		$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list').removeClass('open');
 		$('body').find('.collection-mobile__container .filter-bar__form-lists').removeClass('filter-open');
 		$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list .collection-filter-group').css({
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
 			'max-height' : '0px',
 			'overflow'   : 'hidden',
 			'transition' : '',
 		});
 		return false;
 	});
 	$('body').on('click', '.filter-bar__dropdown.filter-bar__toggle.sortby .collection-sort-item', function(event) {
 		var title = $(this).html();
 		window.dataLayer = window.dataLayer || [];
 		dataLayer.push({
 			'event': 'event-to-ga',
 			'eventCategory': 'Exp - New filters on product listing',
 			'eventAction': 'click on Sort by',
 			'eventLabel': title
 		});
 		console.log(window.dataLayer[window.dataLayer.length - 1]);
 	});
 	$('body').on('click', '#collectionMobileButtonSort', function(event) {
 		window.dataLayer = window.dataLayer || [];
 		dataLayer.push({
 			'event': 'event-to-ga',
 			'eventCategory': 'Exp - New filters on product listing',
 			'eventAction': 'click on Sort by',
 			'eventLabel': 'CTA'
 		});
 		console.log(window.dataLayer[window.dataLayer.length - 1]);
 	});
 	$('body').on('click', '#collectionMobileButtonFilter', function(event) {
 		window.dataLayer = window.dataLayer || [];
 		dataLayer.push({
 			'event': 'event-to-ga',
 			'eventCategory': 'Exp - New filters on product listing',
 			'eventAction': 'click on Filter by',
 			'eventLabel': 'CTA'
 		});
 		console.log(window.dataLayer[window.dataLayer.length - 1]);
 	});
 	$('body').on('click', '.collection-filter-list.open .collection-filter-group .collection-filter-item', function(event) {
 		
 	});
 	$('body').on('click', '.tags-bar .tag-element', function(event) {
 		var title = $(this).html();
 		window.dataLayer = window.dataLayer || [];
 		dataLayer.push({
 			'event': 'event-to-ga',
 			'eventCategory': 'Exp - New filters on product listing',
 			'eventAction': 'click on '+title,
 			'eventLabel': 'CTA tags'
 		});
 		console.log(window.dataLayer[window.dataLayer.length - 1]);
 		var type = $(this).attr('data-type');
 		if(type == 'filter'){
 			var group = $(this).attr('data-group-elements');
 			$('body').find('.filter-bar__options #collectionMobileButtonFilter').click();
 			$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list').removeClass('open');
 			$('body').find('.collection-mobile__container .filter-bar__form-lists').removeClass('filter-open');
 			$('body').find('.collection-mobile__container .filter-bar__form-lists .collection-filter-list .collection-filter-group').css({
 				'max-height' : '0px',
 				'overflow'   : 'hidden',
 				'transition' : '',
 			});
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
 			console.log(group);
 			$('body').find('.collection-sort-item[data-sort="'+group+'"]').click();
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
 }

