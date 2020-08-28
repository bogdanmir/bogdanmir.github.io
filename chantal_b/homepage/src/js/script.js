// language.some_slug
// alert(language.some_slug);


$('body').find('.page-home #custom-text').prepend('<div class="top-category-slider"><div><div class="category-title">Livraison Gratuite</div><div class="category-text">*commandes superieures a &#8364;160</div></div>  <div><div class="category-title">Retours Gratuits 45 Jours</div><div class="category-text">*echange ou remboursement de article retourné</div></div>     <div><div class="category-title">-10% de réduction noveau client</div><div class="category-text">code: NEW10</div></div>  </div>');
var link_script = 'https://master.d1b4uiycaor7je.amplifyapp.com/chantal_b/homepage/';
var link_script_img = link_script+'img/';
$('.top-category-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    	  autoplaySpeed: 3500
      }
    }
  ]
});

$('body').find('.page-home #custom-text').append('<div class="container"><h2 class="category-slider-title">Parcourir les catégories</h2><div class="bottom-category-slider">' +
    '<div><a href="/25-accessoires"><img class="img-category" src="'+link_script_img+'accessoires.jpg' +'" alt=""><span>ACCESSOIRES</span></a></div>' +
    '<div><a href="/24-bas"><img class="img-category" src="'+link_script_img+'bas.jpg' +'" alt=""><span>BAS</span></a></div>' +
    '<div><a href="/8-chaussures"><img class="img-category" src="'+link_script_img+'chaussures.jpg' +'" alt=""><span>CHAUSSURES</span></a></div>' +
    '<div><a href="/23-hauts"><img class="img-category" src="'+link_script_img+'hauts.jpg' +'" alt=""><span>HAUTS</span></a></div>' +
    '<div><a href="/30-soldes"><img class="img-category" src="'+link_script_img+'soldes.jpg' +'" alt=""><span>LAST CHANCE</span></a></div>' +
    '<div><a href="/31-nouvelle-collection"><img class="img-category" src="'+link_script_img+'new.jpg' +'" alt=""><span>NEW</span></a></div>' +
    '<div><a href="/17-robes"><img class="img-category" src="'+link_script_img+'robes.jpg' +'" alt=""><span>ROBES</span></a></div>' +
    '<div><a href="/41-summer"><img class="img-category" src="'+link_script_img+'summer.jpg' +'" alt=""><span>SUMMER</span></a></div>' +
    '</div></div>');

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
        slidesToShow: 2.5
      }
    }
  ]
});