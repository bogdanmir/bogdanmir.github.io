// language.some_slug
// alert(language.some_slug);

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