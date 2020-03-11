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

    window.dataLayer = window.dataLayer || [];
      dataLayer.push({
      'event': 'autoEvent',
      'eventCategory': 'Exp - Open PDP in new tab',
      'eventAction': 'Exp activated'
    });

    $('html').find(".tile-container .goods-item .goods-item-content .image-place").each(function() {

      window.dataLayer = window.dataLayer || [];
        dataLayer.push({
        'event': 'autoEvent',
        'eventCategory': 'Exp - Open PDP in new tab',
        'eventAction': 'Open PDP'
      });

      var href = $(this).find('a').attr('href');
      $(this).on("click", function(){
        window.open(href, '_blank');

        console.log('click on image');
      });
    });


    $('html').find(".tile-container .goods-item .goods-item-content .good-description .title").each(function() {

      window.dataLayer = window.dataLayer || [];
        dataLayer.push({
        'event': 'autoEvent',
        'eventCategory': 'Exp - Open PDP in new tab',
        'eventAction': 'Open PDP'
      });

      var href1 = $(this).find('a').attr('href');
      $(this).on("click", function(){
        window.open(href1, '_blank');

        console.log('click on title');
      });
    });


    $('html').find(".tile-container .goods-item .goods-item-content .tile-goods-rating .left-part").each(function() {

      window.dataLayer = window.dataLayer || [];
        dataLayer.push({
        'event': 'autoEvent',
        'eventCategory': 'Exp - Open PDP in new tab',
        'eventAction': 'Open PDP'
      });

      var href2 = $(this).find('a').attr('href');
      $(this).on("click", function(){
        window.open(href2, '_blank');

        console.log('click on left-part');
      });
    });


    $('html').find(".tile-container .goods-item .goods-item-content .tile-goods-rating .right-part").each(function() {

      window.dataLayer = window.dataLayer || [];
        dataLayer.push({
        'event': 'autoEvent',
        'eventCategory': 'Exp - Open PDP in new tab',
        'eventAction': 'Open PDP'
      });

      var href3 = $(this).find('a').attr('href');
      $(this).on("click", function(){
        window.open(href3, '_blank');

        console.log('click on right-part');
      });
    });


    $('html').find(".tile-container .goods-item .goods-item-content .goods-delivery-methods ul li").each(function() {

      window.dataLayer = window.dataLayer || [];
        dataLayer.push({
        'event': 'autoEvent',
        'eventCategory': 'Exp - Open PDP in new tab',
        'eventAction': 'Open PDP'
      });

      var href4 = $(this).find('a').attr('href');
      $(this).on("click", function(){
        window.open(href4, '_blank');

        console.log('click on delivery-methods')
      });
    }); 

    var styles = "<style>";
    styles += `
      .tile-container .goods-item .goods-item-content .image-place,
      .tile-container .goods-item .goods-item-content .good-description .title,
      .tile-container .goods-item .goods-item-content .tile-goods-rating .left-part,
      .tile-container .goods-item .goods-item-content .tile-goods-rating .right-part,
      .tile-container .goods-item .goods-item-content .goods-delivery-methods ul li {
        cursor: pointer;
      }
      .tile-container .goods-item .goods-item-content .image-place a,
      .tile-container .goods-item .goods-item-content .good-description .title a,
      .tile-container .goods-item .goods-item-content .tile-goods-rating .left-part a,
      .tile-container .goods-item .goods-item-content .tile-goods-rating .right-part a,
      .tile-container .goods-item .goods-item-content .goods-delivery-methods ul li a {
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