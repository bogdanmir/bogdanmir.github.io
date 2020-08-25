// language.some_slug
// Boating - /collections/marine-led-light-bars
// Vehicle - /pages/search-by-vehicle
// Mounting - /collections/led-light-bar-mounts-2
// Emergency - /collections/emergency-response-vehicles
// Heavy Equipment: /collections/agriculture-led-light-bars
//     ATV/UTV: /pages/search-by-vehicle
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
        'link' : '#',
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
var link_script = 'https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/new_navigation/';
var html = '<div class="ab-test-menu">';
for( item in list_menus ){
    var data = list_menus[item];
    var img_link = link_script+'img/'+item+'.svg';
    html += '<a href="'+data.link+'"><img src="'+img_link+'"/><span>'+data.text+'</span></a>';
}
html += '</div>';
$('.header_nav .col-md-12').append(html);
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