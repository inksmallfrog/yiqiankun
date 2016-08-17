TodoList:
    全局：
	用户模块：
	导航栏模块：布局自适应
	自选股模块：
	行情模块：时间搜索功能
	          分时图
	          加入自选股
	交易模块：
	订单管理模块：
	账户管理模块：表格排序功能
	策略模块：


前后端数据：
	1、这里统一用了post方式
	2、后台无法提供的数据暂时以0填充
	3、细节：
	    用户模块：
	        a、登录
	            触发：用户未登录情况下，打开登录注册窗口点击登录按钮
	            前端位置：User.js line:54
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
                 正确结果：完成登录并刷新页面或显示错误信息
	        b、注册
	            触发：用户未登录情况下，打开登录注册窗口点击注册按钮至注册表单后再次点击注册按钮
	            前端位置：User.js line:83
                /*
                 * 发送注册信息
                 * 发送目标：{root}/signup
                 * 发送方式：post
                 * 发送内容：id => 用户id
                 *           pwd => 用户密码
                 * 返回格式：字符串
                 * 期待返回内容："succeed" => 注册成功
                 *             ："signup_user_id_error" => 用户名已存在
                 *             ："signup_pwd_error" => ？
                 */
                 正确结果：完成注册并登录后刷新页面或显示错误信息
	        c、登出
	            触发：用户登录状态下，在用户下拉菜单中点击登出按钮
	            前端位置：User.js line:110
                /*
                 * 发送登出信息
                 * 发送目标：{root}/logout
                 * 发送方式：post
                 * 发送内容：user_id => 用户id
                 * 返回：无
                 */
                 正确结果：登出并刷新页面

	    自选股模块：
	        a、读取用户自选股列表
	            触发：用户登录状况下，加载页面时
	                                  每次添加删除自选股时
	            前端位置：SelfStock.js line: 23
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
                 正确结果：自选股列表正确显示
            b、添加自选股
                触发：用户点击添加选项并完成输入时
                前端位置：SelfStock.js line: 111
                /*
                 * 发送添加自选股请求
                 * 发送目标：{root}/selfstockadd
                 * 发送方式：post
                 * 发送内容：user_id => 用户id
                 *           id => 股票id
                 * 返回：无
                 */
                 正确结果：自选股加入数据库中
             c、删除自选股
                触发：用户点击自选股右侧X按钮时
                前端位置：SelfStock.js line:135
                /*
                 * 发送删除自选股请求
                 * 发送目标：{root}/selfstockdelete
                 * 发送方式：post
                 * 发送内容：user_id => 用户id
                 *           id => 股票id
                 * 返回：无
                 */
                 正确结果：自选股从数据库中删除

        行情模块：
        	        a、加载股票数据
        	            触发：股票代码修改时
        	                  每个刷新间隔后自动触发
        	            前端位置：Stock.js line:45
                        /*
                         * 发送股票详情请求
                         * 发送目标：{root}/getstockdata
                         * 发送方式：post
                         * 发送内容：id => 股票id
                         * 返回格式：json
                         * 期待返回内容：id => 股票id
                         *               code => 股票代码
                         *               name => 股票名称
                         *               abbr => 股票缩写
                         *               price => 当前价格
                         *               open => 开盘价
                         *               close => 收盘价
                         *               high => 最高价
                         *               low => 最低价
                         *               max => 涨停价
                         *               min => 跌停价
                         *               vol => 总量
                         *               value => 总额
                         *               marketvalue => 市值
                         *               available_marketvalue => 流通市值
                         */
                         正确结果：股票数据正确显示在对应位置
                    b、加载股票图表数据
                         触发：股票代码修改时
                               股票图表类型修改时
                               分时图情况下，每个刷新间隔后自动触发
                         前端位置：Stock.js line:116
                        /*
                         * 发送股票图表请求
                         * 发送目标：{root}/getstockgraphdata
                         * 发送方式：post
                         * 发送内容：id => 股票id
                         *           type => 图表类型('graph-daily' => 日线; 'graph-weekly' => 周线; 'graph-monthly' => 月线'; 'graph-time' => '分时图')
                         *           start_time => 起始时间(格式"yyyy-MM-dd", 为空则代表默认时间)
                         * 返回格式：二维数组
                         * 期待返回内容：[时间，开盘，收盘，最低，最高]
                         */
                          正确结果：图表正确显示数据

        交易模块：
            a、获取股票数据
                触发：股票交易栏代码改变时
                前端位置：Trade.js line:163
                /*
                 * 获得股票数据
                 * 发送目标：{root}/tradestockinfo
                 * 发送方式：post
                 * 发送内容：user_id => 用户id
                 *           id => 股票id
                 * 返回格式： json
                 * 期待返回内容：code => 股票代码
                 *               name => 股票名称
                 *               price => 股票现价
                 *               min => 跌停价
                 *               max => 涨停价
                 *               vol_has => 该用户当前持有量
                 *               bid5 => 卖5价
                 *               bid5vol => 卖5量
                 *               bid4 => 卖4价
                 *               bid4vol => 卖4量
                 *               bid3 => 卖3价
                 *               bid3vol => 卖3量
                 *               bid2 => 卖2价
                 *               bid2vol => 卖2量
                 *               bid1 => 卖1价
                 *               bid1vol => 卖1量
                 *               buy5 => 买5价
                 *               buy5vol => 买5量
                 *               buy4 => 买4价
                 *               buy4vol => 买4量
                 *               buy3 => 买3价
                 *               buy3vol => 买3量
                 *               buy2 => 买2价
                 *               buy2vol => 买2量
                 *               buy1 => 买1价
                 *               buy1vol => 买1量
                 */
                 正确结果：股票数据正确显示在交易栏中
            b、获取期货数据：
                触发：期货交易栏代码改变时
                前端位置：Trade.js line:130
                /*
                 * 获得期货数据
                 * 发送目标：{root}/tradefutureinfo
                 * 发送方式：post
                 * 发送内容：user_id => 用户id
                 *           id => 期货id
                 * 返回格式： json
                 * 期待返回内容：code => 期货代码
                 *               name => 期货名称
                 *               price => 期货现价
                 *               buy => 买入价
                 *               bid => 卖出价
                 *               vol_max => 该用户最大交易量
                 *               available_money => 用户期货账户可用资金
                 *               trade_unit => 期货交易的单位(即xxx人民币/手中的xxx)
                 */
                 正确结果：期货数据正确显示在交易栏中
            c、交易操作：
                触发：在用户登录且绑定交易账户的情况下，点击买入或卖出按钮时
                前端位置：Trade.js line:293
                 /*
                 * 发送交易请求
                 * 发送目标：{root}/trade
                 * 发送方式：post
                 * 发送内容：user_id => 用户id
                 *           id => 股票/期货id
                 *           price => 价格
                 *           counts => 数量
                 *           option => 期货交易类型(仅当交易期货时有数据，"limited_price" => 限价， "market_price" => 市价， "stop_price" => 止损价)
                 *           type => 类型("future" => 期货, "stock" => 股票)
                 *           action => 执行动作("buy" => 买入, "bid" => 卖出)
                 * 返回：无
                 */
                 正确结果：订单加入数据库

	    订单管理模块：
	        a、读取订单列表
	            触发：用户登录情况下，加载页面时
                                      切换当日订单，历史订单时
                                      点击搜索按钮时（搜索按钮未做表单验证）
                前端位置：OrderDetail.js line:50
                /*
                 * 读取订单信息
                 * 发送目标：{root}/orders
                 * 发送方式：post
                 * 发送内容：user_id => 用户id
                 *           date => 起始日期(为空代表加载所有订单)
                 * 返回格式："json"
                 * 期待返回内容：orders[] => 订单数组：order_id => 订单唯一id（用于撤销订单）
                 *                                     id => 股票id（用于查询股票数据）
                 *                                     code => 股票代码
                 *                                     name => 股票名称
                 *                                     type => 类型("股票" => 股票, "股指期货" => 股指期货)
                 *                                     status => 订单指令("买入" => 买入, "卖出" => 卖出)
                 *                                     count => 数量
                 *                                     price => 订单价格
                 *                                     finished => 完成状态("finished" => 已完成订单, "unfinished" => 未完成订单)
                 */
                 正确结果：订单列表正确显示，且查看，撤销两下拉选项工作正常
            b、撤销订单
                触发：点击未完成订单的下拉列表中的撤销按钮
                前端位置：OrderDetail.js line:111
                /*
                 * 撤销订单
                 * 发送目标：{root}/orderundo
                 * 发送方式：post
                 * 发送内容：user_id => 用户id
                 *           order_id => 订单id
                 * 返回：无
                 */
                 正确结果：订单从数据库中删除

	    账户管理模块：
	        a、账户名读取
	            触发：登录状态下加载页面时
	            前端位置： Account.js line: 43
                /*
                 * 获取用户绑定的账户
                 * 发送目标：{root}/getuseraccount
                 * 发送方式：post
                 * 发送内容：user_id => 用户id
                 *           type => 账户类型("stock" => 股票账号, "future" => 期货账号)
                 * 返回格式：字符串
                 * 期待返回内容：对应的账号id
                 */
                 正确结果：账户名称显示在账户管理模块中
	        b、账户信息读取
	             触发：用户绑定过账户时，每隔刷新时间自动触发
	             前端位置：Account.js line:77
                 /*
                  * 获取用户账号详细数据
                  * 发送目标：{root}/getaccountdata
                  * 发送方式：post
                  * 发送内容：user_id => 用户id
                  *           type => 账户类型("stock" => 股票账号, "future" => 期货账号)
                  *           account => 账号id
                  * 返回格式：json
                  * 期待返回内容：balance => 可用资金
                   *              freezing => 冻结资金
                   *              market => 总市值
                   *              total => 总资金
                   *              profit => 盈利
                   *              detail[] => 持有股票状态数组: code => 持有股票的代码
                   *                                            name => 持有股票的名称
                   *                                            price => 持有股票的价格
                   *                                            cost => 持有股票的成本
                   *                                            vol => 持有股票的数量
                  */
                  正确结果：账号状态正确显示在界面中
	        c、账户与用户绑定
	               触发：用户在绑定账户界面点击添加按钮后
	               前端位置：Account.js line:169
                   /*
                    * 为用户绑定账号
                    * 发送目标：{root}/addaccount
                    * 发送方式：post
                    * 发送内容：user_id => 用户id
                    *           type => 账户类型("stock" => 股票账号, "future" => 期货账号)
                    *           brokerage => 券商
                    *           id => 账号
                    *           pwd => 密码
                    * 返回：无
                    */
                    正确结果：绑定数据加入数据库中
	        d、账户与用户解除绑定
                   触发：用户在账户管理界面对应账号栏点击X按钮后
                   前端位置：Account.js line:191
                    /*
                     * 解除用户和账号的绑定
                     * 发送目标：{root}/quitaccount
                     * 发送方式：post
                     * 发送内容：user_id => 用户id
                     *           type => 账户类型("stock" => 股票账号, "future" => 期货账号)
                     *           id => 账号
                     * 返回：无
                     */
                    正确结果：绑定数据从数据库中删除