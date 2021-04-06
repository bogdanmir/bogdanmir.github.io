var url = window.location.href;
function test_function(){
    if($('#productPrice-manual').length && $('#productPrice-manual').text().indexOf('Free Shipping') > -1){
        // var html = $('#productPrice-manual').html();
        // html = html.replace(RegExp(' &amp; Free Shipping','g'),'');
        // $('#productPrice-manual').html( html );
        $('#productPrice-manual').append('<p class="ready-to">Ready to ship</p>');
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

function additional_prod_html_generate(additionalProdObj){
    var html = '<div class="selector-wrapper"><div class="dropdown"><div class="dropdown__head">Mounting and Accessories</div>';
    $.each(additionalProdObj, function (key, value){
        html += '<div class="dropdown__item">'
        html += '<label>'+ value['name'] +'</label>';
        html += '<span class="money">'+ value['price'] +'</span><input data-url="'+value['url']+'" type="button" class="add-to-cart" value="Add to Cart">';
        html += '</div>'
    })
    html += '</div></div>'
    $('#addToCartForm .selector-wrapper').first().append(html);
}

if(accentLightsProdsUrls.indexOf(window.location.pathname) > -1){
    additional_prod_html_generate(additionalProducts['rbg_controller'])
}

if(url.indexOf('led-light-pods/products') > -1){
    additional_prod_html_generate(additionalProducts['led_light_pods'])
}
function test_accessory(){
    if(url.indexOf('double-row-led/products') > -1){
        additional_prod_html_generate(window.additionalProducts['double-row-led'])
    }
    if(url.indexOf('single-row-led-light-bars/products') > -1){
        additional_prod_html_generate(window.additionalProducts['single_rows'])
    }
    if(url.indexOf('led-light-pods/products') > -1){
        additional_prod_html_generate(window.additionalProducts['led_light_pods'])
    }
    if(accentLightsProdsUrls.indexOf(window.location.pathname) > -1){
        additional_prod_html_generate(window.additionalProducts['rbg_controller'])
    }
}

function ajax_add_to_cart(url){
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
    }).done(function(data) {
        var sendData = $(data).find('.form-add-to-cart').serialize();
        $.ajax({
            url: 'https://www.blackoakled.com//cart/add',
            type: 'POST',
            data: sendData,
            dataType: 'html',
        }).done(function(data) {
            alert("Psoduct in cart!!!!!");
        });
    });
}

$('.dropdown__item').find('add-to-cart').on('click', function (){
    var prod_url = window.location.origin + $(this).data("url")
    ajax_add_to_cart(prod_url)
})

var list_difference = {
    'combo' : '<span>Combo</span> - Best of both worlds, the floods sit on the outside giving you the side blow-out of light while still shooting far with the Spots piercing far ahead.',
    'spot'  : '<span>Spot</span> - Great for those who need those piercing beams of light that seem to travel forever.',
    'flood' : '<span>Flood</span> - Wide-spread light to illuminate the side and front of your rig. Perfect for those who want a wider cone of light than a spot.',
    'led'   : 'Our <span>5W</span> LEDs produce over 75% better light output than our <span>3W</span> and are way more efficient, keeping the power draw very low.'
}

var option = $('.single-option-selector');
if(option.length > 0){
    option.parent('.selector-wrapper').prepend('<a class="open-info">What’s the difference?</a>');
}

$('.open-info').on('click', function (){
    var op_v = $(this).parent().find(option).val();
    var html    = '<div class="t-overlay"></div><div class="info-window">' +
        '<div class="w-title"><h3>What’s the difference?</h3><span class="close"></span></div>' +
        '<div class="w-body">';

    if(op_v === 'Combo'){
        html += '<div class="w-item">'+list_difference['combo']+'</div>' +
                '<div class="w-item">'+list_difference['spot']+'</div>' +
                '<div class="w-item">'+list_difference['flood']+'</div>'
    }else{
        html += '<div class="w-item single-item">'+list_difference['led']+'</div>'
    }
    html += '</div></div>';

    $(this).parent().append(html);
})



$(document).on('click', '.info-window .close', function(){
    $('body').find('.t-overlay').remove();
    $(this).closest('.info-window').remove();
});
$(document).on('click', '.t-overlay', function(){
    $(this).remove();
    $('body').find('.info-window').remove();
});