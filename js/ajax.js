//type, url, data, success, failed
function Ajax(obj){
    // 创建ajax对象
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
 
    var type = obj.type.toUpperCase();
    // 用于清除缓存
    var random = Math.random();
 
    if(typeof obj.data == 'object'){
        var str = '';
        for(var key in obj.data){
            str += key+'=' + obj.data[key]+'&';
        }
        obj.data = str.replace(/&$/, '');
    }
 
    if(type == 'GET'){
        if(obj.data){
            xhr.open('GET', obj.url + '?' + obj.data, true);
        } else {
            xhr.open('GET', obj.url + '?t=' + random, true);
        }
        xhr.send();
 
    } else if(type == 'POST'){
        xhr.open('POST', obj.url, true);
        // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(obj.data);
    }
 
    // 处理返回数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                obj.success && obj.success(xhr.responseText);
            } else {
                if(failed){
                   obj.failed && obj.failed(xhr.status);
                }
            }
        }
    }
}