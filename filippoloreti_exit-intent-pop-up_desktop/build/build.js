function abjql(e){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,e())}:o.onload=function(){e()},o.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(o)}function abjqlr(t){window.language_abtest;console.log("%cTest come","background:red;color:wite;");var e,o,i,p;function a(e){var o=localStorage.getItem("expdps")||"[]";(o=JSON.parse(o)).includes(e)||o.push(e);var t=JSON.stringify(o);localStorage.setItem("expdps",t)}function n(e){if(null!=e){var o=localStorage.getItem("expdps")||"[]";return(o=JSON.parse(o)).includes(e)}}e=window,o=document,e.hj=e.hj||function(){(e.hj.q=e.hj.q||[]).push(arguments)},e._hjSettings={hjid:1885763,hjsv:6},i=o.getElementsByTagName("head")[0],(p=o.createElement("script")).async=1,p.src="https://static.hotjar.com/c/hotjar-"+e._hjSettings.hjid+".js?sv="+e._hjSettings.hjsv,i.appendChild(p),window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)},hj("trigger","exit_intent_popup"),t(document).on("click",".add-to-cart",function(e){void 0!==window.meta.product&&a(window.meta.product.id)}),t(".add-to-cart-related[data-id]").each(function(e){t(this).on("click",function(e){var o=t(this).closest(".grid__item.grid-product").attr("data-id");a(Number(o)),console.log(o)("Test come"+o,"background:green;color:wite;")})});var d=null;try{void 0!==window.meta.product&&(d=window.meta.product.id,console.log("product_id",d))}catch(e){}window.slide_items=new Array,t("body").on("click",".modal_close, .exit_popup_overlay",function(){t("body").find(".exit_popup_container").remove(),t("body").find(".exit_popup_overlay").remove(),t("body").removeClass("stop_scroll")}),window.already_display_popup=Number(localStorage.getItem("pod")||0),window.dont_triger_popup=0,window.is_change_status=window.dont_triger_popup,setInterval(function(){1==t(".drawer").hasClass("drawer--is-open")?window.dont_triger_popup=1:window.dont_triger_popup=0,window.is_change_status!=window.dont_triger_popup&&(window.is_change_status=window.dont_triger_popup,console.log("is_change_status "+window.is_change_status))},0),window.show_popup=function(){var e;0==window.already_display_popup&&(0<t(".drawer .ajaxcart__product").length&&(window.slide_items=new Array,t(".drawer .ajaxcart__product").each(function(){var e={img:t(this).find(".ajaxcart__product-image").html(),title:t(this).find(".ajaxcart__product-name").text(),price:t(this).find(".ajaxcart__price").text()};window.slide_items.push(e)})),0<t(".order-summary__section--product-list").length&&(window.slide_items=new Array,t(".order-summary__section--product-list .product").each(function(){var e={img:t(this).find(".product-thumbnail__wrapper").html(),title:t(this).find(".product__description__name.order-summary__emphasis:eq(0)").text(),price:t(this).find(".product__price .order-summary__emphasis").text()};window.slide_items.push(e)})),console.log("slide_items = "+window.slide_items),t("body").find(".exit_popup_container").remove(),t("body").find(".exit_popup_overlay").remove(),$exit_popup='<div class="exit_popup_container">',$exit_popup+='<div class="exit_popup modal_dialog">',$exit_popup+='<div class="modal_header"><i class="modal_close"></i></div>',$exit_popup+='<div class="modal__body">',$exit_popup+='<h3 class="modal_title">It’s almost yours!</h3>',$exit_popup+='<p class="modal_subtitle">Only one step left:</p>',$exit_popup+='<div class="modal_slider_wrap">',$exit_popup+='<div class="modal_slider">',$exit_popup+='<div class="slider_tooltip_box">This is a popular choice, we may run out of stock soon</div>',$exit_popup+='<div class="modal-item-wrap">',t.each(window.slide_items,function(e,o){$exit_popup+='<div class="modal-item"><div class="item-info-wrap">'+o.img+'<div class="slide_text_holder"><div class="slide_title_wrap"><p class="slide_title">'+o.title+'</p> </div><p class="slide_price">'+o.price+"</p></div></div></div>"}),$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+='<div class="modal_content">',1<window.slide_items.length?e="We can’t guarantee the availability of all products in your cart<br> if you don’t complete the purchase now":(e="We can’t guarantee its availability<br> if you don't complete the purchase now",console.log("one item in card")),$exit_popup+="<p>"+e+"</p>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+='<a href="/checkout" class="modal_btn">complete my order now</a>',$exit_popup+="</div>",$exit_popup+="</div>",0<window.slide_items.length&&(t("body").append($exit_popup),t("body").append('<div class="exit_popup_overlay"></div>'))),console.log(0==window.already_display_popup,"already_display_popup"),console.log(0==window.dont_triger_popup,"dont_triger_popup"),console.log(d,"product_id"),console.log(!n(d)),0==window.already_display_popup&&0==window.dont_triger_popup&&!n(d)&&0<window.slide_items.length&&(console.log("show popup"),t(".exit_popup_container").addClass("active"),t(".exit_popup_overlay").addClass("active"),t("body").addClass("stop_scroll"),1<window.slide_items.length?t("body").find(".exit_popup_container").addClass("few_items"):(t("body").find(".exit_popup_container").removeClass("few_items"),console.log("one item in card")),window.already_display_popup=1,localStorage.setItem("pod",1))},-1<window.location.href.indexOf("checkouts")&&(console.log("checkout page"),t("head").append('<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&display=swap" rel="stylesheet">'),t("body").on("click",".exit_popup .modal_btn",function(e){e.preventDefault(),t("body").find(".exit_popup_container").remove(),t("body").find(".exit_popup_overlay").remove(),t("body").removeClass("stop_scroll")})),t(document).mouseleave(function(){null==event.toElement&&(void 0===window.show_popup||n(d)||(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - Exit-intent popup",eventAction:"loaded"}),console.log("popup loaded"),window.show_popup()))}),t("body").on("click",".exit_popup .modal_btn",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - Exit-intent popup",eventAction:"click on Complete your order"}),console.log("Click on Complete your order")}),t("body").on("click",".modal_close",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - Exit-intent popup",eventAction:"click on X to close popup"}),console.log("Click on X to close popup")}),t("body").on("click",".exit_popup_overlay",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - Exit-intent popup",eventAction:"click on the background to close popup"})}),t("body").append('<style>.exit_popup_container{position:fixed;background:#fff;top:calc(50% - 260px);left:0;right:0;max-width:561px;border-radius:16px;overflow:hidden;margin:auto;z-index:99999}.exit_popup_container.few_items{top:calc(50% - 314px)}.exit_popup_container.few_items .modal-item-wrap{padding:0;margin:25px auto 28px;border-bottom:1px solid rgba(92,92,92,.2)}.exit_popup_container.few_items .modal-item{height:90px;padding-left:27px;overflow:hidden}.exit_popup_container.few_items .modal-item:first-child{margin:-9px 0 0}.exit_popup_container.few_items .modal-item .slide_title_wrap{padding:0 0 0 29px}.exit_popup_container .product-thumbnail__image{position:relative;margin:0}.exit_popup_container,.exit_popup_overlay{display:none}.exit_popup_container.active,.exit_popup_overlay.active{display:block}.exit_popup_overlay{position:fixed;z-index:99998;width:100%;height:100%;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.65);transition:all .4s ease}.exit_popup{text-align:center}.exit_popup .modal__body{padding:38px 0 15px}.exit_popup .modal_title{font-size:22px;padding:0 18px 8px;letter-spacing:.7px;line-height:1}.exit_popup .modal_subtitle,.exit_popup .modal_title{font-weight:700;text-transform:uppercase;color:#2f2f2f;margin:0}.exit_popup .modal_subtitle{font-size:17px;padding:0 18px;letter-spacing:0;line-height:1.15}.exit_popup .modal_slider_wrap{margin:22px 0 0}@media (max-width:340px){.exit_popup .modal_slider_wrap{margin:15px 0}}.exit_popup .modal_slider .swiper-pagination-bullet{height:5px;width:5px;margin:0 5px}.exit_popup .modal_slider .swiper-pagination-bullet-active{background:#5c5c5c}.exit_popup .modal_slider .swiper-slide{padding-top:10px}.exit_popup .modal_slider .swiper-slide>a{display:block;max-width:100px;margin:0 auto;pointer-events:none}.exit_popup .modal_slider .swiper-slide>.product-thumbnail__image{position:relative;display:block;max-width:100px;margin:0 auto}.exit_popup .modal_slider .slide_title{color:#2f2f2f;font-size:12px;letter-spacing:.055em;text-transform:uppercase;font-weight:700;margin-bottom:5px;line-height:1.15}.exit_popup .modal_slider .slide_size{color:#5c5c5c;font-size:12px;margin-bottom:5px;letter-spacing:0}.exit_popup .modal_slider .slide_price{letter-spacing:0;font-weight:500;padding:5px 0 0;margin:0}.exit_popup .modal_slider .slide_price,.exit_popup .slider_tooltip_box{color:#2f2f2f;font-size:14px;font-family:Montserrat,sans-serif;line-height:1.15}.exit_popup .slider_tooltip_box{margin:0 0 15px;padding:14px 10px 13px;background-color:#f8f8f8;text-align:center;border:1px solid #000;font-weight:700;transition:opacity .25s;margin:0 auto;max-width:470px;letter-spacing:.6px;box-sizing:border-box;position:relative}.exit_popup .slider_tooltip_box:after,.exit_popup .slider_tooltip_box:before{content:"";margin-left:-13px;position:absolute;left:50%;width:0;height:0;border-style:solid;border-width:0 10px 10px;transform:rotate(180deg)}.exit_popup .slider_tooltip_box:before{bottom:-10px;border-color:transparent transparent #000}.exit_popup .slider_tooltip_box:after{bottom:-9px;border-color:transparent transparent #f8f8f8}.exit_popup .modal_content{border:2px solid #2e6e49;position:relative;margin:0 auto;max-width:470px}.exit_popup .modal_content:after{content:"";background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgB7VTRcYJAEN2DFGAJZwNACbGC0IF2oKkg2gFUEFNBkgpMOjg6oIPQAJC3ujh4g3CiM/74Zm64XfbeW3aXI3rg3lA0ElEU6bqu37F9xsqVUq/GmC87zqPxiIWcsReD6MQOeiIH8MFWtoR9gmw3QRBoZL6UsElZliy6vVigqqoERHFjY78GufI8bw2xOZOz3/f93D7rVCIQzrt8+IoCWyP2B+yfUQJnUAhxijUD+aIryEkAZUhtH2csTd0LdTXYWUBqnQpZM5IJerOEfyfrLwxDniR9kgiNhPUftJFnWTZtDOcxxSNGxpoOX8SNNSCa4d0CQm+wtYTr9lk1RMxlQElWJKNoYYt3G95wmRpyCB95e3uAQ58882fIGZz9Dv3I8fztChhqsqZh9MZc8x844WYCaPwK5ZzyavudpsgFcm0Utr9XgK8BNO9lIOabHrgG/9ETkAckdD4VAAAAAElFTkSuQmCC");background-repeat:no-repeat;background-color:#fff;position:absolute;top:-14px;left:0;right:0;margin:0 auto;height:28px;width:30px}.exit_popup .modal_content p{font-weight:700;font-size:13px;line-height:1.4;letter-spacing:0;color:#2f2f2f;padding:13px 0;margin:0}@media (max-width:340px){.exit_popup .modal_content p{font-size:12px}}.exit_popup .modal_btn{background:#2e6e49;text-transform:uppercase;color:#fff;font-weight:700;font-size:14px;padding:25px 0;display:block;width:100%;letter-spacing:0;font-family:Montserrat,sans-serif;margin:0 auto 44px;max-width:470px;line-height:1}.modal_close{cursor:pointer;position:absolute;width:50px;height:50px;right:1px;top:3px;display:flex;align-items:center;justify-content:center}.modal_close:after,.modal_close:before{position:absolute;left:0;right:0;margin:auto;content:"";background-color:#b3b3b3;transition:all .25s ease;height:20px;width:1px}.modal_close:before{transform:rotate(45deg)}.modal_close:after{transform:rotate(-45deg)}.modal_close:hover:after,.modal_close:hover:before{background-color:#000}.stop_scroll{overflow:hidden!important}@media screen and (max-height:510px) and (orientation:landscape){.exit_popup_container{top:0;height:100%}.exit_popup{overflow:scroll;height:100%}.exit_popup .modal_content p{font-size:12px;line-height:1.2}}@media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:0.001dpcm) and (max-height:510px) and (orientation:landscape){.exit_popup{height:100%}.exit_popup .modal_content p{font-size:12px;line-height:1.2}}.modal-item-wrap{max-height:230px;overflow-y:auto;max-width:470px;padding:5px 25px 10px;margin:0 auto}.modal-item{justify-content:space-between;padding:0}.modal-item,.modal-item .item-info-wrap{display:flex;align-items:center}.modal-item .item-info-wrap img{max-height:90px;max-width:60px}.modal-item a[rv-href]{display:inline-block;width:110px}.modal-item .slide_title_wrap{padding:0 0 0 20px;text-align:left}.hidden-popup{display:none!important}@media screen and (max-height:640px){.exit_popup .modal__body{padding:25px 0 15px}.exit_popup .modal_btn{margin:0 auto 24px;padding:20px 0}.exit_popup .modal_slider_wrap{margin:15px 0 0}.exit_popup .modal-item-wrap{max-height:190px}.exit_popup_container.few_items{top:calc(50% - 270px)}}</style>')}window.language_abtest={some_slug:"Lorem Ipsum"},window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});