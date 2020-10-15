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
        hj('trigger', 'hero_image_hp');
}
catch(e) {}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - Hero image on HP',
    'eventAction': 'loaded'
});

$(document).on('click', '.hero-banner .btn-groups-links > .btn-url:nth-child(1)', function () {
	console.log('SHOP MEN');

	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp - Hero image on HP',
	    'eventAction': 'click on button Shop men'
	});
});

$(document).on('click', '.hero-banner .btn-groups-links > .btn-url:nth-child(2)', function () {
	console.log('SHOP WOMEN');

	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp - Hero image on HP',
	    'eventAction': 'click on button Shop women'
	});
});