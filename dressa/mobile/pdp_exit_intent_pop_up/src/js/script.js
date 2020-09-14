// language.some_slug
// alert(language.some_slug);

setInterval(function(){
	if(window.url_is != location.pathname){
		$(document).trigger('url_change',location.pathname);
		window.url_is = location.pathname;
	}
});
$(document).trigger('url_change',location.pathname);





// popup


// exitPopup();