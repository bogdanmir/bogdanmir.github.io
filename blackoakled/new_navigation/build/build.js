function abjql(e){var t=document.createElement("script");t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,e())}:t.onload=function(){e()},t.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(t)}function abjqlr(o){var e=window.language_abtest;console.log("%cTest come","background:red;color:wite;");var t=e,a={boating:{text:t.boating,link:"/collections/marine-led-light-bars"},vehicle:{text:t.vehicle,link:"/pages/search-by-vehicle"},rv_overlanding:{text:t.rv_overlanding,link:"/collections/rv-overlanding"},atv_utv:{text:t.atv_utv,link:"/pages/search-by-vehicle"},heavy_equipment:{text:t.heavy_equipment,link:"/collections/agriculture-led-light-bars"},emergency:{text:t.emergency,link:"/collections/emergency-response-vehicles"},mounting:{text:t.mounting,link:"/collections/led-light-bar-mounts-2"}},n='<span class="test-menu-control control-prev"></span><div class="ab-test-menu">',s=1;for(item in a){var l=a[item],i="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/new_navigation/img/"+item+".svg";n+='<a href="'+l.link+'" class="test-item-'+s+'"><img src="'+i+'"/><span>'+l.text+"</span></a>",s++}n+='</div><span class="test-menu-control control-next"></span>',o(".header_nav .col-md-12").append(n),o(".header_nav .col-md-12").addClass("at-wraper"),o(".navbar-right .dropdown-grid.no-open-arrow.extra_img").remove();var r='<ul><li class="has-sub"><a href="/pages/about-us">'+t.AboutUs+'</a><ul class="submenu"><li><a href="/pages/how-black-oak-ranks-superior">BuiltBetter</a></li><li><a href="/pages/customer-testimonials">Testimonials</a></li></ul></li><li><a href="/pages/wholesale">Dealers</a></li><li><a href="/pages/contact-us">ContactUs</a></li></ul>',d=o("#cssmenu .parent.has-sub:eq(0)").clone(),u=o("#cssmenu .parent.has-sub:eq(1)").clone(),c=o(".navbar-right .nav-search").html();function p(e){o("span.test-menu-control").attr("style","");var t=o("body").find(".ab-test-menu a.test-item-"+e).data("firstposition");o("body").find(".ab-test-menu a:eq("+e+")").data("firstposition"),console.log(e),console.log(o("body").find(".ab-test-menu a.test-item-"+e)),console.log(t);var a=-t;o("body").find(".ab-test-menu").outerWidth()+a<o(".ab-test-header .at-wraper").width()&&(a=-(o("body").find(".ab-test-menu").outerWidth()-o(".ab-test-header .at-wraper").width()),o("span.test-menu-control.control-next").css("display","none")),0==a&&o("span.test-menu-control.control-prev").css("display","none"),o("body").find(".ab-test-menu").animate({left:a})}function m(){o("body").find(".ab-test-menu").attr("style","");var n=0;o("body").find(".ab-test-menu a").each(function(e,t){var a=o(this).offset().left-o("body").find(".ab-test-menu").offset().left;o(this).data("firstposition",a),n+=o(this).outerWidth()}),o("body").find(".ab-test-menu").css("min-width",n+"px"),p(1)}o(".row.collapse.navbar-collapse.no-transition").html('<div class="col-md-12 search-and-menu"><div class="left-menu"><ul></ul></div><ul></ul>'+c+'<div class="right-menu">'+r+"</div></div>"),d.appendTo("body .search-and-menu .left-menu ul"),u.appendTo("body .search-and-menu .left-menu ul"),o('.search-and-menu .left-menu [href="/pages/search-by-vehicle"]').html(t.vehicle),o(".header_nav .menu-outer-wrapper").remove(),o(".header_nav").addClass("ab-test-header").removeClass("header_nav"),o("body").find(".ab-test-menu").data("current_pos",1),setTimeout(function(){m()},10),o(window).resize(function(){m()}),o(document).on("click",".test-menu-control",function(e){var t=o("body").find(".ab-test-menu").data("current_pos");o(this).hasClass("control-next")?t++:t--,t<=1&&(t=1),t>=o("body").find(".ab-test-menu a").length&&(t=o("body").find(".ab-test-menu a").length),o("body").find(".ab-test-menu").data("current_pos",t),console.log("Next post is "+t),p(t)}),o("body").append('<style>.ab-test-header{width:100%!important;background:linear-gradient(180deg,#e9e9e9,#dedede),#d9d9d9}.ab-test-header .col-md-12{overflow:hidden;padding:0}.ab-test-header .col-md-12,.ab-test-menu{display:flex;justify-content:space-between}.ab-test-menu{margin:0 auto;padding:5px 0;position:relative}.ab-test-menu a{color:#231f20;display:flex;align-items:center;flex:0 0 auto;justify-content:center;padding-left:17px;padding-right:17px}.ab-test-menu a img{margin-right:6px}.ab-test-menu a img,span.test-menu-control{width:28px;height:28px}.submenu{display:none;position:absolute}.has-sub{position:relative}.has-sub:after{position:absolute;top:22px;right:11px;width:8px;height:2px;display:block;background:0 0;content:"";vertical-align:middle;border-top:4px solid #fff;border-right:4px solid transparent;border-left:4px solid transparent}.has-sub>a:hover+.submenu{display:block}#main_navbar .col-md-9.col-sm-6{padding-top:20px}.parent.has-sub .submenu-main-link+ul{display:none;position:absolute;top:auto;left:0}.parent.has-sub .submenu-main-link:hover+ul,.parent.has-sub:hover>.submenu-main-link+ul{display:block}.search-and-menu{display:flex;align-items:center;justify-content:space-between}.search-and-menu ul{display:flex;margin:0;z-index:1}.search-and-menu ul li a{padding:13px 17px;display:block;color:#fff;text-align:left}.search-and-menu ul li a:hover{text-decoration:underline;color:#fff}.search-and-menu ul li.has-sub a{padding-right:30px}.search-and-menu ul ul li{border:1px solid #676767}.search-and-menu ul ul li:hover a{color:#393939;background:#ddd!important;border-bottom:1px solid hsla(0,0%,59%,.15)!important}.search-and-menu ul ul li a{color:#393939;background:#ddd;border-bottom:1px solid hsla(0,0%,59%,.15);padding:11px 15px;width:195px}.search-and-menu ul ul .has-sub:after{border-top:4px solid #393939}.search-and-menu ul ul .has-sub:hover>ul{display:block}.search-and-menu ul ul ul{right:auto;left:100%!important;top:0!important}.search-and-menu ul ul ul li:hover a,.search-and-menu ul ul ul li a{background-color:#f3f3f3}.search-and-menu .right-menu ul>li:hover a{display:block}.search-and-menu .right-menu ul ul{display:none;flex-direction:column}@media only screen and (max-width:767px){#header #main_navbar #mobile-search{display:none!important}}.ab-test-header,.ab-test-header .at-wraper{padding:0}span.test-menu-control{display:block;cursor:pointer;width:21px;position:absolute;background:rgba(0,0,0,.4);backdrop-filter:blur(2px);z-index:1;height:100%}span.test-menu-control.control-next{right:0}span.test-menu-control.control-next:after{left:0;border-right:2px solid #fff;border-bottom:2px solid #fff}span.test-menu-control.control-next:after,span.test-menu-control.control-prev:after{content:"";position:absolute;top:50%;display:block;width:12px;height:12px;transform:translateY(-50%) rotate(-45deg)}span.test-menu-control.control-prev:after{right:0;border-left:2px solid #fff;border-top:2px solid #fff;float:right}</style>')}window.language_abtest={AboutUs:"About Us",BuiltBetter:"Built Better",Testimonials:"Testimonials",Dealers:"Dealers",ContactUs:"Contact Us",boating:"Boating",vehicle:"Vehicle",rv_overlanding:"RV/Overlanding",atv_utv:"ATV/UTV",heavy_equipment:"Heavy Equipment",emergency:"Emergency",mounting:"Mounting"},window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});