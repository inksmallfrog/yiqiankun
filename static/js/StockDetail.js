/**
 * Created by inksmallfrog on 2016/8/11.
 * 功能：描述股票详情模块
 */
function StockDetail(){
    this.stock_graph = new StockGraph();        //股票图表
    this.graph_type = "graph-daily";            //图片类型
}

StockDetail.prototype.init = function(){
    //建立可查询的股票列表
    var content = stocklist_select;
    for(var i = 0; i < stock_list.length; ++i){
        content +=　'<option value="' + stock_list[i].id + '">' + stock_list[i].name + '(' + stock_list[i].code + ')</option>';
    }
    content += '</select>';
    $(".stocklist-select-box").html(content);

    //绑定事件
    var stock_detail = this;
    $(".stocklist-select").comboSelect({
        comboClass: "combo-select stocklist-combo"
    });
    $(".stocklist-select").change(function(){
        stock.changeStock($(this).val());
    });

    $(".graph-type-selector").click(function(){
        var new_type = $(this).attr("id");
        if( new_type != stock_detail.graph_type ){
            $(this).addClass("current");
            $("#" + stock_detail.graph_type).removeClass("current");
            stock_detail.graph_type = new_type;
            stock_detail.updateGraph();
        }
    });
};

//股票详情更新
StockDetail.prototype.update = function(){
    this.bindData();
};

StockDetail.prototype.show = function(){
    account.hide();
    strategies.hide();
};

//绑定详情数据
StockDetail.prototype.bindData = function(){
    $(".detail-name").html(stock.name + "(" + stock.code + ")");
    var status = "price_equal";
    if(stock.price > stock.close){
        status = "price_up";
    }
    else if(stock.price < stock.close){
        status = "price_down";
    }
    $(".detail-price").html(Number(stock.price).toFixed(2) + price_img.replace(/\{price_status}/g, status));
    $(".updown").html(Number(stock.price - stock.close).toFixed(2));
    $(".scale").html(Number((stock.price - stock.close) / stock.close).toFixed(2) + "%");
    $("#open").html(Number(stock.open).toFixed(2));
    $("#high").html(Number(stock.high).toFixed(2));
    $("#max").html(Number(stock.max).toFixed(2));
    $("#close").html(Number(stock.close).toFixed(2));
    $("#low").html(Number(stock.low).toFixed(2));
    $("#min").html(Number(stock.min).toFixed(2));

    this.setBigNumber(stock.vol, "vol");
    this.setBigNumber(stock.marketvalue, "marketvalue");
    this.setBigNumber(stock.value, "value");
    this.setBigNumber(stock.available_marketvalue, "availablemarketvalue");

    setTextColor($(".detail-price"), stock.price, stock.close);
    setTextColor($(".detail-updown"), stock.price, stock.close);
    setTextColor($("#open"), stock.open, stock.close);
    setTextColor($("#high"), stock.high, stock.close);
    setTextColor($("#max"), stock.max, stock.close);
    setTextColor($("#low"), stock.low, stock.close);
    setTextColor($("#min"), stock.min, stock.close);
};

//更新股票图表
StockDetail.prototype.updateGraph = function(){
    stock_detail.stock_graph.drawGraph();
};

//拆分大数字
StockDetail.prototype.setBigNumber = function(value, text){
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

