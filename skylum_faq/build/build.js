function abjql(t){var e=document.createElement("script");e.type="text/javascript",e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,t())}:e.onload=function(){t()},e.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(e)}function abjqlr(a){window.language_abtest;console.log("%cTest come","background:red;color:#fff;");var p;try{hj("trigger","FAQ")}catch(t){}function e(){setTimeout(function(){a(".ba-slider").each(function(t){var e=a(this).find("img:eq(0)").clone(),o=a(this).find("img:eq(1)").clone();e.attr("style",""),e.addClass("before-img"),o.attr("style",""),a(this).replaceWith('<div class="bs-ab-slider" data-ba-item="'+t+'"></div>'),a("body").find('[data-ba-item="'+t+'"]').append(e),a("body").find('[data-ba-item="'+t+'"]').append(o)}),a(".bs-ab-slider").each(function(t){var e=a(this).find("img:eq(0)").clone(),o=a(this).find("img:eq(1)").clone();e.attr("style",""),a(this).attr("style",""),e.addClass("before-img"),o.attr("style",""),a(this).replaceWith('<div class="bs-ab-slider" data-ba-item="'+t+'"></div>'),a("body").find('[data-ba-item="'+t+'"]').append(e),a("body").find('[data-ba-item="'+t+'"]').append(o)}),setTimeout(function(){a(".bs-ab-slider").beforeAfter(),a(window).trigger("resize")},100)},100),a(window).trigger("resize")}(p=jQuery).fn.extend({beforeAfter:function(){p(this).each(function(){var a=p(this),t=p("img:last",a),e=t.height(),o=t.width();p(a).height(e),p("img:first",a).wrap('<div class="bs-ab-slider-before-image"/>').width(o),p(".bs-ab-slider-before-image",a).css({width:"50%"}),p("img",a).addClass("bs-ab-slider-image"),a.append('<div class="ba-control"><div class="ba-control-area"><div class="ba-control-bar"><span class="ba-left-arrow" /><span class="ba-control-handle" /><span class="ba-right-arrow" /></div></div></div>');var i,s,n=a.find(".ba-control"),r=n.find(".ba-control-area");function l(t){var e=(t.pageX-i)/s*100,o=Math.floor(Math.min(Math.max(0,e),100));r.css({left:u(o)}),p(".bs-ab-slider-before-image",a).width(u(o))}function c(){p(document).off("mousemove",l).off("mouseup",c)}function d(){e=t.height(),o=t.width(),p(".bs-ab-slider",a).height(e),p(".ba-control",a).height(e),p(".bs-ab-slider-before-image img",a).width(o),a.height(e)}function u(t){return t+"%"}a.find("*"),r.css({left:"50%"}),p(window).on("resize",d),r.on("mousemove",function(t){t.preventDefault(),i=n.offset().left,r.offset().left,s=n.width(),p(document).on("mousemove",l).on("mouseup",c)}),a.on("mouseover",function(t){}),a.on("mouseleave",function(t){}),a.on("click",function(t){t.preventDefault();var e=(t.pageX-p(this).offset().left)/n.width()*100,o=Math.round(Math.min(Math.max(0,e),100));r.stop().animate({left:u(o)}),p(".bs-ab-slider-before-image",a).stop().animate({width:u(o)})}),a.on("touchmove",function(t){t.preventDefault();var e=(t.originalEvent.targetTouches[0].pageX-n.offset().left)/n.width()*100,o=Math.round(Math.min(Math.max(0,e),100));r.css({left:u(o)}),p(".bs-ab-slider-before-image",a).width(u(o))}),d()})}}),setInterval(function(){a(window).trigger("resize")},0),e(),a("body").on("click",".owl-dots .owl-dot",function(t){a(window).trigger("resize"),t.preventDefault()}),$outhtml='<section class="faq-section">',$outhtml+='<div class="container">',$outhtml+='<div class="row">',$outhtml+='<div class="col-12"><h2 class="faq-title">Frequently asked questions</h2></div>',$outhtml+='<div class="col-12 col-md-6 col-lg-6 col-xl-6">',$outhtml+='<ul class="questions-list questions_l">',$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">What should I do if I have any payment issues? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+='<p>If you need help in resolving any payment issues, please contact our payment processing partner FastSpring <a href="https://fastspring.com/question-a-charge/" target="_blank">via this form</a> </p>',$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">How to install the application? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+='<p>Installation is simple and intuitive. In case you’ll have any issues with installation after purchase, please check out <b>installation guide for <a href="https://manual.skylum.com/4/en/topic/installing-activating-luminar-for-macos" target="_blank">Mac</a> or for <a href="https://manual.skylum.com/4/en/topic/installing-activating-luminar-for-win" target="_blank">Windows</a></b> and you can always contact our Support team via this <a href="https://skylum.com/support" target="_blank">form.</a></p>',$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">Will it work on my computer? What are the system requirements? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>Here is the list of minimum system requirements for Microsoft® Windows®:</p><p><b>Processor</b>\tIntel® Core™ i5 generation or better</p><p><b>Graphics</b>\tOpen GL 3.3 or later compatible</p><p><b>Memory</b>\t8 GB of RAM</p><p><b>System</b>\tWindows 7® (only 64-bit OS), Windows 8.1® (only 64-bit OS), Windows 10® (only 64-bit OS)</p><p><b>Disk space</b>\t10 GB free space</p><p><b>Monitor</b>\tAt least 1280×768 resolution</p>   <br>  <p>Here is the list of minimum system requirements for Apple® macOS®:</p>  <p><b>Processor</b>    Intel® Core™ i5 generation or better</p>   <p><b>Graphics</b>\tIntegrated graphics card</p>   <p><b>Memory</b>\t8 GB of RAM</p>   <p><b>System</b>\tmacOS 10.12 or higher</p>   <p><b>Disk space</b> 10 GB free space</p>   <p><b>Monitor</b> At least 1280×768 resolution</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">How to get started? Do you have any tutorials or step-by-step guides? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+='<p>We have 80+ tutorials and beginners’ guides at <a href="https://skylum.com/academy" target="_blank">Skylum Academy.</a></p>',$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">Where can I see videos on how Luminar 4 works? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+='<p>The video tutorials are available <a href="https://skylum.com/video-galleries/luminar-video-tutorials?page=2&per-page=100" target="_blank">here</a>. We also invite you to check out our official <a href="https://www.youtube.com/user/macphunsoftware/playlists" target="_blank">YouTube channel</a> which contains video tutorials for Luminar 4.</p>',$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">Do I need to have any photo editing skills to use Luminar 4? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>Luminar is suitable for both beginners and pro photographers. You can either apply Luminar Looks to your photos (sets of adjustments created by professionals), or you can experiment with hundreds of tools and sliders by yourself.</p><p>With RAW files support, export to major file formats, layers, masks and much more, Luminar suits all your photography needs.</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">How do AI features work? Is it hard to understand how to use them? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>The algorithms that power AI tools in Luminar 4 are complex and intelligent. Still, they are super-easy to use: Luminar allows you to quickly achieve real results that still remain under your control.</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">How to get support and answers to my questions? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+='<p>You can contact our support team via this <a href="https://skylum.com/support" target="_blank">form</a> and they’ll be glad to reply within 24 hours.</p>',$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">What are the terms of the payment? Is it a subscription? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>Unlike subscription plans, we are offering lifetime licenses; therefore, you will be able to use the application you‘ve purchased for an unlimited period of time.</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">Do I need to pay for updates? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>Each update to the current version of the Software will be distributed free of charge to you; you may be notified that the Update is available through an in-program notification, via the e-mail address you provided upon registration of the Software, or through our website.</p><p>Upgrades will be offered for a separate fee (we provide huge discounts for the owners of the older versions of our products). “Upgrade” means a new version of the Software issued by Skylum from time to time in its sole discretion (typically once every calendar year).</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">Does Luminar 4 come with everything in it? Is it fully functional without Luminar Looks, Sky Packs and LUTs that are offered in addition to the license? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>Sure, Luminar is fully functional as is. Luminar comes with a variety of embedded Looks, LUTs, Sky Samples, Objects, etc. Purchasing additional items is completely optional.</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+="</ul>",$outhtml+="</div>",$outhtml+='<div class="col-12 col-md-6 col-lg-6 col-xl-6">',$outhtml+='<ul class="questions-list questions_r">',$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">What is Aurora HDR? When HDR photo editing is needed? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>High Dynamic Range (HDR) photography is a popular photographic technique designed to overcome the limitations of image sensors in digital photographs. This process utilizes multiple exposures of the same subject, each shot at different exposure values (“brackets”). Those brackets are then automatically merged into a single shot which encompasses a greater exposure range.</p><p>Aurora HDR is a joint project between Skylum and Trey Ratcliff to produce the most powerful, simple and fast HDR photo editing software in the world for Mac and PC. Aurora HDR contains every imaginable tool needed to produce high-quality “next generation” dramatic images.</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">How does 30-Day Money-Back Guarantee work? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+='<p>If you are not completely satisfied with the Software for any reason, you may return the Software, together with your receipt or any other proof of purchase of the Software, for a refund of the money you paid for the Software (less any applicable taxes or other fees) at any time during the thirty (30) day period following the date of purchase. Upon receiving a refund you shall cease any and all use and destroy all copies, full or partial, of the Software for which you no longer possess a paid-up license. All refund requests are processed by our Support team, you can contact them via this <a href="https://skylum.com/support" target="_blank">form.</a></p>',$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">Do I need to have Photoshop or Lightroom installed to use Luminar 4? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>Luminar 4 works both in a standalone mode and as a plugin. Photoshop or Lightroom are not required for the app to work. Still, you may install Luminar as a plugin to these applications during the initial setup.</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">How to use Luminar 4 as a plugin for Photoshop, Lightroom, Photos for Mac? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+='<p>Please check out <a href="https://manual.skylum.com/4/en/topic/using-luminar-with-other-software" target="_blank">this tutorial</a> on how to use Luminar with other software.</p>',$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">What versions of Photoshop, Lightroom, Photos for Mac are supported? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>On Mac OS you can use Luminar 4 as a plugin for Lightroom (starting from version 4), Photoshop (from version CS5), Photoshop Elements (from version 13), Apple Photos, and Aperture.</p><p>On Windows you can use Luminar 4 as a plugin for Lightroom (starting from version 4), Photoshop Elements (from version 13) and Photoshop (from version CS5).</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">How to use Luminar 4 on multiple computers? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>Luminar 4 is meant to be used by a single person, that is why we offer a license for 1 device by default. But we realize that sometimes a person may have more than just one device that is why you have an option to change license quantity when selecting the items you would like to purchase.</p><p>Alternatively, you also have the ability to purchase an additional seat to your license later in your Skylum account. If you want to transfer your license to a new computer, you can always reset your license counter in your Skylum account.</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">Can I use the application in a standalone mode and as a plugin with one license? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>Yes, you can use Luminar both in a standalone mode and as a plugin with one license as long as both versions of the application are installed on the same device.</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">Do you have a trial version of Luminar 4 available for download? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+='<p>You can download a trial version of Luminar from <a href="https://skylum.com/download/luminar-4" target="_blank">our website</a> and check out all of the features by yourself.</p>',$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">How to easily upload and browse photos in Luminar 4? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+='<p>There are several ways to open images into Luminar for editing.</p>  <ul class="circle-list"><li>You can <b>Add Folders</b> into Luminar Catalog and leave your photos exactly where they are on your hard drives.</li><li>If you want to import images from a memory card or external drive, then use the <b>Import Images</b> option that moves or copies your images to a new location.</li><li>You can also open your images from any location with the <b>Edit Single Image</b> command, which allows you to easily edit and export photos that you do not want to keep in your Luminar Catalog.</li></ul>',$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">Does Luminar 4 support RAW files? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+='<p>Yes, Luminar supports RAW files. You can see the list of supported cameras <a href="https://media.macphun.com/uploads/uploads/Luminar_4.1.0_Supported_Cameras.pdf" target="_blank">here</a>.</p>',$outhtml+="</div>",$outhtml+="</li>",$outhtml+='<li class="question-item">',$outhtml+='<div class="question-item_title">Is Luminar 4 translated into my language? <span class="arrow-ico"></span></div>',$outhtml+='<div class="question_desc">',$outhtml+="<p>Luminar 4 is translated into 11 languages: English, German, Spanish, French, Italian, Japanese, Chinese, Korean, Dutch, Portuguese, Russian</p>",$outhtml+="</div>",$outhtml+="</li>",$outhtml+="</ul>",$outhtml+="</div>",$outhtml+="</div>",$outhtml+="</div>",$outhtml+="</section>",a("body").on("click",".question-item_title",function(){var t=a(this).closest(".question-item"),e=a(this);e.hasClass("faq__active")?(t.find(".question_desc").slideUp(500),e.removeClass("faq__active")):(e.addClass("faq__active"),t.find(".question_desc").slideDown(500))}),a("body").find(".wrap-content").append($outhtml),a("body").on("click",".questions_l .question-item:nth-child(1)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"What should I do if I have any payment issues"}),console.log("faq_1")}),a("body").on("click",".questions_l .question-item:nth-child(2)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"How to install the application"}),console.log("faq_2")}),a("body").on("click",".questions_l .question-item:nth-child(3)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"Will it work on my computer"}),console.log("faq_3")}),a("body").on("click",".questions_l .question-item:nth-child(4)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"How to get started"}),console.log("faq_4")}),a("body").on("click",".questions_l .question-item:nth-child(5)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"Where can I see videos on how Luminar 4 works"}),console.log("faq_5")}),a("body").on("click",".questions_l .question-item:nth-child(6)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"Do I need to have any photo editing skills to use Luminar 4"}),console.log("faq_6")}),a("body").on("click",".questions_l .question-item:nth-child(7)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"How do AI features work"}),console.log("faq_7")}),a("body").on("click",".questions_l .question-item:nth-child(8)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"How to get support and answers to my questions"}),console.log("faq_8")}),a("body").on("click",".questions_l .question-item:nth-child(9)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"What are the terms of the payment"}),console.log("faq_9")}),a("body").on("click",".questions_l .question-item:nth-child(10)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"Do I need to pay for updates"}),console.log("faq_10")}),a("body").on("click",".questions_l .question-item:nth-child(11)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"Does Luminar4 come with everything in it"}),console.log("faq_11")}),a("body").on("click",".questions_r .question-item:nth-child(1)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"What is Aurora HDR"}),console.log("faq_12")}),a("body").on("click",".questions_r .question-item:nth-child(2)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"How does 30-Day Money-Back Guarantee work"}),console.log("faq_13")}),a("body").on("click",".questions_r .question-item:nth-child(3)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"Do I need to have Photoshop or Lightroom installed to use Luminar 4"}),console.log("faq_14")}),a("body").on("click",".questions_r .question-item:nth-child(4)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"How to use Luminar 4 as a plugin for Photoshop, Lightroom, Photos for Mac"}),console.log("faq_15")}),a("body").on("click",".questions_r .question-item:nth-child(5)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"What versions of Photoshop, Lightroom, Photos for Mac are supported"}),console.log("faq_16")}),a("body").on("click",".questions_r .question-item:nth-child(6)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"How to use Luminar 4 on multiple computers"}),console.log("faq_17")}),a("body").on("click",".questions_r .question-item:nth-child(7)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"Can I use the application in a standalone mode and as a plugin with one license"}),console.log("faq_18")}),a("body").on("click",".questions_r .question-item:nth-child(8)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"Do you have a trial version of Luminar 4 available for download"}),console.log("faq_19")}),a("body").on("click",".questions_r .question-item:nth-child(9)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"How to easily upload and browse photos in Luminar 4"}),console.log("faq_20")}),a("body").on("click",".questions_r .question-item:nth-child(10)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"Does Luminar 4 support RAW files"}),console.log("faq_21")}),a("body").on("click",".questions_r .question-item:nth-child(11)",function(){window.dataLayer=window.dataLayer||[],dataLayer.push({event:"UA_event",eventCategory:"Checkout",eventAction:"click on FAQ",eventLabel:"Is Luminar 4 translated into my language"}),console.log("faq_22")});var t=a(".checkout-page.sk-grid").clone();function o(){a(".checkout-page.sk-grid:not(.cloner-section) .up-sale-products__btn.js-up-sale-products-btn").hasClass("deselect")?a(".checkout-page.sk-grid.cloner-section .js-up-sale-products-btn").addClass("deselect"):a(".checkout-page.sk-grid.cloner-section .js-up-sale-products-btn").removeClass("deselect"),a(".checkout-page.sk-grid:not(.cloner-section) [data-target-product]").each(function(){var t=a(this).attr("data-target-product");a(this).hasClass("active")?a('.checkout-page.sk-grid.cloner-section [data-target-product="'+t+'"]').addClass("active-item"):a('.checkout-page.sk-grid.cloner-section [data-target-product="'+t+'"]').removeClass("active-item")})}t.addClass("cloner-section").find(".plans__product.plans__product_up-sale").removeAttr("data-gtm-vis-recent-on-screen-613848_706").removeAttr("data-gtm-vis-first-on-screen-613848_706").removeAttr("data-gtm-vis-total-visible-time-613848_706").removeAttr("data-gtm-vis-has-fired-613848_706"),t.find("[data-license-count]").removeAttr("data-license-count"),t.find("[data-one-curency]").removeAttr("data-one-curency"),t.find("[data-fcpr]").removeAttr("data-fcpr"),t.find("[data-lcpr]").removeAttr("data-lcpr"),t.find("[data-stat-link]").removeAttr("data-stat-link").addClass("clone-click-item"),a(".wrap-content").after(t),a("body").on("click",".cloner-section [data-target-product]",function(){var t=a(this).attr("data-target-product");return a('.checkout-page.sk-grid:not(.cloner-section) [data-target-product="'+t+'"]').click(),o(),!1}),a("body").on("click",".cloner-section .clone-click-item",function(){return a(this).attr("data-target-product"),a('.checkout-page.sk-grid:not(.cloner-section) [data-stat-link="buyCheckout"]').click(),!1}),a("body").on("click",".cloner-section [data-show-popup-name]",function(){var t=a(this).attr("data-show-popup-name");return a('.checkout-page.sk-grid:not(.cloner-section) [data-show-popup-name="'+t+'"]').click(),e(),!1}),a("body").on("click",".cloner-section .js-up-sale-products-btn",function(){return a(".checkout-page.sk-grid:not(.cloner-section) .js-up-sale-products-btn").click(),o(),!1}),setInterval(function(){o()}),a(".cloner-section .plans__product .js-product-more").mouseover(function(){a(this).find(".checkout-page__product-link-desc.js-product-more-desc").addClass("active")}),a(".cloner-section .plans__product .js-product-more").mouseout(function(){a(this).find(".checkout-page__product-link-desc.js-product-more-desc").removeClass("active")}),a("body").on("click",".cloner-section .plans__product .js-product-more-click",function(){a(this).find(".checkout-page__product-link-desc.js-product-more-desc").addClass("active")}),a(".cloner-section .plans__product .js-product-more-click").mouseleave(function(){a(this).find(".checkout-page__product-link-desc.js-product-more-desc").removeClass("active")}),a("body").on("click",".product-details-popup__btns-wrap [data-target]",function(){var t=a(this).attr("data-target");return a('.checkout-page.sk-grid:not(.cloner-section) [data-target-product="'+t+'"]').click(),o(),!1}),a("head").append('<script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async><\/script>'),a("body").find(".wrap-content").append('<section class="sk-section sk-section_of_b_none common-trustpilot" data-preload-section data-analytics-block="common-trustpilot"><div class="container">    <div class="row"><div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 common-trustpilot__title"><h2 class="sk-h2 sk-h2_of_b">Rated "Excellent" by customers</h2><figure class="sk-figure common-trustpilot__rating"><img src="https://dev.aim-it.com.ua/skylum/trust-white.svg" alt=""></figure></div></div>     <div class="row"><div class="col-12">   <div class="trustpilot-wrap"><div class="trustpilot-widget" data-locale="en-US" data-template-id="539adbd6dec7e10e686debee" data-businessunit-id="5c5c62aa12f48a0001fe802d" data-style-height="500px" data-style-width="100%" data-theme="light" data-tags="SelectedReview" style="margin-top: -100px;"></div></div></div></div></div></section>'),a("body").find(".wrap-content").append('<div class="common-video-free-tutorials sk-section preload" data-preload-section="" data-analytics-block="common-video-free-tutorials"><div class="container"><div class="row"><div class="col-12"><h2 class="common-video-free-tutorials__title sk-h2 sk-h2_of_b">                    Lots of free video tutorials                </h2></div></div><div class="row"><div class="col-12 col-md-6"><div class="common-video-free-tutorials__img-wr"><a class="sk-btn common-video-free-tutorials__btn" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="Xcybk4YiXy0"><figure class="sk-btn-icon play-icon"><svg enable-background="new 0 0 314.068 314.068" height="512" viewBox="0 0 314.068 314.068" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m293.002 78.53c-43.356-75.095-139.384-100.826-214.473-57.462-75.095 43.35-100.827 139.374-57.463 214.466 43.35 75.095 139.375 100.83 214.465 57.47 75.096-43.365 100.84-139.384 57.471-214.474zm-73.168 187.271c-60.067 34.692-136.894 14.106-171.576-45.973-34.69-60.067-14.097-136.893 45.972-171.568 60.071-34.69 136.894-14.106 171.578 45.971 34.685 60.076 14.098 136.886-45.974 171.57zm-6.279-115.149-82.214-47.949c-7.492-4.374-13.535-.877-13.493 7.789l.421 95.174c.038 8.664 6.155 12.191 13.669 7.851l81.585-47.103c7.506-4.332 7.522-11.388.032-15.762z"></path></svg></figure></a><img src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-Master-Luminar-4-in-5-Minutes-Luminar-4-Tutorial.jpg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-Master-Luminar-4-in-5-Minutes-Luminar-4-Tutorial.jpg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-Master-Luminar-4-in-5-Minutes-Luminar-4-Tutorial.jpg" alt=""></div></div><div class="col-12 col-md-6"><div class="common-video-free-tutorials__img-wr"><a class="sk-btn common-video-free-tutorials__btn" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="CfS7FRZm56s"><figure class="sk-btn-icon play-icon"><svg enable-background="new 0 0 314.068 314.068" height="512" viewBox="0 0 314.068 314.068" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m293.002 78.53c-43.356-75.095-139.384-100.826-214.473-57.462-75.095 43.35-100.827 139.374-57.463 214.466 43.35 75.095 139.375 100.83 214.465 57.47 75.096-43.365 100.84-139.384 57.471-214.474zm-73.168 187.271c-60.067 34.692-136.894 14.106-171.576-45.973-34.69-60.067-14.097-136.893 45.972-171.568 60.071-34.69 136.894-14.106 171.578 45.971 34.685 60.076 14.098 136.886-45.974 171.57zm-6.279-115.149-82.214-47.949c-7.492-4.374-13.535-.877-13.493 7.789l.421 95.174c.038 8.664 6.155 12.191 13.669 7.851l81.585-47.103c7.506-4.332 7.522-11.388.032-15.762z"></path></svg></figure></a><img src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-AI-Tools-Explained-Luminar-4-Tutorial.jpg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-AI-Tools-Explained-Luminar-4-Tutorial.jpg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-AI-Tools-Explained-Luminar-4-Tutorial.jpg" alt=""></div></div></div><div class="row"><div class="col-12"><a class="discover-more sk-subtitle common-video-free-tutorials__btn-more-tutorials" data-show-popup-next="" data-show-popup-name="common-video-see-more-tutorials" data-show-popup-before="">            See More Tutorials                    <figure><svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12"><g><g><g transform="rotate(270 9 6)"></g><g transform="rotate(540 8.5 6)"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="50" stroke-width="2" d="M16 6H1"></path></g><g transform="rotate(540 13.5 6)"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="50" stroke-width="2" d="M15.998 1v0L11 6.005v0l4.998 5v0"></path></g></g></g></svg></figure></a></div></div></div></div>'),a("body").append('<style>.checkout-page{min-height:100%}.checkout-page.cloner-section{padding:58px 0}.checkout-page.cloner-section .plans__product_luminar .plans__product-prices-wrap_luminar{display:none}.checkout-page.cloner-section .plans__product_luminar .plans__product-prices-wrap_luminar.active{display:flex}.checkout-page .plans__product.active-item .plans__product-indicator{border-color:#0062fe;background-color:#0062fe}.checkout-page .plans__item.active-item:after,.checkout-page .plans__product.active-item .plans__product-indicator svg{opacity:1}.faq-section{background:#f1f1f1;padding:65px 0 50px;margin:50px 0 0}.faq-section .faq-title{color:#000;font-size:30px;font-family:Graphik LCG,Helvetica,Arial,sans-serif;text-align:center;margin:0 0 39px}.faq-section .question-item{background:#fff;border-radius:4px;margin:0 0 8px;position:relative;border:1px solid transparent}.faq-section .question-item:hover{border-color:#000}.faq-section .question-item_title{color:#000;font-weight:500;font-size:18px;padding:13px 40px 13px 18px;cursor:pointer;position:relative;transition:all .2s;border-radius:4px}.faq-section .question-item_title.faq__active .arrow-ico{transform:rotate(180deg)}.faq-section .question_desc{color:#000;font-size:16px;padding:0 14px 18px;display:none}.faq-section .question_desc a{font-weight:500}.faq-section .arrow-ico{position:absolute;right:20px;top:calc(50% - 5px);height:10px;width:10px;transition:all .2s}.faq-section .arrow-ico:after,.faq-section .arrow-ico:before{content:"";background:#686868;display:block;height:2px;width:7px;border-radius:4px;position:absolute;top:4px}.faq-section .arrow-ico:before{transform:rotate(45deg);left:-1px}.faq-section .arrow-ico:after{transform:rotate(-45deg);left:3px}.faq-section .circle-list{list-style-type:disc;padding:0 0 0 18px}.faq-section .circle-list li{margin:0 0 10px}.common-trustpilot{padding-top:60px}.common-trustpilot .common-trustpilot__title{text-align:center}.trustpilot-wrap{overflow:hidden;margin-top:40px}.common-video-free-tutorials{background:#e5e5e5;margin-top:60px;padding-top:60px;text-align:center}.common-video-free-tutorials__img-wr{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;margin:0 auto;max-width:750px;position:relative}.common-video-free-tutorials__img-wr img{width:100%;border-radius:5px}.common-video-free-tutorials__btn{position:absolute;top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;z-index:2}.common-video-free-tutorials__btn .sk-btn-icon{margin-right:0;width:70px;height:70px}.discover-more{transition:background-color .3s;color:#fff;height:50px;font-size:18px;background-color:#009dff;padding:14px 30px;border-radius:25px;font-weight:400;min-width:260px;max-width:260px;line-height:20px}.discover-more.active,.discover-more:hover{background-color:#004ec8}.discover-more figure{margin-left:5px;padding-top:2px;width:14px}.discover-more figure svg{width:100%;display:block;transition:transform .25s ease-in-out;transform:rotate(90deg)}.discover-more figure svg.arrow{transform:rotate(45deg)}.common-video-free-tutorials .play-icon svg{fill:#fff;transition:all .35s ease-in-out}.common-video-free-tutorials__btn:hover .play-icon svg{fill:#c3c3c3}.common-video-free-tutorials__btn-more-tutorials{margin-top:30px;cursor:pointer;line-height:24px;display:inline-block;text-align:center}.common-video-free-tutorials__btn-more-tutorials figure{padding-top:0;padding-bottom:2px;display:inline-block;vertical-align:middle}.video-popup__container.mainPopupContainer{max-width:80%}.video-popup__free-tutorials .video-popup__container.mainPopupContainer{position:relative;padding:10px}.video-popup__wrap-gallery{position:relative;height:100%;max-height:620px;overflow:visible;padding:30px 15px}.gallery-video{height:560px;overflow-y:auto}.common-video-gallery__item-preview,.common-video-gallery__play span,.tile__top{background-repeat:no-repeat;background-position:50%}.tile__top{position:relative;width:100%;height:288px;margin-bottom:48px;background-size:cover;border-radius:3px;overflow:hidden}.tile_gallery .tile__top{height:204px;margin-bottom:24px}.tile__play,.tile__play span,.tile__top a{position:absolute;top:0;left:0}.tile__play,.tile__top a{cursor:pointer;width:100%;height:100%}.tile__play{z-index:2;transition:all .3s}.tile__play span{opacity:0;display:block;width:60px;height:60px;background-image:url(https://media.macphun.com/img/uploads/uploads/macphun/video-galleries/play-button.svg);background-position:50%;background-repeat:no-repeat;background-size:contain;bottom:0;right:0;margin:auto;transform:scale(0);transition:all .3s}.bs-ab-slider__fake.reinit{width:1px!important}.bs-ab-slider{position:relative;height:370px;overflow:hidden}.bs-ab-slider-image,.bs-ab-slider img{position:absolute;width:100%;top:0}.bs-ab-slider-image{left:0}.ba-slider-before-image{overflow:hidden;position:relative;z-index:1}.bs-ab-slider-before-image{z-index:3;position:relative;overflow:hidden;height:100%}.ba-control{width:100%;z-index:4;top:0;overflow:hidden}.ba-control,.ba-control-area{height:100%;position:absolute}.ba-control-area{z-index:1;width:26px;left:0;margin-left:-13px}.ba-control-bar{width:2px;height:100%;margin:0 auto;background:#fff}.ba-control-handle,.ba-left-arrow,.ba-right-arrow{top:50%;position:absolute;display:none}.ba-left-arrow,.ba-right-arrow{border-top:5px solid transparent;border-bottom:5px solid transparent;margin-top:-5px}.ba-left-arrow{left:-56px;display:block;top:0}.ba-left-arrow:after{content:"Before";background:hsla(0,0%,100%,.7);color:#171717}.ba-right-arrow:after{content:"After";background-color:#000;color:#fff}.ba-left-arrow:after,.ba-right-arrow:after{font-size:13px;font-weight:800;text-transform:uppercase;width:70px;border-radius:0;top:5px;cursor:pointer;height:28px;border:0;text-decoration:none;user-select:none;outline:0;position:absolute;left:0;margin:auto;padding:0 10px;font-family:Roboto,sans-serif;line-height:30px;text-align:center}.ba-right-arrow{right:12px;display:block;top:0}.ba-control-handle{height:60px;width:8px;margin:-30px 0 0 -4px;left:50%;background-color:#f90;cursor:move}</style>')}window.language_abtest={some_slug:"Lorem Ipsum"},window.jQuery?jQuery(function(t){abjqlr(t)}):abjql(function(){jQuery(function(t){abjqlr(t)})});

$('body').find('.wrap-content').append(`<div class="mainPopupWrapper video-popup video-popup__free-tutorials" id="common-video-see-more-tutorials" data-hide-popup="">

    <div class="mainPopupContainer video-popup__container video-popup__container-gallery">
        <a title="Close" class="close" href="#" data-hide-popup="#common-video-see-more-tutorials">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path fill="#fff" d="M10.48 9.07l6.37-6.37a1 1 0 0 0 0-1.4 1 1 0 0 0-1.41 0L9.07 7.66 2.7 1.3a.99.99 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l6.36 6.37-6.36 6.37a1 1 0 0 0 0 1.41 1 1 0 0 0 1.4 0l6.37-6.37 6.37 6.37a1 1 0 0 0 1.41-1.41z"></path>
            </svg>
        </a>
        <div class="video-popup__wrap video-popup__wrap-gallery">
            <section class="gallery-video preload" data-preload-section="" data-gtm-vis-first-on-screen-613848_706="10258076" data-gtm-vis-total-visible-time-613848_706="100" data-gtm-vis-has-fired-613848_706="1">
                <div class="container">
                    <div class="gallery-video__tile-wrap">
                        <div class="row load-animate" data-videos="featured" data-type="gallery-video">

                            <div class="col-12">

                                <div id="video-list" class="list-view row">
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery preload" style="height: 312px;">
                                            <div class="tile__top" id="video-gallery_item_689">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="-v9aeV2ICog">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    Creative Photo Editing with Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Professional photographer and Luminar ambassador Gary McIntyre shows how to boost your creativity with Luminar 4.                                                </p>
                                            </div>
                                        </div>
                                        <style>
                                            #video-gallery_item_689 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_689 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/689/INACTION34.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_689 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/689/INACTION34.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_689 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/689/INACTION34.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="690">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 312px;">
                                            <div class="tile__top" id="video-gallery_item_690">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="EQcm3Hz_BSw">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Make Surreal Images of New York. Luminar 4                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Luminar 4 lets you create dramatic images in seconds.                                                 </p>
                                            </div>
                                        </div>
                                        <style>
                                            #video-gallery_item_690 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_690 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/690/YellowandBlackYoutubeChannelArt.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_690 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/690/YellowandBlackYoutubeChannelArt.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_690 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/690/YellowandBlackYoutubeChannelArt.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="691">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 312px;">
                                            <div class="tile__top" id="video-gallery_item_691">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="Z2yaYwEWFvQ">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Enhance a Portrait in Under One Minute. Luminar 4                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    With Luminar 4, you can easily fix any imperfections and enhance your model's look.                                                </p>
                                            </div>
                                        </div>
                                        <style>
                                            #video-gallery_item_691 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_691 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/691/YellowandBlackYoutubeChannelArt2.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_691 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/691/YellowandBlackYoutubeChannelArt2.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_691 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/691/YellowandBlackYoutubeChannelArt2.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="692">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 312px;">
                                            <div class="tile__top" id="video-gallery_item_692">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="r8jhxXOSGhM">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Make a Perfect Travel Portrait. Luminar 4                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Make your memories shine bright with stunning travel photos, all thanks to Luminar 4.                                                </p>
                                            </div>
                                        </div>
                                        <style>
                                            #video-gallery_item_692 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_692 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/692/YellowandBlackYoutubeChannelArt3.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_692 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/692/YellowandBlackYoutubeChannelArt3.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_692 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/692/YellowandBlackYoutubeChannelArt3.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="693">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 336px;">
                                            <div class="tile__top" id="video-gallery_item_693">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="6Hr5wNOEb9c">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Elevate Your Landscape Photography Easily. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Professional photographer Gary McIntyre shows you how to create stunning landscape photographs in Luminar 4                                                </p>
                                            </div>
                                        </div>
                                        <style>
                                            #video-gallery_item_693 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_693 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/693/INACTION36.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_693 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/693/INACTION36.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_693 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/693/INACTION36.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="697">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 336px;">
                                            <div class="tile__top" id="video-gallery_item_697">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="_VcWrbq3ukY">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to bring out more details for a striking result. Luminar 4                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    David Johnston shows how to use Luminar 4's quick filters to add clarity and sharpness to this majestic photo of an eagle.                                                </p>
                                            </div>
                                        </div>
                                        <style>
                                            #video-gallery_item_697 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_697 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/697/INACTION43.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_697 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/697/INACTION43.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_697 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/697/INACTION43.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="698">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_698">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="OmIdq5iny_o">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to create breathtaking and dreamy landscapes. Luminar 4                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Create the mystical landscape of your dreams with professional landscape photographer David Johnston.                                                </p>
                                            </div>
                                        </div>
                                        <style>
                                            #video-gallery_item_698 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_698 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/698/INACTION42.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_698 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/698/INACTION42.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_698 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/698/INACTION42.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="699">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_699">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="XEm7k6OtOtg">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to get the sky you want with AI Sky Replacement. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Professional landscape photographer David Johnston shows how to get the sky you want on your photo with minimum fuss.                                                </p>
                                            </div>
                                        </div>

                                        <style>
                                            #video-gallery_item_699 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_699 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/699/INACTION44.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_699 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/699/INACTION44.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_699 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/699/INACTION44.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="700">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_700">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="QOYqV-OAyvs">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to achieve impressive landscapes with the power of AI. Luminar 4                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Professional landscape photographer David Johnston shows how you can create impressive landscapes in just three minutes.                                                </p>
                                            </div>
                                        </div>
                                        <style>
                                            #video-gallery_item_700 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_700 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/700/INACTION37.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_700 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/700/INACTION37.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_700 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/700/INACTION37.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="694">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_694">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="QB6vPnNW34Y">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Quickly Remove Unwanted Objects From Your Photos. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Anthony Turnham shows the easiest way to remove unwanted objects from your images.                                                </p>
                                            </div>
                                        </div>
                                        <style>
                                            #video-gallery_item_694 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_694 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/694/INACTION40.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_694 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/694/INACTION40.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_694 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/694/INACTION40.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="669">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 288px;">
                                            <div class="tile__top" id="video-gallery_item_669">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="vimeo" data-video-popup-id="373383751">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    The Secret to Easily Get Great Portraits. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    HHack Luminar 4’s AI portrait tools with professional photographer Anthony Turnham.                                                </p>
                                            </div>
                                        </div>
                                        <style>
                                            #video-gallery_item_669 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_669 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/669/ADDDRAMA2.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_669 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/669/ADDDRAMA2.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_669 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/669/ADDDRAMA2.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="695">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 288px;">
                                            <div class="tile__top" id="video-gallery_item_695">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="CvDPopSLock">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Effortlessly Enhance Light and Colors. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Learn how to adjust the light and the color of your photo with Luminar 4.                                                </p>
                                            </div>
                                        </div>
                                        <style>
                                            #video-gallery_item_695 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_695 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/695/INACTION41.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_695 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/695/INACTION41.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_695 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/695/INACTION41.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="696">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_696">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="9Y6zvEzIJyo">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Correct Perspective in a Few Clicks. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Anthony Turnham will introduce you to simple tools in Luminar 4 that are perfect to correct the uneven lines in your photos.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_696 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_696 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/696/INACTION45.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_696 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/696/INACTION45.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_696 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/696/INACTION45.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="702">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_702">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="4cEl9AF10e4">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to edit a landscape photo in record time with impressive AI tools. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Don't waste time on layers and masks, AI tools such as AI Enhance and AI Structure have got you covered.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_702 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_702 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/702/INACTION46.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_702 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/702/INACTION46.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_702 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/702/INACTION46.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="701">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 384px;">
                                            <div class="tile__top" id="video-gallery_item_701">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="wKovpdsETLA">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to manipulate the colors in your photo and get images that pop. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    David Johnston introduces the Advanced settings of the Color tab, which lets you enhance each color individually with just a few sliders.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_701 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_701 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/701/INACTION47.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_701 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/701/INACTION47.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_701 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/701/INACTION47.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="703">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 384px;">
                                            <div class="tile__top" id="video-gallery_item_703">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="QEK3auQ0Uhw">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to boost your portrait with an original double exposure effect. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    In just three steps you can achieve a jaw-dropping result: work with Add Image Layer, Layer Blends, and add a dramatic sky with AI Sky Replacement.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_703 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_703 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/703/INACTION48.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_703 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/703/INACTION48.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_703 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/703/INACTION48.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="707">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_707">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="zhxKYm5HVoE">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    Innovate Your Photo Editing Workflow. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Change the sky, improve portraits, add sunrays all in a few clicks, with Luminar 4's impressive AI tools.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_707 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_707 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/707/INACTION53.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_707 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/707/INACTION53.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_707 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/707/INACTION53.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="708">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_708">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="6lF6jfVw0oQ">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    From Fall to Winter: Creative Photo Transformation. Luminar 4                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Luminar ambassador and professional photographer Gary McIntyre shows how to combine two images into a stunning explosion of creativity.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_708 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_708 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/708/INACTION55.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_708 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/708/INACTION55.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_708 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/708/INACTION55.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="709">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_709">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="snunaPMv_-Y">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to сhange hair color on a portrait. Luminar 4                                                  </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Gary McIntyre will show you how to quickly change hair color in Luminar 4. Select any hue you like, work some magic with layers and masks, fine-tune to achieve the best result.                                               </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_709 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_709 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/709/INACTION59.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_709 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/709/INACTION59.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_709 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/709/INACTION59.png?w=478&q=85");
                                                }
                                            }
                                        </style></div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="710">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_710">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="zkq2xIkudhE">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to remove skin imperfections in one click. Luminar 4                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Just one tick of the AI Skin Defects Removal checkbox can save you tons of time, since you don't need to use masking and layers.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_710 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_710 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/710/INACTION60.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_710 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/710/INACTION60.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_710 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/710/INACTION60.png?w=478&q=85");
                                                }
                                            }
                                        </style></div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="729">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_729">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="_ZHI-AktwS0">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Create a Fantastic Composite Photo. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Gary McIntyre shows how to combine images of a forest, a road and a swimmer to create a fantastic result.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_729 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_729 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/729/INACTION62.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_729 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/729/INACTION62.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_729 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/729/INACTION62.png?w=478&q=85");
                                                }
                                            }
                                        </style></div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="715">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 360px;">
                                            <div class="tile__top" id="video-gallery_item_715">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="oFHLcrW_aE0">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to use the unique AI Sky Replacement Tool to instantly improve your photos. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Replace the sky in one click and never bother with masking or layers. Now you are in charge of the weather!                                                 </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_715 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_715 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/715/INACTION66.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_715 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/715/INACTION66.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_715 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/715/INACTION66.png?w=478&q=85");
                                                }
                                            }
                                        </style></div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="714">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 408px;">
                                            <div class="tile__top" id="video-gallery_item_714">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="3vcD7zi9yxY">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to emulate the Golden Hour look to get a dream-like photo. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Anthony Turnham will introduce some tools in Luminar 4, including the Golden Hour and the Mystic filter. With their help, you can emulate that lovely warmth on your photos.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_714 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_714 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/714/INACTION65.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_714 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/714/INACTION65.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_714 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/714/INACTION65.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="713">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 408px;">
                                            <div class="tile__top" id="video-gallery_item_713">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="4khg6w-YuD0">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    Create a Black and White Masterpiece. Luminar 4 Tutorial                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Black and white photos bring out a timeless and dramatic atmosphere. Professional photographer Anthony Turnham shows how to use Luminar's tools to create the perfect black and white photo.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_713 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_713 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/713/INACTION64.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_713 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/713/INACTION64.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_713 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/713/INACTION64.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="712">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 408px;">
                                            <div class="tile__top" id="video-gallery_item_712">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="4kVIakOaA-2Y">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to bring dull photos to life with just two filters. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Anthony Turnham shows how to use the AI Structure tool and Dehaze tool in Luminar to bring out details and add drama to a photo.                                                 </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_712 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_712 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/712/INACTION63.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_712 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/712/INACTION63.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_712 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/712/INACTION63.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="711">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 408px;">
                                            <div class="tile__top" id="video-gallery_item_711">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="H2iWMHnl3PA">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to export your photos in Luminar and showcase your best work. Luminar 4                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Professional photographer Anthony Turnham will walk you through the options in the export box and explain the meaning of each one. Find out which image format, size, color space suits your needs best.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_711 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_711 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/711/INACTION61.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_711 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/711/INACTION61.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_711 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/711/INACTION61.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="670">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 312px;">
                                            <div class="tile__top" id="video-gallery_item_670">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="vimeo" data-video-popup-id="373408171">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    Six Edits In Under Six Minutes Challenge. Luminar 4 Tutorial                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Bring out colors, highlights, details, add vignettes and crop as your heart desires.                                                 </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_670 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_670 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/670/ADDDRAMA15.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_670 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/670/ADDDRAMA15.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_670 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/670/ADDDRAMA15.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="672">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 312px;">
                                            <div class="tile__top" id="video-gallery_item_672">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="CfS7FRZm56s">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    AI Tools Explained. Luminar 4 Tutorial                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Discover all about the photo editing AI filters that are packed into Luminar 4 with this in-depth tutorial by Anthony Turnham.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_672 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_672 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/672/ADDDRAMA16.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_672 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/672/ADDDRAMA16.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_672 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/672/ADDDRAMA16.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="673">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 336px;">
                                            <div class="tile__top" id="video-gallery_item_673">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="Xcybk4YiXy0">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    Master Luminar 4 in 5 Minutes. Luminar 4 Tutorial                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    You will only need 5 minutes to learn how the powerful tools of the all-new Luminar 4 can elevate your photos.                                                 </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_673 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_673 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/673/ADDDRAMA17.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_673 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/673/ADDDRAMA17.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_673 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/673/ADDDRAMA17.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="674">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 336px;">
                                            <div class="tile__top" id="video-gallery_item_674">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="vimeo" data-video-popup-id="373929948">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    Create a Dramatic and Detailed Photo. Luminar 4 Tutorial                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    With Luminar 4 you can create impressive skies, exciting panoramas and dramatic portraits in just a few seconds.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_674 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_674 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/674/ADDDRAMA18.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_674 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/674/ADDDRAMA18.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_674 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/674/ADDDRAMA18.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="675">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 264px;">
                                            <div class="tile__top" id="video-gallery_item_675">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="R-INhukLfiY">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Easily Manipulate Colors on Photos. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Get that burst of colors in your photos!                                                 </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_675 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_675 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/675/3.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_675 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/675/3.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_675 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/675/3.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="682">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 264px;">
                                            <div class="tile__top" id="video-gallery_item_682">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="-G4HSNMg2Do">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Turn a Sad Day into a Sunny Day. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Turn the raindrops into sunrays with this one-minute tutorial.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_682 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_682 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/682/YellowandBlackYoutubeChannelArt.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_682 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/682/YellowandBlackYoutubeChannelArt.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_682 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/682/YellowandBlackYoutubeChannelArt.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="681">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 288px;">
                                            <div class="tile__top" id="video-gallery_item_681">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="3Hdl-BM0lNs">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    Create a Fantasy Portrait                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Breathe magic into your photos with these fantasy portraits.                                                 </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_681 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_681 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/681/2.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_681 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/681/2.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_681 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/681/2.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="677">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 288px;">
                                            <div class="tile__top" id="video-gallery_item_677">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="vqw83yxukTU">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    Get a Cinematic Look on Your Photo                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Quickly and easily make your photo look like a shot from a blockbuster movie!                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_677 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_677 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/677/1.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_677 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/677/1.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_677 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/677/1.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="676">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 312px;">
                                            <div class="tile__top" id="video-gallery_item_676">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="0MptVAYA8zk">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Create Amazing Black and White Photos. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Easily get photos with a unique black and white atmosphere.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_676 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_676 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/676/5.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_676 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/676/5.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_676 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/676/5.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="678">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 312px;">
                                            <div class="tile__top" id="video-gallery_item_678">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="CW-ty6tF9Hw">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Create Amazing Black and White Photos. Luminar 4                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    A one-minute edit of real estate photography that can earn you big bucks!                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_678 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_678 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/678/6.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_678 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/678/6.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_678 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/678/6.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="679">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 288px;">
                                            <div class="tile__top" id="video-gallery_item_679">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="dV9Q30AKvbU">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    How to Make Amazing Landscape Photos                                                </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Create breathtaking landscape photography to satisfy your wanderlust.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_679 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_679 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/679/7.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_679 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/679/7.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_679 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/679/7.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4" data-key="680">
                                        <div data-type="video-item" data-preload-section="" class="tile tile_gallery       preload" style="height: 288px;">
                                            <div class="tile__top" id="video-gallery_item_680">
                                                <a class="tile__play" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="0mnQ3hsKIEc">
                                                    <span></span>
                                                </a>
                                            </div>
                                            <div class="tile__bottom">
                                                <p class="sl-h4-title sl-h4-title_of_b">
                                                    Enhance Details in a Raw Photo. Luminar 4                                                 </p>
                                                <p class="sl-text sl-text_s_sm">
                                                    Bring out the details in your RAW photos.                                                </p>
                                            </div>
                                        </div>


                                        <style>
                                            #video-gallery_item_680 {
                                                background-image: url(//macphunsoftware.cachefly.net/macphun/luminar/load-img.png);
                                            }
                                            .preload #video-gallery_item_680 {
                                                background-image: url("//media.macphun.com/img/uploads/macphun/video/680/4.png?w=385&q=85");
                                            }
                                            @media only screen and (-Webkit-min-device-pixel-ratio: 1.5),
                                            only screen and (min-resolution: 144dpi) {
                                                .preload #video-gallery_item_680 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/680/4.png?w=770&q=85");
                                                }
                                            }
                                            @media (max-width: 766px) {
                                                .preload #video-gallery_item_680 {
                                                    background-image: url("//media.macphun.com/img/uploads/macphun/video/680/4.png?w=478&q=85");
                                                }
                                            }
                                        </style>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>`);