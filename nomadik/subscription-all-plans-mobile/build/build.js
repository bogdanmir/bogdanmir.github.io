function abjql(i){var t=document.createElement("script");t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,i())}:t.onload=function(){i()},t.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(t)}function abjqlr(o){window.language_abtest;console.log("%cTest come","background:red;color:wite;");var i,t,e,n;try{i=window,t=document,i.hj=i.hj||function(){(i.hj.q=i.hj.q||[]).push(arguments)},i._hjSettings={hjid:1857555,hjsv:6},e=t.getElementsByTagName("head")[0],(n=t.createElement("script")).async=1,n.src="https://static.hotjar.com/c/hotjar-"+i._hjSettings.hjid+".js?sv="+i._hjSettings.hjsv,e.appendChild(n),window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)},hj("trigger","welcome_box")}catch(i){}window.dataLayer=window.dataLayer||[],dataLayer.push({event:"event-to-ga",eventCategory:"Exp - WB on Subscription Page",eventAction:"loaded"}),o("body").find(".subscribe-box").append('<div class="subscribe-box-row"><div class="price-col"></div><div class="describe-col"></div></div>'),o("body").find(".subscribe-box .price-col"),o("body").find(".subscribe-box").each(function(){var i=o(this).find(".price-col"),t=o(this).find(".describe-col");o(this).find(".subscribe-box-term").detach().appendTo(i),o(this).find(".subscribe-box-price").detach().appendTo(i),o(this).find(".per").detach().appendTo(i),o(this).find(".ironclad-sub-page").detach().appendTo(i),o(this).find(".subscribe-box-frequency").detach().appendTo(t),o(this).find(".delivered").detach().appendTo(t),o(this).find(".retail-value").detach().appendTo(t),o(this).find(".nomadik-button.add-to-cart").detach().appendTo(t)}),o("body").find(".subscribe-box.six-months").append('<div class="subscribe-list"><ul><li>Outdoor challenges to get you in nature more often!</li><li>Expert tips, education and epic destinations in the US</li><li>Online-course “Navigation Mastery. How to go wild on hiking without being afraid of getting lost”</li></ul></div>'),o("body").find(".subscribe-box.twelve-months").append('<div class="subscribe-list"><ul><li>Outdoor challenges to get you in nature more often!</li><li>Expert tips, education and epic destinations in the US</li><li>Online-course “Navigation Mastery. How to go wild on hiking without being afraid of getting lost”</li></ul></div>');var s='<div class="tooltip-inner"><span class="tooltip-close"></span><ul><li>Learn wilderness navigation mastery in only 4 hours</li><li>Experience an old-school navigation with maps and compass</li><li>How to guarantee arriving at your destination</li><li>Special orientation challenges in different conditions</li></ul></div>';o("body").find(".subscribe-box.six-months").append('<div class="tooltip-ico"><div class="tooltip-icon"></div>'+s+'<div class="bg-inside"></div>'),o("body").find(".subscribe-box.twelve-months").append('<div class="tooltip-ico"><div class="tooltip-icon"></div>'+s+'<div class="bg-inside"></div>'),o(document).on("click",".tooltip-ico .tooltip-icon",function(){o(".tooltip-ico").removeClass("active"),o(this).closest(".tooltip-ico").addClass("active")}),o(document).on("click",function(i){var t=o(".tooltip-ico");(!t.is(i.target)&&0===t.has(i.target).length||o(".tooltip-close").is(i.target))&&t.removeClass("active")}),o(document).on("click",".tooltip-ico .bg-inside,.tooltip-close",function(){o(this).closest(".tooltip-ico").removeClass("active")}),o(document).on("touchstart",function(i){var t=i.originalEvent.path[0];o(t).hasClass("bg-inside")&&o("body").find(".tooltip-ico").removeClass("active")}),o("body").append('<style>.hero.hero-subscribe{padding:10px 5px}.hero.hero-subscribe h1{font-size:15px!important;letter-spacing:1.2px;line-height:1.7}.subscribe-boxes{margin:0}.subscribe-boxes .subscribe-box{width:calc(100% - 20px)!important;padding:0 0 10px!important}.subscribe-boxes .subscribe-box:not(.active) a.nomadik-button{color:#fff!important}.subscribe-boxes .subscribe-box.active{z-index:9;box-shadow:none}.subscribe-boxes .subscribe-box-row{display:flex;align-items:center}.subscribe-boxes .price-col{width:47%;padding-right:20px}.subscribe-boxes .price-col .per{font-size:14px;letter-spacing:0;margin:0}.subscribe-boxes .describe-col{text-align:left;padding:8px 0 0;width:53%}.subscribe-boxes .subscribe-box-term{font-size:16px;letter-spacing:0;margin:12px 0 0}.subscribe-boxes .subscribe-box-price{font-size:26px;letter-spacing:0}.subscribe-boxes .subscribe-box-frequency{font-style:normal;font-size:12px;letter-spacing:0}.subscribe-boxes .delivered{font-size:12px;letter-spacing:0;margin:0 0 5px}.subscribe-boxes .retail-value{letter-spacing:0;font-weight:400}.subscribe-boxes a.add-to-cart{background-color:#4a632d!important;border-radius:3px;font-weight:500;font-size:13px;text-decoration:none;text-align:center;letter-spacing:0;padding:7px 0!important;margin:5px 0 0;width:calc(100% - 10px)!important}.subscribe-boxes .ironclad-sub-page{display:flex;align-items:center;justify-content:center}.subscribe-boxes .ironclad-sub-page .iron-logo{max-width:25px}.subscribe-boxes .ironclad-sub-page .iron-text{max-width:50px}.subscribe-box.one-month{border:2px solid #d5d5d5!important;margin-bottom:0!important}.subscribe-box.one-month .banner{height:0}.subscribe-box.six-months{border:2px solid #cf6966!important;margin:10px 0 0!important;z-index:6}.subscribe-box.six-months.active .banner{background:#cf6966!important}.subscribe-box.twelve-months{border:2px solid #6565a2!important;margin:10px 0 1rem!important}.subscribe-box .sub-border{top:-4px;left:-4px;width:calc(100% + 8px);height:calc(100% + 8px)}.subscribe-box .sub-border.active{z-index:1!important;border:none;box-shadow:none}.subscribe-box .banner{height:23px}.subscribe-box .star{width:60px;height:60px}.subscribe-box .star img{position:absolute;width:60px;height:60px;max-width:100%;top:-17px;right:-14px}.subscribe-box .star .star-text{font-size:13px;letter-spacing:0;width:35px;right:-2px;top:-3px}.six-months .banner,.twelve-months .banner{letter-spacing:.5;font-size:10px;padding:6px;border-top-left-radius:8px;border-top-right-radius:8px}.subscribe-list{text-align:left}.subscribe-list ul{margin:5px 0}.subscribe-list li{font-size:11px;margin:0 0 12px;padding:0 15px 0 40px;letter-spacing:.2px;position:relative}.subscribe-list li:before{content:"";background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBnZFRCsIwDIaT7TC7Rp5lDEF88AwewnoGkR2hCPoi6KvzGLvMav+ySXUbbfe/JCH9fpKUaKFOuhREpgWqL9XBGFLMpDJK1AAj7zripAl82MbjfndX0QZTMHK3wnCQVNgZoJlz9kJMhZ0BDtE31b9JCIby561tVpuC7TnF1lJuC3pc23cMDH2PeNYV/rWfwDS2JSH4x2BsEobdCn7hrxMDz6rWa4l9+wGOMXLoy8jjOAAAAABJRU5ErkJggg==");position:absolute;left:15px;top:calc(50% - 7px);height:13px;width:16px}.tooltip-ico{position:absolute}.tooltip-ico,.tooltip-ico .tooltip-icon{content:"";display:block;right:15px;bottom:18px;height:18px;width:18px;z-index:99}.tooltip-ico .tooltip-icon{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgBlZPBK0RBHMe/M+89SlbKQYqyFyfyCAen3ZNysXKQk5TScnLxR7hLcqAcuCFycLF7Ey3vzMGSrBKppezbtzNmBpvdnfd291vT6/36zWe+85vfj0Cju/WhiGUYs+A8woFuFSRwCLiT5+QwvHBxUL6HlALsbtOwtsBJBAESm9J55kbDcSddAXpcs21uWmci1Ira9E48Hu1cunSKIOWEWtd1QIowj7kD0hmVfxZt0DqhDSE0906rZTR36ECtqhTS0cPGSEzY2i/PkBvbp3aUZdIYgpfN4OUojsJHphLHWJRSwie0R40ug7sfyOxN4nk3poAyphMRL2xyEBs++rw5Bstl1XJfb9RVtRJtYoJDC3o9XVFfubmpZxyNHYP4vD3Rc0SvmaiitrFVBcllrpBNbfrmUdlc1WC5pytVaHlFvbhDGUMyCPKVTsJ9uw1KASHUEY7odlBSQRb6KRWUgrznHdKu+HlCIBN+SaG+GbQMzvtCZGnCi6kDVWyvQOZMyrQj8nIch7/4e54Z0V/gjx7XhsXQoo6h5WJoURxa+heWAY8ZA7W8ouibpMz9g5Q4+i85f2CIiWNskdD/G74XgARhdFvVtUzfgkWtSext0UAAAAAASUVORK5CYII=")}.tooltip-ico:not(.active) .bg-inside{display:none}.tooltip-ico.active{background:none;position:fixed;top:69px;left:0;bottom:0;right:0;height:unset;width:unset}.tooltip-ico.active .tooltip-icon{display:none}.tooltip-ico.active .bg-inside{position:fixed;top:69px;left:0;bottom:0;right:0;background:rgba(0,0,0,.4);z-index:9;height:unset;width:unset}.tooltip-ico.active .tooltip-inner{display:flex;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.tooltip-inner{display:none;background:#fff;border-radius:10px;padding:35px 25px;position:absolute;top:20px;right:0;z-index:99;max-width:340px;width:calc(100vw - 50px);box-shadow:0 1px 4px 0 rgba(0,0,0,.4)}.tooltip-inner ul{margin:0;font-size:13px;text-align:left}.tooltip-inner ul li{color:#000;padding:0 0 0 20px;position:relative;margin:0 0 15px;letter-spacing:0}.tooltip-inner ul li:last-child{margin:0}.tooltip-inner ul li:before{content:"";background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEvSURBVHgBbVE7TsNAEJ3Z+ENFcgRzA3MDu6MAy1TIqWiDFNk5AeQECUIJJaKyRRMDKejiG+Ab4CNYNMiO2WHWEMkgRtrVaOe9N/NmETpxEx87iGgj4UCCzMbBOtvVUF2z+MgyUb8DYhhBLhFKRPC51K+odifBS4HfIGMDkq4vhs/zbodlchKxVlh9vB9qBuqX/JYq0OLBC4HgSoEEwHx09jRdJJ5l7O1HuEy8NyThkmhsILHqKn6SdDXQCkK5YSJYoyAtSAob/oQA4aiawrSKhq4521oeKOYvRSlPG2xy5UEQwX29bSJmZpxPiR2rw+Ym4+E6NYURImCGs5U/MCv5+p9rZQ4lRMpDu8fb2Ld+2pas+sjL7HNut3sFca7mxK4CExz+EYeQyh71cjXOrvYFuQiMTWoOpFoAAAAASUVORK5CYII=");position:absolute;left:0;top:calc(50% - 5px);height:11px;width:10px;background-repeat:no-repeat}.tooltip-close{cursor:pointer;position:absolute;width:14px;height:14px;right:12px;top:12px;display:flex;align-items:center;justify-content:center}.tooltip-close:after,.tooltip-close:before{position:absolute;left:0;right:0;margin:auto;content:"";background-color:#b3b3b3;transition:all .25s ease;height:20px;width:1px}.tooltip-close:before{transform:rotate(45deg)}.tooltip-close:after{transform:rotate(-45deg)}.tooltip-close:hover:after,.tooltip-close:hover:before{background-color:#000}.checkout .checkout__form .checkout__title-inner{font-size:12px!important;letter-spacing:3.4px!important}</style>')}window.language_abtest={some_slug:"Lorem Ipsum"},window.jQuery?jQuery(function(i){abjqlr(i)}):abjql(function(){jQuery(function(i){abjqlr(i)})});