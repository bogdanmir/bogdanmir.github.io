try{
    hj('trigger', 'optimize_pdp');
}catch (e) {}
function initjQuery(callback) {
    var script = document.createElement( "script" )
    script.type = "text/javascript";
    if(script.readyState) {
        script.onreadystatechange = function() {
            if ( script.readyState === "loaded" || script.readyState === "complete" ) {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function() {
            callback();
        };
    }
    script.src = '//code.jquery.com/jquery-3.3.1.min.js';
    document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
    initjQuery(function() {
        readyjQueryinit();
    });
}else{
    readyjQueryinit();
}

function readyjQueryinit() {
	jQuery(function($) {

	window.dataLayer = window.dataLayer || [];
		dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'Exp - Optimize PDP UX',
		'eventAction': 'loaded'
	});
	$(document).on("click", ".section.is-width-standard .product_section .swatch_options .swatch .1-pack-swatch", function () {
		console.log('QUANTITY - 1');
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'PDP',
			'eventAction': 'click',
			'eventLabel': 'QUANTITY - 1 PACK'
		});
	});
	$(document).on("click", ".section.is-width-standard .product_section .swatch_options .swatch .3-pack-swatch", function () {
		console.log('QUANTITY - 2');
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'PDP',
			'eventAction': 'click',
			'eventLabel': 'QUANTITY - 3 PACK'
		});
	});
	$(document).on("click", ".section.is-width-standard .product_section .swatch_options .swatch .3-pack-auto-ship-swatch", function () {
		console.log('QUANTITY - 3');
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'PDP',
			'eventAction': 'click',
			'eventLabel': 'QUANTITY - 3 PACK auto-ship'
		});
	});
	$(document).on("click", ".section.is-width-standard .on-qty-wrapper .on-qty-plus", function () {
		console.log('QUANTITY +1');
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'PDP',
			'eventAction': 'click',
			'eventLabel': 'QUANTITY +1'
		});
	});
	$(document).on("click", ".section.is-width-standard .on-qty-wrapper .on-qty-minus", function () {
		console.log('QUANTITY -1');
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'PDP',
			'eventAction': 'click',
			'eventLabel': 'QUANTITY -1'
		});
	});

	$(document).on("click", ".section.is-width-standard .on-payment-wrapper .on-item-1", function () {
		console.log('Apple Pay');
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'PDP',
			'eventAction': 'click',
			'eventLabel': 'Payment method - https://cdn.shopify.com/s/files/1/2572/8006/files/Group_259.png?v=1576496655'
		});
	});
	$(document).on("click", ".section.is-width-standard .on-payment-wrapper .on-item-3", function () {
		console.log('PayPal');
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'PDP',
			'eventAction': 'click',
			'eventLabel': 'Payment method - https://cdn.shopify.com/s/files/1/2572/8006/files/Group_258.png?v=1576496694'
		});
	});
	$(document).on("click", ".section.is-width-standard .on-payment-wrapper .on-item-2", function () {
		console.log('Google Pay');
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'PDP',
			'eventAction': 'click',
			'eventLabel': 'Payment method - https://cdn.shopify.com/s/files/1/2572/8006/files/Group_260.png?v=1576496678'
		});
	});
	$(document).on("click", ".section.is-width-standard .on-payment-wrapper .on-item-4", function () {
		console.log('Amazon Pay');
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'PDP',
			'eventAction': 'click',
			'eventLabel': 'Payment method - https://cdn.shopify.com/s/files/1/2572/8006/files/Group_257.png?v=1576496708'
		});
	});
	$(document).on("click", ".section.is-width-standard .purchase-details .button--add-to-cart", function () {
		console.log('button-add-to-cart');
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'PDP',
			'eventAction': 'click',
			'eventLabel': 'Payment method - Pay with card'
		});
	});

	$('.section.is-width-standard .product__images').append('<span class="made_in">Made in USA</span>');
    $('.section.is-width-standard .shopify-product-form .button--add-to-cart .text').text('checkout');

	$('.section.is-width-standard .swatch .1-pack-swatch label.on-variant-label .on-title').text('4-week pack');

	$('.section.is-width-standard .swatch .3-pack-swatch label.on-variant-label').prepend('<span class="top-label">TOP-SELLER</span>');
	$('.section.is-width-standard .swatch .3-pack-swatch .on-icon').html('<svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.66481 1.64672C3.76478 2.24413 2.37387 3.03749 1.72256 3.81918L1.46549 3.60499L1.72283 3.81886C1.69971 3.84668 1.66607 3.9137 1.64198 4.03689C1.61906 4.15412 1.61027 4.29352 1.61308 4.43616L1.61311 4.43774C1.61782 4.75219 1.76375 5.04877 2.01552 5.24745L2.01841 5.24973C2.61052 5.72763 3.63674 6.52235 4.30881 6.93837L4.31334 6.94123C4.62802 7.14305 5.00074 7.25759 5.39007 7.27967C6.04976 7.31064 7.07703 7.34714 7.83466 7.32289C8.05126 7.31384 8.26463 7.22092 8.52345 7.04374C8.68845 6.93078 8.84416 6.80489 9.01955 6.66309C9.1361 6.56886 9.26134 6.46761 9.40377 6.35845C10.0897 5.83277 10.9833 5.2882 12.3741 5.27482L12.3773 5.27479L12.5301 5.2748C13.921 5.28819 14.8131 5.83286 15.4983 6.35857C15.6395 6.46696 15.764 6.56761 15.8798 6.66133C16.056 6.80387 16.2124 6.93036 16.378 7.04365C16.6369 7.22065 16.8511 7.31384 17.0696 7.32289C17.8209 7.34713 18.848 7.31065 19.5142 7.27967C19.902 7.25767 20.2698 7.1437 20.593 6.93986L20.5999 6.93564C20.8444 6.78955 21.1387 6.58365 21.4446 6.35889L19.9982 1.90636C18.0067 1.16542 15.3728 0.669218 12.5331 0.669218H12.3836C9.88923 0.669218 7.55042 1.05384 5.66481 1.64672ZM5.46408 1.00831C7.41724 0.394191 9.82393 0 12.3836 0H12.5331C15.5175 0 18.2944 0.533567 20.3868 1.33788C20.481 1.37408 20.5538 1.45086 20.585 1.54683L22.1554 6.38103C22.1997 6.51735 22.1522 6.66673 22.0374 6.7525C21.6644 7.03111 21.2736 7.31237 20.9466 7.5081C20.5232 7.77423 20.0453 7.92014 19.5502 7.94792L19.547 7.9481C18.8799 7.97914 17.8275 8.017 17.0466 7.99171L17.044 7.99163C16.6428 7.97557 16.3036 7.80347 16.0003 7.59605C15.8174 7.47097 15.6206 7.31236 15.4249 7.15451C15.3123 7.06376 15.2 6.97325 15.0909 6.88951C14.4661 6.41011 13.7134 5.95585 12.5252 5.94402H12.379C11.1907 5.95585 10.4364 6.4102 9.81085 6.88962C9.70089 6.97389 9.58772 7.06507 9.47429 7.15646C9.27915 7.31368 9.08322 7.47154 8.90148 7.59595C8.59878 7.80318 8.26019 7.97553 7.86028 7.99162L7.85758 7.99173C7.07045 8.01701 6.0182 7.97913 5.35712 7.94808L5.35407 7.94794C4.85993 7.92021 4.3741 7.77462 3.95436 7.50602C3.24353 7.06566 2.19099 6.249 1.59942 5.77158C1.19178 5.44916 0.95196 4.96472 0.943981 4.44857C0.940602 4.27494 0.950538 4.08573 0.985205 3.90845C1.01876 3.73688 1.08171 3.54326 1.20815 3.39112L1.20842 3.3908C1.9842 2.45972 3.52534 1.6179 5.46408 1.00831Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.312 1.32484C20.439 1.34214 20.545 1.43052 20.5849 1.55239L22.1678 6.3928C22.2015 6.4959 22.1831 6.60895 22.1185 6.69608C22.0539 6.78322 21.9511 6.83364 21.8426 6.83134C21.2568 6.81892 20.6608 6.80025 20.2308 6.77512C19.7164 6.75145 19.2289 6.49913 18.9241 6.0789L18.9231 6.07748V6.07747C18.8248 5.94046 18.7208 5.78156 18.6442 5.61778C18.5711 5.46162 18.5053 5.26464 18.525 5.06005C18.5944 4.05377 19.1084 2.79484 19.9882 1.47117C20.0592 1.36438 20.1849 1.30755 20.312 1.32484ZM20.1711 2.44011C19.563 3.478 19.2401 4.40212 19.1923 5.11062C19.192 5.11485 19.1917 5.11908 19.1912 5.12329C19.1882 5.15198 19.1965 5.21909 19.2504 5.33417C19.3014 5.44322 19.3779 5.56331 19.4664 5.68667C19.6472 5.93559 19.9436 6.09243 20.2631 6.10668L20.2677 6.10688V6.10692C20.5721 6.12474 20.9665 6.13941 21.3846 6.15086L20.1711 2.44011Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4981 3.25241C10.4977 3.25321 10.4972 3.25475 10.4972 3.25748C10.4972 3.2602 10.4977 3.26174 10.4981 3.26254C10.4985 3.26346 10.499 3.26425 10.4997 3.26493C10.5004 3.26561 10.5012 3.26623 10.5024 3.26671C10.5034 3.26714 10.5053 3.2677 10.5083 3.2677H13.8361C13.8392 3.2677 13.8411 3.26714 13.8421 3.26671C13.8432 3.26623 13.8441 3.26561 13.8448 3.26493C13.8455 3.26425 13.846 3.26346 13.8464 3.26254C13.8467 3.26174 13.8472 3.2602 13.8472 3.25748C13.8472 3.25475 13.8467 3.25321 13.8464 3.25241C13.846 3.2515 13.8455 3.25071 13.8448 3.25003C13.8441 3.24934 13.8432 3.24872 13.8421 3.24824C13.8411 3.24781 13.8392 3.24725 13.8361 3.24725H10.5083C10.5053 3.24725 10.5034 3.24781 10.5024 3.24824C10.5012 3.24872 10.5004 3.24934 10.4997 3.25003C10.499 3.25071 10.4985 3.2515 10.4981 3.25241ZM10.0957 3.25748C10.0957 3.02789 10.2799 2.84572 10.5083 2.84572H13.8361C14.0646 2.84572 14.2488 3.02789 14.2488 3.25748C14.2488 3.48706 14.0646 3.66923 13.8361 3.66923H10.5083C10.2799 3.66923 10.0957 3.48706 10.0957 3.25748Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.3725 6.22108C24.2153 6.09002 24.1941 5.85639 24.3252 5.69923L27.1728 2.28456C27.3038 2.1274 27.5375 2.10624 27.6946 2.2373C27.8518 2.36835 27.8729 2.60199 27.7419 2.75915L24.8943 6.17382C24.7633 6.33098 24.5296 6.35214 24.3725 6.22108Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.6939 6.18797C27.5399 6.32269 27.3058 6.30704 27.1711 6.15301L24.2439 2.80634C24.1092 2.65232 24.1249 2.41824 24.2789 2.28353C24.4329 2.14881 24.667 2.16446 24.8017 2.31848L27.7289 5.66515C27.8636 5.81918 27.8479 6.05325 27.6939 6.18797Z"/></g><path d="M33.5859 4.1751C34.0979 3.9351 34.3779 3.5191 34.3779 2.9671C34.3779 2.0311 33.5619 1.4471 32.3459 1.4471C31.1379 1.4471 30.3299 2.0311 30.3299 2.9671C30.3299 3.5191 30.6019 3.9351 31.1139 4.1751C30.4819 4.4151 30.1299 4.8871 30.1299 5.5271C30.1299 6.5431 30.9859 7.1751 32.3459 7.1751C33.7139 7.1751 34.5779 6.5431 34.5779 5.5271C34.5779 4.8871 34.2259 4.4231 33.5859 4.1751ZM32.3459 2.0951C33.0979 2.0951 33.5939 2.4391 33.5939 2.9991C33.5939 3.5511 33.1219 3.8951 32.3459 3.8951C31.5779 3.8951 31.1219 3.5511 31.1219 2.9991C31.1219 2.4391 31.5939 2.0951 32.3459 2.0951ZM32.3459 6.5271C31.4579 6.5271 30.9299 6.1351 30.9299 5.5031C30.9299 4.8871 31.4579 4.5031 32.3459 4.5031C33.2339 4.5031 33.7779 4.8871 33.7779 5.5031C33.7779 6.1351 33.2339 6.5271 32.3459 6.5271Z"/><path d="M40.1823 5.0471H39.1183V3.8311H38.3663V5.0471H36.2143L38.9583 1.5111H38.0943L35.2303 5.1751V5.7351H38.3423V7.1111H39.1183V5.7351H40.1823V5.0471Z"/><defs><clipPath id="clip0"><rect width="40" height="8"/></clipPath></defs></svg>');
	$('.section.is-width-standard .swatch .3-pack-swatch label.on-variant-label .on-title').text('12-week pack');
	$('.section.is-width-standard .swatch .3-pack-swatch label.on-variant-label').append('<span class="save-label">Save 7%</span>');
	$('.section.is-width-standard .swatch .3-pack-swatch label.on-variant-label').append('<span class="old-price-label">$59.91</span>');
	$('.section.is-width-standard .swatch .3-pack-swatch label.on-variant-label').append('<span class="new-price-label">$55.97</span>');
	$('.section.is-width-standard .swatch .3-pack-swatch label.on-variant-label').append('<span class="weeks-label">per 12 weeks</span>');

	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label').prepend('<span class="best-label">best deal</span>');
	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch .on-icon').html('<svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.66481 1.64672C3.76478 2.24413 2.37387 3.03749 1.72256 3.81918L1.46549 3.60499L1.72283 3.81886C1.69971 3.84668 1.66607 3.9137 1.64198 4.03689C1.61906 4.15412 1.61027 4.29352 1.61308 4.43616L1.61311 4.43774C1.61782 4.75219 1.76375 5.04877 2.01552 5.24745L2.01841 5.24973C2.61052 5.72763 3.63674 6.52235 4.30881 6.93837L4.31334 6.94123C4.62802 7.14305 5.00074 7.25759 5.39007 7.27967C6.04976 7.31064 7.07703 7.34714 7.83466 7.32289C8.05126 7.31384 8.26463 7.22092 8.52345 7.04374C8.68845 6.93078 8.84416 6.80489 9.01955 6.66309C9.1361 6.56886 9.26134 6.46761 9.40377 6.35845C10.0897 5.83277 10.9833 5.2882 12.3741 5.27482L12.3773 5.27479L12.5301 5.2748C13.921 5.28819 14.8131 5.83286 15.4983 6.35857C15.6395 6.46696 15.764 6.56761 15.8798 6.66133C16.056 6.80387 16.2124 6.93036 16.378 7.04365C16.6369 7.22065 16.8511 7.31384 17.0696 7.32289C17.8209 7.34713 18.848 7.31065 19.5142 7.27967C19.902 7.25767 20.2698 7.1437 20.593 6.93986L20.5999 6.93564C20.8444 6.78955 21.1387 6.58365 21.4446 6.35889L19.9982 1.90636C18.0067 1.16542 15.3728 0.669218 12.5331 0.669218H12.3836C9.88923 0.669218 7.55042 1.05384 5.66481 1.64672ZM5.46408 1.00831C7.41724 0.394191 9.82393 0 12.3836 0H12.5331C15.5175 0 18.2944 0.533567 20.3868 1.33788C20.481 1.37408 20.5538 1.45086 20.585 1.54683L22.1554 6.38103C22.1997 6.51735 22.1522 6.66673 22.0374 6.7525C21.6644 7.03111 21.2736 7.31237 20.9466 7.5081C20.5232 7.77423 20.0453 7.92014 19.5502 7.94792L19.547 7.9481C18.8799 7.97914 17.8275 8.017 17.0466 7.99171L17.044 7.99163C16.6428 7.97557 16.3036 7.80347 16.0003 7.59605C15.8174 7.47097 15.6206 7.31236 15.4249 7.15451C15.3123 7.06376 15.2 6.97325 15.0909 6.88951C14.4661 6.41011 13.7134 5.95585 12.5252 5.94402H12.379C11.1907 5.95585 10.4364 6.4102 9.81085 6.88962C9.70089 6.97389 9.58772 7.06507 9.47429 7.15646C9.27915 7.31368 9.08322 7.47154 8.90148 7.59595C8.59878 7.80318 8.26019 7.97553 7.86028 7.99162L7.85758 7.99173C7.07045 8.01701 6.0182 7.97913 5.35712 7.94808L5.35407 7.94794C4.85993 7.92021 4.3741 7.77462 3.95436 7.50602C3.24353 7.06566 2.19099 6.249 1.59942 5.77158C1.19178 5.44916 0.95196 4.96472 0.943981 4.44857C0.940602 4.27494 0.950538 4.08573 0.985205 3.90845C1.01876 3.73688 1.08171 3.54326 1.20815 3.39112L1.20842 3.3908C1.9842 2.45972 3.52534 1.6179 5.46408 1.00831Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.312 1.32484C20.439 1.34214 20.545 1.43052 20.5849 1.55239L22.1678 6.3928C22.2015 6.4959 22.1831 6.60895 22.1185 6.69608C22.0539 6.78322 21.9511 6.83364 21.8426 6.83134C21.2568 6.81892 20.6608 6.80025 20.2308 6.77512C19.7164 6.75145 19.2289 6.49913 18.9241 6.0789L18.9231 6.07748V6.07747C18.8248 5.94046 18.7208 5.78156 18.6442 5.61778C18.5711 5.46162 18.5053 5.26464 18.525 5.06005C18.5944 4.05377 19.1084 2.79484 19.9882 1.47117C20.0592 1.36438 20.1849 1.30755 20.312 1.32484ZM20.1711 2.44011C19.563 3.478 19.2401 4.40212 19.1923 5.11062C19.192 5.11485 19.1917 5.11908 19.1912 5.12329C19.1882 5.15198 19.1965 5.21909 19.2504 5.33417C19.3014 5.44322 19.3779 5.56331 19.4664 5.68667C19.6472 5.93559 19.9436 6.09243 20.2631 6.10668L20.2677 6.10688V6.10692C20.5721 6.12474 20.9665 6.13941 21.3846 6.15086L20.1711 2.44011Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4981 3.25241C10.4977 3.25321 10.4972 3.25475 10.4972 3.25748C10.4972 3.2602 10.4977 3.26174 10.4981 3.26254C10.4985 3.26346 10.499 3.26425 10.4997 3.26493C10.5004 3.26561 10.5012 3.26623 10.5024 3.26671C10.5034 3.26714 10.5053 3.2677 10.5083 3.2677H13.8361C13.8392 3.2677 13.8411 3.26714 13.8421 3.26671C13.8432 3.26623 13.8441 3.26561 13.8448 3.26493C13.8455 3.26425 13.846 3.26346 13.8464 3.26254C13.8467 3.26174 13.8472 3.2602 13.8472 3.25748C13.8472 3.25475 13.8467 3.25321 13.8464 3.25241C13.846 3.2515 13.8455 3.25071 13.8448 3.25003C13.8441 3.24934 13.8432 3.24872 13.8421 3.24824C13.8411 3.24781 13.8392 3.24725 13.8361 3.24725H10.5083C10.5053 3.24725 10.5034 3.24781 10.5024 3.24824C10.5012 3.24872 10.5004 3.24934 10.4997 3.25003C10.499 3.25071 10.4985 3.2515 10.4981 3.25241ZM10.0957 3.25748C10.0957 3.02789 10.2799 2.84572 10.5083 2.84572H13.8361C14.0646 2.84572 14.2488 3.02789 14.2488 3.25748C14.2488 3.48706 14.0646 3.66923 13.8361 3.66923H10.5083C10.2799 3.66923 10.0957 3.48706 10.0957 3.25748Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.3725 6.22108C24.2153 6.09002 24.1941 5.85639 24.3252 5.69923L27.1728 2.28456C27.3038 2.1274 27.5375 2.10624 27.6946 2.2373C27.8518 2.36835 27.8729 2.60199 27.7419 2.75915L24.8943 6.17382C24.7633 6.33098 24.5296 6.35214 24.3725 6.22108Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.6939 6.18797C27.5399 6.32269 27.3058 6.30704 27.1711 6.15301L24.2439 2.80634C24.1092 2.65232 24.1249 2.41824 24.2789 2.28353C24.4329 2.14881 24.667 2.16446 24.8017 2.31848L27.7289 5.66515C27.8636 5.81918 27.8479 6.05325 27.6939 6.18797Z"/></g><path d="M33.5859 4.1751C34.0979 3.9351 34.3779 3.5191 34.3779 2.9671C34.3779 2.0311 33.5619 1.4471 32.3459 1.4471C31.1379 1.4471 30.3299 2.0311 30.3299 2.9671C30.3299 3.5191 30.6019 3.9351 31.1139 4.1751C30.4819 4.4151 30.1299 4.8871 30.1299 5.5271C30.1299 6.5431 30.9859 7.1751 32.3459 7.1751C33.7139 7.1751 34.5779 6.5431 34.5779 5.5271C34.5779 4.8871 34.2259 4.4231 33.5859 4.1751ZM32.3459 2.0951C33.0979 2.0951 33.5939 2.4391 33.5939 2.9991C33.5939 3.5511 33.1219 3.8951 32.3459 3.8951C31.5779 3.8951 31.1219 3.5511 31.1219 2.9991C31.1219 2.4391 31.5939 2.0951 32.3459 2.0951ZM32.3459 6.5271C31.4579 6.5271 30.9299 6.1351 30.9299 5.5031C30.9299 4.8871 31.4579 4.5031 32.3459 4.5031C33.2339 4.5031 33.7779 4.8871 33.7779 5.5031C33.7779 6.1351 33.2339 6.5271 32.3459 6.5271Z"/><path d="M40.1823 5.0471H39.1183V3.8311H38.3663V5.0471H36.2143L38.9583 1.5111H38.0943L35.2303 5.1751V5.7351H38.3423V7.1111H39.1183V5.7351H40.1823V5.0471Z"/><defs><clipPath id="clip0"><rect width="40" height="8"/></clipPath></defs></svg>');
	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label .on-title').text('Subscribe');
	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label').append('<span class="save-label">Save 17%</span>');
	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label').append('<span class="old-price-label">$59.91</span>');
	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label').append('<span class="new-price-label">$49.97</span>');
	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label').append('<span class="weeks-label">every 12 weeks</span>');



	var description_form = $('.section.is-width-standard .product_section .product__information.one-half .description.content');
	$('.section.is-width-standard .product_section .product__information.one-half').appendTo(description_form);
	

	var styles = "<style>";
	styles += `
		.section.is-width-standard .product_section .product__images {
			position: relative;
		}
		.section.is-width-standard .product_section .product__images .made_in{
			position: absolute;
			top: 63px;
			right: 0;
			font-weight: 500;
    		font-size: 12px;
    		color: #1E415F;
		}
		.section.is-width-standard .product_section .product__images .made_in:before{
			content: '';
			display: inline-block;
			background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTAiPgo8cGF0aCBkPSJNMTMgMEgxQzAuNDQ3NzE1IDAgMCAwLjQ0NzcxNSAwIDFWOUMwIDkuNTUyMjggMC40NDc3MTUgMTAgMSAxMEgxM0MxMy41NTIzIDEwIDE0IDkuNTUyMjggMTQgOVYxQzE0IDAuNDQ3NzE1IDEzLjU1MjMgMCAxMyAwWiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CjxwYXRoIGQ9Ik0xMyAwSDFDMC40NDc3MTUgMCAwIDAuNDQ3NzE1IDAgMVY5QzAgOS41NTIyOCAwLjQ0NzcxNSAxMCAxIDEwSDEzQzEzLjU1MjMgMTAgMTQgOS41NTIyOCAxNCA5VjFDMTQgMC40NDc3MTUgMTMuNTUyMyAwIDEzIDBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDkuMzMzMzNWMTBIMFY5LjMzMzMzSDE0Wk0xNCA4VjguNjY2NjdIMFY4SDE0Wk0xNCA2LjY2NjY3VjcuMzMzMzNIMFY2LjY2NjY3SDE0Wk0xNCA1LjMzMzMzVjZIMFY1LjMzMzMzSDE0Wk0xNCA0VjQuNjY2NjdIMFY0SDE0Wk0xNCAyLjY2NjY3VjMuMzMzMzNIMFYyLjY2NjY3SDE0Wk0xNCAxLjMzMzMzVjJIMFYxLjMzMzMzSDE0Wk0xNCAwVjAuNjY2NjY3SDBWMEgxNFoiIGZpbGw9IiNEMDJGNDQiLz4KPHBhdGggZD0iTTYgMEgwVjQuNjY2NjdINlYwWiIgZmlsbD0iIzQ2NDY3RiIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGQ9Ik01LjAwMDA4IDMuMzMzMzRDNS4xODQxOCAzLjMzMzM0IDUuMzMzNDIgMy40ODI1OCA1LjMzMzQyIDMuNjY2NjdDNS4zMzM0MiAzLjg1MDc3IDUuMTg0MTggNCA1LjAwMDA4IDRDNC44MTU5OSA0IDQuNjY2NzUgMy44NTA3NyA0LjY2Njc1IDMuNjY2NjdDNC42NjY3NSAzLjQ4MjU4IDQuODE1OTkgMy4zMzMzNCA1LjAwMDA4IDMuMzMzMzRaTTMuNjY2NzUgMy4zMzMzNEMzLjg1MDg0IDMuMzMzMzQgNC4wMDAwOCAzLjQ4MjU4IDQuMDAwMDggMy42NjY2N0M0LjAwMDA4IDMuODUwNzcgMy44NTA4NCA0IDMuNjY2NzUgNEMzLjQ4MjY1IDQgMy4zMzM0MSAzLjg1MDc3IDMuMzMzNDEgMy42NjY2N0MzLjMzMzQxIDMuNDgyNTggMy40ODI2NSAzLjMzMzM0IDMuNjY2NzUgMy4zMzMzNFpNMi4zMzM0MSAzLjMzMzM0QzIuNTE3NTEgMy4zMzMzNCAyLjY2Njc1IDMuNDgyNTggMi42NjY3NSAzLjY2NjY3QzIuNjY2NzUgMy44NTA3NyAyLjUxNzUxIDQgMi4zMzM0MSA0QzIuMTQ5MzIgNCAyLjAwMDA4IDMuODUwNzcgMi4wMDAwOCAzLjY2NjY3QzIuMDAwMDggMy40ODI1OCAyLjE0OTMyIDMuMzMzMzQgMi4zMzM0MSAzLjMzMzM0Wk0xLjAwMDA4IDMuMzMzMzRDMS4xODQxOCAzLjMzMzM0IDEuMzMzNDEgMy40ODI1OCAxLjMzMzQxIDMuNjY2NjdDMS4zMzM0MSAzLjg1MDc3IDEuMTg0MTggNCAxLjAwMDA4IDRDMC44MTU5ODYgNCAwLjY2Njc0OCAzLjg1MDc3IDAuNjY2NzQ4IDMuNjY2NjdDMC42NjY3NDggMy40ODI1OCAwLjgxNTk4NiAzLjMzMzM0IDEuMDAwMDggMy4zMzMzNFpNMS42NjY3NSAyLjY2NjY3QzEuODUwODQgMi42NjY2NyAyLjAwMDA4IDIuODE1OTEgMi4wMDAwOCAzQzIuMDAwMDggMy4xODQxIDEuODUwODQgMy4zMzMzNCAxLjY2Njc1IDMuMzMzMzRDMS40ODI2NSAzLjMzMzM0IDEuMzMzNDEgMy4xODQxIDEuMzMzNDEgM0MxLjMzMzQxIDIuODE1OTEgMS40ODI2NSAyLjY2NjY3IDEuNjY2NzUgMi42NjY2N1pNMy4wMDAwOCAyLjY2NjY3QzMuMTg0MTggMi42NjY2NyAzLjMzMzQxIDIuODE1OTEgMy4zMzM0MSAzQzMuMzMzNDEgMy4xODQxIDMuMTg0MTggMy4zMzMzNCAzLjAwMDA4IDMuMzMzMzRDMi44MTU5OSAzLjMzMzM0IDIuNjY2NzUgMy4xODQxIDIuNjY2NzUgM0MyLjY2Njc1IDIuODE1OTEgMi44MTU5OSAyLjY2NjY3IDMuMDAwMDggMi42NjY2N1pNNC4zMzM0MSAyLjY2NjY3QzQuNTE3NTEgMi42NjY2NyA0LjY2Njc1IDIuODE1OTEgNC42NjY3NSAzQzQuNjY2NzUgMy4xODQxIDQuNTE3NTEgMy4zMzMzNCA0LjMzMzQxIDMuMzMzMzRDNC4xNDkzMiAzLjMzMzM0IDQuMDAwMDggMy4xODQxIDQuMDAwMDggM0M0LjAwMDA4IDIuODE1OTEgNC4xNDkzMiAyLjY2NjY3IDQuMzMzNDEgMi42NjY2N1pNNS4wMDAwOCAyQzUuMTg0MTggMiA1LjMzMzQyIDIuMTQ5MjQgNS4zMzM0MiAyLjMzMzM0QzUuMzMzNDIgMi41MTc0MyA1LjE4NDE4IDIuNjY2NjcgNS4wMDAwOCAyLjY2NjY3QzQuODE1OTkgMi42NjY2NyA0LjY2Njc1IDIuNTE3NDMgNC42NjY3NSAyLjMzMzM0QzQuNjY2NzUgMi4xNDkyNCA0LjgxNTk5IDIgNS4wMDAwOCAyWk0zLjY2Njc1IDJDMy44NTA4NCAyIDQuMDAwMDggMi4xNDkyNCA0LjAwMDA4IDIuMzMzMzRDNC4wMDAwOCAyLjUxNzQzIDMuODUwODQgMi42NjY2NyAzLjY2Njc1IDIuNjY2NjdDMy40ODI2NSAyLjY2NjY3IDMuMzMzNDEgMi41MTc0MyAzLjMzMzQxIDIuMzMzMzRDMy4zMzM0MSAyLjE0OTI0IDMuNDgyNjUgMiAzLjY2Njc1IDJaTTIuMzMzNDEgMkMyLjUxNzUxIDIgMi42NjY3NSAyLjE0OTI0IDIuNjY2NzUgMi4zMzMzNEMyLjY2Njc1IDIuNTE3NDMgMi41MTc1MSAyLjY2NjY3IDIuMzMzNDEgMi42NjY2N0MyLjE0OTMyIDIuNjY2NjcgMi4wMDAwOCAyLjUxNzQzIDIuMDAwMDggMi4zMzMzNEMyLjAwMDA4IDIuMTQ5MjQgMi4xNDkzMiAyIDIuMzMzNDEgMlpNMS4wMDAwOCAyQzEuMTg0MTggMiAxLjMzMzQxIDIuMTQ5MjQgMS4zMzM0MSAyLjMzMzM0QzEuMzMzNDEgMi41MTc0MyAxLjE4NDE4IDIuNjY2NjcgMS4wMDAwOCAyLjY2NjY3QzAuODE1OTg2IDIuNjY2NjcgMC42NjY3NDggMi41MTc0MyAwLjY2Njc0OCAyLjMzMzM0QzAuNjY2NzQ4IDIuMTQ5MjQgMC44MTU5ODYgMiAxLjAwMDA4IDJaTTEuNjY2NzUgMS4zMzMzNEMxLjg1MDg0IDEuMzMzMzQgMi4wMDAwOCAxLjQ4MjU4IDIuMDAwMDggMS42NjY2N0MyLjAwMDA4IDEuODUwNzcgMS44NTA4NCAyIDEuNjY2NzUgMkMxLjQ4MjY1IDIgMS4zMzM0MSAxLjg1MDc3IDEuMzMzNDEgMS42NjY2N0MxLjMzMzQxIDEuNDgyNTggMS40ODI2NSAxLjMzMzM0IDEuNjY2NzUgMS4zMzMzNFpNMy4wMDAwOCAxLjMzMzM0QzMuMTg0MTggMS4zMzMzNCAzLjMzMzQxIDEuNDgyNTggMy4zMzM0MSAxLjY2NjY3QzMuMzMzNDEgMS44NTA3NyAzLjE4NDE4IDIgMy4wMDAwOCAyQzIuODE1OTkgMiAyLjY2Njc1IDEuODUwNzcgMi42NjY3NSAxLjY2NjY3QzIuNjY2NzUgMS40ODI1OCAyLjgxNTk5IDEuMzMzMzQgMy4wMDAwOCAxLjMzMzM0Wk00LjMzMzQxIDEuMzMzMzRDNC41MTc1MSAxLjMzMzM0IDQuNjY2NzUgMS40ODI1OCA0LjY2Njc1IDEuNjY2NjdDNC42NjY3NSAxLjg1MDc3IDQuNTE3NTEgMiA0LjMzMzQxIDJDNC4xNDkzMiAyIDQuMDAwMDggMS44NTA3NyA0LjAwMDA4IDEuNjY2NjdDNC4wMDAwOCAxLjQ4MjU4IDQuMTQ5MzIgMS4zMzMzNCA0LjMzMzQxIDEuMzMzMzRaTTEuMDAwMDggMC42NjY2NzJDMS4xODQxOCAwLjY2NjY3MiAxLjMzMzQxIDAuODE1OTEgMS4zMzM0MSAxLjAwMDAxQzEuMzMzNDEgMS4xODQxIDEuMTg0MTggMS4zMzMzNCAxLjAwMDA4IDEuMzMzMzRDMC44MTU5ODYgMS4zMzMzNCAwLjY2Njc0OCAxLjE4NDEgMC42NjY3NDggMS4wMDAwMUMwLjY2Njc0OCAwLjgxNTkxIDAuODE1OTg2IDAuNjY2NjcyIDEuMDAwMDggMC42NjY2NzJaTTIuMzMzNDEgMC42NjY2NzJDMi41MTc1MSAwLjY2NjY3MiAyLjY2Njc1IDAuODE1OTEgMi42NjY3NSAxLjAwMDAxQzIuNjY2NzUgMS4xODQxIDIuNTE3NTEgMS4zMzMzNCAyLjMzMzQxIDEuMzMzMzRDMi4xNDkzMiAxLjMzMzM0IDIuMDAwMDggMS4xODQxIDIuMDAwMDggMS4wMDAwMUMyLjAwMDA4IDAuODE1OTEgMi4xNDkzMiAwLjY2NjY3MiAyLjMzMzQxIDAuNjY2NjcyWk0zLjY2Njc1IDAuNjY2NjcyQzMuODUwODQgMC42NjY2NzIgNC4wMDAwOCAwLjgxNTkxIDQuMDAwMDggMS4wMDAwMUM0LjAwMDA4IDEuMTg0MSAzLjg1MDg0IDEuMzMzMzQgMy42NjY3NSAxLjMzMzM0QzMuNDgyNjUgMS4zMzMzNCAzLjMzMzQxIDEuMTg0MSAzLjMzMzQxIDEuMDAwMDFDMy4zMzM0MSAwLjgxNTkxIDMuNDgyNjUgMC42NjY2NzIgMy42NjY3NSAwLjY2NjY3MlpNNS4wMDAwOCAwLjY2NjY3MkM1LjE4NDE4IDAuNjY2NjcyIDUuMzMzNDIgMC44MTU5MSA1LjMzMzQyIDEuMDAwMDFDNS4zMzM0MiAxLjE4NDEgNS4xODQxOCAxLjMzMzM0IDUuMDAwMDggMS4zMzMzNEM0LjgxNTk5IDEuMzMzMzQgNC42NjY3NSAxLjE4NDEgNC42NjY3NSAxLjAwMDAxQzQuNjY2NzUgMC44MTU5MSA0LjgxNTk5IDAuNjY2NjcyIDUuMDAwMDggMC42NjY2NzJaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxwYXRoIGQ9Ik01LjAwMDA4IDMuMzMzMzRDNS4xODQxOCAzLjMzMzM0IDUuMzMzNDIgMy40ODI1OCA1LjMzMzQyIDMuNjY2NjdDNS4zMzM0MiAzLjg1MDc3IDUuMTg0MTggNCA1LjAwMDA4IDRDNC44MTU5OSA0IDQuNjY2NzUgMy44NTA3NyA0LjY2Njc1IDMuNjY2NjdDNC42NjY3NSAzLjQ4MjU4IDQuODE1OTkgMy4zMzMzNCA1LjAwMDA4IDMuMzMzMzRaTTMuNjY2NzUgMy4zMzMzNEMzLjg1MDg0IDMuMzMzMzQgNC4wMDAwOCAzLjQ4MjU4IDQuMDAwMDggMy42NjY2N0M0LjAwMDA4IDMuODUwNzcgMy44NTA4NCA0IDMuNjY2NzUgNEMzLjQ4MjY1IDQgMy4zMzM0MSAzLjg1MDc3IDMuMzMzNDEgMy42NjY2N0MzLjMzMzQxIDMuNDgyNTggMy40ODI2NSAzLjMzMzM0IDMuNjY2NzUgMy4zMzMzNFpNMi4zMzM0MSAzLjMzMzM0QzIuNTE3NTEgMy4zMzMzNCAyLjY2Njc1IDMuNDgyNTggMi42NjY3NSAzLjY2NjY3QzIuNjY2NzUgMy44NTA3NyAyLjUxNzUxIDQgMi4zMzM0MSA0QzIuMTQ5MzIgNCAyLjAwMDA4IDMuODUwNzcgMi4wMDAwOCAzLjY2NjY3QzIuMDAwMDggMy40ODI1OCAyLjE0OTMyIDMuMzMzMzQgMi4zMzM0MSAzLjMzMzM0Wk0xLjAwMDA4IDMuMzMzMzRDMS4xODQxOCAzLjMzMzM0IDEuMzMzNDEgMy40ODI1OCAxLjMzMzQxIDMuNjY2NjdDMS4zMzM0MSAzLjg1MDc3IDEuMTg0MTggNCAxLjAwMDA4IDRDMC44MTU5ODYgNCAwLjY2Njc0OCAzLjg1MDc3IDAuNjY2NzQ4IDMuNjY2NjdDMC42NjY3NDggMy40ODI1OCAwLjgxNTk4NiAzLjMzMzM0IDEuMDAwMDggMy4zMzMzNFpNMS42NjY3NSAyLjY2NjY3QzEuODUwODQgMi42NjY2NyAyLjAwMDA4IDIuODE1OTEgMi4wMDAwOCAzQzIuMDAwMDggMy4xODQxIDEuODUwODQgMy4zMzMzNCAxLjY2Njc1IDMuMzMzMzRDMS40ODI2NSAzLjMzMzM0IDEuMzMzNDEgMy4xODQxIDEuMzMzNDEgM0MxLjMzMzQxIDIuODE1OTEgMS40ODI2NSAyLjY2NjY3IDEuNjY2NzUgMi42NjY2N1pNMy4wMDAwOCAyLjY2NjY3QzMuMTg0MTggMi42NjY2NyAzLjMzMzQxIDIuODE1OTEgMy4zMzM0MSAzQzMuMzMzNDEgMy4xODQxIDMuMTg0MTggMy4zMzMzNCAzLjAwMDA4IDMuMzMzMzRDMi44MTU5OSAzLjMzMzM0IDIuNjY2NzUgMy4xODQxIDIuNjY2NzUgM0MyLjY2Njc1IDIuODE1OTEgMi44MTU5OSAyLjY2NjY3IDMuMDAwMDggMi42NjY2N1pNNC4zMzM0MSAyLjY2NjY3QzQuNTE3NTEgMi42NjY2NyA0LjY2Njc1IDIuODE1OTEgNC42NjY3NSAzQzQuNjY2NzUgMy4xODQxIDQuNTE3NTEgMy4zMzMzNCA0LjMzMzQxIDMuMzMzMzRDNC4xNDkzMiAzLjMzMzM0IDQuMDAwMDggMy4xODQxIDQuMDAwMDggM0M0LjAwMDA4IDIuODE1OTEgNC4xNDkzMiAyLjY2NjY3IDQuMzMzNDEgMi42NjY2N1pNNS4wMDAwOCAyQzUuMTg0MTggMiA1LjMzMzQyIDIuMTQ5MjQgNS4zMzM0MiAyLjMzMzM0QzUuMzMzNDIgMi41MTc0MyA1LjE4NDE4IDIuNjY2NjcgNS4wMDAwOCAyLjY2NjY3QzQuODE1OTkgMi42NjY2NyA0LjY2Njc1IDIuNTE3NDMgNC42NjY3NSAyLjMzMzM0QzQuNjY2NzUgMi4xNDkyNCA0LjgxNTk5IDIgNS4wMDAwOCAyWk0zLjY2Njc1IDJDMy44NTA4NCAyIDQuMDAwMDggMi4xNDkyNCA0LjAwMDA4IDIuMzMzMzRDNC4wMDAwOCAyLjUxNzQzIDMuODUwODQgMi42NjY2NyAzLjY2Njc1IDIuNjY2NjdDMy40ODI2NSAyLjY2NjY3IDMuMzMzNDEgMi41MTc0MyAzLjMzMzQxIDIuMzMzMzRDMy4zMzM0MSAyLjE0OTI0IDMuNDgyNjUgMiAzLjY2Njc1IDJaTTIuMzMzNDEgMkMyLjUxNzUxIDIgMi42NjY3NSAyLjE0OTI0IDIuNjY2NzUgMi4zMzMzNEMyLjY2Njc1IDIuNTE3NDMgMi41MTc1MSAyLjY2NjY3IDIuMzMzNDEgMi42NjY2N0MyLjE0OTMyIDIuNjY2NjcgMi4wMDAwOCAyLjUxNzQzIDIuMDAwMDggMi4zMzMzNEMyLjAwMDA4IDIuMTQ5MjQgMi4xNDkzMiAyIDIuMzMzNDEgMlpNMS4wMDAwOCAyQzEuMTg0MTggMiAxLjMzMzQxIDIuMTQ5MjQgMS4zMzM0MSAyLjMzMzM0QzEuMzMzNDEgMi41MTc0MyAxLjE4NDE4IDIuNjY2NjcgMS4wMDAwOCAyLjY2NjY3QzAuODE1OTg2IDIuNjY2NjcgMC42NjY3NDggMi41MTc0MyAwLjY2Njc0OCAyLjMzMzM0QzAuNjY2NzQ4IDIuMTQ5MjQgMC44MTU5ODYgMiAxLjAwMDA4IDJaTTEuNjY2NzUgMS4zMzMzNEMxLjg1MDg0IDEuMzMzMzQgMi4wMDAwOCAxLjQ4MjU4IDIuMDAwMDggMS42NjY2N0MyLjAwMDA4IDEuODUwNzcgMS44NTA4NCAyIDEuNjY2NzUgMkMxLjQ4MjY1IDIgMS4zMzM0MSAxLjg1MDc3IDEuMzMzNDEgMS42NjY2N0MxLjMzMzQxIDEuNDgyNTggMS40ODI2NSAxLjMzMzM0IDEuNjY2NzUgMS4zMzMzNFpNMy4wMDAwOCAxLjMzMzM0QzMuMTg0MTggMS4zMzMzNCAzLjMzMzQxIDEuNDgyNTggMy4zMzM0MSAxLjY2NjY3QzMuMzMzNDEgMS44NTA3NyAzLjE4NDE4IDIgMy4wMDAwOCAyQzIuODE1OTkgMiAyLjY2Njc1IDEuODUwNzcgMi42NjY3NSAxLjY2NjY3QzIuNjY2NzUgMS40ODI1OCAyLjgxNTk5IDEuMzMzMzQgMy4wMDAwOCAxLjMzMzM0Wk00LjMzMzQxIDEuMzMzMzRDNC41MTc1MSAxLjMzMzM0IDQuNjY2NzUgMS40ODI1OCA0LjY2Njc1IDEuNjY2NjdDNC42NjY3NSAxLjg1MDc3IDQuNTE3NTEgMiA0LjMzMzQxIDJDNC4xNDkzMiAyIDQuMDAwMDggMS44NTA3NyA0LjAwMDA4IDEuNjY2NjdDNC4wMDAwOCAxLjQ4MjU4IDQuMTQ5MzIgMS4zMzMzNCA0LjMzMzQxIDEuMzMzMzRaTTEuMDAwMDggMC42NjY2NzJDMS4xODQxOCAwLjY2NjY3MiAxLjMzMzQxIDAuODE1OTEgMS4zMzM0MSAxLjAwMDAxQzEuMzMzNDEgMS4xODQxIDEuMTg0MTggMS4zMzMzNCAxLjAwMDA4IDEuMzMzMzRDMC44MTU5ODYgMS4zMzMzNCAwLjY2Njc0OCAxLjE4NDEgMC42NjY3NDggMS4wMDAwMUMwLjY2Njc0OCAwLjgxNTkxIDAuODE1OTg2IDAuNjY2NjcyIDEuMDAwMDggMC42NjY2NzJaTTIuMzMzNDEgMC42NjY2NzJDMi41MTc1MSAwLjY2NjY3MiAyLjY2Njc1IDAuODE1OTEgMi42NjY3NSAxLjAwMDAxQzIuNjY2NzUgMS4xODQxIDIuNTE3NTEgMS4zMzMzNCAyLjMzMzQxIDEuMzMzMzRDMi4xNDkzMiAxLjMzMzM0IDIuMDAwMDggMS4xODQxIDIuMDAwMDggMS4wMDAwMUMyLjAwMDA4IDAuODE1OTEgMi4xNDkzMiAwLjY2NjY3MiAyLjMzMzQxIDAuNjY2NjcyWk0zLjY2Njc1IDAuNjY2NjcyQzMuODUwODQgMC42NjY2NzIgNC4wMDAwOCAwLjgxNTkxIDQuMDAwMDggMS4wMDAwMUM0LjAwMDA4IDEuMTg0MSAzLjg1MDg0IDEuMzMzMzQgMy42NjY3NSAxLjMzMzM0QzMuNDgyNjUgMS4zMzMzNCAzLjMzMzQxIDEuMTg0MSAzLjMzMzQxIDEuMDAwMDFDMy4zMzM0MSAwLjgxNTkxIDMuNDgyNjUgMC42NjY2NzIgMy42NjY3NSAwLjY2NjY3MlpNNS4wMDAwOCAwLjY2NjY3MkM1LjE4NDE4IDAuNjY2NjcyIDUuMzMzNDIgMC44MTU5MSA1LjMzMzQyIDEuMDAwMDFDNS4zMzM0MiAxLjE4NDEgNS4xODQxOCAxLjMzMzM0IDUuMDAwMDggMS4zMzMzNEM0LjgxNTk5IDEuMzMzMzQgNC42NjY3NSAxLjE4NDEgNC42NjY3NSAxLjAwMDAxQzQuNjY2NzUgMC44MTU5MSA0LjgxNTk5IDAuNjY2NjcyIDUuMDAwMDggMC42NjY2NzJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iLTMuMzMzMjUiIHk9Ii0yLjMzMzMzIiB3aWR0aD0iMTIuNjY2NyIgaGVpZ2h0PSIxMS4zMzMzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iMSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA2IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMuMDAwMDgiIHkxPSIwLjY2NjY3MiIgeDI9IjMuMDAwMDgiIHkyPSI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0YwRjBGMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=");
			height: 10px;
			width: 14px;
			margin-right: 7px;
			border-radius: 1px;
		}
		.section.is-width-standard .product_section .shopify-product-form {
			padding: 23px 25px 18px;
		}
		.section.is-width-standard .product_section .shopify-product-form .button--add-to-cart .text {
			font-weight: 900;
			font-size: 15px;
		}
		.section.is-width-standard .product_section .product-form-container.has-padding-top {
			padding-top: 0;
		}
		.section.is-width-standard .product_section .swatch label.on-variant-label .on-save {
			display: none;
		}
		.section.is-width-standard .product_section .swatch label.on-variant-label .on-title {
			color: #1E415F;
			font-weight: 900;
			font-size: 16px;
			line-height: 19px;
			text-transform: none;
			margin: 6px 0 10px;
		}
		.section.is-width-standard .swatch .top-label{
			background: #F2B413;
			border-radius: 4px;
			color: #FFFFFF;
			text-transform: uppercase;
			font-weight: 900;
			font-size: 9px;
			line-height: 15px;
			width: 86px;
			margin: 0 auto;
			display: block;
			position: relative;
			margin: 0 auto 7px;
		}
		.section.is-width-standard .swatch .top-label:before {
			content: '';
			display: inline-block;
			background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOSA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNC41IDBMNS43NDA0MyAyLjc5MjY5TDguNzc5NzUgMy4xMDk0Mkw2LjUwNzA2IDUuMTUyMTNMNy4xNDUwMyA4LjE0MDU4TDQuNSA2LjYxMDM1TDEuODU0OTcgOC4xNDA1OEwyLjQ5Mjk0IDUuMTUyMTNMMC4yMjAyNDYgMy4xMDk0MkwzLjI1OTU3IDIuNzkyNjlMNC41IDBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");
			height: 9px;
			width: 9px;
			margin-right: 5px;
		}
		.section.is-width-standard .swatch .save-label {
			display: block;
			color: #fff;
			background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjIiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCA2MiAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjY2NTkgMC44QzkuOTU4OTcgMC4yODA3MTEgMTAuODAxMSAwIDExLjY2NjYgMEg1Ny4zMzMzQzU5LjU0MjQgMCA2MS4zMzMzIDEuNzkwODYgNjEuMzMzMyA0VjExQzYxLjMzMzMgMTMuMjA5MSA1OS41NDI0IDE1IDU3LjMzMzMgMTVIMTEuNjY2NkMxMC44MDExIDE1IDkuOTU4OTcgMTQuNzE5MyA5LjI2NjU5IDE0LjJMNC41OTk5MiAxMC43QzIuNDY2NTkgOS4xIDIuNDY2NTkgNS45IDQuNTk5OTIgNC4zTDkuMjY2NTkgMC44WiIgZmlsbD0iIzQwOTBEMSIvPgo8Y2lyY2xlIGN4PSI5LjgzMzI1IiBjeT0iNy41IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
			width: 72px;
			height: 17px;
			font-size: 10px;
			line-height: 12px;
			display: flex;
			align-items: center;
			margin: 0 auto 9px;
			background-size: cover;
			background-repeat: no-repeat;
			padding-left: 18px;
			padding-right: 7px;
		}
		.section.is-width-standard .swatch .old-price-label {
			display: block;
			line-height: 1;
			color: #757575;
			font-weight: 500;
			font-size: 10px;
			text-decoration: line-through;
			display: none;
			margin-bottom: 4px;
		}
		.section.is-width-standard .swatch .new-price-label {
			display: block;
			color: #1E4670;
			font-weight: 500;
			font-size: 14px;
			line-height: 16px;
			display: none;
		}
		.section.is-width-standard .swatch .weeks-label {
			display: block;
			color: #1E4670;
			line-height: 1;
			font-size: 12px;
			line-height: 16px;
			text-transform: none;
			display: none;
		}
		.section.is-width-standard .swatch .best-label {
			background: #F27113;
			border-radius: 4px;
			color: #FFFFFF;
			text-transform: uppercase;
			font-weight: 900;
			font-size: 9px;
			line-height: 15px;
			width: 86px;
			margin: 0 auto;
			display: block;
			position: relative;
			margin: 0 auto 7px;
		}
		.section.is-width-standard .swatch .best-label:before {
			content: '';
			display: inline-block;
			background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgNiA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNS45NjIzMyA1LjU5NjU3QzUuNzE4MzQgNi45NDI0OSA0LjU3Mjk0IDcuNzU5NjYgNC4wMzA3NCA4QzQuNTg0MjQgNi45MzU2MiA0LjQ3MTI3IDYuMDc3MjUgMy44NzI1OSA1LjQ1OTIzQzMuMzkzNjUgNC45NjQ4MSAzLjQwOTQ2IDQuMjE1NTUgMy40NzcyNCAzLjkwMjcyQzIuMjc5ODcgNC44MTgzMSAyLjE0NDMzIDUuODgyNjkgMi40NjA2MSA2Ljc5ODI4QzIuMDE3ODEgNi42NzkyNiAxLjg1NDQgNi4yNjggMS44MjgwNCA2LjA3NzI1QzEuMTcyODkgNi41NjkzOSAxLjcwMzc5IDggMS43MDM3OSA4Qy0xLjQzNjQ2IDYuMDQyOTIgMC42MTkzODUgMy4xMTMwMiAxLjE3Mjg5IDIuNDcyMUMxLjEwOTYzIDMuMjMyMDUgMS4zOTUwNCAzLjUzNjQ4IDEuNTQ1NjUgMy41OTM3MUMxLjMwODQ0IDIuMjIwMzEgMi42MDc0NiAwLjU4MzY5MSAzLjc5MzUyIDBDMy4xOTcxIDEuMzY0MjMgMy43NzA5MyAyLjMwODA2IDQuMTMyNCAyLjYwOTQ0QzQuMzM5NDkgMi44MTE2NCA0LjczNzg2IDMuNDE5NzQgNC42NzQ2IDQuMjM0NjJDNS4wMjcwMyAzLjQ4MzgzIDQuODIxNDUgMi41NDA3NyA0LjY3NDYgMi4xNjMwOUM1LjIwNTUxIDIuNzQ2NzggNi4yMDYzMiA0LjI1MDY0IDUuOTYyMzMgNS41OTY1N1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
			height: 8px;
			width: 6px;
			margin-right: 5px;
		}
		.section.is-width-standard .product_section .swatch_options .swatch {
			align-items: flex-start;
			margin-left: -7.5px;
			margin-right: -7.5px;
		}
		.section.is-width-standard .product_section .swatch .swatch-element {
			background: #FFFFFF;
			border: 1px solid #C4C4C4;
			border-radius: 10px;
			width: calc(33.33% - 16px);
			margin-right: 8px;
			margin-left: 8px;
			min-height: 132px;
			display: flex;
			align-items: center;
			padding: 1px;
		}
		.section.is-width-standard .product_section .swatch label.on-variant-label {
			padding: 9px 9px;
			width: 100%;
		}
		.section.is-width-standard .product_section .swatch_options input:checked+.swatch-element {
			background: #F1F7FC;
			border: 1px solid #4090D1;
		}
		.section.is-width-standard .product_section .swatch_options input:checked+.swatch-element label.on-variant-label {
			background: #F1F7FC;
		}
		.section.is-width-standard .product_section .swatch_options input:checked+.swatch-element .old-price-label,
		.section.is-width-standard .product_section .swatch_options input:checked+.swatch-element .new-price-label,
		.section.is-width-standard .product_section .swatch_options input:checked+.swatch-element .weeks-label {
			display: block;
		}
		.on-subscribe-wrapper {
			display: none;
		}
		.section.is-width-standard .product_section .shopify-product-form .on-route-wrapper .route-div {
			display: none !important;
		}
		.section.is-width-standard .product_section .shopify-product-form .on-pack-wrapper {
			margin-bottom: 15px;
		}
		@media only screen and (max-width: 1244px){
			.section.is-width-standard .product_section .swatch label.on-variant-label .on-title {
				font-size: 14px;
			}
			.section.is-width-standard .product_section .swatch .swatch-element {
				width: calc(33.33% - 10px);
				margin-right: 5px;
				margin-left: 5px;
			}
			.section.is-width-standard .product_section .swatch_options .swatch {
				margin-left: -5px;
				margin-right: -5px;
			}
		}
		@media only screen and (max-width: 1050px){
			.section.is-width-standard .product_section .swatch .swatch-element {
				min-height: 50px;
				width: 100%;
				margin-bottom: 10px;
			}
		}
	`;
	styles    += "</style>";
	$('body').append(styles);
	});
}