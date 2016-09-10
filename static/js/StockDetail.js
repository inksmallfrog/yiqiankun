/**
 * Created by inksmallfrog on 2016/8/11.
 * 功能：描述股票详情模块
 */
function StockDetail(){
    this.stock_graph = new StockGraph();        //股票图表
    this.graph_type = "graph-daily";            //图片类型
}

StockDetail.prototype.init = function(){
    //================TODO!=====================
    /*
     * 该处内容为当前的股票搜索框模块生成代码
     * 修改搜索框时应修改此处内容
     */
    //建立可查询的股票列表
    var content = stocklist_select;
    for(var i = 0; i < stock_list.length; ++i){
        content +=　'<option value="' + stock_list[i].id + '">' + stock_list[i].name + '(' + stock_list[i].code + ')</option>';
    }
    content += '</select>';
    //================END TODO!=====================

    $(".stocklist-select-box").html(content);

    var date = new Date();
    $("#time-search-y").attr("placeholder", date.format("yyyy"));
    $("#time-search-M").attr("placeholder", date.format("MM"));
    $("#time-search-d").attr("placeholder", date.format("dd"));
    $(".stocklist-time-box").hide();

    //绑定事件
    var stock_detail = this;

    //================TODO!=====================
    /*
     * 该处内容为当前的股票搜索框模块生成代码
     * 修改搜索框时应修改此处内容
     */
    $(".stocklist-select").comboSelect({
        comboClass: "combo-select stocklist-combo"
    });
    //================END TODO!=====================

    $(".search-stock").click(function(){
        var year = $("#time-search-y").val();
        var month = $("#time-search-M").val();
        var date = $("#time-search-d").val();
        var start_time = "";
        if(year != ""){
            if(month != ""){
                if(date != ""){
                    start_time = year + "-" + month + "-" + date;
                }
                start_time = year + "-" + month + "-01";
            }
            start_time = year + "-01-01";
        }
        stock.changeStock($(".stocklist-select").val(), start_time);
    });

    $(".graph-type-selector").click(function(){
        var new_type = $(this).attr("id");
        if( new_type != stock_detail.graph_type ){
            $(this).addClass("current");
            $("#" + stock_detail.graph_type).removeClass("current");
            stock_detail.graph_type = new_type;
            var year = $("#time-search-y").val();
            var month = $("#time-search-M").val();
            var date = $("#time-search-d").val();
            var start_time = "";
            if(year != ""){
                if(month != ""){
                    if(date != ""){
                        start_time = year + "-" + month + "-" + date;
                    }
                    start_time = year + "-" + month + "-01";
                }
                start_time = year + "-01-01";
            }
            stock.updateGraphData(start_time);
        }
    });
    $(".search-box-tip-change").click(function(){
        switch($(this).attr("data")){
            case "code":
                $(".search-box-tip").html('代码<div class="triangle-right-bottom"></div>');
                $(".stocklist-select-box").show();
                $(".stocklist-time-box").hide();
                break;
            case "time":
                $(".search-box-tip").html('时间<div class="triangle-right-bottom"></div>');
                $(".stocklist-select-box").hide();
                $(".stocklist-time-box").show();
                break;
        }
    });
    $("#time-search-y").change(function(){
        if($(this).val().length == 4){
            $("#time-search-M").focus();
        }
    });
    $("#time-search-M").change(function(){
        if($(this).val().length == 2){
            $("#time-search-d").focus();
        }
    });
};

StockDetail.prototype.update = function(){
};

StockDetail.prototype.show = function(){
    account.hide();
    strategies.hide();
};

//绑定详情数据
StockDetail.prototype.bindData = function(){
    var selfstock_selector = $(".selfstock-selector");
    if(selfstock.inSelfstock(stock.id)){
        selfstock_selector.html(stock_selector_remove);
        if(user.logged){
            selfstock_selector.unbind("click");
            selfstock_selector.click(function(){selfstock.deleteStock(stock.id);});
        }
    }
    else{
        selfstock_selector.html(stock_selector_add);
        if(user.logged){
            selfstock_selector.unbind("click");
            selfstock_selector.click(function(){selfstock.addStock(stock.id, stock.code, stock.name);});
        }
        else{
            selfstock_selector.unbind("click");
            selfstock_selector.click(function(){$(".selfstock-item").children("a").click();});
        }
    }
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
    $(".scale").html(Number((stock.price - stock.close) * 100.0 / (stock.close * 1.0)).toFixed(2) + "%");
    $("#open").html(Number(stock.open).toFixed(2));
    $("#high").html(Number(stock.high).toFixed(2));
    $("#max").html(Number(stock.max).toFixed(2));
    $("#close").html(Number(stock.close).toFixed(2));
    $("#low").html(Number(stock.low).toFixed(2));
    $("#min").html(Number(stock.min).toFixed(2));

    setBigNumber(stock.vol, "vol");
    setBigNumber(stock.marketvalue, "marketvalue");
    setBigNumber(stock.value, "value");
    setBigNumber(stock.available_marketvalue, "availablemarketvalue");

    setTextColor($(".detail-price"), stock.price, stock.close);
    setTextColor($(".detail-updown"), stock.price, stock.close);
    setTextColor($("#open"), stock.open, stock.close);
    setTextColor($("#high"), stock.high, stock.close);
    setTextColor($("#max"), stock.max, stock.close);
    setTextColor($("#low"), stock.low, stock.close);
    setTextColor($("#min"), stock.min, stock.close);
};



