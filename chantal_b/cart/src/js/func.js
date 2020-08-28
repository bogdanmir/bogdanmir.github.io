function scan_cart_elements(){
    var cart_elements = [
        {
            'item' : '#js-cart-sidebar .cart-action .btn-primary',
            'text' : 'View cart'
        },
        {
            'item' : '.actions-cart .checkout-btn-top .btn-primary',
            'text' : 'Proceed to Checkout'
        },
        {
            'item' : '.cart-detailed-actions .btn-primary',
            'text' : 'Proceed to Checkout'
        }
    ];
    $.each(cart_elements,function(index,obj){
        var cart_btn = $('body').find(obj.item);
        if(cart_btn.length > 0){
            cart_btn.html(obj.text);
        }
    })
}
