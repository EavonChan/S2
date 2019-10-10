/**
 * 关闭窗口
 */
function close_plan() {
    window.close();
}

/**
 * 删除商品
 */
function del_goods() {
    if (confirm("您确定要删除商品吗？")) {
        alert("删除成功!");
    }
}

/**
 * 移入收藏
 */
function remove_goods() {
    if (confirm("移入收藏后，将不在购物车显示，是否继续操作？")) {
        alert("移入收藏成功!");
    }
}

/**
 * 结算
 */
function sum_goods() {
    var flag = confirm("您本次购买的商品信息如下：\n商品名称:白岩松：白说、岛上书店；\n商品数量：2件\n商品总计：46.00；\n运费：0元；\n\n请确认以上信息是否有误！！！");
    if(flag){
        alret("您的订单已提交");
    }
}