TodoList:
	注册功能没做
	登出功能直接点头像
	交易模块
	订单模块
	账户管理模块
	策略模块

前后端数据：
	1、这里统一用了post方式
	2、后台无法提供的数据暂时以0填充
	3、细节：
		a、用户登录
			触发：未登录时点击用户头像，输入账号密码进行登录
			前端位置：Account.js line:23
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
			结果：设置cookie并刷新网页

		b、获取用户自选股
			触发：进入网页且用户已登录时
			前端位置：SelfStock.js line:23
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
			结果：自选股列表显示于列表容器中

		c、添加自选股
			触发：点击添加自选股并选中某只股票后
			前端位置：SelfStock.js line:106
    			/*
     			* 发送添加自选股请求
     			* 发送目标：{root}/selfstockadd
     			* 发送方式：post
     			* 发送内容：user_id => 用户id
     			*           id => 股票id
     			* 返回：无
     			*/
			结果：自选股加入数据库

		d、删除自选股
			触发：点击自选股的删除按钮后
			前端位置：SelfStock.js line:129
    			/*
     			* 发送删除自选股请求
     			* 发送目标：{root}/selfstockdelete
     			* 发送方式：post
     			* 发送内容：user_id => 用户id
     			*           id => 股票id
     			* 返回：无
     			*/
			结果：自选股从数据库中移除

		e、获取股票实时数据
			触发：进入网页后，每隔固定时间后自动触发
			前端位置：StockDetail.js line:98
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
			结果：数据显示在相应的位置

		f、获取股票图表数据
			触发：进入网页后
			      修改图标类型时
		              分时图每隔固定时间后自动触发
			前端位置：StockDetail.js line:129
    			/*
     			* 发送股票图表请求
     			* 发送目标：{root}/getstockgraphdata
     			* 发送方式：post
    			* 发送内容：id => 股票id
     			*           type => 图表类型('graph-daily' => 日线; 'graph-weekly' => 周线; 'graph-monthly' => 月线'; 'graph-time' => '分时图')
     			* 返回格式：二维数组
     			* 期待返回内容：[时间，开盘，收盘，最低，最高]
     			*/
			结果：图表中显示正确的数据
