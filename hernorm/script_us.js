window.keradan_env_production = false;
window.keradan_enable_log = true;
function keradan_log(){
  if(window.keradan_enable_log) console.log.apply(this, arguments);
}

window.keradan_ga_event = function(eventAction) {
  let dataLayer = window.dataLayer || [];
  let ga_data = {
    'event': 'event-to-ga',
    'eventCategory': 'Exp - Banners with CTA on articles (only US)',
    'eventAction': eventAction
  };
  keradan_log('keradan ga event: ', ga_data);
  if(window.keradan_env_production) dataLayer.push(ga_data);
}

window.keradan_ga_event('loaded');

try {
  (function(h,o,t,j,a,r){
    h.hj = h.hj || function(){(h.hj.q = h.hj.q || []).push(arguments)};
    h._hjSettings = {hjid:1955547, hjsv:6};
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
  hj('trigger', 'banners_with_CTA_only_US');
  keradan_log('Hotjar ok: ');
}
catch (e) {
  keradan_log('Hotjar error: ', e);
}

let link = 'https://hernorm.com/how-to-find-out-if-hes-cheating/';
let text = '3 Ways to Find Out If He’s Cheating?';

let sticky_box_content = `<span class="text">${text}</span><span class="button"><svg width="10" height="16" viewBox="0 0 10 16" fill="none">
<path d="M9.44469 7.37568L2.32449 0.255608C2.15981 0.090796 1.93997 0 1.70557 0C1.47116 0 1.25133 0.090796 1.08664 0.255608L0.562291 0.779831C0.22109 1.12142 0.22109 1.6766 0.562291 2.01767L6.5413 7.99668L0.555657 13.9823C0.390975 14.1471 0.300049 14.3668 0.300049 14.6011C0.300049 14.8357 0.390975 15.0554 0.555657 15.2203L1.08001 15.7444C1.24482 15.9092 1.46453 16 1.69893 16C1.93334 16 2.15317 15.9092 2.31785 15.7444L9.44469 8.61782C9.60976 8.45248 9.70043 8.23174 9.69991 7.99707C9.70043 7.7615 9.60976 7.54088 9.44469 7.37568Z" fill="white"/>
</svg>
</span>`;


let sticky_box = document.createElement('a');
sticky_box.classList.add('keradan-sticky-box');
sticky_box.setAttribute('href', link);
sticky_box.setAttribute('data-tracking-group', 'cake');
sticky_box.setAttribute('data-action', 'sale.bgc');
sticky_box.innerHTML = sticky_box_content;

sticky_box.addEventListener('click', () => window.keradan_ga_event('BGC sale'));

let styles = `
#adhesion_desktop_wrapper {
  bottom: 54px!important;
  display:none!important;
}

.keradan-sticky-box {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 55px;
  bottom: 0;
  background: #E768B5;
  box-shadow: 0px 0px 10px rgba(133, 35, 94, 0.25);
  color: white;
  text-decoration: none;
  z-index: 99999999999;
}

.keradan-sticky-box span.text {
  color: white;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.4px;
}
  
.keradan-sticky-box span.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background: #A53579;
  margin: 0;
  margin-left: 10px;
  border-radius: 50%;
}
.keradan-sticky-box span.button svg {
  position: relative;
  left: 1px;
}

.hide-sticky-add {
  display:none!important;
}
`;
let styles_el = document.createElement('style');
styles_el.innerHTML = styles;


document.querySelector('head').append(styles_el);
setTimeout(function(){ 
  document.querySelector('body').prepend(sticky_box);

  document.querySelector('div[data-gg-moat]').classList.add('hide-sticky-add');
  console.log("%cTest come 10sec","background:blue;color:white;");
},10000);

console.log("%cTest come","background:green;color:white;");