function abjql(e){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,e())}:o.onload=function(){e()},o.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(o)}function abjqlr(o){function t(){if(console.log("render_popup Run"),o(".cart-popup .cart-popup__list .cart-popup__item").length>0&&(window.slide_items=new Array,o(".cart-popup .cart-popup__list .cart-popup__item").each(function(){var e=o(this).find(".cart-popup__item-image").html(),t=o(this).find(".cart-popup__item-info .cart-popup__item-title").text(),i=o(this).find(".cart-popup__item-info .cart-popup__item-size").text(),p=o(this).find(".cart-popup__item-info .cart-popup__item-price").text(),a={img:e,title:t,size:i,price:p};window.slide_items.push(a)})),o(".order-summary__section--product-list").length>0&&(window.slide_items=new Array,o(".order-summary__section--product-list .product").each(function(){var e=o(this).find(".product-thumbnail__wrapper").html(),t=o(this).find(".product__description__name.order-summary__emphasis:eq(0)").text(),i=o(this).find(".product__price .order-summary__emphasis").text(),p={img:e,title:t,size:null,price:i};window.slide_items.push(p)})),console.log("slide items"),console.log(window.slide_items),o("body").find(".exit_popup_container").remove(),o("body").find(".exit_popup_overlay").remove(),$exit_popup='<div class="exit_popup_container">',$exit_popup+='<div class="exit_popup modal_dialog">',$exit_popup+='<div class="modal_header"><i class="modal_close"></i></div>',$exit_popup+='<div class="modal__body">',$exit_popup+='<h3 class="modal_title">It’s almost yours!</h3>',$exit_popup+='<p class="modal_subtitle">Only one step left:</p>',$exit_popup+='<div class="modal_slider_wrap">',$exit_popup+='<div class="swiper-container modal_slider">',$exit_popup+='<div class="swiper-wrapper">',o.each(window.slide_items,function(e,o){$exit_popup+='<div class="swiper-slide"><div class="slider_tooltip_box">This is a popular choice,<br> we may run out of stock soon</div>'+o.img+'<p class="slide_title">'+o.title+'</p> <p class="slide_size">'+(null!=o.size?o.size:"")+'</p><p class="slide_price">'+o.price+"</p></div>"}),$exit_popup+="</div>",$exit_popup+='<div class="swiper-pagination-modal"></div>',$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+='<div class="modal_content">',window.slide_items.length>1)var e="We can’t guarantee the availability<br> of all products in you cart<br> if you don’t complete the purchase now";else{var e="We can’t guarantee its availability<br> if you don't complete the purchase now";console.log("one item in card")}$exit_popup+="<p>"+e+"</p>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+='<a href="/checkout" class="modal_btn">complete my order now</a>',$exit_popup+="</div>",$exit_popup+="</div>",window.slide_items.length>0&&(o("body").append($exit_popup),o("body").append('<div class="exit_popup_overlay"></div>'))}if(o("body").append('<style>.exit_popup_container{position:fixed;background:#fff;z-index:99999;top:80px;left:0;right:0;max-width:351px;border-radius:16px;overflow:hidden;margin:auto}.exit_popup_container,.exit_popup_overlay{display:none}.exit_popup_container.active,.exit_popup_overlay.active{display:block}.exit_popup_overlay{position:fixed;z-index:99998;width:100%;height:100%;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.65);transition:all .4s ease}.exit_popup{text-align:center}.exit_popup .modal__body{padding:32px 0 18px}.exit_popup .modal_title{font-size:18px;font-family:inherit;padding:0 18px 8px;letter-spacing:.7px;line-height:1}.exit_popup .modal_subtitle,.exit_popup .modal_title{font-weight:700;text-transform:uppercase;color:#2f2f2f;font-family:Montserrat,sans-serif}.exit_popup .modal_subtitle{font-size:13px;padding:0 18px;letter-spacing:0;line-height:1.15}.exit_popup .modal_slider_wrap{margin:20px 0 15px}.exit_popup .modal_slider.swiper-container-initialized .slider_tooltip_box{opacity:0;left:-45px;right:auto}.exit_popup .modal_slider.swiper-container-initialized .swiper-slide-active .slider_tooltip_box{opacity:1}.exit_popup .modal_slider .swiper-pagination-bullet{height:5px;width:5px;margin:0 5px}.exit_popup .modal_slider .swiper-pagination-bullet-active{background:#5c5c5c}.exit_popup .modal_slider .swiper-slide{padding-top:70px}.exit_popup .modal_slider .swiper-slide>a{display:block;max-width:100px;margin:0 auto;pointer-events:none}.exit_popup .modal_slider .swiper-slide>.product-thumbnail__image{position:relative;display:block;max-width:100px;margin:0 auto}.exit_popup .modal_slider .slide_title{color:#2f2f2f;font-size:10px;letter-spacing:.055em;text-transform:uppercase;font-weight:700;margin-bottom:5px;font-family:Montserrat,sans-serif;line-height:1.15}.exit_popup .modal_slider .slide_size{color:#5c5c5c;font-size:12px;margin-bottom:5px;letter-spacing:0}.exit_popup .modal_slider .slide_price{color:#2f2f2f;font-size:14px;letter-spacing:0;font-family:Montserrat,sans-serif;line-height:1.15;font-weight:400}.exit_popup .slider_tooltip_box{margin:0 0 15px;padding:10px 10px 11px;background-color:#f8f8f8;color:#2f2f2f;text-align:center;border:1px solid #000;font-weight:700;font-size:12px;transition:opacity .25s;position:absolute;left:0;right:0;margin:0 auto;top:0;width:260px;font-family:Montserrat,sans-serif;letter-spacing:1.5px;line-height:1.15;box-sizing:border-box}.exit_popup .slider_tooltip_box:after,.exit_popup .slider_tooltip_box:before{content:"";margin-left:-13px;position:absolute;left:50%;width:0;height:0;border-style:solid;border-width:0 10px 10px;transform:rotate(180deg)}.exit_popup .slider_tooltip_box:before{bottom:-10px;border-color:transparent transparent #000}.exit_popup .slider_tooltip_box:after{bottom:-9px;border-color:transparent transparent #f8f8f8}.exit_popup .modal_content{border:2px solid #fcbec0;position:relative;margin:0 18px}.exit_popup .modal_content:after{content:"";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgB7VTRcYJAEN2DFGAJZwNACbGC0IF2oKkg2gFUEFNBkgpMOjg6oIPQAJC3ujh4g3CiM/74Zm64XfbeW3aXI3rg3lA0ElEU6bqu37F9xsqVUq/GmC87zqPxiIWcsReD6MQOeiIH8MFWtoR9gmw3QRBoZL6UsElZliy6vVigqqoERHFjY78GufI8bw2xOZOz3/f93D7rVCIQzrt8+IoCWyP2B+yfUQJnUAhxijUD+aIryEkAZUhtH2csTd0LdTXYWUBqnQpZM5IJerOEfyfrLwxDniR9kgiNhPUftJFnWTZtDOcxxSNGxpoOX8SNNSCa4d0CQm+wtYTr9lk1RMxlQElWJKNoYYt3G95wmRpyCB95e3uAQ58882fIGZz9Dv3I8fztChhqsqZh9MZc8x844WYCaPwK5ZzyavudpsgFcm0Utr9XgK8BNO9lIOabHrgG/9ETkAckdD4VAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-color:#fff;position:absolute;top:-14px;left:0;right:0;margin:0 auto;height:28px;width:30px}.exit_popup .modal_content p{font-weight:700;font-size:13px;line-height:1.4;letter-spacing:.5px;color:#2f2f2f;padding:13px 0;font-family:Montserrat,sans-serif}.exit_popup .modal_btn{background:#fcbec0;text-transform:uppercase;color:#2f2f2f;font-weight:700;font-size:14px;padding:19px 0;display:block;width:100%}.modal_close{cursor:pointer;position:absolute;right:24px;top:20px;width:15px;height:15px}.modal_close:after,.modal_close:before{position:absolute;left:7px;content:"";background-color:#b3b3b3;transition:all .25s ease;height:20px;width:1px}.modal_close:before{transform:rotate(45deg)}.modal_close:after{transform:rotate(-45deg)}.modal_close:hover:after,.modal_close:hover:before{background-color:#000}.stop_scroll{overflow:hidden!important}</style>'),window.location.href.indexOf("checkouts")>-1&&(console.log("added style"),o("head").append('<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&display=swap" rel="stylesheet"><link type="text/css" rel="stylesheet" href="https://swiperjs.com/package/css/swiper.min.css" />')),window.slide_items=new Array,void 0===window.Swiper){var i=document.createElement("script");i.type="text/javascript",i.readyState?i.onreadystatechange=function(){"loaded"!==i.readyState&&"complete"!==i.readyState||(i.onreadystatechange=null,e())}:i.onload=function(){t()},i.src="//cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.2/js/swiper.min.js",document.getElementsByTagName("head")[0].appendChild(i)}else t();o("body").on("click",".modal_close",function(){o("body").find(".exit_popup_container").remove(),o("body").find(".exit_popup_overlay").remove(),o("body").removeClass("stop_scroll")}),window.already_display_popup=Number(localStorage.getItem("pod")||0),window.dont_triger_popup=0,setInterval(function(){1==o(".cart-popup").hasClass("cart-popup--active")||window.slide_items.length<1?window.dont_triger_popup=1:window.dont_triger_popup=0},0),window.show_popup=function(){0==window.already_display_popup&&t(),0==window.already_display_popup&&0==window.dont_triger_popup&&(console.log("show popup"),o(".exit_popup_container").addClass("active"),o(".exit_popup_overlay").addClass("active"),o("body").addClass("stop_scroll"),window.slide_items.length>1?(void 0!==window.popup_swiper&&window.popup_swiper.destroy(),setTimeout(function(){window.popup_swiper=new window.Swiper(".modal_slider",{speed:400,spaceBetween:15,slidesPerView:2,centeredSlides:!0,loop:!1,pagination:{el:".swiper-pagination-modal",type:"bullets",clickable:!0}})},10)):console.log("one item in card"),window.already_display_popup=1,localStorage.setItem("pod",1))};var p,a=window.pageYOffset||document.documentElement.scrollTop;o(window).scroll(function(e){a=window.pageYOffset||document.documentElement.scrollTop}),setInterval(function(){p-50>a&&void 0!==window.show_popup&&window.show_popup(),p=a})}console.log("%cTest come scroll","background:green;color: #ffffff"),window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});