
// Hotjar trigger to record video sessions
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
        hj('trigger', 'Experiment__trust_icons_removing');
        console.log('h,o,t,j,a,r');
}
catch(e) {}

// Activation of the alt variation
window.dataLayer = window.dataLayer || [];
dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'ROW, PDP: trust icons removing',
        'eventAction': 'loaded'
});