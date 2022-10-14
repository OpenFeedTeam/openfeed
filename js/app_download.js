
function contains(data, text){
    return data.indexOf(text) != -1;
}

var userAgent = window.navigator.userAgent.toLowerCase();


$(function(){

    //获取应用信息
    $.get('app_info.json?t='+Date.now(), function(data){
        var appInfo = {};

        if(contains(userAgent, 'iphone')){
            //fix ios的css active 伪类无效果
            document.addEventListener('touchstart', function() {},false);
            appInfo = data.ios;
        }else if(contains(userAgent, 'android')){
            appInfo = data.android;
        }

        $('#app_name').text('OpenFeed '+ appInfo.versionName);
        $('#download_btn').attr('href', appInfo.fileDownloadUrl);
    });

    //检测是否是微信环境
    if(contains(userAgent, 'android') && contains(userAgent, 'micromessenger')){
        $('#wx_tips').show();
        $('#download_btn').hide();
    }
  
 });