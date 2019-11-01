// JavaScript Document
function tabChange(obj,id)  //定义了一个叫tabChange的方法，其中有两个参数，一个对象（即给谁这个功能或方法），另一个是对像的“id值”。这也是为什么我们在写样式时，要使用ID选择器。
{
 var arrayli = obj.parentNode.getElementsByTagName("li"); //获取li数组
 var arrayul = document.getElementById(id).getElementsByTagName("ul"); //获取ul数组
 for(i=0;i<arrayul.length;i++)
 {
  if(obj==arrayli[i])
  {
   arrayli[i].className = "cli";  //动作执行时当前的类名为“cli”
   arrayul[i].className = "";
  }
  else
  {
   arrayli[i].className = "";
   arrayul[i].className = "hidden";
  }
 }
}
