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
var styles = "<style>";
styles += `
.kb-estimated-cost{
	width: 500px!important;
	max-width: 500px!important;
	padding: 20px 25px 22px!important;
	background-color: #F1F4E8 !important;
		margin-right: auto !important;
	display: flex !important;
	flex-direction: column;
	margin-left: auto !important;
}
.kb-task-create-payment__estimated-cost{
	margin-right: 75px!important;
	display: block !important;
	margin-left: auto !important;
	max-width: 500px;

}
.kb-estimated-cost__currency{
	margin-right: 70px;
}
.kb-task-create-payment__item.kb-task-create-payment__item_type_cost-description{
	margin-top: 20px!important;
	padding-left: 0!important;
	font-size: 13px!important;
	line-height: 19px!important;
	color: rgba(0,0,0, 0.6)!important;
	order: 2;
}
.kb_bonus_type {
	color: #808080;
}
.kb_bonus_type.active {
		background-color: #F1F4E8;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		color: #000;
}
.kb_cash-text{
font-size: 13px;
color: #959595;
margin-top: 10px;
}
.kb_right_col {
	width: 54%;
	background-image: url("https://res.cloudinary.com/dbbrpie5a/image/upload/v1573754063/kabanchik/star_ch6t62.svg");
	background-position: left 9px;
	background-size: 16px;
	padding-left: 29px;
	background-repeat: no-repeat;
}
.kb_left_col {
	width: 46%;
	background-image: url("https://res.cloudinary.com/dbbrpie5a/image/upload/v1573754063/kabanchik/star_ch6t62.svg");
	background-position: left 9px;
	background-size: 16px;
	padding-left: 29px;
	background-repeat: no-repeat;
}
.kb_bonus_type:hover {
	text-decoration: none;
}
.standart_right_col {
	display: none;
}
.kb-estimated-cost__label {
order: 0;	
}
#price-checkbox-wrapper {
	order: 1;
}
.kb-text.kb-text_mt_10 {
	order: 2;
}
#cash-text {
	order: 3;
}
.kb-task-create__note.custom_data_info {
	display: none;
}
.kb_bonus_wrapper {
	order: 3;
}

.kb_right_col {
	display: none;
}
.kb_right_col {
	display: block;
}
.kb-task-create-payment__section {
	display: flex;	
}
.kb-task-create-payment__estimated-cost .kb-task-create-payment__attributes.translate{
	display: flex;
	max-width: 500px;
	align-items: center;
	width: 100%;
    justify-content: space-around;
    margin-top: 20px;
}
.kb-task-create-payment__estimated-cost .kb-task-create-payment__attributes.translate .kb-task-create-payment__radio-holder+.kb-task-create-payment__radio-holder{
	margin-top: 0;
}
.kb-task-create__note{
	line-height: normal;
}
.kb-estimated-cost>div:nth-child(2){
	display: flex;
	display: flex;
    align-items: center;
}
.kb-estimated-cost>div:nth-child(2) .kb-text.kb-text_mt_10{
	margin-top: 0!important;
}
.kb-estimated-cost>div:nth-child(1){
	order: 0;
}
.kb-estimated-cost>div:nth-child(2){
	order: 1;
}
.kb-estimated-cost>div:nth-child(3){
	display: none;
}
`;
styles    += "</style>";
jQuery('body').append(styles);
	function proPrice(){
		var resTooltip = Number(Number(document.getElementById('data_response_obj').dataset.cost) + Number(document.getElementById('data_response_obj').dataset.cost * 0.2));
		return resTooltip;
	}
	function countCashback(){
		document.querySelector('.replaced_b').innerHTML = parseInt(document.querySelector('.kb-estimated-cost__input-holder input').value * 0.05) + ' грн';
	    if (parseInt(document.querySelector('.replaced_b').textContent) > 250) {
	    	document.querySelector('.replaced_b').innerHTML = 250 + ' грн';
	    }
	}
	function normalPrice(){
		var resTooltip1 = Number(document.getElementById('data_response_obj').dataset.cost);
		return resTooltip1;
	}
	function createBlock(){

		try {
		    hj('trigger', 'open_create_task_form');
		}
		catch(e) {}
	  	ga('send', 'event', 'Exp - Add pro plan to the form', 'activated', {nonInteraction: true});

		console.log('createBlock111')
		if(!document.querySelector('.kb_bth_wrapper')){
				console.log('createBlock')
			document.querySelector('.kb-task-create-payment__estimated-cost').insertAdjacentHTML('afterbegin', `
				<div class="kb_bth_wrapper" style="display:flex; max-width: 600px;">
				<a href="" class="kb_bonus_type active kb_bonus_pro" style="font-style: normal;font-weight: bold;font-size: 16px; display: flex; height:73px; justify-content:center;align-items: center; width:50%; "><img src="https://res.cloudinary.com/dbbrpie5a/image/upload/v1573754050/kabanchik/icon_PRO_vtezpr.svg" data-img1="https://res.cloudinary.com/dbbrpie5a/image/upload/v1573754050/kabanchik/icon_PRO_vtezpr.svg" data-img2="https://res.cloudinary.com/dbbrpie5a/image/upload/v1573754050/kabanchik/icon_PRO_gray_qgygga.svg"  style="width:30px; margin-right: 22px;">Профессионал</a>
				<a href="" class="kb_bonus_type kb_bonus_standart" style="font-style: normal;font-weight: bold;font-size: 16px; display: flex; height:73px; justify-content:center;align-items: center; width:50%;"><img src="https://res.cloudinary.com/dbbrpie5a/image/upload/v1573754050/kabanchik/icon_percent_gray_ajre3p.svg" data-img1="https://res.cloudinary.com/dbbrpie5a/image/upload/v1573754050/kabanchik/icon_percent_ju3rg3.svg" data-img2="https://res.cloudinary.com/dbbrpie5a/image/upload/v1573754050/kabanchik/icon_percent_gray_ajre3p.svg" style="width:30px; margin-right: 22px;">Стандарт</a>
				</div>`);
			document.querySelector('.kb-estimated-cost').insertAdjacentHTML('beforeend', `			
				<div class="kb_bonus_wrapper" style="display:flex; margin-top:28px;">
					<div class="kb_left_col">
					<div class="kb_cash-text">5% от бюджета задания после его закрытия и написания отзыва об исполнителе будут начислены на ваш баланс.
				     </div>
					</div>
				<div class="kb_right_col ">
					<div class=" pro_right_col">
					<div class="kb-text kb-text_mt_10"> Почему <b>Профессионал?</b></div>
					<div class="kb_cash-text">Вы получите больше предложений от профессиональных исполнителей!
				     </div>
					</div>
					<div class="standart_right_col">
					<div class="kb-text kb-text_mt_10"> Почему <b>Стандарт?</b></div>
					<div class="kb_cash-text">Мы найдем для вас специалистов с минимальным бюджетом
				     </div>
					</div>
				</div>
				</div>
				`);
			updatePrice()
			document.querySelector('.kb-task-create-payment__estimated-cost').appendChild(document.querySelector('.kb-task-create-payment__attributes.translate'))
			document.querySelectorAll('.kb-task-create-payment__section')[1].style.display = 'none'
			document.querySelector('.kb-estimated-cost').appendChild(document.querySelector('.kb-task-create-payment__item_type_cost-description'))
			document.querySelector('.kb_left_col').insertAdjacentElement('afterbegin', document.querySelectorAll('.kb-text.kb-text_mt_10')[1]);
	        document.querySelectorAll('.kb-text.kb-text_mt_10')[1].querySelector('b').classList.add('replaced_b');
	        document.querySelectorAll('.kb-text.kb-text_mt_10')[1].insertAdjacentElement('afterend', document.querySelectorAll('.kb-text.kb-text_mt_10')[1].querySelector('b'));
	        document.querySelectorAll('.kb-text.kb-text_mt_10')[1].innerHTML = 'Кешбэк ';
	        document.querySelectorAll('.kb-text.kb-text_mt_10')[1].insertAdjacentElement('beforeend', document.querySelector('.replaced_b'));
	        countCashback()
	        document.querySelector('.kb_bonus_pro').onclick = function (e) {
	        	e.preventDefault();
	            if (!this.classList.contains('active')) {
	            	this.classList.add('active');
	            }
	          ga('send', 'event', 'Exp - Add pro plan to the form', 'click','Профессионал')
	            document.getElementById('cost').value = proPrice()
	            document.getElementById('cost').setAttribute('value', proPrice())
	            countCashback()
	            //  after click replace images on buttons (yellow to gray and gray to yellow) and toggle textblock standart to pro
	            var thisImg1 = this.querySelector('img').getAttribute('data-img1');
	            var thisImg2 = this.querySelector('img').getAttribute('data-img2');
	            this.querySelector('img').setAttribute('src', thisImg1);
	            var standart_link = document.querySelector('.kb_bonus_standart');
	            var standart_link_img = standart_link.querySelector('img');
	            var standart_link_img1 = standart_link_img.getAttribute('data-img1');
	            var standart_link_img2 = standart_link_img.getAttribute('data-img2');
	            if (standart_link.classList.contains('active')) {
	            	standart_link.classList.remove('active');
	            }
	            standart_link_img.setAttribute('src', standart_link_img2);
	            document.querySelector('.standart_right_col').style.display = 'none';
	            document.querySelector('.pro_right_col').style.display = 'block';
	        };
	                    // toggle active btn standart 
	        document.querySelector('.kb_bonus_standart').onclick = function (e) {
	                        e.preventDefault();
	                        if (!this.classList.contains('active')) {
	                            this.classList.add('active');
	                            document.querySelector('.replaced_b').innerHTML = Math.round(document.querySelector('.kb-estimated-cost__input-holder input').value * 0.05) + ' грн';
	                            if (parseInt(document.querySelector('.replaced_b').textContent) > 250) {
	                                document.querySelector('.replaced_b').innerHTML = 250 + ' грн';
	                            }
	                        }
	          ga('send', 'event', 'Exp - Add pro plan to the form', 'click','Стандарт')  
	                        document.getElementById('cost').value = normalPrice()
	                        document.getElementById('cost').setAttribute('value', normalPrice())
	                        countCashback()
	                        var thisImg1 = this.querySelector('img').getAttribute('data-img1');
	                        var thisImg2 = this.querySelector('img').getAttribute('data-img2');
	                        this.querySelector('img').setAttribute('src', thisImg1);

	                        var pro_link = document.querySelector('.kb_bonus_pro');
	                        var pro_link_img = pro_link.querySelector('img');
	                        var pro_link_img1 = pro_link_img.getAttribute('data-img1');
	                        var pro_link_img2 = pro_link_img.getAttribute('data-img2');
	                        if (pro_link.classList.contains('active')) {
	                            pro_link.classList.remove('active');
	                        }
	                        pro_link_img.setAttribute('src', pro_link_img2);
	                        document.querySelector('.standart_right_col').style.display = 'block';
	                        document.querySelector('.pro_right_col').style.display = 'none';
	                    };
		}
	}
	function updatePrice(){
		if(document.querySelector('.kb_bonus_standart').classList.contains('active')){
			document.getElementById('cost').value = normalPrice()
			document.getElementById('cost').setAttribute('value', normalPrice())
		} else {
			document.getElementById('cost').value = proPrice()
			document.getElementById('cost').setAttribute('value', proPrice())
		}
	}
	function dynamicCashback(){
		console.log('started');
		var inputPresent = setInterval(function(){
			if(document.getElementById('cost')){
				console.log(document.getElementById('cost'));
				clearInterval(inputPresent)
				document.getElementById('cost').addEventListener('input', function(){
					countCashback();
				})
				document.getElementById('cost').addEventListener('focus', function(){
	            	ga('send', 'event', 'Exp - Add pro plan to the form', 'click','Price field')
				})
			}
		})
	}
	function priceObserver(){
		var target = document.getElementById('data_response_obj');
			const config = {
				attributes: true,
				childList: true,
				subtree: true
			}; 
			const callback = function(mutationsList, observer) {
				for (let mutation of mutationsList) {
					if (mutation.type === 'attributes') {
						if(mutation.attributeName == 'data-cost'){
							createBlock()
							updatePrice()
							countCashback()
							dynamicCashback()
	                        // document.getElementsByName('isCostDiscussed')[0].addEventListener('click', function(){ga('send', 'event', 'Exp - Add pro plan to the form', 'click','Цена обсуждается')})
							console.log('The ' + mutation.attributeName + ' attribute was modified.');
	                        // document.getElementsByName('payment')[0].addEventListener('click', function(){ga('send', 'event', 'Exp - Add pro plan to the form', 'click','Оплата наличными')})
	                        // document.getElementsByName('payment')[1].addEventListener('click', function(){ga('send', 'event', 'Exp - Add pro plan to the form', 'click','Оплата через сайт')})
						}
					}
				}
			};
			const observer = new MutationObserver(callback);
			observer.observe(target, config);
	}
	var divIsPresent = setInterval(function(){
		if(document.getElementById('data_response_obj')){
			createBlock()
			clearInterval(divIsPresent);
			dynamicCashback()
			priceObserver()
		}
	})

	$(document).on('click', '[name="isCostDiscussed"]', function(event) {
		try{
			ga('send', 'event', 'Exp - Add pro plan to the form', 'click','Цена обсуждается');
		}catch(e){}
		console.log('Цена обсуждается');
	});
	$(document).on('click', '[name="payment"]:eq(0)', function(event) {
		try{
			ga('send', 'event', 'Exp - Add pro plan to the form', 'click','Оплата наличными');
		}catch(e){}
		console.log('Оплата наличными');
	});
	$(document).on('click', '[name="payment"]:eq(1)', function(event) {
		try {
			ga('send', 'event', 'Exp - Add pro plan to the form', 'click','Оплата через сайт');
		}catch(e){}
		console.log('Оплата через сайт');
	});

	});
}