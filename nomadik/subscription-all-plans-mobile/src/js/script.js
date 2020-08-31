// language.some_slug
// alert(language.some_slug);

try {
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1857555,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};

hj('trigger', 'welcome_box');
}
catch(e) {}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp - WB on Subscription Page',
	'eventAction': 'loaded'
});

$('body').find('.subscribe-box').append('<div class="subscribe-box-row"><div class="price-col"></div><div class="describe-col"></div></div>');
$('body').find('.subscribe-box .price-col');

$('body').find('.subscribe-box').each(function(){
  var priceCol = $(this).find('.price-col');
  var describeCol = $(this).find('.describe-col');
  $(this).find('.subscribe-box-term').detach().appendTo(priceCol);
  $(this).find('.subscribe-box-price').detach().appendTo(priceCol);
  $(this).find('.per').detach().appendTo(priceCol);
  $(this).find('.ironclad-sub-page').detach().appendTo(priceCol);

  $(this).find('.subscribe-box-frequency').detach().appendTo(describeCol);
  $(this).find('.delivered').detach().appendTo(describeCol);
  $(this).find('.retail-value').detach().appendTo(describeCol);
  $(this).find('.nomadik-button.add-to-cart').detach().appendTo(describeCol);
})

$('body').find('.subscribe-box.six-months').append('<div class="subscribe-list"><ul><li>Outdoor challenges to get you in nature more often!</li><li>Expert tips, education and epic destinations in the US</li><li>Online-course “Navigation Mastery. How to go wild on hiking without being afraid of getting lost”</li></ul></div>');

$('body').find('.subscribe-box.twelve-months').append('<div class="subscribe-list"><ul><li>Outdoor challenges to get you in nature more often!</li><li>Expert tips, education and epic destinations in the US</li><li>Online-course “Navigation Mastery. How to go wild on hiking without being afraid of getting lost”</li></ul></div>');

// tooltip
var tooltipInner = '<div class="tooltip-inner"><span class="tooltip-close"></span><ul><li>Learn wilderness navigation mastery in only 4 hours</li><li>Experience an old-school navigation with maps and compass</li><li>How to guarantee arriving at your destination</li><li>Special orientation challenges in different conditions</li></ul></div>';

$('body').find('.subscribe-box.six-months').append('<div class="tooltip-ico"><div class="tooltip-icon"></div>'+tooltipInner+'<div class="bg-inside"></div>');
$('body').find('.subscribe-box.twelve-months').append('<div class="tooltip-ico"><div class="tooltip-icon"></div>'+tooltipInner+'<div class="bg-inside"></div>');

$(document).on("click", ".tooltip-ico .tooltip-icon", function() {
	$('.tooltip-ico').removeClass('active');
	$(this).closest('.tooltip-ico').addClass('active');
});
$(document).on("click", function (e){
	var tooltipTarget = $(".tooltip-ico");
	if (!tooltipTarget.is(e.target) && tooltipTarget.has(e.target).length === 0 || $(".tooltip-close").is(e.target)) {
		tooltipTarget.removeClass('active');
	}
});
$(document).on("click", ".tooltip-ico .bg-inside,.tooltip-close", function() {
	$(this).closest('.tooltip-ico').removeClass('active');
});
$(document).on("touchstart", function(e) {
    var elem = e.originalEvent.path[0];
    // console.log(elem);
    // console.log($(elem).hasClass('bg-inside'));
    if($(elem).hasClass('bg-inside') ){
	    $('body').find('.tooltip-ico').removeClass('active');
    }
});
// $(document).on("click",'.tooltip-ico.active .bg-inside', function (e){
//     $('body').find(".tooltip-ico.active").removeClass('active');
//     return false;
// });