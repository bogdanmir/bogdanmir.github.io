function abjql(e){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,e())}:o.onload=function(){e()},o.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(o)}function abjqlr(e){e("body").find(".common-hero .info-label-wr").detach().insertAfter(".header .header__wrap .header__menu"),e("body").find(".common-hero .row:nth-child(1) > div").removeClass("col-md-8 offset-md-2").addClass("col-md-6"),e("body").find(".common-hero .row:nth-child(2) > div").addClass("col-md-6");e("body").append("<style>.wrap-content .common-hero{-ms-flex-pack:start;justify-content:flex-start;text-align:left}@media (max-width:1999px){.wrap-content .common-hero .common-hero__title{font-size:40px}}.wrap-content .common-hero .common-hero__title br,.wrap-content .common-hero .sk-subtitle{display:none}.wrap-content .common-hero__video-in{top:406px}.wrap-content .hero-bg>.sk-section_bg_dark{display:none}</style>")}console.log("%cTest come","background:green;color: #ffffff"),window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});