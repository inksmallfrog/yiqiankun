/**
 * Created by inksmallfrog on 2016/8/11.
 * 功能：描述股票
 */
function Stock(){
    this.id;        //股票id
    this.code;      //股票代码
    this.name;      //股票名称
    this.abbr;      //股票缩写

    this.price;     //当前价格
    this.open;      //开盘价
    this.close;     //收盘价
    this.high;      //最高价
    this.low;       //最低价
    this.max;       //涨停价
    this.min;       //跌停价
    this.vol;       //总量
    this.value;     //总额
    this.marketvalue;       //市值
    this.available_marketvalue;     //流动市值

    this.current_data;              //图表数据
}

//从json数据中绑定数据
Stock.prototype.readDetail = function(data){
    this.id = data.id;
    this.code = data.code;
    this.name = data.name;
    this.abbr = data.abbr;

    this.price = data.price;
    this.open = data.open;
    this.close = data.close;
    this.high = data.high;
    this.low = data.low;
    this.max = data.max;
    this.min = data.min;
    this.vol = data.vol;
    this.value = data.value;
    this.marketvalue = data.marketvalue;
    this.available_marketvalue = data.available_marketvalue;
};

//从数组中获取图表数据
Stock.prototype.readGraphData = function(raw_data){
    var data;
    eval("data = " + raw_data);

    var categoryData = [];
    var values = [];
    for (var i = 0; i < data.length; i++) {
        categoryData.push(data[i].splice(0, 1)[0]);//切除时间
        values.push(data[i]); //剩余属性
    }
    this.current_data = {
        categoryData: categoryData,
        values: values
    };
};

//计算均价
Stock.prototype.calculateMA = function(period){
    var result = [];
    for (var i = 0, len = this.current_data.values.length; i < len; i++) {
        if (i < period) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < period; j++) {
            sum += this.current_data.values[i - j][1];
        }
        result.push(sum / period);
    }
    return result;
};
