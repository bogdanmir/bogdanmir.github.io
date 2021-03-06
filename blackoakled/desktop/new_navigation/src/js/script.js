// language.some_slug
// Boating - /collections/marine-led-light-bars
// Vehicle - /pages/search-by-vehicle
// Mounting - /collections/led-light-bar-mounts-2
// Emergency - /collections/emergency-response-vehicles
// Heavy Equipment: /collections/agriculture-led-light-bars
//     ATV/UTV: /pages/search-by-vehicle

// Hotjar trigger to record video sessions
try {
    (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:1831568,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'new_navigation_icons');
}
catch(e) {}

// Activation of the alt variation
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
var link_script = 'https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/new_navigation/';


var html = '<div class="ab-test-menu"><span class="test-menu-control control-prev"></span>';
// var html = '<div class="container ab-test-header"><span class="test-menu-control control-prev"></span><div class="col-md-12 at-wraper"><div class="ab-test-menu">';
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
// html += '</div></div><span class="test-menu-control control-next"></span></div>';
// $('#header').after(html);




// var html = '<div class="ab-test-menu"><span class="test-menu-control control-prev"></span>';
// for( item in list_menus ){
//     var data = list_menus[item];
//     var img_link = link_script+'img/'+item+'.svg';
//     html += '<a href="'+data.link+'"><img src="'+img_link+'"/><span>'+data.text+'</span></a>';
// }
html += '<span class="test-menu-control control-next"></span></div>';
$('.header_nav .col-md-12').append(html);
$('.header_nav .col-md-12').addClass('at-wraper');
$('.navbar-right .dropdown-grid.no-open-arrow.extra_img').remove();
var menu_html = '<ul>' +
    '<li class="parent has-sub"><a href="/pages/about-us" class="submenu-main-link">'+lang.AboutUs+'</a>' +
        '<ul class="submenu">' +
            '<li><a href="/pages/how-black-oak-ranks-superior">BuiltBetter</a></li>' +
            '<li><a href="/pages/customer-testimonials">Testimonials</a></li>' +
        '</ul>' +
    '</li>' +
    '<li><a href="/pages/wholesale">Dealers</a></li>' +
    '<li><a href="/pages/contact-us">ContactUs</a></li>' +
    '</ul>';
var linkProducts = $('#cssmenu .parent.has-sub:eq(0)').clone();
var linkVehicle = $('#cssmenu .parent.has-sub:eq(1)').clone();
var search_form = $('.navbar-right .nav-search').html();
$('.row.collapse.navbar-collapse.no-transition').html('<div class="col-md-12 search-and-menu">' +
    '<div class="left-menu"><ul></ul></div>' +
    '<ul></ul>'+
    search_form+
    '<div class="right-menu">'+menu_html+'</div>' +
    '</div>');
linkProducts.appendTo('body .search-and-menu .left-menu ul');
linkVehicle.appendTo('body .search-and-menu .left-menu ul');
$('.search-and-menu .left-menu [href="/pages/search-by-vehicle"]').html(lang.vehicle);
$('.header_nav .menu-outer-wrapper').remove();
$('.header_nav').addClass('ab-test-header').removeClass('header_nav');
$('body').find('.ab-test-menu').data('current_pos',1);
function scroll_to_element(position){
    $('body').find('.ab-test-menu').animate({
        scrollLeft:$('body').find('.ab-test-menu a:eq('+position+')').data('firstposition')
    })
}
function on_resize(){
    $('body').find('.ab-test-menu').scrollLeft(0);
    $('body').find('.ab-test-menu a').each(function (index, value) {
        var left_position = $(this).offset().left - $('body').find('.ab-test-menu').offset().left;
        console.log($(this));
        console.log(left_position);
        $(this).data('firstposition',left_position);
    });
}
on_resize();
$(window).resize(function() {
    on_resize();
});

$(document).on('click','.test-menu-control',function (event) {
    var current_pos = $('body').find('.ab-test-menu').data('current_pos');
    if(current_pos < 0){
        current_pos = 1;
    }
    if(current_pos > $('body').find('.ab-test-menu a').length){
        current_pos = 1;
    }
    if($(this).hasClass('control-next')){
        current_pos++;
    }else{
        current_pos--;
    }
    scroll_to_element(current_pos);
});


// Click on the navigation icons
$(document).on('click','.ab-test-menu a',function () {
    var icon_label = $(this).find('span').text();
    console.log(icon_label)

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - New Navigation: icons and badges',
        'eventAction': 'click on navigation',
        'eventLabel': icon_label
    });
});