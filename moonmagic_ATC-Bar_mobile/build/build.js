function abjql(t){var e=document.createElement("script");e.type="text/javascript",e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,t())}:e.onload=function(){t()},e.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(e)}window.language_abtest={some_slug:"Lorem Ipsum"},window.jQuery?jQuery(function(t){abjqlr(t)}):abjql(function(){jQuery(function(t){abjqlr(t)})});var style_tag=document.createElement("style");style=".product-atc-bar--mobile{transform:translateY(101%);transition:transform .5s ease}.product-atc-bar--mobile.active{transform:translate(0)}",style_tag.innerHTML=style;var ref=document.querySelector("body");function abjqlr(t){var e,a,o,r;window.language_abtest;console.log("%cTest come","background:green;color:#fff;"),e=window,a=document,e.hj=e.hj||function(){(e.hj.q=e.hj.q||[]).push(arguments)},e._hjSettings={hjid:1651990,hjsv:6},o=a.getElementsByTagName("head")[0],(r=a.createElement("script")).async=1,r.src="https://static.hotjar.com/c/hotjar-"+e._hjSettings.hjid+".js?sv="+e._hjSettings.hjsv,o.appendChild(r),window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)},hj("trigger","atc_bar_product_page"),t(window).scroll(function(){-1<navigator.userAgent.toLowerCase().indexOf("android")?(t(this).scrollTop()>=t(".product-wrapper .product__tooltip-box").position().top-40?(t(".product-atc-bar--mobile ").addClass("active"),"true"!=localStorage.getItem("sticky_bar")&&(localStorage.setItem("sticky_bar","true"),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - ATC Bar Product Page",eventAction:"sticky ATC loaded"}),console.log("Android - sticky ATC loaded"))):t(".product-atc-bar--mobile ").removeClass("active"),console.log("Android")):(t(this).scrollTop()>=t(".product-wrapper .product__tooltip-box").position().top-120?(t(".product-atc-bar--mobile ").addClass("active"),"true"!=localStorage.getItem("sticky_bar")&&(localStorage.setItem("sticky_bar","true"),window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - ATC Bar Product Page",eventAction:"sticky ATC loaded"}),console.log("Ios - sticky ATC loaded"))):t(".product-atc-bar--mobile ").removeClass("active"),console.log("Ios"))})}ref.append(style_tag);