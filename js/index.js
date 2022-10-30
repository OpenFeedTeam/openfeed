
function bindDialog(itemId, dialogId){
    $(itemId).hover(function(){
        $(dialogId).css('opacity', 1).fadeIn('fast');
    }).mouseleave(function(){
        $(dialogId).fadeOut('fast');
    });
}

$(function(){

    //默认隐藏所有对话框
    $('.dialog').hide();

    bindDialog('#android_item', '#android_dialog');
    bindDialog('#ios_item', '#ios_dialog');
    bindDialog('#ide_item', '#ide_dialog');

    //设置下载链接
    $.get('app_info.json?t='+Date.now(), function(data){
        $('#android_download_link').attr('href', data.android.fileDownloadUrl);
    });
    // $.get('desktop_info.json?t='+Date.now(), function(data){
    //     $('#windows_download_link').attr('href', data.windows.fileDownloadUrl);
    //     $('#mac_download_link').attr('href', data.mac.fileDownloadUrl);
    // });
    
  
 });