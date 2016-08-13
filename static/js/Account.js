/**
 * Created by inksmallfrog on 2016/7/29.
 * 功能：管理当前登录的用户
 */

function Account(){
    this.id = -1;                   //用户id
    this.logged = false;           //是否登录
}

//初始化登录情况
Account.prototype.init = function(){
    this.id = $.cookie("user_id");
    if(typeof this.id != 'undefined'){
        this.logged = true;
    }
};

//用户登录
Account.prototype.login = function(){
    var account = this;
    var id = $("#user_id_input").val();
    /*
     * 发送登录信息
     * 发送目标：{root}/login
     * 发送方式：post
     * 发送内容：id => 用户id
     *           pwd => 用户密码
     * 返回格式：字符串
     * 期待返回内容："succeed" => 登录成功
     *             ："user_id_error" => 用户名错误
     *             ："pwd_error" => 密码错误
     */
    $.post("../login", {id: id, pwd: $("#pwd_input").val()},
        function (data, status) {
            if(data = 'succeed'){
                $.cookie("user_id", id, {expires: 14});
                this.id = id;
                window.location.reload();
            }
            else{
                $("#" + data).slideDown();
            }
        });
    return false;
};

//用户登出
Account.prototype.quit = function(){
    $.cookie("user_id", '', {expires: -1});
    window.location.reload();
};