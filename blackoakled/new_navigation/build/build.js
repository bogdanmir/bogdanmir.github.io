function abjql(e){var a=document.createElement("script");a.type="text/javascript",a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,e())}:a.onload=function(){e()},a.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(a)}function abjqlr(e){var a=window.language_abtest;console.log("%cTest come","background:red;color:wite;");var t=a,n={boating:{text:t.boating,link:"/collections/marine-led-light-bars"},vehicle:{text:t.vehicle,link:"/pages/search-by-vehicle"},rv_overlanding:{text:t.rv_overlanding,link:"#"},atv_utv:{text:t.atv_utv,link:"/pages/search-by-vehicle"},heavy_equipment:{text:t.heavy_equipment,link:"/collections/agriculture-led-light-bars"},emergency:{text:t.emergency,link:"/collections/emergency-response-vehicles"},mounting:{text:t.mounting,link:"/collections/led-light-bar-mounts-2"}},l='<div class="ab-test-menu">';for(item in n){var i=n[item],s="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/new_navigation/img/"+item+".svg";l+='<a href="'+i.link+'"><img src="'+s+'"/><span>'+i.text+"</span></a>"}l+="</div>",e(".header_nav .col-md-12").append(l),e(".navbar-right .dropdown-grid.no-open-arrow.extra_img").remove();var r='<ul><li class="has-sub"><a href="/pages/about-us">'+t.AboutUs+'</a><ul class="submenu"><li><a href="/pages/how-black-oak-ranks-superior">BuiltBetter</a></li><li><a href="/pages/customer-testimonials">Testimonials</a></li></ul></li><li><a href="/pages/wholesale">Dealers</a></li><li><a href="/pages/contact-us">ContactUs</a></li></ul>',o=e("#cssmenu .parent.has-sub:eq(0)").clone(),u=e("#cssmenu .parent.has-sub:eq(1)").clone(),d=e(".navbar-right .nav-search").html();e(".row.collapse.navbar-collapse.no-transition").html('<div class="col-md-12 search-and-menu"><div class="left-menu"><ul></ul></div><ul></ul>'+d+'<div class="right-menu">'+r+"</div></div>"),o.appendTo("body .search-and-menu .left-menu ul"),u.appendTo("body .search-and-menu .left-menu ul"),e('.search-and-menu .left-menu [href="/pages/search-by-vehicle"]').html(t.vehicle),e(".header_nav .menu-outer-wrapper").remove(),e(".header_nav").addClass("ab-test-header").removeClass("header_nav"),e("body").append('<style>.ab-test-header{width:100%!important;background:linear-gradient(180deg,#e9e9e9,#dedede),#d9d9d9}.ab-test-menu{max-width:990px;margin:0 auto;padding:5px 15px;display:flex;justify-content:space-between}.ab-test-menu a{color:#231f20;display:flex;align-items:center}.ab-test-menu a img{margin-right:6px}.submenu{display:none;position:absolute}.has-sub{position:relative}.has-sub:after{position:absolute;top:22px;right:0;width:8px;height:2px;display:block;background:0 0;content:"";vertical-align:middle;border-top:4px solid #fff;border-right:4px solid transparent;border-left:4px solid transparent}.has-sub>a:hover+.submenu{display:block}#main_navbar .col-md-9.col-sm-6{padding-top:20px}.parent.has-sub .submenu-main-link+ul{display:none;position:absolute;top:0;left:0}.parent.has-sub:hover .submenu-main-link+ul{display:block}.search-and-menu{display:flex;align-items:center;justify-content:space-between}.left-menu>ul,.right-menu>ul{display:flex;margin:0}.left-menu>ul>li>a,.right-menu>ul>li>a{padding:13px 17px;display:block}.left-menu>ul>li.has-sub>a,.right-menu>ul>li.has-sub>a{padding-right:30px}</style>')}window.language_abtest={AboutUs:"About Us",BuiltBetter:"Built Better",Testimonials:"Testimonials",Dealers:"Dealers",ContactUs:"Contact Us",boating:"Boating",vehicle:"Vehicle",rv_overlanding:"RV/Overlanding",atv_utv:"ATV/UTV",heavy_equipment:"Heavy Equipment",emergency:"Emergency",mounting:"Mounting"},window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});