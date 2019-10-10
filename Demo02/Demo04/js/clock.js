function disptime() {
    var today=new Date();
    var yy=today.getFullYear(); //获得年份
    var m=today.getMonth()+1;     //获得月份
    var d=today.getDate();       //获得天数
    var dd=today.getDay();      //获得星期天数
    var hh=today.getHours();//获取小时、分钟、秒
    var mm=today.getMinutes();//获取分钟
    var ss=today.getSeconds();//获得秒
    var moon="";                //上下午；
    var num="";
    if(hh<12){
        moon="AM";
    }else{
        moon="PM";
        if(hh>12){
            hh-=12;
        }
    }
    if(dd==0){
        num="日";
    }else if(dd==1){
        num="一";
    }else if(dd==2){
        num="二";
    }else if(dd==3){
        num="三";
    }else if(dd==4){
        num="四";
    }else if(dd==5){
        num="五";
    }else if(dd==6){
        num="六";
    }
    if(mm<10){
        mm="0"+mm;
    }
    if(ss<10){
        ss="0"+ss;
    }
    document.getElementById("myclock").innerHTML="<h1>"+yy+"年"+m+"月"+d+"日    "+hh+":"+mm+":"+ss+"    "+moon+"    星期"+num+"</h1>";
}
setInterval("disptime()",1000);