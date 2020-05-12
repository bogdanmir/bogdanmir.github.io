$('body').find('.common-hero .info-label-wr').detach().insertAfter( ".header .header__wrap .header__menu" );

$('body').find('.common-hero .common-hero__content-wrap').detach().prependTo('.common-hero .row:nth-child(2) > div');
$('body').find('.common-hero .row:nth-child(2) > div').addClass('col-md-6');

// logos
var outhtmlLogo  = '<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=140" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=140" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=280" data-preload-mob-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=180" alt=""></figure>';
outhtmlLogo  += '<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" alt=""></figure>';
outhtmlLogo  += '<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" alt=""></figure>';
outhtmlLogo  += ' <figure class="plugins__logo"> <img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" alt=""></figure>';


// $('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">Standalone application for Mac & PC with full RAW support. And Plugin for Adobe Photoshop, Lightroom & Apple products</p> '+ outhtmlLogo +'</div>');


// $('body').find('.common-hero .common-hero__content-wrap').append("<p class='common-hero__subtitle'><b>Luminar 4's</b> revolutionary tools and AI technologies give superpowers for creative <b>photo editing.</b></p>");
$('body').find('.common-hero .sk-subtitle').appendTo(".common-hero__content-wrap");

if( $('body.en').length > 0 ){
  	$('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">Standalone application for Mac & PC with full RAW support. And Plugin for Adobe Photoshop, Lightroom & Apple products</p> <div class="outhtml_logo">'+ outhtmlLogo +'</div></div>');
}
if( $('body.de').length > 0 ){
	$('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">Standalone Anwendung für Mac & PC mit voller RAW-Unterstützung. Und Plugin für Adobe Photoshop, Lightroom und Apple-Produkte</p> <div class="outhtml_logo">'+ outhtmlLogo +'</div></div>');
}
if( $('body.ko').length > 0 ){
	$('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">RAW 풀 지원이 가능한 Mac 및 PC 전용 독립형 애플리케이션. Adobe Photoshop, Lightroom, Apple 제품을 위한 플러그인</p> <div class="outhtml_logo">'+ outhtmlLogo +'</div></div>');
}
if( $('body.jp').length > 0 ){
	$('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">MacやPCへのスタンドアロン写真編集ソフト。完全RAW ファイル対応. フォトショップ、ライトルームやApple製品にプラグイン対応</p> <div class="outhtml_logo">'+ outhtmlLogo +'</div></div>');
}
if( $('body.fr').length > 0 ){
	$('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">Application autonome pour Mac et PC avec prise en charge du format RAW complète. Et plug-in pour Adobe Photoshop, Lightroom et les produits Apple</p> <div class="outhtml_logo">'+ outhtmlLogo +'</div></div>');
}
if( $('body.nl').length > 0 ){
	$('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">Standalone applicatie voor Mac & PC met volledige RAW-ondersteuning. En plugin voor Adobe Photoshop, Lightroom en Apple producten</p> <div class="outhtml_logo">'+ outhtmlLogo +'</div></div>');
}
if( $('body.it').length > 0 ){
	$('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">Applicazione autonoma per Mac e PC con supporto RAW completo. E plugin per Adobe Photoshop, Lightroom e prodotti Apple</p> <div class="outhtml_logo">'+ outhtmlLogo +'</div></div>');
}
if( $('body.es').length > 0 ){
	$('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">Aplicación para Mac y PC con full soporte RAW. Agrega extensión para Adobe Photoshop, Lightroom y productos Apple</p> <div class="outhtml_logo">'+ outhtmlLogo +'</div></div>');
}


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
  'name_de' : 'Himmel ersetzen',
  'name_ko' : '스카이 변환',
  'name_ja' : '空を変更',
  'name_fr' : 'Remplacer le ciel',
  'name_nl' : 'Vervang lucht',
  'name_it' : 'Sostituisci cielo',
  'name_es' : 'Reemplaza el Cielo',
  'item' : 'sky-hero',
  'popular' : true
},
{
  'name' : 'Tune portraits and skin',
  'name_de' : 'Porträts und Haut ausgleichen',
  'name_ko' : '포트레이트 및 피부 조정',
  'name_ja' : 'ポートレートと肌調整',
  'name_fr' : 'Affiner les portraits et la peau',
  'name_nl' : 'Stem portretten en huid af',
  'name_it' : 'Affina ritratti e pelle',
  'name_es' : 'Mejora retratos y piel',
  'item' : 'portrait-hero',
  'popular' : true
},
{
  'name' : 'Add sunrays',
  'name_de' : 'Sonnenstrahlen hinzufügen',
  'name_ko' : '햇빛 추가',
  'name_ja' : '太陽光を追加する',
  'name_fr' : 'Ajouter des rayons solaires',
  'name_nl' : 'Voeg zonnestralen toe',
  'name_it' : 'Aggiungi raggi solari',
  'name_es' : 'Agrega rayos solares',
  'item' : 'tools-sunrays',
  'popular' : true
},
{
  'name' : 'AI Accent',
  'name_de' : 'AI Accent',
  'name_ko' : 'AI 강조',
  'name_ja' : 'AIアクセント',
  'name_fr' : 'Accent IA',
  'name_nl' : 'AI Accent',
  'name_it' : 'Accent IA',
  'name_es' : 'AI Accent',
  'item' : 'tools-ai-enhance',
  'popular' : true
},
{
  'name' : 'AI Sky Enhancer',
  'name_de' : 'AI Sky Enhancer',
  'name_ko' : 'AI 스카이 인핸서',
  'name_ja' : 'AI スカイエンハンサー',
  'name_fr' : 'Amélioration du ciel IA',
  'name_nl' : 'AI Lucht Verbeteraar',
  'name_it' : 'Miglioramento cielo IA',
  'name_es' : 'AI Sky Enhancement',
  'item' : 'tools-ai-enhance',
  'popular' : true
},
{
  'name' : 'AI Structure',
  'name_de' : 'AI Structure',
  'name_ko' : 'AI 구조',
  'name_ja' : 'AIストラクチャー',
  'name_fr' : 'Structure IA',
  'name_nl' : 'AI Structuur',
  'name_it' : 'Struttura IA',
  'name_es' : 'AI Structure',
  'item' : 'structure-hero',
  'popular' : true
},
{
  'name' : 'Smart Contrast',
  'name_de' : 'Intelligenter Kontrast',
  'name_ko' : '스마트 대조',
  'name_ja' : 'スマートコントラスト',
  'name_fr' : 'Contraste intelligent',
  'name_nl' : 'Slim Contrast',
  'name_it' : 'Contrasto intelligente',
  'name_es' : 'Contraste Inteligente',
  'item' : 'tools-smart-contrast',
  'popular' : true
},
{
  'name' : 'Erase objects',
  'name_de' : 'Objekte löschen',
  'name_ko' : '객체 제거',
  'name_ja' : '消しゴム',
  'name_fr' : 'Supprimer des objets',
  'name_nl' : 'Verwijder objecten',
  'name_it' : 'Elimina oggetti',
  'name_es' : 'Elimina objetos',
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
  'name_de' : 'Sofortfilter',
  'name_ko' : '즉각 필터',
  'name_ja' : 'インスタントフィルター',
  'name_fr' : 'Filtres instantanés',
  'name_nl' : 'Instant Filters',
  'name_it' : 'Filtri istantanei',
  'name_es' : 'Filtros Instantáneos',
  'item' : 'tools-looks',
  'popular' : true
},
{
  'name' : 'Landscape Enhancer',
  'name_de' : 'Landscape Enhancer',
  'name_ko' : '조경 인핸서',
  'name_ja' : '風景エンハンサー',
  'name_fr' : 'Améliorer le paysage',
  'name_nl' : 'Landscape Enhancer',
  'name_it' : 'Migliora paesaggi',
  'name_es' : 'Landscape Enhancer',
  'item' : 'tools-landscapes',
  'popular' : true
},
{
  'name' : 'Creative tools',
  'name_de' : 'Kreative Tools',
  'name_ko' : '크리에이티브 도구',
  'name_ja' : 'クリエイティブ',
  'name_fr' : 'Outils créatifs',
  'name_nl' : 'Creatieve tools',
  'name_it' : 'Tool creativi',
  'name_es' : 'Herramientas Creativas',
  'item' : 'tools-creative',
  'popular' : true
},
{
  'name' : 'Remove noise',
  'name_de' : 'Rauschen entfernen',
  'name_ko' : '노이즈 제거',
  'name_ja' : 'ノイズ除去',
  'name_fr' : 'Éliminer le bruit',
  'name_nl' : 'Verwijder ruis',
  'name_it' : 'Rimuovi rumore',
  'name_es' : 'Renueve el ruido',
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
  if(el.popular == true && $('body.ko').length > 0 ){
    items    +=    '<li data-gosection="'+el.item+'">'+el.name_ko+'</li>';
  }
  if(el.popular == true && $('body.jp').length > 0 ){
    items    +=    '<li data-gosection="'+el.item+'">'+el.name_ja+'</li>';
  }
  if(el.popular == true && $('body.fr').length > 0 ){
    items    +=    '<li data-gosection="'+el.item+'">'+el.name_fr+'</li>';
  }
  if(el.popular == true && $('body.nl').length > 0 ){
    items    +=    '<li data-gosection="'+el.item+'">'+el.name_nl+'</li>';
  }
  if(el.popular == true && $('body.it').length > 0 ){
    items    +=    '<li data-gosection="'+el.item+'">'+el.name_it+'</li>';
  }
  if(el.popular == true && $('body.es').length > 0 ){
    items    +=    '<li data-gosection="'+el.item+'">'+el.name_es+'</li>';
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


    var analytics_block = $('[data-analytics-block='+el.item+']');
	if (analytics_block.length > 0) {
	    if($('html,body').scrollTop() > analytics_block.offset().top - 200){
	      $('[data-gosection]').removeClass();
	      $('[data-gosection="'+el.item+'"]').addClass('active');
	    }
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