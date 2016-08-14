/**
 * Created by inksmallfrog on 2016/8/14.
 * 功能：描述交易模块
 */
function Trade(){
    this.stock_count = 0;
}

Trade.prototype.init = function(){
    var trade_price_input = $(".trade-price-input");
    $(".trade-price-select").click(function(){
        trade_price_input.val($(this).children(".price").html());
    });
    $(".trade-price-add-icon").click(function(){
        trade_price_input.val((Number(trade_price_input.val()) + 0.01).toFixed(2));
    });
    $(".trade-price-minus-icon").click(function(){
        trade_price_input.val(Math.max(Number(trade_price_input.val()) - 0.01, 0).toFixed(2));
    });

    var trade = this;
    $("#trade-button-buy").click(function(){
        trade.buy();
    });
    $("#trade-button-bid").click(function(){
        trade.bid();
    });
};

Trade.prototype.update = function(){
    this.loadHasCount();
    $(".stock-info-code").html(stock.code);
    $(".stock-info-name").html(stock.name);
    var trade_price_input = $(".trade-price-input");
    if(trade_price_input.val() == ""){
        trade_price_input.val((stock.price).toFixed(2));
    };
    $(".trade-price-tip-min").children().children(".price").html((stock.min).toFixed(2));
    $(".trade-price-tip-max").children().children(".price").html((stock.max).toFixed(2));
    $(".trade-counts-has").html("持有" + this.stock_count + "股");

    var bid5 = $("#bid5");
    var bid5_price = bid5.children(".price");
    bid5_price.html((stock.bid5).toFixed(2));
    setTextColor(bid5_price, stock.bid5, stock.price);
    bid5.children(".counts").html(stock.bid5vol);

    var bid4 = $("#bid4");
    var bid4_price = bid4.children(".price");
    bid4_price.html((stock.bid4).toFixed(2));
    setTextColor(bid4_price, stock.bid4, stock.price);
    bid4.children(".counts").html(stock.bid4vol);

    var bid3 = $("#bid3");
    var bid3_price = bid3.children(".price");
    bid3_price.html((stock.bid3).toFixed(2));
    setTextColor(bid3_price, stock.bid3, stock.price);
    bid3.children(".counts").html(stock.bid3vol);

    var bid2 = $("#bid2");
    var bid2_price = bid2.children(".price");
    bid2_price.html((stock.bid2).toFixed(2));
    setTextColor(bid2_price, stock.bid2, stock.price);
    bid2.children(".counts").html(stock.bid2vol);

    var bid1 = $("#bid1");
    var bid1_price = bid1.children(".price");
    bid1_price.html((stock.bid1).toFixed(2));
    setTextColor(bid1_price, stock.bid1, stock.price);
    bid1.children(".counts").html(stock.bid1vol);

    var buy5 = $("#buy5");
    var buy5_price = buy5.children(".price");
    buy5_price.html((stock.buy5).toFixed(2));
    setTextColor(buy5_price, stock.buy5, stock.price);
    buy5.children(".counts").html(stock.buy5vol);

    var buy4 = $("#buy4");
    var buy4_price = buy4.children(".price");
    buy4_price.html((stock.buy4).toFixed(2));
    setTextColor(buy4_price, stock.buy4, stock.price);
    buy4.children(".counts").html(stock.buy4vol);

    var buy3 = $("#buy3");
    var buy3_price = buy3.children(".price");
    buy3_price.html((stock.buy3).toFixed(2));
    setTextColor(buy3_price, stock.buy3, stock.price);
    buy3.children(".counts").html(stock.buy3vol);

    var buy2 = $("#buy2");
    var buy2_price = buy2.children(".price");
    buy2_price.html((stock.buy2).toFixed(2));
    setTextColor(buy2_price, stock.buy2, stock.price);
    buy2.children(".counts").html(stock.buy2vol);

    var buy1 = $("#buy1");
    var buy1_price = buy1.children(".price");
    buy1_price.html((stock.buy1).toFixed(2));
    setTextColor(buy1_price, stock.buy1, stock.price);
    buy1.children(".counts").html(stock.buy1vol);
};

Trade.prototype.loadHasCount = function(){
    var trade = this;
  $.post("../stockcount", {user_id: account.id, id: stock.id}, function(data){
      trade.stock_count = 1 * data;
  });
};

Trade.prototype.buy = function(){
    /*
     * 发送买入请求
     * 发送目标：{root}/trade
     * 发送方式：post
     * 发送内容：user_id => 用户id
     *           id => 股票id
     *           price => 价格
     *           counts => 数量
     *           type => 执行动作("buy" => 买入, "bid" => 卖出)
     * 返回：无
     */
    $.post("../trade", {user_id: account.id, id: stock.id, price: $(".trade-price-input").val(), counts: $(".trade-counts-input").val(), type: "buy"});
};

Trade.prototype.bid = function(){
    /*
     * 发送卖出请求
     * 发送目标：{root}/trade
     * 发送方式：post
     * 发送内容：user_id => 用户id
     *           id => 股票id
     *           price => 价格
     *           counts => 数量
     *           type => 执行动作("buy" => 买入, "bid" => 卖出)
     * 返回：无
     */
    $.post("../trade", {user_id: account.id, id: stock.id, price: $(".trade-price-input").val(), counts: $(".trade-counts-input").val(), type: "bid"});
};