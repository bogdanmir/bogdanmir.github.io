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
        hj('trigger', 'Sales_copy_on_pdp');
}
catch(e) {}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - Sales copy on PDP',
    'eventAction': 'loaded'
});

$(document).on('click', '.read_more', function (event) {
	event.preventDefault();

	$(this).removeClass('read_more').addClass('read_less');
	// $('.sales_text').addClass('show');
	$('.sales_text .text_hidden').slideDown();

	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp - Sales copy on PDP',
	    'eventAction': 'click on button Read more'
	});
	console.log('Read more')
});

$(document).on('click', '.read_less', function (event) {
	event.preventDefault();

	$(this).removeClass('read_less').addClass('read_more');
	// $('.sales_text').removeClass('show');
	$('.sales_text .text_hidden').slideUp();

	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp - Sales copy on PDP',
	    'eventAction': 'click on button Read less'
	});
	console.log('Read less')
});