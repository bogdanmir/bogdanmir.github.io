function abjql(e){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,e())}:o.onload=function(){e()},o.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(o)}function abjqlr(a){var e=window.language_abtest;console.log("%cTest come","background:red;color:wite;");var o,t,d,n,l,r,i,s,p,_;window.customer_click=location.href,console.log("customer_click is "+window.customer_click);try{o=window,t=document,o.hj=o.hj||function(){(o.hj.q=o.hj.q||[]).push(arguments)},o._hjSettings={hjid:1953436,hjsv:6},d=t.getElementsByTagName("head")[0],(n=t.createElement("script")).async=1,n.src="https://static.hotjar.com/c/hotjar-"+o._hjSettings.hjid+".js?sv="+o._hjSettings.hjsv,d.appendChild(n),window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)},hj("trigger","pdp_highly_demand_banner")}catch(e){}l=window,r=document.documentElement,i="async-hide",s="dataLayer",p={"GTM-P46SHG8":!0},r.className+=" "+i,p.start=+new Date,p.end=_=function(){r.className=r.className.replace(RegExp(" ?"+i),"")},(l[s]=l[s]||[]).hide=p,setTimeout(function(){_(),p.end=null},0),p.timeout=0,window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"pdp highly demand banner",eventAction:"loaded"}),console.log("loaded"),a(document).on("click",".high-demand-wrap",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP highly demand banner",eventAction:"Уточнить о наличии"}),console.log("Уточнить о наличии"),document.querySelectorAll("#react_phones_bottom .phones_item:first-child .cro-button")[0].click();var e=a(".image-gallery .image-gallery-slide:first-child .image-gallery-image picture").html();void 0!==window.display_info&&clearInterval(window.display_info),window.display_info=setInterval(function(){0==a(".ab_test_modal").length&&a("body").find(".react_modal").addClass("ab_test_modal"),a(".ab_test_modal").length&&(0==a(".ab_test_modal .modal_title").length&&(a(".ab_test_modal .phones_modal__item").prepend('<div class="modal_title"><p>Узнать о кредитных предложениях на этот автомобиль можно по телефону:</p></div>'),0<a(".ab_test_modal .phones_modal__item").length&&a(".ab_test_modal .react_modal__body").prepend('<div class="modal_photo-car">'+e+"</div>")),0==a(".ab_test_modal .modal_form").length&&(a(".ab_test_modal .phones_modal__item").append('<div class="text_devider"><p>или</p></div>'),a(".ab_test_modal .phones_modal__item").append('<div class="sub_title"><p>оставьте свой номер телефона</p></div>'),a(".ab_test_modal .phones_modal__item").append('<div class="info_text"><p>мы перезвоним и дадим информацию по кредитам</p></div>'),a(".ab_test_modal .phones_modal__item").append('<form class="modal_form" id="example-form"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.26705 0.980004C2.43105 0.815985 2.62805 0.688713 2.84499 0.606631C3.06192 0.524549 3.29383 0.489534 3.52533 0.503908C3.75683 0.518282 3.98263 0.581717 4.18774 0.690004C4.39286 0.798292 4.5726 0.948957 4.71505 1.132L6.39605 3.294C6.70505 3.69 6.81405 4.207 6.69205 4.694L6.17905 6.747C6.15237 6.85353 6.15373 6.96515 6.183 7.071C6.21226 7.17685 6.26844 7.27331 6.34605 7.351L8.65005 9.654C8.72774 9.73162 8.82421 9.78779 8.93005 9.81706C9.0359 9.84632 9.14752 9.84768 9.25405 9.821L11.3061 9.308C11.5467 9.24789 11.7979 9.2433 12.0407 9.29458C12.2834 9.34587 12.5113 9.45167 12.7071 9.604L14.8691 11.285C15.6461 11.889 15.7181 13.038 15.0221 13.733L14.0521 14.703C13.3591 15.396 12.3221 15.701 11.3551 15.361C8.88146 14.4903 6.6356 13.074 4.78405 11.217C2.92669 9.36555 1.51 7.11969 0.639051 4.646C0.299051 3.679 0.604051 2.642 1.29705 1.948L2.26705 0.979004V0.980004Z" fill="#9B9B9B"/></svg> <input placeholder="(000) 000 00 00" class="input_number" maxlength="15"><button type="button" class="modal_btn button--green">Позвонить мне</button></form>')))})}),a("body").on("click",".ab_test_modal .react_modal__close",function(){a("body").find(".ab_test_modal").hasClass("thankyou")?(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP highly demand banner",eventAction:"click Pop up TY",eventLabel:"close"}),console.log("click on close Thank You")):(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP highly demand banner",eventAction:"click Pop up loan",eventLabel:"close"}),console.log("click on close NOT Thank You"))}),a("body").on("click",".react_modal__close, .react_modal__backdrop",function(){void 0!==window.display_info&&clearInterval(window.display_info),window.customer_click=!1,a("body").find(".react_modal").removeClass("ab_test_modal"),a("body").find(".react_modal").addClass("hide_modal"),a(".react_modal .modal_photo-car").remove(),a(".react_modal .modal_title").remove(),a(".react_modal .text_devider").remove(),a(".react_modal .sub_title").remove(),a(".react_modal .info_text").remove(),a(".react_modal .modal_form").remove()}),a("body").on("click",".ab_test_modal .react_modal__body .btn-border",function(){void 0!==window.display_info&&clearInterval(window.display_info),a("body").find(".ab_test_modal").hasClass("thankyou")?(a(this).hasClass("btn-border--red")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP highly demand banner",eventAction:"click Pop up TY",eventLabel:"Пожаловаться"}),console.log("click on button Пожаловаться thank you")),a(this).hasClass("btn-border--green")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP highly demand banner",eventAction:"click Pop up TY",eventLabel:"Успешный звонок"}),console.log("click on button Успешный звонок thank you"))):(a(this).hasClass("btn-border--red")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP highly demand banner",eventAction:"click Pop up loan",eventLabel:"Пожаловаться"}),console.log("click on button Пожаловаться")),a(this).hasClass("btn-border--green")&&(window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP highly demand banner",eventAction:"click Pop up loan",eventLabel:"Успешный звонок"}),console.log("click on button Успешный звонок"))),a("body").find(".react_modal").removeClass("ab_test_modal"),a(".react_modal__body .modal_photo-car").remove(),a(".phones_modal_wrap").removeClass("thx_wrap"),a(".react_modal__body .thx_holder").remove()}),a(document).on("keydown keyup input",".input_number",function(e){var o=e.charCode||e.keyCode||0;return $phone=a(this),8!==o&&9!==o&&(0===$phone.val().length&&$phone.val($phone.val()+"("),4===$phone.val().length&&$phone.val($phone.val()+")"),5===$phone.val().length&&$phone.val($phone.val()+" "),9===$phone.val().length&&$phone.val($phone.val()+" "),12===$phone.val().length&&$phone.val($phone.val()+" ")),15===$phone.val().length&&(a(this).closest(".modal_form").removeClass("error"),a(this).closest(".modal_form").find(".error_msg").remove()),8!=o&&9!=o||$phone.val(""),8==o||9==o||46==o||48<=o&&o<=57||96<=o&&o<=105}),a(document).on("focus click",".input_number",function(e){var o;window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP highly demand banner",eventAction:"click Pop up loan",eventLabel:"number input"}),console.log("number input"),$phone=a(this),0===$phone.val().length?$phone.val("("):(o=$phone.val(),$phone.val("").val(o))}),a(document).on("blur",".input_number",function(e){$phone=a(this),"("===$phone.val()&&$phone.val(""),$phone.val().length<15?(a(this).closest(".modal_form").addClass("error"),a(".error_msg").length<1&&a(this).closest(".modal_form").append('<p class="error_msg">Мобильный телефон некорректен. Пример 0931234567</p>')):(a(this).closest(".modal_form").removeClass("error"),a(this).closest(".modal_form").find(".error_msg").remove())}),a(document).on("click",".modal_btn",function(){var e,o;$phone=a(".input_number"),$phone.val().length<15?(a(this).closest(".modal_form").addClass("error"),a(".error_msg").length<1&&a(this).closest(".modal_form").append('<p class="error_msg">Мобильный телефон некорректен. Пример 0931234567</p>')):(a(this).closest(".modal_form").removeClass("error"),a(this).closest(".modal_form").find(".error_msg").remove(),console.log($phone.val()),window.customer_click&&(e=window.customer_click,o=$phone.val(),console.log("send_user_call run"),console.log("send_user_call url "+e),console.log("send_user_call phone "+o),a.ajax({url:"https://dev.aim-it.com.ua/test-save-json/",type:"POST",data:{url:e,phone:o},dataType:"json"}).done(function(e){console.log(e.is_send),console.log("success")})),a("body").find(".react_modal").addClass("thankyou"),a(".react_modal__body .modal_photo-car").remove(),a(".phones_modal__item").addClass("is-disabled"),a(this).closest(".ab_test_modal").find(".phones_modal_wrap").addClass("thx_wrap").prepend('<div class="thx_holder"><div class="modal_title"><p>Спасибо за вашу заявку!</p></div><div class="info_text"><p>Мы с вами свяжемся в ближайшее время</p></div></div>')),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"PDP highly demand banner",eventAction:"click Pop up loan",eventLabel:"Позвонить мне"}),console.log("Позвонить мне")}),a("body").find(".credit-calc--wrap--col").before('<div class="high-demand-wrap"><div class="title-holder"> <svg width="23" height="45" viewBox="0 0 23 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M14.534 18.1645C14.7483 19.5829 14.952 20.9573 15.1556 22.3317C15.2842 23.1674 15.445 23.992 15.5307 24.8277C15.5736 25.2455 15.7451 25.3335 16.1095 25.3225C17.0526 25.3005 18.0065 25.3115 18.9496 25.3115C20.643 25.3225 21.5755 26.9388 20.8038 28.4671C20.7288 28.621 20.7395 28.8849 20.8145 29.0389C21.1682 29.7536 21.1575 30.4353 20.8252 31.15C20.7502 31.3039 20.6966 31.5458 20.7609 31.6887C21.2218 32.7553 21.2218 33.0961 20.7181 34.0417C20.8574 34.6355 21.0717 35.1193 21.0717 35.603C21.0717 36.7246 20.1822 37.5712 19.0568 37.6042C18.5638 37.6152 18.0708 37.6042 17.4706 37.6042C17.7171 38.6707 17.8029 39.6713 17.0205 40.408C16.6454 40.7598 16.1202 41.0347 15.6272 41.1337C15.1878 41.2216 14.6519 41.1007 14.2446 40.9028C13.8588 40.7049 13.4944 40.32 13.28 39.9242C13.055 39.5174 13.0121 39.0006 12.8406 38.5388C12.7656 38.9566 12.5084 39.3414 12.9049 39.7813C13.0871 39.9792 13.1943 40.287 13.2372 40.5729C13.3551 41.3316 13.4408 42.1013 13.5051 42.8599C13.5801 43.8165 13.0228 44.4432 12.0797 44.4432C8.52141 44.4542 4.97388 44.4542 1.41563 44.4432C0.47248 44.4432 -0.0848356 43.8165 -0.00981235 42.8599C0.0544933 42.0793 0.129517 41.2876 0.258128 40.5179C0.300998 40.2431 0.42961 39.9242 0.622527 39.7483C0.96549 39.4624 1.04051 39.0995 1.10482 38.7037C1.38348 37.0984 1.68357 35.4931 1.96223 33.8988C2.01582 33.6129 2.01582 33.316 2.04797 33.0302C2.10156 32.5793 2.29447 32.2715 2.78748 32.2605C3.21619 32.2605 3.50556 32.5464 3.45198 33.0631C3.35552 34.0087 3.20547 34.9433 3.05542 35.8889C2.87323 36.9994 2.65887 38.11 2.45524 39.2645C5.40258 39.2645 8.28562 39.2645 11.2437 39.2645C11.2973 38.8357 11.3509 38.4068 11.383 37.978C11.4259 37.4613 11.6938 37.1534 12.1761 37.0874C14.4161 36.7685 16.6668 36.4607 18.9068 36.1638C19.2819 36.1198 19.5927 36.0429 19.6356 35.603C19.6784 35.1522 19.4105 34.9433 18.9925 34.8884C18.5852 34.8334 18.3387 34.5805 18.3495 34.1517C18.3495 33.7448 18.5852 33.5139 18.9818 33.47C19.3676 33.426 19.6356 33.2391 19.6356 32.8212C19.6356 32.4034 19.3676 32.2385 18.9818 32.1835C18.6174 32.1285 18.3495 31.9086 18.3495 31.4908C18.3387 31.04 18.6174 30.8091 19.0032 30.7541C19.3998 30.6992 19.6463 30.5232 19.6463 30.1054C19.6463 29.6656 19.3569 29.5336 18.9818 29.4787C18.6067 29.4237 18.3602 29.1818 18.3602 28.775C18.3495 28.3682 18.5852 28.1373 18.9604 28.0493C19.3462 27.9613 19.7213 27.8624 19.6463 27.3236C19.5713 26.7848 19.1533 26.7738 18.746 26.7738C16.3024 26.7738 13.8481 26.7738 11.4044 26.7738C10.6542 26.7738 10.1934 26.466 9.979 25.8502C9.7968 25.3335 9.92541 24.8717 10.322 24.7177C10.7935 24.5418 11.1151 24.7287 11.2973 25.2015C11.3187 25.2455 11.3723 25.2675 11.5438 25.2895C11.4366 24.1899 11.3187 23.0794 11.2008 21.8809C10.4613 21.9359 9.74321 21.9139 9.05729 22.0569C8.24275 22.2218 7.44965 22.5187 6.64582 22.7935C6.45291 22.8595 6.28143 23.0244 6.1421 23.1894C4.96316 24.5198 4.19149 26.0701 3.85925 27.8404C3.83781 27.9283 3.82709 28.0163 3.80566 28.1043C3.68776 28.676 3.38767 28.9289 2.93753 28.8409C2.50883 28.753 2.31591 28.3791 2.41237 27.8074C2.77677 25.6743 3.63418 23.7831 5.09177 22.2218C5.47761 21.804 6.0242 21.4851 6.54937 21.2652C7.8462 20.7374 9.20733 20.4296 10.6221 20.4406C10.74 20.4406 10.8578 20.4076 11.0293 20.3746C10.965 19.7918 10.9114 19.2421 10.8364 18.6263C9.66819 18.7803 8.56428 18.9342 7.44965 19.0771C6.54937 19.1981 5.64909 19.33 4.73809 19.451C3.06614 19.6599 1.91936 18.7803 1.69429 17.065C1.23343 13.6125 0.783291 10.171 0.354586 6.71844C0.140234 5.03617 1.01908 3.85967 2.65887 3.61778C4.95244 3.27692 7.25673 2.98005 9.56102 2.66119C9.67891 2.6392 9.7968 2.61721 9.95757 2.57322C9.9147 2.13341 9.87183 1.72659 9.82896 1.30877C9.78609 0.857961 9.979 0.561088 10.4184 0.46213C10.815 0.374168 11.1579 0.660045 11.2437 1.13284C11.308 1.52867 11.3401 1.9245 11.4044 2.3973C12.294 2.27635 13.1621 2.1664 14.0195 2.05645C15.5736 1.84754 17.1276 1.61663 18.6924 1.42972C20.2572 1.2428 21.404 2.13341 21.6183 3.71673C22.0899 7.23522 22.5508 10.7647 22.9795 14.2832C23.1724 15.8775 22.2185 17.065 20.6752 17.2739C18.7674 17.5268 16.849 17.7907 14.9413 18.0546C14.8234 18.0876 14.7269 18.1206 14.534 18.1645ZM14.1589 25.2895C14.1482 25.1355 14.1482 25.0476 14.1267 24.9486C13.7623 22.5736 13.3979 20.2097 13.0335 17.8347C12.9263 17.131 13.13 16.8341 13.8159 16.7461C16.013 16.4493 18.2101 16.1524 20.3965 15.8555C21.2861 15.7346 21.6612 15.2618 21.554 14.3602C21.1146 10.9296 20.6752 7.49911 20.2143 4.06858C20.0857 3.11199 19.6356 2.77114 18.7031 2.90308C13.4301 3.61778 8.15701 4.34346 2.88394 5.05816C2.03725 5.16811 1.65142 5.67389 1.76931 6.53153C2.21945 9.99504 2.66959 13.4695 3.13045 16.9331C3.23762 17.7137 3.76279 18.1206 4.51302 18.0216C6.72085 17.7137 8.93939 17.4169 11.1472 17.109C11.8546 17.01 12.144 17.2299 12.2297 17.9556C12.3476 19.0661 12.4548 20.1767 12.5727 21.2872C12.712 22.6066 12.862 23.9371 13.0121 25.2785C13.4086 25.2895 13.7516 25.2895 14.1589 25.2895ZM12.0904 42.9699C12.0261 42.3541 11.951 41.7714 11.9082 41.1996C11.8867 40.8478 11.7581 40.7378 11.4044 40.7378C10.3863 40.7598 9.3681 40.7488 8.34993 40.7488C6.28143 40.7488 4.21293 40.7488 2.14443 40.7598C1.97295 40.7598 1.67285 40.8478 1.66214 40.9358C1.54424 41.6065 1.49065 42.2882 1.41563 42.9699C5.02747 42.9699 8.53212 42.9699 12.0904 42.9699ZM16.088 37.923C15.7665 37.978 15.4986 38.011 15.2414 38.055C14.9627 38.099 14.6948 38.154 14.4054 38.2089C14.4161 38.7917 14.3625 39.3854 14.952 39.6163C15.2306 39.7263 15.6915 39.6603 15.9273 39.4844C16.4632 39.0995 16.1952 38.5168 16.088 37.923Z" fill="#9B9B9B"/><path d="M13.7507 9.33333C13.7507 10.103 13.7507 10.8727 13.7507 11.6423C13.74 12.6979 13.0862 13.5115 12.143 13.6545C11.1249 13.8084 10.2353 13.2147 9.96737 12.1591C9.58154 10.6528 9.21714 9.14641 8.86346 7.64006C8.57408 6.3756 9.27073 5.33105 10.5247 5.13313C10.8784 5.07816 11.2321 5.02318 11.5857 5.00119C12.7111 4.92422 13.6006 5.72688 13.6542 6.88138C13.6864 7.70603 13.665 8.53068 13.665 9.34433C13.6864 9.33333 13.7185 9.33333 13.7507 9.33333ZM12.336 9.35532C12.3038 9.35532 12.2824 9.35532 12.2502 9.35532C12.2502 8.80556 12.2609 8.2558 12.2502 7.70603C12.2288 6.3756 12.1966 6.34262 10.8998 6.54053C10.2567 6.63949 10.1281 6.82641 10.2782 7.45314C10.6104 8.83855 10.9427 10.224 11.2749 11.6094C11.3607 11.9502 11.4786 12.2801 11.8965 12.2031C12.3038 12.1371 12.336 11.7963 12.336 11.4334C12.3252 10.7407 12.336 10.048 12.336 9.35532Z" fill="#9B9B9B"/><path d="M11.993 15.9087C11.5429 15.9197 11.2535 15.7108 11.1999 15.26C11.1463 14.8092 11.4035 14.5343 11.8322 14.4574C12.0895 14.4024 12.3574 14.3584 12.6253 14.3584C13.0112 14.3584 13.2791 14.5673 13.3327 14.9631C13.3863 15.359 13.2255 15.6558 12.8397 15.7548C12.561 15.8318 12.2824 15.8538 11.993 15.9087Z" fill="#9B9B9B"/></g><defs><clipPath id="clip0"><rect width="23" height="43.9811" fill="white" transform="translate(0 0.471191)"/></clipPath></defs></svg>\t<p class="high-demand-text">На этот автомобиль повышенный спрос!</p></div><a href="#" class="high-demand-link">'+e.credit_text+"</a></div>"),a("body").append('<style>.high-demand-wrap{background:#db5c4c14;border-radius:3px;color:#414042;padding:10px 17px 15px;margin:0 0 22px}.high-demand-wrap .title-holder{display:flex}.high-demand-wrap .high-demand-text{font-size:16px;font-weight:700;margin:4px 0 7px 11px;max-width:250px;line-height:1.2}.high-demand-wrap .high-demand-link{color:#db5c4c;font-size:13px;font-weight:700;padding:8px 15px;border:1px solid #db5c4c;border-radius:5px;display:block;text-align:center}.ab_test_modal{background:rgba(65,64,66,.5)}.ab_test_modal .react_modal__backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99}.ab_test_modal .react_modal__container{width:calc(100% - 28px)!important;margin:0 auto;top:15px}.ab_test_modal .react_modal__header{font-size:0;z-index:999}.ab_test_modal .react_modal__close{right:0;left:auto;font-size:46px;padding:10px 0;color:#fff}.ab_test_modal .react_modal__close:before{display:none}.ab_test_modal .react_modal__body{background-color:#fff;padding:14px;z-index:999}.ab_test_modal .phones_modal__item{text-align:center}.ab_test_modal .be_carefull{display:none}.ab_test_modal .modal_title{color:#414042;font-size:17px;font-weight:700;margin-left:-10px;margin-right:-10px;padding:24px 0 11px;line-height:1.2}.ab_test_modal .modal_title p{margin:0}.ab_test_modal .text_devider{color:#414042;font-size:16px;position:relative;padding:10px 0 9px}.ab_test_modal .text_devider:after,.ab_test_modal .text_devider:before{content:"";background-color:#9b9b9b;height:1px;width:40px;position:absolute;top:20px}.ab_test_modal .text_devider:before{left:calc(50% - 73px)}.ab_test_modal .text_devider:after{right:calc(50% - 73px)}.ab_test_modal .text_devider p{margin:0}.ab_test_modal .sub_title{color:#414042;font-size:17px;font-weight:700}.ab_test_modal .sub_title p{margin:0}.ab_test_modal .info_text{color:#9b9b9b;font-size:16px;padding:4px 0 10px;line-height:1.2}.ab_test_modal .info_text p{margin:0}.ab_test_modal .modal_form{border-bottom:1px solid #9b9b9b;display:flex;flex-wrap:wrap;padding:0 0 12px;margin:0 0 12px;position:relative}.ab_test_modal .modal_form.error .input_number{border:1px solid #db5c4c;border-right:0;color:#db5c4c}@media (max-width:359px){.ab_test_modal .modal_form.error .input_number{border-right:1px solid #db5c4c}}.ab_test_modal .modal_form.error .input_number::-webkit-input-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .input_number:-moz-placeholder,.ab_test_modal .modal_form.error .input_number::-moz-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .input_number:-ms-input-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .modal_btn{pointer-events:none}.ab_test_modal .modal_form.error svg path{fill:#db5c4c}.ab_test_modal .modal_form svg{position:absolute;top:11px;left:12px}.ab_test_modal .modal_form .error_msg{color:#db5c4c;font-size:12px;text-align:left;margin:5px 0 0}.ab_test_modal .input_number{border-radius:5px 0 0 5px;border:1px solid #9b9b9b;border-right:0;color:#777;font-size:13px;width:calc(100% - 144px);padding:0 15px 0 38px;outline:none}.ab_test_modal .input_number::-webkit-input-placeholder{color:#777}.ab_test_modal .input_number:-moz-placeholder,.ab_test_modal .input_number::-moz-placeholder{color:#777}.ab_test_modal .input_number:-ms-input-placeholder{color:#777}@media (max-width:359px){.ab_test_modal .input_number{border-radius:5px;border-right:1px solid #9b9b9b;padding:10px 15px 10px 38px;width:100%}}.ab_test_modal .modal_btn{color:#fff;border-radius:0 5px 5px 0;border:0;padding:12px;font-size:13px;font-weight:700;width:144px;outline:none}@media (max-width:359px){.ab_test_modal .modal_btn{border-radius:5px;margin:10px 0 0;width:100%}}.ab_test_modal .show-phone .btn-border{margin:0;font-size:13px;padding:8px 10px;width:100%}.ab_test_modal .show-phone .btn-border+.btn-border{margin:10px 0 0}@media (min-width:360px){.ab_test_modal .show-phone .btn-border+.btn-border{margin:0 0 0 10px}}@media (min-width:360px){.ab_test_modal .show-phone .btn-border{width:calc(50% - 5px)}}.thx_wrap{padding:0 0 17px}.thx_holder{text-align:center}.thx_holder .modal_title{padding:16px 0 11px}.thx_holder .info_text{padding:4px 0 28px}.is-disabled{display:none}.pdp_modal_backdrop{background:rgba(65,64,66,.5);position:fixed;top:0;bottom:0;left:0;right:0;overflow:auto}.async-hide{opacity:0!important}.hide_modal{display:none}</style>')}window.language_abtest={credit_text:"Уточнить о наличии этой комплектации",credit_class:""},window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});