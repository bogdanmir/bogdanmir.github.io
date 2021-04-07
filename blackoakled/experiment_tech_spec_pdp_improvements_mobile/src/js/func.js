var url = window.location.href;
var wrap = $('.form-add-to-cart ').parent().parent();
function test_function(){
    if($('#productPrice-manual').length && $('#productPrice-manual').text().indexOf('Free Shipping') > -1){
        var html = $('#productPrice-manual').html();
        html = html.replace(RegExp(' &amp; Free Shipping','g'),'<span class="free-shipping">Free Shipping</span>');
        $('#productPrice-manual').html( html );
        
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
    var html = '<div class="selector-wrapper"><div class="dropdown"><div class="dropdown__head">Mounting and Accessories</div><div class="dropdown__item_wrap">';
    $.each(additionalProdObj, function (key, value){
        html += '<div class="dropdown__item">'
        html += '<div><img src="'+ value['img'] +'" alt="" />';
        html += '<label>'+ value['name'] +'</label></div>';
        html += '<div><span class="money">&#36;'+ value['price'] +'</span><input data-url="'+value['url']+'" type="button" class="add-to-cart" value="+Add"></div>';
        html += '</div>'
    })
    html += '</div></div></div>'
    $('#addToCartForm .selector-wrapper').first().append(html);
}

if(accentLightsProdsUrls.indexOf(window.location.pathname) > -1){
    additional_prod_html_generate(additionalProducts['rbg_controller'])
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

$(document).on('click', '.info-window .close', function(){
    $('body').find('.t-overlay').remove();
    $(this).closest('.info-window').remove();
});
$(document).on('click', '.t-overlay', function(){
    $(this).remove();
    $('body').find('.info-window').remove();
});
$(document).on('click', '.selector-wrapper .dropdown__head', function(){
    $(this).closest('.dropdown').toggleClass('is-show');
});
$(document).on('click', '.dropdown__item_wrap .dropdown__item .add-to-cart', function(){
    $(this).closest('.dropdown__item').addClass('active');
});
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

function addMaxPerformance(){
    if($('option').text().indexOf('3 Watt') > -1 || $('option').text().indexOf('5 Watt') > -1 ){
    var html = '<div class="info-performance info-wrap">'+
                    '<h3 class="per-title">Max performance with  Combo optics and 5W</h3>'+
                    '<div class="info-cont">'+
                        '<div class="col">'+
                            '<img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Truck_Overhead_Blue_1024x1024.jpg?v=1572884778" alt="Flood lights">'+
                            '<span class="t-combo">COMBO</span>'+
                        '</div>'+

                        '<div class="col">'+
                            '<div class="sub-title">COMBO with 5W provides:</div>'+
                            '<div class="green">Over 75 % more Light & Visibility</div>'+
                            '<div class="visibility">Visibility up to <b>780m</b></div>'+
                            '<div class="ul-title">Best for:</div>'+
                            '<ul>'+
                                '<li>- Marine</li>'+
                                '<li>- Hunting</li>'+
                                '<li>- Off-road</li>'+
                                '<li>- Heavy Machinery</li>'+
                                '<li>- Military</li>'+
                            '</ul>'+
                            '<button class="zoom">Click to zoom</button>'
                        '</div>'+
                    '</div>'+
               '</div>';

    wrap.append(html);           
    }
}

function addFeatures(){
    var features =  '<div class="features-wrap">'+
                        '<div class="features-section">'+
                            '<div class="feature">'+
                                '<div class="icon"></div>'+
                                '<div class="desc">50,000+ Hour Lifespan</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"></div>'+
                                '<div class="desc">9-36  V DC Voltage Range</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"></div>'+
                                '<div class="desc">Durable UV Polyester Poweder Coat</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"></div>'+
                                '<div class="desc">Integrated Thermal Mgmt. System</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"></div>'+
                                '<div class="desc">Impact Resistant Polycarbonate Lens</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"></div>'+
                                '<div class="desc">IP68 & IP69 Compliant Dust / Water Ingress</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="features-section">'+
                            '<div class="feature">'+
                                '<div class="icon"></div>'+
                                '<div class="desc">Owned and operated in Sarasota FL</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"></div>'+
                                '<div class="desc">Limited Lifetime Warranty</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"></div>'+
                                '<div class="desc">Fast and Free Shipping</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"></div>'+
                                '<div class="desc">In Stock and Ready to Ship</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
    wrap.append(features);                
}

function addSpecifications(){
    var table = '<div class="info-wrap">'+
                        '<h3>Specifications</h3>'+
                        '<div class="img-wrap">'+
                            '<img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Heyrex-Seal-on-Black-Oak-Pro-Series-2.0_600x600.jpg?v=1572883692" alt="Premium Hardware" style="float: none; display: inline-block; width: 100%; height: auto !important; max-width: 258px;" width="258" height="258">'+

                            '<img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Heyrex-Seal-on-Black-Oak-Pro-Series-2.0_600x600.jpg?v=1572883692" alt="Premium Hardware" style="float: none; display: inline-block; width: 100%; height: auto !important; max-width: 258px;" width="258" height="258">'+
                        '</div>'+
                        '<div class="tbl-wrap">'+
                            '<table width="100%" border="0" cellpadding="4">'+
                                '<tr>'+
                                    '<th></th>'+
                                    '<th>5 Watt / Osram</th>'+
                                    '<th>3 Watt / Osram</th>'+
                                '</tr>'+
                                '<tr data-text="total_wattage">'+
                                    '<td>Total Wattage</td>'+
                                    '<td>100w</td>'+
                                    '<td>50w</td>'+
                                '</tr>'+
                                '<tr data-text="amp_draw">'+
                                    '<td>Amp Draw</td>'+
                                    '<td>4.1</td>'+
                                    '<td>4</td>'+
                                '</tr>'+
                                '<tr data-text="led_quantity">'+
                                    '<td>Led Quantity</td>'+
                                    '<td>20</td>'+
                                    '<td>20</td>'+
                                '</tr>'+
                                '<tr data-text="weight">'+
                                    '<td>Weight</td>'+
                                    '<td>6.6</td>'+
                                    '<td>6.6</td>'+
                                '</tr>'+
                                '<tr data-text="raw_lumens">'+
                                    '<td>Raw Lumens</td>'+
                                    '<td>Lifetime</td>'+
                                    '<td>Lifetime</td>'+
                                '</tr>'+
                                '<tr data-text="guarantee">'+
                                    '<td>Guarantee</td>'+
                                    '<td>30 Day Money Back</td>'+
                                    '<td>30 Day Money Back</td>'+
                                '</tr>'+
                                '<tr data-text="ip_rating">'+
                                    '<td>IP Rating</td>'+
                                    '<td>IP69K</td>'+
                                    '<td>IP69K</td>'+
                                '</tr>'+
                                '<tr data-text="e_mark">'+
                                    '<td>E-mark</td>'+
                                    '<td>E9</td>'+
                                    '<td>E9</td>'+
                                '</tr>'+
                            '</table>'+
                        '</div>'+
                        '<div>Our lights are built to run off of 9-36V DC, but we offer power converters for 110V AC</div>'+
                        '<div class="buttons">'+
                            '<a href="">Download manual and guide</a>'+
                            '<a href="">QnA on specs, mount, wiring</a>'+
                        '</div>'+
                    '</div>';
    wrap.append(table);
}

function addOtherOptions(){
    var oser_options =  '<div class="oser_options"></div>'+
                            '<h3>See other options</h3>'+
                            '<div class="item_wrap">'+
                                '<a class="item" href="https://www.blackoakled.com/collections/20-inch-led-light-bars/20-Inch">20 inch double row</a>'+
                                '<a class="item" href="https://www.blackoakled.com/collections/30-inch-led-light-bars/30-Inch">30 inch double row</a>'+
                                '<a class="item" href="https://www.blackoakled.com/collections/40-inch-led-light-bars/40-Inch">40 inch double row</a>'+
                            '</div>'+
                        '</div>';
    wrap.append(oser_options);                    
}

function addQuestionForm(){
    var form =  '<div class="form-wrap">'+
                    '<div class="call-us">'+
                        '<a href="tel:8003481287">Call us <span style="color: #231f20; font-weight: bold;">800.348.1287</span> to assist</a>'+
                    '</div>'+

                    '<div class="form-title">Have a question?</div>'+
                    '<form class="question-form">'+
                        '<textarea name="question-body" placeholder="Type here and we’ll contact you the same day" required></textarea>'+
                        '<input type="email" name="question-email" placeholder="Email to respond" required>'+
                        '<button class="btn btn-success" type="submit" value="Submit">'+
                    '</form>'+
                '</div>';
    wrap.append(form);            
}

function includedInThePackage(){
    var includedPackage =   '<div class="package-wrap">'+
                                '<h3 class="package-title">What is included in the package?</h3>'+
                                '<ul class="package-items">'+
                                    '<li>Mounting Hardware</li>'+
                                    '<li>Black Powder Coated, L-Shape</li>'+
                                    '<li>Brackets</li>'+
                                    '<li>Dash Controller & Under Dash Module with Wiring Harness and Hardware</li>'+
                                '</ul>'+
                                '<h3 class="separately-title">SOLD SEPARATELY</h3>'+
                                '<ul class="separately-items">'+
                                    '<li>Underside Low-Profile Mounts</li>'+
                                    '<li>Light Covers</li>'+
                                '</ul>'+
                            '</div>';
    wrap.append(includedPackage);
}

function updOverviewTab(){
    var overviewTab = $('#tabs-2');
    overviewTab.siblings('ul').remove();
    overviewTab.siblings('.tabs-3').remove();
    overviewTab.siblings('.tabs-4').remove();
    overviewTab.siblings('.tabs-5').remove();
    $('.prod_review').remove();
    $('.related_prod').parents('.product_c').parent().parent().remove();

    overviewTab.html('');
    var tabCont =  '<h3>Overview</h3>'+
                    '<div class="text">' +
                        'This light has been upgraded to the New Pro Series 2.0, see below for all the new features.'+
                    '</div>' +
                    '<div class="slogan">' +
                        '<span style="font-weight: bold;">From Alaska to the Equator - </span>' +
                        '<span style="font-weight: bold; color: darkgreen;">It just works!</span>' +
                    '</div>'+
                    '<div class="pre-galery">' +
                        'Very Impressed'+
                        '<div class="author-comment" style="color: darkgreen;">Patti H. on Feb 15, 2021</div>'+
                    '</div>'+
                    '<div class="imgs-wrap">'+
                        '<img src="//cdn.shopify.com/s/files/1/0761/3599/files/LightbarResized.png?8312169795570906311" alt="">'+
                    '</div>'+
                    '<div class="comment-txt">' +
                        'We were like, “wow!” We could not believe how bright the light is. We have the light on our defender which we use to plow snow and also to hunt with.'+
                    '</div>'+
                    '<div class="text">' +
                        'Versatility and compact power is what we strived for when constructing the 10" LED light bar, letting you mount this baby right out of the box with sturdy mounting brackets, stainless hardware and wiring harness included! Made only with materials at the forefront of the market, the 10" LED light bar showcases an IP69K rating allowing you to completely pound it with water, ice, saltwater, and especially sheer brute force. With a total height of 3.3 inches, this dual row off-road flood light fits just about anywhere while putting out a crazy amount of luminous light!'+
                    '</div>'+
                    '<div class="imgs-wrap">'+
                        '<img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Screen_Shot_2019-11-04_at_11.13.35_AM_b405a04d-5d33-4787-9e94-55712a75c201_480x480.png?v=1572884351" alt="Baricoat Ceramc Coating">'+
                        '<img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Screen_Shot_2019-11-04_at_11.14.31_AM_6a2f5677-8d95-4642-bdef-b7803aa9d079_480x480.png?v=1572885960" alt="Water Proof">'+
                    '</div>'+
                    '<div class="sub-tile small">4x Stronger with Dynamax</div>'+
                    '<div class="text">' +
                        '“With our heavy duty Dynamax housing, each light is built to withstand the harshest beating possible. We made sure to do extensive testing before releasing our lights to the public. Our testing included; multiple hits with a baseball bat, throwing the light into the air, and using the light bar as a ramp for our truck. Whether you’re in rough seas offshore or battling some tough terrain off-road, we wanted to make sure our lights could withstand anything you put them through.”'+
                    '</div>'+
                    '<h3>Multi-Mount 316 Brackets</h3>'+
                    '<div class="imgs-wrap">'+
                        '<img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Outter-mount_480x480.jpg?v=1572887360" alt="Led">'+
                        '<img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Undermount_480x480.jpg?v=1572887236" alt="Lights">'+
                    '</div>'+
                    '<div class="sub-tile">More Security</div>'+
                    '<div class="text">' +
                        '“New upgraded bolts with <span style="color: darkgreen;">stronger threads for extra protection.</span>' +
                        'We wanted to make sure our lights were as durable as possible down to each and every bolt. You never want to have a piece of equipment fail when you are out in the field, so we have increased the strength of <span style="color: darkgreen;">even our smallest components to take this fear away.</span>”'+
                    '</div>';
    overviewTab.append(tabCont);
}