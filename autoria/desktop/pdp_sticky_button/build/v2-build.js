function abjql(e){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,e())}:o.onload=function(){e()},o.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(o)}function abjqlr(t){var o=window.language_abtest;console.log("%cTest come","background:red;color:wite;");var e,a,n,d,l,i,r,s,c,_;window.customer_click=location.href,console.log("customer_click is "+window.customer_click);try{e=window,a=document,e.hj=e.hj||function(){(e.hj.q=e.hj.q||[]).push(arguments)},e._hjSettings={hjid:1953436,hjsv:6},n=a.getElementsByTagName("head")[0],(d=a.createElement("script")).async=1,d.src="https://static.hotjar.com/c/hotjar-"+e._hjSettings.hjid+".js?sv="+e._hjSettings.hjsv,n.appendChild(d),window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)},hj("trigger","pdp_sticky_button_credit")}catch(e){}l=window,i=document.documentElement,r="async-hide",s="dataLayer",c={"GTM-P46SHG8":!0},i.className+=" "+r,c.start=+new Date,c.end=_=function(){i.className=i.className.replace(RegExp(" ?"+r),"")},(l[s]=l[s]||[]).hide=c,setTimeout(function(){_(),c.end=null},0),c.timeout=0,window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP sticky button credit",eventAction:"loaded"}),t(document).on("click",".proposition_button_credit",function(){document.querySelectorAll("#react_phones_bottom .phones_item:first-child .cro-button")[0].click(),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP sticky button credit",eventAction:"click sticky button",eventLabel:o.credit_text}),console.log("click on "+o.credit_text);var e=t(".image-gallery .image-gallery-slide:first-child .image-gallery-image picture").html();void 0!==window.display_info&&clearInterval(window.display_info),window.display_info=setInterval(function(){0==t(".ab_test_modal").length&&t("body").find(".react_modal").addClass("ab_test_modal"),t(".ab_test_modal").length&&(0==t(".ab_test_modal .modal_title").length&&(t(".ab_test_modal .phones_modal__item").prepend('<div class="modal_title"><p>Узнать о кредитных предложениях на этот автомобиль можно по телефону:</p></div>'),0<t(".ab_test_modal .phones_modal__item").length&&t(".ab_test_modal .react_modal__body").prepend('<div class="modal_photo-car">'+e+"</div>")),0==t(".ab_test_modal .modal_form").length&&(t(".ab_test_modal .phones_modal__item").append('<div class="text_devider"><p>или</p></div>'),t(".ab_test_modal .phones_modal__item").append('<div class="sub_title"><p>оставьте свой номер телефона</p></div>'),t(".ab_test_modal .phones_modal__item").append('<div class="info_text"><p>мы перезвоним и дадим информацию по кредитам</p></div>'),t(".ab_test_modal .phones_modal__item").append('<form class="modal_form" id="example-form"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.26705 0.980004C2.43105 0.815985 2.62805 0.688713 2.84499 0.606631C3.06192 0.524549 3.29383 0.489534 3.52533 0.503908C3.75683 0.518282 3.98263 0.581717 4.18774 0.690004C4.39286 0.798292 4.5726 0.948957 4.71505 1.132L6.39605 3.294C6.70505 3.69 6.81405 4.207 6.69205 4.694L6.17905 6.747C6.15237 6.85353 6.15373 6.96515 6.183 7.071C6.21226 7.17685 6.26844 7.27331 6.34605 7.351L8.65005 9.654C8.72774 9.73162 8.82421 9.78779 8.93005 9.81706C9.0359 9.84632 9.14752 9.84768 9.25405 9.821L11.3061 9.308C11.5467 9.24789 11.7979 9.2433 12.0407 9.29458C12.2834 9.34587 12.5113 9.45167 12.7071 9.604L14.8691 11.285C15.6461 11.889 15.7181 13.038 15.0221 13.733L14.0521 14.703C13.3591 15.396 12.3221 15.701 11.3551 15.361C8.88146 14.4903 6.6356 13.074 4.78405 11.217C2.92669 9.36555 1.51 7.11969 0.639051 4.646C0.299051 3.679 0.604051 2.642 1.29705 1.948L2.26705 0.979004V0.980004Z" fill="#9B9B9B"/></svg> <input placeholder="(000) 000 00 00" class="input_number" maxlength="15"><button type="button" class="modal_btn button--green">Позвонить мне</button></form>')))})}),t("body").on("click",".ab_test_modal .react_modal__close",function(){t("body").find(".ab_test_modal").hasClass("thankyou")?(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP sticky button credit",eventAction:"click Pop up TY",eventLabel:"close"}),console.log("click on close Thank You")):(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP sticky button credit",eventAction:"click Pop up loan",eventLabel:"close"}),console.log("click on close NOT Thank You"))}),t("body").on("click",".react_modal__close, .react_modal__backdrop",function(){void 0!==window.display_info&&clearInterval(window.display_info),window.customer_click=!1,t("body").find(".react_modal").removeClass("ab_test_modal"),t("body").find(".react_modal").addClass("hide_modal"),t(".react_modal .modal_photo-car").remove(),t(".react_modal .modal_title").remove(),t(".react_modal .text_devider").remove(),t(".react_modal .sub_title").remove(),t(".react_modal .info_text").remove(),t(".react_modal .modal_form").remove()}),t("body").on("click",".ab_test_modal .react_modal__body .btn-border",function(){void 0!==window.display_info&&clearInterval(window.display_info),t("body").find(".ab_test_modal").hasClass("thankyou")?(t(this).hasClass("btn-border--red")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP sticky button credit",eventAction:"click Pop up TY",eventLabel:"Пожаловаться"}),console.log("click on button Пожаловаться thank you"),console.log(o.events_label)),t(this).hasClass("btn-border--green")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP sticky button credit",eventAction:"click Pop up TY",eventLabel:"Успешный звонок"}),console.log("click on button Успешный звонок thank you"),console.log(o.events_label))):(t(this).hasClass("btn-border--red")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"click on button Пожаловаться",eventLabel:o.events_label}),console.log("click on button Пожаловаться"),console.log(o.events_label)),t(this).hasClass("btn-border--green")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"click on button Успешный звонок",eventLabel:o.events_label}),console.log("click on button Успешный звонок"),console.log(o.events_label))),t("body").find(".react_modal").removeClass("ab_test_modal"),t(".react_modal__body .modal_photo-car").remove(),t(".phones_modal_wrap").removeClass("thx_wrap"),t(".react_modal__body .thx_holder").remove()}),t("body").on("click",".react_modal__backdrop",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP sticky button credit",eventAction:"click Pop up loan",eventLabel:"close"}),console.log("Pop up loan click modal__backdrop")}),t(document).on("keydown keyup input",".input_number",function(e){var o=e.charCode||e.keyCode||0;return $phone=t(this),8!==o&&9!==o&&(0===$phone.val().length&&$phone.val($phone.val()+"("),4===$phone.val().length&&$phone.val($phone.val()+")"),5===$phone.val().length&&$phone.val($phone.val()+" "),9===$phone.val().length&&$phone.val($phone.val()+" "),12===$phone.val().length&&$phone.val($phone.val()+" ")),15===$phone.val().length&&(t(this).closest(".modal_form").removeClass("error"),t(this).closest(".modal_form").find(".error_msg").remove()),8!=o&&9!=o||$phone.val(""),8==o||9==o||46==o||48<=o&&o<=57||96<=o&&o<=105}),t(document).on("focus click",".input_number",function(e){var o;$phone=t(this),0===$phone.val().length?$phone.val("("):(o=$phone.val(),$phone.val("").val(o)),console.log("focus, click - on number input")}),t(document).on("click",".input_number",function(e){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP sticky button credit",eventAction:"click Pop up loan",eventLabel:"number input"}),console.log("click on number input")}),t(document).on("blur",".input_number",function(e){$phone=t(this),"("===$phone.val()&&$phone.val(""),$phone.val().length<15?(t(this).closest(".modal_form").addClass("error"),t(".error_msg").length<1&&t(this).closest(".modal_form").append('<p class="error_msg">Мобильный телефон некорректен. Пример 0931234567</p>')):(t(this).closest(".modal_form").removeClass("error"),t(this).closest(".modal_form").find(".error_msg").remove())}),t(document).on("click",".modal_btn",function(){var e,o;$phone=t(".input_number"),$phone.val().length<15?(t(this).closest(".modal_form").addClass("error"),t(".error_msg").length<1&&t(this).closest(".modal_form").append('<p class="error_msg">Мобильный телефон некорректен. Пример 0931234567</p>')):(t(this).closest(".modal_form").removeClass("error"),t(this).closest(".modal_form").find(".error_msg").remove(),console.log($phone.val()),window.customer_click&&(e=window.customer_click,o=$phone.val(),console.log("send_user_call run"),console.log("send_user_call url "+e),console.log("send_user_call phone "+o),t.ajax({url:"https://dev.aim-it.com.ua/test-save-json/",type:"POST",data:{url:e,phone:o},dataType:"json"}).done(function(e){console.log(e.is_send),console.log("success")})),t("body").find(".react_modal").addClass("thankyou"),t(".react_modal__body .modal_photo-car").remove(),t(".phones_modal__item").addClass("is-disabled"),t(this).closest(".ab_test_modal").find(".phones_modal_wrap").addClass("thx_wrap").prepend('<div class="thx_holder"><div class="modal_title"><p>Спасибо за вашу заявку!</p></div><div class="info_text"><p>Мы с вами свяжемся в ближайшее время</p></div></div>')),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP sticky button credit",eventAction:"click Pop up loan",eventLabel:"Позвонить мне"}),console.log("Позвонить мне")}),t("body").on("click",".ab_test_modal .phones_modal__item .phone",function(){console.log("clickToCall"),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP sticky button credit",eventAction:"click Pop up loan",eventLabel:"clickToCall"})}),t("body").append('<div class="seller-item-credit '+o.credit_class+'"><a href="#" class="proposition_button_credit">'+o.credit_text+"</a></div>"),t("body").append('<style>.seller-contact_m.fixbar.seller-with-text{z-index:4}.seller-contact_m.fixbar.seller-with-text:after{display:none}.seller-item-credit{width:220px;position:fixed;right:calc(50% - 720px);bottom:80px;z-index:9}@media (max-width:1399px){.seller-item-credit{width:130px;right:15px;bottom:40px}}.proposition_button_credit{background-color:#79be00;color:#fff;border:1px solid #79be00!important;border-radius:5px;text-align:center;width:100%;transition:all .2s linear;font-size:18px;line-height:1;padding:0 15px;height:48px;display:flex;align-items:center}.proposition_button_credit:hover{background-color:#84ca08}@media (max-width:1499px){.proposition_button_credit{height:auto;padding:7px 15px;font-size:16px}}.proposition_area .proposition_lead{flex-wrap:wrap}.proposition_area .proposition_price{width:100%;position:relative;margin-bottom:15px;padding:10px 0;border-bottom:1px solid #e0e3e4}.ab_test_modal{background:rgba(65,64,66,.5)}.ab_test_modal .react_modal__container{border:0;margin:0 auto;top:15px;background:transparent;box-shadow:none;width:calc(100% - 28px)!important;max-width:880px!important}.ab_test_modal .react_modal__header{font-size:0;z-index:9!important;line-height:0;padding:0!important}.ab_test_modal .react_modal__close{top:0;right:5px;left:auto;font-size:28px;padding:10px 0;color:#a0a0a0;text-shadow:none}.ab_test_modal .react_modal__close:before{display:none}.ab_test_modal .react_modal__body{background-color:#fff;padding:30px;display:flex}.ab_test_modal .modal_photo-car{width:432px}.ab_test_modal .modal_photo-car img{width:100%}.ab_test_modal .phones_modal_wrap{padding:0 0 0 25px;width:calc(100% - 432px)}.ab_test_modal .phones_modal__item{text-align:center}.ab_test_modal .be_carefull,.ab_test_modal .phones_modal__item>.mt-10{display:none}.ab_test_modal .modal_title{color:#414042;font-weight:700;padding:0 0 15px;line-height:1.2;font-size:20px;margin-left:-10px;margin-right:-10px}.ab_test_modal .modal_title p{margin:0}.ab_test_modal .text_devider{color:#414042;font-size:16px;position:relative;padding:15px 0}.ab_test_modal .text_devider:after,.ab_test_modal .text_devider:before{content:"";background-color:#9b9b9b;height:1px;width:40px;position:absolute;top:25px}.ab_test_modal .text_devider:before{left:calc(50% - 73px)}.ab_test_modal .text_devider:after{right:calc(50% - 73px)}.ab_test_modal .text_devider p{margin:0}.ab_test_modal .sub_title{color:#414042;font-size:18px;font-weight:700}.ab_test_modal .sub_title p{margin:0}.ab_test_modal .info_text{color:#9b9b9b;font-size:16px;padding:4px 0 10px;line-height:1.2;margin-left:-10px;margin-right:-10px}.ab_test_modal .info_text p{margin:0}.ab_test_modal .modal_form{border-bottom:1px solid #9b9b9b;position:relative;display:flex;flex-wrap:wrap;padding:0 0 20px;margin:0 0 15px}.ab_test_modal .modal_form.error .input_number{border:1px solid #db5c4c;border-right:0;color:#db5c4c}@media (max-width:359px){.ab_test_modal .modal_form.error .input_number{border-right:1px solid #db5c4c}}.ab_test_modal .modal_form.error .input_number::-webkit-input-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .input_number:-moz-placeholder,.ab_test_modal .modal_form.error .input_number::-moz-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .input_number:-ms-input-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .modal_btn{pointer-events:none}.ab_test_modal .modal_form.error svg path{fill:#db5c4c}.ab_test_modal .modal_form svg{position:absolute;top:11px;left:12px}.ab_test_modal .modal_form .error_msg{color:#db5c4c;font-size:12px;text-align:left;margin:5px 0 0}.ab_test_modal .input_number{border-radius:5px 0 0 5px;border:1px solid #9b9b9b;border-right:0;color:#777;font-size:13px;width:calc(100% - 144px);padding:0 15px 0 38px;outline:none}.ab_test_modal .input_number::-webkit-input-placeholder{color:#777}.ab_test_modal .input_number:-moz-placeholder,.ab_test_modal .input_number::-moz-placeholder{color:#777}.ab_test_modal .input_number:-ms-input-placeholder{color:#777}@media (max-width:359px){.ab_test_modal .input_number{border-radius:5px;border-right:1px solid #9b9b9b;padding:10px 15px 10px 38px;width:100%}}.ab_test_modal .modal_btn{color:#fff;border-radius:0 5px 5px 0;border:0;padding:12px;font-size:13px;font-weight:700;width:144px}@media (max-width:359px){.ab_test_modal .modal_btn{border-radius:5px;margin:10px 0 0;width:100%}}.ab_test_modal .show-phone .btn-border{margin:0;font-size:13px;padding:8px 10px;width:100%}@media (min-width:360px){.ab_test_modal .show-phone .btn-border{width:calc(50% - 5px)}}.ab_test_modal .show-phone .btn-border+.btn-border{margin:10px 0 0}@media (min-width:360px){.ab_test_modal .show-phone .btn-border+.btn-border{margin:0 0 0 10px}}.thx_wrap{padding:0 0 17px}.thx_holder{text-align:center}.thx_holder .modal_title{padding:0;font-size:20px}.thx_holder .info_text{padding:4px 0 28px}.is-disabled{display:none}.pdp_modal_backdrop{background:rgba(65,64,66,.5);position:fixed;top:0;bottom:0;left:0;right:0;overflow:auto}.async-hide{opacity:0!important}.thankyou .react_modal__container{max-width:418px!important}.thankyou .react_modal__body{padding:30px 30px 38px}.thankyou .phones_modal_wrap{padding:0;width:100%}.hide_modal,.thankyou .modal_photo-car{display:none}</style>')}window.language_abtest={credit_text:"Узнать об условиях кредитования",credit_class:"v-2"},window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});