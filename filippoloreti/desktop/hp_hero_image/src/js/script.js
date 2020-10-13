// language.some_slug
// alert(language.some_slug);

var img_link = "https://master.d1b4uiycaor7je.amplifyapp.com/filippoloreti/desktop/hp_hero_image/src/img/home-page-banners-dekstop-3.jpg";
$('body').find('.hero-banner .inner_image_absolute_block.visible-md img').attr({
	"src":img_link, 
	"data-srcset":img_link,
	"srcset":img_link
});