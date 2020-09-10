function send_user_call(url,phone){
    console.log('send_user_call run');
    console.log('send_user_call url '+url);
    console.log('send_user_call phone '+phone);
    $.ajax({
        url: 'https://dev.aim-it.com.ua/test-save-json/',
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

function close_event_dataLayer(){
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'PDP sticky button credit',
        'eventAction': 'click Pop up loan',
        'eventLabel': 'close'
    });
    console.log('Trigger close_event_dataLayer');
}