/**
 * Created by inksmallfrog on 2016/8/15.
 * 功能：描述订单管理模块
 */
function OrderDetail(){
}

OrderDetail.prototype.init = function(){
    this.toToday();

    $("#order-time-search-input").attr("placeholder", new Date().format("yyyy-MM-dd"));

    $("#order-time-search-button").click(function(){
        order_detail.searchOrdersAtTime($("#order-time-search-input").val());
    });

    $("#today-order-button").click(function(){
        $("#history-order-button").parents("li").removeClass("focus");
        $(this).parents("li").addClass("focus");

        order_detail.toToday();
    });

    $("#history-order-button").click(function(){
        $("#today-order-button").parents("li").removeClass("focus");
        $(this).parents("li").addClass("focus");

        order_detail.toHistory();
    })
};

OrderDetail.prototype.toToday = function(){
    this.loadTodayOrders();
    $(".order-time-search").hide();
};

OrderDetail.prototype.toHistory = function(){
    this.loadHistoryOrders();
    $(".order-time-search").show();
};

OrderDetail.prototype.loadTodayOrders = function(){
    var order_detail = this;
    $.post("../todayorders", {user_id: user.id}, function(data){order_detail.bindData(data)}, "json");
};

OrderDetail.prototype.loadHistoryOrders = function(){
    var order_detail = this;
    $.post("../historyorders", {user_id: user.id}, function(data){order_detail.bindData(data)}, "json");
};

OrderDetail.prototype.searchOrdersAtTime = function(time){
    var order_detail = this;
    $.post("../ordersattime", {user_id: user.id, time: time}, function(data){order_detail.bindData(data)}, "json");
};

OrderDetail.prototype.bindData = function(data){
    var orders = data.orders;
    var content = order_top;
    for(var i = 0; i < orders.length; ++i){
        content += order_item.replace(/\{id}/g, orders[i].id)
                             .replace(/\{code}/g, orders[i].code)
                             .replace(/\{name}/g, orders[i].name)
                             .replace(/\{type}/g, orders[i].type)
                             .replace(/\{status}/g, orders[i].status)
                             .replace(/\{count}/g, orders[i].count)
                             .replace(/\{price}/g, (orders[i].price).toFixed(2))
                             .replace(/\{value}/g, orders[i].value)
                             .replace(/\{order_id}/g, orders[i].order_id)
                             .replace(/\{finished}/g, orders[i].finished);
    }
    $(".orderdetail-container").html(content);

    $(".order-stock").click(function(){
       stock.changeStock($(this).attr("data"));
    });
    $(".order-undo").click(function(){
        if($(this).hasClass("unfinished")){
            order_detail.undo($(this).attr("data"));
            $(this).parents("li").remove();
        }
    });
};

OrderDetail.prototype.undo = function(order_id){
    $.post("../orderundo", {user_id: user.id, order_id: order_id});
};
