// language.some_slug
// alert(language.some_slug);

$('body').find('.page-home #custom-text').prepend('<div class="top-category-slider"><div><div class="category-title">Livraison Gratuite</div><div class="category-text">*commandes superieures a &#8364;160</div></div>  <div><div class="category-title">Retours Gratuits 45 Jours</div><div class="category-text">*echange ou remboursement de article retourné</div></div>     <div><div class="category-title">-10% de réduction noveau client</div><div class="category-text">code: NEW10</div></div>  </div>');

$('.top-category-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
    	autoplaySpeed: 3500
      }
    }
  ]
});

$('body').find('.page-home #custom-text').append('<div class="container"><div class="bottom-category-slider">		<div><a href="/16-joggs"><img class="img-category" src="https://viktordexon.web-samba.com/3358-home_default/sweat-peace-.jpg" alt=""><span>JOGGS</span></a></div>		<div><a href="/31-nouvelle-collection"><img class="img-category" src="https://viktordexon.web-samba.com/3358-home_default/sweat-peace-.jpg" alt=""><span>NOUVELLE COLLECTION</span></a></div>		<div><a href="/35-basiques"><img class="img-category" src="https://viktordexon.web-samba.com/3358-home_default/sweat-peace-.jpg" alt=""><span>BASIQUES</span></a></div>		<div><a href="/23-hauts"><img class="img-category" src="https://viktordexon.web-samba.com/3358-home_default/sweat-peace-.jpg" alt=""><span>HAUTS</span></a></div>		<div><a href="/24-bas"><img class="img-category" src="https://viktordexon.web-samba.com/3358-home_default/sweat-peace-.jpg" alt=""><span>BAS</span></a></div>		<div><a href="/9-sacspaniers"><img class="img-category" src="https://viktordexon.web-samba.com/3358-home_default/sweat-peace-.jpg" alt=""><span>SACS / PANIERS</span></a></div>		<div><a href="/25-accessoires"><img class="img-category" src="https://viktordexon.web-samba.com/3358-home_default/sweat-peace-.jpg" alt=""><span>ACCESSOIRES</span></a></div>		<div><a href="/28-little-prices"><img class="img-category" src="https://viktordexon.web-samba.com/3358-home_default/sweat-peace-.jpg" alt=""><span>PETITS PRIX</span></a></div>			<div><a href="/8-chaussures"><img class="img-category" src="https://viktordexon.web-samba.com/3358-home_default/sweat-peace-.jpg" alt=""><span>CHAUSSURES</span></a></div>	</div></div>');

$('.bottom-category-slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: '20px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});