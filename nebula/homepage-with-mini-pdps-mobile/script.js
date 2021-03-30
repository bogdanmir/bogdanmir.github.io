let navbar = 'data-v-4d3f649e',
    mainpage = 'data-v-693ebc60'

let href = window.location.href

let homepageStyle = `
    <style>

      .navbar-logo-links-button[${navbar}] {
        padding: 10px 20px 0;
      }

      .navbar-logo-links-button .navbar-image img[${navbar}] {
        width: 120px;
      }

      .navbar-logo-links-button[${navbar}] .mobile-menu-button-div[${navbar}] {
        flex: 0;
        align-items: center;
        margin: 0 3px 0 24px;
      }

      .navbar-logo-links-button[${navbar}] .mobile-menu-button[${navbar}] {
        align-items: center;
      }

      .navbar-logo-links-button[${navbar}] .navbar-login-button[${navbar}] {
        display: block;
      }

      .navbar-logo-links-button[${navbar}] .navbar-login-button a[${navbar}] {
        display: block;
        width: 98px;
        height: 38px;
      }

      .navbar-logo-links-button[${navbar}] .fa-bars[${navbar}] {
        color: #747474;
        font-size: 20px;
      }

      .mainpage[${mainpage}] .main_section {
        flex-wrap: wrap;
      }

      .mainpage[${mainpage}] .main_section .text {
        width: 100%;
        margin: 0 20px;
      }

      .mainpage[${mainpage}] .main_section .text .flx {
        align-items: flex-start;
      }

      .mainpage[${mainpage}] .main_section .text h1 {
        font-size: 24px;
        margin: 38px 0 0;
        line-height: 1.3;
      }

      .mainpage[${mainpage}] .main_section .text p {
        font-size: 14px;
        color: #1A1B20;
        line-height: 1.6;
        margin: 15px 20px 0 0;
        letter-spacing: -0.5px;
      }

      .mainpage[${mainpage}] .main_section .text img {
        max-width: 25%;
        margin: -8px 0 0;
      }

      .mainpage[${mainpage}] .main_section .text a {
        margin: 15px 0 0;
        width: 100%;
      }

      .mainpage[${mainpage}] .main_section > img {
        display: none;
      }

      .choose-plan-1[data-v-65739f6e] {
        background-color: #fff;
        padding-bottom: 0;
      }

      .choose-plan-1[data-v-65739f6e] .choose-plan-component[data-v-3871e4bd] .right {
        display: none;
      }

      .choose-plan-1[data-v-65739f6e] h2 {
        font-size: 20px;
        text-align: left;
        margin: 0;
        padding: 0 20px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #505985;
        width: 100%;
      }

      .choose-plan-1[data-v-65739f6e] .choose-plan-component .left[data-v-3871e4bd] {
        width: 100%;
      }

      .choose-plan-1[data-v-65739f6e] .choose-plan-component .left .product-text-div .product-descriptions .product-description[data-v-3871e4bd] {
        flex-wrap: wrap;
        margin: 0;
        position: relative;
      }

      .choose-plan-1[data-v-65739f6e] .choose-plan-component .left .product-text-div .product-descriptions .product-description[data-v-3871e4bd].active .titleEl-product:after {
        display: none;
      }

      .choose-plan-1[data-v-65739f6e] .choose-plan-component .left .product-text-div .product-descriptions .product-description[data-v-3871e4bd] .titleEl-product {
        font-size: 16px;
        font-weight: bold;
        width: 100%;
      }

      .choose-plan-1[data-v-65739f6e] .choose-plan-component .left .product-text-div .product-descriptions .product-description[data-v-3871e4bd] .titleEl-product:before,
      .choose-plan-1[data-v-65739f6e] .choose-plan-component .left .product-text-div .product-descriptions .product-description[data-v-3871e4bd] .titleEl-product:after {
        content: '';
        background: rgba(0, 0, 0, 0.54);
        width: 10.5px;
        height: 1.5px;
        position: absolute;
        top: 15px;
        right: 4px;
      }

      .choose-plan-1[data-v-65739f6e] .choose-plan-component .left .product-text-div .product-descriptions .product-description[data-v-3871e4bd] .titleEl-product:after {
        transform: rotate( 90deg );
      }

      .choose-plan-1[data-v-65739f6e] .choose-plan-component .left .product-text-div .product-descriptions .product-description[data-v-3871e4bd] .textEl-product {
        font-size: 14px;
        line-height: 1.45;
        padding: 10px 0 0 0;
        height: 0;
        overflow: hidden;
      }

      .choose-plan-1[data-v-65739f6e] .choose-plan-component .left .product-text-div .product-descriptions .product-description[data-v-3871e4bd].active .textEl-product {
        padding: 19px 10px 25px 17px;
        height: 100%;
        overflow: visible;
      }

      .flx {
        display:flex;
        justify-content: center;
        align-items: center;
      }
      
      .navbar-image img[data-v-4d3f649e] {
        width: 140px;
      }
    
      .navbar[${navbar}] {
        background-color: #fff;
      }
      
      .navbar-links a[${navbar}] {
        color: black;
        font-size: 14px;
        text-transform:uppercase;
      }
      
      .navbar-login-button a[${navbar}] {
        background-color: #3F4CEC;
        font-size: 16px;
      }
      
      .mainpage[${mainpage}] {
        background: #f9f9f9;
        padding-bottom: 75px;
      }
      
      .main_section h1{
        font-weight: 700;
        color: #505985;
        font-size: 48px;
        margin-bottom: 30px;
      }
      
      .main_section .text {
        margin: 0 4vh 0 10vw;
        text-align: left;
      }
      
      .main_section>* {
        width: 50%;
      }
      
      .main_section p {
        font-size: 24px;
        line-height: 38px;
        margin-bottom: 30px;
      }
      
      .main_section a {
        display: block;
        background: #2E3ACA;
        border-radius: 5px;
        width: 300px;
        padding: 17px 0;
        color: white;
        font-size: 18px;
        border: none;
        text-decoration:none;
        text-align: center;
      }
      
      .choose-plan-component .left .product-text-div .product-descriptions .product-description .fa-check[data-v-3871e4bd],
      .choose-plan-component .left[data-v-3871e4bd] {
        color: black;
        font-size: 18px;
      }
      
      .choose-plan-component .right[data-v-3871e4bd] {
        background: none;
        width: 40%;
      }
      
      .choose-plan-component .right[data-v-3871e4bd] img {
        width: 100%;
      }
      
      .choose-plan-1 .image-1[data-v-465d81fa] {
        display:none;
      }
      
      .choose-plan-component .left[data-v-3871e4bd] {
        width: 60%;
        padding: 0;
      }
      
      .choose-plan-component .left h2 {
        display: none !important;
      }
      
      .choose-plan-component[data-v-3871e4bd] {
        align-items: center;
      }
      
      .mini_pdp {
        background-color: #3F4CEC;
        padding: 20px 18px 18px;
      }
      
      .mini_pdp h2 {
        color: #fff;
        font-weight: 900;
        font-size: 20px;
        letter-spacing: 1px;
        line-height: 1.3;
        text-transform:uppercase;
        margin-bottom: 18px;
        text-align: center;
      }

      .mini_pdp h3 {
        color: #0B0F41;
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 12px;
      }

      .mini_pdp .mini_best {
        position: absolute;
        background: #FFC21A;
        width: 150px;
        height: 100px;
        transform: rotate( 45deg );
        top: -40px;
        right: -64px;
      }

      .mini_pdp .mini_best span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20px;
        text-align: center;
        font-size: 18px;
        font-weight: 900;
      }

      .mini_pdp .mini_best p {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 7px;
        text-align: center;
        font-size: 11px;
        font-weight: 900;
        margin: 0;
        letter-spacing: -0.5px;
      }
      
      .mini_pdp .flx {
        margin: 0 auto;
        justify-content:space-between;
      }
      
      .mini_pdp>.flx {
        max-width: 1300px;
        align-items: stretch;
        flex-wrap: wrap;
      }
      
      .mini_pdp>.flx>div {
        width: 100%;
        max-width: 640px;
        background-color: #fff;
        border-radius: 6px;
        padding: 29px 20px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
        margin-bottom: 20px;
      }
      
      .mini_pdp ul {
        margin: 0 0 0 10px;
        padding: 0;
      }

      .checkout_info ul {
        margin: 0 0 0 25px;
        padding: 0;
      }
      
      .mini_pdp ul+img {
        width: 20%;
      }
      
      .mini_pdp ul li, .checkout_info ul li{
        font-size: 14px;
        list-style: none;
        position:relative;
        padding-left: 10px;
        color: black;
      }

      .checkout_info ul li{
        padding-left: 0;
        line-height: 1.3;
      }
      
      .mini_pdp ul li.yellow, .checkout_info ul li.yellow{
        background: rgba(255, 194, 26, 0.8);
        border-radius: 5px;
      }

      .mini_pdp ul li.yellow {
        padding: 3px 5px 3px 20px;
        margin-left: -15px;
      }

      .mini_pdp ul li.yellow::before {
        left: 5px;
        top: 8px;    
      }

      .checkout_info ul li.yellow {
        padding: 2px 8px;
      }
      
      .mini_pdp ul li:not(:last-child) {
        margin-bottom: 12px;
      }

      .checkout_info ul li:not(:last-child) {
        margin-bottom: 15px;
      }

      .mini_pdp ul li::before {
        position: absolute;
        left: -8px;
        top: 3px;
        content: '';
        background: #2E3ACA;
        border-radius: 50%;
        width: 8px;
        height: 8px;
      }

      .mini_pdp_img {
        max-width: 100px;
      }

      .mini_pdp a.btn_choose {
        margin: 8px auto 0;
      }
      
      .checkout_info ul li::before {
        position: absolute;
        content: '—';
        left: -25px;
        top: 0;
        color: #000;
      }

      .checkout_info .checkout_img_holder {
        display: flex;
        justify-content: center;
        padding: 14px 0 0;
      }

      .checkout_info .checkout_img_holder img {
        width: 33.33%;
        padding: 0 3px;
      }
      
      a.btn_choose {
        display: block;
        margin: 50px auto 0;
        color: white;
        width: 300px;
        padding: 14px 0;
        border-radius: 5px;
        background-color: #2e3aca;
        font-size: 18px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
      }
      
      .mini_pdp p+img {
        width: 25%;
        margin-left: 5%;
      }
      
      .mini_pdp .price {
        font-size: 32px;
        color: #0B0F41;
        font-weight: 700;
      }
      
      .mini_pdp .flx-save {
        display: flex;
        justify-content: space-between;
        margin: 0 0 18px;
      }

      .mini_pdp .save {
        font-size: 14px;
        font-weight: 300;
        margin: 0;
      }
      
      .mini_pdp .list {
        
      }
      
      .btn_block {
        padding: 24px 0;
        background-color: #f9f9f9;
      }
      
      .btn_block .btn_choose {
        margin-top: 0;
      }
      
      .mini-faqs[data-v-074a3fd6] {
        padding-bottom: 50px;
      }
      
      .comparison-chart-component .btn_choose {
        border: 1px solid white;
        background-color: #3f4cec;
      }
      
      .charleston-be-content>a {
        display: block;
        background-color: #fff;
        color: black;border-radius: 5px;
        height: 44px;
        padding: 12px !important;
        text-decoration:none;
        font-size: 20px !important;
      }

      .user-testimonials-component[data-v-00b19e15] {
        padding: 30px 18px 30px;
      }

      .user-testimonials-component .label {
        font-size: 20px;
        text-transform: uppercase;
        color: #505985;
        width: 65%;
      }

      .user-testimonials-component .swiper-container {
        width: 100%;
        padding: 0 0 40px;
      }

      .user-testimonials-component .testimonial .header {
        color: #1A1B20;
        font-size: 14px;
        line-height: 1.4;
        font-style: italic;
        margin-top: 20px;
      }

      .user-testimonials-component .testimonial .header div {
        margin-top: 20px;
        font-style: normal;
        text-align: right;
      }

      .user-testimonials-component .swiper-container-horizontal>.swiper-pagination-bullets, 
      .user-testimonials-component .swiper-pagination-custom, .swiper-pagination-fraction {
        bottom: 0;
      }

      .user-testimonials-component .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
        color: transparent;
        outline: none;
      }
    </style>
`

let styleCheckout = `
    <style>
      .plust-qty,
      .minust-qty {
        position: absolute;
        top: 0;
        width: 54px;
        height: 54px;
      }

      .plust-qty {
        right: 0;
      }

      .minust-qty {
        left: 0;
      }

      .plust-qty:before,
      .plust-qty:after,
      .minust-qty:before {
        content: '';
        position: absolute;
        top: calc(50% - 1px);
        left: calc(50% - 8px);
        width: 14px;
        height: 2px;
        background: #757575;
      }

      .plust-qty:after {
        transform: rotate( 90deg );
      }

      .checkout_steps {
        width: calc(100% - 6vw);
        padding: 30px 25px;
        display:flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content:space-around;
        border-radius: 5px;
        border: 2px solid #4FA0FE;
        background-color: #ECF7FD;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        text-align: center;
      }
      
      .checkout_steps>div {
        display:flex;
        align-items: center;
        justify-content:center;
        width: 100%;
        margin: 0 0 38px;
        position: relative;
      }

      .checkout_steps>div:last-child {
        margin-top: 30px;
        margin-bottom: 8px;
      }
      
      .checkout_steps img {
        position: absolute;
        top: -14px;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      
      .checkout_steps p {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.4;
        margin: 0;
      }

      .cart-page[data-v-f514eb88] {
        padding: 13px 0 5vh;
      }

      .cart-page .cart-page-component[data-v-f514eb88] {
        background: #F9F9F9;
        border: 0;
        padding: 13px 0 30px;
      }
      
      .cart-page .cart-page-component .left-component {
        border-left: 1px solid #eee;
        border-right: none !important;
      }
      
      .cart-page .cart-page-component button[data-v-f514eb88] {
        background-color: #2E3ACA !important;
      }
      
      .order-summary-page>.label,
      .order-summary-page .name,
      .plan-selection-desktop .plan-label,
      .plan-selection-desktop .learn-more,
      .subtotal .previous,
      .subscription-details-bottom:not(.subscription-details-item),
      .free-shipping{
        display: none !important;
      }
      
      .checkout_info h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 14px;
        color: #0B0F56;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }
      
      .checkout_info h2 {
        font-size: 20px;
        font-weight: 500;
        color: #2E3ACA;
        text-align: center;
        margin: 0 0 13px;
      }
      
      .checkout_info {
        display:flex;
        align-items: center;
        justify-content:space-between;
        flex-wrap: wrap;
      }
      
      .checkout_info>:first-child {
        width: 100%;
      }
      .checkout_info>:last-child {
        width: 100%;
      }
      .checkout_info>:last-child>div {
        display:flex;
        justify-content:space-between;
        align-items: center;
      }
      
      .checkout_info>:last-child>div>img {
        width: 50%;
        margin: 0 auto;
      }

      .checkout_info>:last-child>div>img:nth-child(1) {
        max-width: 125px;
      }

      .checkout_info>:last-child>div>img:nth-child(2) {
        max-width: 70px;
      }
      
      .checkout_sign h3 {
        font-size: 24px;
        font-weight: 500;
        color: #505985;
      }
      
      .checkout_sign ol{
        padding-left: 20px;
      }
     
      p.economy {
        font-size: 16px;
        margin: 0;
      }
     
      .subtotal{
        width: 30% !important;
        font-size: 28px !important;
      }

      .cart-page .quantity {
          margin-right: 15px;
      }
      
      .product-image-order-summary .order-summary .quantity-subtotal[data-v-6cc7eacc],
        .total[data-v-6cc7eacc]{
        align-items: center;
        flex-wrap: wrap;
      }

      .product-image-order-summary .order-summary .quantity-subtotal .quantity[data-v-6cc7eacc] {
        width: 140px;
        border: 1px solid #E0E0E0;
        margin: 0 auto 15px;
        position: relative;
      }

      .product-image-order-summary .order-summary .quantity-subtotal .quantity[data-v-6cc7eacc]>span {
        display: none;
      }
      
      .product-image-order-summary .order-summary .quantity-subtotal .quantity .quantity-select[data-v-6cc7eacc] {
        height: 54px;
        border: 0;
        border-radius: 0;
        color: #2E3ACA;
        font-weight: bold;
        font-size: 18px;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        background: none;
        padding-left: 0;
        padding-right: 0;
        margin: 0 auto;
      }

      .amount {
        font-size: 48px !important;
        color: #2E3ACA !important;
      }

      .product-image-order-summary .order-summary .quantity-subtotal[data-v-6cc7eacc] .economy {
        width: 65%;
      }

      .product-image-order-summary .order-summary .quantity-subtotal[data-v-6cc7eacc] .economy span {
        display: block;
        font-size: 14px;
      }

      .product-image-order-summary .order-summary .quantity-subtotal .subtotal .current[data-v-6cc7eacc] {
        height: 40px;
        font-size: 40px;
        line-height: 1;
        overflow: hidden;
        flex-direction: column;
      }

      .total-label {
        font-size: 18px !important;
      }
     
      .total-label span {
        display:inline-block;
        color: #2E3ACA;
        font-size: 14px;
        margin-left: 30px;
      }
     
      .info {
        height: 20px;
        width: 20px;
        background: url("https://i.ibb.co/P9dYTNt/info.png") center center no-repeat;
        background-size: contain;
        position:relative;
        margin-left: 15px;
        display:inline-block;
      }

     .info .popup_info {
        position:absolute;
        left: 125%;
        top: 0;
        transform: translateY(-43%);
        display: none;
        padding: 15px;
        background-color: #f2f2f2;
        border-radius: 5px;
        width: 300px;
        color: black;
        font-size: 12px;
        z-index: 100;
      }
     
      .info .popup_info::before {
        position:absolute;
        content: '';
        height: 8px;
        width: 8px;
        border-radius: 2px;
        background-color: #f2f2f2;
        transform: rotateZ(45deg) translateX(-100%);
        top: 55%;
        left: 0;
      }
     
      .plan-name{
        display:flex !important;
        align-items: center !important;
      }
      
      .info:hover {
        background: url("https://i.ibb.co/5c1rsdT/info-hover.png") center center no-repeat;
      }
     
      .info:hover .popup_info {
        display: block;
      }
      .product-descriptions .product-description:not(.active){
          display:none;
      }

      .plan-selection-desktop[data-v-6cc7eacc] {
        display: block;
        padding: 20px 0 15px;
      }

      .plan-selection-desktop[data-v-6cc7eacc] .checkout_sign h3 {
        font-weight: 500;
        font-size: 20px;
        line-height: 1.4;
        margin: 0 0 15px;
      }

      .plan-selection-desktop[data-v-6cc7eacc] .checkout_sign ol {
        padding-left: 15px;
      }

      .plan-selection-desktop[data-v-6cc7eacc] .checkout_sign ol li {
        margin: 0 0 15px;
      }

      .plan-selection-mobile .plan-selection-cart .checkbox[data-v-0bdf56fa] {
        flex-wrap: wrap;
        padding: 0;
      }

      .plan-selection-mobile .plan-selection-cart .checkbox[data-v-0bdf56fa]:last-child .plan-name {
        flex-wrap: wrap;
      }

      .plan-selection-mobile .plan-selection-cart .checkbox[data-v-0bdf56fa]:last-child .plan-name .special-sale {
        margin: 0;
      }

      .plan-selection-mobile .plan-selection-cart .checkbox.active  .choose-plan-check-label[data-v-0bdf56fa] {
        background: #2E3ACA;
      }

      .plan-selection-mobile .plan-selection-cart .checkbox.active .checkmark[data-v-0bdf56fa] {
        border-color: #fff;
      }

      .plan-selection-mobile .plan-selection-cart .checkbox.active .checkmark[data-v-0bdf56fa]:after {
        border-color: #fff;
      }

      .plan-selection-mobile .plan-selection-cart .checkbox.active .chosen-plan-name[data-v-0bdf56fa],
      .plan-selection-mobile .plan-selection-cart .checkbox.active .chosen-plan-price[data-v-0bdf56fa],
      .plan-selection-mobile .checkbox.active .choose-plan-check-label .plan-name .save-50[data-v-0bdf56fa],
      .plan-selection-mobile .plan-selection-cart .checkbox.active .plan-name .special-sale {
        color: #fff;
      }

      .plan-selection-mobile .plan-selection-cart .choose-plan-check-label[data-v-0bdf56fa] {
        border-radius: 10px;
        background: #ECF7FD;
        padding: 14px 14px 14px 37px;
        width: 100%;
        position: relative;
      }

      .plan-selection-mobile .plan-selection-cart .checkmark[data-v-0bdf56fa] {
        top: 14px;
        left: 6px;
        height: 19px;
        width: 19px;
        background-color: transparent;
        border-radius: 5px;
        border: 2px solid #DADADA;
      }

      .plan-selection-mobile .plan-selection-cart .checkbox .checkmark[data-v-0bdf56fa]:after {
        left: 5px;
        top: 1px;
        width: 6px;
        height: 10px;
        border: solid #DADADA;
        border-width: 0 2px 2px 0;
      }

      .plan-selection-mobile .choose-plan-check-label .chosen-plan-price[data-v-0bdf56fa] {
        color: #0B0F41;
      }

      .plan-selection-mobile .choose-plan-check-label .plan-name .save-50[data-v-0bdf56fa],
      .plan-selection-mobile .choose-plan-check-label .plan-name .special-sale {
        font-weight: 700;
      }

      .plan-selection-mobile .subscription-details-bottom[data-v-62357bf8] {
        color: #1A1B20;
        border: 2px solid rgba(46, 58, 202, 0.5);
        border-radius: 10px;
        margin-top: -23px;
        margin-bottom: 0;
        padding: 30px 10px 8px;
      }

      .plan-selection-desktop .plan-selection.plan-selection-cart {
        display: none;
      }

      .plan-selection-mobile .plan-label[data-v-62357bf8],
      .plan-selection-mobile .learn-more[data-v-62357bf8],
      .plan-selection-mobile .plan-offers[data-v-62357bf8] {
        display: none;
      }

      .order-summary-page .coupon-code-question-div[data-v-6cc7eacc] {
        border: 0;
        text-align: center;
      }

      .order-summary-page .coupon-code-div[data-v-6cc7eacc] {
        align-items: center;
      }

      .order-summary-page .total[data-v-6cc7eacc] {
        justify-content: center;
        position: relative;
        border: 0;
        padding-bottom: 34px;
        margin-bottom: 30px;
      }

      .order-summary-page .total-label {
        width: 100%;
        padding: 0 0 15px;
        text-align: center;
      }

      .order-summary-page .total .total-label span {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }

    </style>
`

let info = `
<div class="info"> <div class="popup_info">$19.99/mo, charged when sequencing is completed, cancel anytime thereafter.  <a href="https://nebulagenomics.zendesk.com/hc/en-us/articles/360028257612-Refund-Policy-" target="_blank">Refund policy.</a></div></div>
`

let topCheckoutBlock = `
    <div class="checkout_steps">
      <div>
          <img src="https://i.ibb.co/DbZxzC0/1.png" alt="">
          <p>Cutting-edge privacy technology that gives you maximum security and full control over your genomic data </p>
      </div>
      <div>
          <img src="https://i.ibb.co/n66v2rv/2.png" alt="">
          <p>Free world-wide shipping</p>
      </div>
      <div>
          <img src="https://i.ibb.co/BVQxJ3V/3.png" alt="">
          <p>The only genetic test that decodes 100% of your DNA</p>
      </div>
    </div>
`

let infoBlockCheckout = `
    <div class="checkout_info">
       <div>
        <h1>Order Summary</h1>
        <h2>Deep Whole Genome Sequencing</h2>
        <ul>
            <li>99.5% Genome Sequence accuracy (market-leading standard)</li>
            <li>Decodes 100% of your DNA</li>
            <li>Every position in the genome is decoded on average 30 times</li>
        </ul>
       </div>
       <div class="checkout_img_holder">
         <img src="https://i.ibb.co/X4y27gJ/box.png" alt="box">
         <div>
          <img src="https://i.ibb.co/0jXbtSk/best-value2.png" alt="best value">
          <img src="https://i.ibb.co/xh0YpT5/plane2.png" alt="free shipping">
         </div>
       </div>
    </div>
`

function __addev(elem,eventName,handler){
    document.addEventListener(eventName, function(e) {
        // loop parent nodes from the target to the delegation node
        for (var target = e.target; target && target != this; target = target.parentNode) {
            if (target.matches(elem)) {
                handler.call(target, e);
                break;
            }
        }
    }, false);
}
function __new(elementname){
    return document.createElement(elementname);
}
function __get(elementname,parent = document){
    return parent.querySelectorAll(elementname);
}
function __parent(element){
    return element.parentNode;
}
function __addclass(element,classname){
    return element.classList.add(classname);
}
function __removeclass(element,classname){
    return element.classList.remove(classname);
}
function __before(element,elem){
    var prev = __parent(elem);
    prev.insertBefore(element,elem);
}
function __after(elem,element){
    element.insertAdjacentElement('afterend',elem);
}
function __attr(element,attrName,attrValue){
    element.setAttribute(attrName,attrValue);
}
function __html(element,html){
    element.innerHTML = html;
}
function __append(el,parent){
    parent.appendChild(el);
}
function __remove(el,parent){
    parent.appendChild(el);
}
if (href.includes('-100x')) {
    infoBlockCheckout = `
    <div class="checkout_info">
       <div>
        <h1>Order Summary</h1>
        <h2>Ultra Deep Whole Genome Sequencing</h2>
        <ul>
          <li class="yellow">Discover your rare genetic mutations with highest accuracy</li>
           <li>99.99% Genome Sequence accuracy (market-leading standard)</li>
           <li>Decodes 100% of your DNA</li>
           <li>Every position in the genome is decoded on average 100 times</li>
        </ul>
       </div>
       <div class="checkout_img_holder">
         <img src="https://i.ibb.co/X4y27gJ/box.png" alt="box">
         <div>
          <img src="https://i.ibb.co/0jXbtSk/best-value2.png" alt="best value">
          <img src="https://i.ibb.co/xh0YpT5/plane2.png" alt="free shipping">
         </div>
       </div>
    </div>
`
}

let listCheckout = `
    <div class="checkout_sign">
      <h3>Sign up to our Nebula Explore™ Reporting to get access to:</h3>
      <ol>
          <li>New DNA reports every week that are based on the latest genomic research and learn how they apply to your DNA results.</li>
          <li>Access to exploration tools that will enable you to examine any of your ~20,000 genes and generate your personalized reports.</li>
          <li>Access to deep ancestry analysis that will enable you to do your full genealogical research. Get deeper insights than with any other DNA test on the market.</li>
          <li>Access to premium support provided by geneticists at Nebula Genomics.</li>
      </ol>
    </div>
`

let mainsection = `
    <div class="main_section flx">
        <div class="text">
            <h1>Whole Genome Sequencing - The only genetic test that decodes 100% of DNA</h1>
            <div class="flx">
                <p>The most accurate DNA test in the world to examine your ancestry, health, diet, and physical activity</p>
                <img src="https://i.ibb.co/xG6Bybx/plane.png" alt="plane">
            </div>
            <a href="#choose" data-number="1">Choose your plan</a>
        </div>
        <img src="https://portal.nebula.org/api/public-images/brochure/hero-image.png" alt="bg">
    </div>
`

let btn = `
    <div class="btn_block">
      <a href="#choose" class="btn_choose" data-number="3">Choose your plan</a>
    </div>
`

let miniPdp = `
    <div class="mini_pdp" id="choose">
      <h2>Whole genome sequencing options</h2>
      <div class="flx">
        <div class="x30">
          <h3>Deep Whole Genome Sequencing</h3>

          <div class="mini_best">
            <span>Best</span>
            <p>value for mahey</p>
          </div>

          <div class="flx-save">
            <p class="save">Normally $1000<br>
            <b>Save 70%!</b></p>
            <div class="price">$299</div>
          </div>

          <div class="flx list">
            <ul>
              <li>99.5% Genome Sequence accuracy (market-leading standard)</li>
              <li>Decodes 100% of your DNA (6 billion letters incl. all ~20,000 genes)</li>
              <li>Every position in the genome is decoded on average 30 times</li>
              <li>Generates over 100 gigabytes of genomic big data</li>
            </ul>
          </div>
          <div class="flx">
            <img src="https://i.ibb.co/X4y27gJ/box.png" alt="" class="mini_pdp_img">
          </div>
          <a href="https://portal.nebula.org/cart/nebula-30x" class="btn_choose test299">Buy your DNA test</a>
        </div>
        <div class="x100">
        <h3>Ultra Deep Whole Genome Sequencing</h3>

          <div class="flx-save">
            <p class="save">Normally $3500<br>
            <b>Save 70%!</b></p>
            <div class="price">$999</div>
          </div>

          <ul class="list">
            <li class="yellow">Discover your rare genetic mutations with highest accuracy</li>
            <li>99.99% Genome Sequence accuracy (market-leading standard)</li>
            <li>Decodes 100% of your DNA (6 billion letters incl. all ~20,000 genes) </li>
            <li>Every position in the genome is decoded on average 100 times</li>
            <li>Generates over 300 gigabytes of genomic big data</li>
          </ul>
          <div class="flx">
            <img src="https://i.ibb.co/X4y27gJ/box.png" alt="" class="mini_pdp_img">
          </div>
          <a href="https://portal.nebula.org/cart/nebula-100x" class="btn_choose test999">Buy your DNA test</a>
        </div>
      </div>
    </div>
`
// document.querySelectorAll('.gpay-button-fill')[1].querySelector('button').onclick = function(){document.querySelectorAll('.gpay-button-fill')[0].querySelector('button').click();console.log('click')};
document.body.insertAdjacentHTML('afterbegin', homepageStyle)
if (document.querySelector('.navbar-image img')) {
    document.querySelector('.navbar-image img').setAttribute('src', 'https://i.ibb.co/Pc5JBYq/logo.png')
}
function drawHomepage() {
    let path = window.location.pathname
    if (document.querySelector('.navbar-image img')) {
        document.querySelector('.navbar-image img').setAttribute('src', 'https://i.ibb.co/Pc5JBYq/logo.png')
    }
    if(path.includes('whole-genome-sequencing-dna-test')) {
        if(!document.querySelector('.main_section')) {
            if (document.querySelector('.mainpage') && document.querySelector('.choose-plan-1') && document.querySelector('.mini-faqs')){
                document.querySelector('.mainpage').innerHTML = mainsection
                document.querySelector('.choose-plan-1 .right').innerHTML = `<img src="https://portal.nebula.org/api/public-images/brochure/30xProduct/choose-product-bg.png">`
                document.querySelector('.choose-plan-1').insertAdjacentHTML('afterbegin', `<h2>About Our DNA tests, reports and technology</h2>`)
                document.querySelector('.choose-plan-1').insertAdjacentHTML('afterend', miniPdp)
                document.querySelector('.mini-faqs').insertAdjacentHTML('beforebegin', btn)
                document.querySelector('.mini-faqs').insertAdjacentHTML('afterend', btn)
                document.querySelector('.comparison-chart-component').insertAdjacentHTML('beforeend', `<a href="#choose" class="btn_choose" data-number="2">Choose your plan</a>`)
            }
            __addev('.test299','click',buyTest299);
            // if(document.querySelectorAll('.test299').length > 0){
            //     document.querySelector('.test299').removeEventListener('click', buyTest299)
            //     document.querySelector('.test299').addEventListener('click', buyTest299)
            //     document.querySelector('.test999').removeEventListener('click', buyTest999)
            //     document.querySelector('.test999').addEventListener('click', buyTest999)
            // }
            const anchors = document.querySelectorAll('a[href*="#"]')

            for (let i=0; i<anchors.length; i++) {
                anchors[i].removeEventListener('click', clickAnchors.bind(anchors[i]))
                anchors[i].addEventListener('click', clickAnchors.bind(anchors[i]))
            }
        }
    }
}

function links() {
    mut.disconnect()
    if (document.querySelectorAll('.get-started-button a').length > 0 && (document.querySelector('.get-started-button a').innerText !== 'Choose your plan') || (document.querySelectorAll('a.link-tag') && document.querySelector('a.link-tag').innerHTML !== 'Choose your plan')) {
        if(document.querySelectorAll('.purchase-button').length > 0) {
            document.querySelectorAll('.purchase-button').forEach((item) => {
                item.innerHTML = 'Choose your plan'
            })
        }
        __addev('a.link-tag','click',clickLT);
        // if(document.querySelectorAll('a.link-tag').length > 0) {
        //     document.querySelectorAll('a.link-tag').forEach((item) => {
        //         item.removeEventListener('click', clickLT)
        //         item.addEventListener('click', clickLT)
        //     })
        // }
        if(document.querySelectorAll('.button-div button').length > 0) {
            document.querySelectorAll('.button-div button').forEach((item) => {
                item.innerHTML = 'Choose your plan'
            })
        }
        __addev('a.button-div','click',clickBD);
        // if(document.querySelectorAll('a.button-div').length > 0){
        //     document.querySelectorAll('a.button-div').forEach((item) => {
        //         item.removeEventListener('click', clickBD)
        //         item.addEventListener('click', clickBD)
        //     })
        // }
        if(document.querySelectorAll('.get-started-button a').length > 0) {
            document.querySelectorAll('.get-started-button a')[0].innerHTML = 'Choose your plan'
            document.querySelectorAll('.get-started-button a')[0].removeEventListener('click', clickAboutlink1)
            document.querySelectorAll('.get-started-button a')[0].addEventListener('click', clickAboutlink1)

            document.querySelectorAll('.get-started-button a')[1].innerHTML = 'Choose your plan'
            document.querySelectorAll('.get-started-button a')[1].removeEventListener('click', clickAboutlink2)
            document.querySelectorAll('.get-started-button a')[1].addEventListener('click', clickAboutlink2)
        }

    }
    mut.observe(document.body, {
        childList: true,
        subtree: true
    })
}

function drawCheckout () {
    if(document.querySelectorAll('.checkout_steps').length > 0){
        return;
    }
    document.body.insertAdjacentHTML('afterbegin', styleCheckout)
    document.querySelector('.cart-page-component').insertAdjacentHTML('beforebegin', topCheckoutBlock)
    document.querySelector('.toggle-product-container').remove()
    document.querySelector('.left-component').style.order = '2'
    document.querySelector('.product-image-order-summary>:first-child').remove()
    document.querySelector('.product-details').innerHTML = infoBlockCheckout
    document.querySelector('.plan-selection-desktop .plan-offers').innerHTML = listCheckout
    document.querySelector('.quantity').insertAdjacentHTML('afterend', `<p class="economy"><span>Normally  <s><b>${(href.includes('-30x'))?'$1000':'$3500'}</b></s></span> <span>Save <b>70%!</b></span></p>`)
    document.querySelector('.total-label').insertAdjacentHTML('beforeend', `<span>FREE shipping!</span>`)
    document.querySelectorAll('.plan-name')[0].insertAdjacentHTML('beforeend', `<div class="info"> <div class="popup_info">$19.99/mo, charged when sequencing is completed, cancel anytime thereafter. <a class="return_policy" href="https://nebulagenomics.zendesk.com/hc/en-us/articles/360028257612-Refund-Policy-" target="_blank">Refund policy.</a></div></div>`)
    document.querySelectorAll('.plan-name')[1].insertAdjacentHTML('beforeend', `<div class="info"> <div class="popup_info">$9.99/mo, billed yearly, charged when sequencing is completed, cancel anytime thereafter. <a class="return_policy" href="https://nebulagenomics.zendesk.com/hc/en-us/articles/360028257612-Refund-Policy-" target="_blank">Refund policy.</a></div></div>`)
    document.querySelectorAll('.plan-name')[2].insertAdjacentHTML('beforeend', `<div class="info"> <div class="popup_info">One time payment, unlimited access to all reporting features. <a class="return_policy" href="https://nebulagenomics.zendesk.com/hc/en-us/articles/360028257612-Refund-Policy-" target="_blank">Refund policy.</a></div></div>`)
    let cl = new Event('click')
    document.querySelector('.coupon-code-question').dispatchEvent(cl)


    document.querySelectorAll('input#monthly-plan.form-check-input')[0].removeEventListener('click', monthlyPlan)
    document.querySelectorAll('input#monthly-plan.form-check-input')[0].addEventListener('click', monthlyPlan)

    document.querySelectorAll('label[for="monthly-plan"] .info')[0].removeEventListener('mouseover', monthlyPlanInfo)
    document.querySelectorAll('label[for="monthly-plan"] .info')[0].addEventListener('mouseover', monthlyPlanInfo)

    document.querySelectorAll('input#yearly-plan.form-check-input')[0].removeEventListener('click', yearlyPlan)
    document.querySelectorAll('input#yearly-plan.form-check-input')[0].addEventListener('click', yearlyPlan)

    document.querySelectorAll('label[for="yearly-plan"] .info')[0].removeEventListener('mouseover', yearlyPlanInfo)
    document.querySelectorAll('label[for="yearly-plan"] .info')[0].addEventListener('mouseover', yearlyPlanInfo)

    document.querySelectorAll('input#yearly-plan.form-check-input')[0].removeEventListener('click', noPlan)
    document.querySelectorAll('input#yearly-plan.form-check-input')[0].addEventListener('click', noPlan)

    document.querySelectorAll('label[for="no-plan"] .info')[0].removeEventListener('mouseover', noPlanInfo)
    document.querySelectorAll('label[for="no-plan"] .info')[0].addEventListener('mouseover', noPlanInfo)

    document.querySelectorAll('.return_policy').forEach((item) => {
        item.removeEventListener('click', returnPolicy)
        item.addEventListener('click', returnPolicy)
    })
    if(document.querySelectorAll('.plan-selection-mobile .form-check-input:checked').length > 0){
        var elem = document.querySelector('.plan-selection-mobile .form-check-input:checked');
        elem.parentNode.classList.add('active');
        addSubscriptionTo(elem);
    }
    if(__get('.special-sale').length > 0){
        var item = __get('.special-sale')[0].cloneNode(true);
        item.classList.add('special-sale-price');
        // item.classList.remove('special-sale');
        var title = __get('.plan-selection-mobile .lifetime .plan-name')[0];
        __append(item,title);
        __get('.plan-selection-mobile .special-sale:not(.special-sale-price)')[0].remove();
    }
    var plust = __new('div');
    var minust = __new('div');
    __addclass(plust,'plust-qty');
    __addclass(minust,'minust-qty');
    if(__get('.quantity .quantity-select').length > 0){
        const elem = __get('.quantity .quantity-select')[0];
        var prev = __parent(elem);
        __before(minust,elem);
        __after(plust,elem);
    }
}
let mut = new MutationObserver((ms) => {
    let h = window.location.href
    if(h.includes('/oasis-labs-partnership/') || h.includes('/george-church/')) {
        links()
    } else {
        drawHomepage()
    }
})
function onload_func() {
    if (!href.includes('cart')) {
        if (href.includes('/oasis-labs-partnership/') || href.includes('/george-church/')) {
            links()
        } else {
            drawHomepage()
        }
        mut.observe(document.body, {
            childList: true,
            subtree: true
        })
    } else {
        window.timerIntervvval = setInterval(function () {
                if (document.querySelectorAll('.cart-page-component').length > 0) {
                    drawCheckout();
                    console.log('end');
                    clearInterval(window.timerIntervvval);
                }
        }, 100)

    }
}

let clickLink = new Event('click')


function scrollTOPdp() {
    setTimeout(function () {
        document.getElementById('choose').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }, 1500)
}

function clickBD(e) {
    e.preventDefault()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Choose your plan-1 Oasis Labs'
    });
    console.log('click on Choose your plan-1 Oasis Labs');
    document.querySelector('.navbar-links>:first-child a').click()
    scrollTOPdp()
}

function clickLT(e) {
    e.preventDefault()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Choose your plan-2 Oasis Labs'
    });
    console.log('click on Choose your plan-2 Oasis Labs');
    document.querySelector('.navbar-links>:first-child a').click()
    scrollTOPdp()
}

function clickAboutlink1 (e) {
    e.preventDefault()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': `click on Choose your plan-1 About Us`
    });
    console.log(`click on Choose your plan-1 About Us`);
    document.querySelector('.navbar-links>:first-child a').click()
    scrollTOPdp()
}

function clickAboutlink2 (e) {
    e.preventDefault()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': `click on Choose your plan-2 About Us`
    });
    console.log(`click on Choose your plan-2 About Us`);
    document.querySelector('.navbar-links>:first-child a').click()
    scrollTOPdp()
}

function clickAnchors(e) {
    e.preventDefault()
    const blockID = this.getAttribute('href').substr(1)
    let i = this.getAttribute('data-number')
    console.log(i)

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': `click on Choose your plan-${i} Homepage`
    });
    console.log(`click on Choose your plan-${i} Homepage`);

    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

function buyTest299() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Buy your DNA test $299'
    });
    console.log('click on Buy your DNA test $299');
}

function buyTest999() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Buy your DNA test $999'
    });
    console.log('click on Buy your DNA test $999');
}

function monthlyPlan(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Monthly checkbox Checkout'
    });
    console.log('click on Monthly checkbox Checkout');
}

function monthlyPlanInfo(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on info for Monthly Checkout'
    });
    console.log('click on info for Monthly Checkout');
}

function yearlyPlan(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Yearly checkbox Checkout'
    });
    console.log('click on Yearly checkbox Checkout');
}

function yearlyPlanInfo(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on info for Yearly Checkout'
    });
    console.log('click on info for Yearly Checkout');
}

function noPlan(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Unlimited checkbox Checkout'
    });
    console.log('click on Unlimited checkbox Checkout');
}

function noPlanInfo(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on info for ULA Checkout'
    });
    console.log('click on info for ULA Checkout');
}

function returnPolicy(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Return policy Checkout'
    });
    console.log('click on Return policy Checkout');
}

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1209457,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('trigger', 'homepage_mini-PDP');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - HP mini PDPs',
    'eventAction': 'loaded'
});
console.log('loaded');
window.onload = function(){
    onload_func();
}
// onload_func();
function addSubscriptionTo(_this){
    var clone = document.querySelectorAll('.subscription-details-bottom')[0].cloneNode(true);
    clone.classList.add('subscription-details-item');
    _this.parentNode.appendChild(clone);
}
__addev('.plan-selection .form-check-input','change',function(e){
    var value = this.value;
    _this = document.querySelectorAll('.plan-selection-mobile .form-check-input[value="'+value+'"]')[0];
    document.querySelectorAll('.plan-selection-mobile .subscription-details-bottom').forEach(function(elem,index){
        elem.parentNode.classList.remove('active');
        elem.parentNode.removeChild(elem);
    })
    document.querySelectorAll('.plan-selection .form-check-input').forEach(function(ele,ind){
        ele.closest('.checkbox').classList.remove('active');
    });
    document.querySelectorAll('.plan-selection-mobile .form-check-input:checked')[0].closest('.checkbox').classList.add('active');
    console.log('addSubscriptionTo');
    setTimeout(function(_this){
        addSubscriptionTo(_this);
    },10,_this);
});


__addev('.plust-qty','click',function(){
   var parent  = __parent(this);
    var Select = __get('select',parent)[0];
    var current_val = Number(Select.value);
    next_val = current_val+1;
    if(__get('select option[value="'+next_val+'"]').length < 1){
        var newOption = __new('option');
        __attr(newOption,'value',next_val);
        __html(newOption,next_val);
        __append(newOption,Select);
    }
    Select.value = next_val;
    const event = new Event('change');
    Select.dispatchEvent(event);
});
__addev('.minust-qty','click',function(){
   var parent  = __parent(this);
    var Select = __get('select',parent)[0];
    var current_val = Number(Select.value);
    next_val = current_val-1;
    if( next_val >=1 ){
        Select.value = next_val;
    }
    const event = new Event('change');
    Select.dispatchEvent(event);
});
__addev('.nuttons-wraper .gpay-button-fill.gpay-buttonin-wraper','click',function(){
    __get('.gpay-button-fill:not(.gpay-buttonin-wraper) button')[0].click();
})
__addev('.nuttons-wraper button[data-v-f514eb88]','click',function(){
    __get('button[data-v-f514eb88]:not(.gpay-buttonin-wraper)')[0].click();
})
// if(__get('.paypal-buttons').length > 0){
//     var buttonswraper = __new('div');
//     __addclass(buttonswraper,'nuttons-wraper');
//     var clonePaypalButton = __get('.paypal-buttons')[0].cloneNode(true);
//     __append(clonePaypalButton,buttonswraper);
//
//     if(__get('.gpay-button-fill').length > 0){
//         var clonegoogle = __get('.gpay-button-fill')[0].cloneNode(true);
//         __addclass(clonegoogle,'gpay-buttonin-wraper');
//         __append(clonegoogle,buttonswraper);
//     }
//     var cloneButton = __get('button[data-v-f514eb88]')[0].cloneNode(true);
//     __addclass(cloneButton,'gpay-buttonin-wraper');
//     __append(cloneButton,buttonswraper);
//
//     __after(buttonswraper,document.querySelectorAll('.quantity-subtotal')[0]);
// }
__addev('.product-descriptions .product-description .titleEl-product','click',function(){
    el = this.closest('.product-description');
    if(el.classList.value.indexOf('active') < 0) {
        __addclass(this.closest('.product-description'), 'active');
    }else{
        __removeclass(this.closest('.product-description'), 'active');
    }
});
__get('.product-descriptions .product-description').forEach(function(el,index){
    var main__text = __get('.main-bold',el)[0];
    main_Text = main__text.innerHTML;
    var descWrap = main__text.closest('.product-description');
    var text_desc = __get('div',descWrap)[0].innerHTML;
    var description_el = __get('div',descWrap)[0];
    description_el.remove();
    var wraperEl       = __new('div');
    var titleEl        = __new('div');
    var textEl         = __new('div');
    __addclass(textEl,'textEl-product');
    __addclass(titleEl,'titleEl-product');
    __addclass(wraperEl,'wraperEl-product');
    titleEl.innerHTML  = main_Text;
    textEl.innerHTML   = text_desc;
    __append(titleEl,descWrap);
    __append(textEl,descWrap);
    textEl.querySelector('.main-bold').remove();
    if(__get('.fa-check',el).length > 0){
        __get('.fa-check',el)[0].remove();
    }
})


if(document.querySelectorAll('.customers').length > 0){
  var link = document.createElement('link');link.rel = "stylesheet";link.href = "https://unpkg.com/swiper@6.5.0/swiper-bundle.min.css";document.querySelector('body').appendChild(link);
  var element = document.querySelector('.customers').cloneNode(true);
  element.classList.remove('customers');
  element.classList.add('customers-slider');
  var newwraper = document.createElement('div');
  newwraper.classList.add('swiper-container');
  newwraper.appendChild(element);
  var pagination = document.createElement('div');
  pagination.classList.add('swiper-pagination');
  newwraper.appendChild(pagination);
  document.querySelector('.customers').insertAdjacentElement('afterend',newwraper);
  document.querySelector('.customers').remove();
  document.querySelectorAll('.customers-slider')[0].classList.add('swiper-wrapper')
  document.querySelectorAll('.customers-slider')[0].classList.remove('customers-slider')
  document.querySelectorAll('.swiper-container .customer').forEach(function(ele,ind){
      ele.classList.add('swiper-slide')
      ele.classList.remove('customer')
  })
  var jsscript = document.createElement('script');
  jsscript.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
  jsscript.onload = function(){
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
      });
  }
  document.querySelector('body').appendChild(jsscript);
}