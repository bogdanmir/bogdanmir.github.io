// $('body').find('.common-hero .info-label-wr').detach().insertAfter( ".header .header__wrap .header__menu" );
// $('body').find('.common-hero .common-hero__content-wrap').detach().prependTo('.common-hero .row:nth-child(2) > div');
// $('body').find('.common-hero .row:nth-child(2) > div').addClass('col-md-6');

// // logos
// var outhtmlLogo  = '<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=140" alt=""></figure>';
// outhtmlLogo  += '<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" alt=""></figure>';
// outhtmlLogo  += '<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" alt=""></figure>';
// outhtmlLogo  += '<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" alt=""></figure>';

// $('body').find('.common-hero .sk-subtitle').appendTo(".common-hero__content-wrap");
// var langs_body = {
//     'en': 'Standalone application for Mac & PC with full RAW support. Works also as a plugin for Adobe and Apple products.',
//     'de': 'Standalone Anwendung für Mac & PC mit voller RAW-Unterstützung. Funktioniert auch als Plugin für Adobe und Apple-Produkte.',
//     'ko': 'RAW 풀 지원이 가능한 Mac 및 PC 전용 독립형 애플리케이션. Adobe 및 Apple 제품의 플러그인으로도 작동합니다.',
//     'jp': 'MacやPCへのスタンドアロン写真編集ソフト。完全RAW ファイル対応. AdobeおよびApple製品のプラグインとしても機能です。',
//     'fr': 'Application autonome pour Mac et PC avec prise en charge du format RAW complète. Fonctionne également comme un plugin pour les produits Adobe et Apple.',
//     'nl': 'Standalone applicatie voor Mac & PC met volledige RAW-ondersteuning. Werkt ook als plug-in voor Adobe en Apple-producten.',
//     'it': 'Applicazione autonoma per Mac e PC con supporto RAW completo. Funziona anche come plugin per i prodotti di Adobe e Apple.',
//     'es': 'Aplicación para Mac y PC con full soporte RAW. Funciona también como plugin para los productos de Adobe y Apple.',
// }
// $.each(langs_body,function(index, el) {
//     if( $('body.'+index).length > 0 ){
//         $('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><div class="wrap-col"><div class="header__logo"><a href="/"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/logo_L4_w2.svg"></a></div><p class="common-hero__content-text">'+el+'</p> <div class="outhtml_logo">'+ outhtmlLogo +'</div></div></div>');
//     }
// });

// $('body').find('.common-hero .common-hero__btns-wrap + .common-hero__upgrade').detach().appendTo( ".common-hero .row:nth-child(2) > div:nth-child(2)" );

// var list_items_sections = [
//     {
//         'item' : 'common-hero',
//         'popular' : false
//     },
//     {
//         'name' : 'Replace sky',
//         'name_de' : 'Himmel ersetzen',
//         'name_ko' : '스카이 변환',
//         'name_ja' : '空を変更',
//         'name_fr' : 'Remplacer le ciel',
//         'name_nl' : 'Vervang lucht',
//         'name_it' : 'Sostituisci cielo',
//         'name_es' : 'Reemplaza el Cielo',
//         'item' : 'sky-hero',
//         'popular' : true
//     },
//     {
//         'name' : 'Tune portraits and skin',
//         'name_de' : 'Porträts und Haut ausgleichen',
//         'name_ko' : '포트레이트 및 피부 조정',
//         'name_ja' : 'ポートレートと肌調整',
//         'name_fr' : 'Affiner les portraits et la peau',
//         'name_nl' : 'Stem portretten en huid af',
//         'name_it' : 'Affina ritratti e pelle',
//         'name_es' : 'Mejora retratos y piel',
//         'item' : 'portrait-hero',
//         'popular' : true
//     },
//     {
//         'name' : 'Embed objects',
//         'name_de' : 'Objekte einbetten',
//         'name_ko' : '내장형 객체',
//         'name_ja' : 'オブジェクトを追加',
//         'name_fr' : 'Intégrer des objets',
//         'name_nl' : 'Embedden van objecten',
//         'name_it' : 'Incorpora oggetti',
//         'name_es' : 'Objetos incorporados',
//         'item' : 'augmented-sky-hero',
//         'popular' : true
//     },
//     {
//         'name' : 'Add sunrays',
//         'name_de' : 'Sonnenstrahlen hinzufügen',
//         'name_ko' : '햇빛 추가',
//         'name_ja' : '太陽光を追加する',
//         'name_fr' : 'Ajouter des rayons solaires',
//         'name_nl' : 'Voeg zonnestralen toe',
//         'name_it' : 'Aggiungi raggi solari',
//         'name_es' : 'Agrega rayos solares',
//         'item' : 'tools-sunrays',
//         'popular' : true
//     },
//     {
//         'name' : 'AI Structure',
//         'name_de' : 'AI Structure',
//         'name_ko' : 'AI 구조',
//         'name_ja' : 'AIストラクチャー',
//         'name_fr' : 'Structure IA',
//         'name_nl' : 'AI Structuur',
//         'name_it' : 'Struttura IA',
//         'name_es' : 'AI Structure',
//         'item' : 'structure-hero',
//         'popular' : true
//     },
//     {
//         'name' : 'AI Accent',
//         'name_de' : 'AI Accent',
//         'name_ko' : 'AI 강조',
//         'name_ja' : 'AIアクセント',
//         'name_fr' : 'Accent IA',
//         'name_nl' : 'AI Accent',
//         'name_it' : 'Accent IA',
//         'name_es' : 'AI Accent',
//         'item' : 'tools-ai-enhance',
//         'popular' : true
//     },
//     {
//         'name' : 'AI Sky Enhancer',
//         'name_de' : 'AI Sky Enhancer',
//         'name_ko' : 'AI 스카이 인핸서',
//         'name_ja' : 'AI スカイエンハンサー',
//         'name_fr' : 'Amélioration du ciel IA',
//         'name_nl' : 'AI Lucht Verbeteraar',
//         'name_it' : 'Miglioramento cielo IA',
//         'name_es' : 'AI Sky Enhancement',
//         'item' : 'tools-ai-enhance_second',
//         'popular' : true
//     },
//     {
//         'name' : 'Smart Contrast',
//         'name_de' : 'Intelligenter Kontrast',
//         'name_ko' : '스마트 대조',
//         'name_ja' : 'スマートコントラスト',
//         'name_fr' : 'Contraste intelligent',
//         'name_nl' : 'Slim Contrast',
//         'name_it' : 'Contrasto intelligente',
//         'name_es' : 'Contraste Inteligente',
//         'item' : 'tools-smart-contrast',
//         'popular' : true
//     },
//     {
//         'name' : 'Erase objects',
//         'name_de' : 'Objekte löschen',
//         'name_ko' : '객체 제거',
//         'name_ja' : '消しゴム',
//         'name_fr' : 'Supprimer des objets',
//         'name_nl' : 'Verwijder objecten',
//         'name_it' : 'Elimina oggetti',
//         'name_es' : 'Elimina objetos',
//         'item' : 'erase-technology',
//         'popular' : true
//     },
//     {
//         'name' : 'Landscape Enhancer',
//         'name_de' : 'Landscape Enhancer',
//         'name_ko' : '조경 인핸서',
//         'name_ja' : '風景エンハンサー',
//         'name_fr' : 'Améliorer le paysage',
//         'name_nl' : 'Landscape Enhancer',
//         'name_it' : 'Migliora paesaggi',
//         'name_es' : 'Landscape Enhancer',
//         'item' : 'tools-landscapes',
//         'popular' : true
//     },
//     {
//         'item' : 'tools-library',
//         'popular' : false
//     },
//     {
//         'name' : 'Instant Filters',
//         'name_de' : 'Sofortfilter',
//         'name_ko' : '즉각 필터',
//         'name_ja' : 'インスタントフィルター',
//         'name_fr' : 'Filtres instantanés',
//         'name_nl' : 'Instant Filters',
//         'name_it' : 'Filtri istantanei',
//         'name_es' : 'Filtros Instantáneos',
//         'item' : 'tools-looks',
//         'popular' : true
//     },
//     {
//         'name' : 'Remove noise',
//         'name_de' : 'Rauschen entfernen',
//         'name_ko' : '노이즈 제거',
//         'name_ja' : 'ノイズ除去',
//         'name_fr' : 'Éliminer le bruit',
//         'name_nl' : 'Verwijder ruis',
//         'name_it' : 'Rimuovi rumore',
//         'name_es' : 'Renueve el ruido',
//         'item' : 'tools-denoise',
//         'popular' : true
//     },
//     {
//         'name' : 'Enhance details',
//         'name_de' : 'Details verbessern',
//         'name_ko' : '세부 사항 강화',
//         'name_ja' : '詳細を強化する',
//         'name_fr' : 'Améliorer les détails',
//         'name_nl' : 'Verbeter details',
//         'name_it' : 'Migliorare i dettagli',
//         'name_es' : 'Mejorar detalles',
//         'item' : 'tools-details-enhancer',
//         'popular' : true
//     },
//     {
//         'item' : 'common-to-pro',
//         'popular' : false
//     },
//     {
//         'name' : 'Creative tools',
//         'name_de' : 'Kreative Tools',
//         'name_ko' : '크리에이티브 도구',
//         'name_ja' : 'クリエイティブ',
//         'name_fr' : 'Outils créatifs',
//         'name_nl' : 'Creatieve tools',
//         'name_it' : 'Tool creativi',
//         'name_es' : 'Herramientas Creativas',
//         'item' : 'tools-creative',
//         'popular' : true
//     },
//     {
//         'item' : 'global-works-as-plugin',
//         'popular' : false
//     },
//     {
//         'item' : 'common-language',
//         'popular' : false
//     },
//     {
//         'item' : 'common-press',
//         'popular' : false
//     },
//     {
//         'item' : 'common-video-free-tutorials',
//         'popular' : false
//     },
//     {
//         'item' : 'common-trustpilot',
//         'popular' : false
//     },
//     {
//         'item' : 'global-bottom-buy',
//         'popular' : false
//     }
//     // {
//     //     'item' : 'common-video-gallery',
//     //     'popular' : false
//     // },
// ];

// // top navigation
// var items      = "";
// var items_dots = '';
// var stickyHref = $('.common-hero__labeled-btn-wrap .sk-btn').attr('href');

// var outhtmlTopNav  = '<div class="sticky_nav_wrap"><div class="slide-wraper-js"><span class="prev-slide"></span><div class="slide-wraper-wrap-js"><ul class="sticky_nav_container"></ul></div><span class="next-slide"></span></div><a href="'+stickyHref+'" class="sk-btn sk-btn_type_primary-2 by-btn-js">Buy Now</a></div>';
// $('.wrapper').append('<ul class="sticky_dot_wrap"></ul>');
// $('body').find('.header').after(outhtmlTopNav);
// $.each(list_items_sections,function(ind,el){
//     var ob_keys = {
//         'en': 'name',
//         'de': 'name_de',
//         'ko': 'name_ko',
//         'jp': 'name_ja',
//         'fr': 'name_fr',
//         'nl': 'name_nl',
//         'it': 'name_it',
//         'es': 'name_es',
//     }
//     $.each(ob_keys, function(inx, item) {
//         if (el.popular == true && $('body.'+inx).length > 0) {
//             items += '<li data-gosection="' + el.item + '">' + el[item] + '</li>';
//         }
//     });
//     items_dots +=    '<li data-gosection="'+el.item+'"></li>';
// })
// $('.wrapper').find('.sticky_dot_wrap').append(items_dots);
// $('body').find('ul.sticky_nav_container').append(items);


// function scroll_activation(){
//     $.each(list_items_sections,function(index, el) {
//         var analytics_block = $('[data-analytics-block='+el.item+']');
//         if (analytics_block.length > 0) {
//             if($('html,body').scrollTop() > analytics_block.offset().top - 200){
//                 $('[data-gosection]').removeClass();
//                 $('[data-gosection="'+el.item+'"]').addClass('active');
//             }
//         }
//     });
// }
// scroll_activation();
// $(window).scroll(function(event) {
//     if($('html,body').scrollTop() > 60){
//         $('body').find('.sticky_nav_wrap').addClass('sticky-scroll');
//     }else{
//         $('body').find('.sticky_nav_wrap').removeClass('sticky-scroll');
//     }
//     scroll_activation();
// });

// // все что выше в GO














// все что ниже - на гите

try {
  hj('trigger', 'motivate_scroll');
}
catch(e) {}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'UA_event',
  'eventCategory': 'Exp - Motivate scroll',
  'eventAction': 'loaded'
});

function is_ie() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    if (Idx > 0){
        return true;
    }
    else if (!!navigator.userAgent.match(/Trident\/7\./)){
        return true;
    }
    else{
        return false;
    }
}

$('body').on('click', '[data-gosection]', function(event) {

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'UA_event',
      'eventCategory': 'Exp - Motivate scroll',
      'eventAction': 'Clicked Sticky Navigation'
    });
    console.log('Clicked Sticky Navigation')

    var gosection = $(this).attr('data-gosection');
    $('[data-gosection]').removeClass();
    $('[data-gosection="'+gosection+'"]').addClass('active');
    $('html,body').animate({
            scrollTop: $('[data-analytics-block="'+gosection+'"]').offset().top},
        500);
    return false;
});


//by-btn in sticky menu 
$('body').on('click', '.sticky_nav_wrap .by-btn-js', function(event) {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'UA_event',
    'eventCategory': 'Exp - Motivate scroll',
    'eventAction': 'Clicked Sticky Buy Now'
  });
  console.log('Clicked Sticky Buy Now')
});


// Slider
// $('.slide-wraper-js .prev-slide').click(function(){
//     var list = $(this).closest('.slide-wraper-js').find('ul.sticky_nav_container');
//     var currentpos = typeof list.data('curent_pos') != 'undefined' ? list.data('curent_pos') : 0;
//     if(is_ie() == true){
//         // console.log(seter_width);
//         var seter_width = typeof list.data('seter_width') != 'undefined' ? list.data('seter_width') : 0;
//         if(seter_width == 0){
//             list.find('li').each(function(ind,el){
//                 var current_li_w = $(el).outerWidth();
//                 seter_width = Number(seter_width)+ Number(current_li_w);
//             });
//             list.data('seter_width',seter_width);
//         }
//         list.css('width',seter_width+"px");
//         // console.log(seter_width);
//     }

//     if(currentpos > 0){
//         currentpos--;
//         var space = list.find('li:eq('+Number(currentpos)+')').outerWidth();
//         var left = list.css('left');
//         left = left.replace(new RegExp('px','g'),'');
//         left = Number(left);
//         if(space+left < 0){
//             list.data('curent_pos',currentpos);
//             list.animate({
//                 'left' : '+='+space+'px'
//             },5)
//         }else{
//             list.data('curent_pos',0);
//             list.animate({
//                 'left' : '0px'
//             },5)
//         }
//     }
//     return false;
// })
// $('.slide-wraper-js .next-slide').click(function(){
//     $('.slide-wraper-js .prev-slide').addClass('visible');
//     var list = $(this).closest('.slide-wraper-js').find('.sticky_nav_container');
//     var currentpos = typeof list.data('curent_pos') != 'undefined' ? list.data('curent_pos') : 0;
//     if(is_ie() == true){
//         var seter_width = typeof list.data('seter_width') != 'undefined' ? list.data('seter_width') : 0;
//         if(seter_width == 0){
//             list.find('li').each(function(ind,el){
//                 var current_li_w = $(el).outerWidth();
//                 seter_width = Number(seter_width)+ Number(current_li_w);
//             });
//             list.data('seter_width',seter_width);
//         }
//         list.css('width',seter_width+"px");
//         // console.log(seter_width);
//     }
//     // console.log(list.find('li').length);
//     if(currentpos <= list.find('li').length - 1){
//         currentpos++;
//         var space = list.find('li:eq('+Number(currentpos-1)+')').outerWidth();
//         var left = list.css('left');
//         left = left.replace(new RegExp('px','g'),'');
//         // console.log($('.slide-wraper-js').outerWidth());
//         // console.log(Number(list.outerWidth()) + Number(left));
//         left = Number(left);
//         // console.log(Number(list.outerWidth()) + Number(left));
//         // console.log($('.slide-wraper-js').outerWidth());
//         if(Number(list.outerWidth()) + Number(left) >= $('.slide-wraper-js').outerWidth()){
//             list.data('curent_pos',currentpos);
//             list.animate({
//                 'left' : '-='+space+'px'
//             },5)
//         }else{
//             var left = Number($('.slide-wraper-js').outerWidth()) - Number($('.sticky_nav_container').outerWidth());
//             list.data('curent_pos',list.find('li').length - 1);
//             list.animate({
//                 'left' : left+'px'
//             },5)
//         }
//     }else{

//     }
//     return false;
// });



$('.slide-wraper-js .prev-slide').click(function(){
    var list = $(this).closest('.slide-wraper-js').find('ul.sticky_nav_container');
    list.animate({
        'left' : 0
    },5)
    $(this).removeClass('visible');
    $('.slide-wraper-js .next-slide').removeClass('hidden');
});

$('.slide-wraper-js .next-slide').click(function(){
    $('.slide-wraper-js .prev-slide').addClass('visible');
    var list = $(this).closest('.slide-wraper-js').find('.sticky_nav_container');
    var position = Number($('.slide-wraper-js').outerWidth()) - Number($('.sticky_nav_container').outerWidth()) - 80;
    list.animate({
        'left' : position+'px'
    },5);
    $(this).addClass('hidden');
});




function calc_items(){
    console.log(is_ie() == true);//Test in on IE
    var counter_width = 0;
    $('.sticky_nav_container').css('left', '0');
    $('body').find('.sticky_nav_container').data('curent_pos',0);
    if(is_ie() == true){
        $('.slide-wraper-js .sticky_nav_container li').each(function(ind,el){
            counter_width = counter_width+$(el).outerWidth();
        });
    }else{
        counter_width = $('.sticky_nav_container').outerWidth();
    }
    if($('.slide-wraper-js').outerWidth() < counter_width){
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

$('body').find('.common-hero').append('<div class="mouse_down"><span class="arrow"><span></span><span></span><span></span></span></div>');

$('body').find('.tools-ai-enhance').append('<div class="tools-ai-enhance_second" data-analytics-block="tools-ai-enhance_second"></div>');
