function abjql(e){var t=document.createElement("script");t.type="text/javascript",t.readyState?t.onreadystatechange=function(){"loaded"!==t.readyState&&"complete"!==t.readyState||(t.onreadystatechange=null,e())}:t.onload=function(){e()},t.src="//code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(t)}function abjqlr(a){window.language_abtest;console.log("%cTest come","background:red;color:wite;");window.additionalProducts={"double-row-led":{1:{name:"Lens covers",price:"55.25",url:"/collections/led-light-bar-mounts-2/products/o-type-bracket-in-pair",img:"//cdn.shopify.com/s/files/1/0761/3599/products/accessories-o-type-bracket-in-pair-1_medium.jpg?v=1467206343"},2:{name:"Sound Dampeners",price:"25.00",url:"/collections/covers-hardware/products/lens-cover-for-10-dual-row-light",img:"https://cdn.shopify.com/s/files/1/0761/3599/products/accessories-new-lens-cover-for-10-dual-row-light-1_medium.jpg?v=1449621325"},3:{name:"Security Hardware",price:"21.25",id:"/collections/covers-hardware/products/security-hardware",img:"https://cdn.shopify.com/s/files/1/0761/3599/products/Screen_Shot_2016-08-24_at_10.39.28_AM_medium.png?v=1472053578"},4:{name:"Sound Dampeners",price:"25.50",url:"/collections/covers-hardware/products/sound-dampers",img:"https://cdn.shopify.com/s/files/1/0761/3599/products/IMG_1975_medium.jpg?v=1472584246"}},single_rows:{1:{name:"Lens covers",price:"55.25",url:"/collections/led-light-bar-mounts-2/products/o-type-bracket-in-pair",img:"//cdn.shopify.com/s/files/1/0761/3599/products/accessories-o-type-bracket-in-pair-1_medium.jpg?v=1467206343"},2:{name:"Single Row Cover",price:"17.00",url:"/collections/covers-hardware/products/single-row-cover",img:"https://cdn.shopify.com/s/files/1/0761/3599/products/Screen_Shot_2016-10-25_at_9.36.27_AM_medium.png?v=1507580376"},3:{name:"Security Hardware",price:"21.25",url:"/collections/covers-hardware/products/security-hardware",img:"https://cdn.shopify.com/s/files/1/0761/3599/products/Screen_Shot_2016-08-24_at_10.39.28_AM_medium.png?v=1472053578"},4:{name:"Sound Dampeners",price:"25.50",url:"/collections/covers-hardware/products/sound-dampers",img:"https://cdn.shopify.com/s/files/1/0761/3599/products/IMG_1975_medium.jpg?v=1472584246"}},led_light_pods:{1:{name:"GoPOD Clamp On Mount Kit",price:"72.25",url:"/products/new-black-oak-gopod-clamp-mount-mount-only?_pos=1&_sid=95e2d8dba&_ss=r",img:"https://cdn.shopify.com/s/files/1/0761/3599/products/20502_medium.jpg?v=1602771016"},2:{name:'Lens cover for 2" pod light',price:"17.00",url:"/collections/covers-hardware/products/lens-cover-for-2-work-light",img:"https://cdn.shopify.com/s/files/1/0761/3599/products/accessories-new-lens-cover-for-2-work-light-1_medium.jpg?v=1596114332"},3:{name:"GoPOD Suction Cup Mount Kit",price:"72.25",url:"/products/new-gopod-suction-on-mount-mount-only?_pos=2&_sid=95e2d8dba&_ss=r",img:"https://cdn.shopify.com/s/files/1/0761/3599/products/IMG_1987_medium.jpg?v=1602704583"},4:{name:"2-Piece Connect Cable",price:"29.75",url:"/collections/wiring-kits/products/connect-cable-for-2pcs",img:"https://cdn.shopify.com/s/files/1/0761/3599/products/accessories-new-connect-cable-for-2pcs-1_medium.jpg?v=1449621334"}},rbg_controller:{1:{name:"RGB Controller - Black Oak LED",price:"46.75",url:"/products/new-rbg-controller-black-oak-led?_pos=1&_sid=fd602eedf&_ss=r",img:"https://cdn.shopify.com/s/files/1/0761/3599/products/RGBControllerCroppedWebsite_medium.jpg?v=1605709083"}}},window.accentLightsProdsUrls=["/products/new-marine-accent-light","/products/new-marine-accent-light-rgbw","/products/new-marine-accent-light-black-housing","/products/new-led-off-road-rock-lights","/products/black-oak-led-dock-light-fld6","/products/black-oak-led-underwater-light-fl3","/products/black-oak-led-underwater-light-fl12","/products/black-oak-led-underwater-light-fl6","/products/33-36-foot-boat-led-lighting-kit-center-console-boat","/products/21-26-foot-boat-led-lighting-kit-center-console-boat","/products/27-32-foot-boat-led-lighting-kit-center-console-boat","/products/16-20-foot-boat-led-lighting-kit-center-console-boat,","/products/37-foot-larger-boat-led-lighting-kit-center-console-boat","/products/new-marine-flush-mount-spreader-light"];window.location.href;var e=a(".form-add-to-cart ").parent().parent();function t(e=null){var t=a("#productPrice-manual").find(".money").html().replace("$",""),i=a(".form-add-to-cart").find(".quantity").find(".qty"),o=a("#quantity").val();null!==e&&(e.hasClass("minus_btn")&&(o=++o),e.hasClass("minus_btn")&&(o=--o)),o=+t*+o,0<a(".test-total").length&&a(".test-total").remove(),i.append("<div class='test-total'><span>Total price :</span><span class='total-sum'>$"+o+"</span></div>")}function i(e){var i='<div class="selector-wrapper"><div class="dropdown"><div class="dropdown__head">Mounting and Accessories</div><div class="dropdown__item_wrap">';a.each(e,function(e,t){i+='<div class="dropdown__item">',i+='<div><img src="'+t.img+'" alt="" />',i+="<label>"+t.name+"</label></div>",i+='<div><span class="money">&#36;'+t.price+'</span><input data-url="'+t.url+'" type="button" class="add-to-cart" value="+Add"></div>',i+="</div>"}),i+="</div></div></div>",a("#addToCartForm .selector-wrapper").first().append(i)}window.abtest_interval=setInterval(function(){var e;a("body").find("#productPrice-manual .off-15").length<1?a("#productPrice-manual").length&&-1<a("#productPrice-manual").text().indexOf("Free Shipping")&&(e=(e=a("#productPrice-manual").html()).replace(RegExp(" &amp; Free Shipping","g"),'<span class="free-shipping">Free Shipping</span>'),a("#productPrice-manual").html(e),a("#productPrice-manual").append('<p class="ready-to">Ready to ship</p>'),a("#productPrice-manual").append('<div class="off-15">15% off</div>')):clearInterval(window.abtest_interval)}),-1<accentLightsProdsUrls.indexOf(window.location.pathname)&&i(additionalProducts.rbg_controller),a(".qty").find("a").on("click",function(){t(a(this))}),a(document).on("click",".info-window .close",function(){a("body").find(".t-overlay").remove(),a(this).closest(".info-window").remove()}),a(document).on("click",".t-overlay",function(){a(this).remove(),a("body").find(".info-window").remove()}),a(document).on("click",".selector-wrapper .dropdown__head",function(){a(this).closest(".dropdown").toggleClass("is-show")}),a(document).on("click",".dropdown__item_wrap .dropdown__item .add-to-cart",function(){a(this).closest(".dropdown__item").addClass("active")}),a(".dropdown__item").find("add-to-cart").on("click",function(){var e;e=window.location.origin+a(this).data("url"),a.ajax({url:e,type:"GET",dataType:"html"}).done(function(e){e=a(e).find(".form-add-to-cart").serialize(),a.ajax({url:"https://www.blackoakled.com//cart/add",type:"POST",data:e,dataType:"html"}).done(function(e){alert("Psoduct in cart!!!!!")})})});var o="<span>Combo</span> - Best of both worlds, the floods sit on the outside giving you the side blow-out of light while still shooting far with the Spots piercing far ahead.",r="<span>Spot</span> - Great for those who need those piercing beams of light that seem to travel forever.",s="<span>Flood</span> - Wide-spread light to illuminate the side and front of your rig. Perfect for those who want a wider cone of light than a spot.",n="Our <span>5W</span> LEDs produce over 75% better light output than our <span>3W</span> and are way more efficient, keeping the power draw very low.",d={total_wattage:'<span class="green">Total Wattage</span>Is the power produced or used per second',amp_draw:'<span class="green">Amp Draw</span>Amp Draw Correlates to the amount of amperage drawn from a 12V, 24V or 36V system.',weight:'<span class="green">Weight</span>Total weight of the product.',raw_lumens:'<span class="green">Raw Lumens</span>This is a measure of the theoretical output of a light.',guarantee:'<span class="green">Guarantee</span>Provide a formal assurance, especially that certain conditions will be fulfilled relating to a product, service, or transaction.',ip_rating:'<span class="green">IP Rating</span>s the measurement of protection that LED light will have against liquid (water) and solid (dirt, dust etc.) objects.',e_mark:'<span class="green">E-mark</span>The e-mark is an EU mark for approved vehicles and vehicle components sold into the EU.'};a(document).on("click",".opIn",function(){var e=a(this).parents("tr").data("text"),e="<span class='test-message'>"+d[e]+"<span class='close'></span></span>";a(".test-message").remove(),a(this).append(e)});var p,l,c=a(".single-option-selector");0<c.length&&c.parent(".selector-wrapper").prepend('<a class="open-info">What’s the difference?</a>'),a(".open-info").on("click",function(){var e='<div class="t-overlay"></div><div class="info-window"><div class="w-title"><h3>What’s the difference?</h3><span class="close"></span></div><div class="w-body">';e+="Combo"===a(this).parent().find(c).val()?'<div class="w-item">'+o+'</div><div class="w-item">'+r+'</div><div class="w-item">'+s+"</div>":'<div class="w-item single-item">'+n+"</div>",e+="</div></div>",a(this).parent().append(e)}),t(),(-1<a(".selector-wrapper option").text().indexOf("3")||-1<a(".selector-wrapper option").text().indexOf("5"))&&e.append('<div class="info-performance info-wrap"><h3 class="per-title">Max performance with  Combo optics and 5W</h3><div class="info-cont"><div class="col"><img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Truck_Overhead_Blue_1024x1024.jpg?v=1572884778" alt="Flood lights"><span class="t-combo">COMBO</span></div><div class="col"><div class="sub-title">COMBO with 5W provides:</div><div class="green">Over 75 % more Light & Visibility</div><div class="visibility">Visibility up to <b>780m</b></div><div class="ul-title">Best for:</div><ul><li>- Marine</li><li>- Hunting</li><li>- Off-road</li><li>- Heavy Machinery</li><li>- Military</li></ul><button class="zoom">Click to zoom</button></div></div></div>'),l=a("body").find(".info-performance .info-cont img").attr("src"),a(document).on("click",".info-performance .info-cont .zoom",function(){a("body").find(".zoomModal").addClass("is-active")}),a(document).on("click",".zoomModal .close",function(){a("body").find(".zoomModal").removeClass("is-active")}),e.append('<div id="zoomModal" class="modal zoomModal"><span class="close">&times;</span><img src="'+l+'" class="modal-content" id="img01"></div>'),e.append('<div class="features-wrap"><div class="compatibility-section"><h3 class="com-title">Compatibility</h3><a href="tel:8003481287" class="link">Call us 800-348-1287 to assist<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0388 3.15029L11.4287 2.70596C12.7333 2.29004 14.1244 2.963 14.6837 4.27792L15.7932 6.89742C16.2763 8.03796 16.0089 9.38 15.1293 10.2144L12.6829 12.5368C12.8327 13.9267 13.3003 15.2945 14.0831 16.6405C14.8268 17.9427 15.8243 19.0825 17.0164 19.9923L19.955 19.0107C21.0697 18.64 22.2826 19.0675 22.9646 20.0711L24.5572 22.409C25.3516 23.5767 25.2095 25.1861 24.2239 26.1755L23.1674 27.236C22.1159 28.2913 20.6137 28.6749 19.2252 28.2409C15.9456 27.2179 12.9309 24.1812 10.1796 19.1308C7.42452 14.0726 6.45189 9.77913 7.26306 6.25546C7.60406 4.77263 8.65935 3.59075 10.0388 3.15029Z" fill="#096DD9"/></svg></a></div><h3 class="features-title">Key Features</h3><div class="features-section"><div class="feature"><div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-1.svg" alt="features" /></div><div class="desc">50,000+ Hour Lifespan</div></div><div class="feature"><div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-2.svg" alt="features" /></div><div class="desc">9-36  V DC Voltage Range</div></div><div class="feature"><div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-3.png" alt="features" /></div><div class="desc">Durable UV Polyester Poweder Coat</div></div><div class="feature"><div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-4.svg" alt="features" /></div><div class="desc">Integrated Thermal Mgmt. System</div></div><div class="feature"><div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-5.svg" alt="features" /></div><div class="desc">Impact Resistant Polycarbonate Lens</div></div><div class="feature"><div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/features-6.svg" alt="features" /></div><div class="desc">IP68 & IP69 Compliant Dust / Water Ingress</div></div></div><div class="features-section-2"><div class="feature"><div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/production-1.svg" alt="features" /></div><div class="desc">Owned and operated in Sarasota FL</div></div><div class="feature"><div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/production-2.svg" alt="features" /></div><div class="desc">Limited Lifetime Warranty</div></div><div class="feature"><div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/production-3.svg" alt="features" /></div><div class="desc">Fast and Free Shipping</div></div><div class="feature"><div class="icon"><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/production-4.svg" alt="features" /></div><div class="desc">In Stock and Ready to Ship</div></div></div></div>'),e.append('<div class="info-wrap specifications-wrap"><h3 class="t-title">Specifications</h3><div class="img-wrap"><img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Heyrex-Seal-on-Black-Oak-Pro-Series-2.0_600x600.jpg?v=1572883692" alt="Premium Hardware"><img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Heyrex-Seal-on-Black-Oak-Pro-Series-2.0_600x600.jpg?v=1572883692" alt="Premium Hardware"></div><div class="tbl-wrap"><table width="100%" cellpadding="4"><tr class="t-head"><th></th><th>5 Watt / Osram</th><th>3 Watt / Osram</th></tr><tr data-text="total_wattage"><td class="bolt">Total Wattage<div class="opIn">!</div></td><td>100w</td><td>50w</td></tr><tr data-text="amp_draw"><td class="bolt">Amp Draw <div class="opIn">!</div></td><td>4.1</td><td>4</td></tr><tr data-text="led_quantity"><td class="bolt">Led Quantity <div class="opIn">!</div></td><td>20</td><td>20</td></tr><tr data-text="weight"><td class="bolt">Weight <div class="opIn">!</div></td><td>6.6</td><td>6.6</td></tr><tr data-text="raw_lumens"><td class="bolt">Raw Lumens <div class="opIn">!</div></td><td>Lifetime</td><td>Lifetime</td></tr><tr data-text="guarantee"><td class="bolt">Guarantee <div class="opIn">!</div></td><td>30 Day Money Back</td><td>30 Day Money Back</td></tr><tr data-text="ip_rating"><td class="bolt">IP Rating <div class="opIn">!</div></td><td>IP69K</td><td>IP69K</td></tr><tr data-text="e_mark"><td class="bolt">E-mark <div class="opIn">!</div></td><td>E9</td><td>E9</td></tr></table></div><div>Our lights are built to run off of 9-36V DC, but we offer power converters for 110V AC</div><div class="buttons"><a href="">Download manual and guide <img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/ico-1.svg" alt="ico"></a><a href="">QnA on specs, mount, wiring <img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/ico-2.svg" alt="ico"></a></div></div>'),e.append('<div class="other_options"><h3 class="t-title">See other options</h3><div class="other_holder"><div class="item_wrap"><a class="item" href="https://www.blackoakled.com/collections/20-inch-led-light-bars/20-Inch">20 inch double row</a><a class="item" href="https://www.blackoakled.com/collections/30-inch-led-light-bars/30-Inch">30 inch double row</a><a class="item" href="https://www.blackoakled.com/collections/40-inch-led-light-bars/40-Inch">40 inch double row</a></div></div></div></div>'),e.append('<div class="form_wrap"><h4 class="t-title">We are here to assist in choosing the best fit </h4><div class="call-us"><a href="tel:8003481287"><span>Call us <b>800.348.1287</b> to assist </span><img src="https://master.d1b4uiycaor7je.amplifyapp.com/blackoakled/experiment_tech_spec_pdp_improvements_mobile/src/img/ico-3.svg" alt="ico"></a></div><div class="form-title">Have a question?</div><form class="question-form"><textarea name="question-body" placeholder="Type here and we’ll contact you the same day" required></textarea><input type="email" name="question-email" placeholder="Email to respond" required><button class="btn btn-success" type="submit" value="Submit">Submit</button></form></div>'),e.append('<div class="package-wrap"><h3 class="package-title">What is included in the package?</h3><ul class="package-items"><li>Mounting Hardware</li><li>Black Powder Coated, L-Shape</li><li>Brackets</li><li>Dash Controller & Under Dash Module with Wiring Harness and Hardware</li></ul><h3 class="separately-title">SOLD SEPARATELY</h3><ul class="separately-items"><li>Underside Low-Profile Mounts</li><li>Light Covers</li></ul></div>'),(p=a("#tabs-2")).siblings(".tabs-3").remove(),p.siblings(".tabs-4").remove(),p.siblings(".tabs-5").remove(),a(".prod_review").remove(),a(".related_prod").parents(".product_c").parent().parent().remove(),p.html(""),p.append('<h3>Overview</h3><div class="text">This light has been upgraded to the New Pro Series 2.0, see below for all the new features.</div><div class="slogan"><span>From Alaska to the Equator - </span><span class="green">It just works!</span></div><div class="pre-galery">Very Impressed<div class="author-comment">Patti H. on Feb 15, 2021</div></div><div class="imgs-wrap"><div class="item_wrap"><img src="//cdn.shopify.com/s/files/1/0761/3599/files/LightbarResized.png?8312169795570906311" alt=""></div></div><div class="comment-txt">We were like, “wow!” We could not believe how bright the light is. We have the light on our defender which we use to plow snow and also to hunt with.</div><div class="text">Versatility and compact power is what we strived for when constructing the 10" LED light bar, letting you mount this baby right out of the box with sturdy mounting brackets, stainless hardware and wiring harness included! Made only with materials at the forefront of the market, the 10" LED light bar showcases an IP69K rating allowing you to completely pound it with water, ice, saltwater, and especially sheer brute force. With a total height of 3.3 inches, this dual row off-road flood light fits just about anywhere while putting out a crazy amount of luminous light!</div><div class="imgs-wrap2"><div class="col"><img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Screen_Shot_2019-11-04_at_11.13.35_AM_b405a04d-5d33-4787-9e94-55712a75c201_480x480.png?v=1572884351" alt="Baricoat Ceramc Coating"></div><div class="col"><img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Screen_Shot_2019-11-04_at_11.14.31_AM_6a2f5677-8d95-4642-bdef-b7803aa9d079_480x480.png?v=1572885960" alt="Water Proof"></div></div><div class="sub-title">4x Stronger with Dynamax</div><div class="text">“With our heavy duty Dynamax housing, each light is built to withstand the harshest beating possible. We made sure to do extensive testing before releasing our lights to the public. Our testing included; multiple hits with a baseball bat, throwing the light into the air, and using the light bar as a ramp for our truck. Whether you’re in rough seas offshore or battling some tough terrain off-road, we wanted to make sure our lights could withstand anything you put them through.”</div><h3>Multi-Mount 316 Brackets</h3><div class="imgs-wrap2"><div class="col"><img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Outter-mount_480x480.jpg?v=1572887360" alt="Led"></div><div class="col"><img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Undermount_480x480.jpg?v=1572887236" alt="Lights"></div></div><div class="sub-tile2">More Security</div><div class="text">“New upgraded bolts with <span class="green">stronger threads for extra protection.</span>We wanted to make sure our lights were as durable as possible down to each and every bolt. You never want to have a piece of equipment fail when you are out in the field, so we have increased the strength of <span class="green">even our smallest components to take this fear away.</span>”</div>'),a("body").append('<style>.variations .selector-wrapper>.selector-wrapper{display:flex;flex-wrap:wrap;align-items:center}.variations .selector-wrapper>.selector-wrapper label{order:1;width:calc(40% - 5px)}.variations .selector-wrapper>.selector-wrapper .open-info{order:2;color:#096dd9;font-size:15px;width:60%;text-align:right;cursor:pointer}.variations .selector-wrapper>.selector-wrapper .single-option-selector{order:3}.variations .selector-wrapper .selector-wrapper .dropdown{width:100%}.variations .selector-wrapper .selector-wrapper .dropdown.is-show .dropdown__item_wrap{display:block}.variations .selector-wrapper .selector-wrapper .dropdown.is-show .dropdown__head:after{transform:rotate(0)}.variations .selector-wrapper .selector-wrapper .dropdown .dropdown__item_wrap{display:none;margin:0 0 30px}.variations .selector-wrapper .selector-wrapper .dropdown .dropdown__head{color:#231f20;background:hsla(0,0%,100%,.09);border:1px solid #c4c4c4;border-radius:4px;font-weight:700;font-size:15px;line-height:18px;padding:13px 7px;margin:12px 0;position:relative}.variations .selector-wrapper .selector-wrapper .dropdown .dropdown__head:after{content:"";position:absolute;top:10px;right:11px;height:23px;width:23px;transform:rotate(180deg);background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD6SURBVHgB1ZU9DoJAEIVnVwtLEgq04wgI9O4ROII3MJ4APIGlpdjZegMPQOFRSKiJzkRIjAacIWyiL9nszv58L5nszipjjFNV1R4AEmwOjKO8ruvtxHXdAwZrbDMYT4HWeq6iKLqDHZUa7MmxCQcRXCl1k+xnwxG8K4piST33DAvegDMaU881+ApvwXEcG4rxdiVcA80Bh2GYYpg20xuKOQZ98LwFIyR7M81aAwxPXYApdMtgCo7wfL0fIgNc93G4ggFwvwv8ot7133lEfwsX13ppyaXaEnA3S9PCBg+Bi0TwEiyJ4Bewo3zied4VP9MFCPPZI8rEmX7/B7rmRIas1GKyAAAAAElFTkSuQmCC")}.variations .selector-wrapper .selector-wrapper .dropdown .dropdown__item{background:hsla(0,0%,100%,.09);border:1px solid #096dd9;border-radius:4px;padding:10px 16px 10px 8px;margin-bottom:16px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.variations .selector-wrapper .selector-wrapper .dropdown .dropdown__item.active{background:rgba(9,109,217,.09)}.variations .selector-wrapper .selector-wrapper .dropdown .dropdown__item.active .add-to-cart{background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0yMC45NzEgMTguMTg0N0wyMi44NTQxIDEwLjE3NjlDMjIuOTg4IDkuNTA0NjggMjIuNTQwMSA4Ljg2NDU4IDIxLjkzNTggOC44NjQ1OEg2LjUyMzM3TDYuMTYzNyA2Ljg1ODkzQzYuMDc0MDggNi4zNTkwMSA1LjY4ODQ0IDYgNS4yNDEwNyA2SDEuMjE3OTJDMC42OTc4MDkgNiAwLjI3NjE4NCA2LjQ4MDk0IDAuMjc2MTg0IDcuMDc0MjJWNy43OTAzNkMwLjI3NjE4NCA4LjM4MzY1IDAuNjk3ODA5IDguODY0NTggMS4yMTc5MiA4Ljg2NDU4SDMuOTYwMDdMNi43MTY1NCAyNC4yMzY0QzYuMDU3MDkgMjQuNjY5IDUuNjEyNzEgMjUuNDgwMiA1LjYxMjcxIDI2LjQxMDJDNS42MTI3MSAyNy43OTQ1IDYuNTk2NTEgMjguOTE2NyA3LjgxMDEgMjguOTE2N0M5LjAyMzY5IDI4LjkxNjcgMTAuMDA3NSAyNy43OTQ1IDEwLjAwNzUgMjYuNDEwMkMxMC4wMDc1IDI1LjcwODYgOS43NTQ1MSAyNS4wNzQ4IDkuMzQ3MzMgMjQuNjE5OEgxNy41NzM3QzE3LjE2NjYgMjUuMDc0OCAxNi45MTM2IDI1LjcwODYgMTYuOTEzNiAyNi40MTAyQzE2LjkxMzYgMjcuNzk0NSAxNy44OTc0IDI4LjkxNjcgMTkuMTExIDI4LjkxNjdDMjAuMzI0NiAyOC45MTY3IDIxLjMwODQgMjcuNzk0NSAyMS4zMDg0IDI2LjQxMDJDMjEuMzA4NCAyNS40MTc4IDIwLjgwMjYgMjQuNTYwMiAyMC4wNjkyIDI0LjE1NDFMMjAuMjg1NyAyMy4wNjc1QzIwLjQxOTYgMjIuMzk1MyAxOS45NzE3IDIxLjc1NTIgMTkuMzY3NCAyMS43NTUySDguODM0OTFMOC41NDk5NSAxOS4wMjA4SDIwLjA1MjdDMjAuNDkyNCAxOS4wMjA4IDIwLjg3MzYgMTguNjczOCAyMC45NzEgMTguMTg0N1oiIGZpbGw9IiMwOTZERDkiLz4KPC9nPgo8cGF0aCBkPSJNMjMuMzMgMEMyMC41ODgzIDAgMTguMzU3NyAyLjY5MTU0IDE4LjM1NzcgNS45OTk5N0MxOC4zNTc3IDkuMzA4MzkgMjAuNTg4MyAxMiAyMy4zMyAxMkMyNi4wNzE4IDEyIDI4LjMwMjQgOS4zMDgzOSAyOC4zMDI0IDUuOTk5OTdDMjguMzAyNCAyLjY5MTU0IDI2LjA3MTggMCAyMy4zMyAwWk0yNi4xODUzIDQuOTg2NTJMMjMuMDYxNCA4Ljc1NkMyMi45Mjg1IDguOTE2MjggMjIuNzUyIDkuMDA0NDkgMjIuNTY0MSA5LjAwNDQ5QzIyLjM3NjMgOS4wMDQ0OSAyMi4xOTk4IDguOTE2MjggMjIuMDY2OSA4Ljc1NkwyMC40NzQ4IDYuODM0ODVDMjAuMzQyIDYuNjc0NTggMjAuMjY4OCA2LjQ2MTUyIDIwLjI2ODggNi4yMzQ4OEMyMC4yNjg4IDYuMDA4MTcgMjAuMzQyIDUuNzk1MTEgMjAuNDc0OCA1LjYzNDg0QzIwLjYwNzYgNS40NzQ1NiAyMC43ODQxIDUuMzg2MjggMjAuOTcyIDUuMzg2MjhDMjEuMTU5OSA1LjM4NjI4IDIxLjMzNjUgNS40NzQ1NiAyMS40NjkyIDUuNjM0OUwyMi41NjQxIDYuOTU1OTRMMjUuMTkwNyAzLjc4NjVDMjUuMzIzNSAzLjYyNjIzIDI1LjUwMDEgMy41MzgwMSAyNS42ODc5IDMuNTM4MDFDMjUuODc1OCAzLjUzODAxIDI2LjA1MjMgMy42MjYyMyAyNi4xODUyIDMuNzg2NUMyNi40NTk0IDQuMTE3NDUgMjYuNDU5NCA0LjY1NTcgMjYuMTg1MyA0Ljk4NjUyWiIgZmlsbD0iIzdDQjMwNSIvPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIyMi42MDE3IiBoZWlnaHQ9IjIyLjkxNjciIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjI3NjE4NCA2KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");background-repeat:no-repeat;width:28px;height:38px;text-indent:-999px}.variations .selector-wrapper .selector-wrapper .dropdown img{width:50px;height:50px;border-radius:4px;margin-right:9px}.variations .selector-wrapper .selector-wrapper .dropdown label{font-size:15px;font-weight:400;line-height:18px;width:auto;order:unset}.variations .selector-wrapper .selector-wrapper .dropdown .money{display:inline-block;color:#b00;font-weight:700;font-size:15px;line-height:18px;margin-right:20px;margin-left:30px}.variations .selector-wrapper .selector-wrapper .dropdown .add-to-cart{font-weight:700;font-size:15px;line-height:18px;color:#096dd9;background:transparent;border:0}.info-window{position:fixed;top:20%;background:#fff;box-shadow:0 4px 21px rgba(0,0,0,.07);border-radius:6px;width:calc(100% - 32px);left:0;right:0;margin:auto;overflow:hidden;z-index:99}.info-window .w-title{background:#333;padding:16px 0 10px 18px}.info-window .w-title h3{color:#fff;font-weight:700;font-size:15px;line-height:18px}.info-window .close{position:absolute;top:13px;right:16px;height:17px;width:17px;cursor:pointer;opacity:1;background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguOTk5OTggMC41OTk2MDlDNi43NzIxNiAwLjU5OTYwOSA0LjYzNTU4IDEuNDg0NjEgMy4wNjAyOCAzLjA1OTkxQzEuNDg0OTcgNC42MzUyMiAwLjU5OTk3NiA2Ljc3MTc5IDAuNTk5OTc2IDguOTk5NjFDMC41OTk5NzYgMTEuMjI3NCAxLjQ4NDk3IDEzLjM2NCAzLjA2MDI4IDE0LjkzOTNDNC42MzU1OCAxNi41MTQ2IDYuNzcyMTYgMTcuMzk5NiA4Ljk5OTk4IDE3LjM5OTZDMTEuMjI3OCAxNy4zOTk2IDEzLjM2NDQgMTYuNTE0NiAxNC45Mzk3IDE0LjkzOTNDMTYuNTE1IDEzLjM2NCAxNy40IDExLjIyNzQgMTcuNCA4Ljk5OTYxQzE3LjQgNi43NzE3OSAxNi41MTUgNC42MzUyMiAxNC45Mzk3IDMuMDU5OTFDMTMuMzY0NCAxLjQ4NDYxIDExLjIyNzggMC41OTk2MDkgOC45OTk5OCAwLjU5OTYwOVpNMTMuNzg5IDEyLjA2MDZMMTIuMDYgMTMuNzg5Nkw4Ljk5OTk4IDEwLjcyODZMNS45Mzg5OCAxMy43ODg2TDQuMjA5OTggMTIuMDU5Nkw3LjI3MTk4IDguOTk5NjFMNC4yMTA5OCA1LjkzODYxTDUuOTM5OTggNC4yMTA2MUw4Ljk5OTk4IDcuMjcwNjFMMTIuMDYxIDQuMjA5NjFMMTMuNzkgNS45Mzg2MUwxMC43MjggOC45OTk2MUwxMy43ODkgMTIuMDYwNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=")}.info-window .w-item{color:#000;font-size:16px;line-height:19px;border-bottom:1px solid #c4c4c4;padding:20px}.info-window .w-item:last-child{border-bottom:0;padding-bottom:30px}.info-window .w-item span{color:#7cb305;font-weight:700}.info-window .w-item.single-item{line-height:37px}.t-overlay{background:hsla(0,0%,9%,.39);position:fixed;top:0;right:0;bottom:0;left:0;height:100%;width:100%;z-index:98}.price .off-15{position:absolute;top:8px;right:7px;background:#a8071a;border-radius:3px;color:#fff;width:85px;height:35px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px}.price .free-shipping{border:1px solid #7cb305;border-radius:12px;font-weight:700;font-size:14px;line-height:16px;text-align:center;color:#333;padding:1px 6px;margin-left:3px}.price .ready-to{font-weight:700;font-size:13px;line-height:15px;color:#7cb305;position:absolute;right:7px;top:50px}.price .save{display:none}#content .pro_main_c .desc_blk .price .review_row{padding-top:20px;padding-bottom:0}.info-performance{border-top:1px solid #dfdfdf;border-bottom:1px solid #dfdfdf;margin:17px 0 0;padding:0 0 27px}.info-performance .per-title{font-weight:700;font-size:22px;line-height:26px;text-align:center;margin:12px 0 15px}.info-performance .info-cont{display:flex}.info-performance .info-cont .col{width:50%;position:relative}.info-performance .info-cont .col:first-child{display:flex;align-items:center;justify-content:center}.info-performance .info-cont .col .sub-title{font-weight:700;font-size:16px;line-height:19px;color:#231f20;margin:0 0 10px}.info-performance .info-cont .col .green{font-weight:700;font-size:16px;line-height:19px;color:#7cb305;margin:0 0 10px}.info-performance .info-cont .col .visibility{font-size:16px;line-height:19px;color:#231f20;margin:0 0 10px}.info-performance .info-cont .col .ul-title{font-weight:700}.info-performance .info-cont .col .ul-title,.info-performance .info-cont .col ul li{font-size:16px;line-height:19px;color:#231f20;margin:0 0 5px}.info-performance .info-cont img{transform:rotate(-90deg) translateX(0) translateY(0);width:284px}.info-performance .info-cont .t-combo{font-weight:700;font-size:14px;line-height:16px;color:#fff;position:absolute;top:36%;left:0;right:0;margin:0 auto;z-index:1;width:100%;text-align:center}.info-performance .info-cont .zoom{background:transparent;border:1px solid #dfdfdf;border-radius:6px;font-size:18px;line-height:21px;color:#096dd9;height:37px;width:160px;text-align:left;padding:0 8px}.info-performance .info-cont .zoom:before{content:"";display:inline-block;margin-right:11px;vertical-align:top;height:18px;width:18px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIASURBVHgBrVRLUuMwEO2WQoXMzCJHcDbDsJrhBuEEww0CWypUfAOSG4Qie+AGcALCCQgrfgt8BG8gJFhqumXZGOOkioJXpSpZbj29flI3QgV+hfdta6hDQG3+DGQNESZAOAFNZ0/DtVNYACx+rIbXARp9BCnRMkSk7ebzcD0q/1DZZGX37h8adenJYiI74E2t6eEaykgMbhDYHSET1RL7k/dUKkyVCRk0geigXqv342ErrpLWDB+as2TWZw967mBtN4pKa47VqPOMbDr6E05hMfxBYaN7I8b2UotgM0/5R/d2C1LjI1FWJmjs3T7IKK/72FgsWu1et3NCi/hfJoSwKM3Ajw9K+eYPHAnqTk6oiJyxOsEr+CSsssdOTOFVIKdDMpGbzBZ9isECnohjW4XYd/sVfDPkliNR0+SnE/vrX6agCHmHlhMGqSIPxcZeyGRu1TZ8EkaD8x+lJDNCa72xBD15tBX7Ij/eQWIRaF/mCdFZTvg8Wh/zGWOJmdHLfnmjpF+0IIOPDeSw+eitWbhKIW12XOlZChu9O6jjymBp6QkZx6aZufrOkRstzaGmKS1BPpUfa58NuXoc/p54omBukw4ThD4mt6TYeSral6vrAJYCx0RmgKiOsrQzUqwKl/q2AFtKwV++rKxFcTCOLZmT1PcPAhwpwhdRJv0yYYkUXgFyvgg+AeJAbAAAAABJRU5ErkJggg==")}.form-add-to-cart .mobile-only-show-block{display:none!important}.text-center.two-pic,.zoomModal{display:none}.zoomModal{position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background:hsla(0,0%,9%,.39)}.zoomModal.is-active{display:block}.zoomModal img{height:300px;object-fit:contain;transform:rotate(-90deg) translateX(-75px) translateY(0);width:100%}.zoomModal .close{position:absolute;top:70px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s;opacity:1}.iz{position:absolute;right:16px;display:block;bottom:16px;box-sizing:border-box;cursor:pointer}.compatibility-section{border:1px solid #dfdfdf;border-radius:6px;padding:22px 17px 25px;margin:28px 0 33px}.compatibility-section .com-title{font-weight:700;font-size:22px;color:#000;margin-bottom:27px;text-align:center}.compatibility-section .link{border:1px solid #096dd9;border-radius:6px;color:#096dd9;font-weight:700;font-size:16px;padding:9px 17px;display:flex;align-items:center;justify-content:space-between}.features-wrap .features-title{text-align:center;margin-bottom:30px}.features-wrap .features-section{display:flex;flex-wrap:wrap;padding-bottom:25px;border-bottom:1px solid #dfdfdf}.features-wrap .features-section .feature{width:33.33%;text-align:center;margin-bottom:27px;padding:0 10px}.features-wrap .features-section .icon{margin-bottom:9px;height:60px;display:flex;align-items:flex-end;justify-content:center}.features-wrap .features-section .icon img{max-width:100%;max-height:100%}.features-wrap .features-section .desc{color:#5f6262;font-size:15px;line-height:18px}.features-wrap .features-section-2{padding:43px 0;border-bottom:1px solid #dfdfdf;font-size:20px;line-height:23px}.features-wrap .features-section-2 .feature{width:100%;display:flex;align-items:center;margin:0 0 18px}.features-wrap .features-section-2 .icon{margin-right:32px;display:flex;align-items:center;justify-content:center}.features-wrap .features-section-2 .icon img{max-width:100%}.tbl-wrap{padding-left:10%}.tbl-wrap table,.tbl-wrap td,.tbl-wrap th{border:1px solid #000;border-collapse:collapse}.tbl-wrap td,.tbl-wrap th{text-align:center;padding:10px}.tbl-wrap .t-head{background:#000;color:#fff}.tbl-wrap .t-head,.tbl-wrap .t-head th{border:1px solid #fff;border-collapse:collapse}.tbl-wrap .bolt{position:relative;font-weight:700}.tbl-wrap .bolt .opIn{left:-33%;display:block;width:18px;height:18px;border-radius:50%;background:#029402;color:#fff}.tbl-wrap .bolt .opIn,.tbl-wrap .bolt .opIn .test-message{position:absolute;top:50%;box-sizing:border-box;transform:translateY(-50%)}.tbl-wrap .bolt .opIn .test-message{border:1px solid green;left:40px;color:#000;background:#fff;width:85vw;padding:12px;text-align:left;font-size:16px;line-height:19px}.tbl-wrap .bolt .opIn .test-message .green{display:block;color:#029402}.specifications-wrap .t-title{text-align:center;margin:40px 0 18px}.specifications-wrap .img-wrap{text-align:center}.specifications-wrap .img-wrap img{display:inline-block;width:100%;height:auto!important;max-width:258px;border:1px solid #dfdfdf;border-radius:6px;padding:15px;margin-bottom:24px}.specifications-wrap .buttons{margin:30px 0}.specifications-wrap .buttons a{border:1px solid #096dd9;border-radius:6px;color:#096dd9;font-weight:700;font-size:16px;line-height:19px;padding:10px 30px 10px 18px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;width:100%}.other_options .t-title{text-align:center}.other_options .other_holder{overflow-x:scroll;margin-right:-15px;margin-top:17px;margin-bottom:32px}.other_options .item_wrap{display:flex;width:410px;overflow-x:auto}.other_options .item_wrap .item{color:#096dd9;font-size:16px;background:#fafafa;border:1px solid #096dd9;box-sizing:border-box;border-radius:6px;width:123px;height:62px;display:flex;align-items:center;justify-content:center;text-align:center;padding:0 10px;margin-right:11px}.form_wrap .t-title{color:#333;font-weight:700;font-size:16px;line-height:19px;text-align:center;margin:32px 35px 14px}.form_wrap .call-us{margin:0 0 32px}.form_wrap .call-us a{border:1px solid #333;border-radius:6px;width:100%;display:flex;align-items:center;justify-content:space-between;height:50px;padding:0 15px}.form_wrap .call-us a b{font-weight:700}.form_wrap .form-title{display:inline-block;background:#333;border-radius:6px 6px 0 0;font-weight:700;font-size:16px;line-height:19px;color:#fff;padding:9px 10px 7px}#content .form_wrap{border-bottom:1px solid #dfdfdf;padding-bottom:30px;margin:0 0 30px}#content .form_wrap .question-form textarea{border:1px solid #333;border-top-left-radius:0;border-radius:0 6px 6px 6px;min-height:91px;height:auto;font-size:16px;line-height:19px;color:#575757;margin:0 0 11px}#content .form_wrap .question-form input{border:1px solid #333;border-radius:6px;width:100%;height:42px;padding:0 14px;font-size:16px;line-height:19px;color:#575757;margin:0 0 11px}#content .form_wrap .question-form .btn-success{background:#5b9400;border:1px solid #c4c4c4;border-radius:6px;font-weight:700;font-size:16px;line-height:19px;color:#fff}.package-wrap{border-bottom:1px solid #dfdfdf;padding-bottom:30px;margin:0}.package-wrap .package-title{font-weight:700;font-size:18px;line-height:21px;text-transform:uppercase;color:#5b9400;margin:0 0 15px}.package-wrap .package-items li{color:#096dd9;font-size:16px;line-height:36px;padding-left:18px;position:relative}.package-wrap .package-items li:before{content:"";background:#096dd9;border-radius:50%;width:8px;height:8px;display:inline-block;position:absolute;left:0;top:13px}.package-wrap .separately-title{font-weight:700;font-size:18px;line-height:36px;color:#5b9400;margin:0 0 15px}.package-wrap .separately-items li{color:#000;font-size:16px;line-height:36px;padding-left:18px;position:relative}.package-wrap .separately-items li:before{content:"";background:#000;border-radius:50%;width:8px;height:8px;display:inline-block;position:absolute;left:0;top:13px}.no-right-gap.items-info{display:none}.prod_desc .description#tabs>div{border:0!important;padding:0!important}.prod_desc .description#tabs>div>h3{text-align:center;color:#333;font-weight:700;font-size:22px;line-height:26px;margin:0 0 15px}.prod_desc .description#tabs>div .text{color:#333;font-size:16px;line-height:22px;margin-bottom:42px}.prod_desc .description#tabs>div .slogan{font-weight:700;font-size:18px;line-height:20px;margin:0 0 21px}.prod_desc .description#tabs>div .slogan .green{color:#5b9400}.prod_desc .description#tabs>div .pre-galery{font-size:16px;line-height:24px}.prod_desc .description#tabs>div .pre-galery .author-comment{font-size:13px;color:#5b9400}.prod_desc .description#tabs>div .imgs-wrap{overflow-x:scroll;margin-right:-15px}.prod_desc .description#tabs>div .imgs-wrap .item_wrap{overflow-x:auto}.prod_desc .description#tabs>div .imgs-wrap .item_wrap img{height:220px!important;max-width:none!important;width:auto}.prod_desc .description#tabs>div .comment-txt{margin:24px 0;background:rgba(91,148,0,.2);border-radius:6px;padding:24px 30px;color:#231f20;font-size:20px;line-height:28px;font-style:italic}.prod_desc .description#tabs>div .imgs-wrap2{display:flex;margin:0 -10px}.prod_desc .description#tabs>div .imgs-wrap2 .col{width:50%;padding:0 10px}.prod_desc .description#tabs>div .sub-title{font-size:20px;line-height:23px;text-align:center;color:#231f20;margin:45px auto 14px;max-width:170px}.prod_desc .description#tabs>div .sub-tile2{font-size:28px;line-height:20px;color:#333;margin-bottom:20px}.prod_desc .description#tabs>div .green{color:#5b9400}.prod_desc .description#tabs .ui-tabs-nav{display:none}</style>')}window.language_abtest={some_slug:"Lorem Ipsum"},!window.jQuery||1.1<parseFloat(window.jQuery.fn.jquery)?abjql(function(){jQuery(function(e){abjqlr(e)})}):jQuery(function(e){abjqlr(e)});