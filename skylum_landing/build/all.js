function abjql(e){var o=document.createElement("script");o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,e())}:o.onload=function(){e()},o.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(o)}function abjqlr(e){function o(){e.each(n,function(o,t){var a=e("[data-analytics-block="+t.item+"]");a.length>0&&e("html,body").scrollTop()>a.offset().top-200&&(e("[data-gosection]").removeClass(),e('[data-gosection="'+t.item+'"]').addClass("active"))})}function t(){var o=0;e(".sticky_nav_container").css("left","0"),e("body").find(".sticky_nav_container").data("curent_pos",0),e(".slide-wraper-js .sticky_nav_container li").each(function(t,a){o+=e(a).outerWidth()}),e(".slide-wraper-js").outerWidth()<e(".sticky_nav_container").outerWidth()?(e(".slide-wraper-js .slide-wraper-wrap-js").addClass("scroller"),e(".slide-wraper-js .next-slide").removeClass("d-none"),e(".slide-wraper-js .prev-slide").removeClass("d-none")):(e(".slide-wraper-js .slide-wraper-wrap-js").removeClass("scroller"),e(".slide-wraper-js .next-slide").addClass("d-none"),e(".slide-wraper-js .prev-slide").addClass("d-none"))}e("body").append('<style>.wrapper{overflow:hidden}.wrap-content .common-hero{-ms-flex-pack:start;justify-content:flex-start;text-align:left;padding-top:93px}@media (max-height:800px){.wrap-content .common-hero{padding-top:92px}}@media (max-height:900px){.wrap-content .common-hero{padding-top:84px}}@media (min-width:1680px){.wrap-content .common-hero .row .col-md-6:first-child{padding-left:175px}}@media (min-width:1680px){.wrap-content .common-hero .row .col-md-6:last-child{padding-left:68px}}.wrap-content .common-hero .common-hero__title{font-size:53px;padding-bottom:10px}@media (max-width:1999px){.wrap-content .common-hero .common-hero__title{font-size:40px}}.wrap-content .common-hero .common-hero__title br,.wrap-content .common-hero .sk-subtitle{display:none}.wrap-content .common-hero .common-hero__sub-title{font-size:20px;font-weight:300;max-width:450px;margin:0;padding:0 0 48px;line-height:1.3;display:block}@media (max-height:900px){.wrap-content .common-hero .common-hero__sub-title{padding:0 0 28px}}.wrap-content .common-hero .common-hero__content-text{font-size:24px;max-width:500px;padding-bottom:10px;font-size:18px;line-height:1.3}@media (min-width:1080px){.wrap-content .common-hero .common-hero__content-text{padding-top:35px;padding-bottom:12px;font-weight:300}}@media (min-width:2000px){.wrap-content .common-hero .common-hero__content-text{font-size:23px}}@media (min-width:1080px){.wrap-content .common-hero .common-hero__content-wrap{font-weight:300;padding:0}}.wrap-content .common-hero .common-hero__labeled-btn-wrap .common-hero__upgrade{font-size:14px;font-weight:300;padding-top:9px}.wrap-content .common-hero .plugins__logo{display:inline-block;max-height:31px;margin-bottom:38px}@media (max-height:900px){.wrap-content .common-hero .plugins__logo{margin-bottom:20px}}.wrap-content .common-hero .plugins__logo+.plugins__logo{margin-left:15px}.wrap-content .common-hero .plugins__logo img{max-width:31px;max-height:31px}.wrap-content .common-hero .plugins__logo+.common-hero__upgrade{font-weight:300}.wrap-content .common-hero .common-hero__btns-wrap{-ms-flex-pack:start;justify-content:flex-start}.wrap-content .common-hero .common-hero__btns-wrap>*{margin:0}.wrap-content .common-hero .common-hero__btns-wrap .sk-btn_type_clean-border{padding:13px 46px}.wrap-content .common-hero .common-hero__labeled-btn-wrap{margin-left:18px}.wrap-content .common-hero__video-in{top:406px}.wrap-content .hero-bg>.sk-section_bg_dark{display:none}.mouse_down{position:absolute;bottom:25px;left:0;right:0;margin:auto;border:1px solid #fff;box-sizing:border-box;border-radius:20px;z-index:3;height:62px;width:34px}@media (max-width:1999px){.mouse_down{height:47px;width:26px}}@media (max-width:1400px){.mouse_down{bottom:50px}}@media (max-width:1300px){.mouse_down{bottom:65px}}.mouse_down .mouse_wheel{background:#fff;display:block;border-radius:50%;margin:0 auto;position:relative;top:8px;height:8px;width:8px;animation:a 1.5s linear infinite}@media (max-width:1999px){.mouse_down .mouse_wheel{height:6px;width:6px}}@keyframes a{0%,to{top:8px}50%{top:16px}}.sticky_nav_wrap{overflow:hidden;background-color:#000;height:50px;width:100%;transition:all .25s ease-in-out;margin-top:60px;position:-webkit-sticky;position:sticky;top:0;left:0;z-index:9}.sticky_nav_wrap .by-btn-js{display:none;font-size:13px;min-width:107px;margin-right:5px;padding:3px 5px;position:absolute;top:11px;right:0}.sticky_nav_wrap.sticky-scroll{position:fixed;margin-top:0}.sticky_nav_wrap.sticky-scroll .by-btn-js{display:inline-block}.sticky_nav_wrap.sticky-scroll .sticky_nav_container{overflow:hidden}.sticky_nav_wrap.sticky-scroll .slide-wraper-wrap-js{-ms-flex:0 0 calc(100% - 120px);flex:0 0 calc(100% - 120px)}.sticky_nav_wrap.sticky-scroll .slide-wraper-wrap-js.scroller{-ms-flex:0 0 calc(100% - 220px);flex:0 0 calc(100% - 220px)}.sticky_nav_wrap .next-slide,.sticky_nav_wrap .prev-slide{width:50px;height:50px;-ms-flex:0 0 50px;flex:0 0 50px;display:inline-block;position:relative;color:#fff;text-align:center;line-height:3em;cursor:pointer;transition:background .3s ease-in-out,left .3s ease-in-out,right .3s ease-in-out;-webkit-transition:background .3s ease-in-out,left .3s ease-in-out,right .3s ease-in-out;-moz-transition:background .3s ease-in-out,left .3s ease-in-out,right .3s ease-in-out;z-index:10;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.sticky_nav_wrap .next-slide:before,.sticky_nav_wrap .prev-slide:before{content:"";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAANCAYAAACUwi84AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgBbVHLEYIwEN2NeLcEStAS7EAqUM8OQnTGq3hXMhC9W4Id0AIdSAkUAKwLCPLxnZJ5v+wG/VC/gYF5tpBSpjCAAKpok8Q0UkrNRgIssiUQJYAwLyZTNRJwbNKIEGBzC++qX8EoRVkhLD6mLHJ9/Tj3BCVOchfnOVnVhchrRDjsvAb6KRDX9WS4ED1S61VDEtFFcmqbwCPOaWJE7JuV5NGxvbaCSfNLmmwNDo7tNkbskgj0knvb6tYaPyfEUGTb4aONetVULsv69xcfBINgIeoK4wIAAAAASUVORK5CYII=);background-repeat:no-repeat;position:absolute;top:17px;height:15px;width:10px;z-index:1}.sticky_nav_wrap .next-slide:after,.sticky_nav_wrap .prev-slide:after{content:"";background:linear-gradient(270deg,#05080b,#05090c 40.1%,rgba(5,8,11,0));width:35px;height:50px;position:absolute;top:0}.sticky_nav_wrap .next-slide{right:0}.sticky_nav_wrap .next-slide:before{right:20px}.sticky_nav_wrap .next-slide:after{right:50px}.sticky_nav_wrap .next-slide:hover{background:hsla(0,0%,100%,.16)}.sticky_nav_wrap .next-slide:hover:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDkgMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjc0NTEyIDAuMDQ0NDMzNkw4LjIwMDY4IDYuNUwxLjc0NTEyIDEyLjk1NTZMMC4yMTUzMzIgMTEuNDE5NEw1LjEzNDc3IDYuNUwwLjIxNTMzMiAxLjU4MDU3TDEuNzQ1MTIgMC4wNDQ0MzM2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)}.sticky_nav_wrap .prev-slide{left:0;opacity:0;z-index:-1}.sticky_nav_wrap .prev-slide.visible{opacity:1;z-index:10}.sticky_nav_wrap .prev-slide:before{transform:rotate(180deg);left:20px}.sticky_nav_wrap .prev-slide:after{left:50px;transform:rotate(180deg)}.sticky_nav_wrap .prev-slide:hover{background:hsla(0,0%,100%,.16)}.sticky_nav_wrap .prev-slide:hover:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDkgMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjc0NTEyIDAuMDQ0NDMzNkw4LjIwMDY4IDYuNUwxLjc0NTEyIDEyLjk1NTZMMC4yMTUzMzIgMTEuNDE5NEw1LjEzNDc3IDYuNUwwLjIxNTMzMiAxLjU4MDU3TDEuNzQ1MTIgMC4wNDQ0MzM2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==)}.sticky_nav_wrap .sticky_nav_container{margin:0;padding:0;position:absolute;top:0;left:0;height:50px;transition:left .3s ease-in-out;-webkit-transition:left .3s ease-in-out;-moz-transition:left .3s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.sticky_nav_wrap .sticky_nav_container li{font-size:14px;line-height:1.5;color:#8e9294;list-style:none;padding:0 30px;height:100%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;position:relative;z-index:1;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;transition:color .25s ease-in-out,opacity .25s ease-in-out}.sticky_nav_wrap .sticky_nav_container li:after{content:"";background-color:#009527;position:absolute;left:32px;bottom:0;height:2px;width:calc(100% - 64px);opacity:0}@media (min-width:2000px){.sticky_nav_wrap .sticky_nav_container li{font-size:17px}}@media (min-width:1080px){.sticky_nav_wrap .sticky_nav_container li{font-size:13px}}.sticky_nav_wrap .sticky_nav_container li.active,.sticky_nav_wrap .sticky_nav_container li:hover{color:#fff}.sticky_nav_wrap .sticky_nav_container li.active:after,.sticky_nav_wrap .sticky_nav_container li:hover:after{opacity:1}.sticky_dot_wrap{position:fixed;right:20px;top:25%;z-index:9}.sticky_dot_wrap li{border-radius:50%;border:1px solid #fff;display:block;margin:0 0 20px;height:10px;width:10px;pointer-events:none}.sticky_dot_wrap li.active{background-color:#fff}.fix-menu.sk-grid.preload.active{display:none}.slide-wraper-js{display:-ms-flexbox;display:flex}.slide-wraper-js .slide-wraper-wrap-js{position:relative;-ms-flex:0 0 100%;flex:0 0 100%;overflow:hidden;height:50px}.slide-wraper-js .slide-wraper-wrap-js.scroller{-ms-flex:0 0 calc(100% - 100px);flex:0 0 calc(100% - 100px)}.slide-wraper-js .sticky_nav_container{z-index:9}</style>'),e("body").find(".common-hero .info-label-wr").detach().insertAfter(".header .header__wrap .header__menu"),e("body").find(".common-hero .common-hero__content-wrap").detach().prependTo(".common-hero .row:nth-child(2) > div"),e("body").find(".common-hero .row:nth-child(2) > div").addClass("col-md-6");var a='<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=140" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=140" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=280" data-preload-mob-src="https://media.macphun.com/img/uploads/uploads/skylum/luminar-dam-launch/app-lg.png?w=180" alt=""></figure>';a+='<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/adobe-elements-v2.svg" alt=""></figure>',a+='<figure class="plugins__logo"><img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/photoshop.svg" alt=""></figure>',a+=' <figure class="plugins__logo"> <img src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" data-preload-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" data-preload-retina-src="https://media.macphun.com/img/uploads/uploads/skylum/svg/lightroom.svg" alt=""></figure>',e("body").find(".common-hero .sk-subtitle").appendTo(".common-hero__content-wrap"),e("body.en").length>0&&e("body").find(".common-hero .row:nth-child(2)").append('<div class="col-md-6"><p class="common-hero__content-text">Standalone application for Mac & PC with full RAW support. And Plugin for Adobe Photoshop, Lightroom & Apple products</p> '+a+"</div>"),e("body.de").length>0&&e("body").find(".common-hero .row:nth-child(2)").append('<div class="col-md-6"><p class="common-hero__content-text">Standalone Anwendung für Mac & PC mit voller RAW-Unterstützung. Und Plugin für Adobe Photoshop, Lightroom und Apple-Produkte</p> '+a+"</div>"),e("body.ko").length>0&&e("body").find(".common-hero .row:nth-child(2)").append('<div class="col-md-6"><p class="common-hero__content-text">RAW 풀 지원이 가능한 Mac 및 PC 전용 독립형 애플리케이션. Adobe Photoshop, Lightroom, Apple 제품을 위한 플러그인</p> '+a+"</div>"),e("body.jp").length>0&&e("body").find(".common-hero .row:nth-child(2)").append('<div class="col-md-6"><p class="common-hero__content-text">MacやPCへのスタンドアロン写真編集ソフト。完全RAW ファイル対応. フォトショップ、ライトルームやApple製品にプラグイン対応</p> '+a+"</div>"),e("body.fr").length>0&&e("body").find(".common-hero .row:nth-child(2)").append('<div class="col-md-6"><p class="common-hero__content-text">Application autonome pour Mac et PC avec prise en charge du format RAW complète. Et plug-in pour Adobe Photoshop, Lightroom et les produits Apple</p> '+a+"</div>"),e("body.nl").length>0&&e("body").find(".common-hero .row:nth-child(2)").append('<div class="col-md-6"><p class="common-hero__content-text">Standalone applicatie voor Mac & PC met volledige RAW-ondersteuning. En plugin voor Adobe Photoshop, Lightroom en Apple producten</p> '+a+"</div>"),e("body.it").length>0&&e("body").find(".common-hero .row:nth-child(2)").append('<div class="col-md-6"><p class="common-hero__content-text">Applicazione autonoma per Mac e PC con supporto RAW completo. E plugin per Adobe Photoshop, Lightroom e prodotti Apple</p> '+a+"</div>"),e("body.es").length>0&&e("body").find(".common-hero .row:nth-child(2)").append('<div class="col-md-6"><p class="common-hero__content-text">Aplicación para Mac y PC con full soporte RAW. Agrega extensión para Adobe Photoshop, Lightroom y productos Apple</p> '+a+"</div>"),e("body").find(".common-hero .common-hero__btns-wrap + .common-hero__upgrade").detach().appendTo(".common-hero .row:nth-child(2) > div:nth-child(2)"),e("body").find(".common-hero").append('<div class="mouse_down"><span class="mouse_wheel"></span></div>');var n=[{item:"common-hero",popular:!1},{name:"Embed objects",name_de:"Objekte einbetten",name_ko:"내장형 객체",name_ja:"オブジェクトを追加",name_fr:"Intégrer des objets",name_nl:"Embedden van objecten",name_it:"Incorpora oggetti",name_es:"Objetos incorporados",item:"augmented-sky-hero",popular:!0},{name:"Replace sky",name_de:"Himmel ersetzen",name_ko:"스카이 변환",name_ja:"空を変更",name_fr:"Remplacer le ciel",name_nl:"Vervang lucht",name_it:"Sostituisci cielo",name_es:"Reemplaza el Cielo",item:"sky-hero",popular:!0},{name:"Tune portraits and skin",name_de:"Porträts und Haut ausgleichen",name_ko:"포트레이트 및 피부 조정",name_ja:"ポートレートと肌調整",name_fr:"Affiner les portraits et la peau",name_nl:"Stem portretten en huid af",name_it:"Affina ritratti e pelle",name_es:"Mejora retratos y piel",item:"portrait-hero",popular:!0},{name:"Add sunrays",name_de:"Sonnenstrahlen hinzufügen",name_ko:"햇빛 추가",name_ja:"太陽光を追加する",name_fr:"Ajouter des rayons solaires",name_nl:"Voeg zonnestralen toe",name_it:"Aggiungi raggi solari",name_es:"Agrega rayos solares",item:"tools-sunrays",popular:!0},{name:"AI Accent",name_de:"AI Accent",name_ko:"AI 강조",name_ja:"AIアクセント",name_fr:"Accent IA",name_nl:"AI Accent",name_it:"Accent IA",name_es:"AI Accent",item:"tools-ai-enhance",popular:!0},{name:"AI Sky Enhancer",name_de:"AI Sky Enhancer",name_ko:"AI 스카이 인핸서",name_ja:"AI スカイエンハンサー",name_fr:"Amélioration du ciel IA",name_nl:"AI Lucht Verbeteraar",name_it:"Miglioramento cielo IA",name_es:"AI Sky Enhancement",item:"tools-ai-enhance",popular:!0},{name:"AI Structure",name_de:"AI Structure",name_ko:"AI 구조",name_ja:"AIストラクチャー",name_fr:"Structure IA",name_nl:"AI Structuur",name_it:"Struttura IA",name_es:"AI Structure",item:"structure-hero",popular:!0},{name:"Smart Contrast",name_de:"Intelligenter Kontrast",name_ko:"스마트 대조",name_ja:"スマートコントラスト",name_fr:"Contraste intelligent",name_nl:"Slim Contrast",name_it:"Contrasto intelligente",name_es:"Contraste Inteligente",item:"tools-smart-contrast",popular:!0},{name:"Erase objects",name_de:"Objekte löschen",name_ko:"객체 제거",name_ja:"消しゴム",name_fr:"Supprimer des objets",name_nl:"Verwijder objecten",name_it:"Elimina oggetti",name_es:"Elimina objetos",item:"erase-technology",popular:!0},{item:"common-video-gallery",popular:!1},{item:"tools-library",popular:!1},{name:"Instant Filters",name_de:"Sofortfilter",name_ko:"즉각 필터",name_ja:"インスタントフィルター",name_fr:"Filtres instantanés",name_nl:"Instant Filters",name_it:"Filtri istantanei",name_es:"Filtros Instantáneos",item:"tools-looks",popular:!0},{name:"Landscape Enhancer",name_de:"Landscape Enhancer",name_ko:"조경 인핸서",name_ja:"風景エンハンサー",name_fr:"Améliorer le paysage",name_nl:"Landscape Enhancer",name_it:"Migliora paesaggi",name_es:"Landscape Enhancer",item:"tools-landscapes",popular:!0},{name:"Creative tools",name_de:"Kreative Tools",name_ko:"크리에이티브 도구",name_ja:"クリエイティブ",name_fr:"Outils créatifs",name_nl:"Creatieve tools",name_it:"Tool creativi",name_es:"Herramientas Creativas",item:"tools-creative",popular:!0},{name:"Remove noise",name_de:"Rauschen entfernen",name_ko:"노이즈 제거",name_ja:"ノイズ除去",name_fr:"Éliminer le bruit",name_nl:"Verwijder ruis",name_it:"Rimuovi rumore",name_es:"Renueve el ruido",item:"tools-denoise",popular:!0},{item:"tools-details-enhancer",popular:!1},{item:"common-to-pro",popular:!1},{item:"global-works-as-plugin",popular:!1},{item:"common-language",popular:!1},{item:"common-press",popular:!1},{item:"common-trustpilot",popular:!1},{item:"global-bottom-buy",popular:!1}],i="",r="";e(".wrapper").append('<ul class="sticky_dot_wrap"></ul>'),e("body").find(".header").after('<div class="sticky_nav_wrap"><div class="slide-wraper-js"><span class="prev-slide"></span><div class="slide-wraper-wrap-js"><ul class="sticky_nav_container"></ul></div><span class="next-slide"></span></div><a href="/l/luminar-checkout" class="sk-btn sk-btn_type_primary-2 by-btn-js">Buy Now</a></div>'),e.each(n,function(o,t){1==t.popular&&e("body.en").length>0&&(i+='<li data-gosection="'+t.item+'">'+t.name+"</li>"),1==t.popular&&e("body.de").length>0&&(i+='<li data-gosection="'+t.item+'">'+t.name_de+"</li>"),1==t.popular&&e("body.ko").length>0&&(i+='<li data-gosection="'+t.item+'">'+t.name_ko+"</li>"),1==t.popular&&e("body.jp").length>0&&(i+='<li data-gosection="'+t.item+'">'+t.name_ja+"</li>"),1==t.popular&&e("body.fr").length>0&&(i+='<li data-gosection="'+t.item+'">'+t.name_fr+"</li>"),1==t.popular&&e("body.nl").length>0&&(i+='<li data-gosection="'+t.item+'">'+t.name_nl+"</li>"),1==t.popular&&e("body.it").length>0&&(i+='<li data-gosection="'+t.item+'">'+t.name_it+"</li>"),1==t.popular&&e("body.es").length>0&&(i+='<li data-gosection="'+t.item+'">'+t.name_es+"</li>"),r+='<li data-gosection="'+t.item+'"></li>'}),e(".wrapper").find(".sticky_dot_wrap").append(r),e("body").find("ul.sticky_nav_container").append(i),e("body").on("click","[data-gosection]",function(o){var t=e(this).attr("data-gosection");return e("[data-gosection]").removeClass(),e('[data-gosection="'+t+'"]').addClass("active"),e("html,body").animate({scrollTop:e('[data-analytics-block="'+t+'"]').offset().top},500),!1}),o(),e(window).scroll(function(t){e("html,body").scrollTop()>60?e("body").find(".sticky_nav_wrap").addClass("sticky-scroll"):e("body").find(".sticky_nav_wrap").removeClass("sticky-scroll"),o()}),e(".slide-wraper-js .prev-slide").click(function(){var o=e(this).closest(".slide-wraper-js").find("ul.sticky_nav_container"),t=void 0!==o.data("curent_pos")?o.data("curent_pos"):0;if(t>0){t--;var a=o.find("li:eq("+Number(t)+")").outerWidth(),n=o.css("left");n=n.replace(new RegExp("px","g"),""),n=Number(n),a+n<0?(o.data("curent_pos",t),o.animate({left:"+="+a+"px"},5)):(o.data("curent_pos",0),o.animate({left:"0px"},5))}return!1}),e(".slide-wraper-js .next-slide").click(function(){e(".slide-wraper-js .prev-slide").addClass("visible");var o=e(this).closest(".slide-wraper-js").find(".sticky_nav_container"),t=void 0!==o.data("curent_pos")?o.data("curent_pos"):0;if(t<o.find("li").length-1){t++;var a=o.find("li:eq("+Number(t-1)+")").outerWidth(),n=o.css("left");if(n=n.replace(new RegExp("px","g"),""),n=Number(n),o.outerWidth()+n>=e(".slide-wraper-js").outerWidth())o.data("curent_pos",t),o.animate({left:"-="+a+"px"},5);else{var n=e(".sticky_nav_container").outerWidth()-e(".slide-wraper-wrap-js.scroller").outerWidth();o.data("curent_pos",o.find("li").length-1),o.animate({left:"-"+n+"px"},5)}}return!1}),e(window).resize(function(e){t()}),setTimeout(function(){e(window).resize()},10)}console.log("%cTest come","background:green;color: #ffffff"),window.jQuery?jQuery(function(e){abjqlr(e)}):abjql(function(){jQuery(function(e){abjqlr(e)})});