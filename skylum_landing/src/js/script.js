$('body').find('.common-hero .info-label-wr').detach().insertAfter( ".header .header__wrap .header__menu" );

$('body').find('.common-hero .common-hero__content-wrap').detach().prependTo('.common-hero .row:nth-child(2) > div');
$('body').find('.common-hero .row:nth-child(2) > div').addClass('col-md-6');

// logos
var outhtmlLogo  = '<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=140" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=140" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=280" data-preload-mob-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=180" alt=""></figure>';
	outhtmlLogo  += '<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" alt=""></figure>';
	outhtmlLogo  += '<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" alt=""></figure>';
	outhtmlLogo  += ' <figure class="plugins__logo"> <img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" alt=""></figure>';


$('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">Standalone application for Mac & PC with full RAW support. And Plugin for Adobe Photoshop, Lightroom & Apple products</p> '+ outhtmlLogo +'</div>');


$('body').find('.common-hero .common-hero__content-wrap').append("<p class='common-hero__subtitle'><b>Luminar 4's</b> revolutionary tools and AI technologies give superpowers for creative <b>photo editing.</b></p>");


$('body').find('.common-hero .common-hero__btns-wrap + .common-hero__upgrade').detach().appendTo( ".common-hero .row:nth-child(2) > div:nth-child(2)" );

$('body').find('.common-hero').append('<div class="mouse_down"><span class="mouse_wheel"></span></div>');

$('[data-preload-section]').each(function(index, el) {
	var is_display = $(el).css('display');
	if(is_display != 'none'){
		
	}
});
// var list_items_sections = []
// 	{
// 		'popular' : false,
// 		'item' : '',
// 		'name' : ''
// 	},
// ];
// top navigation
var outhtmlTopNav  = '<div class="sticky_nav_wrap">';
	outhtmlTopNav += 	'<ul class="sticky_nav_container">';
	outhtmlTopNav += 		'<li data-section="augmented-sky-hero">Embed objects</li>';
	outhtmlTopNav += 		'<li data-section="sky-hero">Replace sky</li>';
	outhtmlTopNav += 		'<li data-section="portrait-hero">Tune portraits and skin</li>';
	outhtmlTopNav += 		'<li data-section="tools-sunrays">Add sunrays</li>';
	outhtmlTopNav += 		'<li data-section="tools-ai-enhance">AI Accent</li>';
	outhtmlTopNav += 		'<li data-section="">AI Sky Enhancer</li>';                			//
	outhtmlTopNav += 		'<li data-section="structure-hero">AI Structure</li>';
	outhtmlTopNav += 		'<li data-section="tools-smart-contrast">Smart Contrast</li>';
	outhtmlTopNav += 		'<li data-section="erase-technology">Erase objects</li>';
	outhtmlTopNav += 		'<li data-section="tools-looks">Instant Filters</li>';              //class
	outhtmlTopNav += 		'<li data-section="tools-landscapes">Landscape Enhancer</li>';
	outhtmlTopNav += 		'<li data-section="tools-creative">Creative tools</li>';
	outhtmlTopNav += 		'<li data-section="tools-denoise">Remove noise</li>';
	outhtmlTopNav += 	'</ul>';
	outhtmlTopNav += '</div>';
$('body').find('.header').append(outhtmlTopNav);



var sliderWrapper = $('.sticky_nav_wrap');
var slider = $('.sticky_nav_container');
var element = $('.sticky_nav_container li');
var totalWidth = sliderWrapper.innerWidth();
var elementWidth = element.outerWidth();
var sliderWidth = 0;
var positionSlideX = slider.position().left;
var newPositionSlideX = 0;

sliderWrapper.append('<span class="prev-slide"></span><span class="next-slide"></span>');

// element.each(function(){
//   sliderWidth = sliderWidth + $(this).outerWidth() + 1;
// });
// sliderWidth = slider.innerWidth();
// console.log('sliderWidth = ' + sliderWidth)

// slider.css({
//   'width': sliderWidth
// });

// $('.next-slide').click(function(){
$(document).on('click','.next-slide', function(){	
  if(newPositionSlideX > (totalWidth-sliderWidth)){
    // newPositionSlideX = newPositionSlideX - elementWidth;
    newPositionSlideX = newPositionSlideX - 150;
    slider.css({
      'left' : newPositionSlideX
   }, check());
  };
});

// $('.prev-slide').click(function(){
$(document).on('click','.prev-slide', function(){	
  if(newPositionSlideX >= -sliderWidth){
    // newPositionSlideX = newPositionSlideX + elementWidth;
    newPositionSlideX = newPositionSlideX + 150;
    slider.css({
      'left' : newPositionSlideX
   }, check());
  };
});

function check() {;
  if( sliderWidth >= totalWidth && newPositionSlideX > (totalWidth-sliderWidth)){
     $('.next-slide').css({
      'right' : 0
    });
  } else {
     $('.next-slide').css({
      'right' : -$(this).width()
    });
  };

  if( newPositionSlideX < 0){
     $('.prev-slide').css({
      'left' : 0
    });
  } else {
    $('.prev-slide').css({
      'left' : -$(this).width()
    });
  };
};

$(window).resize(function(){
	sliderWidth = slider.innerWidth();
	console.log('sliderWidth = ' + sliderWidth)

	totalWidth = sliderWrapper.innerWidth();
	check();
});
check();