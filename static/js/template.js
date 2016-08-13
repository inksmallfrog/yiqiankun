/**
 * Created by inksmallfrog on 2016/8/11.
 * 功能：模板
 */
var selfstock_unlogged = '<li><a href="#" data-toggle="modal" data-target="#login-register"><span class="stock-login">您尚未登录</span></a></li>';

var selfstock_eachstock = '<li class="selfstock-item"><a href="#" class="selfstock-item-detail" id="selfstock-{id}" data="{id}"><span class="stock-id">{code}</span><span class="stock-name">{name}</span></a><a href="#" class="delete-icon" data="{id}"><img src="../static/assets/icons/delete.png"></a></li>';

var selfstock_addstock = '<li class="selfstock-item selfstock-last-item"><a href="#" id="selfstock-add"><span class="stock-add">添加自选股</span></a></li>' +
                          '<select class="selfstock-select"><option value="" disabled selected>请输入股票名称或代码</option>';

var stocklist_select = '<select class="stocklist-select"><option value="" disabled selected>请输入股票名称或代码</option>';


var price_img = '<img id="price-arrow" src="../static/assets/icons/{price_status}.png">';
