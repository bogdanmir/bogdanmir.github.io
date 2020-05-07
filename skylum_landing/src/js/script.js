$('body').find('.common-hero .info-label-wr').detach().insertAfter( ".header .header__wrap .header__menu" );

$('body').find('.common-hero .common-hero__content-wrap').detach().prependTo('.common-hero .row:nth-child(2) > div');
$('body').find('.common-hero .row:nth-child(2) > div').addClass('col-md-6');

$('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">Standalone application for Mac & PC with full RAW support. And Plugin for Adobe Photoshop, Lightroom & Apple products</p></div>');

$('body').find('.common-hero .common-hero__btns-wrap + .common-hero__upgrade').detach().insertAfter( ".common-hero .common-hero__content-text" );

// top navigation
var outhtmlTopNav  = '<div class="sticky_nav_wrap">'
	outhtmlTopNav += 	'<ul class="sticky_nav_container">';
	outhtmlTopNav += 		'<li>Embed objects</li>';
	outhtmlTopNav += 		'<li>Replace sky</li>';
	outhtmlTopNav += 		'<li>Tune portraits and skin</li>';
	outhtmlTopNav += 		'<li>Add sunrays</li>';
	outhtmlTopNav += 		'<li>AI Accent</li>';
	outhtmlTopNav += 		'<li>AI Sky Enhancer</li>';
	outhtmlTopNav += 		'<li>AI Structure</li>';
	outhtmlTopNav += 		'<li>Smart Contrast</li>';
	outhtmlTopNav += 		'<li>Erase objects</li>';
	outhtmlTopNav += 		'<li>Instant Filters</li>';
	outhtmlTopNav += 		'<li>Landscape Enhancer</li>';
	outhtmlTopNav += 		'<li>Creative tools</li>';
	outhtmlTopNav += 		'<li>Remove noise</li>';
	outhtmlTopNav += 	'</ul>';
	outhtmlTopNav += '</div>';
$('body').find('.header').append(outhtmlTopNav);



var element = $('.sticky_nav_container li');
var slider = $('.sticky_nav_container');
var sliderWrapper = $('.sticky_nav_wrap');
var totalWidth = sliderWrapper.innerWidth();
var elementWidth = element.outerWidth();
var sliderWidth = 0;
var positionSlideX = slider.position().left;
var newPositionSlideX = 0;

sliderWrapper.append('<span class="prev-slide"><</span><span class="next-slide">></span>');

element.each(function(){
  sliderWidth = sliderWidth + $(this).outerWidth() + 1;
});

slider.css({
  'width': sliderWidth
});

$('.next-slide').click(function(){
  if(newPositionSlideX>(totalWidth-sliderWidth)){
    newPositionSlideX = newPositionSlideX - elementWidth;
    slider.css({
      'left' : newPositionSlideX
   }, check());
  };
});

$('.prev-slide').click(function(){
  if(newPositionSlideX>=-sliderWidth){
    newPositionSlideX = newPositionSlideX + elementWidth;
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
  totalWidth = sliderWrapper.innerWidth();
  check();
});
check();




console.log('22222')