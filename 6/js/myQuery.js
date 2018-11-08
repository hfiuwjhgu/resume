jQuery.fn.sum=function(){
    //this->$("ul>li")
    var $elem=this;
    var sum=0;
    for(var elem of $elem){
      sum+=parseFloat(elem.innerHTML)
    }
    return sum;
}
//$("ul>li").sum();