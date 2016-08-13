/**
 * Created by inksmallfrog on 2016/8/10.
 * 功能：处理初始化事件
 */

var account;            //用户对象
var header;             //导航头模块对象
var selfstock;          //自选股模块对象
var stock_detail;       //股票详情模块对象

$(document).ready(function(){
    account = new Account();
    header = new Header();
    selfstock = new SelfStock();
    stock_detail = new StockDetail();

    account.init();
    header.init();
    selfstock.init();
    stock_detail.init();

    $(window).resize(function(){
        header.resizeUnderline();
        stock_detail.stock_graph.stock_chart.resize();
    });

    setInterval("update()", UPDATE_TIMEOUT);
});

//全局更新函数，调用间隔：UPDATE_TIMEOUT
function update(){
    header.update();
    stock_detail.update();
}
