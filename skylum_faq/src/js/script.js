try {
  hj('trigger', 'FAQ');
}
catch(e) {}


(function($){
  $.fn.extend({
    beforeAfter: function() {

      $(this).each(function() {

        var baContainer = $(this);
        var percentage = 50;
        var afterImage = $('img:last', baContainer);
        var afterImageH = afterImage.height();
        var afterImageW = afterImage.width();

        $(baContainer).height(afterImageH);

        $('img:first', baContainer).wrap('<div class="bs-ab-slider-before-image"/>').width(afterImageW);
        $('.bs-ab-slider-before-image', baContainer).css({width: percNum(percentage)})
        $('img', baContainer).addClass('bs-ab-slider-image');

        var html = '<div class="ba-control"><div class="ba-control-area"><div class="ba-control-bar"><span class="ba-left-arrow" /><span class="ba-control-handle" /><span class="ba-right-arrow" /></div></div></div>';

        baContainer.append(html);
 
        var slider  = baContainer.find('.ba-control');
        var baBar = slider.find('.ba-control-area');
        var baHoverEl = baContainer.find('*');
        var startOffset, holderOffset, sliderWidth, handleWidth;

        baBar.css({left: percNum(percentage)});

        // EVENTS

        // Resize
        $(window).on('resize', resizeHandler);

        // Drag
        // baBar.on('mousedown', function(e) {
        baBar.on('mousemove', function(e) {
          e.preventDefault(); 
          holderOffset = slider.offset().left;
          startOffset = baBar.offset().left - holderOffset;
          sliderWidth = slider.width();
          
          $(document).on('mousemove', moveHandler).on('mouseup', stopHandler);
        });

        // Hover
        baContainer.on('mouseover', function(e) {
          // $('.ba-left-arrow, .ba-right-arrow, .ba-control-handle', baContainer).filter(':not(:animated)').fadeIn();
        });
        baContainer.on('mouseleave', function(e) {
             // $('.ba-left-arrow, .ba-right-arrow, .ba-control-handle', baContainer).fadeOut();
        });

        // Click
        baContainer.on('click', function(e) {
          e.preventDefault(); 
          var clickX = e.pageX - $(this).offset().left;
          var posP = (clickX / slider.width())*100;

          var posX = Math.round(Math.min(Math.max(0, posP), 100));

          baBar.stop().animate({
            left: percNum(posX)
          });

          $('.bs-ab-slider-before-image', baContainer).stop().animate({
            width: percNum(posX)
          });           
        });

        baContainer.on('touchmove', function(e) {
          e.preventDefault(); 

          var touchX = e.originalEvent.targetTouches[0].pageX;
          var clickX = touchX - slider.offset().left;
          var posP = (clickX / slider.width())*100;

          var posX = Math.round(Math.min(Math.max(0, posP), 100));

          baBar.css({
            left: percNum(posX)
          });

          $('.bs-ab-slider-before-image', baContainer).width(percNum(posX));
        });

        // FUNCTIONS
        function moveHandler(e) {
          var posX = e.pageX - holderOffset;
          var posP = (posX / sliderWidth)*100;

          posX = Math.floor(Math.min(Math.max(0, posP), 100));
          
          baBar.css({
            left: percNum(posX)
          });

          $('.bs-ab-slider-before-image', baContainer).width(percNum(posX));
        }
        function stopHandler() {
          $(document).off('mousemove', moveHandler).off('mouseup', stopHandler);
        }
        function resizeHandler(){
          afterImageH = afterImage.height();
          afterImageW = afterImage.width();
          $('.bs-ab-slider', baContainer).height(afterImageH);
          $('.ba-control', baContainer).height(afterImageH);
          $('.bs-ab-slider-before-image img', baContainer).width(afterImageW);
          baContainer.height(afterImageH);
        }
        function percNum(num) {
          return num + '%';
        }

        // Clean up of overflow issues
        resizeHandler();

      });
    }
  });
})(jQuery);

// $('head').append('<script type="text/javascript" src="https://mrygielski.github.io/jquery.baSlider/src/jquery.baSlider.js" async></script>');

function reinit_ba_slider(){
	setTimeout(function(){
	$('.ba-slider').each(function(ind){
		var img1 = $(this).find('img:eq(0)').clone();
		var img2 = $(this).find('img:eq(1)').clone();
		img1.attr('style','');
		img1.addClass('before-img');
		img2.attr('style','');
		$(this).replaceWith('<div class="bs-ab-slider" data-ba-item="'+ind+'"></div>');
		$('body').find('[data-ba-item="'+ind+'"]').append(img1);
		$('body').find('[data-ba-item="'+ind+'"]').append(img2);
	})
	$('.bs-ab-slider').each(function(ind){
		var img1 = $(this).find('img:eq(0)').clone();
		var img2 = $(this).find('img:eq(1)').clone();
		img1.attr('style','');
		$(this).attr('style','');
		img1.addClass('before-img');
		img2.attr('style','');
		$(this).replaceWith('<div class="bs-ab-slider" data-ba-item="'+ind+'"></div>');
		$('body').find('[data-ba-item="'+ind+'"]').append(img1);
		$('body').find('[data-ba-item="'+ind+'"]').append(img2);
	});
	setTimeout(function(){$('.bs-ab-slider').beforeAfter();$(window).trigger('resize')},100);
},100);
$(window).trigger('resize')
}
setInterval(function(){$(window).trigger('resize')},0);
reinit_ba_slider();
$('body').on('click', '.owl-dots .owl-dot', function(event) {
	$(window).trigger('resize');
	event.preventDefault();
});

$outhtml  = '<section class="faq-section">'
$outhtml += 	'<div class="container">'
$outhtml += 		'<div class="row">'

$outhtml += 			'<div class="col-12"><h2 class="faq-title">Frequently Asked Questions</h2></div>'

$outhtml +=				'<div class="col-12 col-md-6 col-lg-6 col-xl-6">'
$outhtml +=					'<ul class="questions-list questions_l">'
$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">How to install the application? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Installation is simple and intuitive. In case you’ll have any issues with installation after purchase, please check out <b>installation guide for <a href="https://manual.skylum.com/4/en/topic/installing-activating-luminar-for-macos" target="_blank">Mac</a> or for <a href="https://manual.skylum.com/4/en/topic/installing-activating-luminar-for-win" target="_blank">Windows</a></b> and you can always contact our Support team via this <a href="https://skylum.com/support" target="_blank">form.</a></p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">Will it work on my computer? What are the system requirements? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Luminar works on both Mac & Windows computers.</p><p>Here is the list of minimum system requirements for Microsoft® Windows®:</p><p><b>Processor</b>	Intel® Core™ i5 generation or better</p><p><b>Graphics</b>	Open GL 3.3 or later compatible</p><p><b>Memory</b>	8 GB of RAM</p><p><b>System</b>	Windows 7® (only 64-bit OS), Windows 8.1® (only 64-bit OS), Windows 10® (only 64-bit OS)</p><p><b>Disk space</b>	10 GB free space</p><p><b>Monitor</b>	At least 1280×768 resolution</p>   <br>  <p>Here is the list of minimum system requirements for Apple® macOS®:</p>  <p><b>Processor</b>    Intel® Core™ i5 generation or better</p>   <p><b>Graphics</b>	Integrated graphics card</p>   <p><b>Memory</b>	8 GB of RAM</p>   <p><b>System</b>	macOS 10.12 or higher</p>   <p><b>Disk space</b> 10 GB free space</p>   <p><b>Monitor</b> At least 1280×768 resolution</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">How to get started? Do you have any tutorials or step-by-step guides? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Please check this <a data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="Xcybk4YiXy0">5 minutes video</a> with a quick demonstration of how easy it is to get started. </p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">Where can I see videos on how Luminar 4 works? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Plenty of free video tutorials are available <a data-show-popup-next="" data-show-popup-name="common-video-see-more-tutorials" data-show-popup-before="">here.</a> </p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">Do I need to have any photo editing skills to use Luminar 4? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Luminar is suitable for both beginners and pro photographers. You can either apply Luminar Looks to your photos (sets of adjustments created by professionals), or you can experiment with hundreds of tools and sliders by yourself.</p><p>With RAW files support, export to major file formats, layers, masks and much more, Luminar suits all your photography needs.</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">How do AI features work? Is it hard to understand how to use them? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>The algorithms that power Luminar are super intelligent, but the AI tools are very easy to use. Luminar allows you to quickly achieve realistic results that still remain under your control.</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">How to get support and answers to my questions? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>You can contact our support team via this <a href="https://skylum.com/support" target="_blank">form</a> and they’ll be glad to reply within 24 hours.</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">What are the terms of the payment? Is it a subscription? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Unlike subscription plans, we are offering lifetime licenses; therefore, you will be able to use the application you‘ve purchased for an unlimited period of time.</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">Do I need to pay for updates? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Each update to the current version of the Software will be distributed free of charge to you; you may be notified that the Update is available through an in-program notification, via the e-mail address you provided upon registration of the Software, or through our website.</p><p>Upgrades will be offered for a separate fee (we provide huge discounts for the owners of the older versions of our products). “Upgrade” means a new version of the Software issued by Skylum from time to time in its sole discretion (typically once every calendar year).</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">Does Luminar 4 come with everything in it? Is it fully functional without Luminar Looks, Sky Packs and LUTs that are offered in addition to the license? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Sure, Luminar is fully functional as is. Luminar comes with a variety of embedded Looks, LUTs, Sky Samples, Objects, etc. Purchasing additional items is completely optional.</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=           '<li class="question-item">'
$outhtml +=             '<div class="question-item_title">What should I do if I have any payment issues? <span class="arrow-ico"></span></div>'
$outhtml +=             '<div class="question_desc">'
$outhtml +=               '<p>If you need help in resolving any payment issues, please contact our payment processing partner FastSpring <a href="https://fastspring.com/question-a-charge/" target="_blank">via this form</a> </p>'
$outhtml +=             '</div>'
$outhtml +=           '</li>'

$outhtml +=					'</ul>'
$outhtml +=				'</div>'


$outhtml +=				'<div class="col-12 col-md-6 col-lg-6 col-xl-6">'
$outhtml +=					'<ul class="questions-list questions_r">'
$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">How does 30-Day Money-Back Guarantee work? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>If you are not completely satisfied with the Software for any reason, you may return the Software, together with your receipt or any other proof of purchase of the Software, for a refund of the money you paid for the Software (less any applicable taxes or other fees) at any time during the thirty (30) day period following the date of purchase. Upon receiving a refund you shall cease any and all use and destroy all copies, full or partial, of the Software for which you no longer possess a paid-up license. All refund requests are processed by our Support team, you can contact them via this <a href="https://skylum.com/support" target="_blank">form.</a></p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">Do I need to have Photoshop or Lightroom installed to use Luminar 4? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>No, Photoshop or Lightroom are not required for the app to work. Luminar 4 works both in a standalone mode and as a plugin. Still, you may install Luminar as a plugin to these applications, if you want.</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">How to use Luminar 4 as a plugin for Photoshop, Lightroom, Photos for Mac? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Please check out <a href="https://manual.skylum.com/4/en/topic/using-luminar-with-other-software" target="_blank">this tutorial</a> on how to use Luminar with other software.</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">What versions of Photoshop, Lightroom, Photos for Mac are supported? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>On Mac OS you can use Luminar 4 as a plugin for Lightroom (starting from version 4), Photoshop (from version CS5), Photoshop Elements (from version 13), Apple Photos, and Aperture.</p><p>On Windows you can use Luminar 4 as a plugin for Lightroom (starting from version 4), Photoshop Elements (from version 13) and Photoshop (from version CS5).</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">How to use Luminar 4 on multiple computers? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Luminar 4 is meant to be used by a single person, that is why we offer a license for 1 device by default. But we realize that sometimes a person may have more than just one device that is why you have an option to change license quantity when selecting the items you would like to purchase.</p><p>Alternatively, you also have the ability to purchase an additional seat to your license later in your Skylum account. If you want to transfer your license to a new computer, you can always reset your license counter in your Skylum account.</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">Can I use the application in a standalone mode and as a plugin with one license? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Yes, you can use Luminar both in a standalone mode and as a plugin with one license as long as both versions of the application are installed on the same device.</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

// $outhtml +=						'<li class="question-item">'
// $outhtml += 						'<div class="question-item_title">Do you have a trial version of Luminar 4 available for download? <span class="arrow-ico"></span></div>'
// $outhtml +=							'<div class="question_desc">'
// $outhtml +=								'<p>You can download a trial version of Luminar from <a href="https://skylum.com/download/luminar-4" target="_blank">our website</a> and check out all of the features by yourself.</p>'
// $outhtml +=							'</div>'
// $outhtml +=						'</li>'

$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">How to easily upload and browse photos in Luminar 4? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>There are several ways to open images into Luminar for editing.</p>  <ul class="circle-list"><li>You can <b>Add Folders</b> into Luminar Catalog and leave your photos exactly where they are on your hard drives.</li><li>If you want to import images from a memory card or external drive, then use the <b>Import Images</b> option that moves or copies your images to a new location.</li><li>You can also open your images from any location with the <b>Edit Single Image</b> command, which allows you to easily edit and export photos that you do not want to keep in your Luminar Catalog.</li></ul><p>You can also check this <a data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="Xcybk4YiXy0">5 minutes video</a> with a quick demonstration of how easy it is to get started. </p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'


$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">Does Luminar 4 support RAW files? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Yes, Luminar supports RAW files. You can see the list of supported cameras <a data-show-popup-next="" data-show-popup-name="common-pdf-tutorials" data-show-popup-before="" class="pdfBtnJs">here</a>.</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'


$outhtml +=						'<li class="question-item">'
$outhtml += 						'<div class="question-item_title">Is Luminar 4 translated into my language? <span class="arrow-ico"></span></div>'
$outhtml +=							'<div class="question_desc">'
$outhtml +=								'<p>Luminar 4 is translated into 11 languages: English, German, Spanish, French, Italian, Japanese, Chinese, Korean, Dutch, Portuguese, Russian</p>'
$outhtml +=							'</div>'
$outhtml +=						'</li>'

$outhtml +=           '<li class="question-item">'
$outhtml +=             '<div class="question-item_title">What is Aurora HDR? When HDR photo editing is needed? <span class="arrow-ico"></span></div>'
$outhtml +=             '<div class="question_desc">'
$outhtml +=               '<p>High Dynamic Range (HDR) photography is a popular photographic technique designed to overcome the limitations of image sensors in digital photographs. This process utilizes multiple exposures of the same subject, each shot at different exposure values (“brackets”). Those brackets are then automatically merged into a single shot which encompasses a greater exposure range.</p><p>Aurora HDR is a joint project between Skylum and Trey Ratcliff to produce the most powerful, simple and fast HDR photo editing software in the world for Mac and PC. Aurora HDR contains every imaginable tool needed to produce high-quality “next generation” dramatic images.</p>'
$outhtml +=             '</div>'
$outhtml +=           '</li>'
$outhtml +=					'</ul>'
$outhtml +=				'</div>'
$outhtml +=			'</div>';
$outhtml += 	'</div>';
$outhtml += '</section>';

$('body').on('click', '.question-item_title', function() {
	var item = $(this).closest('.question-item');
	var $this = $(this);
	if (!$this.hasClass("faq__active")) {
		$this.addClass("faq__active");
		item.find(".question_desc").slideDown(500);
	} else {
		item.find(".question_desc").slideUp(500);
		$this.removeClass("faq__active");
	}
});

$('body').find('.wrap-content').append($outhtml);


// events for optimizely
$('body').on('click', '.questions_l .question-item:nth-child(1)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'How to install the application?'
	});
	console.log('faq_1')
});
$('body').on('click', '.questions_l .question-item:nth-child(2)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'Will it work on my computer'
	});
	console.log('faq_2')
});
$('body').on('click', '.questions_l .question-item:nth-child(3)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'How to get started'
	});
	console.log('faq_3')
});
$('body').on('click', '.questions_l .question-item:nth-child(4)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'Where can I see videos on how Luminar 4 works'
	});
	console.log('faq_4')
});
$('body').on('click', '.questions_l .question-item:nth-child(5)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'Do I need to have any photo editing skills to use Luminar 4'
	});
	console.log('faq_5')
});
$('body').on('click', '.questions_l .question-item:nth-child(6)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'How do AI features work'
	});
	console.log('faq_6')
});
$('body').on('click', '.questions_l .question-item:nth-child(7)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'How to get support and answers to my questions'
	});
	console.log('faq_7')
});
$('body').on('click', '.questions_l .question-item:nth-child(8)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'What are the terms of the payment'
	});
	console.log('faq_8')
});
$('body').on('click', '.questions_l .question-item:nth-child(9)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'Do I need to pay for updates'
	});
	console.log('faq_9')
});
$('body').on('click', '.questions_l .question-item:nth-child(10)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'Does Luminar 4 come with everything in it'
	});
	console.log('faq_10')
});
$('body').on('click', '.questions_l .question-item:nth-child(11)', function() {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'UA_event',
    'eventCategory': 'Checkout',
    'eventAction': 'click on FAQ',
    'eventLabel': 'What should I do if I have any payment issues'
  });
  console.log('faq_11')
});






$('body').on('click', '.questions_r .question-item:nth-child(1)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'How does 30-Day Money-Back Guarantee work'
	});
	console.log('faq_12')
});
$('body').on('click', '.questions_r .question-item:nth-child(2)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'Do I need to have Photoshop or Lightroom installed to use Luminar 4'
	});
	console.log('faq_13')
});
$('body').on('click', '.questions_r .question-item:nth-child(3)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'How to use Luminar 4 as a plugin for Photoshop, Lightroom, Photos for Mac'
	});
	console.log('faq_14')
});
$('body').on('click', '.questions_r .question-item:nth-child(4)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'What versions of Photoshop, Lightroom, Photos for Mac are supported'
	});
	console.log('faq_15')
});
$('body').on('click', '.questions_r .question-item:nth-child(5)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'How to use Luminar 4 on multiple computers'
	});
	console.log('faq_16')
});
$('body').on('click', '.questions_r .question-item:nth-child(6)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'Can I use the application in a standalone mode and as a plugin with one license'
	});
	console.log('faq_17')
});
// $('body').on('click', '.questions_r .question-item:nth-child(8)', function() {
// 	window.dataLayer = window.dataLayer || [];
// 	dataLayer.push({
// 		'event': 'UA_event',
// 		'eventCategory': 'Checkout',
// 		'eventAction': 'click on FAQ',
// 		'eventLabel': 'Do you have a trial version of Luminar 4 available for download'
// 	});
// 	console.log('faq_19')
// });
$('body').on('click', '.questions_r .question-item:nth-child(7)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'How to easily upload and browse photos in Luminar 4'
	});
	console.log('faq_18')
});
$('body').on('click', '.questions_r .question-item:nth-child(8)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'Does Luminar 4 support RAW files'
	});
	console.log('faq_19')
});
$('body').on('click', '.questions_r .question-item:nth-child(9)', function() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		'event': 'UA_event',
		'eventCategory': 'Checkout',
		'eventAction': 'click on FAQ',
		'eventLabel': 'Is Luminar 4 translated into my language'
	});
	console.log('faq_20')
});
$('body').on('click', '.questions_r .question-item:nth-child(10)', function() {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'UA_event',
    'eventCategory': 'Checkout',
    'eventAction': 'click on FAQ',
    'eventLabel': 'What is Aurora HDR'
  });
  console.log('faq_20')
});

           
// last section
var clone = $('.checkout-page.sk-grid').clone();

function rescan_all_items(){
	var is_deselect = $('.checkout-page.sk-grid:not(.cloner-section) .up-sale-products__btn.js-up-sale-products-btn').hasClass('deselect');
    if(is_deselect){
        $('.checkout-page.sk-grid.cloner-section .js-up-sale-products-btn').addClass('deselect');
    }else{
        $('.checkout-page.sk-grid.cloner-section .js-up-sale-products-btn').removeClass('deselect');
    }
	$('.checkout-page.sk-grid:not(.cloner-section) [data-target-product]').each(function () {
		var product = $(this).attr('data-target-product');
		var has_class = $(this).hasClass('active');
		if(has_class){
			$('.checkout-page.sk-grid.cloner-section [data-target-product="'+product+'"]').addClass('active-item');
		}else{
			$('.checkout-page.sk-grid.cloner-section [data-target-product="'+product+'"]').removeClass('active-item');
		}
	});
}
clone.addClass('cloner-section')
.find('.plans__product.plans__product_up-sale')
.removeAttr('data-gtm-vis-recent-on-screen-613848_706')
.removeAttr('data-gtm-vis-first-on-screen-613848_706')
.removeAttr('data-gtm-vis-total-visible-time-613848_706')
.removeAttr('data-gtm-vis-has-fired-613848_706');
clone.find('[data-license-count]').removeAttr('data-license-count');
clone.find('[data-one-curency]').removeAttr('data-one-curency');
clone.find('[data-fcpr]').removeAttr('data-fcpr');
clone.find('[data-lcpr]').removeAttr('data-lcpr');

// clone.find('.js-popup-slider').remove();

clone.find('[data-stat-link]').removeAttr('data-stat-link').addClass('clone-click-item');
$('.wrap-content').after(clone);
// clone.insertAfter(".checkout-page__foot.foot");


$('body').on('click','.cloner-section [data-target-product]',function(){
	var product = $(this).attr('data-target-product');
	$('.checkout-page.sk-grid:not(.cloner-section) [data-target-product="'+product+'"]').click();
	rescan_all_items();
	return false;
});
$('body').on('click','.cloner-section .clone-click-item',function(){
	var product = $(this).attr('data-target-product');
	$('.checkout-page.sk-grid:not(.cloner-section) [data-stat-link="buyCheckout"]').click();
	return false;
});
$('body').on('click','.cloner-section [data-show-popup-name]',function(){
	var product = $(this).attr('data-show-popup-name');
	$('.checkout-page.sk-grid:not(.cloner-section) [data-show-popup-name="'+product+'"]').click();
	reinit_ba_slider();
	return false;
});
$('body').on('click','.cloner-section .js-up-sale-products-btn',function(){
    $('.checkout-page.sk-grid:not(.cloner-section) .js-up-sale-products-btn').click();
    
    rescan_all_items();
    return false;
});
setInterval(function(){
	rescan_all_items();
});





$('.cloner-section .plans__product .js-product-more').mouseover(function() {
  $(this).find('.checkout-page__product-link-desc.js-product-more-desc').addClass('active')
});
$('.cloner-section .plans__product .js-product-more').mouseout(function() {
  $(this).find('.checkout-page__product-link-desc.js-product-more-desc').removeClass('active')
});

$('body').on('click','.cloner-section .plans__product .js-product-more-click',function(){
	$(this).find('.checkout-page__product-link-desc.js-product-more-desc').addClass('active')
});
$('.cloner-section .plans__product .js-product-more-click').mouseleave(function() {
	$(this).find('.checkout-page__product-link-desc.js-product-more-desc').removeClass('active')
});

$('body').on('click','.product-details-popup__btns-wrap [data-target]',function(){
	var product = $(this).attr('data-target');
	$('.checkout-page.sk-grid:not(.cloner-section) [data-target-product="'+product+'"]').click();
	rescan_all_items();
	return false;
});




//trustpilot 
$('head').append('<script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>');
$('body').find('.wrap-content').append('<section class="sk-section sk-section_of_b_none common-trustpilot" data-preload-section data-analytics-block="common-trustpilot"><div class="container">    <div class="row"><div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 common-trustpilot__title"><h2 class="sk-h2 sk-h2_of_b">Rated "Excellent" by customers</h2><figure class="sk-figure common-trustpilot__rating"><img src="https://dev.aim-it.com.ua/skylum/trust-white.svg" alt=""></figure></div></div>     <div class="row"><div class="col-12">   <div class="trustpilot-wrap"><div class="trustpilot-widget" data-locale="en-US" data-template-id="539adbd6dec7e10e686debee" data-businessunit-id="5c5c62aa12f48a0001fe802d" data-style-height="500px" data-style-width="100%" data-theme="light" data-tags="SelectedReview" style="margin-top: -100px;"></div></div></div></div></div></section>');

// video section
$('body').find('.wrap-content').append('<div class="common-video-free-tutorials sk-section preload" data-preload-section="" data-analytics-block="common-video-free-tutorials"><div class="container"><div class="row"><div class="col-12"><h2 class="common-video-free-tutorials__title sk-h2 sk-h2_of_b">                    Lots of free video tutorials                </h2></div></div><div class="row"><div class="col-12 col-md-6"><div class="common-video-free-tutorials__img-wr"><a class="sk-btn common-video-free-tutorials__btn" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="Xcybk4YiXy0"><figure class="sk-btn-icon play-icon"><svg enable-background="new 0 0 314.068 314.068" height="512" viewBox="0 0 314.068 314.068" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m293.002 78.53c-43.356-75.095-139.384-100.826-214.473-57.462-75.095 43.35-100.827 139.374-57.463 214.466 43.35 75.095 139.375 100.83 214.465 57.47 75.096-43.365 100.84-139.384 57.471-214.474zm-73.168 187.271c-60.067 34.692-136.894 14.106-171.576-45.973-34.69-60.067-14.097-136.893 45.972-171.568 60.071-34.69 136.894-14.106 171.578 45.971 34.685 60.076 14.098 136.886-45.974 171.57zm-6.279-115.149-82.214-47.949c-7.492-4.374-13.535-.877-13.493 7.789l.421 95.174c.038 8.664 6.155 12.191 13.669 7.851l81.585-47.103c7.506-4.332 7.522-11.388.032-15.762z"></path></svg></figure></a><img src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-Master-Luminar-4-in-5-Minutes-Luminar-4-Tutorial.jpg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-Master-Luminar-4-in-5-Minutes-Luminar-4-Tutorial.jpg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-Master-Luminar-4-in-5-Minutes-Luminar-4-Tutorial.jpg" alt=""></div></div><div class="col-12 col-md-6"><div class="common-video-free-tutorials__img-wr"><a class="sk-btn common-video-free-tutorials__btn" data-video-popup="" data-video-popup-type="youtube" data-video-popup-id="CfS7FRZm56s"><figure class="sk-btn-icon play-icon"><svg enable-background="new 0 0 314.068 314.068" height="512" viewBox="0 0 314.068 314.068" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m293.002 78.53c-43.356-75.095-139.384-100.826-214.473-57.462-75.095 43.35-100.827 139.374-57.463 214.466 43.35 75.095 139.375 100.83 214.465 57.47 75.096-43.365 100.84-139.384 57.471-214.474zm-73.168 187.271c-60.067 34.692-136.894 14.106-171.576-45.973-34.69-60.067-14.097-136.893 45.972-171.568 60.071-34.69 136.894-14.106 171.578 45.971 34.685 60.076 14.098 136.886-45.974 171.57zm-6.279-115.149-82.214-47.949c-7.492-4.374-13.535-.877-13.493 7.789l.421 95.174c.038 8.664 6.155 12.191 13.669 7.851l81.585-47.103c7.506-4.332 7.522-11.388.032-15.762z"></path></svg></figure></a><img src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-AI-Tools-Explained-Luminar-4-Tutorial.jpg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-AI-Tools-Explained-Luminar-4-Tutorial.jpg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-4-main/video-free-tutorials-AI-Tools-Explained-Luminar-4-Tutorial.jpg" alt=""></div></div></div><div class="row"><div class="col-12"><a class="discover-more sk-subtitle common-video-free-tutorials__btn-more-tutorials" data-show-popup-next="" data-show-popup-name="common-video-see-more-tutorials" data-show-popup-before="">            See More Tutorials                    <figure><svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12"><g><g><g transform="rotate(270 9 6)"></g><g transform="rotate(540 8.5 6)"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="50" stroke-width="2" d="M16 6H1"></path></g><g transform="rotate(540 13.5 6)"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="50" stroke-width="2" d="M15.998 1v0L11 6.005v0l4.998 5v0"></path></g></g></g></svg></figure></a></div></div></div></div>');


$('body').find('.wrap-content').append('<div class="mainPopupWrapper pdf-popup" id="common-pdf-tutorials" data-hide-popup=""><div class="mainPopupContainer"><a title="Close" class="close" href="#" data-hide-popup="#common-pdf-tutorials"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="#fff" d="M10.48 9.07l6.37-6.37a1 1 0 0 0 0-1.4 1 1 0 0 0-1.41 0L9.07 7.66 2.7 1.3a.99.99 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l6.36 6.37-6.36 6.37a1 1 0 0 0 0 1.41 1 1 0 0 0 1.4 0l6.37-6.37 6.37 6.37a1 1 0 0 0 1.41-1.41z"></path></svg></a><div class="pdf-popup__wrap"><iframe id="frame_pdf"></iframe></div></div></div>');

$('body').on('click', '.pdfBtnJs', function() {
    $("#frame_pdf").attr("src", "https://media.macphun.com/uploads/uploads/Luminar_4.1.0_Supported_Cameras.pdf");
});