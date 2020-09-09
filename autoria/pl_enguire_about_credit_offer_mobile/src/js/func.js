function send_user_call(url,phone){
    console.log('send_user_call run');
    console.log('send_user_call url '+url);
    console.log('send_user_call phone '+phone);
    $.ajax({
    	url: 'https://dev.aim-it.com.ua/test-save-json',
    	type: 'POST',
    	data: {
            url   : url,
            phone : phone,
        },
    	dataType: 'json',
    }).done(function(data) {
    	console.log(data.is_send);
    	console.log("success");
    });
}
