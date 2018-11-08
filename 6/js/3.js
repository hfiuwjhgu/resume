//让#container下第一个div默认显示
document.querySelector("#container>div")
        .style.zIndex="10";
//查找触发事件的元素: 所有data-toggle=tab的元素
var tabs=document.querySelectorAll(
  "#tab>li>[data-toggle=tab]"
);
for(var tab of tabs){//绑定事件
  tab.onclick=function(e){
    e.preventDefault();
    var tab=this;
    //查找要修改的元素
    var id=//tab.href;//获得要显示的div的id: "#content1"
           tab.getAttribute("href");
    var div=document.querySelector(id);//用id找要显示的div
    var divs=div.parentNode.children;//找当前div所有兄弟
    //修改元素
    for(var d of divs){ //清除所有兄弟div的zIndex
      d.style.zIndex="";
    }
    div.style.zIndex="10";//让当前div的zIndex最高
  }
}