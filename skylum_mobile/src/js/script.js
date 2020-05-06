$('.header .header__wrap').html ('<h2 class="sk-h2">Thank you for your purchase!</h2><p class="sk-text">The link to download is sent to your email.</p>');

$('body').find('.tone-mapping__slider-wrap').prependTo('.after-head__head .container');
$('body').find('.after-head__figure').appendTo('.tone-mapping.sk-section');

$('.tone-mapping__slider-wrap').prepend('<div class="slide-text-holder"><h3 class="slide-title">It’s hard to capture a perfect light sometimes, right?</h3></div>');
$('.tone-mapping_slide .tone-mapping_slide-front .sk-h4').text('Create a perfect image from a few too dark or too bright photos with HDR');
$('.tone-mapping_slide .tone-mapping_slide-front .sk-btn').text('See how HDR works');
$('.after-head__head .after-head__awards img').attr({
	src: 'https://media.macphun.com/img/uploads/uploads/aurora/home-2019/au-awards.png?size=1x'
});

$('body').find('.aurora-buy-sec .aurora-buy-sec__btns .au-buy-btn').attr({
	href: 'https://aurora.onfastspring.com/aurora-hdr-bundle-discount'
});
$('body').find('.aurora-buy-sec .aurora-buy-sec__btns .au-buy-btn').attr('data-fsc-item-path', 'aurora-hdr-bundle-discount');
