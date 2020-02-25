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
    $(".options-list__item.grid__cell.grid.enabled-item").click();
    $(".rodal").css({"opacity":"0", "z-index":"-1"});
  
    $(document).on("click", ".rodal .rodal-close", function(event) {
        $(".options-list__item.grid__cell.grid.enabled-item").click();
        $(".rodal").css({"opacity":"0", "z-index":"-1"});
        $(".page-container").removeClass('blurred');
    });

    $(document).on("click", ".page-container.blurred.product-page", function() {
        $(".options-list__item.grid__cell.grid.enabled-item").click();
        $(".rodal").css({"opacity":"0", "z-index":"-1"});
        $(".page-container").removeClass('blurred');
    });

    function show_ms(){
        if ($('.options-list__item.enabled-item').length) {

            var cartItems = $(".rodal .cart").html();

            var $outhtml;
            $outhtml  = '<div class="ex-rodal rodal">';
            $outhtml +=   '<div class="rodal-mask"></div>';
            $outhtml +=   '<div class="rodal-dialog cart-modal-container">';
            $outhtml +=   '<span class="ex-rodal-close"></span>';
            $outhtml +=   '<h5 class="ex-title">Эти товары почти Ваши! Остался всего один шаг.</h5>';

            $outhtml +=   '<div class="cart">'
            $outhtml +=     '<div class="ex-alert">На складе осталось всего несколько единиц товаров из Вашей корзины!</div>';

            $outhtml +=     '<div class="ex-card-item">'+ cartItems +'</div>';

            $outhtml +=     '<span class="ex-information-row"> Мы не можем гарантировать Вам наличие товара, если вы покинете сайт не завершив покупку! </span>';
            $outhtml +=     '<div class="ex-submit-buttons">';
            $outhtml +=         '<a class="continue-button" href="/checkout/">Купить в рассрочку/кредит</a>';
            $outhtml +=         '<a class="continue-button" href="/checkout/">Завершить заказ</a>';
            $outhtml +=     '</div>'
            $outhtml +=   '</div>'

            $outhtml += '</div>';

            $('body').append($outhtml);

            $(".ex-rodal").addClass('show');
            $(".page-container").addClass('blurred');

            

            $(".ex-rodal .count-value").each(function() {
              $(this).prepend('х ');
            });

            $('.ex-rodal .goods-main-info-block .price').each(function () {
              var oldPrice = $(this).find('.old-price span').html();
              if($(this).find('.old-price span').length > 0) {
                $(this).append('<div class="ex-old-price"><span>'+oldPrice+'</span> грн.</div>');
              }

              var price = $(this).find('.number').html();
              $(this).append('<div class="price-item"><span>'+price+'</span>грн.</div>');
            });
        } else {
            console.log('нет товаров в корзине!')
        }
    }


    $(document).mouseleave(function(e) {

        if(localStorage.getItem("reloadkey") !== "1") {
           localStorage.setItem("reloadkey", "1"); 
             console.log('localStorage is true');
        }

        if ($(".ex-rodal").length < 1) {
          // условие - есть ли этот товар в корзине
          var productName = $(".product-name h1").text();
          var productNameCard = $(".cart .good-code").text();
          for (var i=0; i<$(".cart .good-code").length; i++) {
              if (productName == $(".cart .good-code").eq(i).text()) {
                  console.log('true');

                  show_ms();

              } else {
                  console.log('false');
              }
          }
        }
    });
 
    $(document).on("click", ".ex-rodal .ex-rodal-close", function() {
        $(".ex-rodal").removeClass('show');
        $(".page-container").removeClass('blurred');
    });
    $(document).on("click", ".rodal-mask", function() {
        $(".ex-rodal").removeClass('show');
        $(".page-container").removeClass('blurred');
    });


  var styles = "<style>";
  styles += `
    .rodal.hidden {
        display: none;
    }
    .ex-rodal.show {
      display: block;
      opacity: 1 !important;
      z-index: 9999 !important;
    }
    .ex-rodal {
      display: none;
    }
    .ex-rodal .rodal-dialog.cart-modal-container {
      max-width: 800px;
    }
    .ex-rodal .ex-title {
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      margin-top: 22px;
      margin-bottom: 22px;
    }
    .ex-alert {
      text-align: center;
      border: 1px solid rgba(253, 0, 40, 0.4);
      color: #FD0028;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
      max-width: 404px;
      margin: 0 auto;
      padding: 14px 20px;
    }
    .ex-alert:before {
      content: '';
      display: block;
      margin: 0 auto 7px;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgBjZKxscIwEET39B04+6YDkzn7QwffHdABUAF0ACXQAS3QASWQktl0YDIYbIsVtgeNuGFQYs3d7j2tJYGyLNIEiJc17CiCbAWnMtREmrFFfOQnNRAOwR/3eagxYaFGNnemFx3/Ftks1ElYaJAVnVEq2qp+SGlwnQjKSiX6tAZ13gKLvpXWiFcqkcdJKTwMRk4cd3lR9IrK4DYeqD5xBi/b+5LEp4pHK3zZO3GgysRdj+nyYKMx7miSkMpB6+dOo3VHsXsndNcR9qjPI0cThcb6mfWL1vshVXhvVukxo5k2aEc07rS+tMgO2nE+LcsYz4x8zCv+rd9vTMx3jnDdPgCXQVYqmu6lbwAAAABJRU5ErkJggg==");
      height: 14px;
      width: 14px;
    }
    .ex-information-row {
      display: block;
      color: #FD0028;
      text-align: center;
      font-weight: 500;
      font-size: 13px;
      padding: 14px 15px;
      background: rgba(253, 0, 40, 0.08);
      border-radius: 4px;
    }
    .ex-submit-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .ex-rodal .cart .continue-button {
      width: calc(50% - 17px);
    }
    .ex-rodal .count-number .count-value {
      border: 0;
      color: #474A4B;
      font-weight: 500;
      font-size: 15px;
      min-width: 50px;
    }
    .ex-rodal .goods-tile-container .good-container .cart-goods-information .goods-main-info-block {
      align-items: flex-start;
    }
    .ex-rodal .goods-tile-container .good-container .cart-goods-information .price  {
      margin-top: 0;
    }
    .ex-rodal .count-number {
      align-items: flex-start;
    }
    .ex-rodal .goods-tile-container .good-container .cart-goods-information .goods-main-info-block .price {
      min-width: 100px;
    }
    .ex-rodal .goods-tile-container .good-container .cart-goods-information .goods-main-info-block .right-part .remove-container {
      margin-right: 0;
    }
    .ex-rodal .information-row,
    .ex-rodal .cart-information.total,
    .ex-rodal .cart-submit-buttons {
      display: none;
    }
    .ex-rodal .count-number .decrease,
    .ex-rodal .count-number .increase,
    .ex-rodal .remove-container .remove-good {
      display: none;
    }
    .ex-rodal .cart-goods-information .good-promo-tags {
      display: none;
    }
    .ex-rodal .goods-main-info-block .price > div {
      display: none;
    }
    .ex-rodal .goods-main-info-block .price > div.price-item {
      display: block;
    }
    .ex-rodal .goods-tile-container .good-container .cart-goods-information .goods-main-info-block .old-price {
      display: none;
    }
    .ex-rodal .goods-main-info-block .price .ex-old-price {
      display: block;
      font-size: 12px;
      color: #797b7c;
    }
    .ex-rodal .goods-main-info-block .price .ex-old-price span {
      text-decoration: line-through;
    }
    .ex-rodal-close {
      position: absolute;
      cursor: pointer;
      top: 16px;
      right: 16px;
      width: 20px;
      height: 20px;
      z-index: 10000;
    }
    .ex-rodal-close:after, 
    .ex-rodal-close:before {
      position: absolute;
      content: "";
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      margin-top: -1px;
      background: #ff0032;
      -webkit-transition: background .2s;
      transition: background .2s;
    }
    .ex-rodal-close:before {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .ex-rodal-close:after {
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    .ex-rodal .cart .goods-tile-container .good-container .cart-goods-information {
      width: calc(100% - 175px);
    }
  `;
  styles    += "</style>";
  jQuery('body').append(styles);
}