function abjql(t){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,t())}:o.onload=function(){t()},o.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(o)}function abjqlr(c){window.language_abtest;console.log("%cTest come","background:red;color:wite;");var t,o,e,i;function p(t,o,e){var i,a="";e&&(i=new Date,0!=e&&i.setTime(i.getTime()+24*e*60*60*1e3),a="; expires="+i.toUTCString()),document.cookie=t+"="+(o||"")+a+"; path=/",console.log("set Cookie "+t+"="+(o||""))}function s(t){for(var o=t+"=",e=document.cookie.split(";"),i=0;i<e.length;i++){for(var a=e[i];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(o))return a.substring(o.length,a.length)}return console.log("get Cookie "+t),null}window.is_top=!1,window.url_is=location.pathname,window.top_items=["/p/dzhemper-pryamogo-kroya-cveta-pudry-49632","/p/trikotazhnoe-plate-s-udlinennoy-spinkoy-chernoe-44064","/p/belaya-bluzka-s-vyrezom-zamochnaya-skvazhina-40072","/p/dlinnoe-plate-bolshogo-razmera-iz-trikotazha-bezhevoe-50992","/p/bryuki-banany-grafitovogo-cveta-so-standartnoy-posadkoy-50571","/p/siniy-komplekt-bolshogo-razmera-iz-angory-s-bryukami-44533","/p/bezhevoe-plate-so-vstavkami-v-goroh-i-raskleshennoy-yubkoy-50162","/p/shifonovoe-plate-s-rastitelnym-printom-chernoe-40589","/p/seraya-yubka-trapeciya-iz-zhakkarda-s-uzorom-gusinaya-lapka-50347","/p/trikotazhnoe-plate-rozovogo-cveta-s-kruzhevom-17445","/p/komplekt-bolshogo-razmera-s-yubkoy-futlyar-siniy-44483","/p/rozovyy-kardigan-fakturnoy-vyazki-15869","/p/ukorochennye-bryuki-banany-so-standartnoy-posadkoy-bezhevye-50575","/p/plate-midi-pritalennogo-kroya-s-rukavom-kolokol-lilovoe-41403","/p/oversize-kardigan-s-nakladnymi-karmanami-rozovyy-15827","/p/pritalennoe-plate-maksi-s-karmanami-temno-sinee-41494","/p/bezhevyy-bryuchnyy-komplekt-s-ukorochennym-zhaketom-51065","/p/raskleshennoe-plate-maksi-bolshogo-razmera-temno-sinee-51015","/p/belyy-komplekt-iz-ukorochennogo-zhaketa-i-yubki-karandash-19788","/p/plate-svobodnogo-kroya-so-skladkoy-bezhevoe-11105","/p/bezhevyy-dzhemper-pryamogo-kroya-49633","/p/rozovoe-trikotazhnoe-plate-trapeciya-s-neobychnym-karmanom-na-polochke-13583","/p/plate-svobodnogo-kroya-so-skladkoy-chernoe-44031","/p/chernyy-dzhemper-s-obemnymi-rukavami-iz-setki-v-goroh-44913","/p/trikotazhnoe-plate-s-udlinennoy-spinkoy-zelenoe-42796"],window.abtrpft=function(t){for(var o,e=s("_pot")||"[]",i=JSON.parse(e),a=new Array,n=0;n<i.length;n++){n!=t&&(o=i[n],a.push(o))}p("_pot",e=JSON.stringify(a),7)},window.save_top_product=function(t){console.log("save_top_product");var o=c.inArray(t,window.top_items),e=s("_pot")||"[]",i=JSON.parse(e),a=c.inArray(o,i);save_top_product,-1!==o&&(-1==a?(i.push(o),p("_pot",e=JSON.stringify(i),7),console.log("save_top_product "+t)):console.log("already added "+t)),0==window.abtispstsd(t)&&window.abtsptsd(t)},window.is_product_in_top=function(t){console.log("url "+t);var o=c.inArray(t,window.top_items);return console.log("product_id "+o),-1!==o?"true":"false"},window.abtispit=function(){var t=s("_pot")||"[]";return 0<JSON.parse(t).length},window.abtipad=function(){return s("_pod")||!1},window.abtpod=function(){p("_pod",!0,1)},window.abtspd=function(t){var o=JSON.stringify(t);window.localStorage.setItem("_abtpd",o)},window.abtgpd=function(){var t=window.localStorage.getItem("_abtpd")||"{}";return t=JSON.parse(t)},window.abtgptsd=function(){var t=window.localStorage.getItem("_abtptsd")||"[]";return t=JSON.parse(t)},window.abtispstsd=function(t){var o=window.localStorage.getItem("_abtptsd")||"[]",o=JSON.parse(o);return-1<c.inArray(t,o)},window.abtsptsd=function(t){var o=window.localStorage.getItem("_abtptsd")||"[]";(o=JSON.parse(o)).push(t);var e=JSON.stringify(o);window.localStorage.setItem("_abtptsd",e)},window.abtexitPopup=function(){console.log("exitPopup");var t,o,e,i,a,n,p,s,d,r=window.abtgpd();console.log("exist_product_data"),1!=c.isEmptyObject(r)&&(t=r.i,o=r.t,e=r.ts,i=r.tv,window.abtspd(r),$exit_popup='<div class="exit_popup_container">',$exit_popup+='<div class="ab_exit_popup modal_dialog">',$exit_popup+='<div class="ab_header"><i class="modal_close"></i></div>',$exit_popup+='<div class="ab__body">',$exit_popup+='<h3 class="ab_title">Последняя единица товара этого размера</h3>',$exit_popup+='<p class="ab_subtitle">Поспешите завершить покупку!</p>',$exit_popup+='<div class="ab_item_wrap">',$exit_popup+='<div class="ab_item">',$exit_popup+='<div class="product_img"><img class="item__image" src="'+t+'" alt="'+o+'"></div>',$exit_popup+='<div class="product_title"><p>'+o+"</p></div>",""!=e&&($exit_popup+='<div class="product_size">'+e+'<span class="product_size_value">'+i+"</span></div>"),$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+='<div class="ab_footer">',$exit_popup+='<div class="ab_timer_wrap">',$exit_popup+='<div class="ab_timer"></div>',$exit_popup+='<div class="sub_timer"><span class="timer_text_min">мин</span><span class="timer_text_sec">сек</span></div>',$exit_popup+="</div>",$exit_popup+='<div class="ab_checkout_wrap">',$exit_popup+='<div class="ab_checkout_btn buttons__checkout">оформить заказ</div>',$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+='</div><div class="exit_popup_overlay"></div>',a=/(\d{7})(\d{1})/,c(".product_size").each(function(){var t=c(this),o=(o=t.text()).replace(a,"$1<span>$2</span>");t.html(o)}),c("body").append($exit_popup),n=901,function t(){0<n?(time=((s=(--n-3600*(p=n/3600^0))/60^0)<10?"0"+s:s)+"  :  "+((d=n-3600*p-60*s)<10?"0"+d:d),0<c("body").find(".ab_exit_popup .ab_timer").length&&(c("body").find(".ab_exit_popup .ab_timer").text(time),setTimeout(function(){t()},1e3))):c("body").find(".exit_popup_container").length&&(c("body").find(".exit_popup_container").remove(),c("body").find(".exit_popup_overlay").remove())}())},window.abttdp=function(t,o){window.abtexitPopup(),console.log("run abtexitPopup"),window.abtpod(),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"autoEvent",gtmUaEventCategory:"PDP exit intent pop up",gtmUaEventAction:"view popup"})},window.saveproduct_data=function(t){console.log("saveproduct_data",t);var o,e=c("body").find(".swiper-wrapper .swiper-slide:eq(0) img");e.length&&(o={i:e.attr("src"),t:c(".info__title_text").text(),ts:"Размер:",tv:t},window.abtspd(o))};try{t=window,o=document,t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:1914694,hjsv:6},e=o.getElementsByTagName("head")[0],(i=o.createElement("script")).async=1,i.src="https://static.hotjar.com/c/hotjar-"+t._hjSettings.hjid+".js?sv="+t._hjSettings.hjsv,e.appendChild(i),window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)},hj("trigger","PDP_exit_intent_pop_up")}catch(t){console.log("hotjar failed to load")}window.dataLayer=window.dataLayer||[],dataLayer.push({event:"autoEvent",gtmUaEventCategory:"PDP exit intent pop up",gtmUaEventAction:"loaded"}),c(document).on("url_change",function(t,o){var e=c.inArray(o,window.top_items);-1!=e&&c(document).trigger("is_on_top",{pathname:location.pathname,product_id:e}),c(document).trigger("change_path",location.pathname),console.log("url is "+o),window.abtard=!1}),c(document).on("change_path",function(t,o){console.log("change_path"),console.log("is_some_product_in_top");var e=window.abtispit(),i=window.abtipad();if(window.can_display_popup=!1,console.log("main__product",c("html").find(".main__product").length),1==e&&0==i)switch(window.can_display_popup=!0){case"/cart"==o:case"/checkout/customer-information"==o:case"/checkout/shipping-and-payment"==o:case 0<c(".thanks__top .thanks__title").length:case 1==window.abtispstsd(o):case 1==window.is_product_in_top(o):console.log("Test popup don't show"),can_display_popup=!1}}),c(document).on("is_on_top",function(t,o){window.is_top=o}),c(document).on("click",".button>.button__inner--buy",function(t){var o,e;console.log(window.is_top),console.log(c("body").find(".info__offers_sizes .size-select .item--selected").length),c("body").find(".info__offers_sizes .size-select .item--selected").length?(0!=window.is_top&&(window.save_top_product(location.pathname),console.log("save_top_product")),(o=(o=c("body").find(".info__offers_sizes .size-select .item--selected:eq(0)").clone()).find(".keradan-size-item-text").clone()).find("*").remove(),""==(e=(e=o.text()).trim())&&((o=c("body").find(".info__offers_sizes .size-select .item--selected:eq(0)").clone()).find("*").remove(),e=(e=o.text()).trim()),window.saveproduct_data(e)):(window.wait_select_size=location.pathname,console.log("wait_select_size"))}),c(document).on("click",".product-wrapper .product__hidden_purchase",function(t){var o=c(this).closest(".product-wrapper").find(".product__link").attr("href");console.log(o+" href"),save_top_product(o)}),c(document).on("click",".main__product .sizes__list_item",function(t){console.log("click wait_select_size");var o=c(this).clone();o.find("*").remove();var e=(e=o.text()).trim();window.saveproduct_data(e),void 0!==window.wait_select_size&&save_top_product(window.wait_select_size)}),c(document).on("click",".icon__trash",function(t){var o,e;console.log(c(this).closest(".wrapper").find(".item__photo")),console.log(c(this).closest(".wrapper")),c(this).closest(".wrapper").find(".item__photo").length&&(o=c(this).closest(".wrapper").find(".item__photo").attr("href"),e=c.inArray(o,window.top_items),console.log(o),-1!=e&&window.abtrpft(e)),window.abtard=!1}),c(document).on("click",".ab_exit_popup .modal_close,.exit_popup_overlay",function(t){console.log("click close modal"),c("body").find(".exit_popup_container").length&&(c("body").find(".exit_popup_container").remove(),c("body").find(".exit_popup_overlay").remove())}),c(document).on("click",".ab_exit_popup .modal_close",function(t){console.log("Close pop-up with click on X icon"),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"autoEvent",gtmUaEventCategory:"PDP exit intent pop up",gtmUaEventAction:"close popup - X"})}),c(document).on("click",".exit_popup_overlay",function(t){console.log("Close pop-up with click on the background"),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"autoEvent",gtmUaEventCategory:"PDP exit intent pop up",gtmUaEventAction:"close popup - X"})}),c(document).on("click",".ab_exit_popup .ab_checkout_btn ",function(t){console.log("click checkout"),c("body").find(".exit_popup_container").remove(),c("body").find(".exit_popup_overlay").remove(),c("body").find(".basket-page .buttons__checkout .button__inner--buy").trigger("click"),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"autoEvent",gtmUaEventCategory:"PDP exit intent pop up",gtmUaEventAction:"click on Complete order"})});var a,n=window.pageYOffset||document.documentElement.scrollTop;c(window).scroll(function(t){n=window.pageYOffset||document.documentElement.scrollTop}),setInterval(function(){var t,o,e;n<a-50&&(t=window.abtgpd(),o=c.isEmptyObject(t),e=window.abtispstsd(location.pathname),console.log("pathname is "+location.pathname),console.log("this_in_cart is "+(0==e)),console.log("abttdp is "+(void 0!==window.abttdp)),console.log("abttdp is false "+(0==window.abtipad())),console.log("is not empty "+!o),console.log("can_display_popup "+(1==window.can_display_popup)),void 0!==window.abttdp&&0==window.abtipad()&&!o&&1==window.can_display_popup&&0==e&&window.abtispit()&&window.abttdp()),a=n}),setInterval(function(){window.url_is!=location.pathname&&(c(document).trigger("url_change",location.pathname),window.url_is=location.pathname)}),window.popup_added_to_cart="",setInterval(function(){var t,o,e;window.abtard=window.abtard||!1,0==window.abtard&&(t=window.abtgpd(),c.isEmptyObject(t),c("html").find(".basket-page .item").length&&(o=c("body").find(".basket-page .item").length-1,e=c(".basket-page .item:eq("+o+")"),(t={}).i=e.find(".item__photo img").attr("src"),t.t=e.find(".item__info_title").html(),t.ts=e.find(".select__value").html().substr(0,8),t.tv=e.find(".select__value").html().substr(8,11),window.abtspd(t),window.abtard=!0),c("html").find(".cart__slider .slide").length&&(o=c("html").find(".cart__slider .slide").length-1,e=c(".cart__slider .slide:eq("+o+")"),(t={}).i=e.find(".slide__photo img").attr("src"),t.t=e.find(".slide__title").html(),t.ts=e.find(".slide__size").html().substr(0,8),t.tv=e.find(".slide__size").html().substr(8,11),window.abtspd(t),window.abtard=!0))}),c(document).trigger("url_change",location.pathname),c("body").append('<style>.ab_exit_popup{position:fixed;background:#fff;top:calc(50% - 260px);left:0;right:0;width:calc(100% - 20px);max-width:500px;overflow:hidden;margin:auto;border-radius:8px;text-align:center;z-index:999}.ab_exit_popup .ab_header .modal_close{position:absolute;top:4px;right:5px;width:26px;height:26px;background-color:#fff;background-image:url(/assets/img/icons/blank-black.svg);background-size:cover;cursor:pointer}.ab_exit_popup .ab__body{padding:25px 25px 12px}.ab_exit_popup .ab_title{color:#2f2f2f;font-size:18px;font-weight:700;letter-spacing:2.1px;text-transform:uppercase;max-width:270px;margin:0 auto 10px}.ab_exit_popup .ab_subtitle{color:#594fa4;font-size:18px;font-weight:500;letter-spacing:.6px;margin:0 0 17px}.ab_exit_popup .ab_item{width:140px;margin:0 auto}.ab_exit_popup .item__image{max-width:100%}.ab_exit_popup .product_title p{color:#000;font-size:13px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ab_exit_popup .product_size{font-size:13px}.ab_exit_popup .product_size_value{font-weight:700}.ab_exit_popup .ab_footer{background:rgba(89,79,164,.1);padding:16px 25px 25px}.ab_exit_popup .ab_timer_wrap{max-width:145px;margin:0 auto 10px}.ab_exit_popup .ab_timer{color:#594fa4;font-size:30px;font-weight:700;letter-spacing:3px;line-height:1}.ab_exit_popup .timer_devider{margin:0 10px}.ab_exit_popup .sub_timer{color:#6d6d6d;font-weight:500;line-height:1;padding:0 25px 0 20px;display:flex;justify-content:space-between}.ab_exit_popup .ab_checkout_btn{background-color:#594fa4;border-radius:4px;color:#fff;font-weight:700;font-size:12px;letter-spacing:2.5px;text-transform:uppercase;padding:0 10px;max-width:305px;min-width:283px;height:50px;display:flex;align-items:center;justify-content:center;margin:0 auto}.ab_exit_popup .ab_checkout_btn:after{content:"";background-image:url(/assets/img/icons/arrow-white.svg);background-repeat:no-repeat;background-position:50%;width:15px;height:15px;margin-left:5px;background-size:100%}.exit_popup_overlay{position:fixed;z-index:998;width:100%;height:100%;top:0;right:0;bottom:0;left:0;background:linear-gradient(0deg,rgba(0,0,0,.6),rgba(0,0,0,.6));transition:all .4s ease}</style>')}window.language_abtest={some_slug:"Lorem Ipsum"},window.jQuery?jQuery(function(t){abjqlr(t)}):abjql(function(){jQuery(function(t){abjqlr(t)})});