function abjql(o){var e=document.createElement("script");e.type="text/javascript",e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,o())}:e.onload=function(){o()},e.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(e)}function abjqlr(t){window.language_abtest;console.log("%cTest come","background:red;color:wite;");window.customer_click=!1,t("body").on("click",".proposition_button_credit",function(){t(this).closest(".proposition_lead").find(".proposition_button .button").trigger("click"),window.customer_click=t(this).closest(".proposition").find(".proposition_name a").attr("href"),t("body").find(".react_modal").addClass("ab_test_modal");var o=t(this).closest(".proposition").find(".proposition_photo .photo-car:first-child picture").html();t(".ab_test_modal").length&&(t(".ab_test_modal .react_modal__body").prepend('<div class="modal_photo-car">'+o+"</div>"),t(".ab_test_modal .phones_modal__item").prepend('<div class="modal_title"><p>Узнать о кредитных предложениях на этот автомобиль можно телефону:</p></div>'),t(".ab_test_modal .phones_modal__item").append('<div class="text_devider"><p>или</p></div>'),t(".ab_test_modal .phones_modal__item").append('<div class="sub_title"><p>оставьте свой номер телефона</p></div>'),t(".ab_test_modal .phones_modal__item").append('<div class="info_text"><p>мы перезвоним и дадим информацию по кредитам</p></div>'),t(".ab_test_modal .phones_modal__item").append('<form class="modal_form" id="example-form"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.26705 0.980004C2.43105 0.815985 2.62805 0.688713 2.84499 0.606631C3.06192 0.524549 3.29383 0.489534 3.52533 0.503908C3.75683 0.518282 3.98263 0.581717 4.18774 0.690004C4.39286 0.798292 4.5726 0.948957 4.71505 1.132L6.39605 3.294C6.70505 3.69 6.81405 4.207 6.69205 4.694L6.17905 6.747C6.15237 6.85353 6.15373 6.96515 6.183 7.071C6.21226 7.17685 6.26844 7.27331 6.34605 7.351L8.65005 9.654C8.72774 9.73162 8.82421 9.78779 8.93005 9.81706C9.0359 9.84632 9.14752 9.84768 9.25405 9.821L11.3061 9.308C11.5467 9.24789 11.7979 9.2433 12.0407 9.29458C12.2834 9.34587 12.5113 9.45167 12.7071 9.604L14.8691 11.285C15.6461 11.889 15.7181 13.038 15.0221 13.733L14.0521 14.703C13.3591 15.396 12.3221 15.701 11.3551 15.361C8.88146 14.4903 6.6356 13.074 4.78405 11.217C2.92669 9.36555 1.51 7.11969 0.639051 4.646C0.299051 3.679 0.604051 2.642 1.29705 1.948L2.26705 0.979004V0.980004Z" fill="#9B9B9B"/></svg> <input placeholder="(000) 000 00 00" class="input_number" maxlength="15"><button type="button" class="modal_btn button--green">Позвонить мне</button></form>'))}),t("body").on("click",".react_modal__close, .react_modal__backdrop",function(){window.customer_click=!1}),t("body").on("click",".ab_test_modal .react_modal__body .btn-border",function(){t("body").find(".react_modal").removeClass("ab_test_modal"),t(".react_modal__body .modal_photo-car").remove(),t(".phones_modal_wrap").removeClass("thx_wrap"),t(".react_modal__body .thx_holder").remove()}),t(document).on("keydown keyup input",".input_number",function(o){var e=o.charCode||o.keyCode||0;return console.log(o),$phone=t(this),8!==e&&9!==e&&(0===$phone.val().length&&$phone.val($phone.val()+"("),4===$phone.val().length&&$phone.val($phone.val()+")"),5===$phone.val().length&&$phone.val($phone.val()+" "),9===$phone.val().length&&$phone.val($phone.val()+" "),12===$phone.val().length&&$phone.val($phone.val()+" ")),15===$phone.val().length&&t(this).closest(".modal_form").removeClass("error"),8!=e&&9!=e||$phone.val(""),8==e||9==e||46==e||48<=e&&e<=57||96<=e&&e<=105}),t(document).on("focus click",".input_number",function(o){var e;$phone=t(this),0===$phone.val().length?$phone.val("("):(e=$phone.val(),$phone.val("").val(e))}),t(document).on("blur",".input_number",function(o){$phone=t(this),"("===$phone.val()&&$phone.val(""),$phone.val().length<15?t(this).closest(".modal_form").addClass("error"):t(this).closest(".modal_form").removeClass("error"),console.log($phone.val().length)}),t(document).on("click",".modal_btn",function(){var o,e;$phone=t(".input_number"),$phone.val().length<15?t(this).closest(".modal_form").addClass("error"):(t(this).closest(".modal_form").removeClass("error"),console.log($phone.val()),window.customer_click&&(o=window.customer_click,e=$phone.val(),console.log("send_user_call run"),console.log("send_user_call url "+o),console.log("send_user_call phone "+e),t.ajax({url:"https://dev.aim-it.com.ua/test-save-json",type:"POST",data:{url:o,phone:e},dataType:"json"}).done(function(o){console.log(o.is_send),console.log("success")})),t(".react_modal__body .modal_photo-car").remove(),t(".phones_modal__item").addClass("is-disabled"),t(this).closest(".ab_test_modal").find(".phones_modal_wrap").addClass("thx_wrap").prepend('<div class="thx_holder"><div class="modal_title"><p>Спасибо за вашу заявку!</p></div><div class="info_text"><p>Мы с вами свяжемся в ближайшее время</p></div></div>'))}),t("body").find(".proposition_area .proposition_lead .proposition_price").after('<div class="proposition_button_credit"><span class="" data-gaq="calls" data-tm="phone-commercial" data-layer-v="27500">Узнать о кредитах на это авто</span></div>'),t("body").append('<style>.proposition_area .proposition_lead{flex-wrap:wrap}.proposition_area .proposition_price{width:100%;position:relative;margin-bottom:15px;padding:10px 0;border-bottom:1px solid #e0e3e4}.proposition_button_credit{color:#79be00;font-weight:700;font-size:12px;border:1px solid #79be00;border-radius:5px;background:rgba(121,190,0,.07);padding:11px 9px}.ab_test_modal{background:rgba(65,64,66,.5)}.ab_test_modal .react_modal__container{width:calc(100% - 28px)!important;margin:0 auto;top:15px}.ab_test_modal .react_modal__header{font-size:0}.ab_test_modal .react_modal__close{right:0;left:auto;font-size:46px;padding:10px 0;color:#fff}.ab_test_modal .react_modal__close:before{display:none}.ab_test_modal .react_modal__body{background-color:#fff;padding:14px}.ab_test_modal .phones_modal__item{text-align:center}.ab_test_modal .modal_title{color:#414042;font-size:17px;font-weight:700;margin-left:-10px;margin-right:-10px;padding:24px 0 11px;line-height:1.2}.ab_test_modal .modal_title p{margin:0}.ab_test_modal .be_carefull{display:none}.ab_test_modal .text_devider{color:#414042;font-size:16px;position:relative;padding:10px 0 9px}.ab_test_modal .text_devider:after,.ab_test_modal .text_devider:before{content:"";background-color:#9b9b9b;height:1px;width:40px;position:absolute;top:20px}.ab_test_modal .text_devider:before{left:87px}.ab_test_modal .text_devider:after{right:87px}.ab_test_modal .text_devider p{margin:0}.ab_test_modal .sub_title{color:#414042;font-size:17px;font-weight:700}.ab_test_modal .sub_title p{margin:0}.ab_test_modal .info_text{color:#9b9b9b;font-size:16px;padding:4px 0 10px;line-height:1.2}.ab_test_modal .info_text p{margin:0}.ab_test_modal .modal_form{border-bottom:1px solid #9b9b9b;display:flex;padding:0 0 12px;margin:0 0 12px;position:relative}.ab_test_modal .modal_form.error .input_number{border:1px solid #db5c4c}.ab_test_modal .modal_form.error .modal_btn{pointer-events:none;background-color:#79be0094}.ab_test_modal .modal_form svg{position:absolute;top:11px;left:12px}.ab_test_modal .input_number{border-radius:5px 0 0 5px;border:1px solid #9b9b9b;color:#777;font-size:13px;width:calc(100% - 144px);padding:0 15px 0 38px;outline:none}.ab_test_modal .input_number::-webkit-input-placeholder{color:#777}.ab_test_modal .input_number:-moz-placeholder,.ab_test_modal .input_number::-moz-placeholder{color:#777}.ab_test_modal .input_number:-ms-input-placeholder{color:#777}.ab_test_modal .modal_btn{color:#fff;border-radius:0 5px 5px 0;border:0;padding:12px;font-size:13px;font-weight:700;width:144px}.ab_test_modal .show-phone .btn-border{margin:0;font-size:13px;padding:8px 10px;width:calc(50% - 5px)}.ab_test_modal .show-phone .btn-border+.btn-border{margin-left:10px}.thx_wrap{padding:0 0 17px}.thx_holder{text-align:center}.thx_holder .modal_title{padding:16px 0 11px}.thx_holder .info_text{padding:4px 0 28px}.is-disabled{display:none}</style>')}window.language_abtest={some_slug:"Lorem Ipsum"},window.jQuery?jQuery(function(o){abjqlr(o)}):abjql(function(){jQuery(function(o){abjqlr(o)})});