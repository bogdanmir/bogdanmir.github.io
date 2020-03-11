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
	$('.section.is-width-standard .swatch .3-pack-swatch label.on-variant-label .on-title').text('12-week pack');
	$('.section.is-width-standard .swatch .3-pack-swatch label.on-variant-label').append('<span class="save-label">Save 7%</span>');
	$('.section.is-width-standard .swatch .3-pack-swatch label.on-variant-label').append('<span class="old-price-label">$59.91</span>');
	$('.section.is-width-standard .swatch .3-pack-swatch label.on-variant-label').append('<span class="new-price-label">$55.97</span>');
	$('.section.is-width-standard .swatch .3-pack-swatch label.on-variant-label').append('<span class="weeks-label">per 12 weeks</span>');

	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label').prepend('<span class="best-label">best deal</span>');
	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label .on-title').text('Subscribe');
	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label').append('<span class="save-label">Save 17%</span>');
	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label').append('<span class="old-price-label">$59.91</span>');
	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label').append('<span class="new-price-label">$49.97</span>');
	$('.section.is-width-standard .swatch .3-pack-auto-ship-swatch label.on-variant-label').append('<span class="weeks-label">every 12 week</span>');

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
			width: 76px;
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
			margin-right: 7px;
		}
		.section.is-width-standard .swatch .save-label {
			display: block;
			color: #fff;
			background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCA1OSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMjY2NjcgMC44QzYuOTU5MDUgMC4yODA3MTEgNy44MDExOSAwIDguNjY2NjcgMEg1NC4zMzMzQzU2LjU0MjUgMCA1OC4zMzMzIDEuNzkwODYgNTguMzMzMyA0VjExQzU4LjMzMzMgMTMuMjA5MSA1Ni41NDI1IDE1IDU0LjMzMzMgMTVIOC42NjY2N0M3LjgwMTE5IDE1IDYuOTU5MDUgMTQuNzE5MyA2LjI2NjY3IDE0LjJMMS42IDEwLjdDLTAuNTMzMzMzIDkuMSAtMC41MzMzMzMgNS45IDEuNiA0LjNMNi4yNjY2NyAwLjhaIiBmaWxsPSIjNDA5MEQxIi8+Cjwvc3ZnPgo=");
			width: 58px;
			height: 15px;
			font-size: 10px;
			line-height: 12px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 auto 9px;
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
			width: 76px;
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
			margin-right: 7px;
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
			width: calc(33.33% - 15px);
			margin-right: 7.5px;
			margin-left: 7.5px;
			min-height: 132px;
			display: flex;
			align-items: center;
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
	`;
	styles    += "</style>";
	$('body').append(styles);
	});
}