function abjql(e){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,e())}:o.onload=function(){e()},o.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(o)}function abjqlr(t){var e=window.language_abtest;console.log("%cTest come","background:red;color:wite;");window.customer_click=location.href,console.log("customer_click is "+window.customer_click),t(document).on("click",".proposition_button_credit",function(){t("#mobile-call > a.button").get(0).click(),t("body").find(".mobile_call_wrap .seller-contact").addClass("ab_test_modal");var e=t(".image-gallery .image-gallery-slide:first-child .image-gallery-image picture").html();t(".ab_test_modal").length&&(t(".ab_test_modal").prepend('<a href="#" class="button-option mobile-cancel-call-2" data-button="cancel">×</a>'),t(".ab_test_modal").prepend('<div class="pdp_modal_backdrop"></div>'),t(".ab_test_modal .seller-overlay").prepend('<div class="modal_title"><p>Узнать о кредитных предложениях на этот автомобиль можно телефону:</p></div>'),t(".ab_test_modal .seller-overlay").prepend('<div class="modal_photo-car">'+e+"</div>"),t("body").find(".ab_test_modal .rate-call .btn_success").html("Успешный звонок"),t("body").find(".ab_test_modal .rate-call .btn_reported").html("Пожаловаться"),t(".ab_test_modal .rate-call").prepend('<form class="modal_form" id="example-form"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.26705 0.980004C2.43105 0.815985 2.62805 0.688713 2.84499 0.606631C3.06192 0.524549 3.29383 0.489534 3.52533 0.503908C3.75683 0.518282 3.98263 0.581717 4.18774 0.690004C4.39286 0.798292 4.5726 0.948957 4.71505 1.132L6.39605 3.294C6.70505 3.69 6.81405 4.207 6.69205 4.694L6.17905 6.747C6.15237 6.85353 6.15373 6.96515 6.183 7.071C6.21226 7.17685 6.26844 7.27331 6.34605 7.351L8.65005 9.654C8.72774 9.73162 8.82421 9.78779 8.93005 9.81706C9.0359 9.84632 9.14752 9.84768 9.25405 9.821L11.3061 9.308C11.5467 9.24789 11.7979 9.2433 12.0407 9.29458C12.2834 9.34587 12.5113 9.45167 12.7071 9.604L14.8691 11.285C15.6461 11.889 15.7181 13.038 15.0221 13.733L14.0521 14.703C13.3591 15.396 12.3221 15.701 11.3551 15.361C8.88146 14.4903 6.6356 13.074 4.78405 11.217C2.92669 9.36555 1.51 7.11969 0.639051 4.646C0.299051 3.679 0.604051 2.642 1.29705 1.948L2.26705 0.979004V0.980004Z" fill="#9B9B9B"/></svg> <input placeholder="(000) 000 00 00" class="input_number" maxlength="15"><button type="button" class="modal_btn button--green">Позвонить мне</button></form>'),t(".ab_test_modal .rate-call").prepend('<div class="info_text"><p>мы перезвоним и дадим информацию по кредитам</p></div>'),t(".ab_test_modal .rate-call").prepend('<div class="sub_title"><p>оставьте свой номер телефона</p></div>'),t(".ab_test_modal .rate-call").prepend('<div class="text_devider"><p>или</p></div>'))}),t("body").on("click",".ab_test_modal .mobile-cancel-call-2, .pdp_modal_backdrop",function(){t("#mobile-cancel-call").get(0).click()}),t("body").on("click",".ab_test_modal .rate-call .btn_success, .ab_test_modal .rate-call .btn_reported, .ab_test_modal .mobile-cancel-call-2, .pdp_modal_backdrop",function(){t("body").find(".seller-contact").removeClass("ab_test_modal"),t(".seller-contact .modal_photo-car").remove(),t(".seller-contact .modal_title").remove(),t(".seller-contact .text_devider").remove(),t(".seller-contact .sub_title").remove(),t(".seller-contact .info_text").remove(),t(".seller-contact .modal_form").remove(),t(".seller-overlay").removeClass("thx_wrap"),t(".seller-overlay .thx_holder").remove(),t(".mobile-cancel-call-2").remove(),t(".pdp_modal_backdrop").remove()}),t(document).on("keydown keyup input",".input_number",function(e){var o=e.charCode||e.keyCode||0;return $phone=t(this),8!==o&&9!==o&&(0===$phone.val().length&&$phone.val($phone.val()+"("),4===$phone.val().length&&$phone.val($phone.val()+")"),5===$phone.val().length&&$phone.val($phone.val()+" "),9===$phone.val().length&&$phone.val($phone.val()+" "),12===$phone.val().length&&$phone.val($phone.val()+" ")),15===$phone.val().length&&(t(this).closest(".modal_form").removeClass("error"),t(this).closest(".modal_form").find(".error_msg").remove()),8!=o&&9!=o||$phone.val(""),8==o||9==o||46==o||48<=o&&o<=57||96<=o&&o<=105}),t(document).on("focus click",".input_number",function(e){var o;$phone=t(this),0===$phone.val().length?$phone.val("("):(o=$phone.val(),$phone.val("").val(o))}),t(document).on("blur",".input_number",function(e){$phone=t(this),"("===$phone.val()&&$phone.val(""),$phone.val().length<15?(t(this).closest(".modal_form").addClass("error"),t(".error_msg").length<1&&t(this).closest(".modal_form").append('<p class="error_msg">Мобильный телефон некорректен. Пример 0931234567</p>')):(t(this).closest(".modal_form").removeClass("error"),t(this).closest(".modal_form").find(".error_msg").remove())}),t(document).on("click",".modal_btn",function(){var e,o;$phone=t(".input_number"),$phone.val().length<15?(t(this).closest(".modal_form").addClass("error"),t(".error_msg").length<1&&t(this).closest(".modal_form").append('<p class="error_msg">Мобильный телефон некорректен. Пример 0931234567</p>')):(t(this).closest(".modal_form").removeClass("error"),t(this).closest(".modal_form").find(".error_msg").remove(),console.log($phone.val()),window.customer_click&&(e=window.customer_click,o=$phone.val(),console.log("send_user_call run"),console.log("send_user_call url "+e),console.log("send_user_call phone "+o),t.ajax({url:"https://dev.aim-it.com.ua/test-save-json/",type:"POST",data:{url:e,phone:o},dataType:"json"}).done(function(e){console.log(e.is_send),console.log("success")})),t(".seller-contact .modal_photo-car").remove(),t(".seller-contact .modal_title").remove(),t(".seller-contact .text_devider").remove(),t(".seller-contact .sub_title").remove(),t(".seller-contact .info_text").remove(),t(".seller-contact .modal_form").remove(),t(".ab_test_modal .seller-overlay .optionsset:first-child").addClass("is-disabled"),t(".ab_test_modal").find(".seller-overlay").addClass("thx_wrap").prepend('<div class="thx_holder"><div class="modal_title"><p>Спасибо за вашу заявку!</p></div><div class="info_text"><p>Мы с вами свяжемся в ближайшее время</p></div></div>'))}),t("body").find(".seller-contact_m.fixbar").append('<div class="seller-item-credit '+e.credit_class+'"><a href="#" class="proposition_button_credit">'+e.credit_text+"</a></div>"),t("body").append('<style>.seller-contact_m.fixbar.seller-with-text{z-index:4}.seller-contact_m.fixbar.seller-with-text:after{display:none}.seller-item-credit{padding:0 15px;width:100%}.proposition_button_credit{background-color:#fff;color:#79be00;font-size:16px;line-height:36px;display:inline-block;border:1px solid #79be00!important;border-radius:5px;text-align:center;width:100%;margin:6px 0 10px}.proposition_area .proposition_lead{flex-wrap:wrap}.proposition_area .proposition_price{width:100%;position:relative;margin-bottom:15px;padding:10px 0;border-bottom:1px solid #e0e3e4}.ab_test_modal{background:transparent}.ab_test_modal .seller-overlay{background-color:#fff;margin:0 auto;top:45px;bottom:auto;max-height:calc(100vh - 60px);width:calc(100% - 28px)!important;left:0;right:0;padding:14px;overflow-y:auto;z-index:1001}.ab_test_modal .seller-overlay .modal_photo-car{max-height:228px;overflow:hidden}.ab_test_modal .seller-overlay .phone_show_link{color:#3c9806;font-size:30px;font-weight:700}.ab_test_modal.seller-contact .optionsset{margin:0}.ab_test_modal.seller-contact .rate-call label{display:none}.ab_test_modal.seller-contact .rate-call .boxed{width:calc(50% - 5px);margin:0}.ab_test_modal.seller-contact .rate-call .boxed .button-option{background-color:#fff;font-size:13px;line-height:35px;width:100%}.ab_test_modal.seller-contact .rate-call .boxed .button-option.btn_success{border:1px solid #3c9806;color:#3c9806}.ab_test_modal.seller-contact .rate-call .boxed .button-option.btn_reported{border:1px solid #db5c4c;color:#db5c4c}.ab_test_modal.seller-contact .rate-call .boxed+.boxed{margin-left:10px}.ab_test_modal #mobile-cancel-call{display:none}.ab_test_modal .mobile-cancel-call-2{position:absolute;top:7px;z-index:999;right:0;width:40px;height:40px;font-size:46px;background:transparent;color:#fff}.ab_test_modal .modal_title{color:#414042;font-size:17px;font-weight:700;margin-left:-10px;margin-right:-10px;padding:24px 0 11px;line-height:1.2}.ab_test_modal .modal_title p{margin:0}.ab_test_modal .text_devider{color:#414042;font-size:16px;position:relative;padding:10px 0 9px}.ab_test_modal .text_devider:after,.ab_test_modal .text_devider:before{content:"";background-color:#9b9b9b;height:1px;width:40px;position:absolute;top:20px}.ab_test_modal .text_devider:before{left:87px}.ab_test_modal .text_devider:after{right:87px}.ab_test_modal .text_devider p{margin:0}.ab_test_modal .sub_title{color:#414042;font-size:17px;font-weight:700}.ab_test_modal .sub_title p{margin:0}.ab_test_modal .info_text{color:#9b9b9b;font-size:16px;padding:4px 0 10px;line-height:1.2}.ab_test_modal .info_text p{margin:0}.ab_test_modal .modal_form{border-bottom:1px solid #9b9b9b;display:flex;flex-wrap:wrap;padding:0 0 12px;margin:0 0 12px;position:relative}.ab_test_modal .modal_form.error .input_number{border:1px solid #db5c4c;border-right:0;color:#db5c4c}@media (max-width:359px){.ab_test_modal .modal_form.error .input_number{border-right:1px solid #db5c4c}}.ab_test_modal .modal_form.error .input_number::-webkit-input-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .input_number:-moz-placeholder,.ab_test_modal .modal_form.error .input_number::-moz-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .input_number:-ms-input-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .modal_btn{pointer-events:none}.ab_test_modal .modal_form.error svg path{fill:#db5c4c}.ab_test_modal .modal_form svg{position:absolute;top:11px;left:12px}.ab_test_modal .modal_form .error_msg{color:#db5c4c;font-size:12px;text-align:left;margin:5px 0 0}.ab_test_modal .input_number{border-radius:5px 0 0 5px;border:1px solid #9b9b9b;border-right:0;color:#777;font-size:13px;width:calc(100% - 144px);padding:0 15px 0 38px;outline:none}.ab_test_modal .input_number::-webkit-input-placeholder{color:#777}.ab_test_modal .input_number:-moz-placeholder,.ab_test_modal .input_number::-moz-placeholder{color:#777}.ab_test_modal .input_number:-ms-input-placeholder{color:#777}@media (max-width:359px){.ab_test_modal .input_number{border-radius:5px;border-right:1px solid #9b9b9b;padding:10px 15px 10px 38px;width:100%}}.ab_test_modal .modal_btn{color:#fff;border-radius:0 5px 5px 0;border:0;padding:12px;font-size:13px;font-weight:700;width:144px;outline:none}@media (max-width:359px){.ab_test_modal .modal_btn{border-radius:5px;margin:10px 0 0;width:100%}}.thx_wrap{padding:0 0 17px}.thx_holder{text-align:center}.thx_holder .modal_title{padding:16px 0 11px}.thx_holder .info_text{padding:4px 0 28px}.is-disabled{display:none}.pdp_modal_backdrop{background:rgba(65,64,66,.5);position:fixed;top:0;bottom:0;left:0;right:0;overflow:auto}</style>')}window.language_abtest={credit_text:"Узнать о кредитах на это авто",credit_class:"v-1"},window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});