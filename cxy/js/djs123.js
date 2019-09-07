// 1. 获取元素
var hours = document.querySelectorAll('.hours');
var minutes = document.querySelectorAll('.minutes');
var seconds = document.querySelectorAll('.seconds');

// 2. 开启一个定时器,间隔时间为1000毫秒
var num = setInterval(function () {
  fn();
}, 1000);


// 3 封装
function fn() {
  // 3.1 定义两个时间（现在、未来）
  var start = new Date();
  var end = new Date('2019/6/20 10:26:36');
  // 3.2 计算两个日期的时间差（毫秒差）
  var temp = end - start;
  // 3.3 把毫秒差转换为多少小时、分钟、秒
  var h = parseInt(temp / 1000 / 60 / 60);
  h = h < 10 ? '0' + h : h;
  var m = parseInt(temp / 1000 / 60 % 60);
  m = m < 10 ? '0' + m : m;
  var s = parseInt(temp / 1000 % 60);
  s = s < 10 ? '0' + s : s;

  for (var i=0; i<hours.length; i++) {
    // 3.4 赋值到页面上的元素
      hours[i].innerText = h;
      minutes[i].innerText = m;
      seconds[i].innerText = s;

      // 判断时间是否到达目标,若到达停止定时器
      if (temp==0) {
        clearInterval(num);
      }
    
      if (temp< 0) {
        clearInterval(num);
        hours[i].innerText = '00';
        minutes[i].innerText = '00';
        seconds[i].innerText = '00';
      }
  }
  
};
fn();