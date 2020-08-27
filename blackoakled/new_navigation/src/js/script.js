// language.some_slug
// Boating - /collections/marine-led-light-bars
// Vehicle - /pages/search-by-vehicle
// Mounting - /collections/led-light-bar-mounts-2
// Emergency - /collections/emergency-response-vehicles
// Heavy Equipment: /collections/agriculture-led-light-bars
//     ATV/UTV: /pages/search-by-vehicle
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1831568,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
try {hj('trigger', 'new_navigation_icons');}catch (e) {}
window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - New Navigation: icons and badges',
    'eventAction': 'loaded'
});
var lang = language;
var list_menus = {
    'boating' : {
        'text' : lang.boating,
        'link' : '/collections/marine-led-light-bars',
    },
    'vehicle' : {
        'text' : lang.vehicle,
        'link' : '/pages/search-by-vehicle',
    },
    'rv_overlanding' : {
        'text' : lang.rv_overlanding,
        'link' : '/collections/rv-overlanding',
    },
    'atv_utv' : {
        'text' : lang.atv_utv,
        'link' : '/pages/search-by-vehicle',
    },
    'heavy_equipment' : {
        'text' : lang.heavy_equipment,
        'link' : '/collections/agriculture-led-light-bars',
    },
    'emergency' : {
        'text' : lang.emergency,
        'link' : '/collections/emergency-response-vehicles',
    },
    'mounting' : {
        'text' : lang.mounting,
        'link' : '/collections/led-light-bar-mounts-2',
    }
};
var link_script = 'https://bogdanmir.github.io/blackoakled/new_navigation/'
var prod = false;
if(prod == true){
    link_script = 'https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/new_navigation/';
}
var html = '<div class="container ab-test-header"><div class="col-md-12 at-wraper"><span class="test-menu-control control-prev"></span><div class="ab-test-menu">';
var counter = 1;
for( item in list_menus ){
    var data = list_menus[item];
    var img_link = link_script+'img/'+item+'.svg';
    html += '<a href="'+data.link+'" class="test-item-event test-item-'+counter+'"><img src="'+img_link+'"/><span>'+data.text+'</span></a>';
    counter++;
}
html += '</div><span class="test-menu-control control-next"></span></div></div>';
$('#header').after(html);
// $('.header_nav .col-md-12 .menu-outer-wrapper').addClass('at-wraper');
$('.navbar-right .dropdown-grid.no-open-arrow.extra_img').remove();
var menu_html = '<ul>' +
    '<li class="has-sub"><a href="/pages/about-us">'+lang.AboutUs+'</a>' +
        '<ul class="submenu">' +
            '<li><a href="/pages/how-black-oak-ranks-superior">BuiltBetter</a></li>' +
            '<li><a href="/pages/customer-testimonials">Testimonials</a></li>' +
        '</ul>' +
    '</li>' +
    '<li><a href="/pages/wholesale">Dealers</a></li>' +
    '<li><a href="/pages/contact-us">ContactUs</a></li>' +
    '</ul>';
// var linkProducts = $('#cssmenu .parent.has-sub:eq(0)').clone();
// var linkVehicle = $('#cssmenu .parent.has-sub:eq(1)').clone();
var search_form = $('.navbar-right .nav-search').html();
// $('.row.collapse.navbar-collapse.no-transition').html('<div class="col-md-12 search-and-menu">' +
//     '<div class="left-menu"><ul></ul></div>' +
//     '<ul></ul>'+
//     search_form+
//     '<div class="right-menu">'+menu_html+'</div>' +
//     '</div>');
// $('.row.collapse.navbar-collapse.no-transition').html('');
// linkProducts.appendTo('body .search-and-menu .left-menu ul');
// linkVehicle.appendTo('body .search-and-menu .left-menu ul');
$('.search-and-menu .left-menu [href="/pages/search-by-vehicle"]').html(lang.vehicle);
// $('.header_nav .menu-outer-wrapper').remove();
// $('.header_nav').addClass('ab-test-header').removeClass('header_nav');
$('body').find('.ab-test-menu').data('current_pos',1);
function scroll_to_element( position ){
    $('span.test-menu-control').attr('style','');
    var data_left = $('body').find('.ab-test-menu a.test-item-'+position).data('firstposition');
    $('body').find('.ab-test-menu a:eq('+position+')').data('firstposition');
    console.log( position );
    console.log( $('body').find('.ab-test-menu a.test-item-'+position) );
    console.log( data_left );
    var numb = -data_left;
    if($('body').find('.ab-test-menu').outerWidth()+numb < $('.ab-test-header .at-wraper').width()){
        numb = $('body').find('.ab-test-menu').outerWidth() - $('.ab-test-header .at-wraper').width();
        numb = -numb;
        $('span.test-menu-control.control-next').css('display','none');
    }
    if(numb == 0){
        $('span.test-menu-control.control-prev').css('display','none');
    }
    $('body').find('.ab-test-menu').animate({
        'left':numb
    })
}
function on_resize(){
    $('body').find('.ab-test-menu').attr('style','');
    var calc_outher = 0;
    $('body').find('.ab-test-menu a').each(function (index, value) {
        var left_position = $(this).offset().left - $('body').find('.ab-test-menu').offset().left;
        $(this).data('firstposition',left_position);
        calc_outher = calc_outher+$(this).outerWidth();
    });
    $('body').find('.ab-test-menu').css('min-width',calc_outher+'px');
    go_to(1);
}
window.touchinterval = false;
window.block_scroll = false;
window.scrollTopPos = 0;
$("body").on("touchmove scroll", function(e) {
    console.log('scroll');
    if(window.block_scroll == true){
        $('html').scrollTop(window.scrollTopPos);
    }
});
$("body").on("touchstart", function(e) {
    if($(e.target).closest('.at-wraper').length > 0){
        var eve = e.originalEvent.changedTouches[0];
        window.clientX_startX = eve.clientX || eve.pageX;
        window.scrollTopPos = $('html').scrollTop();
        window.block_scroll = true;
        window.touchinterval = true;
    }
});
$("body").on("touchend", function(e) {
    if(window.touchinterval == true){
        var eve = e.originalEvent.changedTouches[0];
        var clientX_surrentX = eve.clientX || eve.pageX;
        var current_post = $('body').find('.ab-test-menu').data('current_pos');
        if(Math.floor(clientX_surrentX) != Math.floor(window.clientX_startX)){
            if(clientX_surrentX < window.clientX_startX+100){
                var next_post = current_post+1;
                go_to(next_post);
                window.clientX_startX = clientX_surrentX;
            }
            if(clientX_surrentX > window.clientX_startX+100){
                var next_post = current_post-1;
                go_to(next_post);
                window.clientX_startX = clientX_surrentX;
            }
        }
        window.block_scroll = false;
    }
});
setTimeout(function(){
    on_resize();
},10);
$(window).resize(function() {
    on_resize();
});
$(document).on('click','.search-toggle',function (event) {
    $('#header #main_navbar #mobile-search').toggleClass('active');
});
$(document).on('click','.test-item-event',function (event) {
    var text = $(this).find('span').text();
    window.dataLayer = window.dataLayer || [];
    console.log('Click on'+text);
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - New Navigation: icons and badges',
        'eventAction': 'click on navigation',
        'eventLabel': text
    });
});
$('.navbar-cart').after('<button class="search-toggle"><img src="'+link_script+'img/search-ico.svg" alt=""></button>')
function go_to(current_pos){
    if(current_pos >= $('body').find('.ab-test-menu a').length-1){
        current_pos = $('body').find('.ab-test-menu a').length-1;
    }
    $('body').find('.ab-test-menu').data('current_pos',current_pos);
    console.log('Next post is '+current_pos);
    scroll_to_element(current_pos);
}
$(document).on('click','.test-menu-control',function (event) {
    var current_pos = $('body').find('.ab-test-menu').data('current_pos');
    if($(this).hasClass('control-next')){
        current_pos++;
    }else{
        current_pos--;
    }
    if(current_pos <= 1){
        current_pos = 1;
    }
    go_to(current_pos);
});