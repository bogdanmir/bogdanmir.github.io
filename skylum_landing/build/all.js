function abjql(e){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,e())}:o.onload=function(){e()},o.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(o)}function abjqlr(e){function o(){e.each(n,function(o,t){e("html,body").scrollTop()>e("[data-analytics-block="+t.item+"]").offset().top-200&&(e("[data-gosection]").removeClass(),e('[data-gosection="'+t.item+'"]').addClass("active"))})}function t(){var o=0;e(".sticky_nav_container").css("left","0"),e("body").find(".sticky_nav_container").data("curent_pos",0),e(".slide-wraper-js .sticky_nav_container li").each(function(t,a){o+=e(a).outerWidth()}),e(".slide-wraper-js").outerWidth()<e(".sticky_nav_container").outerWidth()?(e(".slide-wraper-js .slide-wraper-wrap-js").addClass("scroller"),e(".slide-wraper-js .next-slide").removeClass("d-none"),e(".slide-wraper-js .prev-slide").removeClass("d-none")):(e(".slide-wraper-js .slide-wraper-wrap-js").removeClass("scroller"),e(".slide-wraper-js .next-slide").addClass("d-none"),e(".slide-wraper-js .prev-slide").addClass("d-none"))}e("body").find(".common-hero .info-label-wr").detach().insertAfter(".header .header__wrap .header__menu"),e("body").find(".common-hero .common-hero__content-wrap").detach().prependTo(".common-hero .row:nth-child(2) > div"),e("body").find(".common-hero .row:nth-child(2) > div").addClass("col-md-6");var a='<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=140" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=140" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=280" data-preload-mob-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=180" alt=""></figure>';a+='<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" alt=""></figure>',a+='<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" alt=""></figure>',a+=' <figure class="plugins__logo"> <img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" alt=""></figure>',e("body").find(".common-hero .row:nth-child(2)").append('<div class="col-md-6"><p class="common-hero__content-text">Standalone application for Mac & PC with full RAW support. And Plugin for Adobe Photoshop, Lightroom & Apple products</p> '+a+"</div>"),e("body").find(".common-hero .common-hero__content-wrap").append("<p class='common-hero__subtitle'><b>Luminar 4's</b> revolutionary tools and AI technologies give superpowers for creative <b>photo editing.</b></p>"),e("body").find(".common-hero .common-hero__btns-wrap + .common-hero__upgrade").detach().appendTo(".common-hero .row:nth-child(2) > div:nth-child(2)"),e("body").find(".common-hero").append('<div class="mouse_down"><span class="mouse_wheel"></span></div>');var n=[{item:"common-hero",popular:!1},{name:"Embed objects",item:"augmented-sky-hero",popular:!0},{name:"Replace sky",item:"sky-hero",popular:!0},{name:"Tune portraits and skin",item:"portrait-hero",popular:!0},{name:"Add sunrays",item:"tools-sunrays",popular:!0},{name:"AI Accent",item:"tools-ai-enhance",popular:!0},{name:"AI Sky Enhancer",item:"tools-ai-enhance",popular:!0},{name:"AI Structure",item:"structure-hero",popular:!0},{name:"Smart Contrast",item:"tools-smart-contrast",popular:!0},{name:"Erase objects",item:"erase-technology",popular:!0},{item:"common-video-gallery",popular:!1},{item:"tools-library",popular:!1},{name:"Instant Filters",item:"tools-looks",popular:!0},{name:"Landscape Enhancer",item:"tools-landscapes",popular:!0},{name:"Creative tools",item:"tools-creative",popular:!0},{name:"Remove noise",item:"tools-denoise",popular:!0},{item:"tools-details-enhancer",popular:!1},{item:"common-to-pro",popular:!1},{item:"global-works-as-plugin",popular:!1},{item:"common-language",popular:!1},{item:"common-press",popular:!1},{item:"common-trustpilot",popular:!1},{item:"global-bottom-buy",popular:!1}],i="",s="";e(".wrapper").append('<ul class="sticky_dot_wrap"></ul>'),e("body").find(".header").append('<div class="sticky_nav_wrap"><div class="slide-wraper-js"><span class="prev-slide"></span><div class="slide-wraper-wrap-js"><ul class="sticky_nav_container"></ul></div><span class="next-slide"></span></div><a href="/l/luminar-checkout" class="sk-btn sk-btn_type_primary-2 by-btn-js">Buy Now</a></div>'),e.each(n,function(e,o){1==o.popular&&(i+='<li data-gosection="'+o.item+'">'+o.name+"</li>"),s+='<li data-gosection="'+o.item+'"></li>'}),e(".wrapper").find(".sticky_dot_wrap").append(s),e("body").find(".header ul.sticky_nav_container").append(i),e("body").on("click","[data-gosection]",function(o){var t=e(this).attr("data-gosection");return e("[data-gosection]").removeClass(),e('[data-gosection="'+t+'"]').addClass("active"),e("html,body").animate({scrollTop:e('[data-analytics-block="'+t+'"]').offset().top},500),!1}),o(),e(window).scroll(function(t){e("html,body").scrollTop()>100?e("body").find(".sticky_nav_wrap").addClass("sticky-scroll"):e("body").find(".sticky_nav_wrap").removeClass("sticky-scroll"),o()}),e(".slide-wraper-js .prev-slide").click(function(){var o=e(this).closest(".slide-wraper-js").find("ul.sticky_nav_container"),t=void 0!==o.data("curent_pos")?o.data("curent_pos"):0;if(t>0){t--;var a=o.find("li:eq("+Number(t)+")").outerWidth(),n=o.css("left");n=n.replace(new RegExp("px","g"),""),n=Number(n),a+n<0?(o.data("curent_pos",t),o.animate({left:"+="+a+"px"},5)):(o.data("curent_pos",0),o.animate({left:"0px"},5))}return!1}),e(".slide-wraper-js .next-slide").click(function(){var o=e(this).closest(".slide-wraper-js").find(".sticky_nav_container"),t=void 0!==o.data("curent_pos")?o.data("curent_pos"):0;if(t<o.find("li").length-1){t++;var a=o.find("li:eq("+Number(t-1)+")").outerWidth(),n=o.css("left");if(n=n.replace(new RegExp("px","g"),""),n=Number(n),o.outerWidth()+n>=e(".slide-wraper-js").outerWidth())o.data("curent_pos",t),o.animate({left:"-="+a+"px"},5);else{var n=e(".sticky_nav_container").outerWidth()-e(".slide-wraper-wrap-js.scroller").outerWidth();o.data("curent_pos",o.find("li").length-1),o.animate({left:"-"+n+"px"},5)}}return!1}),e(window).resize(function(e){t()}),setTimeout(function(){e(window).resize()},10);e("body").append('<style>.header .container{overflow:hidden}.wrap-content .common-hero{-ms-flex-pack:start;justify-content:flex-start;text-align:left}.wrap-content .common-hero .common-hero__title{font-size:53px;padding-bottom:10px}@media (max-width:1999px){.wrap-content .common-hero .common-hero__title{font-size:40px}}.wrap-content .common-hero .common-hero__title br{display:none}.wrap-content .common-hero .common-hero__subtitle{font-size:18px;font-weight:300;max-width:420px;padding:0 0 65px}.wrap-content .common-hero .sk-subtitle{display:none}.wrap-content .common-hero .common-hero__content-text{font-size:24px;max-width:500px;padding-bottom:10px}@media (max-width:1999px){.wrap-content .common-hero .common-hero__content-text{font-size:18px}}@media (min-width:1080px){.wrap-content .common-hero .common-hero__content-text{padding-top:190px;padding-bottom:18px;font-weight:300}}@media (min-width:1080px){.wrap-content .common-hero .common-hero__content-wrap{padding-top:150px;font-weight:300}}.wrap-content .common-hero .common-hero__labeled-btn-wrap .common-hero__upgrade{font-size:14px;font-weight:300}.wrap-content .common-hero .plugins__logo{display:inline-block;max-height:31px}.wrap-content .common-hero .plugins__logo+.plugins__logo{margin-left:15px}.wrap-content .common-hero .plugins__logo img{max-width:31px;max-height:31px}.wrap-content .common-hero .plugins__logo+.common-hero__upgrade{font-weight:300}.wrap-content .common-hero .common-hero__btns-wrap{-ms-flex-pack:start;justify-content:flex-start}.wrap-content .common-hero .common-hero__btns-wrap>*{margin:0}.wrap-content .common-hero .common-hero__labeled-btn-wrap{margin-left:22px}.wrap-content .common-hero__video-in{top:406px}.wrap-content .hero-bg>.sk-section_bg_dark{display:none}.mouse_down{position:absolute;bottom:0;left:0;right:0;margin:auto;border:1px solid #fff;box-sizing:border-box;border-radius:20px;z-index:3;height:62px;width:34px}@media (max-width:1999px){.mouse_down{height:47px;width:26px}}.mouse_down .mouse_wheel{background:#fff;display:block;border-radius:50%;margin:0 auto;position:relative;top:8px;height:8px;width:8px;animation:a 1.5s linear infinite}@media (max-width:1999px){.mouse_down .mouse_wheel{height:6px;width:6px}}@keyframes a{0%,to{top:8px}50%{top:16px}}.sticky_nav_wrap{overflow:hidden;background-color:#000;position:relative;height:50px;width:100%}.sticky_nav_wrap .by-btn-js{display:none;font-size:13px;min-width:107px;margin-right:5px;padding:3px 5px}.sticky_nav_wrap.sticky-scroll{position:fixed;top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.sticky_nav_wrap.sticky-scroll .by-btn-js{display:inline-block}.sticky_nav_wrap.sticky-scroll .sticky_nav_container{width:calc(100% - 120px);overflow:hidden}.sticky_nav_wrap .next-slide,.sticky_nav_wrap .prev-slide{width:50px;height:50px;-ms-flex:0 0 50px;flex:0 0 50px;display:inline-block;color:#fff;text-align:center;line-height:3em;cursor:pointer;transition:background .3s ease-in-out,left .3s ease-in-out,right .3s ease-in-out;-webkit-transition:background .3s ease-in-out,left .3s ease-in-out,right .3s ease-in-out;-moz-transition:background .3s ease-in-out,left .3s ease-in-out,right .3s ease-in-out;z-index:2;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.sticky_nav_wrap .next-slide:before,.sticky_nav_wrap .prev-slide:before{content:"";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAANCAYAAACUwi84AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgBbVHLEYIwEN2NeLcEStAS7EAqUM8OQnTGq3hXMhC9W4Id0AIdSAkUAKwLCPLxnZJ5v+wG/VC/gYF5tpBSpjCAAKpok8Q0UkrNRgIssiUQJYAwLyZTNRJwbNKIEGBzC++qX8EoRVkhLD6mLHJ9/Tj3BCVOchfnOVnVhchrRDjsvAb6KRDX9WS4ED1S61VDEtFFcmqbwCPOaWJE7JuV5NGxvbaCSfNLmmwNDo7tNkbskgj0knvb6tYaPyfEUGTb4aONetVULsv69xcfBINgIeoK4wIAAAAASUVORK5CYII=);background-repeat:no-repeat;position:absolute;top:17px;height:15px;width:10px;z-index:1}.sticky_nav_wrap .next-slide{right:0}.sticky_nav_wrap .next-slide:before{right:20px}.sticky_nav_wrap .prev-slide{left:0}.sticky_nav_wrap .prev-slide:before{transform:rotate(180deg);left:20px}.sticky_nav_wrap .prev-slide:after{transform:rotate(180deg)}.sticky_nav_wrap .sticky_nav_container{margin:0;padding:0;position:absolute;top:0;left:0;height:50px;transition:left .3s ease-in-out;-webkit-transition:left .3s ease-in-out;-moz-transition:left .3s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.sticky_nav_wrap .sticky_nav_container li{font-size:14px;line-height:1.5;color:#8e9294;list-style:none;padding:0 30px;height:100%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;position:relative;z-index:1;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;transition:color .25s ease-in-out,opacity .25s ease-in-out}.sticky_nav_wrap .sticky_nav_container li:after{content:"";background-color:#009527;position:absolute;left:2px;bottom:0;height:2px;width:calc(100% - 4px);opacity:0}@media (min-width:2000px){.sticky_nav_wrap .sticky_nav_container li{font-size:17px}}@media (min-width:1080px){.sticky_nav_wrap .sticky_nav_container li{font-size:13px}}.sticky_nav_wrap .sticky_nav_container li.active,.sticky_nav_wrap .sticky_nav_container li:hover{color:#fff}.sticky_nav_wrap .sticky_nav_container li.active:after,.sticky_nav_wrap .sticky_nav_container li:hover:after{opacity:1}.sticky_dot_wrap{position:fixed;right:25px;top:20%;z-index:9}.sticky_dot_wrap li{border-radius:50%;border:1px solid #fff;display:block;margin:0 0 20px;height:13px;width:13px}.sticky_dot_wrap li.active{background-color:#fff}.fix-menu.sk-grid.preload.active{display:none}.slide-wraper-js{display:-ms-flexbox;display:flex}.slide-wraper-js .slide-wraper-wrap-js{position:relative;-ms-flex:0 0 100%;flex:0 0 100%;overflow:hidden;height:50px}.slide-wraper-js .slide-wraper-wrap-js.scroller{-ms-flex:0 0 calc(100% - 100px);flex:0 0 calc(100% - 100px)}.slide-wraper-js .sticky_nav_container{z-index:9}</style>')}console.log("%cTest come","background:green;color: #ffffff"),window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});