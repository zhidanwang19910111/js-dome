/*
  author:dan
  time: 2018-01-15
  usage: 获取一个元素
  params: 
   1.获取一个元素 ele
   2.获取一个属性 attr
   3.方向 dir（步进速度）
   4.秒数 seconds
   5.执行完当前之后的回调
*/
function doMove ( obj, attr, dir, target, seconds, endFn ) {
  dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
  clearInterval( obj.timer );
  obj.timer = setInterval(function () { 
    var speed = parseInt(getStyle( obj, attr )) + dir;      // 步长
    if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
      speed = target;
    }
    obj.style[attr] = speed + 'px';
    if ( speed == target ) {
      clearInterval( obj.timer );
      endFn && endFn();
      
    }
  }, seconds);
}

/*
  author:dan
  time: 2018-01-15
  usage: 获取一个元素
  params: 
   1.获取一个元素 ele
   2.获取一个属性 attr
   3.方向 dir（步进速度）
   4.秒数 seconds
   5.执行完当前之后的回调
*/
function opacityMove(){

}




















