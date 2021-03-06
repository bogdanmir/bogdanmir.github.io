hj('trigger', 'open_pdp_in_new_tab');
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
  script.src = '//code.jquery.com/jquery-3.3.1.min.js';
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
  $(window).ready(function(){

    console.log('open_pdp_in_new_tab');

    window.dataLayer = window.dataLayer || [];
      dataLayer.push({
      'event': 'autoEvent',
      'eventCategory': 'Exp - Open PDP in new tab',
      'eventAction': 'Exp activated'
    });


    setTimeout(function(){
        // $('html').find(".tile-container .goods-item .goods-item-content .image-place").each(function() {
        // $(window).on("click", ".tile-container .goods-item .image-place", function() {
        $(document).on("click", ".tile-container .goods-item .image-place", function() {

          console.log('click on image');

          window.dataLayer = window.dataLayer || [];
            dataLayer.push({
            'event': 'autoEvent',
            'eventCategory': 'Exp - Open PDP in new tab',
            'eventAction': 'Open PDP'
          });

          var href = $(this).find('a').attr('href');
          // $(this).on("click", function(){
            window.open(href, '_blank');
          // });
        });


        // $('html').find(".tile-container .goods-item .goods-item-content .good-description .title").each(function() {
        $(document).on("click", ".tile-container .goods-item .goods-item-content .good-description .title", function() {

          window.dataLayer = window.dataLayer || [];
            dataLayer.push({
            'event': 'autoEvent',
            'eventCategory': 'Exp - Open PDP in new tab',
            'eventAction': 'Open PDP'
          });

          var href1 = $(this).find('a').attr('href');
          // $(this).on("click", function(){
            window.open(href1, '_blank');
            console.log('click on title');
          // });
        });


        // $('html').find(".tile-container .goods-item .goods-item-content .tile-goods-rating .left-part").each(function() {
        $(document).on("click", ".tile-container .goods-item .goods-item-content .tile-goods-rating .left-part", function() {

          window.dataLayer = window.dataLayer || [];
            dataLayer.push({
            'event': 'autoEvent',
            'eventCategory': 'Exp - Open PDP in new tab',
            'eventAction': 'Open PDP'
          });

          var href2 = $(this).find('a').attr('href');
          // $(this).on("click", function(){
            window.open(href2, '_blank');
            console.log('click on left-part');
          // });
        });


        // $('html').find(".tile-container .goods-item .goods-item-content .tile-goods-rating .right-part").each(function() {
        $(document).on("click", ".tile-container .goods-item .goods-item-content .tile-goods-rating .right-part", function() {

          window.dataLayer = window.dataLayer || [];
            dataLayer.push({
            'event': 'autoEvent',
            'eventCategory': 'Exp - Open PDP in new tab',
            'eventAction': 'Open PDP'
          });

          var href3 = $(this).find('a').attr('href');
          // $(this).on("click", function(){
            window.open(href3, '_blank');
            console.log('click on right-part');
          // });
        });


        // $('html').find(".tile-container .goods-item .goods-item-content .goods-delivery-methods ul li").each(function() {
        $(document).on("click", ".tile-container .goods-item .goods-item-content .goods-delivery-methods ul li", function() {

          window.dataLayer = window.dataLayer || [];
            dataLayer.push({
            'event': 'autoEvent',
            'eventCategory': 'Exp - Open PDP in new tab',
            'eventAction': 'Open PDP'
          });

          var href4 = $(this).find('a').attr('href');
          // $(this).on("click", function(){
            window.open(href4, '_blank');
            console.log('click on delivery-methods')
          // });
        });



        $(document).on("click", ".slick-slide .current-set-container .current-set .secondary-products .secondary-set-tile .image-place", function() {
          var href5 = $(this).find('a').attr('href');
          window.open(href5, '_blank');
          console.log('click on secondary-products image')
        });

        $(document).on("click", ".slick-slide .current-set-container .current-set .secondary-products .secondary-set-tile .product-description-information", function() {
          var href6 = $(this).find('a').attr('href');
          window.open(href6, '_blank');
          console.log('click on secondary-products title')
        });


    }, 500);


    var styles = "<style>";
    styles += `
      .tile-container .goods-item .goods-item-content .image-place,
      .tile-container .goods-item .goods-item-content .good-description .title,
      .tile-container .goods-item .goods-item-content .tile-goods-rating .left-part,
      .tile-container .goods-item .goods-item-content .tile-goods-rating .right-part,
      .tile-container .goods-item .goods-item-content .goods-delivery-methods ul li,
      .slick-slide .current-set-container .current-set .secondary-products .secondary-set-tile .image-place,
      .slick-slide .current-set-container .current-set .secondary-products .secondary-set-tile .product-description-information {
        cursor: pointer;
      }
      .tile-container .goods-item .goods-item-content .image-place a,
      .tile-container .goods-item .goods-item-content .good-description .title a,
      .tile-container .goods-item .goods-item-content .tile-goods-rating .left-part a,
      .tile-container .goods-item .goods-item-content .tile-goods-rating .right-part a,
      .tile-container .goods-item .goods-item-content .goods-delivery-methods ul li a,
      .slick-slide .current-set-container .current-set .secondary-products .secondary-set-tile .image-place a,
      .slick-slide .current-set-container .current-set .secondary-products .secondary-set-tile .product-description-information a {
        pointer-events: none;
      }
      .tile-container .goods-item a {
        pointer-events: none;
      }
    `;
    styles    += "</style>";
    $('body').after(styles);

  })
}