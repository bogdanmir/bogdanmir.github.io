jQuery(function($) {
sop=false;if($('body.404').length==0){sop=true;}if($('html.page--thank-you').length==0){sop=true;}
if(window.location.href.indexOf("/checkout/thank_you") <0){sop=true;}
if(sop == true){
	if (localStorage.getItem('itemincartadd')) {
		localStorage.setItem('dontshow', null);
	}
	sessionStorage.setItem('user', 'firstView')
	var lastScrollTop = $(window).height() * 2;
	$(window).scroll(function() {
		var st = $('.mm-fixed-top').offset().top;
		if (this.oldScroll > this.scrollY) {
			// console.log("true");
			// if (st > lastScrollTop && sessionStorage.getItem('user') == 'firstView') {
				if (st > lastScrollTop){
				// console.log("true2");
				if (localStorage.getItem('dontshow')) {
					if (localStorage.getItem('dontshow') == 'yes') {} else {
						if (localStorage.getItem('itemincartadd')) {
							if (localStorage.getItem('itemincartadd') == 'yes') {
								show_ms();
							}
						}
					}
				} else {
					if (localStorage.getItem('itemincartadd')) {
						if (localStorage.getItem('itemincartadd') == 'yes') {
							show_ms();
						}
					}
				}
				if (localStorage.getItem('itemincartadd')) {
					localStorage.setItem('dontshow', null);
				}
				sessionStorage.setItem('user', 'notFirstView')
			}
		}
		this.oldScroll = this.scrollY;
	})
	window.onbeforeunload = function() {
		if (localStorage.getItem('dontshow')) {
			if (localStorage.getItem('dontshow') != 'yes') {
				localStorage.setItem('itemincartadd', null);
			}
		}
	}
	$("body").on("click", "a", function() {
		localStorage.setItem('dontshow', 'yes');
		//location.href = $(this).attr('href')+'?test=true';
		//return false;
	});
	$("body").on("click", ".leave_cart .modal-title .icon-close", function() {
		localStorage.setItem('dontshow', null);
		localStorage.setItem('itemincartadd', null);
		//location.href = $(this).attr('href')+'?test=true';
		//return false;
	});
	$("body").on("click", "button", function() {
		localStorage.setItem('dontshow', 'yes');
	});

	$("body").on("submit", "form", function() {
		localStorage.setItem('dontshow', 'yes');
		//location.href = $(this).attr('action')+'?test=true';
	});

	$("body").on("click", ".action_button.add_to_cart", function() {
		localStorage.setItem('itemincartadd', 'yes');
		//return false;
      	$("<style type='text/css'>.s.u.m.o.me.listbuilder-popup{display:none!important;}</style>").appendTo('head');
	});
  
  $("<style type='text/css'>@media only screen and (max-width: 435px){html{overflow-x: hidden;}body.product{overflow-x: hidden;}}</style>").appendTo('head');
  
	function show_ms() {
		if ($('body').find(".leave_cart").length < 1) {
			$("body").append('<div class="cart-overlay"></div>');
			$("#cart").addClass('leave_cart');
			$(".leave_cart .blue-box").remove();
			$(".leave_cart .mm-panels>.mm-panel").prepend('<div class="blue-box">This is a popular choice, limited stock remaining</div>');
			$(".leave_cart .modal-title").remove();
			var html_close = $("body .leave_cart .continue.ss-icon").html();
			$(".leave_cart .mm-panels>.mm-panel").prepend('<h3 class="modal-title">it’s almost yours! Only one step left!<a href="#cart" class="continue ss-icon" data-activator="#cart" >'+html_close+'</a></h3>');
			$(".leave_cart .mm-panels>.mm-panel").append('<div class="yellow-box"><span class="p-ico"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="20" viewBox="0 0 33 20"><defs><path id="pyi3a" d="M459.55 593.24c0-1.5 1.25-2.7 2.77-2.7h.52c1.52 0 2.77 1.2 2.77 2.7v2.3c0 .45-.18.85-.48 1.16v1.64c.61.31 1.96 1.05 3.22 2.05.42.33.65.82.65 1.34v1.58c0 .34-.28.61-.63.61h-5.01a.62.62 0 0 1-.63-.6c0-.34.28-.61.63-.61h4.39v-.98a.5.5 0 0 0-.2-.4 18.38 18.38 0 0 0-3.26-2.04.72.72 0 0 1-.42-.64v-2.23c0-.2.1-.4.28-.5.13-.08.2-.22.2-.36v-2.32a1.5 1.5 0 0 0-1.51-1.48h-.52a1.5 1.5 0 0 0-1.51 1.48v2.32c0 .14.07.28.2.36.17.1.28.3.28.5v1.07c0 .34-.28.61-.63.61a.62.62 0 0 1-.63-.6v-.8c-.3-.3-.48-.7-.48-1.14zm-20.92 10.68a.62.62 0 0 1-.63-.6v-1.59c0-.52.24-1 .65-1.34 1.26-1 2.6-1.73 3.22-2.04v-1.65c-.3-.3-.48-.7-.48-1.14v-2.32c0-1.48 1.24-2.7 2.77-2.7h.52c1.52 0 2.77 1.2 2.77 2.7v2.32c0 .43-.18.84-.48 1.14v.84c0 .34-.28.61-.63.61a.62.62 0 0 1-.63-.6v-1.13c0-.2.1-.4.28-.5.13-.08.2-.22.2-.36v-2.32a1.5 1.5 0 0 0-1.51-1.48h-.52a1.5 1.5 0 0 0-1.52 1.48v2.32c0 .14.08.28.2.36.18.1.29.3.29.5v2.23a.7.7 0 0 1-.42.64c-.3.14-1.84.9-3.27 2.04a.52.52 0 0 0-.19.4v.98h4.47c.35 0 .63.27.63.6 0 .34-.28.61-.63.61z"/><path id="pyi3b" d="M457.27 594.32c0 .54-.23 1.05-.62 1.42v2.3c.73.38 2.54 1.34 4.23 2.7.49.39.77.97.77 1.6v2.05c0 .34-.28.61-.63.61h-14.96a.62.62 0 0 1-.63-.61v-2.06c0-.62.28-1.2.77-1.6a24.85 24.85 0 0 1 4.23-2.68v-2.31c-.39-.37-.62-.88-.62-1.42v-3a3.36 3.36 0 0 1 3.4-3.32h.66c1.88 0 3.4 1.49 3.4 3.32zm2.82 7.36a24.42 24.42 0 0 0-4.25-2.67.74.74 0 0 1-.43-.67v-2.9c0-.2.1-.39.28-.5a.73.73 0 0 0 .34-.62v-3c0-1.15-.96-2.1-2.15-2.1h-.66c-1.18 0-2.15.94-2.15 2.1v3c0 .25.13.48.34.62.17.11.28.3.28.5v2.9c0 .28-.17.55-.43.67-.38.18-2.4 1.18-4.25 2.67-.2.16-.32.4-.32.65v1.45h13.71v-1.45c0-.25-.11-.5-.31-.65z"/></defs><g><g transform="translate(-437 -586)"><use fill="#303030" xlink:href="#pyi3a"/><use fill="#1eb53a" xlink:href="#pyi3a"/></g><g transform="translate(-437 -586)"><use fill="#008dca" xlink:href="#pyi3b"/><use fill="#1eb53a" xlink:href="#pyi3b"/></g></g></svg></span> <span class="yellow-text">One person just purchased an item from your cart: <span class="red">Just now!</span></span></div>');
			$(".leave_cart input.action_button").val("Complete my order");
			$(".leave_cart input.action_button").detach().appendTo('.leave_cart .mm-panels>.mm-panel');
			$(".leave_cart .cart_item .currency").remove();
			$(".leave_cart .cart_item .price").append('<span class="currency">USD</span>');
			$(".leave_cart .cart_item").append('<a href="#" class="remove-item"></a>');
			$('body').on('click',".leave_cart .cart_item .remove-item", function(event) {
				$(this).parent().find('.quantity').val('0');
				$(this).parent().find('.icon-minus.minus').click();
			});
			$(document).ajaxComplete(function( event, xhr, settings ) {
				if(settings.url == "/cart.js"){
					$(".leave_cart .cart_item").append('<a href="#" class="remove-item"></a>');
					$(".leave_cart .cart_item .price").append('<span>USD</span>');
				}
			});
		}
		$("body").on("click", ".leave_cart .icon-close", function() {
			if($('.leave_cart').length>0){
				$(".cart-overlay").remove();
				$(".leave_cart .modal-title").remove();
				$(".leave_cart .blue-box").remove();
				$('.leave_cart .yellow-box').remove();
				$(".leave_cart input.action_button").remove();
				$("#cart").removeClass('leave_cart');
				$("html").removeClass('mm-opening');
				$("html").removeClass('mm-opened');
				$('.mm-subtitle.clearfix').prepend('<input type="submit" class="action_button right" value="Checkout">');
			}
			return false;
		});
	}
  }
});