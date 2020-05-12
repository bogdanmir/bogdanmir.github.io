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


var list_items_sections = [
{
  'item' : 'common-hero',
  'popular' : false
},
{
  'name' : 'Embed objects',
  'name_de' : 'Objekte einbetten',
  'name_ko' : '내장형 객체',
  'name_ja' : 'オブジェクトを追加',
  'name_fr' : 'Intégrer des objets',
  'name_nl' : 'Embedden van objecten',
  'name_it' : 'Incorpora oggetti',
  'name_es' : 'Objetos incorporados',
  'item' : 'augmented-sky-hero',
  'popular' : true
},
{
  'name' : 'Replace sky',
  'item' : 'sky-hero',
  'popular' : true
},
{
  'name' : 'Tune portraits and skin',
  'item' : 'portrait-hero',
  'popular' : true
},
{
  'name' : 'Add sunrays',
  'item' : 'tools-sunrays',
  'popular' : true
},
{
  'name' : 'AI Accent',
  'item' : 'tools-ai-enhance',
  'popular' : true
},
{
  'name' : 'AI Sky Enhancer',
  'item' : 'tools-ai-enhance',
  'popular' : true
},
{
  'name' : 'AI Structure',
  'item' : 'structure-hero',
  'popular' : true
},
{
  'name' : 'Smart Contrast',
  'item' : 'tools-smart-contrast',
  'popular' : true
},
{
  'name' : 'Erase objects',
  'item' : 'erase-technology',
  'popular' : true
},
{
  'item' : 'common-video-gallery',
  'popular' : false
},
{
  'item' : 'tools-library',
  'popular' : false
},
{
  'name' : 'Instant Filters',
  'item' : 'tools-looks',
  'popular' : true
},
{
  'name' : 'Landscape Enhancer',
  'item' : 'tools-landscapes',
  'popular' : true
},
{
  'name' : 'Creative tools',
  'item' : 'tools-creative',
  'popular' : true
},
{
  'name' : 'Remove noise',
  'item' : 'tools-denoise',
  'popular' : true
},
{
  'item' : 'tools-details-enhancer',
  'popular' : false
},
{
  'item' : 'common-to-pro',
  'popular' : false
},
{
  'item' : 'global-works-as-plugin',
  'popular' : false
},
{
  'item' : 'common-language',
  'popular' : false
},
{
  'item' : 'common-press',
  'popular' : false
},
{
  'item' : 'common-trustpilot',
  'popular' : false
},
{
  'item' : 'global-bottom-buy',
  'popular' : false
},
];

// top navigation
var items      = "";
var items_dots = '';
var outhtmlTopNav  = '<div class="sticky_nav_wrap"><div class="slide-wraper-js"><span class="prev-slide"></span><div class="slide-wraper-wrap-js"><ul class="sticky_nav_container"></ul></div><span class="next-slide"></span></div><a href="/l/luminar-checkout" class="sk-btn sk-btn_type_primary-2 by-btn-js">Buy Now</a></div>';
$('.wrapper').append('<ul class="sticky_dot_wrap"></ul>');
// $('body').find('.header').append(outhtmlTopNav);
$('body').find('.header').after(outhtmlTopNav);
$.each(list_items_sections,function(ind,el){
  if(el.popular == true && $('body.en').length > 0 ){
    items    +=    '<li data-gosection="'+el.item+'">'+el.name+'</li>';
  }
  if(el.popular == true && $('body.de').length > 0 ){
    items    +=    '<li data-gosection="'+el.item+'">'+el.name_de+'</li>';
  }
  items_dots +=    '<li data-gosection="'+el.item+'"></li>';
})
$('.wrapper').find('.sticky_dot_wrap').append(items_dots);
$('body').find('ul.sticky_nav_container').append(items);
$('body').on('click', '[data-gosection]', function(event) {
  var gosection = $(this).attr('data-gosection');
  $('[data-gosection]').removeClass();
  $('[data-gosection="'+gosection+'"]').addClass('active');
  $('html,body').animate({
    scrollTop: $('[data-analytics-block="'+gosection+'"]').offset().top},
    500);
  return false;
});
function scroll_activation(){
  $.each(list_items_sections,function(index, el) {
    if($('html,body').scrollTop() > $('[data-analytics-block='+el.item+']').offset().top - 200){
      $('[data-gosection]').removeClass();
      $('[data-gosection="'+el.item+'"]').addClass('active');
    }
  });
}
scroll_activation();
$(window).scroll(function(event) {
  if($('html,body').scrollTop() > 60){
    $('body').find('.sticky_nav_wrap').addClass('sticky-scroll');
  }else{
    $('body').find('.sticky_nav_wrap').removeClass('sticky-scroll');
  }
  scroll_activation();
});

// var sliderWrapper = $('.sticky_nav_wrap');
// var slider = $('.sticky_nav_container');
// var element = $('.sticky_nav_container li');
// var totalWidth = sliderWrapper.innerWidth();
// var elementWidth = element.outerWidth();
// var sliderWidth = 0;
// var positionSlideX = slider.position().left;
// var newPositionSlideX = 0;

// sliderWrapper.append('');

// element.each(function(){
//   sliderWidth = sliderWidth + $(this).outerWidth() + 1;
// });
// sliderWidth = slider.innerWidth();
// console.log('sliderWidth = ' + sliderWidth)

// slider.css({
//   'width': sliderWidth
// });

// $('.next-slide').click(function(){
//   $(document).on('click','.next-slide', function(){	
//     if(newPositionSlideX > (totalWidth-sliderWidth)){
//     // newPositionSlideX = newPositionSlideX - elementWidth;
//     newPositionSlideX = newPositionSlideX - 150;
//     slider.css({
//       'left' : newPositionSlideX
//     }, check());
//   };
// });

// // $('.prev-slide').click(function(){
//   $(document).on('click','.prev-slide', function(){	
//     if(newPositionSlideX >= -sliderWidth){
//     // newPositionSlideX = newPositionSlideX + elementWidth;
//     newPositionSlideX = newPositionSlideX + 150;
//     slider.css({
//       'left' : newPositionSlideX
//     }, check());
//   };
// });

//   function check() {
//     if( sliderWidth >= totalWidth && newPositionSlideX > (totalWidth-sliderWidth)){
//      $('.next-slide').css({
//       'right' : 0
//     });
//    } else {
//      $('.next-slide').css({
//       'right' : -$(this).width()
//     });
//    };

//    if( newPositionSlideX < 0){
//      $('.prev-slide').css({
//       'left' : 0
//     });
//    } else {
//     $('.prev-slide').css({
//       'left' : -$(this).width()
//     });
//   };
// };
// function navigation_scroll_run(){
//   sliderWidth = slider.innerWidth();
//   totalWidth = sliderWrapper.innerWidth();
//   check();
// }
// navigation_scroll_run();
// $(window).resize(function(){
//   navigation_scroll_run();
// });
// check();

// Slider


$('.slide-wraper-js .prev-slide').click(function(){
  var list = $(this).closest('.slide-wraper-js').find('ul.sticky_nav_container');
  var currentpos = typeof list.data('curent_pos') != 'undefined' ? list.data('curent_pos') : 0;
  if(currentpos > 0){
    currentpos--;
    var space = list.find('li:eq('+Number(currentpos)+')').outerWidth();
    var left = list.css('left');
    left = left.replace(new RegExp('px','g'),'');
    left = Number(left);
    if(space+left < 0){
      list.data('curent_pos',currentpos);
      list.animate({
        'left' : '+='+space+'px'
      },5)
    }else{
      list.data('curent_pos',0);
      list.animate({
        'left' : '0px'
      },5)
    }
  }
  return false;
})
$('.slide-wraper-js .next-slide').click(function(){
	$('.slide-wraper-js .prev-slide').addClass('visible');
  var list = $(this).closest('.slide-wraper-js').find('.sticky_nav_container');
  var currentpos = typeof list.data('curent_pos') != 'undefined' ? list.data('curent_pos') : 0;
  if(currentpos < list.find('li').length - 1){
    currentpos++;
    var space = list.find('li:eq('+Number(currentpos-1)+')').outerWidth();
    var left = list.css('left');
    left = left.replace(new RegExp('px','g'),'');
    left = Number(left);
    if(list.outerWidth() + left >= $('.slide-wraper-js').outerWidth()){
      list.data('curent_pos',currentpos);
      list.animate({
        'left' : '-='+space+'px'
      },5)
    }else{
      var left = $('.sticky_nav_container').outerWidth() - $('.slide-wraper-wrap-js.scroller').outerWidth();
      list.data('curent_pos',list.find('li').length - 1);
      list.animate({
        'left' : '-'+left+'px'
      },5)
    }
  }else{

  }
  return false;
});
function calc_items(){
  var counter_width = 0;
  $('.sticky_nav_container').css('left', '0');
  $('body').find('.sticky_nav_container').data('curent_pos',0);
  $('.slide-wraper-js .sticky_nav_container li').each(function(ind,el){
    counter_width = counter_width+$(el).outerWidth();
  });
  if($('.slide-wraper-js').outerWidth() < $('.sticky_nav_container').outerWidth()){
    $('.slide-wraper-js .slide-wraper-wrap-js').addClass('scroller');
    $('.slide-wraper-js .next-slide').removeClass('d-none');
    $('.slide-wraper-js .prev-slide').removeClass('d-none');
  }else{
    $('.slide-wraper-js .slide-wraper-wrap-js').removeClass('scroller');
    $('.slide-wraper-js .next-slide').addClass('d-none');
    $('.slide-wraper-js .prev-slide').addClass('d-none');
  }
}
$(window).resize(function(event) {
 calc_items();
});
setTimeout(function(){
  $(window).resize();
},10);