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
 	var clone = $('.filter-bar__options').clone();
 	clone.find('[id="collectionMobileButtonSort"]').addClass('btn-js-Sort');
 	clone.find('[id="collectionMobileButtonFilter"]').addClass('btn-js-Filter');
 	clone.find('[id]').attr('id','');
 	clone.find('[style]').attr('style','');
 	clone.find('.collection-mobile__container .collection-filter-title').append('<a href="#" class="back-to-menu">x</a>');
 	clone.find('.collection-mobile__container').addClass('collection-mobile__container-js');
 	clone.find('.collection-mobile__container').removeClass('collection-mobile__container');
 	var clonecontainer = clone.find('.collection-mobile__container-js').clone();
 	clonecontainer.find('.collection-filter-list').wrap('<div class="collection-filter-list-wrapper"></div>');
 	$('body').append(clonecontainer);
 	clone.find('.collection-mobile__container-js').remove();
	// console.log(html);
	$('.site-header__main.bar.bar-fixed-on.bar-on').append('<div class="tags-bar-wraper"><ul class="tags-bar"></ul></div>');
	$.each(tags,function(ind,el){
		if(el.type == 'filter'){
			if($('body').find('[data-filter-group="'+el.group+'"]').length > 0){
				$('.site-header__main.bar.bar-fixed-on.bar-on').find('.tags-bar').append('<li class="tag-item"><a href="#" class="tag-element" data-group-elements="'+el.group+'" data-type="'+el.type+'">'+el.text+'</a></li>');
			}
		}
		if(el.type == 'sorting'){
			if($('body').find('#sortby [data-sort="'+el.group+'"]').length > 0){
				$('.site-header__main.bar.bar-fixed-on.bar-on').find('.tags-bar').append('<li class="tag-item"><a href="#" class="tag-element" data-group-elements="'+el.group+'" data-type="'+el.type+'">'+el.text+'</a></li>');
			}
		}
	})
	$('body').on('click', '.collection-mobile__container-js .mobile-close-filter', function(event) {
		$('.collection-mobile__container-js').removeClass('active');
		$('.collection-mobile__container-js [data-filter-group]').removeClass('active');
		$('.collection-mobile__container-js .collection-filter-list-wrapper').removeClass('active');
	});
	$('body').on('change', '.collection-mobile__container-js input[type="checkbox"]', function(event) {
		var val = $(this).val();
		var name = $(this).attr('name');
		var checked = $(this).prop('checked');
		$('.collection-mobile__options input[name="'+name+'"][value="'+val+'"]').prop('checked',checked);
	});
	$('body').on('click', '.collection-mobile__container-js .collection-filter-title', function(event) {
		$(this).closest('[data-filter-group]').toggleClass('active');
		$(this).closest('.collection-filter-list-wrapper').toggleClass('active');
	});
	$('body').on('click', '.tags-bar .tag-element', function(event) {
		var type = $(this).attr('data-type');
		if(type == 'filter'){
			var group = $(this).attr('data-group-elements');
			var title = $('body').find('.collection-mobile__container-js .collection-mobile__'+type).addClass('active');
			var title = $('body').find('.collection-mobile__container-js').addClass('active');
			var title = $('body').find('.collection-mobile__container-js [data-filter-group="'+group+'"]').addClass('active');
			var title = $('body').find('.collection-mobile__container-js [data-filter-group="'+group+'"]').closest('.collection-filter-list-wrapper').addClass('active');
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
	$('.site-header__main.bar.bar-fixed-on.bar-on').append(clone);
}
