function abjql(o){var e=document.createElement("script");e.type="text/javascript",e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,o())}:e.onload=function(){o()},e.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(e)}function abjqlr(l){window.language_abtest;console.log("%cTest come","background:red;color:wite;");function a(o,e,t){var i,p="";t&&(i=new Date,0!=t&&i.setTime(i.getTime()+24*t*60*60*1e3),p="; expires="+i.toUTCString()),document.cookie=o+"="+(e||"")+p+"; path=/",console.log("set Cookie "+o+"="+(e||""))}function n(o){for(var e=o+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var p=t[i];" "==p.charAt(0);)p=p.substring(1,p.length);if(0==p.indexOf(e))return p.substring(e.length,p.length)}return console.log("get Cookie "+o),null}window.is_top=!1,window.url_is=location.pathname,window.top_items=["/p/dzhemper-pryamogo-kroya-cveta-pudry-49632","/p/zheltoe-plate-batal-s-printom-i-otkrytymi-plechami-49590","/p/bryuchnyy-komplekt-batal-s-kombinirovannoy-bluzkoy-pudrovyy-49915","/p/shifonovoe-plate-s-rastitelnym-printom-chernoe-40589","/p/biryuzovyy-komplekt-iz-zhaketa-i-bryuk-kyulotov-49411","/p/bezhevoe-plate-batal-s-kontrastnymi-vstavkami-i-perforaciey-49733","/p/svobodnaya-bluzka-s-rukavom-reglan-rozovaya-49646","/p/pritalennoe-plate-bolshogo-razmera-v-polosku-temno-sinee-49955","/p/rozovyy-kardigan-fakturnoy-vyazki-15869","/p/plate-maksi-iz-proshvy-s-vyrezom-i-manzhetami-na-rezinke-beloe-40132","/p/chernoe-shifonovoe-plate-midi-s-vyrezom-kaplya-44224","/p/korichnevoe-plate-pritalennogo-kroya-s-raskleshennoy-yubkoy-42082","/p/belaya-yubka-karandash-bolshogo-razmera-49839","/p/dlinnoe-plate-iz-shifona-s-printom-bordovoe-45076","/p/plate-batal-s-azhurnoy-koketkoy-beloe-46148","/p/temno-sinee-plate-batal-s-printom-i-otkrytymi-plechami-49588","/p/pritalennaya-bluzka-s-rukavom-krylyshko-chernaya-40811","/p/plate-polupritalennogo-kroya-s-funkcionalnymi-shlevkami-sinee-13435","/p/belyy-komplekt-iz-ukorochennogo-zhaketa-i-yubki-karandash-19788","/p/plate-s-otkrytoy-spinoy-i-yubkoy-solnce-bezhevoe-50087","/p/beloe-plate-s-celnokroenym-rukavom-i-vorotnikom-stoykoy-50114","/p/shifonovoe-plate-s-cvetochnym-printom-chernoe-44210","/p/plate-svobodnogo-kroya-so-skladkoy-bezhevoe-11105","/p/dlinnoe-plate-iz-shifona-sinego-cveta-s-printom-50147","/p/dvuhcvetnoe-plate-iz-francuzskogo-trikotazha-bez-zastezhek-16999"],window.save_top_product=function(o){console.log("save_top_product");var e=l.inArray(o,window.top_items),t=n("_pot")||"[]",i=JSON.parse(t),p=l.inArray(e,i);save_top_product,-1!==e?-1==p?(i.push(e),a("_pot",t=JSON.stringify(i),7),console.log("save_top_product "+o)):console.log("already added "+o):console.log("is not on top 25 "+o)},window.abtispit=function(){var o=n("_pot")||"[]";return 0<JSON.parse(o).length},window.abtipad=function(){return n("_pod")||!1},window.abtpod=function(){a("_pod",!0,1)},window.abtexitPopup=function(){var o=l(".basket-page .item .item__photo").html(),e=l(".basket-page .item .item__info_title").html(),t=l(".basket-page .item .select__value").html().substr(0,8),i=l(".basket-page .item .select__value").html().substr(8,11);$exit_popup='<div class="exit_popup_container">',$exit_popup+='<div class="ab_exit_popup modal_dialog">',$exit_popup+='<div class="ab_header"><i class="modal_close"></i></div>',$exit_popup+='<div class="ab__body">',$exit_popup+='<h3 class="ab_title">Последняя единица товара этого размера</h3>',$exit_popup+='<p class="ab_subtitle">Поспешите завершить покупку!</p>',$exit_popup+='<div class="ab_item_wrap">',$exit_popup+='<div class="ab_item">',$exit_popup+='<div class="product_img">'+o+"</div>",$exit_popup+='<div class="product_title"><p>'+e+"</p></div>",$exit_popup+='<div class="product_size">'+t+'<span class="product_size_value">'+i+"</span></div>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+='<div class="ab_footer">',$exit_popup+='<div class="ab_timer_wrap">',$exit_popup+='<div class="ab_timer"></div>',$exit_popup+='<div class="sub_timer"><span class="timer_text_min">мин</span><span class="timer_text_sec">сек</span></div>',$exit_popup+="</div>",$exit_popup+='<div class="ab_checkout_wrap">',$exit_popup+='<div class="ab_checkout_btn buttons__checkout">оформить заказ</div>',$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+="</div>",$exit_popup+="</div>";var p=/(\d{7})(\d{1})/;l(".product_size").each(function(){var o=l(this),e=(e=o.text()).replace(p,"$1<span>$2</span>");o.html(e)}),l("body").append($exit_popup),l("body").append('<div class="exit_popup_overlay"></div>');var a,n,s,r=901;!function o(){0<r&&(time=((n=(--r-3600*(a=r/3600^0))/60^0)<10?"0"+n:n)+"  :  "+((s=r-3600*a-60*n)<10?"0"+s:s),l("body").find(".ab_exit_popup .ab_timer").text(time)),setTimeout(function(){o()},1e3)}()},l(document).on("url_change",function(o,e){var t=l.inArray(e,window.top_items);-1!=t&&l(document).trigger("is_on_top",{pathname:location.pathname,product_id:t}),l(document).trigger("change_path",location.pathname),console.log("url is "+e)}),l(document).on("change_path",function(o,e){console.log("change_path"),console.log("is_some_product_in_top");var t=window.abtispit();console.log(t);var i=window.abtipad();"/cart"==e&&1==t&&0==i&&(console.log("display popup"),window.abtpod(),window.block_out_links=!0)}),l(document).on("click",".header__back,a.item__photo, .button__inner--white,.header__logo,.basket__text a",function(o,e){if(window.block_out_links=window.block_out_links||!1,1==window.block_out_links)return window.abtexitPopup(),!1}),l(document).on("is_on_top",function(o,e){window.is_top=e}),l(document).on("click",".button>.button__inner--buy",function(o){console.log(window.is_top),console.log(l("body").find(".info__offers_sizes .size-select .item--selected").length),l("body").find(".info__offers_sizes .size-select .item--selected").length?0!=window.is_top&&(window.save_top_product(location.pathname),console.log("save_top_product")):(window.wait_select_size=location.pathname,console.log("wait_select_size"))}),l(document).on("click",".product-wrapper .product__hidden_purchase",function(o){var e=l(this).closest(".product-wrapper").find(".product__link").attr("href");console.log(e+" href"),save_top_product(e)}),l(document).on("click",".main__product .sizes__list_item",function(o){console.log("click wait_select_size"),void 0!==window.wait_select_size&&(save_top_product(window.wait_select_size),console.log("save_top_product"))}),l(document).on("click",".ab_exit_popup .modal_close",function(o){console.log("click close modal"),l("body").find(".exit_popup_container").length&&(l("body").find(".exit_popup_container").remove(),l("body").find(".exit_popup_overlay").remove())}),l(document).on("click",".ab_exit_popup .ab_checkout_btn ",function(o){console.log("click checkout"),l("body").find(".exit_popup_container").remove(),l("body").find(".exit_popup_overlay").remove(),l("body").find(".basket-page .buttons__checkout .button__inner--buy").trigger("click")}),setInterval(function(){window.url_is!=location.pathname&&(l(document).trigger("url_change",location.pathname),window.url_is=location.pathname)}),l(document).trigger("url_change",location.pathname),l("body").append('<style>.ab_exit_popup{position:fixed;background:#fff;top:calc(50% - 260px);left:0;right:0;width:calc(100% - 20px);max-width:500px;overflow:hidden;margin:auto;border-radius:8px;text-align:center;z-index:999}.ab_exit_popup .ab_header .modal_close{position:absolute;top:4px;right:5px;width:26px;height:26px;background-color:#fff;background-image:url(/assets/img/icons/blank-black.svg);background-size:cover;cursor:pointer}.ab_exit_popup .ab__body{padding:25px 25px 12px}.ab_exit_popup .ab_title{color:#2f2f2f;font-size:18px;font-weight:700;letter-spacing:2.1px;text-transform:uppercase;max-width:270px;margin:0 auto 10px}.ab_exit_popup .ab_subtitle{color:#594fa4;font-size:18px;font-weight:500;letter-spacing:.6px;margin:0 0 17px}.ab_exit_popup .ab_item{width:140px;margin:0 auto}.ab_exit_popup .item__image{max-width:100%}.ab_exit_popup .product_title p{color:#000;font-size:13px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ab_exit_popup .product_size{font-size:13px}.ab_exit_popup .product_size_value{font-weight:700}.ab_exit_popup .ab_footer{background:rgba(89,79,164,.1);padding:16px 25px 25px}.ab_exit_popup .ab_timer_wrap{max-width:145px;margin:0 auto 10px}.ab_exit_popup .ab_timer{color:#594fa4;font-size:30px;font-weight:700;letter-spacing:3px;line-height:1}.ab_exit_popup .timer_devider{margin:0 10px}.ab_exit_popup .sub_timer{color:#6d6d6d;font-weight:500;line-height:1;padding:0 25px 0 20px;display:flex;justify-content:space-between}.ab_exit_popup .ab_checkout_btn{background-color:#594fa4;border-radius:4px;color:#fff;font-weight:700;font-size:12px;letter-spacing:2.5px;text-transform:uppercase;padding:0 10px;max-width:305px;min-width:283px;height:50px;display:flex;align-items:center;justify-content:center;margin:0 auto}.ab_exit_popup .ab_checkout_btn:after{content:"";background-image:url(/assets/img/icons/arrow-white.svg);background-repeat:no-repeat;background-position:50%;width:15px;height:15px;margin-left:5px;background-size:100%}.exit_popup_overlay{position:fixed;z-index:998;width:100%;height:100%;top:0;right:0;bottom:0;left:0;background:linear-gradient(0deg,rgba(0,0,0,.6),rgba(0,0,0,.6));transition:all .4s ease}</style>')}window.language_abtest={some_slug:"Lorem Ipsum"},window.jQuery?jQuery(function(o){abjqlr(o)}):abjql(function(){jQuery(function(o){abjqlr(o)})});