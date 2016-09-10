/**
 * Created by inksmallfrog on 2016/8/11.
 * 功能：描述自选股模块
 */
function SelfStock(){
    this.stock_list = [];           //自选股列表
    this.stock_ul = null;           //自选股容器
}

SelfStock.prototype.init = function(){
    this.stock_ul = $(".selfstock-list");
    if (user.logged) {
        this.loadList();
    } else {
        //调用模板引导登陆
        this.stock_ul.html(selfstock_unlogged);
    }
};

//读取用户自选股列表
SelfStock.prototype.loadList = function(){
    var selfstock = this;
    /*
     * 发送自选股列表请求
     * 发送目标：{root}/selfstock
     * 发送方式：post
     * 发送内容：id => 用户id
     * 返回格式：json
     * 期待返回内容：id => 股票id
     *             ：code => 股票代码
     *             ：name => 股票名称
     */
    $.post("../selfstock", {id: user.id}, function(data){
        selfstock.stock_list = data['selfstock'];
                selfstock.bindData();
            }, "json")
};

//绑定自选股数据
SelfStock.prototype.bindData = function(){
    //建立自选股列表
    var content = '';
    for (var i = 0; i < this.stock_list.length; ++i) {
        content += selfstock_eachstock.replace(/\{id}/g, this.stock_list[i].id).replace(/\{code}/g, this.stock_list[i].code).replace(/\{name}/g, this.stock_list[i].name);
    }

    //================TODO!=====================
    /*
     * 该处内容为当前的股票搜索框模板加载代码
     * 修改搜索框时应修改此处内容
     */
    content += selfstock_addstock;
    //建立可选股列表
    for(i = 0; i < stock_list.length; ++i){
        var existed = false;
        for(var j = 0; j < this.stock_list.length; ++j){
            if(stock_list[i].id == this.stock_list[j].id){
                existed = true;
                break;
            }
        }
        if(existed){
            continue;
        }
        content += '<option value="' + stock_list[i].id + '" class="selfstocklist-select-item">' + stock_list[i].name + '(' + stock_list[i].code + ')</option>';
    }
    content += '</select>';
    //================END TODO!=====================


    this.stock_ul.html(content);

    //绑定事件
    var selfstock = this;

    $(".selfstock-item-detail").click(function(){
       stock.changeStock($(this).attr("data"));
    });

    $(".delete-icon").click(function(){
        selfstock.deleteStock($(this).attr("data"), $(this).parents("li"));
    });

    $(".option-item").click(function(){
        console.log($(".selfstock-select").val());
        var stockid = $(this).val();
        var stockcode = stockid.substring(0, 6);
        var stockname = $(this).find("option:selected").text().split('(')[0];
        console.log(stockid + stockcode + stockname);
        selfstock.addStock(stockid, stockcode, stockname);
        $(this).parents(".combo-select").focusout();
    });

    //================TODO!=====================
    /*
     * 该处内容为当前的股票搜索框初始化代码
     * 修改搜索框时应修改此处内容
     */
    $(function(){
        $('.selfstock-select').comboSelect();
        $(".selfstock-select").change(function(){
            var stockid = $(this).val();
            var stockcode = stockid.substring(0, 6);
            var stockname = $(this).find("option:selected").text().split('(')[0];
            if(stockid != null && stockid != ''){
                selfstock.addStock(stockid, stockcode, stockname);
            }
            $(this).parents(".combo-select").focusout();
            $(this).parents(".combo-select").hide();
            $("#selfstock-add").parents("li").show();
        });
        $('.selfstock-select').parents(".combo-select").hide();

        $("#selfstock-add").click(function(){
            $('.selfstock-select').parents(".combo-select").show();
            $('.selfstock-select').parents(".combo-select").children('input').focus();
            $(this).parents('li').hide();
        });
    });
    //================END TODO!=====================
};

//添加自选股
SelfStock.prototype.addStock = function(id, code, name){
    /*
     * 发送添加自选股请求
     * 发送目标：{root}/selfstockadd
     * 发送方式：post
     * 发送内容：user_id => 用户id
     *           id => 股票id
     * 返回：无
     */
    $.post("../selfstockadd", {user_id: user.id, id: id}, function (data) {
        //alert(data);
    });
    this.stock_list.push({id: id, code: code, name: name});
    this.bindData();
    if(id == stock.id){
        stock_detail.bindData();
    }
};

//删除自选股
SelfStock.prototype.deleteStock = function(id, node){
    /*
     * 发送删除自选股请求
     * 发送目标：{root}/selfstockdelete
     * 发送方式：post
     * 发送内容：user_id => 用户id
     *           id => 股票id
     * 返回：无
     */
    $.post("../selfstockdelete", {user_id: user.id, id: id});

    for(var i = 0; i < this.stock_list.length; ++i){
        if(this.stock_list[i].id == id){
            this.stock_list.splice(i, 1);
            break;
        }
    }
    this.bindData();
    if(id == stock.id){
        stock_detail.bindData();
    }
};

SelfStock.prototype.inSelfstock = function(id){
     for(var i = 0; i < this.stock_list.length; ++i) {
         if (id == this.stock_list[i].id) {
             return true;
         }
     }
     return false;
};