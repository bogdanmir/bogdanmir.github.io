// $(document).ready(function() {s
    // Start hotjar trigger
    try {
        hj('trigger', 'popup_unpaid_products');
        console.log('hotjar trigger run');
        var hj_trigger = 1;
    }
    catch(e) {}

    if (hj_trigger = 1) {
        console.log('hotjar trigger run2');
    } else {
        console.log('hotjar trigger failed');
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Exit intent popup for unpaid products',
            'eventAction': 'hotjar trigger failed'
        });
    }
    // End hotjar trigger








    function Safe_productToStorage(product_id){
        var storage = localStorage.getItem('expdps') || '[]';
        storage = JSON.parse(storage);
        if(!storage.includes(product_id)){
            storage.push(product_id);
        }
        var safe_storage = JSON.stringify(storage);
        localStorage.setItem('expdps',safe_storage);
    }
    function Is_productinStorage(product_id){
        if(product_id == null){
            return false;
        }
        var storage = localStorage.getItem('expdps') || '[]';
        storage = JSON.parse(storage);
        return storage.includes(product_id);
    }
    $(document).on('click','.add-to-cart',function (event) {
        if(window.meta.product.length >0 ){
            Safe_productToStorage(window.meta.product.id);
        }
    });



    var product_id = null;
    $(function() {
        try{
            if(window.meta.product.length >0 ){
                product_id = window.meta.product.id;
                console.log('product_id',product_id);
            }
        }catch(e){}
    });
    window.slide_items = new Array();
    function render_popup(){
        if($('.drawer .ajaxcart__product').length > 0){
            window.slide_items = new Array();
            $('.drawer .ajaxcart__product').each(function() {
                var item_img = $(this).find('.ajaxcart__product-image').html();
                var item_title = $(this).find('.ajaxcart__product-name').text();
                var item_price = $(this).find('.ajaxcart__price').text();

                var objdata = {
                    img: item_img,
                    title: item_title,
                    price: item_price,
                };
                window.slide_items.push(objdata);
            });
        }

        // checkout
        if($('.order-summary__section--product-list').length > 0){
            window.slide_items = new Array();
            $('.order-summary__section--product-list .product').each(function() {
                var item_img = $(this).find('.product-thumbnail__wrapper').html();
                var item_title = $(this).find('.product__description__name.order-summary__emphasis:eq(0)').text();
                var item_price = $(this).find('.product__price .order-summary__emphasis').text();

                var objdata = {
                    img: item_img,
                    title: item_title,
                    price: item_price,
                };
                window.slide_items.push(objdata);
            });
        }
        // console.log('slide items');
        console.log('slide_items = ' + window.slide_items);

        $('body').find('.exit_popup_container').remove();
        $('body').find('.exit_popup_overlay').remove();
        $exit_popup  = '<div class="exit_popup_container">';
        $exit_popup +=   '<div class="exit_popup modal_dialog">';
        $exit_popup +=      '<div class="modal_header"><i class="modal_close"></i></div>';
        $exit_popup +=          '<div class="modal__body">';
        $exit_popup +=              '<h3 class="modal_title">It’s almost yours!</h3>';
        $exit_popup +=              '<p class="modal_subtitle">Only one step left:</p>';
        $exit_popup +=              '<div class="modal_slider_wrap">';

        $exit_popup +=                  '<div class="modal_slider">';
        $exit_popup +=                      '<div class="slider_tooltip_box">This is a popular choice, we may run out of stock soon</div>';

        $exit_popup +=                      '<div class="modal-item-wrap">';
        // <!-- Slides -->
        $.each(window.slide_items,function(ind,el){
            $exit_popup +='<div class="modal-item"><div class="item-info-wrap">'+ el.img +'<div class="slide_text_holder"><div class="slide_title_wrap"><p class="slide_title">'+ el.title +'</p> </div><p class="slide_price">'+ el.price +'</p></div></div></div>';
        })
        $exit_popup +=                      '</div>';
        $exit_popup +=                  '</div>';
        $exit_popup +=              '</div>';
        $exit_popup +=          '<div class="modal_content">';

    if( window.slide_items.length > 1 ){
        var item_content = "We can’t guarantee the availability of all products in your cart<br> if you don’t complete the purchase now";
    } else {
        var item_content = "We can’t guarantee its availability<br> if you don't complete the purchase now";
        console.log('one item in card')
    }

        $exit_popup +=              '<p>' + item_content + '</p>';
        $exit_popup +=          '</div>';
        $exit_popup +=     '</div>';
        $exit_popup +=     '<a href="/checkout" class="modal_btn">complete my order now</a>';
        $exit_popup +=   '</div>';
        $exit_popup += '</div>';
        if( window.slide_items.length > 0 ){
            $('body').append($exit_popup);
            $('body').append('<div class="exit_popup_overlay"></div>');
            // $('body').find('.modal_slider .swiper-slide').prepend("<div class='slider_tooltip_box'>This is a popular choice,<br> we may run out of stock soon</div>");
        }

    }
    $('body').on('click', '.modal_close, .exit_popup_overlay', function() {
        $('body').find('.exit_popup_container').remove();
        $('body').find('.exit_popup_overlay').remove();
        $('body').removeClass('stop_scroll');
    });

    window.already_display_popup = Number(localStorage.getItem('pod') || 0);
    window.dont_triger_popup     = 0;
    window.is_change_status     = window.dont_triger_popup;
    setInterval(function() {
        if($('.drawer').hasClass('drawer--is-open') == true){
            window.dont_triger_popup = 1;
        }else{
            window.dont_triger_popup = 0;
        }
        if(window.is_change_status != window.dont_triger_popup){
           window.is_change_status = window.dont_triger_popup;
           console.log('is_change_status '+window.is_change_status);
        }
    },0);

    window.show_popup = function(){
        if(window.already_display_popup == 0){
            render_popup();
        }
        console.log((window.already_display_popup == 0),'already_display_popup');
        console.log((window.dont_triger_popup == 0),'dont_triger_popup');
        console.log(product_id,'product_id');
        console.log(!Is_productinStorage(product_id));
        if(window.already_display_popup == 0 && window.dont_triger_popup == 0 && !Is_productinStorage(product_id) && window.slide_items.length > 0){
            console.log('show popup');
            $('.exit_popup_container').addClass('active');
            $('.exit_popup_overlay').addClass('active');
            $('body').addClass('stop_scroll');
            if( window.slide_items.length > 1 ){
                $('body').find('.exit_popup_container').addClass('few_items');
            } else {
                $('body').find('.exit_popup_container').removeClass('few_items');
                console.log('one item in card')
            }
            window.already_display_popup = 1;
            localStorage.setItem( 'pod', 1 );
        }
    }


    //added style for checkout page
    if (window.location.href.indexOf("checkouts") > -1) {
        console.log('checkout page')
        $('head').append('<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&display=swap" rel="stylesheet">');

        $('body').on('click', '.exit_popup .modal_btn', function(event) {
            event.preventDefault();
            $('body').find('.exit_popup_container').remove();
            $('body').find('.exit_popup_overlay').remove();
            $('body').removeClass('stop_scroll');
        });
    }

    $(document).mouseleave(function () {
            // console.log('mouseleave-1');
            if (event.toElement == null) {
            // console.log('mouseleave-2');
            if(typeof window.show_popup != 'undefined'  && !Is_productinStorage(product_id)){
                // console.log('mouseleave-3');
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp - Exit intent popup for unpaid products',
                    'eventAction': 'popup loaded'
                });
                console.log('popup loaded')

                window.show_popup();
                // $('body').find('#privy-container #privy-inner-container .privy').addClass('hidden-popup');
            }
        }
    });

    $('body').on('click', '.exit_popup .modal_btn', function() {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Exit intent popup for unpaid products',
            'eventAction': 'Click on Complete your order'
        });
        console.log('Click on Complete your order')
    });

    $('body').on('click', '.modal_close', function() {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Exit intent popup for unpaid products',
            'eventAction': 'Click on X to close popup'
        });
        console.log('Click on X to close popup')
        // $('body').find('#privy-container #privy-inner-container .privy').removeClass('hidden-popup');
    });

    $('body').on('click', '.exit_popup_overlay', function() {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Exit intent popup for unpaid products',
            'eventAction': 'Click on the background to close popup'
        });
        // $('body').find('#privy-container #privy-inner-container .privy').removeClass('hidden-popup');
    });


// });