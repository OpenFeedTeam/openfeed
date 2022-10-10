
function bindDialog(itemId, dialogId){
    $(itemId).hover(function(){
        $(dialogId).fadeIn('fast');
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
 
  
 });