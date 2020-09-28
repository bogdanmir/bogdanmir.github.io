// language.some_slug
// alert(language.credit_text);





setInterval(function() {
	if( $('.proposition_button_credit').length == 0 ) {
		$('body').find('.proposition_area .proposition_lead .proposition_price').after('<div class="proposition_button_credit '+language.credit_class+'"><span class="" data-layer-v="27500">'+language.credit_text+'</span></div>');
	}
})