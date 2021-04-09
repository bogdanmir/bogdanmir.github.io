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

//Click on Zoom in icon on the main image
$(document).on('click', '#main-product-image .iz', function(){
    window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'Zoom in main image'
	});
	console.log('Click on Zoom')
});

// Click on arrow (prev) on the carousel of images
$(document).on('click', '.template-product .owl-carousel .owl-prev', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'left/right arrow images'
	});
	console.log('Click on arrow (prev)')
});

// Click on arrow (next) on the carousel of images
$(document).on('click', '.template-product .owl-carousel .owl-next', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'left/right arrow images'
	});
	console.log('Click on arrow (next)')
});

// Click on What's the difference link on Optics
// $(document).on('click', '.selector-wrapper .selector-wrapper:nth-child(1) .open-info' , function (){
// 	window.dataLayer = window.dataLayer || [];
// 	dataLayer.push({
// 	    'event': 'event-to-ga',
// 	    'eventCategory': 'Exp: Box Builder Improvement',
// 	    'eventAction': "What's difference/Optics"
// 	});
// 	console.log('Click on Whats the difference link on Optics')
// });

// Click on What's the difference link on LED
// $(document).on('click', '.selector-wrapper .selector-wrapper:nth-child(2) .open-info' , function (){
// 	window.dataLayer = window.dataLayer || [];
// 	dataLayer.push({
// 	    'event': 'event-to-ga',
// 	    'eventCategory': 'Exp: Box Builder Improvement',
// 	    'eventAction': "What's difference/LED"
// 	});
// 	console.log("Click on What's the difference link on LED")
// });

// Click on close What's the difference tolltip (both Optics/LED)
$(document).on('click', '.info-window .close' , function (){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': "close What's difference"
	});
	console.log("Click on close What's the difference tolltip (both Optics/LED)")
});

// Click on unfolding arrow on Mounting and Accessories
$(document).on('click', '.dropdown .dropdown__head' , function (){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'unfold Mounting and Accessories'
	});
	console.log("Click on unfolding arrow on Mounting and Accessories")
});

// Click on closing arrow on Mounting and Accessories
$(document).on('click', '.dropdown.is-show .dropdown__head' , function (){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'close Mounting and Accessories'
	});
	console.log("Click on closing arrow on Mounting and Accessories")
});

// Click on +Add on Mounting and Accessories
$(document).on('click', '.dropdown .add-to-cart' , function (){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'Add item on Mounting and Accessories'
	});
	console.log("Click on +Add on Mounting and Accessories")
});

// Click to Zoom combo diagram
$(document).on('click', '.info-performance .info-cont .zoom', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'Zoom in combo diagram'
	});
	console.log("Click to Zoom combo diagram")
});

// Click on Call Us at Compatibility
$(document).on('click', '.compatibility-section .link', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'Call us/Compatibility'
	});
	console.log("Click on Call Us at Compatibility")
});

// Click on (i) icon on tech spec table
$(document).on('click', '.tbl-wrap .opIn .d-ico', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'info tooltip on tech spec table'
	});
	console.log("Click on (i) icon on tech spec table")
});

// Close tooltip on tech spec table
$(document).on('click', '.tbl-wrap .opIn .test-message .close', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'close info tooltip on tech spec table'
	});
	console.log("Close tooltip on tech spec table")
});

// Click on Download manual link
$(document).on('click', '.specifications-wrap .manual_btn', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'download manual'
	});
	console.log("Click on Download manual link")
});

// Click on QnA on spec link
$(document).on('click', '.specifications-wrap .qna_btn', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'QnA on spec'
	});
	console.log("Click on QnA on spec link")
});

// Click on 20 inch option
$(document).on('click', '.other_options .item_wrap .item:nth-child(1)', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': '20 inch option'
	});
	console.log("Click on 20 inch option")
});

// Click on 30 inch option
$(document).on('click', '.other_options .item_wrap .item:nth-child(2)', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': '30 inch option'
	});
	console.log("Click on 30 inch option")
});

// Click on 40 inch option
$(document).on('click', '.other_options .item_wrap .item:nth-child(3)', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': '40 inch option'
	});
	console.log("Click on 40 inch option")
});

// Click on Call Us to assist
$(document).on('click', '.form_wrap .call-us a', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'Call us/Assist'
	});
	console.log("Click on Call Us to assist")
});

// Question submit
$(document).on('click', '.question-form .btn-success', function(){
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
	    'event': 'event-to-ga',
	    'eventCategory': 'Exp: Box Builder Improvement',
	    'eventAction': 'submit a question'
	});
	console.log("Question submit")
});