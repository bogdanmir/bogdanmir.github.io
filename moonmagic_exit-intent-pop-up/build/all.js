function abjql(e){var t=document.createElement("script");t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,e())}:t.onload=function(){e()},t.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(t)}function abjqlr(e){if(e("body").append('<style>.exit_popup_container{position:fixed;background:#fff;z-index:99999;top:120px;left:0;right:0;max-width:351px;border-radius:16px;overflow:hidden;margin:auto}.exit_popup_overlay{position:absolute;z-index:99998;width:100%;height:100%;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.65);transition:all .4s ease}.exit_popup{text-align:center}.exit_popup .modal__body{padding:32px 0 18px}.exit_popup .modal_title{font-size:18px;font-family:inherit;padding:0 18px 8px;letter-spacing:.7px}.exit_popup .modal_subtitle,.exit_popup .modal_title{font-weight:600;text-transform:uppercase;color:#2f2f2f}.exit_popup .modal_subtitle{font-size:13px;padding:0 18px;letter-spacing:0}.exit_popup .modal_slider_wrap{margin:20px 0 15px}.exit_popup .modal_slider.swiper-container-initialized .slider_tooltip_box{opacity:0;left:-45px;right:auto}.exit_popup .modal_slider.swiper-container-initialized .swiper-slide-active .slider_tooltip_box{opacity:1}.exit_popup .modal_slider .swiper-pagination-bullet{height:5px;width:5px;margin:0 5px}.exit_popup .modal_slider .swiper-pagination-bullet-active{background:#5c5c5c}.exit_popup .modal_slider .swiper-slide{padding-top:70px}.exit_popup .modal_slider .swiper-slide>a{display:block;max-width:100px;margin:0 auto}.exit_popup .modal_slider .slide_title{color:#2f2f2f;font-size:10px;letter-spacing:.055em;text-transform:uppercase;font-weight:700;margin-bottom:5px}.exit_popup .modal_slider .slide_size{color:#5c5c5c;font-size:12px;margin-bottom:5px;letter-spacing:0}.exit_popup .modal_slider .slide_price{color:#2f2f2f;font-size:14px;letter-spacing:0}.exit_popup .slider_tooltip_box{margin:0 0 15px;padding:10px 10px 11px;background-color:#f8f8f8;color:#2f2f2f;text-align:center;border:1px solid #000;font-weight:600;font-size:12px;transition:opacity .25s;position:absolute;left:0;right:0;margin:0 auto;top:0;width:260px}.exit_popup .slider_tooltip_box:after,.exit_popup .slider_tooltip_box:before{content:"";margin-left:-13px;position:absolute;left:50%;width:0;height:0;border-style:solid;border-width:0 10px 10px;transform:rotate(180deg)}.exit_popup .slider_tooltip_box:before{bottom:-10px;border-color:transparent transparent #000}.exit_popup .slider_tooltip_box:after{bottom:-9px;border-color:transparent transparent #f8f8f8}.exit_popup .modal_content{border:2px solid #fcbec0;position:relative;margin:0 18px}.exit_popup .modal_content:after{content:"";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgB7VTRcYJAEN2DFGAJZwNACbGC0IF2oKkg2gFUEFNBkgpMOjg6oIPQAJC3ujh4g3CiM/74Zm64XfbeW3aXI3rg3lA0ElEU6bqu37F9xsqVUq/GmC87zqPxiIWcsReD6MQOeiIH8MFWtoR9gmw3QRBoZL6UsElZliy6vVigqqoERHFjY78GufI8bw2xOZOz3/f93D7rVCIQzrt8+IoCWyP2B+yfUQJnUAhxijUD+aIryEkAZUhtH2csTd0LdTXYWUBqnQpZM5IJerOEfyfrLwxDniR9kgiNhPUftJFnWTZtDOcxxSNGxpoOX8SNNSCa4d0CQm+wtYTr9lk1RMxlQElWJKNoYYt3G95wmRpyCB95e3uAQ58882fIGZz9Dv3I8fztChhqsqZh9MZc8x844WYCaPwK5ZzyavudpsgFcm0Utr9XgK8BNO9lIOabHrgG/9ETkAckdD4VAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-color:#fff;position:absolute;top:-14px;left:0;right:0;margin:0 auto;height:28px;width:30px}.exit_popup .modal_content p{font-weight:600;font-size:13px;line-height:1.4;letter-spacing:.5px;color:#2f2f2f;padding:13px 0}.exit_popup .modal_btn{background:#fcbec0;text-transform:uppercase;color:#2f2f2f;font-weight:600;font-size:14px;padding:19px 0;display:block;width:100%}.modal_close{cursor:pointer;position:absolute;right:24px;top:20px;width:15px;height:15px}.modal_close:after,.modal_close:before{position:absolute;left:7px;content:"";background-color:#b3b3b3;transition:all .25s ease;height:20px;width:1px}.modal_close:before{transform:rotate(45deg)}.modal_close:after{transform:rotate(-45deg)}.modal_close:hover:after,.modal_close:hover:before{background-color:#000}</style>'),e(".cart-popup .cart-popup__list .cart-popup__item").length>1)var t="We can’t guarantee the availability<br> of all products in you cart<br> if you don’t complete the purchase now";else var t="We can’t guarantee its availability<br> if you don't complete the purchase now";if(window.slide_items=new Array,e(".cart-popup .cart-popup__list .cart-popup__item").each(function(){var t=e(this).find(".cart-popup__item-image").html(),p=e(this).find(".cart-popup__item-info .cart-popup__item-title").text(),o=e(this).find(".cart-popup__item-info .cart-popup__item-size").text(),i=e(this).find(".cart-popup__item-info .cart-popup__item-price").text(),a={img:t,title:p,size:o,price:i};window.slide_items.push(a)}),$exit_popup='<div class="exit_popup_container">',$exit_popup+='<div class="exit_popup modal_dialog">',$exit_popup+='<div class="modal_header"><i class="modal_close"></i></div>',$exit_popup+='<div class="modal__body">',$exit_popup+='<h3 class="modal_title">It’s almost yours!</h3>',$exit_popup+='<p class="modal_subtitle">Only one step left:</p>',$exit_popup+='<div class="modal_slider_wrap">',$exit_popup+='<div class="swiper-container modal_slider">',$exit_popup+='<div class="swiper-wrapper">',e.each(window.slide_items,function(e,t){$exit_popup+='<div class="swiper-slide">'+t.img+'<p class="slide_title">'+t.title+'</p> <p class="slide_size">'+t.size+'</p><p class="slide_price">'+t.price+"</p></div>"}),$exit_popup+="</div>",$exit_popup+='<div class="swiper-pagination-modal"></div>',$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+='<div class="modal_content">',$exit_popup+="<p>"+t+"</p>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+='<a href="" class="modal_btn">complete my order now</a>',$exit_popup+="</div>",$exit_popup+="</div>",e(".cart-popup .cart-popup__list .cart-popup__item").length>0&&(e("body").append($exit_popup),e("body").append('<div class="exit_popup_overlay"></div>')),e("body").on("click",".modal_close",function(){e("body").find(".exit_popup_container").remove(),e("body").find(".exit_popup_overlay").remove()}),e(".cart-popup .cart-popup__list .cart-popup__item").length>1){new window.Swiper(".modal_slider",{speed:400,spaceBetween:15,slidesPerView:2,centeredSlides:!0,loop:!0,pagination:{el:".swiper-pagination-modal",type:"bullets",clickable:!0}})}else console.log("one item in card");e("body").find(".swiper-slide").prepend("<div class='slider_tooltip_box'>This is a popular choice,<br> we may run out of stock soon</div>")}console.log("%cTest come","background:green;color: #ffffff"),window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});