function abjql(e){var t=document.createElement("script");t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,e())}:t.onload=function(){e()},t.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(t)}function abjqlr(e){window.language_abtest;console.log("%cTest come","background:red;color:wite;");var t,n,a,o;try{t=window,n=document,t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:1651990,hjsv:6},a=n.getElementsByTagName("head")[0],(o=n.createElement("script")).async=1,o.src="https://static.hotjar.com/c/hotjar-"+t._hjSettings.hjid+".js?sv="+t._hjSettings.hjsv,a.appendChild(o),window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)},hj("trigger","Experiment__remove_foursixty_banner"),console.log("h,o,t,j,a,r")}catch(e){}window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"ROW, PDP: Remove FourSixty Banner",eventAction:"loaded"}),e("body").append("<style>.fs-desktop.fs-slider-container.fs-wide-timeline{display:none}</style>")}window.language_abtest={some_slug:"Lorem Ipsum"},window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});