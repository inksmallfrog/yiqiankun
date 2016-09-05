/**
 * Created by inksmallfrog on 2016/9/5.
 */

//时间格式化函数
Date.prototype.format =function(format)
{
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    };
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
        (this.getFullYear()+"").substr(4- RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length==1? o[k] :
                ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
};

//设置颜色
setTextColor = function(node, price, close){
    var is_up = 0;
    if (Number(price) > Number(close)) {
        is_up = 1;
    }
    else if (Number(price) < Number(close)) {
        is_up = -1;
    }
    node.removeClass("price-up");
    node.removeClass("price-down");
    if(is_up == 1){
        node.addClass("price-up");
    }
    else if(is_up == -1){
        node.addClass("price-down");
    }
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//拆分大数字
setBigNumber = function(value, text){
    var unit = "";
    var base;
    if(value < 1000){
        unit = "";
        base = 1;
    }
    if(value > 999 && value < 10000){
        unit = "千";
        base = 1000;
    }
    else if(value > 9999 && value < 100000000){
        unit = "万";
        base = 10000;
    }
    else{
        unit = "亿";
        base = 100000000;
    }

    var unit_span = "<span class=\"unit\" id=\"" + text + "-unit\">" + unit + "</span>";

    $("#" + text).html(Number(value / base * 1.00).toFixed(2) + unit_span);
};