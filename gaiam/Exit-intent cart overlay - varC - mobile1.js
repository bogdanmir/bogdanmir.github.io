jQuery(function($) {
sop=false;if($('body.404').length==0){sop=true;}if($('html.page--thank-you').length==0){sop=true;}
if(window.location.href.indexOf("/checkout/thank_you") <0){sop=true;}
if(sop == true){
  console.log('Download Mobile Variant B')
	if (localStorage.getItem('itemincartadd')) {
		localStorage.setItem('dontshow', null);
	}
	sessionStorage.setItem('user', 'firstView')
	var lastScrollTop = $(window).height() * 2;
	$(window).scroll(function() {
		var st = $('.mm-fixed-top').offset().top;
		if (this.oldScroll > this.scrollY) {
				if (st > lastScrollTop){
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
	});
	$("body").on("click", ".leave_cart .continue.ss-icon .icon-close", function() {
		localStorage.setItem('dontshow', null);
		localStorage.setItem('itemincartadd', null);
	});
	$("body").on("click", "button", function() {
		localStorage.setItem('dontshow', 'yes');
	});
	$("body").on("submit", "form", function() {
		localStorage.setItem('dontshow', 'yes');
	});
	$("body").on("click", ".action_button.add_to_cart", function() {
		localStorage.setItem('itemincartadd', 'yes');
		//return false;
        $("<style type='text/css'>.s.u.m.o.me.listbuilder-popup{display:none!important;}</style>").appendTo('head');
	});

  $("<style type='text/css'>@media only screen and (max-width: 435px){html{overflow-x: hidden;}body.product{overflow-x: hidden;}}</style>").appendTo('head');
	
	function show_ms() {
		if ($('body').find('.cart-overlay').length < 1) {
			$("body").append('<div class="cart-overlay"></div>');
			$("#cart").addClass('leave_cart');
			$(".leave_cart .mm-subtitle .modal-title").remove();
			var html_close = $("body .leave_cart .continue.ss-icon").html();
			$(".leave_cart .mm-subtitle:first-child").prepend('<h3 class="modal-title"><span class="red">Wait!</span> You forgot your items in cart:<a href="#cart" class="continue ss-icon" data-activator="#cart" >'+html_close+'</a></h3>');
			$(".leave_cart .action_button").val("Proceed to checkout  >>");
			$(document).ajaxComplete(function(event, xhr, settings) {
				if (settings.url == "/cart.js") {
					$(".leave_cart .action_button").val("Proceed to checkout  >>");
				}
				if($('.leave_cart .mm-listview .cart_item').length>2){
					$(".leave_cart .mm-subtitle:first-child .action_button").remove();
					$(".leave_cart .mm-subtitle:first-child").append('<input type="submit" class="action_button right" value="Proceed to checkout  >>">');
					$("#cart.leave_cart").addClass('right_form');
				}else{
					$(".leave_cart .mm-subtitle:first-child .action_button").remove();
					$("#cart.leave_cart").removeClass('right_form');
				}
			});
			$("body").on("click", ".leave_cart .mm-listview .cart_item>a", function() {
				return false;
			});
			$("body").on("click", ".leave_cart .mm-listview .mm-label>a", function() {
				return false;
			});

			if($('.leave_cart .mm-listview .cart_item').length>2){
				$(".leave_cart .mm-subtitle:first-child .action_button").remove();
				$(".leave_cart .mm-subtitle:first-child").append('<input type="submit" class="action_button right" value="Proceed to checkout  >>">');
				$("#cart.leave_cart").addClass('right_form');
			}else{
				$(".leave_cart .mm-subtitle:first-child .action_button").remove();
				$("#cart.leave_cart").removeClass('right_form');
			}
		}
		$("body").on("click", ".leave_cart .icon-close", function() {
			if($('.leave_cart').length>0){
				$(".cart-overlay").remove();
				$(".mm-listview .modal-title").remove();
				$("#cart").removeClass('leave_cart');
				$("html").removeClass('mm-opening');
				$("html").removeClass('mm-opened');
				$(".mm-listview .action_button").val("checkout");
				$("#cart .mm-subtitle:first-child .action_button").remove();
				$("#cart").removeClass('right_form');
				// return false;
			}
			return false;
		});
		$("<style type='text/css'>.leave_cart .continue.ss-icon{display:none;}.leave_cart .modal-title .continue.ss-icon{display:block;}.cart-overlay{z-index: 999;position: fixed;left: 0;right: 0;top: 0;bottom: 0;margin: auto;height: 100%;width: 100%;background-color: rgba(0, 0, 0, 0.4);}#cart.leave_cart{position: fixed;overflow-y: auto;left: 0;right: 0;top: 0;bottom: 0;margin: auto;max-height: 490px;min-width: 475px;display: block;transform: translate3d(0, 0, 0);z-index: 9999;background: transparent;border: 0 !important;}.leave_cart .mm-panels{position: relative;background: #fff;border-radius: 6px;}.leave_cart .mm-panels>.mm-panel{padding: 0 20px 15px 20px;position:relative;}.leave_cart .icon-close{display: block;position:absolute;top: 10px;right: 15px;height: 19px;width: 19px;font-size: 0;cursor:pointer;}.leave_cart .icon-close:before{content:'';position: absolute;top: 0;right: 0;width: 4px;height: 19px;background-color: #e8e8e8;transform: rotate(45deg);}.leave_cart .icon-close:after{content:'';position: absolute;top: 0;right: 0;width: 4px;height: 19px;background-color: #e8e8e8;transform: rotate(-45deg);}.leave_cart .modal-title{color: #010101;font-size: 18px;font-weight: 700;line-height: 20px;text-transform: uppercase;text-align: center;margin: 0;padding-top: 40px;padding-bottom: 7px;font-family: 'proxima_nova_rgbold' !important;max-width: 250px;margin: auto;}.leave_cart .modal-title .red{color: #b80816;}.leave_cart .mm-listview>.cart_item >a {padding: 12px 10px 12px 49px;}.leave_cart .mm-counter{right: 48px;}#cart.leave_cart a.action_button.edit_cart{display:none;}.leave_cart .mm-subtitle:last-child{text-align: center;}#cart.leave_cart .action_button{margin: 15px auto 1em;float: none;width: 80%;padding: 16px 0 16px 0;letter-spacing: -0.5px;}.leave_cart .mm-listview{margin-bottom: -25px !important;}.leave_cart .mm-listview>li.mm-label>a{padding: 12px 10px 12px 47px;}#cart.leave_cart .item_title{font-size: 16px;}#cart.leave_cart .price{font-size: 16px;font-weight: 600;}.leave_cart .mm-listview>li.mm-label>a{font-size: 16px;font-weight: 600;}.leave_cart .mm-subtitle:first-child {text-align: center;}                    @media(max-width: 600px){.leave_cart .modal-title{padding-top: 25px;}.leave_cart .mm-counter{right: 30px;}}@media(max-width: 500px){.right_form{right: -17px !important;}#cart.leave_cart{max-height: 390px;min-width: 300px;width: 90%;max-width: 90%;}.leave_cart .mm-panels>.mm-panel{padding: 0 20px 10px 20px;}.leave_cart .mm-listview>.cart_item >a {padding: 12px 10px 12px 12px;}.leave_cart .cart_item .mm-counter {right: 12px;margin: 0;}.leave_cart .mm-listview>li.mm-label>a {padding: 12px 10px 0 27px;}}@media only screen and (max-width: 479px){.item_title {max-width: 245px;}}@media(max-width: 340px){#cart.leave_cart .action_button{width: 90%;}.leave_cart .cart_item .mm-counter{top: 58px;}}</style>").appendTo('head');
	}
  }
});