// language.some_slug
// Boating - https://www.blackoakled.com/collections/marine-led-light-bars
// Vehicle - https://www.blackoakled.com/pages/search-by-vehicle
// Mounting - https://www.blackoakled.com/collections/led-light-bar-mounts-2
// Emergency - https://www.blackoakled.com/collections/emergency-response-vehicles
// Heavy Equipment: https://www.blackoakled.com/collections/agriculture-led-light-bars
//     ATV/UTV: https://www.blackoakled.com/pages/search-by-vehicle
var list_menus = {
    'boating' : {
        'text' : language.boating,
        'link' : 'https://www.blackoakled.com/collections/marine-led-light-bars',
    },
    'vehicle' : {
        'text' : language.vehicle,
        'link' : 'https://www.blackoakled.com/pages/search-by-vehicle',
    },
    'rv_overlanding' : {
        'text' : language.rv_overlanding,
        'link' : '#',
    },
    'atv_utv' : {
        'text' : language.atv_utv,
        'link' : 'https://www.blackoakled.com/pages/search-by-vehicle',
    },
    'heavy_equipment' : {
        'text' : language.heavy_equipment,
        'link' : 'https://www.blackoakled.com/collections/agriculture-led-light-bars',
    },
    'emergency' : {
        'text' : language.emergency,
        'link' : 'https://www.blackoakled.com/collections/emergency-response-vehicles',
    },
    'mounting' : {
        'text' : language.mounting,
        'link' : 'https://www.blackoakled.com/collections/led-light-bar-mounts-2',
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
$('.header_nav .menu-outer-wrapper').remove();
$('.header_nav').addClass('ab-test-header').removeClass('header_nav');