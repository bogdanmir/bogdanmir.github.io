function abjql(e){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,e())}:o.onload=function(){e()},o.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(o)}function abjqlr(t){var a=window.language_abtest;console.log("%cTest come","background:red;color:wite;");var e,o,n,d,l,i,r,s,p,_;window.customer_click=!1;try{e=window,o=document,e.hj=e.hj||function(){(e.hj.q=e.hj.q||[]).push(arguments)},e._hjSettings={hjid:1953436,hjsv:6},n=o.getElementsByTagName("head")[0],(d=o.createElement("script")).async=1,d.src="https://static.hotjar.com/c/hotjar-"+e._hjSettings.hjid+".js?sv="+e._hjSettings.hjsv,n.appendChild(d),window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)},hj("trigger","pl_enguire_about_credit_offer")}catch(e){}l=window,i=document.documentElement,r="async-hide",s="dataLayer",p={"GTM-P46SHG8":!0},i.className+=" "+r,p.start=+new Date,p.end=_=function(){i.className=i.className.replace(RegExp(" ?"+r),"")},(l[s]=l[s]||[]).hide=p,setTimeout(function(){_(),p.end=null},0),p.timeout=0,window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"loaded"}),t("body").on("click",".proposition_area .button--green",function(){void 0!==window.display_info&&clearInterval(window.display_info),t("body").find(".react_modal").removeClass("ab_test_modal")}),t("body").on("click",".proposition_button_credit",function(){t(this).closest(".proposition_lead").find(".button--credit").trigger("click"),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"open popup",eventLabel:a.events_label}),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"view popup",eventLabel:a.events_label}),console.log("open popup"),console.log("view popup"),console.log(a.events_label),window.customer_click=t(this).closest(".proposition").find(".proposition_name a").attr("href"),window.element_in_popup=t(this),void 0!==window.display_info&&clearInterval(window.display_info);var e=window.element_in_popup.closest(".proposition").find(".proposition_photo .photo-car:first-child picture").html();window.display_info=setInterval(function(){0==t(".ab_test_modal").length&&t("body").find(".react_modal").addClass("ab_test_modal"),t(".ab_test_modal").length&&(0==t(".ab_test_modal .modal_title").length&&(t(".ab_test_modal .phones_modal__item").prepend('<div class="modal_title"><p>Узнать о кредитных предложениях на этот автомобиль можно по телефону:</p></div>'),0<t(".ab_test_modal .phones_modal__item").length&&t(".ab_test_modal .react_modal__body").prepend('<div class="modal_photo-car">'+e+"</div>")),0==t(".ab_test_modal .modal_form").length&&(t(".ab_test_modal .phones_modal__item").append('<div class="text_devider"><p>или</p></div>'),t(".ab_test_modal .phones_modal__item").append('<div class="sub_title"><p>оставьте свой номер телефона</p></div>'),t(".ab_test_modal .phones_modal__item").append('<div class="info_text"><p>мы перезвоним и дадим информацию по кредитам</p></div>'),t(".ab_test_modal .phones_modal__item").append('<form class="modal_form" id="example-form"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.26705 0.980004C2.43105 0.815985 2.62805 0.688713 2.84499 0.606631C3.06192 0.524549 3.29383 0.489534 3.52533 0.503908C3.75683 0.518282 3.98263 0.581717 4.18774 0.690004C4.39286 0.798292 4.5726 0.948957 4.71505 1.132L6.39605 3.294C6.70505 3.69 6.81405 4.207 6.69205 4.694L6.17905 6.747C6.15237 6.85353 6.15373 6.96515 6.183 7.071C6.21226 7.17685 6.26844 7.27331 6.34605 7.351L8.65005 9.654C8.72774 9.73162 8.82421 9.78779 8.93005 9.81706C9.0359 9.84632 9.14752 9.84768 9.25405 9.821L11.3061 9.308C11.5467 9.24789 11.7979 9.2433 12.0407 9.29458C12.2834 9.34587 12.5113 9.45167 12.7071 9.604L14.8691 11.285C15.6461 11.889 15.7181 13.038 15.0221 13.733L14.0521 14.703C13.3591 15.396 12.3221 15.701 11.3551 15.361C8.88146 14.4903 6.6356 13.074 4.78405 11.217C2.92669 9.36555 1.51 7.11969 0.639051 4.646C0.299051 3.679 0.604051 2.642 1.29705 1.948L2.26705 0.979004V0.980004Z" fill="#9B9B9B"/></svg> <input placeholder="(000) 000 00 00" class="input_number" maxlength="15"><button type="button" class="modal_btn button--green">Позвонить мне</button></form>')))})}),t("body").on("click",".react_modal__close, .react_modal__backdrop",function(){void 0!==window.display_info&&clearInterval(window.display_info),window.customer_click=!1,t("body").find(".react_modal").removeClass("ab_test_modal"),t("body").find(".react_modal").addClass("hide_modal"),t(".react_modal .modal_photo-car").remove(),t(".react_modal .modal_title").remove(),t(".react_modal .text_devider").remove(),t(".react_modal .sub_title").remove(),t(".react_modal .info_text").remove(),t(".react_modal .modal_form").remove()}),t("body").on("click",".ab_test_modal .react_modal__body .btn-border",function(){void 0!==window.display_info&&clearInterval(window.display_info),t("body").find(".ab_test_modal").hasClass("thankyou")?(t(this).hasClass("btn-border--red")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"TY - click on button Пожаловаться",eventLabel:a.events_label}),console.log("click on button Пожаловаться thank you"),console.log(a.events_label)),t(this).hasClass("btn-border--green")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"TY - click on button Успешный звонок",eventLabel:a.events_label}),console.log("click on button Успешный звонок thank you"),console.log(a.events_label))):(t(this).hasClass("btn-border--red")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"click on button Пожаловаться",eventLabel:a.events_label}),console.log("click on button Пожаловаться"),console.log(a.events_label)),t(this).hasClass("btn-border--green")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"click on button Успешный звонок",eventLabel:a.events_label}),console.log("click on button Успешный звонок"),console.log(a.events_label))),t("body").find(".react_modal").removeClass("ab_test_modal"),t(".react_modal__body .modal_photo-car").remove(),t(".phones_modal_wrap").removeClass("thx_wrap"),t(".react_modal__body .thx_holder").remove()}),t(document).on("keydown keyup input",".input_number",function(e){var o=e.charCode||e.keyCode||0;return $phone=t(this),8!==o&&9!==o&&(0===$phone.val().length&&$phone.val($phone.val()+"("),4===$phone.val().length&&$phone.val($phone.val()+")"),5===$phone.val().length&&$phone.val($phone.val()+" "),9===$phone.val().length&&$phone.val($phone.val()+" "),12===$phone.val().length&&$phone.val($phone.val()+" ")),15===$phone.val().length&&(t(this).closest(".modal_form").removeClass("error"),t(this).closest(".modal_form").find(".error_msg").remove()),8!=o&&9!=o||$phone.val(""),8==o||9==o||46==o||48<=o&&o<=57||96<=o&&o<=105}),t(document).on("focus click",".input_number",function(e){var o;$phone=t(this),0===$phone.val().length?$phone.val("("):(o=$phone.val(),$phone.val("").val(o))}),t(document).on("blur",".input_number",function(e){$phone=t(this),"("===$phone.val()&&$phone.val(""),$phone.val().length<15?(t(this).closest(".modal_form").addClass("error"),t(".error_msg").length<1&&t(this).closest(".modal_form").append('<p class="error_msg">Мобильный телефон некорректен. Пример 0931234567</p>')):(t(this).closest(".modal_form").removeClass("error"),t(this).closest(".modal_form").find(".error_msg").remove())}),t(document).on("click",".modal_btn",function(){var e,o;$phone=t(".input_number"),$phone.val().length<15?(t(this).closest(".modal_form").addClass("error"),t(".error_msg").length<1&&t(this).closest(".modal_form").append('<p class="error_msg">Мобильный телефон некорректен. Пример 0931234567</p>')):(t(this).closest(".modal_form").removeClass("error"),t(this).closest(".modal_form").find(".error_msg").remove(),console.log($phone.val()),window.customer_click&&(e=window.customer_click,o=$phone.val(),console.log("send_user_call run"),console.log("send_user_call url "+e),console.log("send_user_call phone "+o),t.ajax({url:"https://dev.aim-it.com.ua/test-save-json/",type:"POST",data:{url:e,phone:o},dataType:"json"}).done(function(e){console.log(e.is_send),console.log("success")})),t("body").find(".react_modal").addClass("thankyou"),t(".react_modal__body .modal_photo-car").remove(),t(".phones_modal__item").addClass("is-disabled"),t(this).closest(".ab_test_modal").find(".phones_modal_wrap").addClass("thx_wrap").prepend('<div class="thx_holder"><div class="modal_title"><p>Спасибо за вашу заявку!</p></div><div class="info_text"><p>Мы с вами свяжемся в ближайшее время</p></div></div>')),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"click on button Позвонить мне",eventLabel:a.events_label}),console.log("click on button Позвонить мне")}),t(document).on("click",".ab_test_modal:not(.thankyou) .react_modal__backdrop",function(e){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"close popup",eventLabel:a.events_label}),console.log("not thankyou close popup")}),t(document).on("click",".ab_test_modal:not(.thankyou) .react_modal__close",function(e){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"close popup",eventLabel:a.events_label}),console.log("not thankyou close popup")}),t(document).on("click",".thankyou .react_modal__backdrop,.thankyou .react_modal__close",function(e){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PL - enguire about credit offer",eventAction:"close TY popup",eventLabel:a.events_label}),console.log("close popup thank you")}),setInterval(function(){0==t(".proposition_button_credit").length&&t("body").find(".proposition_area .proposition_lead .proposition_price").after('<div class="proposition_button_credit '+a.credit_class+'"><span class="" data-layer-v="27500">'+a.credit_text+"</span></div>")}),t("body").append('<style>.proposition_area .proposition_lead{flex-wrap:wrap}.proposition_area .proposition_price{width:100%;position:relative;margin-bottom:15px;padding:10px 0;border-bottom:1px solid #e0e3e4}.proposition_button_credit{color:#79be00;font-weight:700;font-size:12px;border:1px solid #79be00;border-radius:5px;background:rgba(121,190,0,.07);padding:11px 2px;text-align:center;margin:0 0 10px;width:100%}@media (min-width:370px){.proposition_button_credit{width:calc(100% - 128px);margin:0;font-size:12px}}.proposition_lead .proposition_button{width:100%;max-width:100%}.proposition_lead .proposition_button:first-child{display:none}@media (min-width:370px){.proposition_lead .proposition_button{width:120px;max-width:120px}}.proposition_lead .proposition_button .svg{margin-right:3px;font-size:14px}.proposition_lead--buttons .proposition_button:last-of-type{width:100%;max-width:100%}@media (min-width:370px){.proposition_lead--buttons .proposition_button:last-of-type{width:120px;max-width:120px}}@media (min-width:370px){.proposition_lead--buttons .proposition_button:last-of-type .size13{font-size:12px}}.ab_test_modal{background:rgba(65,64,66,.5)}.ab_test_modal .react_modal__container{width:calc(100% - 28px)!important;margin:0 auto;top:15px}.ab_test_modal .react_modal__header{font-size:0}.ab_test_modal .react_modal__close{right:0;left:auto;font-size:46px;padding:10px 0;color:#fff}.ab_test_modal .react_modal__close:before{display:none}.ab_test_modal .react_modal__body{background-color:#fff;padding:14px;z-index:999}.ab_test_modal .phones_modal__item{text-align:center}.ab_test_modal .modal_title{color:#414042;font-size:17px;font-weight:700;margin-left:-10px;margin-right:-10px;padding:24px 0 11px;line-height:1.2}.ab_test_modal .modal_title p{margin:0}.ab_test_modal .be_carefull{display:none}.ab_test_modal .text_devider{color:#414042;font-size:16px;position:relative;padding:10px 0 9px}.ab_test_modal .text_devider:after,.ab_test_modal .text_devider:before{content:"";background-color:#9b9b9b;height:1px;width:40px;position:absolute;top:20px}.ab_test_modal .text_devider:before{left:calc(50% - 73px)}.ab_test_modal .text_devider:after{right:calc(50% - 73px)}.ab_test_modal .text_devider p{margin:0}.ab_test_modal .sub_title{color:#414042;font-size:17px;font-weight:700}.ab_test_modal .sub_title p{margin:0}.ab_test_modal .info_text{color:#9b9b9b;font-size:16px;padding:4px 0 10px;line-height:1.2}.ab_test_modal .info_text p{margin:0}.ab_test_modal .modal_form{border-bottom:1px solid #9b9b9b;position:relative;display:flex;flex-wrap:wrap;padding:0 0 12px;margin:0 0 12px}.ab_test_modal .modal_form.error .input_number{border:1px solid #db5c4c;border-right:0;color:#db5c4c}@media (max-width:359px){.ab_test_modal .modal_form.error .input_number{border-right:1px solid #db5c4c}}.ab_test_modal .modal_form.error .input_number::-webkit-input-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .input_number:-moz-placeholder,.ab_test_modal .modal_form.error .input_number::-moz-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .input_number:-ms-input-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .modal_btn{pointer-events:none}.ab_test_modal .modal_form.error svg path{fill:#db5c4c}.ab_test_modal .modal_form svg{position:absolute;top:11px;left:12px}.ab_test_modal .modal_form .error_msg{color:#db5c4c;font-size:12px;text-align:left;margin:5px 0 0}.ab_test_modal .input_number{border-radius:5px 0 0 5px;border:1px solid #9b9b9b;border-right:0;color:#777;font-size:13px;width:calc(100% - 144px);padding:0 15px 0 38px;outline:none}.ab_test_modal .input_number::-webkit-input-placeholder{color:#777}.ab_test_modal .input_number:-moz-placeholder,.ab_test_modal .input_number::-moz-placeholder{color:#777}.ab_test_modal .input_number:-ms-input-placeholder{color:#777}@media (max-width:359px){.ab_test_modal .input_number{border-radius:5px;border-right:1px solid #9b9b9b;padding:10px 15px 10px 38px;width:100%}}.ab_test_modal .modal_btn{color:#fff;border-radius:0 5px 5px 0;border:0;padding:12px;font-size:13px;font-weight:700;width:144px}@media (max-width:359px){.ab_test_modal .modal_btn{border-radius:5px;margin:10px 0 0;width:100%}}.ab_test_modal .show-phone .btn-border{margin:0;font-size:13px;padding:8px 10px;width:100%}@media (min-width:370px){.ab_test_modal .show-phone .btn-border{width:calc(50% - 5px)}}.ab_test_modal .show-phone .btn-border+.btn-border{margin:10px 0 0}@media (min-width:370px){.ab_test_modal .show-phone .btn-border+.btn-border{margin:0 0 0 10px}}.ab_test_modal .react_modal__backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99}.thx_wrap{padding:0 0 17px}.thx_holder{text-align:center}.thx_holder .modal_title{padding:16px 0 11px}.thx_holder .info_text{padding:4px 0 28px}.is-disabled{display:none}.async-hide{opacity:0!important}.thankyou .modal_photo-car{display:none}.hide_modal{display:none!important}</style>')}window.language_abtest={credit_text:"Узнать о кредитах на это авто",credit_class:"v-1",events_label:"Test B: Узнать о кредитах на это авто"},window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});