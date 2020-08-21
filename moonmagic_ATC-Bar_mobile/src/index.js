function abjql(callback) {
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
	script.src = '//code.jquery.com/jquery-3.3.1.min.js';
	document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
	abjql(function() {
		jQuery(function($) {
			abjqlr($);
		});
	});
}else{
	jQuery(function($) {
		abjqlr($);
	});
}
var style_tag = document.createElement('style');
style = '@@style@@';
style_tag.innerHTML = style;
var ref = document.querySelector('body');
ref.append(style_tag); 
function abjqlr($){
	// connect language configuration object
	var language = window.language_abtest;
	console.log('%cTest come','background:green;color:#fff;');
	@@scriptjs@@
	// $('body').append('<style>'+style+'</style>');
}