$('body').find('.common-hero .info-label-wr').detach().insertAfter( ".header .header__wrap .header__menu" );

$('body').find('.common-hero .row:nth-child(1) > div').removeClass('col-md-8 offset-md-2').addClass('col-md-6');
$('body').find('.common-hero .row:nth-child(2) > div').addClass('col-md-6');
