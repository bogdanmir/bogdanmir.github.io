function abjql(e){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,e())}:o.onload=function(){e()},o.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(o)}function abjqlr(e){function o(e){var o=localStorage.getItem("expdps")||"[]";o=JSON.parse(o),o.includes(e)||o.push(e);var t=JSON.stringify(o);localStorage.setItem("expdps",t)}function t(e){if(null==e)return!1;var o=localStorage.getItem("expdps")||"[]";return o=JSON.parse(o),o.includes(e)}function i(){if(e(".cart-popup .cart-popup__list .cart-popup__item").length>0&&(window.slide_items=new Array,e(".cart-popup .cart-popup__list .cart-popup__item").each(function(){var o=e(this).find(".cart-popup__item-image").html(),t=e(this).find(".cart-popup__item-info .cart-popup__item-title").text(),i=e(this).find(".cart-popup__item-info .cart-popup__item-size.cart-popup__item-size--mobile").text(),p=e(this).find(".cart-popup__item-info .cart-popup__item-price").text(),a={img:o,title:t,size:i,price:p};window.slide_items.push(a)})),e(".order-summary__section--product-list").length>0&&(window.slide_items=new Array,e(".order-summary__section--product-list .product").each(function(){var o=e(this).find(".product-thumbnail__wrapper").html(),t=e(this).find(".product__description__name.order-summary__emphasis:eq(0)").text(),i=e(this).find(".product__price .order-summary__emphasis").text(),p={img:o,title:t,size:null,price:i};window.slide_items.push(p)})),console.log("slide items"),console.log(window.slide_items),e("body").find(".exit_popup_container").remove(),e("body").find(".exit_popup_overlay").remove(),$exit_popup='<div class="exit_popup_container">',$exit_popup+='<div class="exit_popup modal_dialog">',$exit_popup+='<div class="modal_header"><i class="modal_close"></i></div>',$exit_popup+='<div class="modal__body">',$exit_popup+='<h3 class="modal_title">It’s almost yours!</h3>',$exit_popup+='<p class="modal_subtitle">Only one step left:</p>',$exit_popup+='<div class="modal_slider_wrap">',$exit_popup+='<div class="modal_slider">',$exit_popup+='<div class="slider_tooltip_box">This is a popular choice, we may run out of stock soon</div>',$exit_popup+='<div class="modal-item-wrap">',e.each(window.slide_items,function(e,o){$exit_popup+='<div class="modal-item"><div class="item-info-wrap">'+o.img+'<div class="slide_title_wrap"><p class="slide_title">'+o.title+'</p> <p class="slide_size">'+(null!=o.size?o.size:"")+'</p></div></div><p class="slide_price">'+o.price+"</p></div>"}),$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+='<div class="modal_content">',window.slide_items.length>1)var o="We can’t guarantee the availability of all products in your cart<br> if you don’t complete the purchase now";else{var o="We can’t guarantee its availability<br> if you don't complete the purchase now";console.log("one item in card")}$exit_popup+="<p>"+o+"</p>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+='<a href="/checkout" class="modal_btn">complete my order now</a>',$exit_popup+="</div>",$exit_popup+="</div>",window.slide_items.length>0&&(e("body").append($exit_popup),e("body").append('<div class="exit_popup_overlay"></div>'))}e("body").append('<style>.exit_popup_container{position:fixed;background:#fff;z-index:99999;top:calc(50% - 260px);left:0;right:0;max-width:561px;border-radius:16px;overflow:hidden;margin:auto}.exit_popup_container.few_items .modal-item-wrap{padding:0 25px;margin:25px auto 28px;border-bottom:1px solid rgba(92,92,92,.2)}.exit_popup_container.few_items .modal-item{height:90px;overflow:hidden}.exit_popup_container.few_items .modal-item:first-child{margin:-9px 0 0}.exit_popup_container,.exit_popup_overlay{display:none}.exit_popup_container.active,.exit_popup_overlay.active{display:block}.exit_popup_overlay{position:fixed;z-index:99998;width:100%;height:100%;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.65);transition:all .4s ease}.exit_popup{text-align:center}.exit_popup .modal__body{padding:38px 0 15px}.exit_popup .modal_title{font-size:22px;font-family:inherit;padding:0 18px 8px;letter-spacing:.7px;line-height:1}.exit_popup .modal_subtitle,.exit_popup .modal_title{font-weight:700;text-transform:uppercase;color:#2f2f2f;font-family:Montserrat,sans-serif}.exit_popup .modal_subtitle{font-size:17px;padding:0 18px;letter-spacing:0;line-height:1.15}.exit_popup .modal_slider_wrap{margin:22px 0 0}@media (max-width:340px){.exit_popup .modal_slider_wrap{margin:15px 0}}.exit_popup .modal_slider .swiper-pagination-bullet{height:5px;width:5px;margin:0 5px}.exit_popup .modal_slider .swiper-pagination-bullet-active{background:#5c5c5c}.exit_popup .modal_slider .swiper-slide{padding-top:10px}.exit_popup .modal_slider .swiper-slide>a{display:block;max-width:100px;margin:0 auto;pointer-events:none}.exit_popup .modal_slider .swiper-slide>.product-thumbnail__image{position:relative;display:block;max-width:100px;margin:0 auto}.exit_popup .modal_slider .slide_title{color:#2f2f2f;font-size:12px;letter-spacing:.055em;text-transform:uppercase;font-weight:700;margin-bottom:10px;font-family:Playfair Display,serif;line-height:1.15}.exit_popup .modal_slider .slide_size{color:#5c5c5c;font-size:12px;margin-bottom:5px;letter-spacing:0}.exit_popup .modal_slider .slide_price{letter-spacing:0;font-weight:400;padding:18px 11px 0 0}.exit_popup .modal_slider .slide_price,.exit_popup .slider_tooltip_box{color:#2f2f2f;font-size:14px;font-family:Montserrat,sans-serif;line-height:1.15}.exit_popup .slider_tooltip_box{margin:0 0 15px;padding:14px 10px 13px;background-color:#f8f8f8;text-align:center;border:1px solid #000;font-weight:700;transition:opacity .25s;margin:0 auto;max-width:470px;letter-spacing:.6px;box-sizing:border-box;position:relative}.exit_popup .slider_tooltip_box:after,.exit_popup .slider_tooltip_box:before{content:"";margin-left:-13px;position:absolute;left:50%;width:0;height:0;border-style:solid;border-width:0 10px 10px;transform:rotate(180deg)}.exit_popup .slider_tooltip_box:before{bottom:-10px;border-color:transparent transparent #000}.exit_popup .slider_tooltip_box:after{bottom:-9px;border-color:transparent transparent #f8f8f8}.exit_popup .modal_content{border:2px solid #fcbec0;position:relative;margin:0 auto;max-width:470px}.exit_popup .modal_content:after{content:"";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgB7VTRcYJAEN2DFGAJZwNACbGC0IF2oKkg2gFUEFNBkgpMOjg6oIPQAJC3ujh4g3CiM/74Zm64XfbeW3aXI3rg3lA0ElEU6bqu37F9xsqVUq/GmC87zqPxiIWcsReD6MQOeiIH8MFWtoR9gmw3QRBoZL6UsElZliy6vVigqqoERHFjY78GufI8bw2xOZOz3/f93D7rVCIQzrt8+IoCWyP2B+yfUQJnUAhxijUD+aIryEkAZUhtH2csTd0LdTXYWUBqnQpZM5IJerOEfyfrLwxDniR9kgiNhPUftJFnWTZtDOcxxSNGxpoOX8SNNSCa4d0CQm+wtYTr9lk1RMxlQElWJKNoYYt3G95wmRpyCB95e3uAQ58882fIGZz9Dv3I8fztChhqsqZh9MZc8x844WYCaPwK5ZzyavudpsgFcm0Utr9XgK8BNO9lIOabHrgG/9ETkAckdD4VAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-color:#fff;position:absolute;top:-14px;left:0;right:0;margin:0 auto;height:28px;width:30px}.exit_popup .modal_content p{font-weight:700;font-size:13px;line-height:1.4;letter-spacing:0;color:#2f2f2f;padding:13px 0;font-family:Montserrat,sans-serif}@media (max-width:340px){.exit_popup .modal_content p{font-size:12px}}.exit_popup .modal_btn{background:#fcbec0;text-transform:uppercase;color:#2f2f2f;font-weight:700;font-size:14px;padding:25px 0;display:block;width:100%;letter-spacing:0;margin:0 auto 44px;max-width:470px}.modal_close{cursor:pointer;position:absolute;width:50px;height:50px;right:1px;top:3px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.modal_close:after,.modal_close:before{position:absolute;left:0;right:0;margin:auto;content:"";background-color:#b3b3b3;transition:all .25s ease;height:20px;width:1px}.modal_close:before{transform:rotate(45deg)}.modal_close:after{transform:rotate(-45deg)}.modal_close:hover:after,.modal_close:hover:before{background-color:#000}.stop_scroll{overflow:hidden!important}@media screen and (max-height:510px) and (orientation:landscape){.exit_popup_container{top:0;height:100%}.exit_popup{overflow:scroll;height:100%}.exit_popup .modal_content p{font-size:12px;line-height:1.2}}@media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:0.001dpcm) and (max-height:510px) and (orientation:landscape){.exit_popup{height:100%}.exit_popup .modal_content p{font-size:12px;line-height:1.2}}.modal-item-wrap{max-height:230px;overflow-y:auto;max-width:470px;padding:5px 25px 0;margin:0 auto}.modal-item{-ms-flex-pack:justify;justify-content:space-between;padding:0}.modal-item,.modal-item .item-info-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-item a[rv-href]{display:inline-block;width:110px}.modal-item .slide_title_wrap{padding:0 0 0 20px;text-align:left}</style>'),e(document).ready(function(){try{hj("trigger","popup_unpaid_products"),console.log("hotjar trigger run")}catch(e){}console.log("hotjar trigger run2")}),e(document).on("click","[data-add-to-cart]",function(t){if(e("body").find("[data-product-json]").length>0){var i=e("body").find("[data-product-json]").html();i=JSON.parse(i),o(i.id)}});var p=null;e(function(){if(e("body").find("[data-product-json]").length>0){var o=e("body").find("[data-product-json]").html();o=JSON.parse(o),p=o.id,console.log("product_id",p)}}),window.slide_items=new Array,e("body").on("click",".modal_close, .exit_popup_overlay",function(){e("body").find(".exit_popup_container").remove(),e("body").find(".exit_popup_overlay").remove(),e("body").removeClass("stop_scroll")}),window.already_display_popup=Number(localStorage.getItem("pod")||0),window.dont_triger_popup=0,window.is_change_status=window.dont_triger_popup,setInterval(function(){1==e(".cart-popup").hasClass("cart-popup--active")?window.dont_triger_popup=1:window.dont_triger_popup=0,window.is_change_status!=window.dont_triger_popup&&(window.is_change_status=window.dont_triger_popup,console.log("is_change_status "+window.is_change_status))},0),window.show_popup=function(){0==window.already_display_popup&&i(),console.log(0==window.already_display_popup,"already_display_popup"),console.log(0==window.dont_triger_popup,"dont_triger_popup"),console.log(p,"product_id"),console.log(!t(p)),0==window.already_display_popup&&0==window.dont_triger_popup&&!t(p)&&window.slide_items.length>0&&(console.log("show popup"),e(".exit_popup_container").addClass("active"),e(".exit_popup_overlay").addClass("active"),e("body").addClass("stop_scroll"),window.slide_items.length>1?e("body").find(".exit_popup_container").addClass("few_items"):(e("body").find(".exit_popup_container").removeClass("few_items"),console.log("one item in card")),window.already_display_popup=1,localStorage.setItem("pod",1))},window.location.href.indexOf("checkouts")>-1&&(console.log("checkout page"),e("head").append('<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&display=swap" rel="stylesheet">'),e("body").on("click",".exit_popup .modal_btn",function(o){o.preventDefault(),e("body").find(".exit_popup_container").remove(),e("body").find(".exit_popup_overlay").remove(),e("body").removeClass("stop_scroll")})),document.addEventListener("mouseleave",function(e){e.target==document&&(void 0===window.show_popup||t(p)||(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - Exit intent popup for unpaid products",eventAction:"popup loaded"}),console.log("popup loaded"),window.show_popup()))}),e("body").on("click",".exit_popup .modal_btn",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - Exit intent popup for unpaid products",eventAction:"Click on Complete your order"}),console.log("Click on Complete your order")}),e("body").on("click",".modal_close",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - Exit intent popup for unpaid products",eventAction:"Click on X to close popup"}),console.log("Click on X to close popup")}),e("body").on("click",".exit_popup_overlay",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - Exit intent popup for unpaid products",eventAction:"Click on the background to close popup"})})}console.log("%cTest come out","background:blue;color: #ffffff"),window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});