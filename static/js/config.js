/**
 * Created by inksmallfrog on 2016/8/10.
 * 功能：用于设置配置信息
 */
var INIT_STOCK_ID = "000001SH";                                 //默认显示的股票id

var ICON_LOGGED = "../static/assets/icons/logged.png";          //登录后的头像
var ICON_UNLOGGED = "../static/assets/icons/unlogged.png";      //登录前的头像

var UPDATE_TIMEOUT = 5000;                                      //更新时间，单位:ms

//策略选择图标
var UNCHECKED_ICON = "../static/assets/icons/strategy_unchecked.png";
var CHECKED_ICON = "../static/assets/icons/strategy_checked.png";
var MAX_STRATEGIES_COUNT = 3;

//选股策略
var strategies_config = {
    "multifactor":{
        name: "多因子模型",
        factors:{
            "revenu": "盈利收益率",
            "market_value": "市值比",
            "roa": "ROA变动"
        }
    },
    "fundsflow":{
        name: "资金流模型",
        factors:{
            "revenu": "盈利收益率",
            "market_value": "市值比",
            "roa": "ROA变动"
        }
    },
    "bargainning":{
        name: "筹码选股模型",
        factors:{
            "revenu": "盈利收益率",
            "market_value": "市值比",
            "roa": "ROA变动"
        }
    },
    "inverse_momentum":{
        name: "动量反转模型",
        factors:{
            "revenu": "盈利收益率",
            "market_value": "市值比",
            "roa": "ROA变动"
        }
    },
    "style_wheeled":{
        name: "风格轮动模型",
        factors:{
            "revenu": "盈利收益率",
            "market_value": "市值比",
            "roa": "ROA变动"
        }
    }
};

