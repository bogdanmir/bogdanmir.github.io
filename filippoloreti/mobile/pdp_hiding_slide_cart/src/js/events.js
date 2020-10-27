try {
	(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1885763,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
        hj('trigger', 'no_slide_in_cart');
}
catch(e) {}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp - no_slide_in_cart',
	'eventAction': 'loaded'
});




$(document).on('click','.product-section .btn.add-to-cart',function() {

	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'Exp - no_slide_in_cart',
		'eventAction': 'click',
		'eventLabel': 'Add to Cart_no_cart'
	});

	if(window.ppwcp){
		clearInterval(window.ppwcp);
	}
	window.ppwcp = setInterval(function() {
		if($('body').find('.drawer .btn.cart__checkout').length > 0){
			clearInterval(window.ppwcp);
			$('body').find('.drawer .btn.cart__checkout').get(0).click();
		}
	})
});