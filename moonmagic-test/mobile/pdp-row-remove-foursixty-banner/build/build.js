function abjql(e){var t=document.createElement("script");t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,e())}:t.onload=function(){e()},t.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(t)}function abjqlr(e){window.language_abtest;console.log("%cTest come","background:red;color:wite;");e("body").append("<style>.foursixty-inaction-section{display:none}</style>")}window.language_abtest={some_slug:"Lorem Ipsum"},window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});