// $(document).on('click','body',function (event) {
//         console.log('body click');
// });

// Hotjar trigger to record video sessions
 (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1831568,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'PDP_improvements');

// Activation of the experiment (GA trigger)
window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp - PDP improvements',
	'eventAction': 'loaded'
});

//
$(document).on('click', '#main-product-image .iz', function(){
    window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'Zoom in main image'
	});
});