function task(){
  var show=document.querySelector(
    "#slider>img.show"
  );
  show.className="";
  if(show.nextElementSibling!==null)
    show.nextElementSibling.className="show";
  else
    show.parentNode.children[0].className="show"
}
var n=setInterval(task,3000);
var $slider=document.getElementById("slider")
//鼠标进入停止定时器
$slider.onmouseover=function(){
  clearInterval(n);
}
//鼠标移出重新启动定时器
$slider.onmouseout=function(){
  n=setInterval(task,3000);
}