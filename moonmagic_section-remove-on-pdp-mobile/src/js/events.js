// Hotjar trigger to record video sessions of the alternative variation of the experiment
try {
(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1651990,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
        hj('trigger', 'Experiment__removal_why_shop_with_us');
}
catch(e) {}


// Activation of the alt variation
window.dataLayer = window.dataLayer || [];
dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'ROW, PDP - Why shop with us section removal on PDP',
        'eventAction': 'loaded'
});