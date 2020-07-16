try {
  hj('trigger', 'newCart');
}
catch(e) {}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp - New Cart',
	'eventAction': 'loaded'
});

$('body').on('click', '.cart_btn .button.next_btn', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'Exp - New Cart',
		'eventAction': 'Click on Secure checkout button'
	});
	console.log('Click on Secure checkout button')
});