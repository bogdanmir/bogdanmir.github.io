function test_function(){
    console.log('test_function run');
    if($('#productPrice-manual').length && $('#productPrice-manual').text().indexOf('Free Shipping') > -1){
        var html = $('#productPrice-manual').html();
        html = html.replace(RegExp(' &amp; Free Shipping','g'),'');
        $('#productPrice-manual').html( html );
        $('#productPrice-manual').append('<div class="off-15">15% off</div>');
    }
}
window.abtest_interval = setInterval(function(){
    if($('body').find('#productPrice-manual .off-15').length < 1){
        test_function();
    }else{
        clearInterval(window.abtest_interval);
    }
})