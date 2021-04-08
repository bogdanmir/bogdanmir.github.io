var url = window.location.href;
var wrap = $('.form-add-to-cart ').parent().parent();

var zoomProduct = "<span class='iz'><img src='https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/ico-4.svg' alt='ico'></span>"
$('body').find('#main-product-image').append(zoomProduct);
var srcZoom2 = $('body').find('#main-product-image .zoomImg').attr('src');
var zoomModal2 =  '<div id="zoomModal2" class="modal zoomModal">'+
                      '<span class="close">&times;</span>'+
                      '<img src="'+ srcZoom2 +'" class="modal-content" id="img01">'+
                  '</div>'
wrap.append(zoomModal2);
$(document).on('click', '#main-product-image .iz', function(){
    $('body').find('#zoomModal2').addClass('is-active');
});


function totalPrice(btn = null){
    var sumStr = $('#productPrice-manual').find('.money').html();
    var price = sumStr.replace('$','');
    var wrap = $('.form-add-to-cart').find('.quantity').find('.qty');
    var qVal = $('#quantity').val();

    if(btn !== null){
        if(btn.hasClass('minus_btn')){
            qVal = ++qVal;
        }
        if(btn.hasClass('minus_btn')){
            qVal = --qVal;
        }
    }

    var sum = +(price)*+(qVal);
    if($('.test-total').length > 0){
        $('.test-total').remove();
    }
    var totalPriceText = "<div class='test-total'><span>Total price :</span><span class='total-sum'>$"+ Math.floor(sum * 100) / 100 +"</span></div>";
    wrap.append(totalPriceText);
}

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

$('.qty').find('a').on('click', function (){
    totalPrice($(this));
})
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
var annotations = {
    'total_wattage': '<span class="green">Total Wattage</span>Is the power produced or used per second',
    'amp_draw': '<span class="green">Amp Draw</span>Amp Draw Correlates to the amount of amperage drawn from a 12V, 24V or 36V system.',
    'weight': '<span class="green">Weight</span>Total weight of the product.',
    'raw_lumens': '<span class="green">Raw Lumens</span>This is a measure of the theoretical output of a light.',
    'guarantee': '<span class="green">Guarantee</span>Provide a formal assurance, especially that certain conditions will be fulfilled relating to a product, service, or transaction.',
    'ip_rating': '<span class="green">IP Rating</span>s the measurement of protection that LED light will have against liquid (water) and solid (dirt, dust etc.) objects.',
    'e_mark': '<span class="green">E-mark</span>The e-mark is an EU mark for approved vehicles and vehicle components sold into the EU.',
}

$(document).on('click','.opIn span', function (){
    var q = $(this).parents('tr').data('text');
    var text = annotations[q];
    var message = "<span class='test-message'>"+text+"<span class='close'>&times;</span></span>";

    $('.test-message').remove();
    $(this).closest('.opIn').append(message)
});
$(document).on('click','.opIn .close', function (){
    $('.test-message').remove();
});



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
    if($('.selector-wrapper option').text().indexOf('3') > -1 || $('.selector-wrapper option').text().indexOf('5') > -1 ){
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
                            '<button class="zoom">Click to zoom</button>'+
                        '</div>'+
                    '</div>'+
               '</div>';

    wrap.append(html);           
    }
}

function addFeatures(){
    var features =  '<div class="features-wrap">'+
                        '<div class="compatibility-section">'+
                            '<h3 class="com-title">Compatibility</h3>'+
                            '<a href="tel:8003481287" class="link">Call us 800-348-1287 to assist'+
                            '<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0388 3.15029L11.4287 2.70596C12.7333 2.29004 14.1244 2.963 14.6837 4.27792L15.7932 6.89742C16.2763 8.03796 16.0089 9.38 15.1293 10.2144L12.6829 12.5368C12.8327 13.9267 13.3003 15.2945 14.0831 16.6405C14.8268 17.9427 15.8243 19.0825 17.0164 19.9923L19.955 19.0107C21.0697 18.64 22.2826 19.0675 22.9646 20.0711L24.5572 22.409C25.3516 23.5767 25.2095 25.1861 24.2239 26.1755L23.1674 27.236C22.1159 28.2913 20.6137 28.6749 19.2252 28.2409C15.9456 27.2179 12.9309 24.1812 10.1796 19.1308C7.42452 14.0726 6.45189 9.77913 7.26306 6.25546C7.60406 4.77263 8.65935 3.59075 10.0388 3.15029Z" fill="#096DD9"/></svg>'+
                            '</a>'+
                        '</div>'+
                        '<h3 class="features-title">Key Features</h3>'+
                        '<div class="features-section">'+
                            '<div class="feature">'+
                                '<div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-1.svg" alt="features" /></div>'+
                                '<div class="desc">50,000+ Hour Lifespan</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-2.svg" alt="features" /></div>'+
                                '<div class="desc">9-36  V DC Voltage Range</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-3.png" alt="features" /></div>'+
                                '<div class="desc">Durable UV Polyester Poweder Coat</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-4.svg" alt="features" /></div>'+
                                '<div class="desc">Integrated Thermal Mgmt. System</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-5.svg" alt="features" /></div>'+
                                '<div class="desc">Impact Resistant Polycarbonate Lens</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-6.svg" alt="features" /></div>'+
                                '<div class="desc">IP68 & IP69 Compliant Dust / Water Ingress</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="features-section-2">'+
                            '<div class="feature">'+
                                '<div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/production-1.svg" alt="features" /></div>'+
                                '<div class="desc">Owned and operated in Sarasota FL</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/production-2.svg" alt="features" /></div>'+
                                '<div class="desc">Limited Lifetime Warranty</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/production-3.svg" alt="features" /></div>'+
                                '<div class="desc">Fast and Free Shipping</div>'+
                            '</div>'+
                            '<div class="feature">'+
                                '<div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/production-4.svg" alt="features" /></div>'+
                                '<div class="desc">In Stock and Ready to Ship</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
    wrap.append(features);                
}

function addSpecifications(){
    var table = '<div class="info-wrap specifications-wrap">'+
        '<h3 class="t-title">Specifications</h3>'+
        '<div class="img-wrap">'+
        '<img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/scr-1.png" alt="Premium Hardware">'+
        '<img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/scr-2.png" alt="Premium Hardware">'+
        '</div>'+
        '<div class="tbl-wrap">'+
        '<table width="100%" cellpadding="4">'+
        '<tr class="t-head">'+
        '<th></th>'+
        '<th>5 Watt / Osram</th>'+
        '<th>3 Watt / Osram</th>'+
        '</tr>'+
        '<tr data-text="total_wattage">'+
        '<td class="bolt">Total Wattage<div class="opIn"><span class="d-ico">!</span></div></td>'+
        '<td>100w</td>'+
        '<td>50w</td>'+
        '</tr>'+
        '<tr data-text="amp_draw">'+
        '<td class="bolt">Amp Draw <div class="opIn"><span class="d-ico">!</span></div></td>'+
        '<td>4.1</td>'+
        '<td>4</td>'+
        '</tr>'+
        '<tr data-text="led_quantity">'+
        '<td class="bolt">Led Quantity <div class="opIn"><span class="d-ico">!</span></div></td>'+
        '<td>20</td>'+
        '<td>20</td>'+
        '</tr>'+
        '<tr data-text="weight">'+
        '<td class="bolt">Weight <div class="opIn"><span class="d-ico">!</span></div></td>'+
        '<td>6.6</td>'+
        '<td>6.6</td>'+
        '</tr>'+
        '<tr data-text="raw_lumens">'+
        '<td class="bolt">Raw Lumens <div class="opIn"><span class="d-ico">!</span></div></td>'+
        '<td>Lifetime</td>'+
        '<td>Lifetime</td>'+
        '</tr>'+
        '<tr data-text="guarantee">'+
        '<td class="bolt">Guarantee <div class="opIn"><span class="d-ico">!</span></div></td>'+
        '<td>30 Day Money Back</td>'+
        '<td>30 Day Money Back</td>'+
        '</tr>'+
        '<tr data-text="ip_rating">'+
        '<td class="bolt">IP Rating <div class="opIn"><span class="d-ico">!</span></div></td>'+
        '<td>IP69K</td>'+
        '<td>IP69K</td>'+
        '</tr>'+
        '<tr data-text="e_mark">'+
        '<td class="bolt">E-mark <div class="opIn"><span class="d-ico">!</span></div></td>'+
        '<td>E9</td>'+
        '<td>E9</td>'+
        '</tr>'+
        '</table>'+
        '</div>'+
        '<div class="our-l">Our lights are built to run off of 9-36V DC, but we offer power converters for 110V AC</div>'+
        '<div class="buttons">'+
        '<a href="#" class="manual_btn">Download manual and guide <img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/ico-1.svg" alt="ico"></a>'+
        '<a href="#" class="qna_btn">QnA on specs, mount, wiring <img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/ico-2.svg" alt="ico"></a>'+
        '</div>'+
        '</div>';
    wrap.append(table);
}

function addOtherOptions(){
    var oser_options =  '<div class="other_options">'+
                            '<h3 class="t-title">See other options</h3>'+
                            '<div class="other_holder"><div class="item_wrap">'+
                                '<a class="item" href="https://www.blackoakled.com/collections/20-inch-led-light-bars/20-Inch">20 inch double row</a>'+
                                '<a class="item" href="https://www.blackoakled.com/collections/30-inch-led-light-bars/30-Inch">30 inch double row</a>'+
                                '<a class="item" href="https://www.blackoakled.com/collections/40-inch-led-light-bars/40-Inch">40 inch double row</a>'+
                            '</div></div>'+
                        '</div></div>';
    wrap.append(oser_options);                    
}

function addQuestionForm(){
    var form =  '<div class="form_wrap">'+
                    '<h4 class="t-title">We are here to assist in choosing the best fit </h4>'+
                    '<div class="call-us">'+
                        '<a href="tel:8003481287"><span>Call us <b>800.348.1287</b> to assist </span><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/ico-3.svg" alt="ico"></a>'+
                    '</div>'+

                    '<div class="form-title">Have a question?</div>'+
                    '<form class="question-form">'+
                        '<textarea name="question-body" placeholder="Type here and we’ll contact you the same day" required></textarea>'+
                        '<input type="email" name="question-email" placeholder="Email to respond" required>'+
                        '<button class="btn btn-success" type="submit" value="Submit">Submit</button>'+
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


function zoomModal(){
    var srcZoom = $('body').find('.info-performance .info-cont img').attr('src');
    var zoomModal =  '<div id="zoomModal1" class="modal zoomModal">'+
                          '<span class="close">&times;</span>'+
                          '<img src="'+ srcZoom +'" class="modal-content" id="img01">'+
                      '</div>'
    wrap.append(zoomModal);
}
$(document).on('click', '.info-performance .info-cont .zoom', function(){
    $('body').find('#zoomModal1').addClass('is-active');
})
$(document).on('click', '.zoomModal .close', function(){
  $('body').find('.zoomModal').removeClass('is-active');
})

// Manual Modal
var zoomModalManual =  '<div id="zoomModalManual" class="modal zoomModal ">'+
                          '<span class="close">&times;</span>'+
                          '<div class="inner-wrap">'+
                            '<p class="f-20">Manual will be added later.</p>'+
                          '</div>'+
                        '</div>'
wrap.append(zoomModalManual);
$(document).on('click', '.manual_btn', function(e){
    e.preventDefault();
    console.log('zoomModalManual open2');
    $('body').find('#zoomModalManual').addClass('is-active');
});

// QnA Modal
var zoomModalQnA =  '<div id="zoomModalQnA" class="modal zoomModal">'+
                      '<span class="close">&times;</span>'+
                      '<div class="inner-wrap">'+
                        '<p><b>How do I know your lights are of the highest quality?</b></p>'+
                        '<p class="mb-17">With IP68, IP69, IP69K ratings, the research has already been done for you! These standards give you clear cut pass/fail scenarios to ensure only the toughest of the tough get passed these guys, Including water, temperature, pressure, and sheer brute force.</p>'+
                        '<p><b>What exactly does your warranty cover?</b></p>'+
                        '<p class="mb-17">We are human, and thus make mistakes. If you believe your light was one of these rare occurrences due to workmanship or material failure, send it back and we will verify. Once confirmed, Black Oak LED will repair, or otherwise replace, your light free of charge.</p>'+
                        '<p><b>I see 3w, 5w, and 10w LED options, what’s the difference?</b></p>'+
                        '<p class="mb-17">You have the option between 3w Osram, 5w Osram, or 10w Cree LEDs. These are some of the brightest LEDs on the market! Don’t be misled, the 3 watts still put out an unbelievable amount of light! You choose just how bright you need it.</p>'+
                        '<p><b>What is light beam spread pattern, and what is best for me?</b></p>'+
                        '<p><b>Flood</b>- Wide-spread light to illuminate the side and front of your rig. Perfect for those who want a wider cone of light than a spot.</p>'+
                        '<p><b>Spot</b>- Great for those who need those piercing beams of light that seem to travel forever.</p>'+
                        '<p><b>Combo</b>- Best of both worlds, the floods sit on the outside giving you the side blow-out of light while still shooting far with the Spots piercing far ahead.</p>'+
                      '</div>'+
                    '</div>'
wrap.append(zoomModalQnA);
$(document).on('click', '.qna_btn', function(e){
    e.preventDefault();
    console.log('zoomModalQnA open2');
    $('body').find('#zoomModalQnA').addClass('is-active');
});

function updOverviewTab(){
    var overviewTab = $('#tabs-2');
    // overviewTab.siblings('ul').remove();
    // overviewTab.siblings('.tabs-3').remove();
    // overviewTab.siblings('.tabs-4').remove();
    // overviewTab.siblings('.tabs-5').remove();
    if($('.prod_review').length > 0){
        $('.prod_review').remove();
    }
    if($('.related_prod').length > 0){
        $('.related_prod').parents('.product_c').parent().parent().remove();
    }
    overviewTab.html('');
    var tabCont =  '<h3>Overview</h3>'+
                    '<div class="text">' +
                        'This light has been upgraded to the New Pro Series 2.0, see below for all the new features.'+
                    '</div>' +
                    '<div class="slogan">' +
                        '<span>From Alaska to the Equator - </span>' +
                        '<span class="green">It just works!</span>' +
                    '</div>'+
                    '<div class="pre-galery">' +
                        'Very Impressed'+
                        '<div class="author-comment">Patti H. on Feb 15, 2021</div>'+
                    '</div>'+
                    '<div class="imgs-wrap"><div class="item_wrap">'+
                        '<img src="//cdn.shopify.com/s/files/1/0761/3599/files/LightbarResized.png?8312169795570906311" alt="">'+
                    '</div></div>'+
                    '<div class="comment-txt">' +
                        'We were like, “wow!” We could not believe how bright the light is. We have the light on our defender which we use to plow snow and also to hunt with.'+
                    '</div>'+
                    '<div class="text">' +
                        'Versatility and compact power is what we strived for when constructing the 10" LED light bar, letting you mount this baby right out of the box with sturdy mounting brackets, stainless hardware and wiring harness included! Made only with materials at the forefront of the market, the 10" LED light bar showcases an IP69K rating allowing you to completely pound it with water, ice, saltwater, and especially sheer brute force. With a total height of 3.3 inches, this dual row off-road flood light fits just about anywhere while putting out a crazy amount of luminous light!'+
                    '</div>'+
                    '<div class="imgs-wrap2">'+
                        '<div class="col"><img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Screen_Shot_2019-11-04_at_11.13.35_AM_b405a04d-5d33-4787-9e94-55712a75c201_480x480.png?v=1572884351" alt="Baricoat Ceramc Coating"></div>'+
                        '<div class="col"><img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Screen_Shot_2019-11-04_at_11.14.31_AM_6a2f5677-8d95-4642-bdef-b7803aa9d079_480x480.png?v=1572885960" alt="Water Proof"></div>'+
                    '</div>'+
                    '<div class="sub-title">4x Stronger with Dynamax</div>'+
                    '<div class="text">' +
                        '“With our heavy duty Dynamax housing, each light is built to withstand the harshest beating possible. We made sure to do extensive testing before releasing our lights to the public. Our testing included; multiple hits with a baseball bat, throwing the light into the air, and using the light bar as a ramp for our truck. Whether you’re in rough seas offshore or battling some tough terrain off-road, we wanted to make sure our lights could withstand anything you put them through.”'+
                    '</div>'+
                    '<h3>Multi-Mount 316 Brackets</h3>'+
                    '<div class="imgs-wrap2">'+
                        '<div class="col"><img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Outter-mount_480x480.jpg?v=1572887360" alt="Led"></div>'+
                        '<div class="col"><img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Undermount_480x480.jpg?v=1572887236" alt="Lights"></div>'+
                    '</div>'+
                    '<div class="sub-tile2">More Security</div>'+
                    '<div class="text text2">' +
                        '“New upgraded bolts with <span class="green bold">stronger threads for extra protection.</span><br>' +
                        'We wanted to make sure our lights were as durable as possible down to each and every bolt. You never want to have a piece of equipment fail when you are out in the field, so we have increased the strength of <span class="green bold">even our smallest components to take this fear away.</span>”'+
                    '</div>';
    overviewTab.append(tabCont);
}

// function
totalPrice();
addMaxPerformance();
zoomModal();
addFeatures();
addSpecifications();
addOtherOptions();
addQuestionForm();
includedInThePackage();
updOverviewTab();