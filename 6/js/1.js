//查找触发事件的元素
var spans=document.querySelectorAll("ul.tree>li>span")
for(var span of spans){//绑定事件
  span.onclick=function(){
    var span=this;//查找要修改的元素:当前span
    //修改元素
    if(span.className==="open")//如果自己是开着的
      span.className=""; //就把自己关上
    else{//否则,如果自己是关着的
      //查找ul.tree下li下开着的span
      var open=document.querySelector(
        "ul.tree>li>span.open"
      );
      if(open!=null)//如果找到
        open.className="";//将开着的span关上
      span.className="open";//将自己打开
    }
  }
}