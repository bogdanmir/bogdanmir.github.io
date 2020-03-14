function initjQuery(callback) {
	var script = document.createElement( "script" )
	script.type = "text/javascript";
	if(script.readyState) {
	script.onreadystatechange = function() {
		if ( script.readyState === "loaded" || script.readyState === "complete" ) {
			script.onreadystatechange = null;
			callback();
		}
	};
  } else {
	script.onload = function() {
		callback();
	};
  }
  script.src = '//code.jquery.com/jquery.min.js';
  document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
	initjQuery(function() {
		readyjQueryinit();
	});
}else{
	readyjQueryinit();
}
function readyjQueryinit(){
	jQuery(function($) {
		$('body').find('#plan_popup').css('display', 'block');
		var new_text = "Choose your plan";
		var link_to = 'https://goally.co/products/goallyplan';
		$('body').on('click', 'a[href="/products/goally"]', function(event) {
			location.href = link_to;
			return false;
		});
		$('a[href="/products/goally"]').each(function(index, el) {
			var old_text = $(el).html();
			if(old_text == 'Get Goally'){
				$(el).html(new_text);
			}
		});
	});
}