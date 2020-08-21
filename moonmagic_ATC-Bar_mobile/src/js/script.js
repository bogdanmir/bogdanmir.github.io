(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1651990,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'atc_bar_product_page');

$(window).scroll(function() {
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1;
	if(isAndroid) {
		if( $(this).scrollTop() >= $('.product-wrapper .product__tooltip-box').position().top - 40 ){
			$('.product-atc-bar--mobile ').addClass('active');
				if(localStorage.getItem('sticky_bar') != 'true'){
					localStorage.setItem('sticky_bar','true');
					window.dataLayer = window.dataLayer || [];
					dataLayer.push({
						'event': 'event-to-ga',
						'eventCategory': 'Exp - ATC Bar Product Page',
						'eventAction': 'sticky ATC loaded'
					});
					console.log('Android - sticky ATC loaded');
				}
		} else {
			$('.product-atc-bar--mobile ').removeClass('active')
		}
		console.log('Android')
	} else {
		if( $(this).scrollTop() >= $('.product-wrapper .product__tooltip-box').position().top - 120 ){
			$('.product-atc-bar--mobile ').addClass('active')
			if(localStorage.getItem('sticky_bar') != 'true'){
					localStorage.setItem('sticky_bar','true');
					window.dataLayer = window.dataLayer || [];
					dataLayer.push({
						'event': 'event-to-ga',
						'eventCategory': 'Exp - ATC Bar Product Page',
						'eventAction': 'sticky ATC loaded'
					});
					console.log('Ios - sticky ATC loaded');
				}
		} else {
			$('.product-atc-bar--mobile ').removeClass('active')
		}
		console.log('Ios')
	}
});