/**
 * Created by inksmallfrog on 2016/8/11.
 * 功能：描述股票图表
 */
function StockGraph(){
    this.stock_chart = echarts.init(document.getElementById("stock-graph"));        //股票图表
}

StockGraph.prototype.init = function(){

};

StockGraph.prototype.update = function(){

};

//绘制图表
StockGraph.prototype.drawGraph = function(){
    var option;
    console.log(stock_detail.graph_type);
    if (stock_detail.graph_type != "graph-time") {
        option = {
            animation: false,
            title: {
                text: '',
                left: 0
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line'
                },
                formatter: function (_param) {
                    var param = _param[0];
                    return [
                        '日期: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                        '开盘: ' + param.data[0] + '<br/>',
                        '收盘: ' + param.data[1] + '<br/>',
                        '最低: ' + param.data[2] + '<br/>',
                        '最高: ' + param.data[3] + '<br/>',
                        'MA5: ' + Number(_param[1].data).toFixed(2) + '<br/>',
                        'MA10: ' + Number(_param[2].data).toFixed(2) + '<br/>',
                        'MA20: ' + Number(_param[3].data).toFixed(2) + '<br/>',
                        'MA30: ' + Number(_param[4].data).toFixed(2) + '<br/>'
                    ].join('');
                }
            },
            legend: {
                bottom: 0,
                padding: 10,
                data: [stock.name, 'MA5', 'MA10', 'MA20', 'MA30']
            },
            grid: {
                top: '2%',
                left: '40px',
                right: '2%',
                bottom: '18%',
                height: '75%'
            },
            xAxis: {
                type: 'category',
                data: stock.current_data.categoryData,
                scale: true,
                boundaryGap : false,
                axisLine: {onZero: false},
                splitLine: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 50,
                    end: 100
                },
                {
                    show: true,
                    type: 'slider',
                    y: '84%',
                    height: '6%',
                    start: 50,
                    end: 100
                }
            ],
            series: [
                {
                    name: stock.name,
                    type: 'candlestick',
                    data: stock.current_data.values
                },
                {
                    name: 'MA5',
                    type: 'line',
                    data: stock.calculateMA(5),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    data: stock.calculateMA(10),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA20',
                    type: 'line',
                    data: stock.calculateMA(20),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    data: stock.calculateMA(30),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                }
            ]
        };
    }

    //=================TODO!=====================
    //分时图配置
    else {
         function addZero(val, len, top)
        {
            if (!arguments[1]) len = 2;
            if (!arguments[2]) top = true;

            if (val.toString().length < len)
            {
                while (len != val.toString().length)
                {
                    if (top) val = "0" + val.toString();
                    else val = val.toString() + "0";
                }
            }
            return val.toString();
        }
        function getCurDate()
        {
            return [new Date().getFullYear(), addZero(new Date().getMonth()+1), addZero(new Date().getDate())].join("");
        }
         var dtCurDate = new Date();
        var arrCurTime = [];
        //arrCurTime.push(new Date(dtCurDate.getFullYear(), dtCurDate.getMonth(), dtCurDate.getDate(), 9, 25, 0, 0));
        var dtTimeAM = new Date(dtCurDate.getFullYear(), dtCurDate.getMonth(), dtCurDate.getDate(), 9, 30, 0, 0);

        for (var i=0; i<=120; i++)
        {
            arrCurTime.push([addZero(dtTimeAM.getHours()), addZero(dtTimeAM.getMinutes())].join(":"));
            dtTimeAM = new Date(dtTimeAM.getTime() + 60*1000);
        }
        var dtTimePM = new Date(dtCurDate.getFullYear(), dtCurDate.getMonth(), dtCurDate.getDate(), 13, 0, 0, 0);
        for (var i=0; i<=120; i++)
        {
            arrCurTime.push([addZero(dtTimePM.getHours()), addZero(dtTimePM.getMinutes())].join(":"));
            dtTimePM = new Date(dtTimePM.getTime() + 60*1000);
        }

        option = {
            animation: false,
            title:  {
                text: '',
                left: 0
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line'
                },
                formatter: function (_param) {
                    console.log(_param);
                    var param = _param[0];
                    return [
                        '时间: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                        '价格: ' + param.data + '<br/>',
                        '成交量: ' + _param[1].data + '<br/>'
                    ].join('');
                }
            },
            legend: {
                bottom: 0,
                padding: 10,
                data: ["当前价格", "成交量"]
            },
            grid: {
                top: '2%',
                left: '40px',
                right: '40px',
                bottom: '18%',
                height: '75%'
            },
             dataZoom: [ ],
            xAxis : {
                boundaryGap : false,
                type : 'category',
                splitLine : {
                    show : true,
                    interval : function (index, value) {
                        if (value == "09:15"
                            || value == "09:30"
                            || value == "10:30"
                            || value == "11:30"
                            || value == "14:00"
                            || value == "15:00") {
                            return true;
                        }
                        else return false;
                    }
                },
                data: arrCurTime,
                scale: true,
                axisTick : {
                    show : true,
                    interval : function (index, value) {
                        if (value == "09:15"
                            || value == "09:30"
                            || value == "10:30"
                            || value == "11:30"
                            || value == "14:00"
                            || value == "15:00") {
                            return true;
                        }
                        else return false;
                    }
                },
                axisLabel : {
                    show : true,
                    interval : 0,
                    formatter: function (value, index) {
                        if (value == "09:15"
                            || value == "09:30"
                            || value == "10:30"
                            || value == "11:30"
                            || value == "14:00"
                            || value == "15:00") {
                            return value;
                        } else {
                            return "";
                        }
                    }
                },
            },
            yAxis : [ {
                name: "price",
                position: "left",
                scale : true,
                splitArea : {
                    show : true
                }
            }, {
                name: "vol",
                position: "right",
                scale : true,
                splitArea : {
                    show : true
                }
            }],

            series : [ {
                name : '当前价格',
                yAxisIndex: 0,
                type:'line',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                data : stock.current_data.price
            },
            {
                name : '成交量',
                yAxisIndex: 1,
                type:'bar',
                itemStyle: {
                    normal: {
                        color: 'rgba(255, 70, 131, 0.2)'
                    }
                },
                data : stock.current_data.vol
            }]
    }
    }
    //=================END TODO!=====================

    this.stock_chart.setOption(option);
};

