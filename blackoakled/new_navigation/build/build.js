function abjql(e){var t=document.createElement("script");t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,e())}:t.onload=function(){e()},t.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(t)}function abjqlr(r){var e=window.language_abtest;console.log("%cTest come","background:red;color:wite;");var t,n,a,o;t=window,n=document,t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:1831568,hjsv:6},a=n.getElementsByTagName("head")[0],(o=n.createElement("script")).async=1,o.src="https://static.hotjar.com/c/hotjar-"+t._hjSettings.hjid+".js?sv="+t._hjSettings.hjsv,a.appendChild(o),window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};try{hj("trigger","new_navigation_icons")}catch(e){}window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - New Navigation: icons and badges",eventAction:"loaded"});var i=e,s={boating:{text:i.boating,link:"/collections/marine-led-light-bars"},vehicle:{text:i.vehicle,link:"/pages/search-by-vehicle"},rv_overlanding:{text:i.rv_overlanding,link:"/collections/rv-overlanding"},atv_utv:{text:i.atv_utv,link:"/pages/search-by-vehicle"},heavy_equipment:{text:i.heavy_equipment,link:"/collections/agriculture-led-light-bars"},emergency:{text:i.emergency,link:"/collections/emergency-response-vehicles"},mounting:{text:i.mounting,link:"/collections/led-light-bar-mounts-2"}},l="https://bogdanmir.github.io/blackoakled/new_navigation/",d='<div class="container ab-test-header"><span class="test-menu-control control-prev"></span><div class="col-md-12 at-wraper"><div class="ab-test-menu">',c=1;for(item in s){var u=s[item],h=l+"img/"+item+".svg";d+='<a href="'+u.link+'" class="test-item-event '+(-1<location.href.search(new RegExp(u.link))?"active ":"")+"test-item-"+c+'" data-scrolgoto="'+c+'"><img src="'+h+'"/><span>'+u.text+"</span></a>",c++}d+='</div></div><span class="test-menu-control control-next"></span></div>',r("#header").after(d),r(".navbar-right .dropdown-grid.no-open-arrow.extra_img").remove();i.AboutUs,r(".navbar-right .nav-search").html();function p(){r("body").find(".ab-test-menu").attr("style","");var a=0;r("body").find(".ab-test-menu a").each(function(e,t){var n=r(this).offset().left-r("body").find(".ab-test-menu").offset().left;r(this).data("firstposition",n),a+=r(this).outerWidth()}),r("body").find(".ab-test-menu").css("min-width",a+"px"),m(1)}function m(e){e>=r("body").find(".ab-test-menu a").length-1&&(e=r("body").find(".ab-test-menu a").length-1),r("body").find(".ab-test-menu").data("current_pos",e),console.log("Next post is "+e),function(e){r("span.test-menu-control").attr("style","");var t=r("body").find(".ab-test-menu a.test-item-"+e).data("firstposition");r("body").find(".ab-test-menu a:eq("+e+")").data("firstposition"),console.log(e);var n=t;0==n&&r("span.test-menu-control.control-prev").css("display","none"),b=!1,r("body").find(".ab-test-header .at-wraper").animate({scrollLeft:n},function(){b=!0,console.log("user_scroll = true")})}(e)}r('.search-and-menu .left-menu [href="/pages/search-by-vehicle"]').html(i.vehicle),r("body").find(".ab-test-menu").data("current_pos",1),window.touchinterval=!1,window.block_scroll=!1,window.scrollTopPos=0,setTimeout(function(){p()},10),r(window).resize(function(){p()}),r(document).on("click",".search-toggle",function(e){r("#header #main_navbar #mobile-search").toggleClass("active")}),r(document).on("click",".test-item-event",function(e){var t=r(this).find("span").text();window.dataLayer=window.dataLayer||[],console.log("Click on"+t),dataLayer.push({event:"event-to-ga",eventCategory:"Exp - New Navigation: icons and badges",eventAction:"click on navigation",eventLabel:t})}),r(".navbar-cart").after('<button class="search-toggle"><img src="'+l+'img/search-ico.svg" alt=""></button>');var b=!0;r(".ab-test-header .at-wraper").scroll(function(e){var i;r("span.test-menu-control").attr("style",""),r(this).outerWidth()+this.scrollLeft>=r("body").find(".ab-test-menu").width()&&r("span.test-menu-control.control-next").css("display","none"),0==this.scrollLeft&&r("span.test-menu-control.control-prev").css("display","none"),1==b&&(console.log("user_scroll "+b),i=this.scrollLeft,r(".ab-test-menu .test-item-event").each(function(e,t){var n=r(this).data("firstposition"),a=r(this).attr("data-scrolgoto"),o=n+r(this).outerWidth();n<=i&&i<o&&r("body").find(".ab-test-menu").data("current_pos",a)}))}),r(document).on("click",".test-menu-control",function(e){var t=r("body").find(".ab-test-menu").data("current_pos");r(this).hasClass("control-next")?t++:t--,t<=1&&(t=1),m(t)}),r("body").append('<style>.ab-test-header{width:100%!important;background:linear-gradient(180deg,#e9e9e9,#dedede),#d9d9d9}.ab-test-header .col-md-12{overflow:auto}.ab-test-header .col-md-12,.ab-test-menu{display:flex;justify-content:space-between;padding:0}.ab-test-menu{-webkit-overflow-scrolling:touch;margin:0 auto;position:relative}.ab-test-menu a{color:#231f20;display:flex;align-items:center;flex:0 0 auto;justify-content:center;padding:5px 17px}.ab-test-menu a.active{background:#b7b7b7}.ab-test-menu a img{margin-right:6px;width:28px;height:28px}span.test-menu-control{width:28px;height:28px;top:0}.search-toggle{background:none;border:none;color:transparent;width:28px;height:28px;float:right;margin-top:19px}.submenu{display:none;position:absolute}#main_navbar .col-md-9.col-sm-6{padding-top:20px}.parent.has-sub .submenu-main-link+ul{display:none;position:absolute;top:auto;left:0}.parent.has-sub .submenu-main-link:hover+ul,.parent.has-sub:hover>.submenu-main-link+ul{display:block}.search-and-menu{display:flex;align-items:center;justify-content:space-between}.search-and-menu ul{display:flex;margin:0;z-index:1}.search-and-menu ul li a{padding:13px 17px;display:block;color:#fff;text-align:left}.search-and-menu ul li a:hover{text-decoration:underline;color:#fff}.search-and-menu ul li.has-sub a{padding-right:30px}.search-and-menu ul ul li{border:1px solid #676767}.search-and-menu ul ul li:hover a{color:#393939;background:#ddd!important;border-bottom:1px solid hsla(0,0%,59%,.15)!important}.search-and-menu ul ul li a{color:#393939;background:#ddd;border-bottom:1px solid hsla(0,0%,59%,.15);padding:11px 15px;width:195px}.search-and-menu ul ul .has-sub:after{border-top:4px solid #393939}.search-and-menu ul ul .has-sub:hover>ul{display:block}.search-and-menu ul ul ul{right:auto;left:100%!important;top:0!important}.search-and-menu ul ul ul li:hover a,.search-and-menu ul ul ul li a{background-color:#f3f3f3}.search-and-menu .right-menu ul>li:hover a{display:block}.search-and-menu .right-menu ul ul{display:none;flex-direction:column}@media (max-width:767px){#header #main_navbar #mobile-search:not(.active){display:none!important}}.ab-test-header,.ab-test-header .at-wraper{padding:0;position:relative}span.test-menu-control{display:block;cursor:pointer;width:21px;position:absolute;background:rgba(0,0,0,.4);backdrop-filter:blur(2px);z-index:1;height:100%}span.test-menu-control.control-next{right:0}span.test-menu-control.control-next:after{left:0;border-right:2px solid #fff;border-bottom:2px solid #fff}span.test-menu-control.control-next:after,span.test-menu-control.control-prev:after{content:"";position:absolute;top:50%;display:block;width:12px;height:12px;transform:translateY(-50%) rotate(-45deg)}span.test-menu-control.control-prev:after{right:0;border-left:2px solid #fff;border-top:2px solid #fff;float:right}</style>')}window.language_abtest={AboutUs:"About Us",BuiltBetter:"Built Better",Testimonials:"Testimonials",Dealers:"Dealers",ContactUs:"Contact Us",boating:"Boating",vehicle:"Vehicle",rv_overlanding:"RV/Overlanding",atv_utv:"ATV/UTV",heavy_equipment:"Heavy Equipment",emergency:"Emergency",mounting:"Mounting"},window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});