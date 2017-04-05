
require(['jquery','./data','css!./style.css','./number'],function($){
  var data = require('./data');

  console.log($);
  console.log(data);

  var num = require('./number')
  console.log(num);//requirejs创建模块时可以传很多种不同类型的参数

  $('.about').on('click',function(){
    alert(data.data)
  });

  setInterval(function(){
    var date = new Date();
    $('#date').html(date);
  },1000)
})
