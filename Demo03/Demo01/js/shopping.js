/**
 * Created by zongjuan.wang on 2016/6/1.
 */

oNext=oParent.nextElementSibling||oParent.nextElementSibling;
oPre=Oparent.previousElementSibling||oParent.previousElementSibling;
oFirst=oParent.fristElementChild || oParent.firstChild;
oLast=oParent.lastElementChild || oParent.lastChild;
function  accounts() {
    var p1=document.getElementsById("price0");
    alert(p1);
    var p2=document.getElementById("price1").innerText;
    var obj=document.getElementsByClassName("content");
    var str="您本次购买的商品信息如下：\n商品名称:白岩松：白说:"+p1+"\n岛上书店；"+p2+"\n商品总计："+total();
    alert(str);
    obj.oLast.innerText(str);
    alert("你好");
}
/*关闭窗口*/
function close_plan(){
    window.close();
}
function collection(){
    var flag=confirm("移入收藏后，将不再购物车显示，是否继续操作?");
    if(flag==true){
        alert("移入收藏成功!");
    }
}
function del(){
    var flag=confirm("您确定要删除商品吗?");
    if(flag==true){
        alert("删除成功!");
    }
}
function minus(num){
    var prices=document.getElementsByName("price")[num].value;
    var count=parseInt(document.getElementsByName("amount")[num].value)-1;
    if(count<1){
        alert("不能再减了，再减就没有啦！");
    }
    else{
        document.getElementsByName("amount")[num].value=count;
        var totals=parseFloat(prices*count);
        document.getElementById("price"+num).innerHTML="¥" +(totals.toFixed(2));
        total();
    }
}
function plus(num){
    var prices=document.getElementsByName("price")[num].value;
    var count=parseInt(document.getElementsByName("amount")[num].value)+1;
    document.getElementsByName("amount")[num].value=count;
    var totals=parseFloat(prices*count);
    document.getElementById("price"+num).innerHTML="¥" +(totals.toFixed(2));
    total();
}
function total(){
    var prices=document.getElementsByName("price");
    var count=document.getElementsByName("amount");
    var sum=0;
    for(var i=0; i<prices.length;i++){
       sum+=prices[i].value*count[i].value;
    }
    document.getElementById("totalPrice").innerHTML="¥" +(sum.toFixed(1));
}
total();