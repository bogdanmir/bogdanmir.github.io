function abjql(t){var n=document.createElement("script");n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()},n.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(n)}function abjqlr(t){function n(){s>=r&&p>r-s?t(".next-slide").css({right:0}):t(".next-slide").css({right:-t(this).width()}),p<0?t(".prev-slide").css({left:0}):t(".prev-slide").css({left:-t(this).width()})}t("body").find(".common-hero .info-label-wr").detach().insertAfter(".header .header__wrap .header__menu"),t("body").find(".common-hero .common-hero__content-wrap").detach().prependTo(".common-hero .row:nth-child(2) > div"),t("body").find(".common-hero .row:nth-child(2) > div").addClass("col-md-6"),t("body").find(".common-hero .row:nth-child(2)").append('<div class="col-md-6"><p class="common-hero__content-text">Standalone application for Mac & PC with full RAW support. And Plugin for Adobe Photoshop, Lightroom & Apple products</p></div>'),t("body").find(".common-hero .common-hero__btns-wrap + .common-hero__upgrade").detach().insertAfter(".common-hero .common-hero__content-text");var o='<div class="sticky_nav_wrap">';o+='<ul class="sticky_nav_container">',o+="<li>Embed objects</li>",o+="<li>Replace sky</li>",o+="<li>Tune portraits and skin</li>",o+="<li>Add sunrays</li>",o+="<li>AI Accent</li>",o+="<li>AI Sky Enhancer</li>",o+="<li>AI Structure</li>",o+="<li>Smart Contrast</li>",o+="<li>Erase objects</li>",o+="<li>Instant Filters</li>",o+="<li>Landscape Enhancer</li>",o+="<li>Creative tools</li>",o+="<li>Remove noise</li>",o+="</ul>",o+="</div>",t("body").find(".header").append(o);var e=t(".sticky_nav_container li"),i=t(".sticky_nav_container"),a=t(".sticky_nav_wrap"),r=a.innerWidth(),c=e.outerWidth(),s=0,p=(i.position().left,0);a.append('<span class="prev-slide"><</span><span class="next-slide">></span>'),e.each(function(){s=s+t(this).outerWidth()+1}),i.css({width:s}),t(".next-slide").click(function(){p>r-s&&(p-=c,i.css({left:p},n()))}),t(".prev-slide").click(function(){p>=-s&&(p+=c,i.css({left:p},n()))}),t(window).resize(function(){r=a.innerWidth(),n()}),n(),console.log("22222");t("body").append("<style>.wrap-content .common-hero{-ms-flex-pack:start;justify-content:flex-start;text-align:left}.wrap-content .common-hero .common-hero__title{font-size:53px}@media (max-width:1999px){.wrap-content .common-hero .common-hero__title{font-size:40px}}.wrap-content .common-hero .common-hero__title br,.wrap-content .common-hero .sk-subtitle{display:none}.wrap-content .common-hero .common-hero__content-text{font-size:24px}@media (max-width:1999px){.wrap-content .common-hero .common-hero__content-text{font-size:18px}}@media (min-width:1920px){.wrap-content .common-hero .common-hero__content-text{padding-top:115px}}@media (min-width:1080px){.wrap-content .common-hero .common-hero__content-text{padding-top:94px;font-weight:300}}.wrap-content .common-hero .common-hero__content-text+.common-hero__upgrade{padding-top:43px}@media (min-width:1920px){.wrap-content .common-hero .common-hero__content-wrap{padding-top:115px}}@media (min-width:1080px){.wrap-content .common-hero .common-hero__content-wrap{padding-top:94px;font-weight:300}}.wrap-content .common-hero .common-hero__labeled-btn-wrap .common-hero__upgrade{font-size:14px;font-weight:300}.wrap-content .common-hero__video-in{top:406px}.wrap-content .hero-bg>.sk-section_bg_dark{display:none}.sticky_nav_wrap{overflow:hidden;width:100%;background:#eaeaea;position:relative;height:50px}.sticky_nav_wrap .next-slide,.sticky_nav_wrap .prev-slide{background:#00ac7f;display:block;width:50px;height:50px;position:absolute;top:0;color:#fff;text-align:center;line-height:3em;cursor:pointer;transition:background .3s ease-in-out,left .3s ease-in-out,right .3s ease-in-out;-webkit-transition:background .3s ease-in-out,left .3s ease-in-out,right .3s ease-in-out;-moz-transition:background .3s ease-in-out,left .3s ease-in-out,right .3s ease-in-out;z-index:2;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.sticky_nav_wrap .next-slide:hover,.sticky_nav_wrap .prev-slide:hover{background:#00c491}.sticky_nav_wrap .next-slide{right:-50px}.sticky_nav_wrap .prev-slide{left:-50px}.sticky_nav_wrap .sticky_nav_container{margin:0;padding:0;position:absolute;top:0;left:0;height:50px;transition:left .3s ease-in-out;-webkit-transition:left .3s ease-in-out;-moz-transition:left .3s ease-in-out}.sticky_nav_wrap .sticky_nav_container li{font:normal 14px Arial;background:#e5e5e5!important;margin:0!important;padding:15px 20px;list-style:none;float:left;border-right:1px solid #fff;height:50px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;overflow:hidden;position:relative;z-index:1;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.sticky_nav_wrap .sticky_nav_container li:hover{opacity:.6}.sticky_nav_wrap .sticky_nav_container li a{background-image:none!important;padding-left:0!important;padding-top:0!important;padding-bottom:0!important;margin-bottom:0!important;color:#222}.sticky_nav_wrap .sticky_nav_container li a span{background-image:none!important;background-repeat:0!important;background-position:0!important;padding-right:0!important;padding-top:0!important;padding-bottom:0!important}.sticky_nav_wrap .sticky_nav_container li.here,.sticky_nav_wrap .sticky_nav_container li.here a{font-weight:400!important;color:#00ac7f!important}</style>")}console.log("%cTest come","background:green;color: #ffffff"),window.jQuery?jQuery(function(t){abjqlr(t)}):abjql(function(){jQuery(function(t){abjqlr(t)})});