// language.some_slug
// Boating - /collections/marine-led-light-bars
// Vehicle - /pages/search-by-vehicle
// Mounting - /collections/led-light-bar-mounts-2
// Emergency - /collections/emergency-response-vehicles
// Heavy Equipment: /collections/agriculture-led-light-bars
//     ATV/UTV: /pages/search-by-vehicle
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
try {
    hj('trigger', 'new_navigation_icons');
} catch (e) {}
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
        'link' : 'https://www.blackoakled.com/collections/marine-led-light-bars',
    },
    'vehicle' : {
        'text' : lang.vehicle,
        'link' : 'https://www.blackoakled.com/pages/search-by-vehicle',
    },
    'rv_overlanding' : {
        'text' : lang.rv_overlanding,
        'link' : 'https://www.blackoakled.com/collections/rv-overlanding',
    },
    'atv_utv' : {
        'text' : lang.atv_utv,
        'link' : 'https://www.blackoakled.com/pages/search-by-vehicle?utv=true',
    },
    'heavy_equipment' : {
        'text' : lang.heavy_equipment,
        'link' : 'https://www.blackoakled.com/collections/agriculture-led-light-bars',
    },
    'emergency' : {
        'text' : lang.emergency,
        'link' : 'https://www.blackoakled.com/collections/emergency-response-vehicles',
    },
    'mounting' : {
        'text' : lang.mounting,
        'link' : 'https://www.blackoakled.com/collections/led-light-bar-mounts-2',
    }
};
var link_script = 'https://bogdanmir.github.io/blackoakled/new_navigation/'
var prod = false;
if(prod == true){
    link_script = 'https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/new_navigation/';
}
var html = '<div class="container ab-test-header"><span class="test-menu-control control-prev"></span><div class="col-md-12 at-wraper"><div class="ab-test-menu">';
var counter = 1;
var is_already_active = false;
for( item in list_menus ){
    var data = list_menus[item];
    var img_link = link_script+'img/'+item+'.svg';
    html += '<a href="'+data.link+'" class="test-item-event ';
    if(location.href == data.link && is_already_active == false){
        html += 'active ';
        is_already_active = true;
    }
        html += 'test-item-'+counter+'" data-scrolgoto="'+counter+'"><img src="'+img_link+'"/><span>'+data.text+'</span></a>';
    counter++;
}
html += '</div></div><span class="test-menu-control control-next"></span></div>';
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
    var numb = data_left;
    // if($('body').find('.ab-test-menu').outerWidth()+numb < $('.ab-test-header .at-wraper').width()){
    //     numb = $('body').find('.ab-test-menu').outerWidth() - $('.ab-test-header .at-wraper').width();
    //     numb = numb;
    //     $('span.test-menu-control.control-next').css('display','none');
    // }
    if(numb == 0){
        $('span.test-menu-control.control-prev').css('display','none');
    }
    user_scroll = false;
    $('body').find('.ab-test-header .at-wraper').animate({
        scrollLeft:numb
    },function(){
        user_scroll = true;
        console.log('user_scroll = true');
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
// $("body").on("touchmove scroll", function(e) {
//     console.log('scroll');
//     if(window.block_scroll == true){
//         $('html').scrollTop(window.scrollTopPos);
//     }
// });
// $("body").on("touchstart", function(e) {
//     if($(e.target).closest('.at-wraper').length > 0){
//         var eve = e.originalEvent.changedTouches[0];
//         window.clientX_startX = eve.clientX || eve.pageX;
//         window.scrollTopPos = $('html').scrollTop();
//         window.block_scroll = true;
//         window.touchinterval = true;
//     }
// });
// $("body").on("touchend", function(e) {
//     if(window.touchinterval == true){
//         var eve = e.originalEvent.changedTouches[0];
//         var clientX_surrentX = eve.clientX || eve.pageX;
//         var current_post = $('body').find('.ab-test-menu').data('current_pos');
//         if(Math.floor(clientX_surrentX) != Math.floor(window.clientX_startX)){
//             if(clientX_surrentX < window.clientX_startX+100){
//                 var next_post = current_post+1;
//                 go_to(next_post);
//                 window.clientX_startX = clientX_surrentX;
//             }
//             if(clientX_surrentX > window.clientX_startX+100){
//                 var next_post = current_post-1;
//                 go_to(next_post);
//                 window.clientX_startX = clientX_surrentX;
//             }
//         }
//         window.block_scroll = false;
//     }
// });
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
var user_scroll = true;
$('.ab-test-header .at-wraper').scroll(function (event) {
    $('span.test-menu-control').attr('style','');
    if(($(this).outerWidth()+this.scrollLeft) >= $('body').find('.ab-test-menu').width()){
        $('span.test-menu-control.control-next').css('display','none');
    }
    if(this.scrollLeft == 0){
        $('span.test-menu-control.control-prev').css('display','none');
    }
    if(user_scroll == true){
        console.log('user_scroll '+user_scroll);
        var _thisscrollLeft = this.scrollLeft;
        var old_elem = null;
        var next_elem = null;
        $('.ab-test-menu .test-item-event').each(function (index, value) {
            var firstpositionStart = $(this).data('firstposition');
            var scrolgoto = $(this).attr('data-scrolgoto');
            var firstpositionEnd = firstpositionStart+$(this).outerWidth();
            if(_thisscrollLeft >= firstpositionStart && _thisscrollLeft < firstpositionEnd){
                $('body').find('.ab-test-menu').data('current_pos',scrolgoto);
            }
        });
    }
});
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