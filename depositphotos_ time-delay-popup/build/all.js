function abjql(e){var a=document.createElement("script");a.type="text/javascript",a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,e())}:a.onload=function(){e()},a.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(a)}function abjqlr(e){function a(){e(".search-box__result .flex-files .file-container:nth-child(1) .file-container__link .button-add-to-favorites").click(),e("._portal").addClass("modal_time_delay"),localStorage.setItem("_utap","true"),localStorage.setItem("modal_show","true"),setTimeout(function(){e(".modal_time_delay .modal__header").prepend('<div class="modal_text_holder"><h3 class="modal_title">Hard to find</h3><p class="sub_modal_title">an image in mobile?</p><p class="modal_body_title">Download 10 images for FREE</p><p class="modal_italic">on your computer</p><p class="modal_bold">in 7 days trial</p><ul class="modal_list"><li>Use advanced filtering</li><li>Add and compare images<br> in personal collections</li><li>Open and download images<br> in high-resolution</li></ul></div>')},500)}function a(){e("html").append($outhtml),localStorage.setItem("_utap","true"),e(".featured-box .featured").detach().appendTo(".modal_time_delay .social_holder"),localStorage.setItem("modal_show","true")}function a(){e("html").append($outhtml),localStorage.setItem("_utap","true"),e(".file-view-page-upgrade .file-view-upgrade__auth-box").detach().appendTo(".modal_time_delay .social_holder"),localStorage.setItem("modal_show","true"),console.log("modal_show")}null==localStorage.getItem("modal_show")&&localStorage.setItem("modal_show",!1);var o=localStorage.getItem("_ts")||(new Date).getTime();localStorage.setItem("_ts",o),(e(".content_search").length>0||e(".folder-content").length>0&&"false"==localStorage.getItem("modal_show"))&&setInterval(function(){o+25e3<(new Date).getTime()&&a()},1e3),$outhtml='<div class="modal-container modal_time_delay modal_time_delay_other">',$outhtml+='<div class="modal">',$outhtml+='<div class="modal__dialog">',$outhtml+='<div class="modal__header _drag-handler"><i class="modal__close-round icon icon-close-cross icon-round-hover _close"></i></div>',$outhtml+='<div class="modal__body _body modal__body_signup">',$outhtml+='<div class="signup-user signup-user_modal">',$outhtml+='<div class="modal_body">',$outhtml+='<h3 class="modal_title">Hard to find</h3>',$outhtml+='<p class="sub_modal_title">an image in mobile?</p>',$outhtml+='<div class=""><p class="modal_body_title">Download 10 images for FREE</p>',$outhtml+='<p class="modal_italic">on your computer</p>',$outhtml+='<p class="modal_bold">in 7 days trial</p>',$outhtml+="</div>",$outhtml+='<ul class="modal_list">',$outhtml+="<li>Use advanced filtering</li>",$outhtml+="<li>Add and compare images<br> in personal collections</li>",$outhtml+="<li>Open and download images<br> in high-resolution</li>",$outhtml+="</ul>",$outhtml+='<div class="social_holder"> </div>',$outhtml+="</div>",$outhtml+="</div>",$outhtml+="</div>",$outhtml+="</div>",$outhtml+="</div>",$outhtml+='<div class="_overlay modal-overlay modal_time_delay_overlay"></div>',$outhtml+="</div>",e(".content-type-page__featured").length>0&&"false"==localStorage.getItem("modal_show")&&(setInterval(function(){o+25e3<(new Date).getTime()&&a()},1e3),e(document).on("click",".modal_time_delay .modal__close-round",function(){e(".modal_time_delay .social_holder .featured").detach().appendTo(".content-type-page__featured .featured-box")}),e(document).on("click",".modal_time_delay_overlay",function(){e(".modal_time_delay .social_holder .featured").detach().appendTo(".content-type-page__featured .featured-box")})),e(".file-view-page-upgrade").length>0&&"false"==localStorage.getItem("modal_show")&&(setInterval(function(){o+25e3<(new Date).getTime()&&a()},1e3),e(document).on("click",".modal_time_delay .modal__close-round",function(){e(".modal_time_delay .social_holder .file-view-upgrade__auth-box").detach().appendTo(".file-view-page-upgrade .file-view-upgrade__purchase-box")}),e(document).on("click",".modal_time_delay_overlay",function(){e(".modal_time_delay .social_holder .file-view-upgrade__auth-box").detach().appendTo(".file-view-page-upgrade .file-view-upgrade__purchase-box")})),setInterval(function(){""==e(".modal_time_delay").html()&&e("._portal").removeClass("modal_time_delay")},2e3),e(document).on("click",".modal_time_delay .modal__close-round",function(){e(this).closest(".modal_time_delay_other").remove(),e("._portal").removeClass("modal_time_delay"),e("._portal").find(".modal-container._modal-container").remove(),localStorage.setItem("_utap","false"),console.log("close")}),e(document).on("click",".modal_time_delay .modal-overlay",function(){e(".modal_time_delay_other").remove(),e("._portal").removeClass("modal_time_delay"),e("._portal").find(".modal-container._modal-container").remove(),localStorage.setItem("_utap","false"),console.log("close")}),"true"==localStorage.getItem("modal_show")&&e(".order-info_trial .order-info__items").html('<div class="order-info__item"><i class="icon icon-ok-dark"></i><span class="order-info__item-text">Download any 10 images or vectors for free</span></div><div class="order-info__item"><i class="icon icon-ok-dark"></i><span class="order-info__item-text">7 days free, then $299 annualy for 360 images</span></div><div class="order-info__item"><i class="icon icon-ok-dark"></i><span class="order-info__item-text">Cancel anytime before your free trial is over</span></div><div class="order-info__item"><i class="icon icon-ok-dark"></i><span class="order-info__item-text">Unused downloads transfer to the next month</span></div>'),setInterval(function(){var a=localStorage.getItem("_uaba")||"false",o=localStorage.getItem("_utap")||"false";0==e(".signup-user__login").length&&"true"==o&&"false"==a&&(console.log("_uaba"),localStorage.setItem("_uaba","true"),location.href="https://depositphotos.com/subscribe/trial.html?id=10&product=membership&backURL%5Bpage%5D=%2Fsubscribe.html?test=true")});e("body").append('<style>.modal_time_delay .modal__dialog{background:#fff;border-radius:16px}.modal_time_delay .modal__body{padding:0}.modal_time_delay .modal_body{color:#3c3c3c;font-size:16px;font-family:Arial,Helvetica,sans-serif;text-align:center;width:100%}.modal_time_delay .modal_title{font-size:26px;font-weight:700;margin:0 0 3px}.modal_time_delay .sub_modal_title{font-size:22px;font-weight:700;margin:0 0 23px}.modal_time_delay .modal_body_title{margin:0;font-size:16px}.modal_time_delay .modal_italic{font-size:20px;font-style:italic;margin:0}.modal_time_delay .modal_bold{font-size:20px;font-weight:700;margin:0 0 10px}.modal_time_delay .modal_list{list-style-type:none;text-align:left;max-width:220px;padding:0;margin:30px auto 40px}.modal_time_delay .modal_list li{position:relative;padding-left:17px;margin:0 0 22px;font-size:16px}.modal_time_delay .modal_list li:before{content:"";position:absolute;top:3px;left:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABuSURBVHgBtZDRCYAwDESbTOR3WzKDG+gm1kl0BIfIIi4STT4KiohBaOBKKO/CJSG0KCIaUkqL9eiBRWQFgD144JzzoSr/Yf2YTN7JqPksW6mmmlnbmZkfBrAnxjgiol1hU/Vv8K3M5F7wYuq+mBP5WS7NGTLKGQAAAABJRU5ErkJggg==);height:9px;width:11px}.modal_time_delay .social_holder .signup-user__right{width:100%;padding:0}.modal_time_delay .social_holder .signup-user__right .signup-user__login,.modal_time_delay .social_holder .signup-user__right .signup-user__title{display:none}.modal_time_delay .modal__close-round{right:-41px}.modal_time_delay .modal__header{position:relative;margin-left:48px;width:calc(100% - 96px);padding:40px 0 0}.modal_time_delay .signup-user__header{width:100%}.modal_time_delay .modal_text_holder{text-align:center}.modal_time_delay .signup-user_preview{position:static}.modal_time_delay .signup-user_preview .signup-user__left{display:none}.modal_time_delay .signup-user_preview .signup-user__right{width:100%}.modal_time_delay .signup-user_preview .signup-user__header{padding:0}.modal_time_delay .signup-user__right{width:100%}.modal_time_delay .signup-user__title{display:none}.modal_time_delay .signup-user_modal{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.modal_time_delay .signup-user-box__social-btn{font-size:12px}.modal_time_delay .signup-user-box__social-btn:before{margin-right:5px}.modal_time_delay.modal_time_delay_other .modal__header{padding:0}.modal_time_delay.modal_time_delay_other .modal_body{padding:40px 0 0}.modal_time_delay .featured{min-height:100px;position:static}.modal_time_delay .featured .featured__snippet-box._snippet{display:none}.modal_time_delay .featured-signup{padding-top:0;position:static;width:calc(100% - 70px)}.modal_time_delay .featured-signup .signup-user__right .signup-user__sub-title{display:none}.modal_time_delay .signup-user_file-view{position:static}.modal_time_delay .signup-user_file-view .signup-user__back{position:absolute;top:7px;left:7px;margin:0}.modal_time_delay .signup-user__right{position:static}.content-type-page__featured{min-height:415px}.file-view-upgrade .file-view-upgrade__purchase-box{min-height:267px}</style>')}console.log("%cTest come","background:green;color: #ffffff"),window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});