// function test_function(){
//     console.log('test_function run');
// }
// test_function();

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function save_top_product(url){
    var product_id  = $.inArray(url,window.top_items);
    var _pot        = getCookie('_pot') || '[]';
    var _pot_json   = JSON.parse(_pot);
    var is_in_array = $.inArray(product_id,_pot_json);
    if( product_id !== -1 ){
        if( is_in_array == -1 ){
            _pot_json.push(product_id);
            var _pot = JSON.stringify(_pot_json);
            setCookie('_pot',_pot,7);
            console.log('save_top_product '+url);
        }else{
            console.log('already added '+url);
        }
    }else{
        console.log('is not on top 25 '+url);
    }
}
function is_product_in_top(url){
    console.log('url '+url);
    var product_id  = $.inArray(url,window.top_items);
    console.log('product_id '+product_id);
    if(product_id !== -1){
        return 'true';
    }
    return 'false';
}