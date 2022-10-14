
function writeJsElements(srcList){
    for(var i = 0; i< srcList.length ; i++){
        document.write('<scr'+'ipt type="text/javascript" src="'+srcList[i]+'?t='+Date.now()+'"></sc'+'ript>');
    }
}

function writeCssElements(hrefList){
    for(var i = 0; i< hrefList.length ; i++){
        document.writeln('<link rel="stylesheet" type="text/css" href="'+hrefList[i]+'?t='+Date.now()+'">');
    }
}