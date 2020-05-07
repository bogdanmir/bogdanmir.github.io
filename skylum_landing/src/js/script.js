$('body').find('.common-hero .info-label-wr').detach().insertAfter( ".header .header__wrap .header__menu" );

// $('body').find('.common-hero .row:nth-child(1) > div').removeClass('col-md-8 offset-md-2').addClass('col-md-6');
$('body').find('.common-hero .common-hero__content-wrap').detach().prependTo('.common-hero .row:nth-child(2) > div');
$('body').find('.common-hero .row:nth-child(2) > div').addClass('col-md-6');

$('body').find('.common-hero .row:nth-child(2)').append('<div class="col-md-6"><p class="common-hero__content-text">Standalone application for Mac & PC with full RAW support. And Plugin for Adobe Photoshop, Lightroom & Apple products</p></div>');