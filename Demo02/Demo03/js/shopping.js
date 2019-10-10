function minis(num){
    var prices = document.getElementsByName("price")[num].value;
    var count = parseInt(document.getElementsByName("amount")[num].value) - 1;
    if (count < 1) {
        alert("不能再减了，再减就没有了");
    } else {
        document.getElementsByName("amount")[num].value = count;
        var totals = parseFloat(prices * count);
        document.getElementById("price" + num).innerHTML = "￥" + totals;
        total();
    }
}
function collection(){
    if(confirm("移入收藏后，将不再购物车显示，是否继续操作?")){
        alert("移入收藏成功!");
    }
}
function del(){
    if(confirm("您确定要删除商品吗?")){
        alert("删除成功!");
    }
}
function close_plan(){
    window.close();
}
function plus(num){
    var prices = document.getElementsByName("price")[num].value;
    var count = parseInt(document.getElementsByName("amount")[num].value) + 1;
    document.getElementsByName("amount")[num].value = count;
    var totals = parseFloat(prices * count);
    document.getElementById("price" + num).innerHTML = "￥" + totals;
    total();
}
function total(){
    var prices = document.getElementsByName("price");
    var count = document.getElementsByName("amount");
    var sum = 0;
    for (var i = 0; i < prices.length; i++) {
        sum += prices[i].value * count[i].value;
    }
    document.getElementById("totalPrice").innerHTML = "￥" + sum;
}
total();