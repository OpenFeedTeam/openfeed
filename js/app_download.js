var appstore_url = 'https://apps.apple.com/us/app/openfeed/id1645514479';
var apk_url = 'https://feed-templates.oss-cn-guangzhou.aliyuncs.com/app-release1.0.1.apk';

function contains(data, text){
    return data.indexOf(text) != -1;
}


$(function(){

    var userAgent = window.navigator.userAgent.toLowerCase();

    if(contains(userAgent, 'iphone')){
        //fix ios的css active 伪类无效果
        document.addEventListener('touchstart', function() {},false);

        $('#download_btn').attr('href', appstore_url);
    }else if(contains(userAgent, 'android')){
        $('#download_btn').attr('href', apk_url);
    }

    //检测是否是微信环境
    if(contains(userAgent, 'android') && contains(userAgent, 'micromessenger')){
        $('#wx_tips').show();
        $('#download_btn').hide();
    }
  
 });