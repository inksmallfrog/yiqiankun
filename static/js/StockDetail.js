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

    //初始化股票为上证指数
    this.changeStock("000001SH");

    //绑定事件
    var stock_detail = this;
    $(".stocklist-select").comboSelect({
        comboClass: "combo-select stocklist-combo"
    });
    $(".stocklist-select").change(function(){
        stock_detail.changeStock($(this).val());
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
    this.updateDetail();

    if(this.graph_type == "graph-time"){
        this.updateGraph();
    }
};

//绑定详情数据
StockDetail.prototype.bindData = function(){
    var stock = this.stock_graph.stock;

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

    this.setTextColor($(".detail-price"), stock.price, stock.close);
    this.setTextColor($(".detail-updown"), stock.price, stock.close);
    this.setTextColor($("#open"), stock.open, stock.close);
    this.setTextColor($("#high"), stock.high, stock.close);
    this.setTextColor($("#max"), stock.max, stock.close);
    this.setTextColor($("#low"), stock.low, stock.close);
    this.setTextColor($("#min"), stock.min, stock.close);
};

//查询新股票
StockDetail.prototype.changeStock = function(id){
    this.stock_graph.stock.id = id;

    this.updateDetail();
    this.updateGraph();
};

//更新股票详情
StockDetail.prototype.updateDetail = function(){
    var stock_detail = this;
    /*
     * 发送股票详情请求
     * 发送目标：{root}/getstockdata
     * 发送方式：post
     * 发送内容：id => 股票id
     * 返回格式：json
     * 期待返回内容：id => 股票id
     *               code => 股票代码
     *               name => 股票名称
     *               abbr => 股票缩写
     *               price => 当前价格
     *               open => 开盘价
     *               close => 收盘价
     *               high => 最高价
     *               low => 最低价
     *               max => 涨停价
     *               min => 跌停价
     *               vol => 总量
     *               value => 总额
     *               marketvalue => 市值
     *               available_marketvalue => 流通市值
     */
    $.post("../getstockdata", {id: stock_detail.stock_graph.stock.id}, function(data){
        stock_detail.stock_graph.stock.readDetail(data);
        stock_detail.bindData();
    }, "json");
}

//更新股票图表
StockDetail.prototype.updateGraph = function(){
    var stock_detail = this;
    /*
     * 发送股票图表请求
     * 发送目标：{root}/getstockgraphdata
     * 发送方式：post
     * 发送内容：id => 股票id
     *           type => 图表类型('graph-daily' => 日线; 'graph-weekly' => 周线; 'graph-monthly' => 月线'; 'graph-time' => '分时图')
     * 返回格式：二维数组
     * 期待返回内容：[时间，开盘，收盘，最低，最高]
     */
    $.post("../getstockgraphdata", {id: stock_detail.stock_graph.stock.id, type: stock_detail.graph_type}, function(data){
        stock_detail.stock_graph.stock.readGraphData(data);
        stock_detail.stock_graph.drawGraph();
    });
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

//设置颜色
StockDetail.prototype.setTextColor = function(node, price, close){
    var is_up = 0;
    if(price > close){
        is_up = 1;
    }
    else if(price < close){
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

