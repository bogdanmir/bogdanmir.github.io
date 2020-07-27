console.log('%cTest come',"background:blue;color: #ffffff");
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
function abjqlr($){
	var user_Refer_come = localStorage.getItem('_user_Refer_come') || document.referrer;
	if(user_Refer_come == "https://dev.aim-it.com.ua"){
		localStorage.setItem('_user_Refer_come',user_Refer_come);
		console.log('User come from',user_Refer_come);
		@@include('js/script.js')
		var style = '@@include("css/style.css")';
		$('body').append('<style>'+style+'</style>');
	}
}