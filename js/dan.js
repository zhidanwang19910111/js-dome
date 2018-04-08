/*
  author:dan
  time: 2018-01-15
  usage: 兼容获取一个元素的样式
  params: ele=>获取的元素，style=>获取的样式属性
*/
function getStyle(ele, style){
	return ele.currentStyle ? ele.currentStyle[style] : getComputedStyle(ele, '0')[style];
}

/*
  author:dan
  time: 2018-01-15
  usage: 获取一个元素
  params: 元素
*/
function $(ele) {
	if(typeof ele == 'function'){
		window.onload = ele;
	}
	if(typeof ele == 'string'){
		return document.getElementById(ele)
	}
}
/*
  author:dan
  time: 2018-01-30
  usage: 判断一个字符串是不是全都是数字
  params: 
   1.str 字符串
*/
function isAllNum(str){
  for(var i=0;i<str.length;i++){
      if(str[i].charCodeAt() > 48 && str[i].charCodeAt() < 57){
          return true;
      }else{
          return false;
      }
  }
}
/*
  author:dan
  time: 2018-01-30
  usage: 判断一个字符串在另一个字符串中出现多少次
  params: 
   1.str 字符串
   2.strTime 被判断出现次数的字符串
*/
function strCount(str, strTime){
  var occurTime = 0;
  var position = 0;
  while(str.indexOf(strTime,position) != -1){
      position = str.indexOf(strTime,position) + strTime.length;
      occurTime ++;
  }
  return occurTime;
}

/*
  author:dan
  time: 2018-03-01
  usage: 判断浏览器的型号
  params: null
  return: ['bowserType', 'version']
*/
function browser (){
  var ua=window.navigator.userAgent,
      ret="";
  //判断为火狐
  if(/Firefox/g.test(ua)){

    ua=ua.split(" ");
    ret="Firefox|"+ua[ua.length-1].split("/")[1];
  }
  //判断为ie
  else if(/MSIE/g.test(ua)){

    ua=ua.split(";");
    ret="IE|"+ua[1].split(" ")[2];

  }
  //判断为opera
  else if(/Opera/g.test(ua)){

    ua=ua.split(" ");
    ret="Opera|"+ua[ua.length-1].split("/")[1];

  }
  //判断为chrome
  else if(/Chrome/g.test(ua)){

    ua=ua.split(" ");
    ret="Chrome|"+ua[ua.length-2].split("/")[1];

  }
  //判断为苹果浏览器
  else if(/^apple\s+/i.test(navigator.vendor)){

    ua=ua.split(" ");
    ret="Safair|"+ua[ua.length-2].split("/")[1];

  }else{
      ret="unknown|unknown";
  }

  return ret.split("|");
}

/*
  author:dan
  time: 2018-03-01
  usage: 阻止元素的冒泡
  params: event
*/
function stoppropagation(e){
  window.event? window.event.cancelBubble = true : e.stopPropagation();
}

/*
  author:dan
  time: 2018-03-01
  usage: 阻止浏览器的默认行为
  params: event
*/
function stopDefault(e){
  window.event? window.event.returnValue = false : e.preventDefault();
}

/*
  author:dan
  time: 2018-03-01
  usage: 给一个元素绑定事件
  params: event
*/
function bind(obj, evname, fn){
  if(obj.addEventListener){
    obj.addEventListener(evname, fn, false);
  }else{
    obj.attachEvent('on' + evname, function(){
      fn.call(obj);
    })
  }
}

/*
  author:dan
  time: 2018-03-01
  usage: 判断两个元素是否碰撞
  params: obj1, obj2
*/
function isCollision(obj1, obj2){
  var L1 = obj1.offsetLeft;//第一个元素的左边位置
  var R1 = obj1.offsetLeft + obj1.offsetWidth;//第一个元素的右边位置
  var T1 = obj1.offsetTop;//第一个元素的上边边位置
  var B1 = obj1.offsetTop + obj1.offsetHeight;//第一个元素的下边位置

  var L2 = obj2.offsetLeft;//第一个元素的左边位置
  var R2 = obj2.offsetLeft + obj2.offsetWidth;//第一个元素的右边位置
  var T2 = obj2.offsetTop;//第一个元素的上边边位置
  var B2 = obj2.offsetTop + obj2.offsetHeight;//第一个元素的下边位置

  if(R1 < L2 || L1 > R2 || B1 < T2 || T1 > B2){
    return false;
  }else{
    return true;
  }
}

/*
  author:dan
  time: 2018-03-05
  usage: 获取cookie的value值
  params: key (cookie的key)
*/
function getCookie(key){
  var arr = document.cookie.split('; ');
  for(var i=0;i<arr.length;i++){
    var arr2 = arr[i].split('=');
    if(arr2[0] == key){
      return decodeURI(arr2[1]);
    }
  }
}

/*
  author:dan
  time: 2018-03-05
  usage: 存一个cookie
  params: key (cookie的key)
*/
function setCookie(key, value, expires){
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + expires);
  document.cookie = `${key}=${value};expires=${oDate.toGMTString()}`;
}

/*
  author:dan
  time: 2018-04-08
  usage: 让一个元素做弹性运动
  params: 
*/
function elasticMove(element, style, target, speed, seconds){
  clearInterval(element.timer);
  element.timer = setInterval(function(){
    speed += (target - element.offsetLeft) / 7;
    speed *= 0.7;
    if(Math.abs(speed) <= 1 && Math.abs(target - element.offsetLeft) <= 1){
      clearInterval(element.timer);
      element.style[style] = target + 'px';
      speed = 0;
    }else{
      element.style[style] = element.offsetLeft + speed + 'px';
    }
  },seconds)
}


