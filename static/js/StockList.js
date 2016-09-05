/**
 * Created by inksmallfrog on 2016/8/30.
 */
function loadStockList() {
    //==========================TODO!============================
    /*
     * 代码列表动态获取后，删除该内容
     */
    stock_list = [{'code': '300537', 'id': '300537GXCL', 'name': '\u5e7f\u4fe1\u6750\u6599'}, {
        'code': '002474',
        'id': '002474RJRJ',
        'name': '\u6995\u57fa\u8f6f\u4ef6'
    }, {'code': '000791', 'id': '000791GSDT', 'name': '\u7518\u8083\u7535\u6295'}, {
        'code': '603007',
        'id': '603007HWGF',
        'name': '\u82b1\u738b\u80a1\u4efd'
    }, {'code': '300402', 'id': '300402BSGF', 'name': '\u5b9d\u8272\u80a1\u4efd'}, {
        'code': '601595',
        'id': '601595SHDY',
        'name': '\u4e0a\u6d77\u7535\u5f71'
    }, {'code': '002715', 'id': '002715DYGF', 'name': '\u767b\u4e91\u80a1\u4efd'}, {
        'code': '300538',
        'id': '300538TYGF',
        'name': '\u540c\u76ca\u80a1\u4efd'
    }, {'code': '300539', 'id': '300539HHMJ', 'name': '\u6a2a\u6cb3\u6a21\u5177'}, {
        'code': '603988',
        'id': '603988ZDDJ',
        'name': '\u4e2d\u7535\u7535\u673a'
    }, {'code': '603031', 'id': '603031ADL', 'name': '\u5b89\u5fb7\u5229'}, {
        'code': '603986',
        'id': '603986ZYCX',
        'name': '\u5146\u6613\u521b\u65b0'
    }, {'code': '300530', 'id': '300530DZKJ', 'name': '\u8fbe\u5fd7\u79d1\u6280'}, {
        'code': '300535',
        'id': '300535DWGF',
        'name': '\u8fbe\u5a01\u80a1\u4efd'
    }, {'code': '002809', 'id': '002809HQGF', 'name': '\u7ea2\u5899\u80a1\u4efd'}, {
        'code': '600475',
        'id': '600475HGGF',
        'name': '\u534e\u5149\u80a1\u4efd'
    }, {'code': '603090', 'id': '603090HSGF', 'name': '\u5b8f\u76db\u80a1\u4efd'}, {
        'code': '603515',
        'id': '603515OPZM',
        'name': '\u6b27\u666e\u7167\u660e'
    }, {'code': '002810', 'id': '002810SDHD', 'name': '\u5c71\u4e1c\u8d6b\u8fbe'}, {
        'code': '300066',
        'id': '300066SCZH',
        'name': '\u4e09\u5ddd\u667a\u6167'
    }, {'code': '300338', 'id': '300338KYYQ', 'name': '\u5f00\u5143\u4eea\u5668'}, {
        'code': '300540',
        'id': '300540SLGF',
        'name': '\u6df1\u51b7\u80a1\u4efd'
    }, {'code': '300533', 'id': '300533BCWL', 'name': '\u51b0\u5ddd\u7f51\u7edc'}, {
        'code': '300531',
        'id': '300531YBX',
        'name': '\u4f18\u535a\u8baf'
    }, {'code': '300532', 'id': '300532JTGJ', 'name': '\u4eca\u5929\u56fd\u9645'}, {
        'code': '603159',
        'id': '603159SHYH',
        'name': '\u4e0a\u6d77\u4e9a\u8679'
    }, {'code': '002808', 'id': '002808SZHJ', 'name': '\u82cf\u5dde\u6052\u4e45'}, {
        'code': '600152',
        'id': '600152WKJH',
        'name': '\u7ef4\u79d1\u7cbe\u534e'
    }, {'code': '002052', 'id': '002052TZDZ', 'name': '\u540c\u6d32\u7535\u5b50'}, {
        'code': '600848',
        'id': '600848SHLG',
        'name': '\u4e0a\u6d77\u4e34\u6e2f'
    }, {'code': '000655', 'id': '000655JLKY', 'name': '\u91d1\u5cad\u77ff\u4e1a'}, {
        'code': '600601',
        'id': '600601FZKJ',
        'name': '\u65b9\u6b63\u79d1\u6280'
    }, {'code': '600734', 'id': '600734SDJT', 'name': '\u5b9e\u8fbe\u96c6\u56e2'}, {
        'code': '600095',
        'id': '600095HGK',
        'name': '\u54c8\u9ad8\u79d1'
    }, {'code': '603268', 'id': '603268SFGF', 'name': '\u677e\u53d1\u80a1\u4efd'}, {
        'code': '002461',
        'id': '002461ZJPJ',
        'name': '\u73e0\u6c5f\u5564\u9152'
    }, {'code': '600113', 'id': '600113ZJDR', 'name': '\u6d59\u6c5f\u4e1c\u65e5'}, {
        'code': '000820',
        'id': '000820JCGF',
        'name': '\u91d1\u57ce\u80a1\u4efd'
    }, {'code': '000818', 'id': '000818FDHG', 'name': '\u65b9\u5927\u5316\u5de5'}, {
        'code': '600978',
        'id': '600978YHSH',
        'name': '\u5b9c\u534e\u751f\u6d3b'
    }, {'code': '600242', 'id': '600242ZCHY', 'name': '\u4e2d\u660c\u6d77\u8fd0'}, {
        'code': '300526',
        'id': '300526ZQGF',
        'name': '\u4e2d\u6f5c\u80a1\u4efd'
    }, {'code': '300136', 'id': '300136XWTX', 'name': '\u4fe1\u7ef4\u901a\u4fe1'}, {
        'code': '000935',
        'id': '000935SCSM',
        'name': '\u56db\u5ddd\u53cc\u9a6c'
    }, {'code': '300249', 'id': '300249YMK', 'name': '\u4f9d\u7c73\u5eb7'}, {
        'code': '601028',
        'id': '601028YLGF',
        'name': '\u7389\u9f99\u80a1\u4efd'
    }, {'code': '600847', 'id': '600847WLGF', 'name': '\u4e07\u91cc\u80a1\u4efd'}, {
        'code': '300354',
        'id': '300354DHCS',
        'name': '\u4e1c\u534e\u6d4b\u8bd5'
    }, {'code': '002691', 'id': '002691JKGF', 'name': '\u5180\u51ef\u80a1\u4efd'}, {
        'code': '300072',
        'id': '300072SJHB',
        'name': '\u4e09\u805a\u73af\u4fdd'
    }, {'code': '300309', 'id': '300309JAKJ', 'name': '\u5409\u827e\u79d1\u6280'}, {
        'code': '300416',
        'id': '300416SSSY',
        'name': '\u82cf\u8bd5\u8bd5\u9a8c'
    }, {'code': '600258', 'id': '600258SLJD', 'name': '\u9996\u65c5\u9152\u5e97'}, {
        'code': '601018',
        'id': '601018NBG',
        'name': '\u5b81\u6ce2\u6e2f'
    }, {'code': '300019', 'id': '300019GBKJ', 'name': '\u7845\u5b9d\u79d1\u6280'}, {
        'code': '002346',
        'id': '002346ZZGF',
        'name': '\u67d8\u4e2d\u80a1\u4efd'
    }, {'code': '300355', 'id': '300355MCST', 'name': '\u8499\u8349\u751f\u6001'}, {
        'code': '603306',
        'id': '603306HMKJ',
        'name': '\u534e\u61cb\u79d1\u6280'
    }, {'code': '000096', 'id': '000096GJNY', 'name': '\u5e7f\u805a\u80fd\u6e90'}, {
        'code': '002760',
        'id': '002760FXGF',
        'name': '\u51e4\u5f62\u80a1\u4efd'
    }, {'code': '300528', 'id': '300528XFLH', 'name': '\u5e78\u798f\u84dd\u6d77'}, {
        'code': '002619',
        'id': '002619JLGY',
        'name': '\u5de8\u9f99\u7ba1\u4e1a'
    }, {'code': '002677', 'id': '002677ZJMD', 'name': '\u6d59\u6c5f\u7f8e\u5927'}, {
        'code': '000839',
        'id': '000839ZXGA',
        'name': '\u4e2d\u4fe1\u56fd\u5b89'
    }, {'code': '603030', 'id': '603030QZGF', 'name': '\u5168\u7b51\u80a1\u4efd'}, {
        'code': '300156',
        'id': '300156SWHB',
        'name': '\u795e\u96fe\u73af\u4fdd'
    }, {'code': '002114', 'id': '002114LPXD', 'name': '\u7f57\u5e73\u950c\u7535'}, {
        'code': '600421',
        'id': '600421YFKG',
        'name': '\u4ef0\u5e06\u63a7\u80a1'
    }, {'code': '002017', 'id': '002017DXHP', 'name': '\u4e1c\u4fe1\u548c\u5e73'}, {
        'code': '300258',
        'id': '300258JDKJ',
        'name': '\u7cbe\u953b\u79d1\u6280'
    }, {'code': '600733', 'id': '600733SQF', 'name': 'S\u524d\u950b'}, {
        'code': '002173',
        'id': '002173*STCL',
        'name': '*ST\u521b\u7597'
    }, {'code': '002599', 'id': '002599STGF', 'name': '\u76db\u901a\u80a1\u4efd'}, {
        'code': '600744',
        'id': '600744HYDL',
        'name': '\u534e\u94f6\u7535\u529b'
    }, {'code': '002330', 'id': '002330DLS', 'name': '\u5f97\u5229\u65af'}, {
        'code': '000560',
        'id': '000560KBD\uff21',
        'name': '\u6606\u767e\u5927\uff21'
    }, {'code': '002805', 'id': '002805FYGF', 'name': '\u4e30\u5143\u80a1\u4efd'}, {
        'code': '600517',
        'id': '600517ZXDQ',
        'name': '\u7f6e\u4fe1\u7535\u6c14'
    }, {'code': '600830', 'id': '600830XYRT', 'name': '\u9999\u6ea2\u878d\u901a'}, {
        'code': '300349',
        'id': '300349JQGF',
        'name': '\u91d1\u5361\u80a1\u4efd'
    }, {'code': '002515', 'id': '002515JZHT', 'name': '\u91d1\u5b57\u706b\u817f'}, {
        'code': '000665',
        'id': '000665HBGD',
        'name': '\u6e56\u5317\u5e7f\u7535'
    }, {'code': '002088', 'id': '002088LYJN', 'name': '\u9c81\u9633\u8282\u80fd'}, {
        'code': '600335',
        'id': '600335GJQC',
        'name': '\u56fd\u673a\u6c7d\u8f66'
    }, {'code': '002695', 'id': '002695HSH', 'name': '\u714c\u4e0a\u714c'}, {
        'code': '002351',
        'id': '002351MBZ',
        'name': '\u6f2b\u6b65\u8005'
    }, {'code': '300322', 'id': '300322SBD', 'name': '\u7855\u8d1d\u5fb7'}, {
        'code': '002620',
        'id': '002620RHGF',
        'name': '\u745e\u548c\u80a1\u4efd'
    }, {'code': '000413', 'id': '000413DXGD', 'name': '\u4e1c\u65ed\u5149\u7535'}, {
        'code': '300088',
        'id': '300088CXKJ',
        'name': '\u957f\u4fe1\u79d1\u6280'
    }, {'code': '000571', 'id': '000571XDZ\uff21', 'name': '\u65b0\u5927\u6d32\uff21'}, {
        'code': '603663',
        'id': '603663SXXC',
        'name': '\u4e09\u7965\u65b0\u6750'
    }, {'code': '000619', 'id': '000619HLXC', 'name': '\u6d77\u87ba\u578b\u6750'}, {
        'code': '002033',
        'id': '002033LJLY',
        'name': '\u4e3d\u6c5f\u65c5\u6e38'
    }, {'code': '002209', 'id': '002209D Y L', 'name': '\u8fbe \u610f \u9686'}, {
        'code': '000158',
        'id': '000158CSGF',
        'name': '\u5e38\u5c71\u80a1\u4efd'
    }, {'code': '600872', 'id': '600872ZJGX', 'name': '\u4e2d\u70ac\u9ad8\u65b0'}, {
        'code': '300481',
        'id': '300481PYHC',
        'name': '\u6fee\u9633\u60e0\u6210'
    }, {'code': '300259', 'id': '300259XTKJ', 'name': '\u65b0\u5929\u79d1\u6280'}, {
        'code': '002274',
        'id': '002274HCHG',
        'name': '\u534e\u660c\u5316\u5de5'
    }, {'code': '000584', 'id': '000584YLKG', 'name': '\u53cb\u5229\u63a7\u80a1'}, {
        'code': '300365',
        'id': '300365HHKJ',
        'name': '\u6052\u534e\u79d1\u6280'
    }, {'code': '300002', 'id': '300002SZTY', 'name': '\u795e\u5dde\u6cf0\u5cb3'}, {
        'code': '300371',
        'id': '300371HZGF',
        'name': '\u6c47\u4e2d\u80a1\u4efd'
    }, {'code': '603085', 'id': '603085TCZK', 'name': '\u5929\u6210\u81ea\u63a7'}, {
        'code': '002106',
        'id': '002106LBGK',
        'name': '\u83b1\u5b9d\u9ad8\u79d1'
    }, {'code': '002270', 'id': '002270HMZB', 'name': '\u534e\u660e\u88c5\u5907'}, {
        'code': '603088',
        'id': '603088NBJD',
        'name': '\u5b81\u6ce2\u7cbe\u8fbe'
    }, {'code': '603166', 'id': '603166FDGF', 'name': '\u798f\u8fbe\u80a1\u4efd'}, {
        'code': '000683',
        'id': '000683YXNY',
        'name': '\u8fdc\u5174\u80fd\u6e90'
    }, {'code': '300400', 'id': '300400JTGF', 'name': '\u52b2\u62d3\u80a1\u4efd'}, {
        'code': '601038',
        'id': '601038YTGF',
        'name': '\u4e00\u62d6\u80a1\u4efd'
    }, {'code': '300340', 'id': '300340KHGF', 'name': '\u79d1\u6052\u80a1\u4efd'}, {
        'code': '000707',
        'id': '000707SHKJ',
        'name': '\u53cc\u73af\u79d1\u6280'
    }, {'code': '600084', 'id': '600084ZPGF', 'name': '\u4e2d\u8461\u80a1\u4efd'}, {
        'code': '600187',
        'id': '600187GZSW',
        'name': '\u56fd\u4e2d\u6c34\u52a1'
    }, {'code': '002491', 'id': '002491TDHL', 'name': '\u901a\u9f0e\u4e92\u8054'}, {
        'code': '002427',
        'id': '002427YFGF',
        'name': '\u5c24\u592b\u80a1\u4efd'
    }, {'code': '600973', 'id': '600973BSGF', 'name': '\u5b9d\u80dc\u80a1\u4efd'}, {
        'code': '002213',
        'id': '002213T E J',
        'name': '\u7279 \u5c14 \u4f73'
    }, {'code': '300122', 'id': '300122ZFSW', 'name': '\u667a\u98de\u751f\u7269'}, {
        'code': '000980',
        'id': '000980JMGF',
        'name': '\u91d1\u9a6c\u80a1\u4efd'
    }, {'code': '002193', 'id': '002193SDRY', 'name': '\u5c71\u4e1c\u5982\u610f'}, {
        'code': '002716',
        'id': '002716JGYY',
        'name': '\u91d1\u8d35\u94f6\u4e1a'
    }, {'code': '002757', 'id': '002757NXZB', 'name': '\u5357\u5174\u88c5\u5907'}, {
        'code': '600172',
        'id': '600172HHXF',
        'name': '\u9ec4\u6cb3\u65cb\u98ce'
    }, {'code': '600190', 'id': '600190JZG', 'name': '\u9526\u5dde\u6e2f'}, {
        'code': '002530',
        'id': '002530FDGF',
        'name': '\u4e30\u4e1c\u80a1\u4efd'
    }, {'code': '300527', 'id': '300527HZYJ', 'name': '\u534e\u821f\u5e94\u6025'}, {
        'code': '002241',
        'id': '002241GEGF',
        'name': '\u6b4c\u5c14\u80a1\u4efd'
    }, {'code': '002749', 'id': '002749GGGF', 'name': '\u56fd\u5149\u80a1\u4efd'}, {
        'code': '002045',
        'id': '002045GGDQ',
        'name': '\u56fd\u5149\u7535\u5668'
    }, {'code': '002098', 'id': '002098XXGF', 'name': '\u6d54\u5174\u80a1\u4efd'}, {
        'code': '002352',
        'id': '002352DTXC',
        'name': '\u9f0e\u6cf0\u65b0\u6750'
    }, {'code': '600798', 'id': '600798NBHY', 'name': '\u5b81\u6ce2\u6d77\u8fd0'}, {
        'code': '000039',
        'id': '000039ZJJT',
        'name': '\u4e2d\u96c6\u96c6\u56e2'
    }, {'code': '002184', 'id': '002184HDKZ', 'name': '\u6d77\u5f97\u63a7\u5236'}, {
        'code': '002281',
        'id': '002281GXKJ',
        'name': '\u5149\u8fc5\u79d1\u6280'
    }, {'code': '300106', 'id': '300106XBMY', 'name': '\u897f\u90e8\u7267\u4e1a'}, {
        'code': '600751',
        'id': '600751THTZ',
        'name': '\u5929\u6d77\u6295\u8d44'
    }, {'code': '300053', 'id': '300053OBT', 'name': '\u6b27\u6bd4\u7279'}, {
        'code': '300523',
        'id': '300523CAKJ',
        'name': '\u8fb0\u5b89\u79d1\u6280'
    }, {'code': '002451', 'id': '002451MEDQ', 'name': '\u6469\u6069\u7535\u6c14'}, {
        'code': '300520',
        'id': '300520KDGC',
        'name': '\u79d1\u5927\u56fd\u521b'
    }, {'code': '601880', 'id': '601880DLG', 'name': '\u5927\u8fde\u6e2f'}, {
        'code': '002480',
        'id': '002480XZGF',
        'name': '\u65b0\u7b51\u80a1\u4efd'
    }, {'code': '300145', 'id': '300145ZJHJ', 'name': '\u4e2d\u91d1\u73af\u5883'}, {
        'code': '600056',
        'id': '600056ZGYY',
        'name': '\u4e2d\u56fd\u533b\u836f'
    }, {'code': '000418', 'id': '000418XTE\uff21', 'name': '\u5c0f\u5929\u9e45\uff21'}, {
        'code': '300056',
        'id': '300056SWS',
        'name': '\u4e09\u7ef4\u4e1d'
    }, {'code': '300175', 'id': '300175LYGF', 'name': '\u6717\u6e90\u80a1\u4efd'}, {
        'code': '300054',
        'id': '300054DLGF',
        'name': '\u9f0e\u9f99\u80a1\u4efd'
    }, {'code': '603017', 'id': '603017ZHSJ', 'name': '\u4e2d\u8861\u8bbe\u8ba1'}, {
        'code': '600787',
        'id': '600787ZCGF',
        'name': '\u4e2d\u50a8\u80a1\u4efd'
    }, {'code': '601601', 'id': '601601ZGTB', 'name': '\u4e2d\u56fd\u592a\u4fdd'}, {
        'code': '002762',
        'id': '002762JFLB',
        'name': '\u91d1\u53d1\u62c9\u6bd4'
    }, {'code': '000502', 'id': '000502LJKG', 'name': '\u7eff\u666f\u63a7\u80a1'}, {
        'code': '600196',
        'id': '600196FXYY',
        'name': '\u590d\u661f\u533b\u836f'
    }, {'code': '300437', 'id': '300437QSY', 'name': '\u6e05\u6c34\u6e90'}, {
        'code': '002326',
        'id': '002326YTKJ',
        'name': '\u6c38\u592a\u79d1\u6280'
    }, {'code': '002592', 'id': '002592BLKJ', 'name': '\u516b\u83f1\u79d1\u6280'}, {
        'code': '300221',
        'id': '300221YXKJ',
        'name': '\u94f6\u79a7\u79d1\u6280'
    }, {'code': '300305', 'id': '300305YXGF', 'name': '\u88d5\u5174\u80a1\u4efd'}, {
        'code': '600120',
        'id': '600120ZJDF',
        'name': '\u6d59\u6c5f\u4e1c\u65b9'
    }, {'code': '300493', 'id': '300493RXKJ', 'name': '\u6da6\u6b23\u79d1\u6280'}, {
        'code': '300269',
        'id': '300269LJGD',
        'name': '\u8054\u5efa\u5149\u7535'
    }, {'code': '002240', 'id': '002240WHGF', 'name': '\u5a01\u534e\u80a1\u4efd'}, {
        'code': '300441',
        'id': '300441BSGF',
        'name': '\u9c8d\u65af\u80a1\u4efd'
    }, {'code': '002521', 'id': '002521QFXC', 'name': '\u9f50\u5cf0\u65b0\u6750'}, {
        'code': '002523',
        'id': '002523TQQZ',
        'name': '\u5929\u6865\u8d77\u91cd'
    }, {'code': '002661', 'id': '002661KMMY', 'name': '\u514b\u660e\u9762\u4e1a'}, {
        'code': '300370',
        'id': '300370AKKJ',
        'name': '\u5b89\u63a7\u79d1\u6280'
    }, {'code': '600531', 'id': '600531YGJQ', 'name': '\u8c6b\u5149\u91d1\u94c5'}, {
        'code': '000910',
        'id': '000910DYKJ',
        'name': '\u5927\u4e9a\u79d1\u6280'
    }, {'code': '600070', 'id': '600070ZJFR', 'name': '\u6d59\u6c5f\u5bcc\u6da6'}, {
        'code': '000609',
        'id': '000609MSTZ',
        'name': '\u7ef5\u77f3\u6295\u8d44'
    }, {'code': '000601', 'id': '000601SNGF', 'name': '\u97f6\u80fd\u80a1\u4efd'}, {
        'code': '002060',
        'id': '002060Y S D',
        'name': '\u7ca4 \u6c34 \u7535'
    }, {'code': '000856', 'id': '000856*STJZ', 'name': '*ST\u5180\u88c5'}, {
        'code': '002674',
        'id': '002674XYKJ',
        'name': '\u5174\u4e1a\u79d1\u6280'
    }, {'code': '002120', 'id': '002120XHGF', 'name': '\u65b0\u6d77\u80a1\u4efd'}, {
        'code': '000880',
        'id': '000880WCZJ',
        'name': '\u6f4d\u67f4\u91cd\u673a'
    }, {'code': '603989', 'id': '603989AHJT', 'name': '\u827e\u534e\u96c6\u56e2'}, {
        'code': '002516',
        'id': '002516KDKJ',
        'name': '\u65f7\u8fbe\u79d1\u6280'
    }, {'code': '600637', 'id': '600637DFMZ', 'name': '\u4e1c\u65b9\u660e\u73e0'}, {
        'code': '600861',
        'id': '600861BJCX',
        'name': '\u5317\u4eac\u57ce\u4e61'
    }, {'code': '000060', 'id': '000060ZJLN', 'name': '\u4e2d\u91d1\u5cad\u5357'}, {
        'code': '600237',
        'id': '600237TFDZ',
        'name': '\u94dc\u5cf0\u7535\u5b50'
    }, {'code': '002350', 'id': '002350BJKR', 'name': '\u5317\u4eac\u79d1\u9510'}, {
        'code': '603022',
        'id': '603022XTL',
        'name': '\u65b0\u901a\u8054'
    }, {'code': '002479', 'id': '002479FCHB', 'name': '\u5bcc\u6625\u73af\u4fdd'}, {
        'code': '002734',
        'id': '002734LMGF',
        'name': '\u5229\u6c11\u80a1\u4efd'
    }, {'code': '600406', 'id': '600406GDNR', 'name': '\u56fd\u7535\u5357\u745e'}, {
        'code': '002572',
        'id': '002572SFY',
        'name': '\u7d22\u83f2\u4e9a'
    }, {'code': '300313', 'id': '300313TSSW', 'name': '\u5929\u5c71\u751f\u7269'}, {
        'code': '002588',
        'id': '002588SDL',
        'name': '\u53f2\u4e39\u5229'
    }, {'code': '600547', 'id': '600547SDHJ', 'name': '\u5c71\u4e1c\u9ec4\u91d1'}, {
        'code': '600086',
        'id': '600086DFJY',
        'name': '\u4e1c\u65b9\u91d1\u94b0'
    }, {'code': '300473', 'id': '300473DEGF', 'name': '\u5fb7\u5c14\u80a1\u4efd'}, {
        'code': '600288',
        'id': '600288DHKJ',
        'name': '\u5927\u6052\u79d1\u6280'
    }, {'code': '300268', 'id': '300268WFSK', 'name': '\u4e07\u798f\u751f\u79d1'}, {
        'code': '002517',
        'id': '002517KYWL',
        'name': '\u607a\u82f1\u7f51\u7edc'
    }, {'code': '000688', 'id': '000688JXKY', 'name': '\u5efa\u65b0\u77ff\u4e1a'}, {
        'code': '600644',
        'id': '600644LSDL',
        'name': '\u4e50\u5c71\u7535\u529b'
    }, {'code': '601969', 'id': '601969HNKY', 'name': '\u6d77\u5357\u77ff\u4e1a'}, {
        'code': '000702',
        'id': '000702ZHKJ',
        'name': '\u6b63\u8679\u79d1\u6280'
    }, {'code': '600217', 'id': '600217QLSN', 'name': '\u79e6\u5cad\u6c34\u6ce5'}, {
        'code': '000711',
        'id': '000711JLKJ',
        'name': '\u4eac\u84dd\u79d1\u6280'
    }, {'code': '603322', 'id': '603322CXTX', 'name': '\u8d85\u8baf\u901a\u4fe1'}, {
        'code': '601012',
        'id': '601012LJGF',
        'name': '\u9686\u57fa\u80a1\u4efd'
    }, {'code': '300087', 'id': '300087QYGK', 'name': '\u8343\u94f6\u9ad8\u79d1'}, {
        'code': '600571',
        'id': '600571XYD',
        'name': '\u4fe1\u96c5\u8fbe'
    }, {'code': '000717', 'id': '000717*STSG', 'name': '*ST\u97f6\u94a2'}, {
        'code': '600133',
        'id': '600133DHGX',
        'name': '\u4e1c\u6e56\u9ad8\u65b0'
    }, {'code': '600623', 'id': '600623HYJT', 'name': '\u534e\u8c0a\u96c6\u56e2'}, {
        'code': '600527',
        'id': '600527JNGX',
        'name': '\u6c5f\u5357\u9ad8\u7ea4'
    }, {'code': '600195', 'id': '600195ZMGF', 'name': '\u4e2d\u7267\u80a1\u4efd'}, {
        'code': '600998',
        'id': '600998JZT',
        'name': '\u4e5d\u5dde\u901a'
    }, {'code': '300137', 'id': '300137XHHB', 'name': '\u5148\u6cb3\u73af\u4fdd'}, {
        'code': '600870',
        'id': '600870SHDZ',
        'name': '\u53a6\u534e\u7535\u5b50'
    }, {'code': '002095', 'id': '002095S Y B', 'name': '\u751f \u610f \u5b9d'}, {
        'code': '002031',
        'id': '002031JLZN',
        'name': '\u5de8\u8f6e\u667a\u80fd'
    }, {'code': '000697', 'id': '000697LSYS', 'name': '\u70bc\u77f3\u6709\u8272'}, {
        'code': '300083',
        'id': '300083JSJM',
        'name': '\u52b2\u80dc\u7cbe\u5bc6'
    }, {'code': '600825', 'id': '600825XHCM', 'name': '\u65b0\u534e\u4f20\u5a92'}, {
        'code': '300328',
        'id': '300328YAKJ',
        'name': '\u5b9c\u5b89\u79d1\u6280'
    }, {'code': '601016', 'id': '601016JNFD', 'name': '\u8282\u80fd\u98ce\u7535'}, {
        'code': '601677',
        'id': '601677MTLY',
        'name': '\u660e\u6cf0\u94dd\u4e1a'
    }, {'code': '002639', 'id': '002639XRGF', 'name': '\u96ea\u4eba\u80a1\u4efd'}, {
        'code': '300329',
        'id': '300329HLGQ',
        'name': '\u6d77\u4f26\u94a2\u7434'
    }, {'code': '002802', 'id': '002802HHXC', 'name': '\u6d2a\u6c47\u65b0\u6750'}, {
        'code': '603996',
        'id': '603996ZXKJ',
        'name': '\u4e2d\u65b0\u79d1\u6280'
    }, {'code': '002652', 'id': '002652YZXC', 'name': '\u626c\u5b50\u65b0\u6750'}, {
        'code': '002404',
        'id': '002404JXSC',
        'name': '\u5609\u6b23\u4e1d\u7ef8'
    }, {'code': '002042', 'id': '002042HFSF', 'name': '\u534e\u5b5a\u8272\u7eba'}, {
        'code': '600080',
        'id': '600080JHGF',
        'name': '\u91d1\u82b1\u80a1\u4efd'
    }, {'code': '600161', 'id': '600161TTSW', 'name': '\u5929\u575b\u751f\u7269'}, {
        'code': '002545',
        'id': '002545DFTT',
        'name': '\u4e1c\u65b9\u94c1\u5854'
    }, {'code': '002331', 'id': '002331WTKJ', 'name': '\u7696\u901a\u79d1\u6280'}, {
        'code': '000960',
        'id': '000960XYGF',
        'name': '\u9521\u4e1a\u80a1\u4efd'
    }, {'code': '002801', 'id': '002801WGGF', 'name': '\u5fae\u5149\u80a1\u4efd'}, {
        'code': '002421',
        'id': '002421DSZN',
        'name': '\u8fbe\u5b9e\u667a\u80fd'
    }, {'code': '002587', 'id': '002587ATDZ', 'name': '\u5965\u62d3\u7535\u5b50'}, {
        'code': '603611',
        'id': '603611NLGF',
        'name': '\u8bfa\u529b\u80a1\u4efd'
    }, {'code': '002147', 'id': '002147XGYC', 'name': '\u65b0\u5149\u5706\u6210'}, {
        'code': '300207',
        'id': '300207XWD',
        'name': '\u6b23\u65fa\u8fbe'
    }, {'code': '002659', 'id': '002659ZTQL', 'name': '\u4e2d\u6cf0\u6865\u6881'}, {
        'code': '300148',
        'id': '300148TZWH',
        'name': '\u5929\u821f\u6587\u5316'
    }, {'code': '002508', 'id': '002508LBDQ', 'name': '\u8001\u677f\u7535\u5668'}, {
        'code': '000823',
        'id': '000823CSDZ',
        'name': '\u8d85\u58f0\u7535\u5b50'
    }, {'code': '002475', 'id': '002475LXJM', 'name': '\u7acb\u8baf\u7cbe\u5bc6'}, {
        'code': '002390',
        'id': '002390XBZY',
        'name': '\u4fe1\u90a6\u5236\u836f'
    }, {'code': '600275', 'id': '600275WCY', 'name': '\u6b66\u660c\u9c7c'}, {
        'code': '300096',
        'id': '300096YLZ',
        'name': '\u6613\u8054\u4f17'
    }, {'code': '002728', 'id': '002728TCZY', 'name': '\u53f0\u57ce\u5236\u836f'}, {
        'code': '300007',
        'id': '300007HWDZ',
        'name': '\u6c49\u5a01\u7535\u5b50'
    }, {'code': '002318', 'id': '002318JLTC', 'name': '\u4e45\u7acb\u7279\u6750'}, {
        'code': '000586',
        'id': '000586HYTX',
        'name': '\u6c47\u6e90\u901a\u4fe1'
    }, {'code': '300204', 'id': '300204STS', 'name': '\u8212\u6cf0\u795e'}, {
        'code': '601098',
        'id': '601098ZNCM',
        'name': '\u4e2d\u5357\u4f20\u5a92'
    }, {'code': '002019', 'id': '002019YFXF', 'name': '\u4ebf\u5e06\u946b\u5bcc'}, {
        'code': '603939',
        'id': '603939YFYF',
        'name': '\u76ca\u4e30\u836f\u623f'
    }, {'code': '300183', 'id': '300183DRZB', 'name': '\u4e1c\u8f6f\u8f7d\u6ce2'}, {
        'code': '002231',
        'id': '002231AWTX',
        'name': '\u5965\u7ef4\u901a\u4fe1'
    }, {'code': '000559', 'id': '000559WXQC', 'name': '\u4e07\u5411\u94b1\u6f6e'}, {
        'code': '002199',
        'id': '002199*STDJ',
        'name': '*ST\u4e1c\u6676'
    }, {'code': '002295', 'id': '002295JYGF', 'name': '\u7cbe\u827a\u80a1\u4efd'}, {
        'code': '002315',
        'id': '002315JDKJ',
        'name': '\u7126\u70b9\u79d1\u6280'
    }, {'code': '600160', 'id': '600160JHGF', 'name': '\u5de8\u5316\u80a1\u4efd'}, {
        'code': '002194',
        'id': '002194WHFG',
        'name': '\u6b66\u6c49\u51e1\u8c37'
    }, {'code': '002344', 'id': '002344HNPC', 'name': '\u6d77\u5b81\u76ae\u57ce'}, {
        'code': '600439',
        'id': '600439RBQ',
        'name': '\u745e\u8d1d\u5361'
    }, {'code': '002601', 'id': '002601BLL', 'name': '\u4f70\u5229\u8054'}, {
        'code': '000782',
        'id': '000782MDGF',
        'name': '\u7f8e\u8fbe\u80a1\u4efd'
    }, {'code': '000032', 'id': '000032SSD\uff21', 'name': '\u6df1\u6851\u8fbe\uff21'}, {
        'code': '002552',
        'id': '002552BDKJ',
        'name': '\u5b9d\u9f0e\u79d1\u6280'
    }, {'code': '600883', 'id': '600883BWKJ', 'name': '\u535a\u95fb\u79d1\u6280'}, {
        'code': '002233',
        'id': '002233TPJT',
        'name': '\u5854\u724c\u96c6\u56e2'
    }, {'code': '600129', 'id': '600129TJJT', 'name': '\u592a\u6781\u96c6\u56e2'}, {
        'code': '002441',
        'id': '002441ZYD',
        'name': '\u4f17\u4e1a\u8fbe'
    }, {'code': '600497', 'id': '600497CHXD', 'name': '\u9a70\u5b8f\u950c\u9517'}, {
        'code': '600730',
        'id': '600730ZGGK',
        'name': '\u4e2d\u56fd\u9ad8\u79d1'
    }, {'code': '002542', 'id': '002542ZHYT', 'name': '\u4e2d\u5316\u5ca9\u571f'}, {
        'code': '300492',
        'id': '300492SDSJ',
        'name': '\u5c71\u9f0e\u8bbe\u8ba1'
    }, {'code': '600800', 'id': '600800TJCQ', 'name': '\u5929\u6d25\u78c1\u5361'}, {
        'code': '000050',
        'id': '000050STM\uff21',
        'name': '\u6df1\u5929\u9a6c\uff21'
    }, {'code': '603006', 'id': '603006LMGF', 'name': '\u8054\u660e\u80a1\u4efd'}, {
        'code': '002137',
        'id': '002137MDSZ',
        'name': '\u9ea6\u8fbe\u6570\u5b57'
    }, {'code': '000826', 'id': '000826QDSD', 'name': '\u542f\u8fea\u6851\u5fb7'}, {
        'code': '601007',
        'id': '601007JLFD',
        'name': '\u91d1\u9675\u996d\u5e97'
    }, {'code': '000637', 'id': '000637MHSH', 'name': '\u8302\u5316\u5b9e\u534e'}, {
        'code': '300169',
        'id': '300169TSXC',
        'name': '\u5929\u665f\u65b0\u6750'
    }, {'code': '600638', 'id': '600638XHP', 'name': '\u65b0\u9ec4\u6d66'}, {
        'code': '601801',
        'id': '601801WXCM',
        'name': '\u7696\u65b0\u4f20\u5a92'
    }, {'code': '002081', 'id': '002081J T L', 'name': '\u91d1 \u87b3 \u8782'}, {
        'code': '002546',
        'id': '002546XLDZ',
        'name': '\u65b0\u8054\u7535\u5b50'
    }, {'code': '002668', 'id': '002668AMDQ', 'name': '\u5965\u9a6c\u7535\u5668'}, {
        'code': '300294',
        'id': '300294BYSW',
        'name': '\u535a\u96c5\u751f\u7269'
    }, {'code': '002694', 'id': '002694GDKJ', 'name': '\u987e\u5730\u79d1\u6280'}, {
        'code': '601313',
        'id': '601313JNJJ',
        'name': '\u6c5f\u5357\u5609\u6377'
    }, {'code': '000993', 'id': '000993MDDL', 'name': '\u95fd\u4e1c\u7535\u529b'}, {
        'code': '600629',
        'id': '600629HJJT',
        'name': '\u534e\u5efa\u96c6\u56e2'
    }, {'code': '300378', 'id': '300378DJRJ', 'name': '\u9f0e\u6377\u8f6f\u4ef6'}, {
        'code': '300134',
        'id': '300134DFKJ',
        'name': '\u5927\u5bcc\u79d1\u6280'
    }, {'code': '002766', 'id': '002766SLGF', 'name': '\u7d22\u83f1\u80a1\u4efd'}, {
        'code': '300129',
        'id': '300129TSFN',
        'name': '\u6cf0\u80dc\u98ce\u80fd'
    }, {'code': '600510', 'id': '600510HMD', 'name': '\u9ed1\u7261\u4e39'}, {
        'code': '600828',
        'id': '600828MYSY',
        'name': '\u8302\u4e1a\u5546\u4e1a'
    }, {'code': '000404', 'id': '000404HYYS', 'name': '\u534e\u610f\u538b\u7f29'}, {
        'code': '300482',
        'id': '300482WFSW',
        'name': '\u4e07\u5b5a\u751f\u7269'
    }, {'code': '000023', 'id': '000023STD\uff21', 'name': '\u6df1\u5929\u5730\uff21'}, {
        'code': '000951',
        'id': '000951ZGZQ',
        'name': '\u4e2d\u56fd\u91cd\u6c7d'
    }, {'code': '000705', 'id': '000705ZJZY', 'name': '\u6d59\u6c5f\u9707\u5143'}, {
        'code': '300165',
        'id': '300165TRYQ',
        'name': '\u5929\u745e\u4eea\u5668'
    }, {'code': '600241', 'id': '600241SDWH', 'name': '\u65f6\u4ee3\u4e07\u6052'}, {
        'code': '002759',
        'id': '002759TJGF',
        'name': '\u5929\u9645\u80a1\u4efd'
    }, {'code': '000989', 'id': '000989J Z T', 'name': '\u4e5d \u829d \u5802'}, {
        'code': '300155',
        'id': '300155AJB',
        'name': '\u5b89\u5c45\u5b9d'
    }, {'code': '000591', 'id': '000591TYN', 'name': '\u592a\u9633\u80fd'}, {
        'code': '300286',
        'id': '300286AKR',
        'name': '\u5b89\u79d1\u745e'
    }, {'code': '300222', 'id': '300222KDZN', 'name': '\u79d1\u5927\u667a\u80fd'}, {
        'code': '600379',
        'id': '600379BGGF',
        'name': '\u5b9d\u5149\u80a1\u4efd'
    }, {'code': '300192', 'id': '300192KSWD', 'name': '\u79d1\u65af\u4f0d\u5fb7'}, {
        'code': '000687',
        'id': '000687HXFZ',
        'name': '\u534e\u8baf\u65b9\u821f'
    }, {'code': '000982', 'id': '000982ZYRY', 'name': '\u4e2d\u94f6\u7ed2\u4e1a'}, {
        'code': '002063',
        'id': '002063YGRJ',
        'name': '\u8fdc\u5149\u8f6f\u4ef6'
    }, {'code': '600736', 'id': '600736SZGX', 'name': '\u82cf\u5dde\u9ad8\u65b0'}, {
        'code': '603688',
        'id': '603688SYGF',
        'name': '\u77f3\u82f1\u80a1\u4efd'
    }, {'code': '002447', 'id': '002447YQHC', 'name': '\u58f9\u6865\u6d77\u53c2'}, {
        'code': '002721',
        'id': '002721JYWH',
        'name': '\u91d1\u4e00\u6587\u5316'
    }, {'code': '603227', 'id': '603227XFKJ', 'name': '\u96ea\u5cf0\u79d1\u6280'}, {
        'code': '600428',
        'id': '600428ZYHY',
        'name': '\u4e2d\u8fdc\u822a\u8fd0'
    }, {'code': '600984', 'id': '600984JSJX', 'name': '\u5efa\u8bbe\u673a\u68b0'}, {
        'code': '000159',
        'id': '000159GJSY',
        'name': '\u56fd\u9645\u5b9e\u4e1a'
    }, {'code': '000751', 'id': '000751XYGF', 'name': '\u950c\u4e1a\u80a1\u4efd'}, {
        'code': '002585',
        'id': '002585SXXC',
        'name': '\u53cc\u661f\u65b0\u6750'
    }, {'code': '000063', 'id': '000063ZXTX', 'name': '\u4e2d\u5174\u901a\u8baf'}, {
        'code': '002423',
        'id': '002423*STZT',
        'name': '*ST\u4e2d\u7279'
    }, {'code': '601777', 'id': '601777LFGF', 'name': '\u529b\u5e06\u80a1\u4efd'}, {
        'code': '002099',
        'id': '002099HXYY',
        'name': '\u6d77\u7fd4\u836f\u4e1a'
    }, {'code': '600020', 'id': '600020ZYGS', 'name': '\u4e2d\u539f\u9ad8\u901f'}, {
        'code': '000581',
        'id': '000581WFGK',
        'name': '\u5a01\u5b5a\u9ad8\u79d1'
    }, {'code': '600801', 'id': '600801HXSN', 'name': '\u534e\u65b0\u6c34\u6ce5'}, {
        'code': '002633',
        'id': '002633SKGF',
        'name': '\u7533\u79d1\u80a1\u4efd'
    }, {'code': '600535', 'id': '600535TSL', 'name': '\u5929\u58eb\u529b'}, {
        'code': '002731',
        'id': '002731CHZB',
        'name': '\u8403\u534e\u73e0\u5b9d'
    }, {'code': '300097', 'id': '300097ZYGF', 'name': '\u667a\u4e91\u80a1\u4efd'}, {
        'code': '002455',
        'id': '002455BCGF',
        'name': '\u767e\u5ddd\u80a1\u4efd'
    }, {'code': '002553', 'id': '002553NFZC', 'name': '\u5357\u65b9\u8f74\u627f'}, {
        'code': '002717',
        'id': '002717LNYL',
        'name': '\u5cad\u5357\u56ed\u6797'
    }, {'code': '600844', 'id': '600844DHKJ', 'name': '\u4e39\u5316\u79d1\u6280'}, {
        'code': '600350',
        'id': '600350SDGS',
        'name': '\u5c71\u4e1c\u9ad8\u901f'
    }, {'code': '600536', 'id': '600536ZGRJ', 'name': '\u4e2d\u56fd\u8f6f\u4ef6'}, {
        'code': '600868',
        'id': '600868MYJX',
        'name': '\u6885\u96c1\u5409\u7965'
    }, {'code': '600386', 'id': '600386BBCM', 'name': '\u5317\u5df4\u4f20\u5a92'}, {
        'code': '002195',
        'id': '002195ESSW',
        'name': '\u4e8c\u4e09\u56db\u4e94'
    }, {'code': '000701', 'id': '000701SMXD', 'name': '\u53a6\u95e8\u4fe1\u8fbe'}, {
        'code': '600358',
        'id': '600358GLLH',
        'name': '\u56fd\u65c5\u8054\u5408'
    }, {'code': '601939', 'id': '601939JSYX', 'name': '\u5efa\u8bbe\u94f6\u884c'}, {
        'code': '600298',
        'id': '600298AQJM',
        'name': '\u5b89\u742a\u9175\u6bcd'
    }, {'code': '300521', 'id': '300521ASK', 'name': '\u7231\u53f8\u51ef'}, {
        'code': '300317',
        'id': '300317JWGF',
        'name': '\u73c8\u4f1f\u80a1\u4efd'
    }, {'code': '600780', 'id': '600780TBNY', 'name': '\u901a\u5b9d\u80fd\u6e90'}, {
        'code': '600419',
        'id': '600419TRRY',
        'name': '\u5929\u6da6\u4e73\u4e1a'
    }, {'code': '002015', 'id': '002015XKHB', 'name': '\u971e\u5ba2\u73af\u4fdd'}, {
        'code': '603885',
        'id': '603885JXHK',
        'name': '\u5409\u7965\u822a\u7a7a'
    }, {'code': '300199', 'id': '300199HYYY', 'name': '\u7ff0\u5b87\u836f\u4e1a'}, {
        'code': '603355',
        'id': '603355LKDQ',
        'name': '\u83b1\u514b\u7535\u6c14'
    }, {'code': '300082', 'id': '300082AKGF', 'name': '\u5965\u514b\u80a1\u4efd'}, {
        'code': '002087',
        'id': '002087XYFZ',
        'name': '\u65b0\u91ce\u7eba\u7ec7'
    }, {'code': '300191', 'id': '300191QNHX', 'name': '\u6f5c\u80fd\u6052\u4fe1'}, {
        'code': '000673',
        'id': '000673DDDF',
        'name': '\u5f53\u4ee3\u4e1c\u65b9'
    }, {'code': '300278', 'id': '300278HCD', 'name': '\u534e\u660c\u8fbe'}, {
        'code': '000606',
        'id': '000606*STYQ',
        'name': '*ST\u6613\u6865'
    }, {'code': '000961', 'id': '000961ZNJS', 'name': '\u4e2d\u5357\u5efa\u8bbe'}, {
        'code': '000628',
        'id': '000628GXFZ',
        'name': '\u9ad8\u65b0\u53d1\u5c55'
    }, {'code': '000802', 'id': '000802BJWH', 'name': '\u5317\u4eac\u6587\u5316'}, {
        'code': '601628',
        'id': '601628ZGRS',
        'name': '\u4e2d\u56fd\u4eba\u5bff'
    }, {'code': '603288', 'id': '603288HTWY', 'name': '\u6d77\u5929\u5473\u4e1a'}, {
        'code': '002062',
        'id': '002062HRJS',
        'name': '\u5b8f\u6da6\u5efa\u8bbe'
    }, {'code': '002564', 'id': '002564TWKJ', 'name': '\u5929\u6c83\u79d1\u6280'}, {
        'code': '600276',
        'id': '600276HRYY',
        'name': '\u6052\u745e\u533b\u836f'
    }, {'code': '300257', 'id': '300257KSGF', 'name': '\u5f00\u5c71\u80a1\u4efd'}, {
        'code': '600846',
        'id': '600846TJKJ',
        'name': '\u540c\u6d4e\u79d1\u6280'
    }, {'code': '000603', 'id': '000603SDKY', 'name': '\u76db\u8fbe\u77ff\u4e1a'}, {
        'code': '002726',
        'id': '002726LDRS',
        'name': '\u9f99\u5927\u8089\u98df'
    }, {'code': '002185', 'id': '002185HTKJ', 'name': '\u534e\u5929\u79d1\u6280'}, {
        'code': '002265',
        'id': '002265XYGF',
        'name': '\u897f\u4eea\u80a1\u4efd'
    }, {'code': '002473', 'id': '002473SLD', 'name': '\u5723\u83b1\u8fbe'}, {
        'code': '000912',
        'id': '000912LTH',
        'name': '\u6cf8\u5929\u5316'
    }, {'code': '002314', 'id': '002314NSKG', 'name': '\u5357\u5c71\u63a7\u80a1'}, {
        'code': '002238',
        'id': '002238TWSX',
        'name': '\u5929\u5a01\u89c6\u8baf'
    }, {'code': '000998', 'id': '000998LPGK', 'name': '\u9686\u5e73\u9ad8\u79d1'}, {
        'code': '600360',
        'id': '600360HWDZ',
        'name': '\u534e\u5fae\u7535\u5b50'
    }, {'code': '000622', 'id': '000622*STHL', 'name': '*ST\u6052\u7acb'}, {
        'code': '603778',
        'id': '603778GJYL',
        'name': '\u4e7e\u666f\u56ed\u6797'
    }, {'code': '000995', 'id': '000995*STHT', 'name': '*ST\u7687\u53f0'}, {
        'code': '002023',
        'id': '002023HTGX',
        'name': '\u6d77\u7279\u9ad8\u65b0'
    }, {'code': '603800', 'id': '603800DSGF', 'name': '\u9053\u68ee\u80a1\u4efd'}, {
        'code': '600502',
        'id': '600502AHSL',
        'name': '\u5b89\u5fbd\u6c34\u5229'
    }, {'code': '002449', 'id': '002449GXGD', 'name': '\u56fd\u661f\u5149\u7535'}, {
        'code': '601318',
        'id': '601318ZGPA',
        'name': '\u4e2d\u56fd\u5e73\u5b89'
    }, {'code': '000590', 'id': '000590QDGH', 'name': '\u542f\u8fea\u53e4\u6c49'}, {
        'code': '002382',
        'id': '002382LFYL',
        'name': '\u84dd\u5e06\u533b\u7597'
    }, {'code': '000999', 'id': '000999HRSJ', 'name': '\u534e\u6da6\u4e09\u4e5d'}, {
        'code': '002064',
        'id': '002064HFAL',
        'name': '\u534e\u5cf0\u6c28\u7eb6'
    }, {'code': '000408', 'id': '000408*STJY', 'name': '*ST\u91d1\u6e90'}, {
        'code': '600789',
        'id': '600789LKYY',
        'name': '\u9c81\u6297\u533b\u836f'
    }, {'code': '600811', 'id': '600811DFJT', 'name': '\u4e1c\u65b9\u96c6\u56e2'}, {
        'code': '601107',
        'id': '601107SCCY',
        'name': '\u56db\u5ddd\u6210\u6e1d'
    }, {'code': '300144', 'id': '300144SCYY', 'name': '\u5b8b\u57ce\u6f14\u827a'}, {
        'code': '600156',
        'id': '600156HSGF',
        'name': '\u534e\u5347\u80a1\u4efd'
    }, {'code': '000895', 'id': '000895SHFZ', 'name': '\u53cc\u6c47\u53d1\u5c55'}, {
        'code': '300112',
        'id': '300112WXZK',
        'name': '\u4e07\u8baf\u81ea\u63a7'
    }, {'code': '002452', 'id': '002452CGJT', 'name': '\u957f\u9ad8\u96c6\u56e2'}, {
        'code': '002183',
        'id': '002183Y Y T',
        'name': '\u6021 \u4e9a \u901a'
    }, {'code': '002054', 'id': '002054DMHG', 'name': '\u5fb7\u7f8e\u5316\u5de5'}, {
        'code': '000536',
        'id': '000536HYKJ',
        'name': '\u534e\u6620\u79d1\u6280'
    }, {'code': '600249', 'id': '600249LMZ', 'name': '\u4e24\u9762\u9488'}, {
        'code': '600829',
        'id': '600829RMTT',
        'name': '\u4eba\u6c11\u540c\u6cf0'
    }, {'code': '600139', 'id': '600139XBZY', 'name': '\u897f\u90e8\u8d44\u6e90'}, {
        'code': '600888',
        'id': '600888XJZH',
        'name': '\u65b0\u7586\u4f17\u548c'
    }, {'code': '600776', 'id': '600776DFTX', 'name': '\u4e1c\u65b9\u901a\u4fe1'}, {
        'code': '600270',
        'id': '600270WYFZ',
        'name': '\u5916\u8fd0\u53d1\u5c55'
    }, {'code': '000902', 'id': '000902XYF', 'name': '\u65b0\u6d0b\u4e30'}, {
        'code': '300350',
        'id': '300350HPF',
        'name': '\u534e\u9e4f\u98de'
    }, {'code': '600116', 'id': '600116SXSL', 'name': '\u4e09\u5ce1\u6c34\u5229'}, {
        'code': '002155',
        'id': '002155HNHJ',
        'name': '\u6e56\u5357\u9ec4\u91d1'
    }, {'code': '002549', 'id': '002549KMTQ', 'name': '\u51ef\u7f8e\u7279\u6c14'}, {
        'code': '002806',
        'id': '002806HFGF',
        'name': '\u534e\u950b\u80a1\u4efd'
    }, {'code': '600615', 'id': '600615FHGF', 'name': '\u4e30\u534e\u80a1\u4efd'}, {
        'code': '603116',
        'id': '603116HQT',
        'name': '\u7ea2\u873b\u8713'
    }, {'code': '603016', 'id': '603016XHT', 'name': '\u65b0\u5b8f\u6cf0'}, {
        'code': '600166',
        'id': '600166FTQC',
        'name': '\u798f\u7530\u6c7d\u8f66'
    }, {'code': '000668', 'id': '000668RFKG', 'name': '\u8363\u4e30\u63a7\u80a1'}, {
        'code': '000931',
        'id': '000931Z G C',
        'name': '\u4e2d \u5173 \u6751'
    }, {'code': '002148', 'id': '002148BWTX', 'name': '\u5317\u7eac\u901a\u4fe1'}, {
        'code': '002065',
        'id': '002065DHRJ',
        'name': '\u4e1c\u534e\u8f6f\u4ef6'
    }, {'code': '600807', 'id': '600807TYGF', 'name': '\u5929\u4e1a\u80a1\u4efd'}, {
        'code': '002438',
        'id': '002438JSST',
        'name': '\u6c5f\u82cf\u795e\u901a'
    }, {'code': '000835', 'id': '000835CCDM', 'name': '\u957f\u57ce\u52a8\u6f2b'}, {
        'code': '600483',
        'id': '600483FNGF',
        'name': '\u798f\u80fd\u80a1\u4efd'
    }, {'code': '300321', 'id': '300321TDGF', 'name': '\u540c\u5927\u80a1\u4efd'}, {
        'code': '002569',
        'id': '002569BSGF',
        'name': '\u6b65\u68ee\u80a1\u4efd'
    }, {'code': '600130', 'id': '600130BDGF', 'name': '\u6ce2\u5bfc\u80a1\u4efd'}, {
        'code': '601689',
        'id': '601689TPJT',
        'name': '\u62d3\u666e\u96c6\u56e2'
    }, {'code': '002287', 'id': '002287QZCY', 'name': '\u5947\u6b63\u85cf\u836f'}, {
        'code': '002217',
        'id': '002217HLT',
        'name': '\u5408\u529b\u6cf0'
    }, {'code': '002370', 'id': '002370YTYY', 'name': '\u4e9a\u592a\u836f\u4e1a'}, {
        'code': '300200',
        'id': '300200GMXC',
        'name': '\u9ad8\u76df\u65b0\u6750'
    }, {'code': '600026', 'id': '600026ZHFZ', 'name': '\u4e2d\u6d77\u53d1\u5c55'}, {
        'code': '002398',
        'id': '002398JYJT',
        'name': '\u5efa\u7814\u96c6\u56e2'
    }, {'code': '000426', 'id': '000426XYKY', 'name': '\u5174\u4e1a\u77ff\u4e1a'}, {
        'code': '002376',
        'id': '002376XBY',
        'name': '\u65b0\u5317\u6d0b'
    }, {'code': '300515', 'id': '300515SDKJ', 'name': '\u4e09\u5fb7\u79d1\u6280'}, {
        'code': '300408',
        'id': '300408SHJT',
        'name': '\u4e09\u73af\u96c6\u56e2'
    }, {'code': '600599', 'id': '600599XMJK', 'name': '\u718a\u732b\u91d1\u63a7'}, {
        'code': '002032',
        'id': '002032S B E',
        'name': '\u82cf \u6cca \u5c14'
    }, {'code': '600572', 'id': '600572KEB', 'name': '\u5eb7\u6069\u8d1d'}, {
        'code': '601988',
        'id': '601988ZGYX',
        'name': '\u4e2d\u56fd\u94f6\u884c'
    }, {'code': '600062', 'id': '600062HRSH', 'name': '\u534e\u6da6\u53cc\u9e64'}, {
        'code': '603338',
        'id': '603338ZJDL',
        'name': '\u6d59\u6c5f\u9f0e\u529b'
    }, {'code': '603959', 'id': '603959BLKJ', 'name': '\u767e\u5229\u79d1\u6280'}, {
        'code': '300093',
        'id': '300093JGBL',
        'name': '\u91d1\u521a\u73bb\u7483'
    }, {'code': '600338', 'id': '600338XCZF', 'name': '\u897f\u85cf\u73e0\u5cf0'}, {
        'code': '600317',
        'id': '600317YKG',
        'name': '\u8425\u53e3\u6e2f'
    }, {'code': '600693', 'id': '600693DBJT', 'name': '\u4e1c\u767e\u96c6\u56e2'}, {
        'code': '000020',
        'id': '000020SHF\uff21',
        'name': '\u6df1\u534e\u53d1\uff21'
    }, {'code': '002767', 'id': '002767XFDZ', 'name': '\u5148\u950b\u7535\u5b50'}, {
        'code': '002560',
        'id': '002560TDGF',
        'name': '\u901a\u8fbe\u80a1\u4efd'
    }, {'code': '600891', 'id': '600891QLJT', 'name': '\u79cb\u6797\u96c6\u56e2'}, {
        'code': '603333',
        'id': '603333MXDL',
        'name': '\u660e\u661f\u7535\u7f06'
    }, {'code': '600336', 'id': '600336AKM', 'name': '\u6fb3\u67ef\u739b'}, {
        'code': '000625',
        'id': '000625CAQC',
        'name': '\u957f\u5b89\u6c7d\u8f66'
    }, {'code': '000333', 'id': '000333MDJT', 'name': '\u7f8e\u7684\u96c6\u56e2'}, {
        'code': '601011',
        'id': '601011BTL',
        'name': '\u5b9d\u6cf0\u9686'
    }, {'code': '002197', 'id': '002197ZTDZ', 'name': '\u8bc1\u901a\u7535\u5b50'}, {
        'code': '601000',
        'id': '601000TSG',
        'name': '\u5510\u5c71\u6e2f'
    }, {'code': '000721', 'id': '000721XAYS', 'name': '\u897f\u5b89\u996e\u98df'}, {
        'code': '300463',
        'id': '300463MKSW',
        'name': '\u8fc8\u514b\u751f\u7269'
    }, {'code': '000030', 'id': '000030FAGF', 'name': '\u5bcc\u5965\u80a1\u4efd'}, {
        'code': '002037',
        'id': '002037JLFZ',
        'name': '\u4e45\u8054\u53d1\u5c55'
    }, {'code': '002126', 'id': '002126YLGF', 'name': '\u94f6\u8f6e\u80a1\u4efd'}, {
        'code': '002248',
        'id': '002248HDSK',
        'name': '\u534e\u4e1c\u6570\u63a7'
    }, {'code': '300217', 'id': '300217DFDR', 'name': '\u4e1c\u65b9\u7535\u70ed'}, {
        'code': '300295',
        'id': '300295SLWW',
        'name': '\u4e09\u516d\u4e94\u7f51'
    }, {'code': '002176', 'id': '002176JTDJ', 'name': '\u6c5f\u7279\u7535\u673a'}, {
        'code': '000416',
        'id': '000416MSKG',
        'name': '\u6c11\u751f\u63a7\u80a1'
    }, {'code': '601226', 'id': '601226HDZG', 'name': '\u534e\u7535\u91cd\u5de5'}, {
        'code': '300442',
        'id': '300442PLS',
        'name': '\u666e\u4e3d\u76db'
    }, {'code': '603520', 'id': '603520STL', 'name': '\u53f8\u592a\u7acb'}, {
        'code': '000790',
        'id': '000790HSJT',
        'name': '\u534e\u795e\u96c6\u56e2'
    }, {'code': '600685', 'id': '600685ZCFW', 'name': '\u4e2d\u8239\u9632\u52a1'}, {
        'code': '000150',
        'id': '000150YHJK',
        'name': '\u5b9c\u534e\u5065\u5eb7'
    }, {'code': '300375', 'id': '300375PLGF', 'name': '\u9e4f\u7fce\u80a1\u4efd'}, {
        'code': '300498',
        'id': '300498WSGF',
        'name': '\u6e29\u6c0f\u80a1\u4efd'
    }, {'code': '300226', 'id': '300226SHGL', 'name': '\u4e0a\u6d77\u94a2\u8054'}, {
        'code': '000977',
        'id': '000977LCXX',
        'name': '\u6d6a\u6f6e\u4fe1\u606f'
    }, {'code': '300332', 'id': '300332THHJ', 'name': '\u5929\u58d5\u73af\u5883'}, {
        'code': '002143',
        'id': '002143YJCM',
        'name': '\u5370\u7eaa\u4f20\u5a92'
    }, {'code': '601919', 'id': '601919ZGYY', 'name': '\u4e2d\u56fd\u8fdc\u6d0b'}, {
        'code': '600117',
        'id': '600117XNTG',
        'name': '\u897f\u5b81\u7279\u94a2'
    }, {'code': '002634', 'id': '002634BJGF', 'name': '\u68d2\u6770\u80a1\u4efd'}, {
        'code': '603128',
        'id': '603128HMWL',
        'name': '\u534e\u8d38\u7269\u6d41'
    }, {'code': '002433', 'id': '002433TAT', 'name': '\u592a\u5b89\u5802'}, {
        'code': '002595',
        'id': '002595HMKJ',
        'name': '\u8c6a\u8fc8\u79d1\u6280'
    }, {'code': '300344', 'id': '300344TKBY', 'name': '\u592a\u7a7a\u677f\u4e1a'}, {
        'code': '000752',
        'id': '000752XCFZ',
        'name': '\u897f\u85cf\u53d1\u5c55'
    }, {'code': '600378', 'id': '600378TKGF', 'name': '\u5929\u79d1\u80a1\u4efd'}, {
        'code': '603567',
        'id': '603567ZBD',
        'name': '\u73cd\u5b9d\u5c9b'
    }, {'code': '000682', 'id': '000682DFDZ', 'name': '\u4e1c\u65b9\u7535\u5b50'}, {
        'code': '000952',
        'id': '000952GJYY',
        'name': '\u5e7f\u6d4e\u836f\u4e1a'
    }, {'code': '600300', 'id': '600300WWGF', 'name': '\u7ef4\u7ef4\u80a1\u4efd'}, {
        'code': '000978',
        'id': '000978GLLY',
        'name': '\u6842\u6797\u65c5\u6e38'
    }, {'code': '002005', 'id': '002005DHRD', 'name': '\u5fb7\u8c6a\u6da6\u8fbe'}, {
        'code': '600232',
        'id': '600232JYGF',
        'name': '\u91d1\u9e70\u80a1\u4efd'
    }, {'code': '300446', 'id': '300446LKXC', 'name': '\u4e50\u51ef\u65b0\u6750'}, {
        'code': '000607',
        'id': '000607HMKG',
        'name': '\u534e\u5a92\u63a7\u80a1'
    }, {'code': '600331', 'id': '600331HDGF', 'name': '\u5b8f\u8fbe\u80a1\u4efd'}, {
        'code': '300230',
        'id': '300230YLGF',
        'name': '\u6c38\u5229\u80a1\u4efd'
    }, {'code': '300115', 'id': '300115CYJM', 'name': '\u957f\u76c8\u7cbe\u5bc6'}, {
        'code': '600115',
        'id': '600115DFHK',
        'name': '\u4e1c\u65b9\u822a\u7a7a'
    }, {'code': '603997', 'id': '603997JFGF', 'name': '\u7ee7\u5cf0\u80a1\u4efd'}, {
        'code': '002279',
        'id': '002279JQRJ',
        'name': '\u4e45\u5176\u8f6f\u4ef6'
    }, {'code': '002443', 'id': '002443JZGD', 'name': '\u91d1\u6d32\u7ba1\u9053'}, {
        'code': '601567',
        'id': '601567SXYL',
        'name': '\u4e09\u661f\u533b\u7597'
    }, {'code': '300073', 'id': '300073DSKJ', 'name': '\u5f53\u5347\u79d1\u6280'}, {
        'code': '000027',
        'id': '000027SZNY',
        'name': '\u6df1\u5733\u80fd\u6e90'
    }, {'code': '002043', 'id': '002043T B B', 'name': '\u5154 \u5b9d \u5b9d'}, {
        'code': '300224',
        'id': '300224ZHCC',
        'name': '\u6b63\u6d77\u78c1\u6750'
    }, {'code': '000088', 'id': '000088Y T G', 'name': '\u76d0 \u7530 \u6e2f'}, {
        'code': '600892',
        'id': '600892DSWH',
        'name': '\u5927\u665f\u6587\u5316'
    }, {'code': '002700', 'id': '002700XJHY', 'name': '\u65b0\u7586\u6d69\u6e90'}, {
        'code': '601111',
        'id': '601111ZGGH',
        'name': '\u4e2d\u56fd\u56fd\u822a'
    }, {'code': '002236', 'id': '002236DHGF', 'name': '\u5927\u534e\u80a1\u4efd'}, {
        'code': '300290',
        'id': '300290RKKJ',
        'name': '\u8363\u79d1\u79d1\u6280'
    }, {'code': '000662', 'id': '000662TXZH', 'name': '\u5929\u590f\u667a\u6167'}, {
        'code': '300455',
        'id': '300455KTHW',
        'name': '\u5eb7\u62d3\u7ea2\u5916'
    }, {'code': '300105', 'id': '300105LYJZ', 'name': '\u9f99\u6e90\u6280\u672f'}, {
        'code': '603366',
        'id': '603366RCDF',
        'name': '\u65e5\u51fa\u4e1c\u65b9'
    }, {'code': '601169', 'id': '601169BJYX', 'name': '\u5317\u4eac\u94f6\u884c'}, {
        'code': '000962',
        'id': '000962*STDD',
        'name': '*ST\u4e1c\u94bd'
    }, {'code': '000537', 'id': '000537GYFZ', 'name': '\u5e7f\u5b87\u53d1\u5c55'}, {
        'code': '002080',
        'id': '002080ZCKJ',
        'name': '\u4e2d\u6750\u79d1\u6280'
    }, {'code': '601199', 'id': '601199JNSW', 'name': '\u6c5f\u5357\u6c34\u52a1'}, {
        'code': '601021',
        'id': '601021CQHK',
        'name': '\u6625\u79cb\u822a\u7a7a'
    }, {'code': '000810', 'id': '000810CWSZ', 'name': '\u521b\u7ef4\u6570\u5b57'}, {
        'code': '603729',
        'id': '603729LYGF',
        'name': '\u9f99\u97f5\u80a1\u4efd'
    }, {'code': '002649', 'id': '002649BYKJ', 'name': '\u535a\u5f66\u79d1\u6280'}, {
        'code': '002578',
        'id': '002578MFLY',
        'name': '\u95fd\u53d1\u94dd\u4e1a'
    }, {'code': '002718', 'id': '002718YBDD', 'name': '\u53cb\u90a6\u540a\u9876'}, {
        'code': '600612',
        'id': '600612LFX',
        'name': '\u8001\u51e4\u7965'
    }, {'code': '002186', 'id': '002186Q J D', 'name': '\u5168 \u805a \u5fb7'}, {
        'code': '300240',
        'id': '300240FLD',
        'name': '\u98de\u529b\u8fbe'
    }, {'code': '601811', 'id': '601811XHWX', 'name': '\u65b0\u534e\u6587\u8f69'}, {
        'code': '000878',
        'id': '000878YNTY',
        'name': '\u4e91\u5357\u94dc\u4e1a'
    }, {'code': '000881', 'id': '000881DLGJ', 'name': '\u5927\u8fde\u56fd\u9645'}, {
        'code': '600233',
        'id': '600233DYCS',
        'name': '\u5927\u6768\u521b\u4e16'
    }, {'code': '300405', 'id': '300405KLJH', 'name': '\u79d1\u9686\u7cbe\u5316'}, {
        'code': '000703',
        'id': '000703HYSH',
        'name': '\u6052\u9038\u77f3\u5316'
    }, {'code': '600617', 'id': '600617GXNY', 'name': '\u56fd\u65b0\u80fd\u6e90'}, {
        'code': '000953',
        'id': '000953HCHG',
        'name': '\u6cb3\u6c60\u5316\u5de5'
    }, {'code': '002604', 'id': '002604LLSW', 'name': '\u9f99\u529b\u751f\u7269'}, {
        'code': '002687',
        'id': '002687QZB',
        'name': '\u4e54\u6cbb\u767d'
    }, {'code': '600655', 'id': '600655YYSC', 'name': '\u8c6b\u56ed\u5546\u57ce'}, {
        'code': '600845',
        'id': '600845BXRJ',
        'name': '\u5b9d\u4fe1\u8f6f\u4ef6'
    }, {'code': '300287', 'id': '300287FLX', 'name': '\u98de\u5229\u4fe1'}, {
        'code': '600459',
        'id': '600459GYBY',
        'name': '\u8d35\u7814\u94c2\u4e1a'
    }, {'code': '300213', 'id': '300213JXFH', 'name': '\u4f73\u8baf\u98de\u9e3f'}, {
        'code': '002161',
        'id': '002161Y W G',
        'name': '\u8fdc \u671b \u8c37'
    }, {'code': '002232', 'id': '002232QMXX', 'name': '\u542f\u660e\u4fe1\u606f'}, {
        'code': '300017',
        'id': '300017WSKJ',
        'name': '\u7f51\u5bbf\u79d1\u6280'
    }, {'code': '600004', 'id': '600004BYJC', 'name': '\u767d\u4e91\u673a\u573a'}, {
        'code': '600267',
        'id': '600267HZYY',
        'name': '\u6d77\u6b63\u836f\u4e1a'
    }, {'code': '002116', 'id': '002116ZGHC', 'name': '\u4e2d\u56fd\u6d77\u8bda'}, {
        'code': '002611',
        'id': '002611DFJG',
        'name': '\u4e1c\u65b9\u7cbe\u5de5'
    }, {'code': '002324', 'id': '002324PLT', 'name': '\u666e\u5229\u7279'}, {
        'code': '002643',
        'id': '002643WRGF',
        'name': '\u4e07\u6da6\u80a1\u4efd'
    }, {'code': '002708', 'id': '002708GYGF', 'name': '\u5149\u6d0b\u80a1\u4efd'}, {
        'code': '603609',
        'id': '603609HFMY',
        'name': '\u79be\u4e30\u7267\u4e1a'
    }, {'code': '300013', 'id': '300013XNWL', 'name': '\u65b0\u5b81\u7269\u6d41'}, {
        'code': '600741',
        'id': '600741HYQC',
        'name': '\u534e\u57df\u6c7d\u8f66'
    }, {'code': '603117', 'id': '603117WLGF', 'name': '\u4e07\u6797\u80a1\u4efd'}, {
        'code': '300171',
        'id': '300171DFL',
        'name': '\u4e1c\u5bcc\u9f99'
    }, {'code': '002582', 'id': '002582HXN', 'name': '\u597d\u60f3\u4f60'}, {
        'code': '002640',
        'id': '002640KJT',
        'name': '\u8de8\u5883\u901a'
    }, {'code': '600066', 'id': '600066YTKC', 'name': '\u5b87\u901a\u5ba2\u8f66'}, {
        'code': '002436',
        'id': '002436XSKJ',
        'name': '\u5174\u68ee\u79d1\u6280'
    }, {'code': '600262', 'id': '600262BFGF', 'name': '\u5317\u65b9\u80a1\u4efd'}, {
        'code': '300284',
        'id': '300284SJK',
        'name': '\u82cf\u4ea4\u79d1'
    }, {'code': '300085', 'id': '300085YZJ', 'name': '\u94f6\u4e4b\u6770'}, {
        'code': '603029',
        'id': '603029TEGF',
        'name': '\u5929\u9e45\u80a1\u4efd'
    }, {'code': '002783', 'id': '002783KLGF', 'name': '\u51ef\u9f99\u80a1\u4efd'}, {
        'code': '600201',
        'id': '600201SWGF',
        'name': '\u751f\u7269\u80a1\u4efd'
    }, {'code': '000526', 'id': '000526ZGXD', 'name': '\u7d2b\u5149\u5b66\u5927'}, {
        'code': '600005',
        'id': '600005WGGF',
        'name': '\u6b66\u94a2\u80a1\u4efd'
    }, {'code': '600017', 'id': '600017RZG', 'name': '\u65e5\u7167\u6e2f'}, {
        'code': '600018',
        'id': '600018SGJT',
        'name': '\u4e0a\u6e2f\u96c6\u56e2'
    }, {'code': '600019', 'id': '600019BGGF', 'name': '\u5b9d\u94a2\u80a1\u4efd'}, {
        'code': '600021',
        'id': '600021SHDL',
        'name': '\u4e0a\u6d77\u7535\u529b'
    }, {'code': '600071', 'id': '600071FHGX', 'name': '\u51e4\u51f0\u5149\u5b66'}, {
        'code': '600110',
        'id': '600110NDGF',
        'name': '\u8bfa\u5fb7\u80a1\u4efd'
    }, {'code': '600122', 'id': '600122HTGK', 'name': '\u5b8f\u56fe\u9ad8\u79d1'}, {
        'code': '600131',
        'id': '600131MJSD',
        'name': '\u5cb7\u6c5f\u6c34\u7535'
    }, {'code': '600146', 'id': '600146SYHQ', 'name': '\u5546\u8d62\u73af\u7403'}, {
        'code': '600173',
        'id': '600173WLDC',
        'name': '\u5367\u9f99\u5730\u4ea7'
    }, {'code': '600182', 'id': '600182SJT', 'name': 'S\u4f73\u901a'}, {
        'code': '600189',
        'id': '600189JLSG',
        'name': '\u5409\u6797\u68ee\u5de5'
    }, {'code': '600209', 'id': '600209LDFZ', 'name': '\u7f57\u987f\u53d1\u5c55'}, {
        'code': '600255',
        'id': '600255XKCL',
        'name': '\u946b\u79d1\u6750\u6599'
    }, {'code': '600268', 'id': '600268GDNZ', 'name': '\u56fd\u7535\u5357\u81ea'}, {
        'code': '600281',
        'id': '600281THGF',
        'name': '\u592a\u5316\u80a1\u4efd'
    }, {'code': '600318', 'id': '600318XLJR', 'name': '\u65b0\u529b\u91d1\u878d'}, {
        'code': '600320',
        'id': '600320ZHZG',
        'name': '\u632f\u534e\u91cd\u5de5'
    }, {'code': '600321', 'id': '600321GDJS', 'name': '\u56fd\u680b\u5efa\u8bbe'}, {
        'code': '600330',
        'id': '600330TTGF',
        'name': '\u5929\u901a\u80a1\u4efd'
    }, {'code': '600337', 'id': '600337MKJJ', 'name': '\u7f8e\u514b\u5bb6\u5c45'}, {
        'code': '600365',
        'id': '600365TPGF',
        'name': '\u901a\u8461\u80a1\u4efd'
    }, {'code': '600393', 'id': '600393YTGF', 'name': '\u7ca4\u6cf0\u80a1\u4efd'}, {
        'code': '600397',
        'id': '600397AYMY',
        'name': '\u5b89\u6e90\u7164\u4e1a'
    }, {'code': '600408', 'id': '600408ATJT', 'name': '\u5b89\u6cf0\u96c6\u56e2'}, {
        'code': '600409',
        'id': '600409SYHG',
        'name': '\u4e09\u53cb\u5316\u5de5'
    }, {'code': '600410', 'id': '600410HSTC', 'name': '\u534e\u80dc\u5929\u6210'}, {
        'code': '600420',
        'id': '600420XDZY',
        'name': '\u73b0\u4ee3\u5236\u836f'
    }, {'code': '600433', 'id': '600433GHGX', 'name': '\u51a0\u8c6a\u9ad8\u65b0'}, {
        'code': '600455',
        'id': '600455BTGF',
        'name': '\u535a\u901a\u80a1\u4efd'
    }, {'code': '600480', 'id': '600480LYGF', 'name': '\u51cc\u4e91\u80a1\u4efd'}, {
        'code': '600538',
        'id': '600538GFGF',
        'name': '\u56fd\u53d1\u80a1\u4efd'
    }, {'code': '600540', 'id': '600540XSGF', 'name': '\u65b0\u8d5b\u80a1\u4efd'}, {
        'code': '600545',
        'id': '600545XJCJ',
        'name': '\u65b0\u7586\u57ce\u5efa'
    }, {'code': '600570', 'id': '600570HSDZ', 'name': '\u6052\u751f\u7535\u5b50'}, {
        'code': '600575',
        'id': '600575WJWL',
        'name': '\u7696\u6c5f\u7269\u6d41'
    }, {'code': '600576', 'id': '600576WJWH', 'name': '\u4e07\u5bb6\u6587\u5316'}, {
        'code': '600577',
        'id': '600577JDGF',
        'name': '\u7cbe\u8fbe\u80a1\u4efd'
    }, {'code': '600589', 'id': '600589GDRT', 'name': '\u5e7f\u4e1c\u6995\u6cf0'}, {
        'code': '600614',
        'id': '600614DLGF',
        'name': '\u9f0e\u7acb\u80a1\u4efd'
    }, {'code': '600621', 'id': '600621HXGF', 'name': '\u534e\u946b\u80a1\u4efd'}, {
        'code': '600634',
        'id': '600634ZJKG',
        'name': '\u4e2d\u6280\u63a7\u80a1'
    }, {'code': '600636', 'id': '600636SAF', 'name': '\u4e09\u7231\u5bcc'}, {
        'code': '600649',
        'id': '600649CTKG',
        'name': '\u57ce\u6295\u63a7\u80a1'
    }, {'code': '600651', 'id': '600651FLYX', 'name': '\u98de\u4e50\u97f3\u54cd'}, {
        'code': '600653',
        'id': '600653SHKG',
        'name': '\u7533\u534e\u63a7\u80a1'
    }, {'code': '600671', 'id': '600671TMYY', 'name': '\u5929\u76ee\u836f\u4e1a'}, {
        'code': '600673',
        'id': '600673DYGK',
        'name': '\u4e1c\u9633\u5149\u79d1'
    }, {'code': '600678', 'id': '600678SCJD', 'name': '\u56db\u5ddd\u91d1\u9876'}, {
        'code': '600682',
        'id': '600682NJXB',
        'name': '\u5357\u4eac\u65b0\u767e'
    }, {'code': '600687', 'id': '600687GTKG', 'name': '\u521a\u6cf0\u63a7\u80a1'}, {
        'code': '600735',
        'id': '600735XHJ',
        'name': '\u65b0\u534e\u9526'
    }, {'code': '600737', 'id': '600737ZLTH', 'name': '\u4e2d\u7cae\u5c6f\u6cb3'}, {
        'code': '600758',
        'id': '600758HYNY',
        'name': '\u7ea2\u9633\u80fd\u6e90'
    }, {'code': '600764', 'id': '600764ZDGT', 'name': '\u4e2d\u7535\u5e7f\u901a'}, {
        'code': '600768',
        'id': '600768NBFB',
        'name': '\u5b81\u6ce2\u5bcc\u90a6'
    }, {'code': '600773', 'id': '600773XCCT', 'name': '\u897f\u85cf\u57ce\u6295'}, {
        'code': '600795',
        'id': '600795GDDL',
        'name': '\u56fd\u7535\u7535\u529b'
    }, {'code': '600796', 'id': '600796QJSH', 'name': '\u94b1\u6c5f\u751f\u5316'}, {
        'code': '600821',
        'id': '600821JQY',
        'name': '\u6d25\u529d\u4e1a'
    }, {'code': '600890', 'id': '600890ZFGF', 'name': '\u4e2d\u623f\u80a1\u4efd'}, {
        'code': '600896',
        'id': '600896ZHHS',
        'name': '\u4e2d\u6d77\u6d77\u76db'
    }, {'code': '600898', 'id': '600898SLSS', 'name': '\u4e09\u8054\u5546\u793e'}, {
        'code': '601005',
        'id': '601005ZQGT',
        'name': '\u91cd\u5e86\u94a2\u94c1'
    }, {'code': '601101', 'id': '601101HHNY', 'name': '\u660a\u534e\u80fd\u6e90'}, {
        'code': '601106',
        'id': '601106ZGYZ',
        'name': '\u4e2d\u56fd\u4e00\u91cd'
    }, {'code': '601727', 'id': '601727SHDQ', 'name': '\u4e0a\u6d77\u7535\u6c14'}, {
        'code': '601789',
        'id': '601789NBJG',
        'name': '\u5b81\u6ce2\u5efa\u5de5'
    }, {'code': '601798', 'id': '601798LKGX', 'name': '\u84dd\u79d1\u9ad8\u65b0'}, {
        'code': '601818',
        'id': '601818GDYX',
        'name': '\u5149\u5927\u94f6\u884c'
    }, {'code': '601866', 'id': '601866ZHJY', 'name': '\u4e2d\u6d77\u96c6\u8fd0'}, {
        'code': '601872',
        'id': '601872ZSLC',
        'name': '\u62db\u5546\u8f6e\u8239'
    }, {'code': '601877', 'id': '601877ZTDQ', 'name': '\u6b63\u6cf0\u7535\u5668'}, {
        'code': '601886',
        'id': '601886JHJT',
        'name': '\u6c5f\u6cb3\u96c6\u56e2'
    }, {'code': '601900', 'id': '601900NFCM', 'name': '\u5357\u65b9\u4f20\u5a92'}, {
        'code': '603001',
        'id': '603001AKGJ',
        'name': '\u5965\u5eb7\u56fd\u9645'
    }, {'code': '603025', 'id': '603025DHKJ', 'name': '\u5927\u8c6a\u79d1\u6280'}, {
        'code': '603100',
        'id': '603100CYGF',
        'name': '\u5ddd\u4eea\u80a1\u4efd'
    }, {'code': '603518', 'id': '603518WGNS', 'name': '\u7ef4\u683c\u5a1c\u4e1d'}, {
        'code': '603599',
        'id': '603599GXGF',
        'name': '\u5e7f\u4fe1\u80a1\u4efd'
    }, {'code': '603703', 'id': '603703SYKJ', 'name': '\u76db\u6d0b\u79d1\u6280'}, {
        'code': '603789',
        'id': '603789XGNJ',
        'name': '\u661f\u5149\u519c\u673a'
    }, {'code': '603838', 'id': '603838STGF', 'name': '\u56db\u901a\u80a1\u4efd'}, {
        'code': '603883',
        'id': '603883LBX',
        'name': '\u8001\u767e\u59d3'
    }, {'code': '603918', 'id': '603918JQXX', 'name': '\u91d1\u6865\u4fe1\u606f'}, {
        'code': '000004',
        'id': '000004GNKJ',
        'name': '\u56fd\u519c\u79d1\u6280'
    }, {'code': '000010', 'id': '000010MLST', 'name': '\u7f8e\u4e3d\u751f\u6001'}, {
        'code': '000028',
        'id': '000028GYYZ',
        'name': '\u56fd\u836f\u4e00\u81f4'
    }, {'code': '000035', 'id': '000035ZGTY', 'name': '\u4e2d\u56fd\u5929\u6979'}, {
        'code': '000037',
        'id': '000037*STNDA',
        'name': '*ST\u5357\u7535A'
    }, {'code': '000043', 'id': '000043ZHDC', 'name': '\u4e2d\u822a\u5730\u4ea7'}, {
        'code': '000045',
        'id': '000045SFZ\uff21',
        'name': '\u6df1\u7eba\u7ec7\uff21'
    }, {'code': '000100', 'id': '000100TCL JT', 'name': 'TCL \u96c6\u56e2'}, {
        'code': '000155',
        'id': '000155*STCH',
        'name': '*ST\u5ddd\u5316'
    }, {'code': '000407', 'id': '000407SLGF', 'name': '\u80dc\u5229\u80a1\u4efd'}, {
        'code': '000409',
        'id': '000409SDDK',
        'name': '\u5c71\u4e1c\u5730\u77ff'
    }, {'code': '000504', 'id': '000504*STSW', 'name': '*ST\u751f\u7269'}, {
        'code': '000505',
        'id': '000505*STZJ',
        'name': '*ST\u73e0\u6c5f'
    }, {'code': '000510', 'id': '000510JLJT', 'name': '\u91d1\u8def\u96c6\u56e2'}, {
        'code': '000511',
        'id': '000511*STXT',
        'name': '*ST\u70ef\u78b3'
    }, {'code': '000516', 'id': '000516GJYX', 'name': '\u56fd\u9645\u533b\u5b66'}, {
        'code': '000524',
        'id': '000524LNKG',
        'name': '\u5cad\u5357\u63a7\u80a1'
    }, {'code': '000531', 'id': '000531SHY\uff21', 'name': '\u7a57\u6052\u8fd0\uff21'}, {
        'code': '000534',
        'id': '000534WZGF',
        'name': '\u4e07\u6cfd\u80a1\u4efd'
    }, {'code': '000538', 'id': '000538YNBY', 'name': '\u4e91\u5357\u767d\u836f'}, {
        'code': '000547',
        'id': '000547HTFZ',
        'name': '\u822a\u5929\u53d1\u5c55'
    }, {'code': '000548', 'id': '000548HNTZ', 'name': '\u6e56\u5357\u6295\u8d44'}, {
        'code': '000550',
        'id': '000550JLQC',
        'name': '\u6c5f\u94c3\u6c7d\u8f66'
    }, {'code': '000551', 'id': '000551CYKJ', 'name': '\u521b\u5143\u79d1\u6280'}, {
        'code': '000553',
        'id': '000553SLD\uff21',
        'name': '\u6c99\u9686\u8fbe\uff21'
    }, {'code': '000555', 'id': '000555SZXX', 'name': '\u795e\u5dde\u4fe1\u606f'}, {
        'code': '000565',
        'id': '000565YSX\uff21',
        'name': '\u6e1d\u4e09\u5ce1\uff21'
    }, {'code': '000576', 'id': '000576GDGH', 'name': '\u5e7f\u4e1c\u7518\u5316'}, {
        'code': '000582',
        'id': '000582BBWG',
        'name': '\u5317\u90e8\u6e7e\u6e2f'
    }, {'code': '000611', 'id': '000611*STTS', 'name': '*ST\u5929\u9996'}, {
        'code': '000615',
        'id': '000615JHGF',
        'name': '\u4eac\u6c49\u80a1\u4efd'
    }, {'code': '000617', 'id': '000617*STJC', 'name': '*ST\u6d4e\u67f4'}, {
        'code': '000629',
        'id': '000629*STFT',
        'name': '*ST\u9492\u949b'
    }, {'code': '000639', 'id': '000639XWSP', 'name': '\u897f\u738b\u98df\u54c1'}, {
        'code': '000651',
        'id': '000651GLDQ',
        'name': '\u683c\u529b\u7535\u5668'
    }, {'code': '000659', 'id': '000659ZHZF', 'name': '\u73e0\u6d77\u4e2d\u5bcc'}, {
        'code': '000693',
        'id': '000693STHZ',
        'name': 'ST\u534e\u6cfd'
    }, {'code': '000710', 'id': '000710TXYB', 'name': '\u5929\u5174\u4eea\u8868'}, {
        'code': '000720',
        'id': '000720XNTS',
        'name': '\u65b0\u80fd\u6cf0\u5c71'
    }, {'code': '000731', 'id': '000731SCMF', 'name': '\u56db\u5ddd\u7f8e\u4e30'}, {
        'code': '000757',
        'id': '000757HWGF',
        'name': '\u6d69\u7269\u80a1\u4efd'
    }, {'code': '000786', 'id': '000786BXJC', 'name': '\u5317\u65b0\u5efa\u6750'}, {
        'code': '000789',
        'id': '000789WNQ',
        'name': '\u4e07\u5e74\u9752'
    }, {'code': '000803', 'id': '000803JYCC', 'name': '\u91d1\u5b87\u8f66\u57ce'}, {
        'code': '000807',
        'id': '000807YLGF',
        'name': '\u4e91\u94dd\u80a1\u4efd'
    }, {'code': '000812', 'id': '000812SXJY', 'name': '\u9655\u897f\u91d1\u53f6'}, {
        'code': '000908',
        'id': '000908JFYY',
        'name': '\u666f\u5cf0\u533b\u836f'
    }, {'code': '000916', 'id': '000916HBGS', 'name': '\u534e\u5317\u9ad8\u901f'}, {
        'code': '000923',
        'id': '000923HBXG',
        'name': '\u6cb3\u5317\u5ba3\u5de5'
    }, {'code': '000950', 'id': '000950*STJF', 'name': '*ST\u5efa\u5cf0'}, {
        'code': '000975',
        'id': '000975YTZY',
        'name': '\u94f6\u6cf0\u8d44\u6e90'
    }, {'code': '000987', 'id': '000987YXJK', 'name': '\u8d8a\u79c0\u91d1\u63a7'}, {
        'code': '001896',
        'id': '001896YNKG',
        'name': '\u8c6b\u80fd\u63a7\u80a1'
    }, {'code': '002013', 'id': '002013ZHJD', 'name': '\u4e2d\u822a\u673a\u7535'}, {
        'code': '002035',
        'id': '002035HDGF',
        'name': '\u534e\u5e1d\u80a1\u4efd'
    }, {'code': '002053', 'id': '002053YNNT', 'name': '\u4e91\u5357\u80fd\u6295'}, {
        'code': '002055',
        'id': '002055DRDZ',
        'name': '\u5f97\u6da6\u7535\u5b50'
    }, {'code': '002057', 'id': '002057ZGTY', 'name': '\u4e2d\u94a2\u5929\u6e90'}, {
        'code': '002059',
        'id': '002059YNLY',
        'name': '\u4e91\u5357\u65c5\u6e38'
    }, {'code': '002061', 'id': '002061*STJH', 'name': '*ST\u6c5f\u5316'}, {
        'code': '002071',
        'id': '002071CCYS',
        'name': '\u957f\u57ce\u5f71\u89c6'
    }, {'code': '002094', 'id': '002094QDJW', 'name': '\u9752\u5c9b\u91d1\u738b'}, {
        'code': '002101',
        'id': '002101GDHT',
        'name': '\u5e7f\u4e1c\u9e3f\u56fe'
    }, {'code': '002127', 'id': '002127NJDS', 'name': '\u5357\u6781\u7535\u5546'}, {
        'code': '002129',
        'id': '002129ZHGF',
        'name': '\u4e2d\u73af\u80a1\u4efd'
    }, {'code': '002156', 'id': '002156TFWD', 'name': '\u901a\u5bcc\u5fae\u7535'}, {
        'code': '002175',
        'id': '002175DFWL',
        'name': '\u4e1c\u65b9\u7f51\u7edc'
    }, {'code': '002206', 'id': '002206H L D', 'name': '\u6d77 \u5229 \u5f97'}, {
        'code': '002207',
        'id': '002207ZYGF',
        'name': '\u51c6\u6cb9\u80a1\u4efd'
    }, {'code': '002263', 'id': '002263D D N', 'name': '\u5927 \u4e1c \u5357'}, {
        'code': '002266',
        'id': '002266ZFKG',
        'name': '\u6d59\u5bcc\u63a7\u80a1'
    }, {'code': '002278', 'id': '002278SKGF', 'name': '\u795e\u5f00\u80a1\u4efd'}, {
        'code': '002280',
        'id': '002280LLHD',
        'name': '\u8054\u7edc\u4e92\u52a8'
    }, {'code': '002283', 'id': '002283TRQZ', 'name': '\u5929\u6da6\u66f2\u8f74'}, {
        'code': '002289',
        'id': '002289*STYS',
        'name': '*ST\u5b87\u987a'
    }, {'code': '002297', 'id': '002297BYXC', 'name': '\u535a\u4e91\u65b0\u6750'}, {
        'code': '002310',
        'id': '002310DFYL',
        'name': '\u4e1c\u65b9\u56ed\u6797'
    }, {'code': '002316', 'id': '002316JQTX', 'name': '\u952e\u6865\u901a\u8baf'}, {
        'code': '002319',
        'id': '002319LTGF',
        'name': '\u4e50\u901a\u80a1\u4efd'
    }, {'code': '002320', 'id': '002320HXGF', 'name': '\u6d77\u5ce1\u80a1\u4efd'}, {
        'code': '002355',
        'id': '002355XMZT',
        'name': '\u5174\u6c11\u667a\u901a'
    }, {'code': '002357', 'id': '002357FLYY', 'name': '\u5bcc\u4e34\u8fd0\u4e1a'}, {
        'code': '002377',
        'id': '002377GCGX',
        'name': '\u56fd\u521b\u9ad8\u65b0'
    }, {'code': '002387', 'id': '002387HNSP', 'name': '\u9ed1\u725b\u98df\u54c1'}, {
        'code': '002388',
        'id': '002388XYZC',
        'name': '\u65b0\u4e9a\u5236\u7a0b'
    }, {'code': '002389', 'id': '002389NYKJ', 'name': '\u5357\u6d0b\u79d1\u6280'}, {
        'code': '002405',
        'id': '002405SWTX',
        'name': '\u56db\u7ef4\u56fe\u65b0'
    }, {'code': '002445', 'id': '002445ZNWH', 'name': '\u4e2d\u5357\u6587\u5316'}, {
        'code': '002464',
        'id': '002464JLKJ',
        'name': '\u91d1\u5229\u79d1\u6280'
    }, {'code': '002465', 'id': '002465HGTX', 'name': '\u6d77\u683c\u901a\u4fe1'}, {
        'code': '002478',
        'id': '002478CBGF',
        'name': '\u5e38\u5b9d\u80a1\u4efd'
    }, {'code': '002492', 'id': '002492HJDX', 'name': '\u6052\u57fa\u8fbe\u946b'}, {
        'code': '002513',
        'id': '002513*STLF',
        'name': '*ST\u84dd\u4e30'
    }, {'code': '002526', 'id': '002526SDKJ', 'name': '\u5c71\u4e1c\u77ff\u673a'}, {
        'code': '002558',
        'id': '002558SJYL',
        'name': '\u4e16\u7eaa\u6e38\u8f6e'
    }, {'code': '002571', 'id': '002571DLGF', 'name': '\u5fb7\u529b\u80a1\u4efd'}, {
        'code': '002574',
        'id': '002574MPZB',
        'name': '\u660e\u724c\u73e0\u5b9d'
    }, {'code': '002576', 'id': '002576TDDL', 'name': '\u901a\u8fbe\u52a8\u529b'}, {
        'code': '002591',
        'id': '002591HDGX',
        'name': '\u6052\u5927\u9ad8\u65b0'
    }, {'code': '002602', 'id': '002602SJHT', 'name': '\u4e16\u7eaa\u534e\u901a'}, {
        'code': '002607',
        'id': '002607YXQC',
        'name': '\u4e9a\u590f\u6c7d\u8f66'
    }, {'code': '002608', 'id': '002608*STSC', 'name': '*ST\u821c\u8239'}, {
        'code': '002610',
        'id': '002610AKKJ',
        'name': '\u7231\u5eb7\u79d1\u6280'
    }, {'code': '002615', 'id': '002615HES', 'name': '\u54c8\u5c14\u65af'}, {
        'code': '002617',
        'id': '002617LXKJ',
        'name': '\u9732\u7b11\u79d1\u6280'
    }, {'code': '002621', 'id': '002621SLGF', 'name': '\u4e09\u5792\u80a1\u4efd'}, {
        'code': '002624',
        'id': '002624WMSJ',
        'name': '\u5b8c\u7f8e\u4e16\u754c'
    }, {'code': '002630', 'id': '002630HXNY', 'name': '\u534e\u897f\u80fd\u6e90'}, {
        'code': '002631',
        'id': '002631DEWL',
        'name': '\u5fb7\u5c14\u672a\u6765'
    }, {'code': '002632', 'id': '002632DMGX', 'name': '\u9053\u660e\u5149\u5b66'}, {
        'code': '002654',
        'id': '002654WRKJ',
        'name': '\u4e07\u6da6\u79d1\u6280'
    }, {'code': '002656', 'id': '002656MDDD', 'name': '\u6469\u767b\u5927\u9053'}, {
        'code': '002662',
        'id': '002662JWGF',
        'name': '\u4eac\u5a01\u80a1\u4efd'
    }, {'code': '002663', 'id': '002663PBYL', 'name': '\u666e\u90a6\u56ed\u6797'}, {
        'code': '002666',
        'id': '002666DLJT',
        'name': '\u5fb7\u8054\u96c6\u56e2'
    }, {'code': '002685', 'id': '002685HDZJ', 'name': '\u534e\u4e1c\u91cd\u673a'}, {
        'code': '002690',
        'id': '002690MYGD',
        'name': '\u7f8e\u4e9a\u5149\u7535'
    }, {'code': '002696', 'id': '002696BYGF', 'name': '\u767e\u6d0b\u80a1\u4efd'}, {
        'code': '002725',
        'id': '002725YLGF',
        'name': '\u8dc3\u5cad\u80a1\u4efd'
    }, {'code': '002730', 'id': '002730DGKJ', 'name': '\u7535\u5149\u79d1\u6280'}, {
        'code': '002735',
        'id': '002735WZXC',
        'name': '\u738b\u5b50\u65b0\u6750'
    }, {'code': '002745', 'id': '002745MLS', 'name': '\u6728\u6797\u68ee'}, {
        'code': '002752',
        'id': '002752SXGF',
        'name': '\u6607\u5174\u80a1\u4efd'
    }, {'code': '002773', 'id': '002773KHYY', 'name': '\u5eb7\u5f18\u836f\u4e1a'}, {
        'code': '300035',
        'id': '300035ZKDQ',
        'name': '\u4e2d\u79d1\u7535\u6c14'
    }, {'code': '300040', 'id': '300040JZDQ', 'name': '\u4e5d\u6d32\u7535\u6c14'}, {
        'code': '300044',
        'id': '300044SWZN',
        'name': '\u8d5b\u4e3a\u667a\u80fd'
    }, {'code': '300046', 'id': '300046TJGF', 'name': '\u53f0\u57fa\u80a1\u4efd'}, {
        'code': '300047',
        'id': '300047TYDK',
        'name': '\u5929\u6e90\u8fea\u79d1'
    }, {'code': '300050', 'id': '300050SJDL', 'name': '\u4e16\u7eaa\u9f0e\u5229'}, {
        'code': '300052',
        'id': '300052ZQB',
        'name': '\u4e2d\u9752\u5b9d'
    }, {'code': '300080', 'id': '300080YCXN', 'name': '\u6613\u6210\u65b0\u80fd'}, {
        'code': '300089',
        'id': '300089WHCC',
        'name': '\u6587\u5316\u957f\u57ce'
    }, {'code': '300095', 'id': '300095HWGF', 'name': '\u534e\u4f0d\u80a1\u4efd'}, {
        'code': '300103',
        'id': '300103DGLJ',
        'name': '\u8fbe\u521a\u8def\u673a'
    }, {'code': '300107', 'id': '300107JXGF', 'name': '\u5efa\u65b0\u80a1\u4efd'}, {
        'code': '300111',
        'id': '300111XRK',
        'name': '\u5411\u65e5\u8475'
    }, {'code': '300120', 'id': '300120JWDC', 'name': '\u7ecf\u7eac\u7535\u6750'}, {
        'code': '300142',
        'id': '300142WSSW',
        'name': '\u6c83\u68ee\u751f\u7269'
    }, {'code': '300163', 'id': '300163XFXC', 'name': '\u5148\u950b\u65b0\u6750'}, {
        'code': '300166',
        'id': '300166DFGX',
        'name': '\u4e1c\u65b9\u56fd\u4fe1'
    }, {'code': '300176', 'id': '300176HTJM', 'name': '\u9e3f\u7279\u7cbe\u5bc6'}, {
        'code': '300179',
        'id': '300179SFD',
        'name': '\u56db\u65b9\u8fbe'
    }, {'code': '300180', 'id': '300180HFCX', 'name': '\u534e\u5cf0\u8d85\u7ea4'}, {
        'code': '300184',
        'id': '300184LYXX',
        'name': '\u529b\u6e90\u4fe1\u606f'
    }, {'code': '300190', 'id': '300190WEL', 'name': '\u7ef4\u5c14\u5229'}, {
        'code': '300203',
        'id': '300203JGKJ',
        'name': '\u805a\u5149\u79d1\u6280'
    }, {'code': '300219', 'id': '300219HLZH', 'name': '\u9e3f\u5229\u667a\u6c47'}, {
        'code': '300223',
        'id': '300223BJJZ',
        'name': '\u5317\u4eac\u541b\u6b63'
    }, {'code': '300227', 'id': '300227GYD', 'name': '\u5149\u97f5\u8fbe'}, {
        'code': '300262',
        'id': '300262BASW',
        'name': '\u5df4\u5b89\u6c34\u52a1'
    }, {'code': '300293', 'id': '300293LYZB', 'name': '\u84dd\u82f1\u88c5\u5907'}, {
        'code': '300299',
        'id': '300299FCTX',
        'name': '\u5bcc\u6625\u901a\u4fe1'
    }, {'code': '300300', 'id': '300300HDYY', 'name': '\u6c49\u9f0e\u5b87\u4f51'}, {
        'code': '300306',
        'id': '300306YFGD',
        'name': '\u8fdc\u65b9\u5149\u7535'
    }, {'code': '300308', 'id': '300308ZJZB', 'name': '\u4e2d\u9645\u88c5\u5907'}, {
        'code': '300310',
        'id': '300310YTSJ',
        'name': '\u5b9c\u901a\u4e16\u7eaa'
    }, {'code': '300311', 'id': '300311RZX', 'name': '\u4efb\u5b50\u884c'}, {
        'code': '300323',
        'id': '300323HCGD',
        'name': '\u534e\u707f\u5149\u7535'
    }, {'code': '300334', 'id': '300334JMKJ', 'name': '\u6d25\u819c\u79d1\u6280'}, {
        'code': '300353',
        'id': '300353DTKJ',
        'name': '\u4e1c\u571f\u79d1\u6280'
    }, {'code': '300359', 'id': '300359QTJY', 'name': '\u5168\u901a\u6559\u80b2'}, {
        'code': '300372',
        'id': '300372XTDQ',
        'name': '\u6b23\u6cf0\u7535\u6c14'
    }, {'code': '300374', 'id': '300374HTKJ', 'name': '\u6052\u901a\u79d1\u6280'}, {
        'code': '300398',
        'id': '300398FKCL',
        'name': '\u98de\u51ef\u6750\u6599'
    }, {'code': '300411', 'id': '300411JDGF', 'name': '\u91d1\u76fe\u80a1\u4efd'}, {
        'code': '300412',
        'id': '300412JNKJ',
        'name': '\u8fe6\u5357\u79d1\u6280'
    }, {'code': '300413', 'id': '300413KLG', 'name': '\u5feb\u4e50\u8d2d'}, {
        'code': '300414',
        'id': '300414ZGFL',
        'name': '\u4e2d\u5149\u9632\u96f7'
    }, {'code': '300423', 'id': '300423LYT', 'name': '\u9c81\u4ebf\u901a'}, {
        'code': '300425',
        'id': '300425HNKJ',
        'name': '\u73af\u80fd\u79d1\u6280'
    }, {'code': '300427', 'id': '300427HXDL', 'name': '\u7ea2\u76f8\u7535\u529b'}, {
        'code': '300434',
        'id': '300434JSDF',
        'name': '\u91d1\u77f3\u4e1c\u65b9'
    }, {'code': '300447', 'id': '300447QXGF', 'name': '\u5168\u4fe1\u80a1\u4efd'}, {
        'code': '300461',
        'id': '300461TZJJ',
        'name': '\u7530\u4e2d\u7cbe\u673a'
    }, {'code': '300466', 'id': '300466SMDQ', 'name': '\u8d5b\u6469\u7535\u6c14'}, {
        'code': '300471',
        'id': '300471HPGF',
        'name': '\u539a\u666e\u80a1\u4efd'
    }, {'code': '300472', 'id': '300472XYKJ', 'name': '\u65b0\u5143\u79d1\u6280'}, {
        'code': '300488',
        'id': '300488HFGJ',
        'name': '\u6052\u950b\u5de5\u5177'
    }, {'code': '300394', 'id': '300394TFTX', 'name': '\u5929\u5b5a\u901a\u4fe1'}, {
        'code': '600818',
        'id': '600818ZLGF',
        'name': '\u4e2d\u8def\u80a1\u4efd'
    }, {'code': '002765', 'id': '002765LDCD', 'name': '\u84dd\u9edb\u4f20\u52a8'}, {
        'code': '600850',
        'id': '600850HDDN',
        'name': '\u534e\u4e1c\u7535\u8111'
    }, {'code': '300525', 'id': '300525BSRJ', 'name': '\u535a\u601d\u8f6f\u4ef6'}, {
        'code': '600715',
        'id': '600715WTKG',
        'name': '\u6587\u6295\u63a7\u80a1'
    }, {'code': '600148', 'id': '600148CCYD', 'name': '\u957f\u6625\u4e00\u4e1c'}, {
        'code': '002301',
        'id': '002301QXJT',
        'name': '\u9f50\u5fc3\u96c6\u56e2'
    }, {'code': '600198', 'id': '600198DTDX', 'name': '\u5927\u5510\u7535\u4fe1'}, {
        'code': '002262',
        'id': '002262EHYY',
        'name': '\u6069\u534e\u836f\u4e1a'
    }, {'code': '600036', 'id': '600036ZSYX', 'name': '\u62db\u5546\u94f6\u884c'}, {
        'code': '002653',
        'id': '002653HSK',
        'name': '\u6d77\u601d\u79d1'
    }, {'code': '000917', 'id': '000917DGCM', 'name': '\u7535\u5e7f\u4f20\u5a92'}, {
        'code': '002041',
        'id': '002041DHZY',
        'name': '\u767b\u6d77\u79cd\u4e1a'
    }, {'code': '000532', 'id': '000532LHGF', 'name': '\u529b\u5408\u80a1\u4efd'}, {
        'code': '600132',
        'id': '600132ZQPJ',
        'name': '\u91cd\u5e86\u5564\u9152'
    }, {'code': '000022', 'id': '000022SCW\uff21', 'name': '\u6df1\u8d64\u6e7e\uff21'}, {
        'code': '002085',
        'id': '002085WFAW',
        'name': '\u4e07\u4e30\u5965\u5a01'
    }, {'code': '002096', 'id': '002096NLMB', 'name': '\u5357\u5cad\u6c11\u7206'}, {
        'code': '002761',
        'id': '002761DXA',
        'name': '\u591a\u559c\u7231'
    }, {'code': '600416', 'id': '600416XDGF', 'name': '\u6e58\u7535\u80a1\u4efd'}, {
        'code': '000610',
        'id': '000610XALY',
        'name': '\u897f\u5b89\u65c5\u6e38'
    }, {'code': '600489', 'id': '600489ZJHJ', 'name': '\u4e2d\u91d1\u9ec4\u91d1'}, {
        'code': '002507',
        'id': '002507FLZC',
        'name': '\u6daa\u9675\u69a8\u83dc'
    }, {'code': '002007', 'id': '002007HLSW', 'name': '\u534e\u5170\u751f\u7269'}, {
        'code': '600293',
        'id': '600293SXXC',
        'name': '\u4e09\u5ce1\u65b0\u6750'
    }, {'code': '300062', 'id': '300062ZNDQ', 'name': '\u4e2d\u80fd\u7535\u6c14'}, {
        'code': '603012',
        'id': '603012CLJT',
        'name': '\u521b\u529b\u96c6\u56e2'
    }, {'code': '600593', 'id': '600593DLSY', 'name': '\u5927\u8fde\u5723\u4e9a'}, {
        'code': '603519',
        'id': '603519LBGF',
        'name': '\u7acb\u9738\u80a1\u4efd'
    }, {'code': '002375', 'id': '002375YSGF', 'name': '\u4e9a\u53a6\u80a1\u4efd'}, {
        'code': '002724',
        'id': '002724HYW',
        'name': '\u6d77\u6d0b\u738b'
    }, {'code': '600897', 'id': '600897SMKG', 'name': '\u53a6\u95e8\u7a7a\u6e2f'}, {
        'code': '000546',
        'id': '000546JYGF',
        'name': '\u91d1\u5706\u80a1\u4efd'
    }, {'code': '600712', 'id': '600712NNBH', 'name': '\u5357\u5b81\u767e\u8d27'}, {
        'code': '600993',
        'id': '600993MYL',
        'name': '\u9a6c\u5e94\u9f99'
    }, {'code': '600051', 'id': '600051NBLH', 'name': '\u5b81\u6ce2\u8054\u5408'}, {
        'code': '300273',
        'id': '300273HJGF',
        'name': '\u548c\u4f73\u80a1\u4efd'
    }, {'code': '600856', 'id': '600856ZTNY', 'name': '\u4e2d\u5929\u80fd\u6e90'}, {
        'code': '000748',
        'id': '000748CCXX',
        'name': '\u957f\u57ce\u4fe1\u606f'
    }, {'code': '002160', 'id': '002160CLGF', 'name': '\u5e38\u94dd\u80a1\u4efd'}, {
        'code': '000567',
        'id': '000567HDGF',
        'name': '\u6d77\u5fb7\u80a1\u4efd'
    }, {'code': '600444', 'id': '600444GJTY', 'name': '\u56fd\u673a\u901a\u7528'}, {
        'code': '300071',
        'id': '300071HYJX',
        'name': '\u534e\u8c0a\u5609\u4fe1'
    }, {'code': '600107', 'id': '600107MEY', 'name': '\u7f8e\u5c14\u96c5'}, {
        'code': '600731',
        'id': '600731HNHL',
        'name': '\u6e56\u5357\u6d77\u5229'
    }, {'code': '600723', 'id': '600723SSGF', 'name': '\u9996\u5546\u80a1\u4efd'}, {
        'code': '603008',
        'id': '603008XLM',
        'name': '\u559c\u4e34\u95e8'
    }, {'code': '300283', 'id': '300283WZHF', 'name': '\u6e29\u5dde\u5b8f\u4e30'}, {
        'code': '002753',
        'id': '002753YDGF',
        'name': '\u6c38\u4e1c\u80a1\u4efd'
    }, {'code': '300099', 'id': '300099YLQ', 'name': '\u5c24\u6d1b\u5361'}, {
        'code': '600728',
        'id': '600728JDKJ',
        'name': '\u4f73\u90fd\u79d1\u6280'
    }, {'code': '600054', 'id': '600054HSLY', 'name': '\u9ec4\u5c71\u65c5\u6e38'}, {
        'code': '002259',
        'id': '002259SDLY',
        'name': '\u5347\u8fbe\u6797\u4e1a'
    }, {'code': '002252', 'id': '002252SHLS', 'name': '\u4e0a\u6d77\u83b1\u58eb'}, {
        'code': '300076',
        'id': '300076GQYSX',
        'name': 'GQY\u89c6\u8baf'
    }, {'code': '600429', 'id': '600429SYGF', 'name': '\u4e09\u5143\u80a1\u4efd'}, {
        'code': '000419',
        'id': '000419TCKG',
        'name': '\u901a\u7a0b\u63a7\u80a1'
    }, {'code': '300164', 'id': '300164TYSY', 'name': '\u901a\u6e90\u77f3\u6cb9'}, {
        'code': '000587',
        'id': '000587JZCH',
        'name': '\u91d1\u6d32\u6148\u822a'
    }, {'code': '300205', 'id': '300205TYXX', 'name': '\u5929\u55bb\u4fe1\u606f'}, {
        'code': '300214',
        'id': '300214RKHX',
        'name': '\u65e5\u79d1\u5316\u5b66'
    }, {'code': '600854', 'id': '600854CLGF', 'name': '\u6625\u5170\u80a1\u4efd'}, {
        'code': '300031',
        'id': '300031BTKJ',
        'name': '\u5b9d\u901a\u79d1\u6280'
    }, {'code': '300235', 'id': '300235FZKJ', 'name': '\u65b9\u76f4\u79d1\u6280'}, {
        'code': '601390',
        'id': '601390ZGZT',
        'name': '\u4e2d\u56fd\u4e2d\u94c1'
    }, {'code': '600600', 'id': '600600QDPJ', 'name': '\u9752\u5c9b\u5564\u9152'}, {
        'code': '300264',
        'id': '300264JCSX',
        'name': '\u4f73\u521b\u89c6\u8baf'
    }, {'code': '300297', 'id': '300297LDGF', 'name': '\u84dd\u76fe\u80a1\u4efd'}, {
        'code': '002613',
        'id': '002613BBGF',
        'name': '\u5317\u73bb\u80a1\u4efd'
    }, {'code': '300487', 'id': '300487LXKJ', 'name': '\u84dd\u6653\u79d1\u6280'}, {
        'code': '300360',
        'id': '300360JHKJ',
        'name': '\u70ac\u534e\u79d1\u6280'
    }, {'code': '002510', 'id': '002510TQM', 'name': '\u5929\u6c7d\u6a21'}, {
        'code': '002758',
        'id': '002758HTYY',
        'name': '\u534e\u901a\u533b\u836f'
    }, {'code': '600125', 'id': '600125TLWL', 'name': '\u94c1\u9f99\u7269\u6d41'}, {
        'code': '002354',
        'id': '002354TSYL',
        'name': '\u5929\u795e\u5a31\u4e50'
    }, {'code': '600118', 'id': '600118ZGWX', 'name': '\u4e2d\u56fd\u536b\u661f'}, {
        'code': '300254',
        'id': '300254QYYY',
        'name': '\u4edf\u6e90\u533b\u836f'
    }, {'code': '000779', 'id': '000779SMPS', 'name': '\u4e09\u6bdb\u6d3e\u795e'}, {
        'code': '300424',
        'id': '300424HXKJ',
        'name': '\u822a\u65b0\u79d1\u6280'
    }, {'code': '002594', 'id': '002594BYD', 'name': '\u6bd4\u4e9a\u8fea'}, {
        'code': '002647',
        'id': '002647HLGF',
        'name': '\u5b8f\u78ca\u80a1\u4efd'
    }, {'code': '601998', 'id': '601998ZXYX', 'name': '\u4e2d\u4fe1\u94f6\u884c'}, {
        'code': '300475',
        'id': '300475JLKJ',
        'name': '\u805a\u9686\u79d1\u6280'
    }, {'code': '600561', 'id': '600561JXCY', 'name': '\u6c5f\u897f\u957f\u8fd0'}, {
        'code': '600889',
        'id': '600889NJHX',
        'name': '\u5357\u4eac\u5316\u7ea4'
    }, {'code': '603828', 'id': '603828KLD', 'name': '\u67ef\u5229\u8fbe'}, {
        'code': '002339',
        'id': '002339JCDZ',
        'name': '\u79ef\u6210\u7535\u5b50'
    }, {'code': '300118', 'id': '300118DFRS', 'name': '\u4e1c\u65b9\u65e5\u5347'}, {
        'code': '000692',
        'id': '000692HTRD',
        'name': '\u60e0\u5929\u70ed\u7535'
    }, {'code': '002192', 'id': '002192RJGF', 'name': '\u878d\u6377\u80a1\u4efd'}, {
        'code': '300330',
        'id': '300330HHJT',
        'name': '\u534e\u8679\u8ba1\u901a'
    }, {'code': '603126', 'id': '603126ZCJN', 'name': '\u4e2d\u6750\u8282\u80fd'}, {
        'code': '300069',
        'id': '300069JLHD',
        'name': '\u91d1\u5229\u534e\u7535'
    }, {'code': '002509', 'id': '002509TGZM', 'name': '\u5929\u5e7f\u4e2d\u8302'}, {
        'code': '600333',
        'id': '600333CCRQ',
        'name': '\u957f\u6625\u71c3\u6c14'
    }, {'code': '600478', 'id': '600478KLY', 'name': '\u79d1\u529b\u8fdc'}, {
        'code': '000541',
        'id': '000541FSZM',
        'name': '\u4f5b\u5c71\u7167\u660e'
    }, {'code': '600137', 'id': '600137LSGF', 'name': '\u6d6a\u838e\u80a1\u4efd'}, {
        'code': '603598',
        'id': '603598YLCM',
        'name': '\u5f15\u529b\u4f20\u5a92'
    }, {'code': '600726', 'id': '600726HDNY', 'name': '\u534e\u7535\u80fd\u6e90'}, {
        'code': '601166',
        'id': '601166XYYX',
        'name': '\u5174\u4e1a\u94f6\u884c'
    }, {'code': '000905', 'id': '000905SMGW', 'name': '\u53a6\u95e8\u6e2f\u52a1'}, {
        'code': '300232',
        'id': '300232ZMKJ',
        'name': '\u6d32\u660e\u79d1\u6280'
    }, {'code': '300324', 'id': '300324XJXX', 'name': '\u65cb\u6781\u4fe1\u606f'}, {
        'code': '600426',
        'id': '600426HLHS',
        'name': '\u534e\u9c81\u6052\u5347'
    }, {'code': '600624', 'id': '600624FDFH', 'name': '\u590d\u65e6\u590d\u534e'}, {
        'code': '300281',
        'id': '300281JMJJ',
        'name': '\u91d1\u660e\u7cbe\u673a'
    }, {'code': '603601', 'id': '603601ZSKJ', 'name': '\u518d\u5347\u79d1\u6280'}, {
        'code': '300298',
        'id': '300298SNSW',
        'name': '\u4e09\u8bfa\u751f\u7269'
    }, {'code': '300231', 'id': '300231YXKJ', 'name': '\u94f6\u4fe1\u79d1\u6280'}, {
        'code': '601126',
        'id': '601126SFGF',
        'name': '\u56db\u65b9\u80a1\u4efd'
    }, {'code': '000501', 'id': '000501EWS\uff21', 'name': '\u9102\u6b66\u5546\uff21'}, {
        'code': '000715',
        'id': '000715ZXSY',
        'name': '\u4e2d\u5174\u5546\u4e1a'
    }, {'code': '000938', 'id': '000938ZGGF', 'name': '\u7d2b\u5149\u80a1\u4efd'}, {
        'code': '000830',
        'id': '000830LXHG',
        'name': '\u9c81\u897f\u5316\u5de5'
    }, {'code': '000883', 'id': '000883HBNY', 'name': '\u6e56\u5317\u80fd\u6e90'}, {
        'code': '000700',
        'id': '000700MSKJ',
        'name': '\u6a21\u5851\u79d1\u6280'
    }, {'code': '000813', 'id': '000813TSFZ', 'name': '\u5929\u5c71\u7eba\u7ec7'}, {
        'code': '300253',
        'id': '300253WNJK',
        'name': '\u536b\u5b81\u5065\u5eb7'
    }, {'code': '300267', 'id': '300267EKZY', 'name': '\u5c14\u5eb7\u5236\u836f'}, {
        'code': '600618',
        'id': '600618LJHG',
        'name': '\u6c2f\u78b1\u5316\u5de5'
    }, {'code': '000922', 'id': '000922JDGF', 'name': '\u4f73\u7535\u80a1\u4efd'}, {
        'code': '000636',
        'id': '000636FHGK',
        'name': '\u98ce\u534e\u9ad8\u79d1'
    }, {'code': '002022', 'id': '002022KHSW', 'name': '\u79d1\u534e\u751f\u7269'}, {
        'code': '600271',
        'id': '600271HTXX',
        'name': '\u822a\u5929\u4fe1\u606f'
    }, {'code': '601398', 'id': '601398GSYX', 'name': '\u5de5\u5546\u94f6\u884c'}, {
        'code': '600012',
        'id': '600012WTGS',
        'name': '\u7696\u901a\u9ad8\u901f'
    }, {'code': '300149', 'id': '300149LZGK', 'name': '\u91cf\u5b50\u9ad8\u79d1'}, {
        'code': '600975',
        'id': '600975XWF',
        'name': '\u65b0\u4e94\u4e30'
    }, {'code': '300373', 'id': '300373YJKJ', 'name': '\u626c\u6770\u79d1\u6280'}, {
        'code': '002237',
        'id': '002237HBGF',
        'name': '\u6052\u90a6\u80a1\u4efd'
    }, {'code': '000627', 'id': '000627TMJT', 'name': '\u5929\u8302\u96c6\u56e2'}, {
        'code': '300211',
        'id': '300211YTKJ',
        'name': '\u4ebf\u901a\u79d1\u6280'
    }, {'code': '300302', 'id': '300302TYKJ', 'name': '\u540c\u6709\u79d1\u6280'}, {
        'code': '600479',
        'id': '600479QJYY',
        'name': '\u5343\u91d1\u836f\u4e1a'
    }, {'code': '300316', 'id': '300316JSJD', 'name': '\u6676\u76db\u673a\u7535'}, {
        'code': '002115',
        'id': '002115SWTX',
        'name': '\u4e09\u7ef4\u901a\u4fe1'
    }, {'code': '000066', 'id': '000066CCDN', 'name': '\u957f\u57ce\u7535\u8111'}, {
        'code': '300291',
        'id': '300291HLBN',
        'name': '\u534e\u5f55\u767e\u7eb3'
    }, {'code': '600009', 'id': '600009SHJC', 'name': '\u4e0a\u6d77\u673a\u573a'}, {
        'code': '600069',
        'id': '600069YGTZ',
        'name': '\u94f6\u9e3d\u6295\u8d44'
    }, {'code': '601991', 'id': '601991DTFD', 'name': '\u5927\u5510\u53d1\u7535'}, {
        'code': '600355',
        'id': '600355JLDZ',
        'name': '\u7cbe\u4f26\u7535\u5b50'
    }, {'code': '300401', 'id': '300401HYSW', 'name': '\u82b1\u56ed\u751f\u7269'}, {
        'code': '000049',
        'id': '000049DSDC',
        'name': '\u5fb7\u8d5b\u7535\u6c60'
    }, {'code': '002190', 'id': '002190CFJC', 'name': '\u6210\u98de\u96c6\u6210'}, {
        'code': '002337',
        'id': '002337SXKJ',
        'name': '\u8d5b\u8c61\u79d1\u6280'
    }, {'code': '002593', 'id': '002593RSJT', 'name': '\u65e5\u4e0a\u96c6\u56e2'}, {
        'code': '300086',
        'id': '300086KZYY',
        'name': '\u5eb7\u829d\u836f\u4e1a'
    }, {'code': '600871', 'id': '600871SHYF', 'name': '\u77f3\u5316\u6cb9\u670d'}, {
        'code': '601231',
        'id': '601231HXDZ',
        'name': '\u73af\u65ed\u7535\u5b50'
    }, {'code': '000506', 'id': '000506ZRZY', 'name': '\u4e2d\u6da6\u8d44\u6e90'}, {
        'code': '600240',
        'id': '600240HYZB',
        'name': '\u534e\u4e1a\u8d44\u672c'
    }, {'code': '000887', 'id': '000887ZDGF', 'name': '\u4e2d\u9f0e\u80a1\u4efd'}, {
        'code': '300125',
        'id': '300125YSD',
        'name': '\u6613\u4e16\u8fbe'
    }, {'code': '002140', 'id': '002140DHKJ', 'name': '\u4e1c\u534e\u79d1\u6280'}, {
        'code': '002400',
        'id': '002400SGGF',
        'name': '\u7701\u5e7f\u80a1\u4efd'
    }, {'code': '300153', 'id': '300153KTDY', 'name': '\u79d1\u6cf0\u7535\u6e90'}, {
        'code': '002144',
        'id': '002144HDGK',
        'name': '\u5b8f\u8fbe\u9ad8\u79d1'
    }, {'code': '300194', 'id': '300194FAYY', 'name': '\u798f\u5b89\u836f\u4e1a'}, {
        'code': '600315',
        'id': '600315SHJH',
        'name': '\u4e0a\u6d77\u5bb6\u5316'
    }, {'code': '300075', 'id': '300075SZZT', 'name': '\u6570\u5b57\u653f\u901a'}, {
        'code': '600362',
        'id': '600362JXTY',
        'name': '\u6c5f\u897f\u94dc\u4e1a'
    }, {'code': '600011', 'id': '600011HNGJ', 'name': '\u534e\u80fd\u56fd\u9645'}, {
        'code': '300483',
        'id': '300483WSGF',
        'name': '\u6c83\u65bd\u80a1\u4efd'
    }, {'code': '600597', 'id': '600597GMRY', 'name': '\u5149\u660e\u4e73\u4e1a'}, {
        'code': '002699',
        'id': '002699MSWH',
        'name': '\u7f8e\u76db\u6587\u5316'
    }, {'code': '300215', 'id': '300215DKY', 'name': '\u7535\u79d1\u9662'}, {
        'code': '002299',
        'id': '002299SNFZ',
        'name': '\u5723\u519c\u53d1\u5c55'
    }, {'code': '000428', 'id': '000428HTJD', 'name': '\u534e\u5929\u9152\u5e97'}, {
        'code': '002267',
        'id': '002267STRQ',
        'name': '\u9655\u5929\u7136\u6c14'
    }, {'code': '002462', 'id': '002462JST', 'name': '\u5609\u4e8b\u5802'}, {
        'code': '002658',
        'id': '002658XDL',
        'name': '\u96ea\u8fea\u9f99'
    }, {'code': '300126', 'id': '300126RQGF', 'name': '\u9510\u5947\u80a1\u4efd'}, {
        'code': '300379',
        'id': '300379DFT',
        'name': '\u4e1c\u65b9\u901a'
    }, {'code': '300150', 'id': '300150SJRE', 'name': '\u4e16\u7eaa\u745e\u5c14'}, {
        'code': '300367',
        'id': '300367DFWL',
        'name': '\u4e1c\u65b9\u7f51\u529b'
    }, {'code': '601899', 'id': '601899ZJKY', 'name': '\u7d2b\u91d1\u77ff\u4e1a'}, {
        'code': '002682',
        'id': '002682LZGF',
        'name': '\u9f99\u6d32\u80a1\u4efd'
    }, {'code': '000422', 'id': '000422HBYH', 'name': '\u6e56\u5317\u5b9c\u5316'}, {
        'code': '002103',
        'id': '002103GBGF',
        'name': '\u5e7f\u535a\u80a1\u4efd'
    }, {'code': '600248', 'id': '600248YCHJ', 'name': '\u5ef6\u957f\u5316\u5efa'}, {
        'code': '603808',
        'id': '603808GLS',
        'name': '\u6b4c\u529b\u601d'
    }, {'code': '600083', 'id': '600083BXGF', 'name': '\u535a\u4fe1\u80a1\u4efd'}, {
        'code': '300005',
        'id': '300005TLZ',
        'name': '\u63a2\u8def\u8005'
    }, {'code': '600053', 'id': '600053JDTZ', 'name': '\u4e5d\u9f0e\u6295\u8d44'}, {
        'code': '600635',
        'id': '600635DZGY',
        'name': '\u5927\u4f17\u516c\u7528'
    }, {'code': '002665', 'id': '002665SHJN', 'name': '\u9996\u822a\u8282\u80fd'}, {
        'code': '600343',
        'id': '600343HTDL',
        'name': '\u822a\u5929\u52a8\u529b'
    }, {'code': '600332', 'id': '600332BYS', 'name': '\u767d\u4e91\u5c71'}, {
        'code': '600863',
        'id': '600863NMHD',
        'name': '\u5185\u8499\u534e\u7535'
    }, {'code': '600438', 'id': '600438TWGF', 'name': '\u901a\u5a01\u80a1\u4efd'}, {
        'code': '002660',
        'id': '002660MSDY',
        'name': '\u8302\u7855\u7535\u6e90'
    }, {'code': '600016', 'id': '600016MSYX', 'name': '\u6c11\u751f\u94f6\u884c'}, {
        'code': '601116',
        'id': '601116SJGW',
        'name': '\u4e09\u6c5f\u8d2d\u7269'
    }, {'code': '002214', 'id': '002214DLKJ', 'name': '\u5927\u7acb\u79d1\u6280'}, {
        'code': '300420',
        'id': '300420WYKJ',
        'name': '\u4e94\u6d0b\u79d1\u6280'
    }, {'code': '600674', 'id': '600674CTNY', 'name': '\u5ddd\u6295\u80fd\u6e90'}, {
        'code': '600650',
        'id': '600650JJTZ',
        'name': '\u9526\u6c5f\u6295\u8d44'
    }, {'code': '600114', 'id': '600114DMGF', 'name': '\u4e1c\u7766\u80a1\u4efd'}, {
        'code': '300159',
        'id': '300159XYGF',
        'name': '\u65b0\u7814\u80a1\u4efd'
    }, {'code': '600203', 'id': '600203FRDZ', 'name': '\u798f\u65e5\u7535\u5b50'}, {
        'code': '600530',
        'id': '600530JDAL',
        'name': '\u4ea4\u5927\u6602\u7acb'
    }, {'code': '600667', 'id': '600667TJSY', 'name': '\u592a\u6781\u5b9e\u4e1a'}, {
        'code': '000889',
        'id': '000889MYTX',
        'name': '\u8302\u4e1a\u901a\u4fe1'
    }, {'code': '300445', 'id': '300445KST', 'name': '\u5eb7\u65af\u7279'}, {
        'code': '600985',
        'id': '600985LMKH',
        'name': '\u96f7\u9e23\u79d1\u5316'
    }, {'code': '002342', 'id': '002342JLSJ', 'name': '\u5de8\u529b\u7d22\u5177'}, {
        'code': '300382',
        'id': '300382SLK',
        'name': '\u65af\u83b1\u514b'
    }, {'code': '300469', 'id': '300469XXFZ', 'name': '\u4fe1\u606f\u53d1\u5c55'}, {
        'code': '002198',
        'id': '002198JYZY',
        'name': '\u5609\u5e94\u5236\u836f'
    }, {'code': '000513', 'id': '000513LZJT', 'name': '\u4e3d\u73e0\u96c6\u56e2'}, {
        'code': '601328',
        'id': '601328JTYX',
        'name': '\u4ea4\u901a\u94f6\u884c'
    }, {'code': '002272', 'id': '002272CRGF', 'name': '\u5ddd\u6da6\u80a1\u4efd'}, {
        'code': '000677',
        'id': '000677HTHL',
        'name': '\u6052\u5929\u6d77\u9f99'
    }, {'code': '300364', 'id': '300364ZWZX', 'name': '\u4e2d\u6587\u5728\u7ebf'}, {
        'code': '000670',
        'id': '000670*STYF',
        'name': '*ST\u76c8\u65b9'
    }, {'code': '300023', 'id': '300023BDGF', 'name': '\u5b9d\u5fb7\u80a1\u4efd'}, {
        'code': '000971',
        'id': '000971GSKG',
        'name': '\u9ad8\u5347\u63a7\u80a1'
    }, {'code': '000997', 'id': '000997X D L', 'name': '\u65b0 \u5927 \u9646'}, {
        'code': '002459',
        'id': '002459TYTL',
        'name': '\u5929\u4e1a\u901a\u8054'
    }, {'code': '000652', 'id': '000652TDGF', 'name': '\u6cf0\u8fbe\u80a1\u4efd'}, {
        'code': '000876',
        'id': '000876X X W',
        'name': '\u65b0 \u5e0c \u671b'
    }, {'code': '002528', 'id': '002528YFT', 'name': '\u82f1\u98de\u62d3'}, {
        'code': '000713',
        'id': '000713FLZY',
        'name': '\u4e30\u4e50\u79cd\u4e1a'
    }, {'code': '002741', 'id': '002741GHKJ', 'name': '\u5149\u534e\u79d1\u6280'}, {
        'code': '600176',
        'id': '600176ZGJS',
        'name': '\u4e2d\u56fd\u5de8\u77f3'
    }, {'code': '002467', 'id': '002467ELS', 'name': '\u4e8c\u516d\u4e09'}, {
        'code': '601009',
        'id': '601009NJYX',
        'name': '\u5357\u4eac\u94f6\u884c'
    }, {'code': '603168', 'id': '603168SPAS', 'name': '\u838e\u666e\u7231\u601d'}, {
        'code': '002329',
        'id': '002329HSJT',
        'name': '\u7687\u6c0f\u96c6\u56e2'
    }, {'code': '600563', 'id': '600563FLDZ', 'name': '\u6cd5\u62c9\u7535\u5b50'}, {
        'code': '002463',
        'id': '002463HDGF',
        'name': '\u6caa\u7535\u80a1\u4efd'
    }, {'code': '000599', 'id': '000599QDSX', 'name': '\u9752\u5c9b\u53cc\u661f'}, {
        'code': '600015',
        'id': '600015HXYX',
        'name': '\u534e\u590f\u94f6\u884c'
    }, {'code': '000539', 'id': '000539YDL\uff21', 'name': '\u7ca4\u7535\u529b\uff21'}, {
        'code': '300256',
        'id': '300256XXKJ',
        'name': '\u661f\u661f\u79d1\u6280'
    }, {'code': '600988', 'id': '600988CFHJ', 'name': '\u8d64\u5cf0\u9ec4\u91d1'}, {
        'code': '601010',
        'id': '601010WFGF',
        'name': '\u6587\u5cf0\u80a1\u4efd'
    }, {'code': '000572', 'id': '000572HMQC', 'name': '\u6d77\u9a6c\u6c7d\u8f66'}, {
        'code': '000630',
        'id': '000630TLYS',
        'name': '\u94dc\u9675\u6709\u8272'
    }, {'code': '000892', 'id': '000892XMLH', 'name': '\u661f\u7f8e\u8054\u5408'}, {
        'code': '000822',
        'id': '000822SDHH',
        'name': '\u5c71\u4e1c\u6d77\u5316'
    }, {'code': '002010', 'id': '002010CHGF', 'name': '\u4f20\u5316\u80a1\u4efd'}, {
        'code': '002637',
        'id': '002637ZYKJ',
        'name': '\u8d5e\u5b87\u79d1\u6280'
    }, {'code': '002212', 'id': '002212NYGF', 'name': '\u5357\u6d0b\u80a1\u4efd'}, {
        'code': '000062',
        'id': '000062SZHQ',
        'name': '\u6df1\u5733\u534e\u5f3a'
    }, {'code': '002793', 'id': '002793DYGF', 'name': '\u4e1c\u97f3\u80a1\u4efd'}, {
        'code': '603566',
        'id': '603566PLK',
        'name': '\u666e\u83b1\u67ef'
    }, {'code': '300386', 'id': '300386FTCX', 'name': '\u98de\u5929\u8bda\u4fe1'}, {
        'code': '600007',
        'id': '600007ZGGM',
        'name': '\u4e2d\u56fd\u56fd\u8d38'
    }, {'code': '000729', 'id': '000729YJPJ', 'name': '\u71d5\u4eac\u5564\u9152'}, {
        'code': '000733',
        'id': '000733ZHKJ',
        'name': '\u632f\u534e\u79d1\u6280'
    }, {'code': '000913', 'id': '000913*STQJ', 'name': '*ST\u94b1\u6c5f'}, {
        'code': '002499',
        'id': '002499KLHB',
        'name': '\u79d1\u6797\u73af\u4fdd'
    }, {'code': '002489', 'id': '002489ZJYQ', 'name': '\u6d59\u6c5f\u6c38\u5f3a'}, {
        'code': '600522',
        'id': '600522ZTKJ',
        'name': '\u4e2d\u5929\u79d1\u6280'
    }, {'code': '600029', 'id': '600029NFHK', 'name': '\u5357\u65b9\u822a\u7a7a'}, {
        'code': '002070',
        'id': '002070ZHGF',
        'name': '\u4f17\u548c\u80a1\u4efd'
    }, {'code': '600579', 'id': '600579THY', 'name': '\u5929\u534e\u9662'}, {
        'code': '002361',
        'id': '002361SJGF',
        'name': '\u795e\u5251\u80a1\u4efd'
    }, {'code': '603003', 'id': '603003LYRY', 'name': '\u9f99\u5b87\u71c3\u6cb9'}, {
        'code': '002650',
        'id': '002650JJSP',
        'name': '\u52a0\u52a0\u98df\u54c1'
    }, {'code': '603123', 'id': '603123CWGF', 'name': '\u7fe0\u5fae\u80a1\u4efd'}, {
        'code': '002058',
        'id': '002058W E T',
        'name': '\u5a01 \u5c14 \u6cf0'
    }, {'code': '600500', 'id': '600500ZHGJ', 'name': '\u4e2d\u5316\u56fd\u9645'}, {
        'code': '300133',
        'id': '300133HCYS',
        'name': '\u534e\u7b56\u5f71\u89c6'
    }, {'code': '600359', 'id': '600359XNKF', 'name': '\u65b0\u519c\u5f00\u53d1'}, {
        'code': '000001',
        'id': '000001PAYX',
        'name': '\u5e73\u5b89\u94f6\u884c'
    }, {'code': '002393', 'id': '002393LSZY', 'name': '\u529b\u751f\u5236\u836f'}, {
        'code': '002535',
        'id': '002535LZZJ',
        'name': '\u6797\u5dde\u91cd\u673a'
    }, {'code': '600401', 'id': '600401HRGF', 'name': '\u6d77\u6da6\u5149\u4f0f'}, {
        'code': '600857',
        'id': '600857NBZB',
        'name': '\u5b81\u6ce2\u4e2d\u767e'
    }, {'code': '300468', 'id': '300468SFJC', 'name': '\u56db\u65b9\u7cbe\u521b'}, {
        'code': '600000',
        'id': '600000PFYX',
        'name': '\u6d66\u53d1\u94f6\u884c'
    }, {'code': '002579', 'id': '002579ZJDZ', 'name': '\u4e2d\u4eac\u7535\u5b50'}, {
        'code': '600869',
        'id': '600869ZHNY',
        'name': '\u667a\u6167\u80fd\u6e90'
    }, {'code': '002122', 'id': '002122TMGF', 'name': '\u5929\u9a6c\u80a1\u4efd'}, {
        'code': '002497',
        'id': '002497YHJT',
        'name': '\u96c5\u5316\u96c6\u56e2'
    }, {'code': '300209', 'id': '300209TZXX', 'name': '\u5929\u6cfd\u4fe1\u606f'}, {
        'code': '600505',
        'id': '600505XCDL',
        'name': '\u897f\u660c\u7535\u529b'
    }, {'code': '002770', 'id': '002770KDRY', 'name': '\u79d1\u8fea\u4e73\u4e1a'}, {
        'code': '600977',
        'id': '600977ZGDY',
        'name': '\u4e2d\u56fd\u7535\u5f71'
    }, {'code': '002625', 'id': '002625LSGF', 'name': '\u9f99\u751f\u80a1\u4efd'}, {
        'code': '603889',
        'id': '603889XAGF',
        'name': '\u65b0\u6fb3\u80a1\u4efd'
    }, {'code': '002425', 'id': '002425KSGF', 'name': '\u51ef\u6492\u80a1\u4efd'}, {
        'code': '600076',
        'id': '600076KXXC',
        'name': '\u5eb7\u6b23\u65b0\u6750'
    }, {'code': '603066', 'id': '603066YFCC', 'name': '\u97f3\u98de\u50a8\u5b58'}, {
        'code': '600582',
        'id': '600582TDKJ',
        'name': '\u5929\u5730\u79d1\u6280'
    }, {'code': '300404', 'id': '300404BJYY', 'name': '\u535a\u6d4e\u533b\u836f'}, {
        'code': '600573',
        'id': '600573HQPJ',
        'name': '\u60e0\u6cc9\u5564\u9152'
    }, {'code': '002391', 'id': '002391CQGF', 'name': '\u957f\u9752\u80a1\u4efd'}, {
        'code': '002415',
        'id': '002415HKWS',
        'name': '\u6d77\u5eb7\u5a01\u89c6'
    }, {'code': '300345', 'id': '300345HYXC', 'name': '\u7ea2\u5b87\u65b0\u6750'}, {
        'code': '002772',
        'id': '002772ZXJY',
        'name': '\u4f17\u5174\u83cc\u4e1a'
    }, {'code': '600057', 'id': '600057XYGF', 'name': '\u8c61\u5c7f\u80a1\u4efd'}, {
        'code': '002170',
        'id': '002170BTGF',
        'name': '\u82ad\u7530\u80a1\u4efd'
    }, {'code': '600699', 'id': '600699JSDZ', 'name': '\u5747\u80dc\u7535\u5b50'}, {
        'code': '002771',
        'id': '002771ZST',
        'name': '\u771f\u89c6\u901a'
    }, {'code': '300246', 'id': '300246BLT', 'name': '\u5b9d\u83b1\u7279'}, {
        'code': '600382',
        'id': '600382GDMZ',
        'name': '\u5e7f\u4e1c\u660e\u73e0'
    }, {'code': '600461', 'id': '600461HCSY', 'name': '\u6d2a\u57ce\u6c34\u4e1a'}, {
        'code': '600769',
        'id': '600769XLDY',
        'name': '\u7965\u9f99\u7535\u4e1a'
    }, {'code': '600981', 'id': '600981HHJT', 'name': '\u6c47\u9e3f\u96c6\u56e2'}, {
        'code': '600222',
        'id': '600222TLYY',
        'name': '\u592a\u9f99\u836f\u4e1a'
    }, {'code': '600753', 'id': '600753DFYX', 'name': '\u4e1c\u65b9\u94f6\u661f'}, {
        'code': '600256',
        'id': '600256GHNY',
        'name': '\u5e7f\u6c47\u80fd\u6e90'
    }, {'code': '600707', 'id': '600707CHGF', 'name': '\u5f69\u8679\u80a1\u4efd'}, {
        'code': '002406',
        'id': '002406YDCD',
        'name': '\u8fdc\u4e1c\u4f20\u52a8'
    }, {'code': '002442', 'id': '002442LXHG', 'name': '\u9f99\u661f\u5316\u5de5'}, {
        'code': '002789',
        'id': '002789JYJT',
        'name': '\u5efa\u827a\u96c6\u56e2'
    }, {'code': '000055', 'id': '000055FDJT', 'name': '\u65b9\u5927\u96c6\u56e2'}, {
        'code': '000735',
        'id': '000735L N S',
        'name': '\u7f57 \u725b \u5c71'
    }, {'code': '600260', 'id': '600260KLKJ', 'name': '\u51ef\u4e50\u79d1\u6280'}, {
        'code': '600578',
        'id': '600578JNDL',
        'name': '\u4eac\u80fd\u7535\u529b'
    }, {'code': '300132', 'id': '300132QSGF', 'name': '\u9752\u677e\u80a1\u4efd'}, {
        'code': '600165',
        'id': '600165XRHL',
        'name': '\u65b0\u65e5\u6052\u529b'
    }, {'code': '300275', 'id': '300275MAS', 'name': '\u6885\u5b89\u68ee'}, {
        'code': '300403',
        'id': '300403DEHY',
        'name': '\u5730\u5c14\u6c49\u5b87'
    }, {'code': '601002', 'id': '601002JYSY', 'name': '\u664b\u4ebf\u5b9e\u4e1a'}, {
        'code': '600630',
        'id': '600630LTGF',
        'name': '\u9f99\u5934\u80a1\u4efd'
    }, {'code': '300123', 'id': '300123TYN', 'name': '\u592a\u9633\u9e1f'}, {
        'code': '000545',
        'id': '000545JPTY',
        'name': '\u91d1\u6d66\u949b\u4e1a'
    }, {'code': '600094', 'id': '600094DMC', 'name': '\u5927\u540d\u57ce'}, {
        'code': '002483',
        'id': '002483RBGF',
        'name': '\u6da6\u90a6\u80a1\u4efd'
    }, {'code': '002532', 'id': '002532XJBY', 'name': '\u65b0\u754c\u6cf5\u4e1a'}, {
        'code': '002603',
        'id': '002603YLYY',
        'name': '\u4ee5\u5cad\u836f\u4e1a'
    }, {'code': '002671', 'id': '002671LQGF', 'name': '\u9f99\u6cc9\u80a1\u4efd'}, {
        'code': '600815',
        'id': '600815SGGF',
        'name': '\u53a6\u5de5\u80a1\u4efd'
    }, {'code': '600516', 'id': '600516FDTS', 'name': '\u65b9\u5927\u70ad\u7d20'}, {
        'code': '300003',
        'id': '300003LPYL',
        'name': '\u4e50\u666e\u533b\u7597'
    }, {'code': '600519', 'id': '600519GZMT', 'name': '\u8d35\u5dde\u8305\u53f0'}, {
        'code': '002550',
        'id': '002550QHZY',
        'name': '\u5343\u7ea2\u5236\u836f'
    }, {'code': '002468', 'id': '002468ADX', 'name': '\u827e\u8fea\u897f'}, {
        'code': '601311',
        'id': '601311LTGF',
        'name': '\u9a86\u9a7c\u80a1\u4efd'
    }, {'code': '000819', 'id': '000819YYXC', 'name': '\u5cb3\u9633\u5174\u957f'}, {
        'code': '300009',
        'id': '300009AKSW',
        'name': '\u5b89\u79d1\u751f\u7269'
    }, {'code': '300154', 'id': '300154RLGF', 'name': '\u745e\u51cc\u80a1\u4efd'}, {
        'code': '300522',
        'id': '300522SMKJ',
        'name': '\u4e16\u540d\u79d1\u6280'
    }, {'code': '002368', 'id': '002368TJGF', 'name': '\u592a\u6781\u80a1\u4efd'}, {
        'code': '000681',
        'id': '000681SJZG',
        'name': '\u89c6\u89c9\u4e2d\u56fd'
    }, {'code': '600422', 'id': '600422KYJT', 'name': '\u6606\u836f\u96c6\u56e2'}, {
        'code': '000958',
        'id': '000958DFNY',
        'name': '\u4e1c\u65b9\u80fd\u6e90'
    }, {'code': '002450', 'id': '002450KDX', 'name': '\u5eb7\u5f97\u65b0'}, {
        'code': '601519',
        'id': '601519DZH',
        'name': '\u5927\u667a\u6167'
    }, {'code': '002511', 'id': '002511ZSJR', 'name': '\u4e2d\u987a\u6d01\u67d4'}, {
        'code': '000025',
        'id': '000025T L\uff21',
        'name': '\u7279 \u529b\uff21'
    }, {'code': '000507', 'id': '000507ZHG', 'name': '\u73e0\u6d77\u6e2f'}, {
        'code': '000875',
        'id': '000875JDGF',
        'name': '\u5409\u7535\u80a1\u4efd'
    }, {'code': '002385', 'id': '002385DBN', 'name': '\u5927\u5317\u519c'}, {
        'code': '002583',
        'id': '002583HND',
        'name': '\u6d77\u80fd\u8fbe'
    }, {'code': '600251', 'id': '600251GNGF', 'name': '\u51a0\u519c\u80a1\u4efd'}, {
        'code': '002338',
        'id': '002338APGD',
        'name': '\u5965\u666e\u5149\u7535'
    }, {'code': '002688', 'id': '002688JHSW', 'name': '\u91d1\u6cb3\u751f\u7269'}, {
        'code': '600192',
        'id': '600192CCDG',
        'name': '\u957f\u57ce\u7535\u5de5'
    }, {'code': '603698', 'id': '603698HTGC', 'name': '\u822a\u5929\u5de5\u7a0b'}, {
        'code': '600718',
        'id': '600718DRJT',
        'name': '\u4e1c\u8f6f\u96c6\u56e2'
    }, {'code': '002006', 'id': '002006JGKJ', 'name': '\u7cbe\u529f\u79d1\u6280'}, {
        'code': '002261',
        'id': '002261TWXX',
        'name': '\u62d3\u7ef4\u4fe1\u606f'
    }, {'code': '002414', 'id': '002414GDHW', 'name': '\u9ad8\u5fb7\u7ea2\u5916'}, {
        'code': '300250',
        'id': '300250CLXX',
        'name': '\u521d\u7075\u4fe1\u606f'
    }, {'code': '002763', 'id': '002763HJGF', 'name': '\u6c47\u6d01\u80a1\u4efd'}, {
        'code': '603021',
        'id': '603021SDHP',
        'name': '\u5c71\u4e1c\u534e\u9e4f'
    }, {'code': '002367', 'id': '002367KLDT', 'name': '\u5eb7\u529b\u7535\u68af'}, {
        'code': '000009',
        'id': '000009ZGBA',
        'name': '\u4e2d\u56fd\u5b9d\u5b89'
    }, {'code': '002410', 'id': '002410GLD', 'name': '\u5e7f\u8054\u8fbe'}, {
        'code': '300090',
        'id': '300090SYHB',
        'name': '\u76db\u8fd0\u73af\u4fdd'
    }, {'code': '300327', 'id': '300327ZYDZ', 'name': '\u4e2d\u9896\u7535\u5b50'}, {
        'code': '601088',
        'id': '601088ZGSH',
        'name': '\u4e2d\u56fd\u795e\u534e'
    }, {'code': '601168', 'id': '601168XBKY', 'name': '\u897f\u90e8\u77ff\u4e1a'}, {
        'code': '601186',
        'id': '601186ZGTJ',
        'name': '\u4e2d\u56fd\u94c1\u5efa'
    }, {'code': '002249', 'id': '002249DYDJ', 'name': '\u5927\u6d0b\u7535\u673a'}, {
        'code': '300419',
        'id': '300419HFKJ',
        'name': '\u6d69\u4e30\u79d1\u6280'
    }, {'code': '600158', 'id': '600158ZTCY', 'name': '\u4e2d\u4f53\u4ea7\u4e1a'}, {
        'code': '601898',
        'id': '601898ZMNY',
        'name': '\u4e2d\u7164\u80fd\u6e90'
    }, {'code': '000719', 'id': '000719DDCM', 'name': '\u5927\u5730\u4f20\u5a92'}, {
        'code': '000723',
        'id': '000723MJNY',
        'name': '\u7f8e\u9526\u80fd\u6e90'
    }, {'code': '002164', 'id': '002164NBDL', 'name': '\u5b81\u6ce2\u4e1c\u529b'}, {
        'code': '002486',
        'id': '002486JLJ',
        'name': '\u5609\u9e9f\u6770'
    }, {'code': '000852', 'id': '000852SHJX', 'name': '\u77f3\u5316\u673a\u68b0'}, {
        'code': '002024',
        'id': '002024SNYS',
        'name': '\u82cf\u5b81\u4e91\u5546'
    }, {'code': '601890', 'id': '601890YXML', 'name': '\u4e9a\u661f\u951a\u94fe'}, {
        'code': '600658',
        'id': '600658DZC',
        'name': '\u7535\u5b50\u57ce'
    }, {'code': '600163', 'id': '600163ZMNY', 'name': '\u4e2d\u95fd\u80fd\u6e90'}, {
        'code': '002573',
        'id': '002573QXHJ',
        'name': '\u6e05\u65b0\u73af\u5883'
    }, {'code': '600487', 'id': '600487HTGD', 'name': '\u4ea8\u901a\u5149\u7535'}, {
        'code': '600482',
        'id': '600482ZGDL',
        'name': '\u4e2d\u56fd\u52a8\u529b'
    }, {'code': '002066', 'id': '002066RTKJ', 'name': '\u745e\u6cf0\u79d1\u6280'}, {
        'code': '300128',
        'id': '300128JFXC',
        'name': '\u9526\u5bcc\u65b0\u6750'
    }, {'code': '002333', 'id': '002333LPSJ', 'name': '\u7f57\u666e\u65af\u91d1'}, {
        'code': '300392',
        'id': '300392TXGF',
        'name': '\u817e\u4fe1\u80a1\u4efd'
    }, {'code': '002020', 'id': '002020JXYY', 'name': '\u4eac\u65b0\u836f\u4e1a'}, {
        'code': '002294',
        'id': '002294XLT',
        'name': '\u4fe1\u7acb\u6cf0'
    }, {'code': '600680', 'id': '600680SHPT', 'name': '\u4e0a\u6d77\u666e\u5929'}, {
        'code': '600963',
        'id': '600963YYLZ',
        'name': '\u5cb3\u9633\u6797\u7eb8'
    }, {'code': '600106', 'id': '600106ZQLQ', 'name': '\u91cd\u5e86\u8def\u6865'}, {
        'code': '000046',
        'id': '000046FHKG',
        'name': '\u6cdb\u6d77\u63a7\u80a1'
    }, {'code': '300304', 'id': '300304YYDQ', 'name': '\u4e91\u610f\u7535\u6c14'}, {
        'code': '600023',
        'id': '600023ZNDL',
        'name': '\u6d59\u80fd\u7535\u529b'
    }, {'code': '300147', 'id': '300147XXZY', 'name': '\u9999\u96ea\u5236\u836f'}, {
        'code': '600121',
        'id': '600121ZZMD',
        'name': '\u90d1\u5dde\u7164\u7535'
    }, {'code': '600491', 'id': '600491LYJS', 'name': '\u9f99\u5143\u5efa\u8bbe'}, {
        'code': '600557',
        'id': '600557KYYY',
        'name': '\u5eb7\u7f18\u836f\u4e1a'
    }, {'code': '603158', 'id': '603158TLGF', 'name': '\u817e\u9f99\u80a1\u4efd'}, {
        'code': '002040',
        'id': '002040N J G',
        'name': '\u5357 \u4eac \u6e2f'
    }, {'code': '002684', 'id': '002684MSKJ', 'name': '\u731b\u72ee\u79d1\u6280'}, {
        'code': '600329',
        'id': '600329ZXYY',
        'name': '\u4e2d\u65b0\u836f\u4e1a'
    }, {'code': '300210', 'id': '300210SYGF', 'name': '\u68ee\u8fdc\u80a1\u4efd'}, {
        'code': '600647',
        'id': '600647TDCY',
        'name': '\u540c\u8fbe\u521b\u4e1a'
    }, {'code': '002304', 'id': '002304YHGF', 'name': '\u6d0b\u6cb3\u80a1\u4efd'}, {
        'code': '601633',
        'id': '601633CCQC',
        'name': '\u957f\u57ce\u6c7d\u8f66'
    }, {'code': '300177', 'id': '300177ZHD', 'name': '\u4e2d\u6d77\u8fbe'}, {
        'code': '300045',
        'id': '300045HLCT',
        'name': '\u534e\u529b\u521b\u901a'
    }, {'code': '002702', 'id': '002702HXSP', 'name': '\u6d77\u6b23\u98df\u54c1'}, {
        'code': '002612',
        'id': '002612LZGF',
        'name': '\u6717\u59ff\u80a1\u4efd'
    }, {'code': '600027', 'id': '600027HDGJ', 'name': '\u534e\u7535\u56fd\u9645'}, {
        'code': '002222',
        'id': '002222FJKJ',
        'name': '\u798f\u6676\u79d1\u6280'
    }, {'code': '600548', 'id': '600548SGS', 'name': '\u6df1\u9ad8\u901f'}, {
        'code': '000034',
        'id': '000034SZSM',
        'name': '\u795e\u5dde\u6570\u7801'
    }, {'code': '600962', 'id': '600962GTZL', 'name': '\u56fd\u6295\u4e2d\u9c81'}, {
        'code': '300315',
        'id': '300315ZQKJ',
        'name': '\u638c\u8da3\u79d1\u6280'
    }, {'code': '002152', 'id': '002152GDYT', 'name': '\u5e7f\u7535\u8fd0\u901a'}, {
        'code': '300357',
        'id': '300357WWSW',
        'name': '\u6211\u6b66\u751f\u7269'
    }, {'code': '300393', 'id': '300393ZLGF', 'name': '\u4e2d\u6765\u80a1\u4efd'}, {
        'code': '002740',
        'id': '002740ADE',
        'name': '\u7231\u8fea\u5c14'
    }, {'code': '300467', 'id': '300467XYKJ', 'name': '\u8fc5\u6e38\u79d1\u6280'}, {
        'code': '002253',
        'id': '002253CDZS',
        'name': '\u5ddd\u5927\u667a\u80dc'
    }, {'code': '000518', 'id': '000518SHSW', 'name': '\u56db\u73af\u751f\u7269'}, {
        'code': '002134',
        'id': '002134TJPL',
        'name': '\u5929\u6d25\u666e\u6797'
    }, {'code': '300279', 'id': '300279HJKJ', 'name': '\u548c\u6676\u79d1\u6280'}, {
        'code': '002493',
        'id': '002493RSSH',
        'name': '\u8363\u76db\u77f3\u5316'
    }, {'code': '002777', 'id': '002777JYYH', 'name': '\u4e45\u8fdc\u94f6\u6d77'}, {
        'code': '600028',
        'id': '600028ZGSH',
        'name': '\u4e2d\u56fd\u77f3\u5316'
    }, {'code': '002188', 'id': '002188BSZX', 'name': '\u5df4\u58eb\u5728\u7ebf'}, {
        'code': '300380',
        'id': '300380ASXX',
        'name': '\u5b89\u7855\u4fe1\u606f'
    }, {'code': '600469', 'id': '600469FSGF', 'name': '\u98ce\u795e\u80a1\u4efd'}, {
        'code': '300197',
        'id': '300197THST',
        'name': '\u94c1\u6c49\u751f\u6001'
    }, {'code': '600100', 'id': '600100TFGF', 'name': '\u540c\u65b9\u80a1\u4efd'}, {
        'code': '603002',
        'id': '603002HCDZ',
        'name': '\u5b8f\u660c\u7535\u5b50'
    }, {'code': '300162', 'id': '300162LMGF', 'name': '\u96f7\u66fc\u80a1\u4efd'}, {
        'code': '002678',
        'id': '002678ZJGQ',
        'name': '\u73e0\u6c5f\u94a2\u7434'
    }, {'code': '002210', 'id': '002210FMGJ', 'name': '\u98de\u9a6c\u56fd\u9645'}, {
        'code': '603909',
        'id': '603909HCGF',
        'name': '\u5408\u8bda\u80a1\u4efd'
    }, {'code': '000927', 'id': '000927YQXL', 'name': '\u4e00\u6c7d\u590f\u5229'}, {
        'code': '603866',
        'id': '603866TLMB',
        'name': '\u6843\u674e\u9762\u5305'
    }, {'code': '002448', 'id': '002448ZYNP', 'name': '\u4e2d\u539f\u5185\u914d'}, {
        'code': '300036',
        'id': '300036CTRJ',
        'name': '\u8d85\u56fe\u8f6f\u4ef6'
    }, {'code': '000739', 'id': '000739PLYY', 'name': '\u666e\u6d1b\u836f\u4e1a'}, {
        'code': '002781',
        'id': '002781QXGF',
        'name': '\u5947\u4fe1\u80a1\u4efd'
    }, {'code': '300102', 'id': '300102GZGD', 'name': '\u4e7e\u7167\u5149\u7535'}, {
        'code': '600361',
        'id': '600361HLZC',
        'name': '\u534e\u8054\u7efc\u8d85'
    }, {'code': '600269', 'id': '600269GYGS', 'name': '\u8d63\u7ca4\u9ad8\u901f'}, {
        'code': '600303',
        'id': '600303SGGF',
        'name': '\u66d9\u5149\u80a1\u4efd'
    }, {'code': '600098', 'id': '600098GZFZ', 'name': '\u5e7f\u5dde\u53d1\u5c55'}, {
        'code': '600311',
        'id': '600311RHSY',
        'name': '\u8363\u534e\u5b9e\u4e1a'
    }, {'code': '000691', 'id': '000691STYT', 'name': 'ST\u4e9a\u592a'}, {
        'code': '300027',
        'id': '300027HYXD',
        'name': '\u534e\u8c0a\u5144\u5f1f'
    }, {'code': '300022', 'id': '300022JFNJ', 'name': '\u5409\u5cf0\u519c\u673a'}, {
        'code': '300430',
        'id': '300430CYT',
        'name': '\u8bda\u76ca\u901a'
    }, {'code': '601368', 'id': '601368LCSW', 'name': '\u7eff\u57ce\u6c34\u52a1'}, {
        'code': '002004',
        'id': '002004HBJK',
        'name': '\u534e\u90a6\u5065\u5eb7'
    }, {'code': '002302', 'id': '002302XBJS', 'name': '\u897f\u90e8\u5efa\u8bbe'}, {
        'code': '600876',
        'id': '600876LYBL',
        'name': '\u6d1b\u9633\u73bb\u7483'
    }, {'code': '002358', 'id': '002358SYDQ', 'name': '\u68ee\u6e90\u7535\u6c14'}, {
        'code': '002169',
        'id': '002169ZGDQ',
        'name': '\u667a\u5149\u7535\u6c14'
    }, {'code': '002506', 'id': '002506XXJC', 'name': '\u534f\u946b\u96c6\u6210'}, {
        'code': '300529',
        'id': '300529JFSW',
        'name': '\u5065\u5e06\u751f\u7269'
    }, {'code': '601006', 'id': '601006DQTL', 'name': '\u5927\u79e6\u94c1\u8def'}, {
        'code': '603958',
        'id': '603958HSGF',
        'name': '\u54c8\u68ee\u80a1\u4efd'
    }, {'code': '002378', 'id': '002378ZYWY', 'name': '\u7ae0\u6e90\u94a8\u4e1a'}, {
        'code': '600058',
        'id': '600058WKFZ',
        'name': '\u4e94\u77ff\u53d1\u5c55'
    }, {'code': '002737', 'id': '002737KHYY', 'name': '\u8475\u82b1\u836f\u4e1a'}, {
        'code': '000600',
        'id': '000600JTNY',
        'name': '\u5efa\u6295\u80fd\u6e90'
    }, {'code': '002100', 'id': '002100TKSW', 'name': '\u5929\u5eb7\u751f\u7269'}, {
        'code': '600327',
        'id': '600327DDF',
        'name': '\u5927\u4e1c\u65b9'
    }, {'code': '300161', 'id': '300161HZSK', 'name': '\u534e\u4e2d\u6570\u63a7'}, {
        'code': '600816',
        'id': '600816AXXT',
        'name': '\u5b89\u4fe1\u4fe1\u6258'
    }, {'code': '000758', 'id': '000758ZSGF', 'name': '\u4e2d\u8272\u80a1\u4efd'}, {
        'code': '002580',
        'id': '002580SYGF',
        'name': '\u5723\u9633\u80a1\u4efd'
    }, {'code': '300247', 'id': '300247LJJK', 'name': '\u4e50\u91d1\u5065\u5eb7'}, {
        'code': '000901',
        'id': '000901HTKJ',
        'name': '\u822a\u5929\u79d1\u6280'
    }, {'code': '002145', 'id': '002145ZHTB', 'name': '\u4e2d\u6838\u949b\u767d'}, {
        'code': '000517',
        'id': '000517RADC',
        'name': '\u8363\u5b89\u5730\u4ea7'
    }, {'code': '002226', 'id': '002226JNHG', 'name': '\u6c5f\u5357\u5316\u5de5'}, {
        'code': '002428',
        'id': '002428YNDY',
        'name': '\u4e91\u5357\u9517\u4e1a'
    }, {'code': '600689', 'id': '600689SHSM', 'name': '\u4e0a\u6d77\u4e09\u6bdb'}, {
        'code': '002191',
        'id': '002191JJGF',
        'name': '\u52b2\u5609\u80a1\u4efd'
    }, {'code': '002359', 'id': '002359QXTT', 'name': '\u9f50\u661f\u94c1\u5854'}, {
        'code': '600377',
        'id': '600377NHGS',
        'name': '\u5b81\u6caa\u9ad8\u901f'
    }, {'code': '600610', 'id': '600610ZYD', 'name': '\u4e2d\u6bc5\u8fbe'}, {
        'code': '600722',
        'id': '600722JNHG',
        'name': '\u91d1\u725b\u5316\u5de5'
    }, {'code': '603669', 'id': '603669LKYY', 'name': '\u7075\u5eb7\u836f\u4e1a'}, {
        'code': '002219',
        'id': '002219HKYL',
        'name': '\u6052\u5eb7\u533b\u7597'
    }, {'code': '601857', 'id': '601857ZGSY', 'name': '\u4e2d\u56fd\u77f3\u6cb9'}, {
        'code': '300241',
        'id': '300241RFGD',
        'name': '\u745e\u4e30\u5149\u7535'
    }, {'code': '600097', 'id': '600097KCGJ', 'name': '\u5f00\u521b\u56fd\u9645'}, {
        'code': '002018',
        'id': '002018HXGJ',
        'name': '\u534e\u4fe1\u56fd\u9645'
    }, {'code': '603223', 'id': '603223HTGF', 'name': '\u6052\u901a\u80a1\u4efd'}, {
        'code': '300451',
        'id': '300451CYRJ',
        'name': '\u521b\u4e1a\u8f6f\u4ef6'
    }, {'code': '000788', 'id': '000788BDYY', 'name': '\u5317\u5927\u533b\u836f'}, {
        'code': '601188',
        'id': '601188LJJT',
        'name': '\u9f99\u6c5f\u4ea4\u901a'
    }, {'code': '000800', 'id': '000800YQJC', 'name': '\u4e00\u6c7d\u8f7f\u8f66'}, {
        'code': '002016',
        'id': '002016SRZY',
        'name': '\u4e16\u8363\u5146\u4e1a'
    }, {'code': '300011', 'id': '300011DHJZ', 'name': '\u9f0e\u6c49\u6280\u672f'}, {
        'code': '601020',
        'id': '601020HYKY',
        'name': '\u534e\u94b0\u77ff\u4e1a'
    }, {'code': '000488', 'id': '000488CMZY', 'name': '\u6668\u9e23\u7eb8\u4e1a'}, {
        'code': '002559',
        'id': '002559YWGF',
        'name': '\u4e9a\u5a01\u80a1\u4efd'
    }, {'code': '600104', 'id': '600104SQJT', 'name': '\u4e0a\u6c7d\u96c6\u56e2'}, {
        'code': '600562',
        'id': '600562GRKJ',
        'name': '\u56fd\u777f\u79d1\u6280'
    }, {'code': '600961', 'id': '600961ZYJT', 'name': '\u682a\u51b6\u96c6\u56e2'}, {
        'code': '002627',
        'id': '002627YCJY',
        'name': '\u5b9c\u660c\u4ea4\u8fd0'
    }, {'code': '002383', 'id': '002383HZSZ', 'name': '\u5408\u4f17\u601d\u58ee'}, {
        'code': '002303',
        'id': '002303MYS',
        'name': '\u7f8e\u76c8\u68ee'
    }, {'code': '000760', 'id': '000760STE', 'name': '\u65af\u592a\u5c14'}, {
        'code': '600703',
        'id': '600703SAGD',
        'name': '\u4e09\u5b89\u5149\u7535'
    }, {'code': '000415', 'id': '000415BHJK', 'name': '\u6e24\u6d77\u91d1\u63a7'}, {
        'code': '002439',
        'id': '002439QMXC',
        'name': '\u542f\u660e\u661f\u8fb0'
    }, {'code': '002518', 'id': '002518KSD', 'name': '\u79d1\u58eb\u8fbe'}, {
        'code': '600236',
        'id': '600236GGDL',
        'name': '\u6842\u51a0\u7535\u529b'
    }, {'code': '600508', 'id': '600508SHNY', 'name': '\u4e0a\u6d77\u80fd\u6e90'}, {
        'code': '600766',
        'id': '600766YCHJ',
        'name': '\u56ed\u57ce\u9ec4\u91d1'
    }, {'code': '002380', 'id': '002380KYGF', 'name': '\u79d1\u8fdc\u80a1\u4efd'}, {
        'code': '002575',
        'id': '002575QXWJ',
        'name': '\u7fa4\u5174\u73a9\u5177'
    }, {'code': '600855', 'id': '600855HTCF', 'name': '\u822a\u5929\u957f\u5cf0'}, {
        'code': '002748',
        'id': '002748SLSY',
        'name': '\u4e16\u9f99\u5b9e\u4e1a'
    }, {'code': '000816', 'id': '000816ZHNY', 'name': '\u667a\u6167\u519c\u4e1a'}, {
        'code': '002269',
        'id': '002269MBFS',
        'name': '\u7f8e\u90a6\u670d\u9970'
    }, {'code': '002586', 'id': '002586WHGF', 'name': '\u56f4\u6d77\u80a1\u4efd'}, {
        'code': '600756',
        'id': '600756LCRJ',
        'name': '\u6d6a\u6f6e\u8f6f\u4ef6'
    }, {'code': '601117', 'id': '601117ZGHX', 'name': '\u4e2d\u56fd\u5316\u5b66'}, {
        'code': '000078',
        'id': '000078HWSW',
        'name': '\u6d77\u738b\u751f\u7269'
    }, {'code': '002750', 'id': '002750LJYY', 'name': '\u9f99\u6d25\u836f\u4e1a'}, {
        'code': '300266',
        'id': '300266XYHJ',
        'name': '\u5174\u6e90\u73af\u5883'
    }, {'code': '600305', 'id': '600305HSCY', 'name': '\u6052\u987a\u918b\u4e1a'}, {
        'code': '600529',
        'id': '600529SDYB',
        'name': '\u5c71\u4e1c\u836f\u73bb'
    }, {'code': '601965', 'id': '601965ZGQY', 'name': '\u4e2d\u56fd\u6c7d\u7814'}, {
        'code': '600061',
        'id': '600061GTAX',
        'name': '\u56fd\u6295\u5b89\u4fe1'
    }, {'code': '000058', 'id': '000058S S G', 'name': '\u6df1 \u8d5b \u683c'}, {
        'code': '002477',
        'id': '002477CYNM',
        'name': '\u96cf\u9e70\u519c\u7267'
    }, {'code': '000157', 'id': '000157ZLZK', 'name': '\u4e2d\u8054\u91cd\u79d1'}, {
        'code': '002655',
        'id': '002655GDDS',
        'name': '\u5171\u8fbe\u7535\u58f0'
    }, {'code': '000848', 'id': '000848CDLL', 'name': '\u627f\u5fb7\u9732\u9732'}, {
        'code': '601216',
        'id': '601216JZJT',
        'name': '\u541b\u6b63\u96c6\u56e2'
    }, {'code': '601558', 'id': '601558HRFD', 'name': '\u534e\u9510\u98ce\u7535'}, {
        'code': '002363',
        'id': '002363LJJX',
        'name': '\u9686\u57fa\u673a\u68b0'
    }, {'code': '600652', 'id': '600652YJYX', 'name': '\u6e38\u4e45\u6e38\u620f'}, {
        'code': '002027',
        'id': '002027FZCM',
        'name': '\u5206\u4f17\u4f20\u5a92'
    }, {'code': '300216', 'id': '300216QSYJ', 'name': '\u5343\u5c71\u836f\u673a'}, {
        'code': '300450',
        'id': '300450XDZN',
        'name': '\u5148\u5bfc\u667a\u80fd'
    }, {'code': '600151', 'id': '600151HTJD', 'name': '\u822a\u5929\u673a\u7535'}, {
        'code': '002470',
        'id': '002470JZD',
        'name': '\u91d1\u6b63\u5927'
    }, {'code': '002641', 'id': '002641YGGF', 'name': '\u6c38\u9ad8\u80a1\u4efd'}, {
        'code': '002286',
        'id': '002286BLB',
        'name': '\u4fdd\u9f84\u5b9d'
    }, {'code': '300138', 'id': '300138CGSW', 'name': '\u6668\u5149\u751f\u7269'}, {
        'code': '600103',
        'id': '600103QSZY',
        'name': '\u9752\u5c71\u7eb8\u4e1a'
    }, {'code': '600885', 'id': '600885HFGF', 'name': '\u5b8f\u53d1\u80a1\u4efd'}, {
        'code': '002011',
        'id': '002011DAHJ',
        'name': '\u76fe\u5b89\u73af\u5883'
    }, {'code': '002102', 'id': '002102GFGF', 'name': '\u51a0\u798f\u80a1\u4efd'}, {
        'code': '002224',
        'id': '002224S L S',
        'name': '\u4e09 \u529b \u58eb'
    }, {'code': '002218', 'id': '002218TRXN', 'name': '\u62d3\u65e5\u65b0\u80fd'}, {
        'code': '600792',
        'id': '600792YMNY',
        'name': '\u4e91\u7164\u80fd\u6e90'
    }, {'code': '601058', 'id': '601058SLJY', 'name': '\u8d5b\u8f6e\u91d1\u5b87'}, {
        'code': '600169',
        'id': '600169TYZG',
        'name': '\u592a\u539f\u91cd\u5de5'
    }, {'code': '600313', 'id': '600313NFZY', 'name': '\u519c\u53d1\u79cd\u4e1a'}, {
        'code': '000716',
        'id': '000716HZM',
        'name': '\u9ed1\u829d\u9ebb'
    }, {'code': '002366', 'id': '002366THHD', 'name': '\u53f0\u6d77\u6838\u7535'}, {
        'code': '601968',
        'id': '601968BGBZ',
        'name': '\u5b9d\u94a2\u5305\u88c5'
    }, {'code': '600039', 'id': '600039SCLQ', 'name': '\u56db\u5ddd\u8def\u6865'}, {
        'code': '002181',
        'id': '002181Y C M',
        'name': '\u7ca4 \u4f20 \u5a92'
    }, {'code': '000620', 'id': '000620XHL', 'name': '\u65b0\u534e\u8054'}, {
        'code': '600790',
        'id': '600790QFC',
        'name': '\u8f7b\u7eba\u57ce'
    }, {'code': '002109', 'id': '002109*STXH', 'name': '*ST\u5174\u5316'}, {
        'code': '600197',
        'id': '600197YLT',
        'name': '\u4f0a\u529b\u7279'
    }, {'code': '600436', 'id': '600436PZH', 'name': '\u7247\u4ed4\u7640'}, {
        'code': '600613',
        'id': '600613SQZY',
        'name': '\u795e\u5947\u5236\u836f'
    }, {'code': '600785', 'id': '600785XHBH', 'name': '\u65b0\u534e\u767e\u8d27'}, {
        'code': '002323',
        'id': '002323YBT',
        'name': '\u96c5\u767e\u7279'
    }, {'code': '600400', 'id': '600400HDGF', 'name': '\u7ea2\u8c46\u80a1\u4efd'}, {
        'code': '002384',
        'id': '002384DSJM',
        'name': '\u4e1c\u5c71\u7cbe\u5bc6'
    }, {'code': '603806', 'id': '603806FST', 'name': '\u798f\u65af\u7279'}, {
        'code': '603318',
        'id': '603318PSGF',
        'name': '\u6d3e\u601d\u80a1\u4efd'
    }, {'code': '002417', 'id': '002417SYD', 'name': '\u4e09\u5143\u8fbe'}, {
        'code': '300238',
        'id': '300238GHSW',
        'name': '\u51a0\u660a\u751f\u7269'
    }, {'code': '600770', 'id': '600770ZYGF', 'name': '\u7efc\u827a\u80a1\u4efd'}, {
        'code': '601179',
        'id': '601179ZGXD',
        'name': '\u4e2d\u56fd\u897f\u7535'
    }, {'code': '300484', 'id': '300484LHHT', 'name': '\u84dd\u6d77\u534e\u817e'}, {
        'code': '600191',
        'id': '600191HZSY',
        'name': '\u534e\u8d44\u5b9e\u4e1a'
    }, {'code': '600661', 'id': '600661XNY', 'name': '\u65b0\u5357\u6d0b'}, {
        'code': '300391',
        'id': '300391KYKJ',
        'name': '\u5eb7\u8dc3\u79d1\u6280'
    }, {'code': '002296', 'id': '002296HHKJ', 'name': '\u8f89\u714c\u79d1\u6280'}, {
        'code': '002669',
        'id': '002669KDXC',
        'name': '\u5eb7\u8fbe\u65b0\u6750'
    }, {'code': '600515', 'id': '600515HHJC', 'name': '\u6d77\u822a\u57fa\u7840'}, {
        'code': '600523',
        'id': '600523GHGF',
        'name': '\u8d35\u822a\u80a1\u4efd'
    }, {'code': '601515', 'id': '601515DFGF', 'name': '\u4e1c\u98ce\u80a1\u4efd'}, {
        'code': '300389',
        'id': '300389ABS',
        'name': '\u827e\u6bd4\u68ee'
    }, {'code': '600285', 'id': '600285LRZY', 'name': '\u7f9a\u9510\u5236\u836f'}, {
        'code': '000966',
        'id': '000966CYDL',
        'name': '\u957f\u6e90\u7535\u529b'
    }, {'code': '600585', 'id': '600585HLSN', 'name': '\u6d77\u87ba\u6c34\u6ce5'}, {
        'code': '002778',
        'id': '002778GKSH',
        'name': '\u9ad8\u79d1\u77f3\u5316'
    }, {'code': '601600', 'id': '601600ZGLY', 'name': '\u4e2d\u56fd\u94dd\u4e1a'}, {
        'code': '002251',
        'id': '002251B B G',
        'name': '\u6b65 \u6b65 \u9ad8'
    }, {'code': '000070', 'id': '000070TFXX', 'name': '\u7279\u53d1\u4fe1\u606f'}, {
        'code': '000726',
        'id': '000726L T\uff21',
        'name': '\u9c81 \u6cf0\uff21'
    }, {'code': '002221', 'id': '002221DHNY', 'name': '\u4e1c\u534e\u80fd\u6e90'}, {
        'code': '300067',
        'id': '300067ANQ',
        'name': '\u5b89\u8bfa\u5176'
    }, {'code': '002077', 'id': '002077DGGF', 'name': '\u5927\u6e2f\u80a1\u4efd'}, {
        'code': '000666',
        'id': '000666JWFJ',
        'name': '\u7ecf\u7eac\u7eba\u673a'
    }, {'code': '002629', 'id': '002629RZYF', 'name': '\u4ec1\u667a\u6cb9\u670d'}, {
        'code': '002705',
        'id': '002705XBGF',
        'name': '\u65b0\u5b9d\u80a1\u4efd'
    }, {'code': '300208', 'id': '300208HSZS', 'name': '\u6052\u987a\u4f17\u6607'}, {
        'code': '600088',
        'id': '600088ZSCM',
        'name': '\u4e2d\u89c6\u4f20\u5a92'
    }, {'code': '603999', 'id': '603999DZCM', 'name': '\u8bfb\u8005\u4f20\u5a92'}, {
        'code': '002713',
        'id': '002713DYRS',
        'name': '\u4e1c\u6613\u65e5\u76db'
    }, {'code': '601177', 'id': '601177HCQJ', 'name': '\u676d\u9f7f\u524d\u8fdb'}, {
        'code': '002211',
        'id': '002211HDXC',
        'name': '\u5b8f\u8fbe\u65b0\u6750'
    }, {'code': '600363', 'id': '600363LCGD', 'name': '\u8054\u521b\u5149\u7535'}, {
        'code': '000401',
        'id': '000401JDSN',
        'name': '\u5180\u4e1c\u6c34\u6ce5'
    }, {'code': '002093', 'id': '002093GMKJ', 'name': '\u56fd\u8109\u79d1\u6280'}, {
        'code': '300032',
        'id': '300032JLJD',
        'name': '\u91d1\u9f99\u673a\u7535'
    }, {'code': '600717', 'id': '600717TJG', 'name': '\u5929\u6d25\u6e2f'}, {
        'code': '600660',
        'id': '600660FYBL',
        'name': '\u798f\u8000\u73bb\u7483'
    }, {'code': '002132', 'id': '002132HXKJ', 'name': '\u6052\u661f\u79d1\u6280'}, {
        'code': '600093',
        'id': '600093HJGF',
        'name': '\u79be\u5609\u80a1\u4efd'
    }, {'code': '600351', 'id': '600351YBYY', 'name': '\u4e9a\u5b9d\u836f\u4e1a'}, {
        'code': '000557',
        'id': '000557XBCY',
        'name': '\u897f\u90e8\u521b\u4e1a'
    }, {'code': '600873', 'id': '600873MHSW', 'name': '\u6885\u82b1\u751f\u7269'}, {
        'code': '300271',
        'id': '300271HYRJ',
        'name': '\u534e\u5b87\u8f6f\u4ef6'
    }, {'code': '002411', 'id': '002411BKGF', 'name': '\u5fc5\u5eb7\u80a1\u4efd'}, {
        'code': '600369',
        'id': '600369XNZQ',
        'name': '\u897f\u5357\u8bc1\u5238'
    }, {'code': '000421', 'id': '000421NJGY', 'name': '\u5357\u4eac\u516c\u7528'}, {
        'code': '600259',
        'id': '600259GSYS',
        'name': '\u5e7f\u665f\u6709\u8272'
    }, {'code': '600385', 'id': '600385SDJT', 'name': '\u5c71\u4e1c\u91d1\u6cf0'}, {
        'code': '600900',
        'id': '600900CJDL',
        'name': '\u957f\u6c5f\u7535\u529b'
    }, {'code': '300236', 'id': '300236SHXY', 'name': '\u4e0a\u6d77\u65b0\u9633'}, {
        'code': '002502',
        'id': '002502HWWH',
        'name': '\u9a85\u5a01\u6587\u5316'
    }, {'code': '600398', 'id': '600398HLZJ', 'name': '\u6d77\u6f9c\u4e4b\u5bb6'}, {
        'code': '600167',
        'id': '600167LMKG',
        'name': '\u8054\u7f8e\u63a7\u80a1'
    }, {'code': '600284', 'id': '600284PDJS', 'name': '\u6d66\u4e1c\u5efa\u8bbe'}, {
        'code': '601100',
        'id': '601100HLYY',
        'name': '\u6052\u7acb\u6db2\u538b'
    }, {'code': '600308', 'id': '600308HTGF', 'name': '\u534e\u6cf0\u80a1\u4efd'}, {
        'code': '002086',
        'id': '002086DFHY',
        'name': '\u4e1c\u65b9\u6d77\u6d0b'
    }, {'code': '000613', 'id': '000613DDHA', 'name': '\u5927\u4e1c\u6d77A'}, {
        'code': '002165',
        'id': '002165H B L',
        'name': '\u7ea2 \u5b9d \u4e3d'
    }, {'code': '002782', 'id': '002782KLK', 'name': '\u53ef\u7acb\u514b'}, {
        'code': '300339',
        'id': '300339RHRJ',
        'name': '\u6da6\u548c\u8f6f\u4ef6'
    }, {'code': '002014', 'id': '002014YXGF', 'name': '\u6c38\u65b0\u80a1\u4efd'}, {
        'code': '000767',
        'id': '000767ZZDL',
        'name': '\u6f33\u6cfd\u7535\u529b'
    }, {'code': '000825', 'id': '000825TGBX', 'name': '\u592a\u94a2\u4e0d\u9508'}, {
        'code': '002260',
        'id': '002260DATH',
        'name': '\u5fb7\u5965\u901a\u822a'
    }, {'code': '600227', 'id': '600227CTH', 'name': '\u8d64\u5929\u5316'}, {
        'code': '600837',
        'id': '600837HTZQ',
        'name': '\u6d77\u901a\u8bc1\u5238'
    }, {'code': '603026', 'id': '603026SDSH', 'name': '\u77f3\u5927\u80dc\u534e'}, {
        'code': '300453',
        'id': '300453SXYL',
        'name': '\u4e09\u946b\u533b\u7597'
    }, {'code': '600446', 'id': '600446JZGF', 'name': '\u91d1\u8bc1\u80a1\u4efd'}, {
        'code': '300418',
        'id': '300418KLWW',
        'name': '\u6606\u4ed1\u4e07\u7ef4'
    }, {'code': '600099', 'id': '600099LHGF', 'name': '\u6797\u6d77\u80a1\u4efd'}, {
        'code': '002457',
        'id': '002457QLGY',
        'name': '\u9752\u9f99\u7ba1\u4e1a'
    }, {'code': '002336', 'id': '002336*STRL', 'name': '*ST\u4eba\u4e50'}, {
        'code': '002514',
        'id': '002514BXKJ',
        'name': '\u5b9d\u99a8\u79d1\u6280'
    }, {'code': '600746', 'id': '600746JSSP', 'name': '\u6c5f\u82cf\u7d22\u666e'}, {
        'code': '000837',
        'id': '000837QCJC',
        'name': '\u79e6\u5ddd\u673a\u5e8a'
    }, {'code': '300234', 'id': '300234KEXC', 'name': '\u5f00\u5c14\u65b0\u6750'}, {
        'code': '600777',
        'id': '600777XCNY',
        'name': '\u65b0\u6f6e\u80fd\u6e90'
    }, {'code': '600183', 'id': '600183SYKJ', 'name': '\u751f\u76ca\u79d1\u6280'}, {
        'code': '600794',
        'id': '600794BSKJ',
        'name': '\u4fdd\u7a0e\u79d1\u6280'
    }, {'code': '000793', 'id': '000793HWCM', 'name': '\u534e\u95fb\u4f20\u5a92'}, {
        'code': '300417',
        'id': '300417NHYQ',
        'name': '\u5357\u534e\u4eea\u5668'
    }, {'code': '600706', 'id': '600706QJWL', 'name': '\u66f2\u6c5f\u6587\u65c5'}, {
        'code': '600745',
        'id': '600745ZYGF',
        'name': '\u4e2d\u8335\u80a1\u4efd'
    }, {'code': '603009', 'id': '603009BTKJ', 'name': '\u5317\u7279\u79d1\u6280'}, {
        'code': '600959',
        'id': '600959JSYX',
        'name': '\u6c5f\u82cf\u6709\u7ebf'
    }, {'code': '600202', 'id': '600202HKD', 'name': '\u54c8\u7a7a\u8c03'}, {
        'code': '300151',
        'id': '300151CHKJ',
        'name': '\u660c\u7ea2\u79d1\u6280'
    }, {'code': '603111', 'id': '603111KNJD', 'name': '\u5eb7\u5c3c\u673a\u7535'}, {
        'code': '000568',
        'id': '000568LZLJ',
        'name': '\u6cf8\u5dde\u8001\u7a96'
    }, {'code': '601717', 'id': '601717ZMJ', 'name': '\u90d1\u7164\u673a'}, {
        'code': '000558',
        'id': '000558LYTY',
        'name': '\u83b1\u8335\u4f53\u80b2'
    }, {'code': '600403', 'id': '600403DYNY', 'name': '\u5927\u6709\u80fd\u6e90'}, {
        'code': '600969',
        'id': '600969CDGJ',
        'name': '\u90f4\u7535\u56fd\u9645'
    }, {'code': '000400', 'id': '000400XJDQ', 'name': '\u8bb8\u7ee7\u7535\u6c14'}, {
        'code': '601369',
        'id': '601369SGDL',
        'name': '\u9655\u9f13\u52a8\u529b'
    }, {'code': '601069', 'id': '601069XBHJ', 'name': '\u897f\u90e8\u9ec4\u91d1'}, {
        'code': '603010',
        'id': '603010WSGF',
        'name': '\u4e07\u76db\u80a1\u4efd'
    }, {'code': '600418', 'id': '600418JHQC', 'name': '\u6c5f\u6dee\u6c7d\u8f66'}, {
        'code': '002111',
        'id': '002111WHGT',
        'name': '\u5a01\u6d77\u5e7f\u6cf0'
    }, {'code': '002645', 'id': '002645HHKJ', 'name': '\u534e\u5b8f\u79d1\u6280'}, {
        'code': '600367',
        'id': '600367HXFZ',
        'name': '\u7ea2\u661f\u53d1\u5c55'
    }, {'code': '002768', 'id': '002768GEGF', 'name': '\u56fd\u6069\u80a1\u4efd'}, {
        'code': '600779',
        'id': '600779SJF',
        'name': '\u6c34\u4e95\u574a'
    }, {'code': '600966', 'id': '600966BHZY', 'name': '\u535a\u6c47\u7eb8\u4e1a'}, {
        'code': '300130',
        'id': '300130XGD',
        'name': '\u65b0\u56fd\u90fd'
    }, {'code': '300369', 'id': '300369LMKJ', 'name': '\u7eff\u76df\u79d1\u6280'}, {
        'code': '600085',
        'id': '600085TRT',
        'name': '\u540c\u4ec1\u5802'
    }, {'code': '002714', 'id': '002714MYGF', 'name': '\u7267\u539f\u80a1\u4efd'}, {
        'code': '000014',
        'id': '000014SHGF',
        'name': '\u6c99\u6cb3\u80a1\u4efd'
    }, {'code': '000836', 'id': '000836XMKJ', 'name': '\u946b\u8302\u79d1\u6280'}, {
        'code': '603456',
        'id': '603456JZYY',
        'name': '\u4e5d\u6d32\u836f\u4e1a'
    }, {'code': '002254', 'id': '002254THXC', 'name': '\u6cf0\u548c\u65b0\u6750'}, {
        'code': '600560',
        'id': '600560JZTZ',
        'name': '\u91d1\u81ea\u5929\u6b63'
    }, {'code': '000869', 'id': '000869Z Y\uff21', 'name': '\u5f20 \u88d5\uff21'}, {
        'code': '002446',
        'id': '002446SLTX',
        'name': '\u76db\u8def\u901a\u4fe1'
    }, {'code': '300008', 'id': '300008THFW', 'name': '\u5929\u6d77\u9632\u52a1'}, {
        'code': '300274',
        'id': '300274YGDY',
        'name': '\u9633\u5149\u7535\u6e90'
    }, {'code': '300377', 'id': '300377YSS', 'name': '\u8d62\u65f6\u80dc'}, {
        'code': '300406',
        'id': '300406JQSW',
        'name': '\u4e5d\u5f3a\u751f\u7269'
    }, {'code': '600063', 'id': '600063WWGX', 'name': '\u7696\u7ef4\u9ad8\u65b0'}, {
        'code': '600257',
        'id': '600257DHGF',
        'name': '\u5927\u6e56\u80a1\u4efd'
    }, {'code': '002108', 'id': '002108CZMZ', 'name': '\u6ca7\u5dde\u660e\u73e0'}, {
        'code': '002498',
        'id': '002498HLGF',
        'name': '\u6c49\u7f06\u80a1\u4efd'
    }, {'code': '300415', 'id': '300415YZM', 'name': '\u4f0a\u4e4b\u5bc6'}, {
        'code': '000503',
        'id': '000503HHKG',
        'name': '\u6d77\u8679\u63a7\u80a1'
    }, {'code': '601985', 'id': '601985ZGHD', 'name': '\u4e2d\u56fd\u6838\u7535'}, {
        'code': '300384',
        'id': '300384SLHP',
        'name': '\u4e09\u8054\u8679\u666e'
    }, {'code': '600252', 'id': '600252ZHJT', 'name': '\u4e2d\u6052\u96c6\u56e2'}, {
        'code': '601599',
        'id': '601599LGWH',
        'name': '\u9e7f\u6e2f\u6587\u5316'
    }, {'code': '002135', 'id': '002135DNWJ', 'name': '\u4e1c\u5357\u7f51\u67b6'}, {
        'code': '002230',
        'id': '002230KDXF',
        'name': '\u79d1\u5927\u8baf\u98de'
    }, {'code': '600387', 'id': '600387HYGF', 'name': '\u6d77\u8d8a\u80a1\u4efd'}, {
        'code': '600887',
        'id': '600887YLGF',
        'name': '\u4f0a\u5229\u80a1\u4efd'
    }, {'code': '002112', 'id': '002112SBKJ', 'name': '\u4e09\u53d8\u79d1\u6280'}, {
        'code': '300173',
        'id': '300173ZHSD',
        'name': '\u667a\u6167\u677e\u5fb7'
    }, {'code': '600221', 'id': '600221HNHK', 'name': '\u6d77\u5357\u822a\u7a7a'}, {
        'code': '600727',
        'id': '600727LBHG',
        'name': '\u9c81\u5317\u5316\u5de5'
    }, {'code': '300108', 'id': '300108SLGF', 'name': '\u53cc\u9f99\u80a1\u4efd'}, {
        'code': '600958',
        'id': '600958DFZQ',
        'name': '\u4e1c\u65b9\u8bc1\u5238'
    }, {'code': '603979', 'id': '603979JCX', 'name': '\u91d1\u8bda\u4fe1'}, {
        'code': '002104',
        'id': '002104HBGF',
        'name': '\u6052\u5b9d\u80a1\u4efd'
    }, {'code': '002273', 'id': '002273SJGD', 'name': '\u6c34\u6676\u5149\u7535'}, {
        'code': '000589',
        'id': '000589QLT\uff21',
        'name': '\u9ed4\u8f6e\u80ce\uff21'
    }, {'code': '300496', 'id': '300496ZKCD', 'name': '\u4e2d\u79d1\u521b\u8fbe'}, {
        'code': '603019',
        'id': '603019ZKSG',
        'name': '\u4e2d\u79d1\u66d9\u5149'
    }, {'code': '002706', 'id': '002706LXDQ', 'name': '\u826f\u4fe1\u7535\u5668'}, {
        'code': '300146',
        'id': '300146TCBJ',
        'name': '\u6c64\u81e3\u500d\u5065'
    }, {'code': '002751', 'id': '002751YSZS', 'name': '\u6613\u5c1a\u5c55\u793a'}, {
        'code': '300063',
        'id': '300063TLJT',
        'name': '\u5929\u9f99\u96c6\u56e2'
    }, {'code': '300421', 'id': '300421LXGF', 'name': '\u529b\u661f\u80a1\u4efd'}, {
        'code': '002693',
        'id': '002693SCYY',
        'name': '\u53cc\u6210\u836f\u4e1a'
    }, {'code': '000521', 'id': '000521MLDQ', 'name': '\u7f8e\u83f1\u7535\u5668'}, {
        'code': '002276',
        'id': '002276WMGF',
        'name': '\u4e07\u9a6c\u80a1\u4efd'
    }, {'code': '002360', 'id': '002360TDHG', 'name': '\u540c\u5fb7\u5316\u5de5'}, {
        'code': '600425',
        'id': '600425QSJH',
        'name': '\u9752\u677e\u5efa\u5316'
    }, {'code': '601800', 'id': '601800ZGJJ', 'name': '\u4e2d\u56fd\u4ea4\u5efa'}, {
        'code': '000403',
        'id': '000403STSH',
        'name': 'ST\u751f\u5316'
    }, {'code': '000949', 'id': '000949XXHX', 'name': '\u65b0\u4e61\u5316\u7ea4'}, {
        'code': '002117',
        'id': '002117DGGF',
        'name': '\u4e1c\u6e2f\u80a1\u4efd'
    }, {'code': '002205', 'id': '002205GTGF', 'name': '\u56fd\u7edf\u80a1\u4efd'}, {
        'code': '600127',
        'id': '600127JJMY',
        'name': '\u91d1\u5065\u7c73\u4e1a'
    }, {'code': '603328', 'id': '603328YDDZ', 'name': '\u4f9d\u987f\u7535\u5b50'}, {
        'code': '002512',
        'id': '002512DHZN',
        'name': '\u8fbe\u534e\u667a\u80fd'
    }, {'code': '002672', 'id': '002672DJHB', 'name': '\u4e1c\u6c5f\u73af\u4fdd'}, {
        'code': '600177',
        'id': '600177YGE',
        'name': '\u96c5\u6208\u5c14'
    }, {'code': '002440', 'id': '002440RTGF', 'name': '\u95f0\u571f\u80a1\u4efd'}, {
        'code': '000530',
        'id': '000530DLGF',
        'name': '\u5927\u51b7\u80a1\u4efd'
    }, {'code': '002030', 'id': '002030DAJY', 'name': '\u8fbe\u5b89\u57fa\u56e0'}, {
        'code': '002123',
        'id': '002123MWRX',
        'name': '\u68a6\u7f51\u8363\u4fe1'
    }, {'code': '002139', 'id': '002139TBGF', 'name': '\u62d3\u90a6\u80a1\u4efd'}, {
        'code': '000970',
        'id': '000970ZKSH',
        'name': '\u4e2d\u79d1\u4e09\u73af'
    }, {'code': '300051', 'id': '300051SWHL', 'name': '\u4e09\u4e94\u4e92\u8054'}, {
        'code': '600666',
        'id': '600666ARD',
        'name': '\u5965\u745e\u5fb7'
    }, {'code': '601288', 'id': '601288NYYX', 'name': '\u519c\u4e1a\u94f6\u884c'}, {
        'code': '600396',
        'id': '600396JSGF',
        'name': '\u91d1\u5c71\u80a1\u4efd'
    }, {'code': '002204', 'id': '002204DLZG', 'name': '\u5927\u8fde\u91cd\u5de5'}, {
        'code': '002722',
        'id': '002722JLGF',
        'name': '\u91d1\u8f6e\u80a1\u4efd'
    }, {'code': '601668', 'id': '601668ZGJZ', 'name': '\u4e2d\u56fd\u5efa\u7b51'}, {
        'code': '300124',
        'id': '300124HCJZ',
        'name': '\u6c47\u5ddd\u6280\u672f'
    }, {'code': '600073', 'id': '600073SHML', 'name': '\u4e0a\u6d77\u6885\u6797'}, {
        'code': '600216',
        'id': '600216ZJYY',
        'name': '\u6d59\u6c5f\u533b\u836f'
    }, {'code': '600138', 'id': '600138ZQL', 'name': '\u4e2d\u9752\u65c5'}, {
        'code': '600090',
        'id': '600090TJT',
        'name': '\u540c\u6d4e\u5802'
    }, {'code': '002174', 'id': '002174YZWL', 'name': '\u6e38\u65cf\u7f51\u7edc'}, {
        'code': '600509',
        'id': '600509TFNY',
        'name': '\u5929\u5bcc\u80fd\u6e90'
    }, {'code': '002068', 'id': '002068HMGF', 'name': '\u9ed1\u732b\u80a1\u4efd'}, {
        'code': '600826',
        'id': '600826LSGF',
        'name': '\u5170\u751f\u80a1\u4efd'
    }, {'code': '603558', 'id': '603558JSJT', 'name': '\u5065\u76db\u96c6\u56e2'}, {
        'code': '603788',
        'id': '603788NBGF',
        'name': '\u5b81\u6ce2\u9ad8\u53d1'
    }, {'code': '600467', 'id': '600467HDJ', 'name': '\u597d\u5f53\u5bb6'}, {
        'code': '600810',
        'id': '600810SMGF',
        'name': '\u795e\u9a6c\u80a1\u4efd'
    }, {'code': '601388', 'id': '601388YQZY', 'name': '\u6021\u7403\u8d44\u6e90'}, {
        'code': '000008',
        'id': '000008SZGT',
        'name': '\u795e\u5dde\u9ad8\u94c1'
    }, {'code': '000061', 'id': '000061N C P', 'name': '\u519c \u4ea7 \u54c1'}, {
        'code': '002657',
        'id': '002657ZKJC',
        'name': '\u4e2d\u79d1\u91d1\u8d22'
    }, {'code': '002785', 'id': '002785WLS', 'name': '\u4e07\u91cc\u77f3'}, {
        'code': '300187',
        'id': '300187YQHB',
        'name': '\u6c38\u6e05\u73af\u4fdd'
    }, {'code': '600982', 'id': '600982NBRD', 'name': '\u5b81\u6ce2\u70ed\u7535'}, {
        'code': '600860',
        'id': '600860JCGF',
        'name': '\u4eac\u57ce\u80a1\u4efd'
    }, {'code': '002481', 'id': '002481STSP', 'name': '\u53cc\u5854\u98df\u54c1'}, {
        'code': '002534',
        'id': '002534HGGF',
        'name': '\u676d\u9505\u80a1\u4efd'
    }, {'code': '600550', 'id': '600550BBDQ', 'name': '\u4fdd\u53d8\u7535\u6c14'}, {
        'code': '002422',
        'id': '002422KLYY',
        'name': '\u79d1\u4f26\u836f\u4e1a'
    }, {'code': '002008', 'id': '002008DZJG', 'name': '\u5927\u65cf\u6fc0\u5149'}, {
        'code': '000099',
        'id': '000099ZXHZ',
        'name': '\u4e2d\u4fe1\u6d77\u76f4'
    }, {'code': '600495', 'id': '600495JXCZ', 'name': '\u664b\u897f\u8f66\u8f74'}, {
        'code': '601718',
        'id': '601718JHJT',
        'name': '\u9645\u534e\u96c6\u56e2'
    }, {'code': '002536', 'id': '002536XBGF', 'name': '\u897f\u6cf5\u80a1\u4efd'}, {
        'code': '300485',
        'id': '300485SSYY',
        'name': '\u8d5b\u5347\u836f\u4e1a'
    }, {'code': '300351', 'id': '300351YGDQ', 'name': '\u6c38\u8d35\u7535\u5668'}, {
        'code': '300158',
        'id': '300158ZDZY',
        'name': '\u632f\u4e1c\u5236\u836f'
    }, {'code': '000679', 'id': '000679DLYY', 'name': '\u5927\u8fde\u53cb\u8c0a'}, {
        'code': '300135',
        'id': '300135BLGJ',
        'name': '\u5b9d\u5229\u56fd\u9645'
    }, {'code': '000669', 'id': '000669JHNY', 'name': '\u91d1\u9e3f\u80fd\u6e90'}, {
        'code': '002543',
        'id': '002543WHDQ',
        'name': '\u4e07\u548c\u7535\u6c14'
    }, {'code': '600761', 'id': '600761AHHL', 'name': '\u5b89\u5fbd\u5408\u529b'}, {
        'code': '600580',
        'id': '600580WLDQ',
        'name': '\u5367\u9f99\u7535\u6c14'
    }, {'code': '603779', 'id': '603779WLGF', 'name': '\u5a01\u9f99\u80a1\u4efd'}, {
        'code': '600729',
        'id': '600729ZQBH',
        'name': '\u91cd\u5e86\u767e\u8d27'
    }, {'code': '600219', 'id': '600219NSLY', 'name': '\u5357\u5c71\u94dd\u4e1a'}, {
        'code': '600460',
        'id': '600460SLW',
        'name': '\u58eb\u5170\u5fae'
    }, {'code': '601118', 'id': '601118HNXX', 'name': '\u6d77\u5357\u6a61\u80f6'}, {
        'code': '601888',
        'id': '601888ZGGL',
        'name': '\u4e2d\u56fd\u56fd\u65c5'
    }, {'code': '300037', 'id': '300037XZB', 'name': '\u65b0\u5b99\u90a6'}, {
        'code': '002364',
        'id': '002364ZHDQ',
        'name': '\u4e2d\u6052\u7535\u6c14'
    }, {'code': '002540', 'id': '002540YTKJ', 'name': '\u4e9a\u592a\u79d1\u6280'}, {
        'code': '300028',
        'id': '300028JYKJ',
        'name': '\u91d1\u4e9a\u79d1\u6280'
    }, {'code': '002426', 'id': '002426SLJM', 'name': '\u80dc\u5229\u7cbe\u5bc6'}, {
        'code': '600704',
        'id': '600704WCZD',
        'name': '\u7269\u4ea7\u4e2d\u5927'
    }, {'code': '000420', 'id': '000420JLHX', 'name': '\u5409\u6797\u5316\u7ea4'}, {
        'code': '603993',
        'id': '603993LYMY',
        'name': '\u6d1b\u9633\u94bc\u4e1a'
    }, {'code': '000612', 'id': '000612JZWF', 'name': '\u7126\u4f5c\u4e07\u65b9'}, {
        'code': '600064',
        'id': '600064NJGK',
        'name': '\u5357\u4eac\u9ad8\u79d1'
    }, {'code': '000939', 'id': '000939KDST', 'name': '\u51ef\u8fea\u751f\u6001'}, {
        'code': '601799',
        'id': '601799XYGF',
        'name': '\u661f\u5b87\u80a1\u4efd'
    }, {'code': '600448', 'id': '600448HFGF', 'name': '\u534e\u7eba\u80a1\u4efd'}, {
        'code': '002616',
        'id': '002616CQJT',
        'name': '\u957f\u9752\u96c6\u56e2'
    }, {'code': '002292', 'id': '002292AFYL', 'name': '\u5965\u98de\u5a31\u4e50'}, {
        'code': '002403',
        'id': '002403ASD',
        'name': '\u7231\u4ed5\u8fbe'
    }, {'code': '000850', 'id': '000850HMGF', 'name': '\u534e\u8302\u80a1\u4efd'}, {
        'code': '601518',
        'id': '601518JLGS',
        'name': '\u5409\u6797\u9ad8\u901f'
    }, {'code': '601008', 'id': '601008LYG', 'name': '\u8fde\u4e91\u6e2f'}, {
        'code': '600229',
        'id': '600229CSCM',
        'name': '\u57ce\u5e02\u4f20\u5a92'
    }, {'code': '600280', 'id': '600280ZYSC', 'name': '\u4e2d\u592e\u5546\u573a'}, {
        'code': '002239',
        'id': '002239ATJ',
        'name': '\u5965\u7279\u4f73'
    }, {'code': '000528', 'id': '000528L G', 'name': '\u67f3 \u5de5'}, {
        'code': '000554',
        'id': '000554TSSY',
        'name': '\u6cf0\u5c71\u77f3\u6cb9'
    }, {'code': '603699', 'id': '603699NWGF', 'name': '\u7ebd\u5a01\u80a1\u4efd'}, {
        'code': '600525',
        'id': '600525CYJT',
        'name': '\u957f\u56ed\u96c6\u56e2'
    }, {'code': '000778', 'id': '000778XXZG', 'name': '\u65b0\u5174\u94f8\u7ba1'}, {
        'code': '000886',
        'id': '000886HNGS',
        'name': '\u6d77\u5357\u9ad8\u901f'
    }, {'code': '300263', 'id': '300263LHJN', 'name': '\u9686\u534e\u8282\u80fd'}, {
        'code': '603027',
        'id': '603027QHWY',
        'name': '\u5343\u79be\u5473\u4e1a'
    }, {'code': '600556', 'id': '600556HQKJ', 'name': '\u6167\u7403\u79d1\u6280'}, {
        'code': '002142',
        'id': '002142NBYX',
        'name': '\u5b81\u6ce2\u94f6\u884c'
    }, {'code': '002255', 'id': '002255HLZG', 'name': '\u6d77\u9646\u91cd\u5de5'}, {
        'code': '300042',
        'id': '300042LKKJ',
        'name': '\u6717\u79d1\u79d1\u6280'
    }, {'code': '000899', 'id': '000899GNGF', 'name': '\u8d63\u80fd\u80a1\u4efd'}, {
        'code': '300409',
        'id': '300409DSJZ',
        'name': '\u9053\u6c0f\u6280\u672f'
    }, {'code': '002002', 'id': '002002HDXY', 'name': '\u9e3f\u8fbe\u5174\u4e1a'}, {
        'code': '600567',
        'id': '600567SYZY',
        'name': '\u5c71\u9e70\u7eb8\u4e1a'
    }, {'code': '300319', 'id': '300319MJKJ', 'name': '\u9ea6\u6377\u79d1\u6280'}, {
        'code': '002544',
        'id': '002544JSKJ',
        'name': '\u6770\u8d5b\u79d1\u6280'
    }, {'code': '002707', 'id': '002707ZXLY', 'name': '\u4f17\u4fe1\u65c5\u6e38'}, {
        'code': '300368',
        'id': '300368HJGF',
        'name': '\u6c47\u91d1\u80a1\u4efd'
    }, {'code': '002561', 'id': '002561XJH', 'name': '\u5f90\u5bb6\u6c47'}, {
        'code': '002681',
        'id': '002681FDKJ',
        'name': '\u594b\u8fbe\u79d1\u6280'
    }, {'code': '600983', 'id': '600983HEP', 'name': '\u60e0\u800c\u6d66'}, {
        'code': '000411',
        'id': '000411YTJT',
        'name': '\u82f1\u7279\u96c6\u56e2'
    }, {'code': '300255', 'id': '300255CSYY', 'name': '\u5e38\u5c71\u836f\u4e1a'}, {
        'code': '300061',
        'id': '300061KNT',
        'name': '\u5eb7\u8010\u7279'
    }, {'code': '000520', 'id': '000520CHFH', 'name': '\u957f\u822a\u51e4\u51f0'}, {
        'code': '002803',
        'id': '002803JHGF',
        'name': '\u5409\u5b8f\u80a1\u4efd'
    }, {'code': '000963', 'id': '000963HDYY', 'name': '\u534e\u4e1c\u533b\u836f'}, {
        'code': '600987',
        'id': '600987HMGF',
        'name': '\u822a\u6c11\u80a1\u4efd'
    }, {'code': '000968', 'id': '000968*STMQ', 'name': '*ST\u7164\u6c14'}, {
        'code': '002180',
        'id': '002180APK',
        'name': '\u827e\u6d3e\u514b'
    }, {'code': '600060', 'id': '600060HXDQ', 'name': '\u6d77\u4fe1\u7535\u5668'}, {
        'code': '000759',
        'id': '000759ZBJT',
        'name': '\u4e2d\u767e\u96c6\u56e2'
    }, {'code': '600322', 'id': '600322TFFZ', 'name': '\u5929\u623f\u53d1\u5c55'}, {
        'code': '002313',
        'id': '002313RHTX',
        'name': '\u65e5\u6d77\u901a\u8baf'
    }, {'code': '000042', 'id': '000042ZZKG', 'name': '\u4e2d\u6d32\u63a7\u80a1'}, {
        'code': '002153',
        'id': '002153SJXX',
        'name': '\u77f3\u57fa\u4fe1\u606f'
    }, {'code': '002347', 'id': '002347TEZG', 'name': '\u6cf0\u5c14\u91cd\u5de5'}, {
        'code': '300314',
        'id': '300314DWYL',
        'name': '\u6234\u7ef4\u533b\u7597'
    }, {'code': '600111', 'id': '600111BFXT', 'name': '\u5317\u65b9\u7a00\u571f'}, {
        'code': '600119',
        'id': '600119CJTZ',
        'name': '\u957f\u6c5f\u6295\u8d44'
    }, {'code': '002435', 'id': '002435CJRF', 'name': '\u957f\u6c5f\u6da6\u53d1'}, {
        'code': '600356',
        'id': '600356HFZY',
        'name': '\u6052\u4e30\u7eb8\u4e1a'
    }, {'code': '000708', 'id': '000708DYTG', 'name': '\u5927\u51b6\u7279\u94a2'}, {
        'code': '600193',
        'id': '600193CXZY',
        'name': '\u521b\u5174\u8d44\u6e90'
    }, {'code': '002729', 'id': '002729HLL', 'name': '\u597d\u5229\u6765'}, {
        'code': '600112',
        'id': '600112TCKG',
        'name': '\u5929\u6210\u63a7\u80a1'
    }, {'code': '002719', 'id': '002719MQE', 'name': '\u9ea6\u8da3\u5c14'}, {
        'code': '300422',
        'id': '300422BSK',
        'name': '\u535a\u4e16\u79d1'
    }, {'code': '600797', 'id': '600797ZDWX', 'name': '\u6d59\u5927\u7f51\u65b0'}, {
        'code': '601808',
        'id': '601808ZHYF',
        'name': '\u4e2d\u6d77\u6cb9\u670d'
    }, {'code': '002412', 'id': '002412HSZY', 'name': '\u6c49\u68ee\u5236\u836f'}, {
        'code': '603315',
        'id': '603315FAGF',
        'name': '\u798f\u978d\u80a1\u4efd'
    }, {'code': '601579', 'id': '601579HJS', 'name': '\u4f1a\u7a3d\u5c71'}, {
        'code': '002089',
        'id': '002089X H Y',
        'name': '\u65b0 \u6d77 \u5b9c'
    }, {'code': '600851', 'id': '600851HXGF', 'name': '\u6d77\u6b23\u80a1\u4efd'}, {
        'code': '300296',
        'id': '300296LYD',
        'name': '\u5229\u4e9a\u5fb7'
    }, {'code': '601933', 'id': '601933YHCS', 'name': '\u6c38\u8f89\u8d85\u5e02'}, {
        'code': '601139',
        'id': '601139SZRQ',
        'name': '\u6df1\u5733\u71c3\u6c14'
    }, {'code': '603508', 'id': '603508SWLK', 'name': '\u601d\u7ef4\u5217\u63a7'}, {
        'code': '002225',
        'id': '002225PNGF',
        'name': '\u6fee\u8010\u80a1\u4efd'
    }, {'code': '601258', 'id': '601258PDJT', 'name': '\u5e9e\u5927\u96c6\u56e2'}, {
        'code': '300113',
        'id': '300113SWKJ',
        'name': '\u987a\u7f51\u79d1\u6280'
    }, {'code': '002739', 'id': '002739WDYX', 'name': '\u4e07\u8fbe\u9662\u7ebf'}, {
        'code': '300433',
        'id': '300433LSKJ',
        'name': '\u84dd\u601d\u79d1\u6280'
    }, {'code': '600720', 'id': '600720QLS', 'name': '\u7941\u8fde\u5c71'}, {
        'code': '002076',
        'id': '002076X L T',
        'name': '\u96ea \u83b1 \u7279'
    }, {'code': '600345', 'id': '600345CJTX', 'name': '\u957f\u6c5f\u901a\u4fe1'}, {
        'code': '600995',
        'id': '600995WSDL',
        'name': '\u6587\u5c71\u7535\u529b'
    }, {'code': '601222', 'id': '601222LYNY', 'name': '\u6797\u6d0b\u80fd\u6e90'}, {
        'code': '002501',
        'id': '002501LYJZ',
        'name': '\u5229\u6e90\u7cbe\u5236'
    }, {'code': '002312', 'id': '002312STKG', 'name': '\u4e09\u6cf0\u63a7\u80a1'}, {
        'code': '002568',
        'id': '002568BRGF',
        'name': '\u767e\u6da6\u80a1\u4efd'
    }, {'code': '600466', 'id': '600466LGFZ', 'name': '\u84dd\u5149\u53d1\u5c55'}, {
        'code': '000809',
        'id': '000809TLXC',
        'name': '\u94c1\u5cad\u65b0\u57ce'
    }, {'code': '002727', 'id': '002727YXT', 'name': '\u4e00\u5fc3\u5802'}, {
        'code': '000564',
        'id': '000564XAMS',
        'name': '\u897f\u5b89\u6c11\u751f'
    }, {'code': '300033', 'id': '300033THS', 'name': '\u540c\u82b1\u987a'}, {
        'code': '000762',
        'id': '000762XCKY',
        'name': '\u897f\u85cf\u77ff\u4e1a'
    }, {'code': '002533', 'id': '002533JBDG', 'name': '\u91d1\u676f\u7535\u5de5'}, {
        'code': '002776',
        'id': '002776BBL',
        'name': '\u67cf\u5821\u9f99'
    }, {'code': '600568', 'id': '600568ZZYL', 'name': '\u4e2d\u73e0\u533b\u7597'}, {
        'code': '600210',
        'id': '600210ZJQY',
        'name': '\u7d2b\u6c5f\u4f01\u4e1a'
    }, {'code': '002755', 'id': '002755DFXX', 'name': '\u4e1c\u65b9\u65b0\u661f'}, {
        'code': '603678',
        'id': '603678HJDZ',
        'name': '\u706b\u70ac\u7535\u5b50'
    }, {'code': '002167', 'id': '002167DFGY', 'name': '\u4e1c\u65b9\u9506\u4e1a'}, {
        'code': '300068',
        'id': '300068NDDY',
        'name': '\u5357\u90fd\u7535\u6e90'
    }, {'code': '000671', 'id': '000671Y G C', 'name': '\u9633 \u5149 \u57ce'}, {
        'code': '600775',
        'id': '600775NJXM',
        'name': '\u5357\u4eac\u718a\u732b'
    }, {'code': '601700', 'id': '601700FFGF', 'name': '\u98ce\u8303\u80a1\u4efd'}, {
        'code': '000988',
        'id': '000988HGKJ',
        'name': '\u534e\u5de5\u79d1\u6280'
    }, {'code': '300170', 'id': '300170HDXX', 'name': '\u6c49\u5f97\u4fe1\u606f'}, {
        'code': '000831',
        'id': '000831*STWX',
        'name': '*ST\u4e94\u7a00'
    }, {'code': '600186', 'id': '600186LHJK', 'name': '\u83b2\u82b1\u5065\u5eb7'}, {
        'code': '600778',
        'id': '600778YHJT',
        'name': '\u53cb\u597d\u96c6\u56e2'
    }, {'code': '601113', 'id': '601113HDGF', 'name': '\u534e\u9f0e\u80a1\u4efd'}, {
        'code': '002069',
        'id': '002069*STZD',
        'name': '*ST\u7350\u5c9b'
    }, {'code': '600552', 'id': '600552KSKJ', 'name': '\u51ef\u76db\u79d1\u6280'}, {
        'code': '601566',
        'id': '601566JMW',
        'name': '\u4e5d\u7267\u738b'
    }, {'code': '000657', 'id': '000657ZWGX', 'name': '\u4e2d\u94a8\u9ad8\u65b0'}, {
        'code': '601616',
        'id': '601616GDDQ',
        'name': '\u5e7f\u7535\u7535\u6c14'
    }, {'code': '001696', 'id': '001696ZSDL', 'name': '\u5b97\u7533\u52a8\u529b'}, {
        'code': '600498',
        'id': '600498FHTX',
        'name': '\u70fd\u706b\u901a\u4fe1'
    }, {'code': '603000', 'id': '603000RMW', 'name': '\u4eba\u6c11\u7f51'}, {
        'code': '600089',
        'id': '600089TBDG',
        'name': '\u7279\u53d8\u7535\u5de5'
    }, {'code': '603099', 'id': '603099CBS', 'name': '\u957f\u767d\u5c71'}, {
        'code': '600292',
        'id': '600292YDHB',
        'name': '\u8fdc\u8fbe\u73af\u4fdd'
    }, {'code': '002256', 'id': '002256CHJH', 'name': '\u5f69\u8679\u7cbe\u5316'}, {
        'code': '600583',
        'id': '600583HYGC',
        'name': '\u6d77\u6cb9\u5de5\u7a0b'
    }, {'code': '002664', 'id': '002664XZDJ', 'name': '\u4fe1\u8d28\u7535\u673a'}, {
        'code': '300143',
        'id': '300143XHSW',
        'name': '\u661f\u6cb3\u751f\u7269'
    }, {'code': '300449', 'id': '300449HBGK', 'name': '\u6c49\u90a6\u9ad8\u79d1'}, {
        'code': '002228',
        'id': '002228HXBZ',
        'name': '\u5408\u5174\u5305\u88c5'
    }, {'code': '600979', 'id': '600979GAAZ', 'name': '\u5e7f\u5b89\u7231\u4f17'}, {
        'code': '002275',
        'id': '002275GLSJ',
        'name': '\u6842\u6797\u4e09\u91d1'
    }, {'code': '300070', 'id': '300070BSY', 'name': '\u78a7\u6c34\u6e90'}, {
        'code': '002557',
        'id': '002557QQSP',
        'name': '\u6d3d\u6d3d\u98df\u54c1'
    }, {'code': '600486', 'id': '600486YNHG', 'name': '\u626c\u519c\u5316\u5de5'}, {
        'code': '002001',
        'id': '002001X H C',
        'name': '\u65b0 \u548c \u6210'
    }, {'code': '300098', 'id': '300098GXX', 'name': '\u9ad8\u65b0\u5174'}, {
        'code': '300435',
        'id': '300435ZTGF',
        'name': '\u4e2d\u6cf0\u80a1\u4efd'
    }, {'code': '603969', 'id': '603969YLGF', 'name': '\u94f6\u9f99\u80a1\u4efd'}, {
        'code': '002386',
        'id': '002386TYJT',
        'name': '\u5929\u539f\u96c6\u56e2'
    }, {'code': '300486', 'id': '300486DJZN', 'name': '\u4e1c\u6770\u667a\u80fd'}, {
        'code': '000776',
        'id': '000776GFZQ',
        'name': '\u5e7f\u53d1\u8bc1\u5238'
    }, {'code': '300452', 'id': '300452SHYF', 'name': '\u5c71\u6cb3\u836f\u8f85'}, {
        'code': '002392',
        'id': '002392BJLE',
        'name': '\u5317\u4eac\u5229\u5c14'
    }, {'code': '601377', 'id': '601377XYZQ', 'name': '\u5174\u4e1a\u8bc1\u5238'}, {
        'code': '000523',
        'id': '000523GZLQ',
        'name': '\u5e7f\u5dde\u6d6a\u5947'
    }, {'code': '000597', 'id': '000597DBZY', 'name': '\u4e1c\u5317\u5236\u836f'}, {
        'code': '600289',
        'id': '600289YYXT',
        'name': '\u4ebf\u9633\u4fe1\u901a'
    }, {'code': '600031', 'id': '600031SYZG', 'name': '\u4e09\u4e00\u91cd\u5de5'}, {
        'code': '600352',
        'id': '600352ZJLS',
        'name': '\u6d59\u6c5f\u9f99\u76db'
    }, {'code': '603023', 'id': '603023WDGF', 'name': '\u5a01\u5e1d\u80a1\u4efd'}, {
        'code': '000525',
        'id': '000525H T Y',
        'name': '\u7ea2 \u592a \u9633'
    }, {'code': '000868', 'id': '000868AKKC', 'name': '\u5b89\u51ef\u5ba2\u8f66'}, {
        'code': '600279',
        'id': '600279ZQGJ',
        'name': '\u91cd\u5e86\u6e2f\u4e5d'
    }, {'code': '600688', 'id': '600688SHSH', 'name': '\u4e0a\u6d77\u77f3\u5316'}, {
        'code': '300206',
        'id': '300206LBYQ',
        'name': '\u7406\u90a6\u4eea\u5668'
    }, {'code': '300337', 'id': '300337YBGF', 'name': '\u94f6\u90a6\u80a1\u4efd'}, {
        'code': '603167',
        'id': '603167BHLD',
        'name': '\u6e24\u6d77\u8f6e\u6e21'
    }, {'code': '300014', 'id': '300014YWLN', 'name': '\u4ebf\u7eac\u9502\u80fd'}, {
        'code': '300261',
        'id': '300261YBHX',
        'name': '\u96c5\u672c\u5316\u5b66'
    }, {'code': '002009', 'id': '002009TQGF', 'name': '\u5929\u5947\u80a1\u4efd'}, {
        'code': '300077',
        'id': '300077GMJZ',
        'name': '\u56fd\u6c11\u6280\u672f'
    }, {'code': '600705', 'id': '600705ZHZB', 'name': '\u4e2d\u822a\u8d44\u672c'}, {
        'code': '002151',
        'id': '002151BDXT',
        'name': '\u5317\u6597\u661f\u901a'
    }, {'code': '600713', 'id': '600713NJYY', 'name': '\u5357\u4eac\u533b\u836f'}, {
        'code': '600537',
        'id': '600537YJGD',
        'name': '\u4ebf\u6676\u5149\u7535'
    }, {'code': '002322', 'id': '002322LGHK', 'name': '\u7406\u5de5\u73af\u79d1'}, {
        'code': '300029',
        'id': '300029TLGD',
        'name': '\u5929\u9f99\u5149\u7535'
    }, {'code': '601992', 'id': '601992JYGF', 'name': '\u91d1\u9685\u80a1\u4efd'}, {
        'code': '600555',
        'id': '600555HHCX',
        'name': '\u6d77\u822a\u521b\u65b0'
    }, {'code': '600895', 'id': '600895ZJGK', 'name': '\u5f20\u6c5f\u9ad8\u79d1'}, {
        'code': '002235',
        'id': '002235ANGF',
        'name': '\u5b89\u59ae\u80a1\u4efd'
    }, {'code': '600050', 'id': '600050ZGLT', 'name': '\u4e2d\u56fd\u8054\u901a'}, {
        'code': '600960',
        'id': '600960BHHS',
        'name': '\u6e24\u6d77\u6d3b\u585e'
    }, {'code': '600243', 'id': '600243QHHD', 'name': '\u9752\u6d77\u534e\u9f0e'}, {
        'code': '600521',
        'id': '600521HHYY',
        'name': '\u534e\u6d77\u836f\u4e1a'
    }, {'code': '600309', 'id': '600309WHHX', 'name': '\u4e07\u534e\u5316\u5b66'}, {
        'code': '000929',
        'id': '000929LZHH',
        'name': '\u5170\u5dde\u9ec4\u6cb3'
    }, {'code': '002786', 'id': '002786YBSX', 'name': '\u94f6\u5b9d\u5c71\u65b0'}, {
        'code': '002038',
        'id': '002038SLYY',
        'name': '\u53cc\u9e6d\u836f\u4e1a'
    }, {'code': '600238', 'id': '600238HNYD', 'name': '\u6d77\u5357\u6930\u5c9b'}, {
        'code': '300015',
        'id': '300015AEYK',
        'name': '\u7231\u5c14\u773c\u79d1'
    }, {'code': '000661', 'id': '000661CCGX', 'name': '\u957f\u6625\u9ad8\u65b0'}, {
        'code': '600754',
        'id': '600754JJGF',
        'name': '\u9526\u6c5f\u80a1\u4efd'
    }, {'code': '600033', 'id': '600033FJGS', 'name': '\u798f\u5efa\u9ad8\u901f'}, {
        'code': '601901',
        'id': '601901FZZQ',
        'name': '\u65b9\u6b63\u8bc1\u5238'
    }, {'code': '002562', 'id': '002562XDKJ', 'name': '\u5144\u5f1f\u79d1\u6280'}, {
        'code': '002646',
        'id': '002646QQKJ',
        'name': '\u9752\u9752\u7a1e\u9152'
    }, {'code': '002119', 'id': '002119KQDZ', 'name': '\u5eb7\u5f3a\u7535\u5b50'}, {
        'code': '300307',
        'id': '300307CXGF',
        'name': '\u6148\u661f\u80a1\u4efd'
    }, {'code': '600587', 'id': '600587XHYL', 'name': '\u65b0\u534e\u533b\u7597'}, {
        'code': '002220',
        'id': '002220TBGF',
        'name': '\u5929\u5b9d\u80a1\u4efd'
    }, {'code': '600503', 'id': '600503HLJZ', 'name': '\u534e\u4e3d\u5bb6\u65cf'}, {
        'code': '600228',
        'id': '600228CJSH',
        'name': '\u660c\u4e5d\u751f\u5316'
    }, {'code': '000919', 'id': '000919JLYY', 'name': '\u91d1\u9675\u836f\u4e1a'}, {
        'code': '603309',
        'id': '603309WLYL',
        'name': '\u7ef4\u529b\u533b\u7597'
    }, {'code': '603077', 'id': '603077HBSW', 'name': '\u548c\u90a6\u751f\u7269'}, {
        'code': '000893',
        'id': '000893DLGJ',
        'name': '\u4e1c\u51cc\u56fd\u9645'
    }, {'code': '002327', 'id': '002327FAN', 'name': '\u5bcc\u5b89\u5a1c'}, {
        'code': '002416',
        'id': '002416ASD',
        'name': '\u7231\u65bd\u5fb7'
    }, {'code': '600423', 'id': '600423LHGF', 'name': '\u67f3\u5316\u80a1\u4efd'}, {
        'code': '600493',
        'id': '600493FZFZ',
        'name': '\u51e4\u7af9\u7eba\u7ec7'
    }, {'code': '000877', 'id': '000877TSGF', 'name': '\u5929\u5c71\u80a1\u4efd'}, {
        'code': '000761',
        'id': '000761BGBC',
        'name': '\u672c\u94a2\u677f\u6750'
    }, {'code': '000667', 'id': '000667MHJT', 'name': '\u7f8e\u597d\u96c6\u56e2'}, {
        'code': '002401',
        'id': '002401ZHKJ',
        'name': '\u4e2d\u6d77\u79d1\u6280'
    }, {'code': '300048', 'id': '300048HKBP', 'name': '\u5408\u5eb7\u53d8\u9891'}, {
        'code': '000882',
        'id': '000882HLGF',
        'name': '\u534e\u8054\u80a1\u4efd'
    }, {'code': '002429', 'id': '002429ZCGF', 'name': '\u5146\u9a70\u80a1\u4efd'}, {
        'code': '600874',
        'id': '600874CYHB',
        'name': '\u521b\u4e1a\u73af\u4fdd'
    }, {'code': '600299', 'id': '600299ADS', 'name': '\u5b89\u8fea\u82cf'}, {
        'code': '601198',
        'id': '601198DXZQ',
        'name': '\u4e1c\u5174\u8bc1\u5238'
    }, {'code': '002334', 'id': '002334YWT', 'name': '\u82f1\u5a01\u817e'}, {
        'code': '002196',
        'id': '002196FZDJ',
        'name': '\u65b9\u6b63\u7535\u673a'
    }, {'code': '603696', 'id': '603696AJSP', 'name': '\u5b89\u8bb0\u98df\u54c1'}, {
        'code': '002362',
        'id': '002362HWKJ',
        'name': '\u6c49\u738b\u79d1\u6280'
    }, {'code': '300001', 'id': '300001TRD', 'name': '\u7279\u9510\u5fb7'}, {
        'code': '300058',
        'id': '300058LSGB',
        'name': '\u84dd\u8272\u5149\u6807'
    }, {'code': '002485', 'id': '002485XNE', 'name': '\u5e0c\u52aa\u5c14'}, {
        'code': '002049',
        'id': '002049ZGGX',
        'name': '\u7d2b\u5149\u56fd\u82af'
    }, {'code': '300320', 'id': '300320HDGF', 'name': '\u6d77\u8fbe\u80a1\u4efd'}, {
        'code': '300342',
        'id': '300342TYJD',
        'name': '\u5929\u94f6\u673a\u7535'
    }, {'code': '603399', 'id': '603399XHL', 'name': '\u65b0\u534e\u9f99'}, {
        'code': '002494',
        'id': '002494HSGF',
        'name': '\u534e\u65af\u80a1\u4efd'
    }, {'code': '002379', 'id': '002379*STLF', 'name': '*ST\u9c81\u4e30'}, {
        'code': '600812',
        'id': '600812HBZY',
        'name': '\u534e\u5317\u5236\u836f'
    }, {'code': '000089', 'id': '000089SZJC', 'name': '\u6df1\u5733\u673a\u573a'}, {
        'code': '300101',
        'id': '300101ZXKJ',
        'name': '\u632f\u82af\u79d1\u6280'
    }, {'code': '002335', 'id': '002335KHHS', 'name': '\u79d1\u534e\u6052\u76db'}, {
        'code': '603898',
        'id': '603898HLK',
        'name': '\u597d\u83b1\u5ba2'
    }, {'code': '300431', 'id': '300431BFJT', 'name': '\u66b4\u98ce\u96c6\u56e2'}, {
        'code': '300289',
        'id': '300289LDM',
        'name': '\u5229\u5fb7\u66fc'
    }, {'code': '600218', 'id': '600218QCDL', 'name': '\u5168\u67f4\u52a8\u529b'}, {
        'code': '300397',
        'id': '300397THFW',
        'name': '\u5929\u548c\u9632\u52a1'
    }, {'code': '600739', 'id': '600739LNCD', 'name': '\u8fbd\u5b81\u6210\u5927'}, {
        'code': '002025',
        'id': '002025HTDQ',
        'name': '\u822a\u5929\u7535\u5668'
    }, {'code': '002420', 'id': '002420YCGF', 'name': '\u6bc5\u660c\u80a1\u4efd'}, {
        'code': '600006',
        'id': '600006DFQC',
        'name': '\u4e1c\u98ce\u6c7d\u8f66'
    }, {'code': '600055', 'id': '600055HRWD', 'name': '\u534e\u6da6\u4e07\u4e1c'}, {
        'code': '600528',
        'id': '600528ZTEJ',
        'name': '\u4e2d\u94c1\u4e8c\u5c40'
    }, {'code': '600604', 'id': '600604SBGX', 'name': '\u5e02\u5317\u9ad8\u65b0'}, {
        'code': '600690',
        'id': '600690QDHE',
        'name': '\u9752\u5c9b\u6d77\u5c14'
    }, {'code': '002154', 'id': '002154B X N', 'name': '\u62a5 \u559c \u9e1f'}, {
        'code': '600893',
        'id': '600893ZHDL',
        'name': '\u4e2d\u822a\u52a8\u529b'
    }, {'code': '000338', 'id': '000338WCDL', 'name': '\u6f4d\u67f4\u52a8\u529b'}, {
        'code': '600526',
        'id': '600526FDHB',
        'name': '\u83f2\u8fbe\u73af\u4fdd'
    }, {'code': '000903', 'id': '000903YNDL', 'name': '\u4e91\u5185\u52a8\u529b'}, {
        'code': '002567',
        'id': '002567TRS',
        'name': '\u5510\u4eba\u795e'
    }, {'code': '002622', 'id': '002622YDJT', 'name': '\u6c38\u5927\u96c6\u56e2'}, {
        'code': '300157',
        'id': '300157HTAP',
        'name': '\u6052\u6cf0\u827e\u666e'
    }, {'code': '002130', 'id': '002130WEHC', 'name': '\u6c83\u5c14\u6838\u6750'}, {
        'code': '002158',
        'id': '002158HZJJ',
        'name': '\u6c49\u949f\u7cbe\u673a'
    }, {'code': '002309', 'id': '002309ZLKJ', 'name': '\u4e2d\u5229\u79d1\u6280'}, {
        'code': '000423',
        'id': '000423DAAX',
        'name': '\u4e1c\u963f\u963f\u80f6'
    }, {'code': '002487', 'id': '002487DJZG', 'name': '\u5927\u91d1\u91cd\u5de5'}, {
        'code': '600836',
        'id': '600836JLSY',
        'name': '\u754c\u9f99\u5b9e\u4e1a'
    }, {'code': '600035', 'id': '600035CTGS', 'name': '\u695a\u5929\u9ad8\u901f'}, {
        'code': '601958',
        'id': '601958JMGF',
        'name': '\u91d1\u94bc\u80a1\u4efd'
    }, {'code': '002242', 'id': '002242JYGF', 'name': '\u4e5d\u9633\u80a1\u4efd'}, {
        'code': '600605',
        'id': '600605HTNY',
        'name': '\u6c47\u901a\u80fd\u6e90'
    }, {'code': '002107', 'id': '002107WHYY', 'name': '\u6c83\u534e\u533b\u836f'}, {
        'code': '300252',
        'id': '300252JXN',
        'name': '\u91d1\u4fe1\u8bfa'
    }, {'code': '002250', 'id': '002250LHKJ', 'name': '\u8054\u5316\u79d1\u6280'}, {
        'code': '603899',
        'id': '603899CGWJ',
        'name': '\u6668\u5149\u6587\u5177'
    }, {'code': '600843', 'id': '600843SGSB', 'name': '\u4e0a\u5de5\u7533\u8d1d'}, {
        'code': '300225',
        'id': '300225JLT',
        'name': '\u91d1\u529b\u6cf0'
    }, {'code': '600990', 'id': '600990SCDZ', 'name': '\u56db\u521b\u7535\u5b50'}, {
        'code': '000678',
        'id': '000678XYZC',
        'name': '\u8944\u9633\u8f74\u627f'
    }, {'code': '002788', 'id': '002788LYYY', 'name': '\u9e6d\u71d5\u533b\u836f'}, {
        'code': '300248',
        'id': '300248XKP',
        'name': '\u65b0\u5f00\u666e'
    }, {'code': '600880', 'id': '600880BRCB', 'name': '\u535a\u745e\u4f20\u64ad'}, {
        'code': '000593',
        'id': '000593DTRQ',
        'name': '\u5927\u901a\u71c3\u6c14'
    }, {'code': '002092', 'id': '002092ZTHX', 'name': '\u4e2d\u6cf0\u5316\u5b66'}, {
        'code': '002039',
        'id': '002039QYDL',
        'name': '\u9ed4\u6e90\u7535\u529b'
    }, {'code': '300348', 'id': '300348CLKJ', 'name': '\u957f\u4eae\u79d1\u6280'}, {
        'code': '603636',
        'id': '603636NWRJ',
        'name': '\u5357\u5a01\u8f6f\u4ef6'
    }, {'code': '600283', 'id': '600283QJSL', 'name': '\u94b1\u6c5f\u6c34\u5229'}, {
        'code': '002397',
        'id': '002397MJGF',
        'name': '\u68a6\u6d01\u80a1\u4efd'
    }, {'code': '300065', 'id': '300065HLX', 'name': '\u6d77\u5170\u4fe1'}, {
        'code': '300055',
        'id': '300055WBD',
        'name': '\u4e07\u90a6\u8fbe'
    }, {'code': '002746', 'id': '002746XTGF', 'name': '\u4ed9\u575b\u80a1\u4efd'}, {
        'code': '603818',
        'id': '603818QMJJ',
        'name': '\u66f2\u7f8e\u5bb6\u5c45'
    }, {'code': '000632', 'id': '000632SMJT', 'name': '\u4e09\u6728\u96c6\u56e2'}, {
        'code': '601608',
        'id': '601608ZXZG',
        'name': '\u4e2d\u4fe1\u91cd\u5de5'
    }, {'code': '002399', 'id': '002399HPR', 'name': '\u6d77\u666e\u745e'}, {
        'code': '300462',
        'id': '300462HMZN',
        'name': '\u534e\u94ed\u667a\u80fd'
    }, {'code': '002444', 'id': '002444JXKJ', 'name': '\u5de8\u661f\u79d1\u6280'}, {
        'code': '002496',
        'id': '002496HFGF',
        'name': '\u8f89\u4e30\u80a1\u4efd'
    }, {'code': '600549', 'id': '600549SMWY', 'name': '\u53a6\u95e8\u94a8\u4e1a'}, {
        'code': '000801',
        'id': '000801SCJZ',
        'name': '\u56db\u5ddd\u4e5d\u6d32'
    }, {'code': '300243', 'id': '300243RFGC', 'name': '\u745e\u4e30\u9ad8\u6750'}, {
        'code': '002711',
        'id': '002711OPZW',
        'name': '\u6b27\u6d66\u667a\u7f51'
    }, {'code': '300024', 'id': '300024JQR', 'name': '\u673a\u5668\u4eba'}, {
        'code': '300034',
        'id': '300034GYGN',
        'name': '\u94a2\u7814\u9ad8\u7eb3'
    }, {'code': '300079', 'id': '300079SMSX', 'name': '\u6570\u7801\u89c6\u8baf'}, {
        'code': '002466',
        'id': '002466TQLY',
        'name': '\u5929\u9f50\u9502\u4e1a'
    }, {'code': '002298', 'id': '002298ZDXL', 'name': '\u4e2d\u7535\u946b\u9f99'}, {
        'code': '600456',
        'id': '600456BTGF',
        'name': '\u5b9d\u949b\u80a1\u4efd'
    }, {'code': '600824', 'id': '600824YMJT', 'name': '\u76ca\u6c11\u96c6\u56e2'}, {
        'code': '002555',
        'id': '002555SQHY',
        'name': '\u4e09\u4e03\u4e92\u5a31'
    }, {'code': '002138', 'id': '002138SLDZ', 'name': '\u987a\u7edc\u7535\u5b50'}, {
        'code': '002321',
        'id': '002321HYNY',
        'name': '\u534e\u82f1\u519c\u4e1a'
    }, {'code': '002430', 'id': '002430HYGF', 'name': '\u676d\u6c27\u80a1\u4efd'}, {
        'code': '002504',
        'id': '002504HGCY',
        'name': '\u5f18\u9ad8\u521b\u610f'
    }, {'code': '002698', 'id': '002698BSGF', 'name': '\u535a\u5b9e\u80a1\u4efd'}, {
        'code': '300288',
        'id': '300288LMXX',
        'name': '\u6717\u739b\u4fe1\u606f'
    }, {'code': '600686', 'id': '600686JLQC', 'name': '\u91d1\u9f99\u6c7d\u8f66'}, {
        'code': '300443',
        'id': '300443JLFD',
        'name': '\u91d1\u96f7\u98ce\u7535'
    }, {'code': '002679', 'id': '002679FJJS', 'name': '\u798f\u5efa\u91d1\u68ee'}, {
        'code': '600405',
        'id': '600405DLY',
        'name': '\u52a8\u529b\u6e90'
    }, {'code': '600109', 'id': '600109GJZQ', 'name': '\u56fd\u91d1\u8bc1\u5238'}, {
        'code': '000672',
        'id': '000672SFSN',
        'name': '\u4e0a\u5cf0\u6c34\u6ce5'
    }, {'code': '002074', 'id': '002074GXGK', 'name': '\u56fd\u8f69\u9ad8\u79d1'}, {
        'code': '300518',
        'id': '300518SXD',
        'name': '\u76db\u8baf\u8fbe'
    }, {'code': '300160', 'id': '300160XQGF', 'name': '\u79c0\u5f3a\u80a1\u4efd'}, {
        'code': '601211',
        'id': '601211GTJA',
        'name': '\u56fd\u6cf0\u541b\u5b89'
    }, {'code': '002589', 'id': '002589RKYY', 'name': '\u745e\u5eb7\u533b\u836f'}, {
        'code': '002484',
        'id': '002484JHGF',
        'name': '\u6c5f\u6d77\u80a1\u4efd'
    }, {'code': '600150', 'id': '600150ZGCB', 'name': '\u4e2d\u56fd\u8239\u8236'}, {
        'code': '000598',
        'id': '000598XRHJ',
        'name': '\u5174\u84c9\u73af\u5883'
    }, {'code': '002738', 'id': '002738ZKZY', 'name': '\u4e2d\u77ff\u8d44\u6e90'}, {
        'code': '300100',
        'id': '300100SLGF',
        'name': '\u53cc\u6797\u80a1\u4efd'
    }, {'code': '000727', 'id': '000727HDKJ', 'name': '\u534e\u4e1c\u79d1\u6280'}, {
        'code': '002177',
        'id': '002177YYGF',
        'name': '\u5fa1\u94f6\u80a1\u4efd'
    }, {'code': '002539', 'id': '002539XDHG', 'name': '\u65b0\u90fd\u5316\u5de5'}, {
        'code': '603222',
        'id': '603222JMZY',
        'name': '\u6d4e\u6c11\u5236\u836f'
    }, {'code': '600220', 'id': '600220JSYG', 'name': '\u6c5f\u82cf\u9633\u5149'}, {
        'code': '000561',
        'id': '000561FHDZ',
        'name': '\u70fd\u706b\u7535\u5b50'
    }, {'code': '000680', 'id': '000680STGF', 'name': '\u5c71\u63a8\u80a1\u4efd'}, {
        'code': '000969',
        'id': '000969ATKJ',
        'name': '\u5b89\u6cf0\u79d1\u6280'
    }, {'code': '002121', 'id': '002121KLDZ', 'name': '\u79d1\u9646\u7535\u5b50'}, {
        'code': '600030',
        'id': '600030ZXZQ',
        'name': '\u4e2d\u4fe1\u8bc1\u5238'
    }, {'code': '600695', 'id': '600695LTTZ', 'name': '\u7eff\u5ead\u6295\u8d44'}, {
        'code': '600858',
        'id': '600858YZGF',
        'name': '\u94f6\u5ea7\u80a1\u4efd'
    }, {'code': '300109', 'id': '300109XKY', 'name': '\u65b0\u5f00\u6e90'}, {
        'code': '300399',
        'id': '300399JTL',
        'name': '\u4eac\u5929\u5229'
    }, {'code': '300092', 'id': '300092KXJD', 'name': '\u79d1\u65b0\u673a\u7535'}, {
        'code': '600072',
        'id': '600072GGGC',
        'name': '\u94a2\u6784\u5de5\u7a0b'
    }, {'code': '600010', 'id': '600010BGGF', 'name': '\u5305\u94a2\u80a1\u4efd'}, {
        'code': '002697',
        'id': '002697HQLS',
        'name': '\u7ea2\u65d7\u8fde\u9501'
    }, {'code': '300470', 'id': '300470RJMF', 'name': '\u65e5\u673a\u5bc6\u5c01'}, {
        'code': '600316',
        'id': '600316HDHK',
        'name': '\u6d2a\u90fd\u822a\u7a7a'
    }, {'code': '002097', 'id': '002097SHZN', 'name': '\u5c71\u6cb3\u667a\u80fd'}, {
        'code': '002577',
        'id': '002577LBKJ',
        'name': '\u96f7\u67cf\u79d1\u6280'
    }, {'code': '000676', 'id': '000676ZDGF', 'name': '\u667a\u5ea6\u80a1\u4efd'}, {
        'code': '000973',
        'id': '000973FSKJ',
        'name': '\u4f5b\u5851\u79d1\u6280'
    }, {'code': '002067', 'id': '002067JXZY', 'name': '\u666f\u5174\u7eb8\u4e1a'}, {
        'code': '603936',
        'id': '603936BMDZ',
        'name': '\u535a\u654f\u7535\u5b50'
    }, {'code': '002372', 'id': '002372WXXC', 'name': '\u4f1f\u661f\u65b0\u6750'}, {
        'code': '002519',
        'id': '002519YHDZ',
        'name': '\u94f6\u6cb3\u7535\u5b50'
    }, {'code': '000685', 'id': '000685ZSGY', 'name': '\u4e2d\u5c71\u516c\u7528'}, {
        'code': '002048',
        'id': '002048NBHX',
        'name': '\u5b81\u6ce2\u534e\u7fd4'
    }, {'code': '600980', 'id': '600980BKKJ', 'name': '\u5317\u77ff\u79d1\u6280'}, {
        'code': '002488',
        'id': '002488JGGF',
        'name': '\u91d1\u56fa\u80a1\u4efd'
    }, {'code': '300376', 'id': '300376YST', 'name': '\u6613\u4e8b\u7279'}, {
        'code': '002554',
        'id': '002554HBP',
        'name': '\u60e0\u535a\u666e'
    }, {'code': '000623', 'id': '000623JLAD', 'name': '\u5409\u6797\u6556\u4e1c'}, {
        'code': '300426',
        'id': '300426TDYS',
        'name': '\u5510\u5fb7\u5f71\u89c6'
    }, {'code': '300127', 'id': '300127YHCT', 'name': '\u94f6\u6cb3\u78c1\u4f53'}, {
        'code': '600875',
        'id': '600875DFDQ',
        'name': '\u4e1c\u65b9\u7535\u6c14'
    }, {'code': '300448', 'id': '300448HYKJ', 'name': '\u6d69\u4e91\u79d1\u6280'}, {
        'code': '300198',
        'id': '300198NCGF',
        'name': '\u7eb3\u5ddd\u80a1\u4efd'
    }, {'code': '601928', 'id': '601928FHCM', 'name': '\u51e4\u51f0\u4f20\u5a92'}, {
        'code': '603569',
        'id': '603569CJWL',
        'name': '\u957f\u4e45\u7269\u6d41'
    }, {'code': '000948', 'id': '000948NTXX', 'name': '\u5357\u5929\u4fe1\u606f'}, {
        'code': '600633',
        'id': '600633ZBCM',
        'name': '\u6d59\u62a5\u4f20\u5a92'
    }, {'code': '600804', 'id': '600804PBS', 'name': '\u9e4f\u535a\u58eb'}, {
        'code': '002520',
        'id': '002520RFJJ',
        'name': '\u65e5\u53d1\u7cbe\u673a'
    }, {'code': '300078', 'id': '300078SCYH', 'name': '\u601d\u521b\u533b\u60e0'}, {
        'code': '300460',
        'id': '300460HLJT',
        'name': '\u60e0\u4f26\u6676\u4f53'
    }, {'code': '600136', 'id': '600136DDMC', 'name': '\u5f53\u4ee3\u660e\u8bda'}, {
        'code': '603101',
        'id': '603101HJSD',
        'name': '\u6c47\u5609\u65f6\u4ee3'
    }, {'code': '600668', 'id': '600668JFJT', 'name': '\u5c16\u5cf0\u96c6\u56e2'}, {
        'code': '600970',
        'id': '600970ZCGJ',
        'name': '\u4e2d\u6750\u56fd\u9645'
    }, {'code': '002050', 'id': '002050SHGF', 'name': '\u4e09\u82b1\u80a1\u4efd'}, {
        'code': '002590',
        'id': '002590WAKJ',
        'name': '\u4e07\u5b89\u79d1\u6280'
    }, {'code': '603015', 'id': '603015HXKJ', 'name': '\u5f18\u8baf\u79d1\u6280'}, {
        'code': '600783',
        'id': '600783LXCT',
        'name': '\u9c81\u4fe1\u521b\u6295'
    }, {'code': '600565', 'id': '600565DMGF', 'name': '\u8fea\u9a6c\u80a1\u4efd'}, {
        'code': '600867',
        'id': '600867THDB',
        'name': '\u901a\u5316\u4e1c\u5b9d'
    }, {'code': '002600', 'id': '002600JFCC', 'name': '\u6c5f\u7c89\u78c1\u6750'}, {
        'code': '600008',
        'id': '600008SCGF',
        'name': '\u9996\u521b\u80a1\u4efd'
    }, {'code': '603018', 'id': '603018SJGF', 'name': '\u8bbe\u8ba1\u80a1\u4efd'}, {
        'code': '600101',
        'id': '600101MXDL',
        'name': '\u660e\u661f\u7535\u529b'
    }, {'code': '600805', 'id': '600805YDTZ', 'name': '\u60a6\u8fbe\u6295\u8d44'}, {
        'code': '002293',
        'id': '002293LLSH',
        'name': '\u7f57\u83b1\u751f\u6d3b'
    }, {'code': '300383', 'id': '300383GHXW', 'name': '\u5149\u73af\u65b0\u7f51'}, {
        'code': '300490',
        'id': '300490HZKJ',
        'name': '\u534e\u81ea\u79d1\u6280'
    }, {'code': '600506', 'id': '600506XLGF', 'name': '\u9999\u68a8\u80a1\u4efd'}, {
        'code': '002709',
        'id': '002709TSCL',
        'name': '\u5929\u8d50\u6750\u6599'
    }, {'code': '002407', 'id': '002407DFD', 'name': '\u591a\u6c1f\u591a'}, {
        'code': '300110',
        'id': '300110HRYY',
        'name': '\u534e\u4ec1\u836f\u4e1a'
    }, {'code': '600488', 'id': '600488TYGF', 'name': '\u5929\u836f\u80a1\u4efd'}, {
        'code': '300117',
        'id': '300117JYGF',
        'name': '\u5609\u5bd3\u80a1\u4efd'
    }, {'code': '600677', 'id': '600677HTTX', 'name': '\u822a\u5929\u901a\u4fe1'}, {
        'code': '601158',
        'id': '601158ZQSW',
        'name': '\u91cd\u5e86\u6c34\u52a1'
    }, {'code': '600211', 'id': '600211XCYY', 'name': '\u897f\u85cf\u836f\u4e1a'}, {
        'code': '601339',
        'id': '601339BLDF',
        'name': '\u767e\u9686\u4e1c\u65b9'
    }, {'code': '600835', 'id': '600835SHJD', 'name': '\u4e0a\u6d77\u673a\u7535'}, {
        'code': '002159',
        'id': '002159STSD',
        'name': '\u4e09\u7279\u7d22\u9053'
    }, {'code': '002609', 'id': '002609JSKJ', 'name': '\u6377\u987a\u79d1\u6280'}, {
        'code': '300501',
        'id': '300501HSXC',
        'name': '\u6d77\u987a\u65b0\u6750'
    }, {'code': '600558', 'id': '600558DXY', 'name': '\u5927\u897f\u6d0b'}, {
        'code': '000429',
        'id': '000429YGS\uff21',
        'name': '\u7ca4\u9ad8\u901f\uff21'
    }, {'code': '000828', 'id': '000828DGKG', 'name': '\u4e1c\u839e\u63a7\u80a1'}, {
        'code': '600323',
        'id': '600323HLHJ',
        'name': '\u701a\u84dd\u73af\u5883'
    }, {'code': '002408', 'id': '002408QXTD', 'name': '\u9f50\u7fd4\u817e\u8fbe'}, {
        'code': '002570',
        'id': '002570BYM',
        'name': '\u8d1d\u56e0\u7f8e'
    }, {'code': '600373', 'id': '600373ZWCM', 'name': '\u4e2d\u6587\u4f20\u5a92'}, {
        'code': '000859',
        'id': '000859GFSY',
        'name': '\u56fd\u98ce\u5851\u4e1a'
    }, {'code': '600802', 'id': '600802FJSN', 'name': '\u798f\u5efa\u6c34\u6ce5'}, {
        'code': '600719',
        'id': '600719DLRD',
        'name': '\u5927\u8fde\u70ed\u7535'
    }, {'code': '002623', 'id': '002623YMD', 'name': '\u4e9a\u739b\u987f'}, {
        'code': '300178',
        'id': '300178TBGJ',
        'name': '\u817e\u90a6\u56fd\u9645'
    }, {'code': '601218', 'id': '601218JXKJ', 'name': '\u5409\u946b\u79d1\u6280'}, {
        'code': '002029',
        'id': '002029Q P L',
        'name': '\u4e03 \u5339 \u72fc'
    }, {'code': '002215', 'id': '002215N P X', 'name': '\u8bfa \u666e \u4fe1'}, {
        'code': '300341',
        'id': '300341MDDQ',
        'name': '\u9ea6\u8fea\u7535\u6c14'
    }, {'code': '300396', 'id': '300396DRYL', 'name': '\u8fea\u745e\u533b\u7597'}, {
        'code': '600822',
        'id': '600822SHWM',
        'name': '\u4e0a\u6d77\u7269\u8d38'
    }, {'code': '300336', 'id': '300336XWH', 'name': '\u65b0\u6587\u5316'}, {
        'code': '600481',
        'id': '600481SLJN',
        'name': '\u53cc\u826f\u8282\u80fd'
    }, {'code': '601989', 'id': '601989ZGZG', 'name': '\u4e2d\u56fd\u91cd\u5de5'}, {
        'code': '000755',
        'id': '000755SXSW',
        'name': '\u5c71\u897f\u4e09\u7ef4'
    }, {'code': '002636', 'id': '002636JAGJ', 'name': '\u91d1\u5b89\u56fd\u7eaa'}, {
        'code': '600642',
        'id': '600642SNGF',
        'name': '\u7533\u80fd\u80a1\u4efd'
    }, {'code': '603798', 'id': '603798KPD', 'name': '\u5eb7\u666e\u987f'}, {
        'code': '000156',
        'id': '000156HSCM',
        'name': '\u534e\u6570\u4f20\u5a92'
    }, {'code': '002460', 'id': '002460GFLY', 'name': '\u8d63\u950b\u9502\u4e1a'}, {
        'code': '002187',
        'id': '002187GBGF',
        'name': '\u5e7f\u767e\u80a1\u4efd'
    }, {'code': '002547', 'id': '002547CXJG', 'name': '\u6625\u5174\u7cbe\u5de5'}, {
        'code': '002223',
        'id': '002223YYYL',
        'name': '\u9c7c\u8dc3\u533b\u7597'
    }, {'code': '600340', 'id': '600340HXXF', 'name': '\u534e\u590f\u5e78\u798f'}, {
        'code': '300366',
        'id': '300366CYXX',
        'name': '\u521b\u610f\u4fe1\u606f'
    }, {'code': '601929', 'id': '601929JSCM', 'name': '\u5409\u89c6\u4f20\u5a92'}, {
        'code': '000777',
        'id': '000777ZHKJ',
        'name': '\u4e2d\u6838\u79d1\u6280'
    }, {'code': '600250', 'id': '600250NFGF', 'name': '\u5357\u7eba\u80a1\u4efd'}, {
        'code': '601766',
        'id': '601766ZGZC',
        'name': '\u4e2d\u56fd\u4e2d\u8f66'
    }, {'code': '002402', 'id': '002402HET', 'name': '\u548c\u800c\u6cf0'}, {
        'code': '000570',
        'id': '000570SCC\uff21',
        'name': '\u82cf\u5e38\u67f4\uff21'
    }, {'code': '002673', 'id': '002673XBZQ', 'name': '\u897f\u90e8\u8bc1\u5238'}, {
        'code': '300335',
        'id': '300335DSGF',
        'name': '\u8fea\u68ee\u80a1\u4efd'
    }, {'code': '603618', 'id': '603618HDGF', 'name': '\u676d\u7535\u80a1\u4efd'}, {
        'code': '002642',
        'id': '002642RZL',
        'name': '\u8363\u4e4b\u8054'
    }, {'code': '300229', 'id': '300229TES', 'name': '\u62d3\u5c14\u601d'}, {
        'code': '002419',
        'id': '002419THSC',
        'name': '\u5929\u8679\u5546\u573a'
    }, {'code': '300272', 'id': '300272KNHB', 'name': '\u5f00\u80fd\u73af\u4fdd'}, {
        'code': '300233',
        'id': '300233JCYY',
        'name': '\u91d1\u57ce\u533b\u836f'
    }, {'code': '600759', 'id': '600759ZJYQ', 'name': '\u6d32\u9645\u6cb9\u6c14'}, {
        'code': '600859',
        'id': '600859WFJ',
        'name': '\u738b\u5e9c\u4e95'
    }, {'code': '300201', 'id': '300201HLZ', 'name': '\u6d77\u4f26\u54f2'}, {
        'code': '300172',
        'id': '300172ZDHB',
        'name': '\u4e2d\u7535\u73af\u4fdd'
    }, {'code': '600415', 'id': '600415XSPC', 'name': '\u5c0f\u5546\u54c1\u57ce'}, {
        'code': '603118',
        'id': '603118GJGF',
        'name': '\u5171\u8fdb\u80a1\u4efd'
    }, {'code': '000040', 'id': '000040DXLT', 'name': '\u4e1c\u65ed\u84dd\u5929'}, {
        'code': '002798',
        'id': '002798DWJJ',
        'name': '\u5e1d\u738b\u6d01\u5177'
    }, {'code': '002078', 'id': '002078TYZY', 'name': '\u592a\u9633\u7eb8\u4e1a'}, {
        'code': '600834',
        'id': '600834STDT',
        'name': '\u7533\u901a\u5730\u94c1'
    }, {'code': '300202', 'id': '300202JLGF', 'name': '\u805a\u9f99\u80a1\u4efd'}, {
        'code': '600518',
        'id': '600518KMYY',
        'name': '\u5eb7\u7f8e\u836f\u4e1a'
    }, {'code': '002202', 'id': '002202JFKJ', 'name': '\u91d1\u98ce\u79d1\u6280'}, {
        'code': '600839',
        'id': '600839SCCH',
        'name': '\u56db\u5ddd\u957f\u8679'
    }, {'code': '000069', 'id': '000069HQC\uff21', 'name': '\u534e\u4fa8\u57ce\uff21'}, {
        'code': '600282',
        'id': '600282NGGF',
        'name': '\u5357\u94a2\u80a1\u4efd'
    }, {'code': '600559', 'id': '600559LBGJ', 'name': '\u8001\u767d\u5e72\u9152'}, {
        'code': '002471',
        'id': '002471ZCKG',
        'name': '\u4e2d\u8d85\u63a7\u80a1'
    }, {'code': '000976', 'id': '000976CHGF', 'name': '\u6625\u6656\u80a1\u4efd'}, {
        'code': '000166',
        'id': '000166SWHY',
        'name': '\u7533\u4e07\u5b8f\u6e90'
    }, {'code': '000972', 'id': '000972ZJJK', 'name': '\u4e2d\u57fa\u5065\u5eb7'}, {
        'code': '000900',
        'id': '000900XDTZ',
        'name': '\u73b0\u4ee3\u6295\u8d44'
    }, {'code': '300094', 'id': '300094GLSC', 'name': '\u56fd\u8054\u6c34\u4ea7'}, {
        'code': '000650',
        'id': '000650RHYY',
        'name': '\u4ec1\u548c\u836f\u4e1a'
    }, {'code': '002790', 'id': '002790RET', 'name': '\u745e\u5c14\u7279'}, {
        'code': '600862',
        'id': '600862ZHGK',
        'name': '\u4e2d\u822a\u9ad8\u79d1'
    }, {'code': '600081', 'id': '600081DFKJ', 'name': '\u4e1c\u98ce\u79d1\u6280'}, {
        'code': '600290',
        'id': '600290HYDQ',
        'name': '\u534e\u4eea\u7535\u6c14'
    }, {'code': '000021', 'id': '000021SKJ', 'name': '\u6df1\u79d1\u6280'}, {
        'code': '000898',
        'id': '000898AGGF',
        'name': '\u978d\u94a2\u80a1\u4efd'
    }, {'code': '000959', 'id': '000959SGGF', 'name': '\u9996\u94a2\u80a1\u4efd'}, {
        'code': '002756',
        'id': '002756YXTG',
        'name': '\u6c38\u5174\u7279\u94a2'
    }, {'code': '600490', 'id': '600490PXZY', 'name': '\u9e4f\u6b23\u8d44\u6e90'}, {
        'code': '002079',
        'id': '002079SZGD',
        'name': '\u82cf\u5dde\u56fa\u951d'
    }, {'code': '600884', 'id': '600884SSGF', 'name': '\u6749\u6749\u80a1\u4efd'}, {
        'code': '603726',
        'id': '603726LDJT',
        'name': '\u6717\u8fea\u96c6\u56e2'
    }, {'code': '002686', 'id': '002686YLD', 'name': '\u4ebf\u5229\u8fbe'}, {
        'code': '002353',
        'id': '002353JRGF',
        'name': '\u6770\u745e\u80a1\u4efd'
    }, {'code': '002021', 'id': '002021ZJZY', 'name': '\u4e2d\u6377\u8d44\u6e90'}, {
        'code': '600399',
        'id': '600399FSTG',
        'name': '\u629a\u987a\u7279\u94a2'
    }, {'code': '000563', 'id': '000563SGT\uff21', 'name': '\u9655\u56fd\u6295\uff21'}, {
        'code': '000829',
        'id': '000829TYKG',
        'name': '\u5929\u97f3\u63a7\u80a1'
    }, {'code': '000957', 'id': '000957ZTKC', 'name': '\u4e2d\u901a\u5ba2\u8f66'}, {
        'code': '601208',
        'id': '601208DCKJ',
        'name': '\u4e1c\u6750\u79d1\u6280'
    }, {'code': '300276', 'id': '300276SFZN', 'name': '\u4e09\u4e30\u667a\u80fd'}, {
        'code': '600231',
        'id': '600231LGGF',
        'name': '\u51cc\u94a2\u80a1\u4efd'
    }, {'code': '000059', 'id': '000059HJGF', 'name': '\u534e\u9526\u80a1\u4efd'}, {
        'code': '600691',
        'id': '600691YMHG',
        'name': '\u9633\u7164\u5316\u5de5'
    }, {'code': '600468', 'id': '600468BLDQ', 'name': '\u767e\u5229\u7535\u6c14'}, {
        'code': '000540',
        'id': '000540ZTCT',
        'name': '\u4e2d\u5929\u57ce\u6295'
    }, {'code': '600370', 'id': '600370SFX', 'name': '\u4e09\u623f\u5df7'}, {
        'code': '002306',
        'id': '002306ZKYW',
        'name': '\u4e2d\u79d1\u4e91\u7f51'
    }, {'code': '601137', 'id': '601137BWHJ', 'name': '\u535a\u5a01\u5408\u91d1'}, {
        'code': '002200',
        'id': '002200YTST',
        'name': '\u4e91\u6295\u751f\u6001'
    }, {'code': '002325', 'id': '002325HTGF', 'name': '\u6d2a\u6d9b\u80a1\u4efd'}, {
        'code': '600128',
        'id': '600128HYGF',
        'name': '\u5f18\u4e1a\u80a1\u4efd'
    }, {'code': '600135', 'id': '600135LKXP', 'name': '\u4e50\u51ef\u80f6\u7247'}, {
        'code': '000631',
        'id': '000631SFHY',
        'name': '\u987a\u53d1\u6052\u4e1a'
    }, {'code': '002787', 'id': '002787HYBZ', 'name': '\u534e\u6e90\u5305\u88c5'}, {
        'code': '600750',
        'id': '600750JZYY',
        'name': '\u6c5f\u4e2d\u836f\u4e1a'
    }, {'code': '300188', 'id': '300188MYBK', 'name': '\u7f8e\u4e9a\u67cf\u79d1'}, {
        'code': '600226',
        'id': '600226SHBK',
        'name': '\u5347\u534e\u62dc\u514b'
    }, {'code': '600595', 'id': '600595ZFSY', 'name': '\u4e2d\u5b5a\u5b9e\u4e1a'}, {
        'code': '300006',
        'id': '300006LMYY',
        'name': '\u83b1\u7f8e\u836f\u4e1a'
    }, {'code': '600496', 'id': '600496JGGG', 'name': '\u7cbe\u5de5\u94a2\u6784'}, {
        'code': '600180',
        'id': '600180RMT',
        'name': '\u745e\u8302\u901a'
    }, {'code': '002216', 'id': '002216SQSP', 'name': '\u4e09\u5168\u98df\u54c1'}, {
        'code': '002247',
        'id': '002247DLXC',
        'name': '\u5e1d\u9f99\u65b0\u6750'
    }, {'code': '002268', 'id': '002268W S T', 'name': '\u536b \u58eb \u901a'}, {
        'code': '603555',
        'id': '603555GRN',
        'name': '\u8d35\u4eba\u9e1f'
    }, {'code': '000690', 'id': '000690BXNY', 'name': '\u5b9d\u65b0\u80fd\u6e90'}, {
        'code': '300251',
        'id': '300251GXCM',
        'name': '\u5149\u7ebf\u4f20\u5a92'
    }, {'code': '600702', 'id': '600702TPSD', 'name': '\u6cb1\u724c\u820d\u5f97'}, {
        'code': '002701',
        'id': '002701ARJ',
        'name': '\u5965\u745e\u91d1'
    }, {'code': '002769', 'id': '002769PLT', 'name': '\u666e\u8def\u901a'}, {
        'code': '300260',
        'id': '300260XLYC',
        'name': '\u65b0\u83b1\u5e94\u6750'
    }, {'code': '603308', 'id': '603308YLGF', 'name': '\u5e94\u6d41\u80a1\u4efd'}, {
        'code': '002271',
        'id': '002271DFYH',
        'name': '\u4e1c\u65b9\u96e8\u8679'
    }, {'code': '300041', 'id': '300041HTXC', 'name': '\u56de\u5929\u65b0\u6750'}, {
        'code': '000566',
        'id': '000566HNHY',
        'name': '\u6d77\u5357\u6d77\u836f'
    }, {'code': '002548', 'id': '002548JXN', 'name': '\u91d1\u65b0\u519c'}, {
        'code': '601966',
        'id': '601966LLLT',
        'name': '\u73b2\u73d1\u8f6e\u80ce'
    }, {'code': '002163', 'id': '002163ZHSX', 'name': '\u4e2d\u822a\u4e09\u946b'}, {
        'code': '002227',
        'id': '002227A T X',
        'name': '\u5965 \u7279 \u8fc5'
    }, {'code': '600295', 'id': '600295EEDS', 'name': '\u9102\u5c14\u591a\u65af'}, {
        'code': '600711',
        'id': '600711STKY',
        'name': '\u76db\u5c6f\u77ff\u4e1a'
    }, {'code': '300195', 'id': '300195CRGF', 'name': '\u957f\u8363\u80a1\u4efd'}, {
        'code': '600366',
        'id': '600366NBYS',
        'name': '\u5b81\u6ce2\u97f5\u5347'
    }, {'code': '000725', 'id': '000725JDF\uff21', 'name': '\u4eac\u4e1c\u65b9\uff21'}, {
        'code': '300245',
        'id': '300245TJKJ',
        'name': '\u5929\u7391\u79d1\u6280'
    }, {'code': '002172', 'id': '002172AYKJ', 'name': '\u6fb3\u6d0b\u79d1\u6280'}, {
        'code': '000738',
        'id': '000738ZHDK',
        'name': '\u4e2d\u822a\u52a8\u63a7'
    }, {'code': '002505', 'id': '002505DKNY', 'name': '\u5927\u5eb7\u519c\u4e1a'}, {
        'code': '002171',
        'id': '002171CJXC',
        'name': '\u695a\u6c5f\u65b0\u6750'
    }, {'code': '300012', 'id': '300012HCJC', 'name': '\u534e\u6d4b\u68c0\u6d4b'}, {
        'code': '600616',
        'id': '600616JFJY',
        'name': '\u91d1\u67ab\u9152\u4e1a'
    }, {'code': '300390', 'id': '300390THCJ', 'name': '\u5929\u534e\u8d85\u51c0'}, {
        'code': '300091',
        'id': '300091JTL',
        'name': '\u91d1\u901a\u7075'
    }, {'code': '300387', 'id': '300387FBGF', 'name': '\u5bcc\u90a6\u80a1\u4efd'}, {
        'code': '000766',
        'id': '000766THJM',
        'name': '\u901a\u5316\u91d1\u9a6c'
    }, {'code': '600328', 'id': '600328LTSY', 'name': '\u5170\u592a\u5b9e\u4e1a'}, {
        'code': '300480',
        'id': '300480GLKJ',
        'name': '\u5149\u529b\u79d1\u6280'
    }, {'code': '300407', 'id': '300407KFDQ', 'name': '\u51ef\u53d1\u7535\u6c14'}, {
        'code': '300343',
        'id': '300343LCHL',
        'name': '\u8054\u521b\u4e92\u8054'
    }, {'code': '600235', 'id': '600235MFTZ', 'name': '\u6c11\u4e30\u7279\u7eb8'}, {
        'code': '600986',
        'id': '600986KDGF',
        'name': '\u79d1\u8fbe\u80a1\u4efd'
    }, {'code': '000026', 'id': '000026FYD\uff21', 'name': '\u98de\u4e9a\u8fbe\uff21'}, {
        'code': '000851',
        'id': '000851GHGF',
        'name': '\u9ad8\u9e3f\u80a1\u4efd'
    }, {'code': '000498', 'id': '000498SDLQ', 'name': '\u5c71\u4e1c\u8def\u6865'}, {
        'code': '002537',
        'id': '002537HLMD',
        'name': '\u6d77\u7acb\u7f8e\u8fbe'
    }, {'code': '300081', 'id': '300081HXYD', 'name': '\u6052\u4fe1\u79fb\u52a8'}, {
        'code': '600326',
        'id': '600326XCTL',
        'name': '\u897f\u85cf\u5929\u8def'
    }, {'code': '000663', 'id': '000663YALY', 'name': '\u6c38\u5b89\u6797\u4e1a'}, {
        'code': '300265',
        'id': '300265TGXL',
        'name': '\u901a\u5149\u7ebf\u7f06'
    }, {'code': '600511', 'id': '600511GYGF', 'name': '\u56fd\u836f\u80a1\u4efd'}, {
        'code': '002456',
        'id': '002456OFG',
        'name': '\u6b27\u83f2\u5149'
    }, {'code': '000753', 'id': '000753ZZFZ', 'name': '\u6f33\u5dde\u53d1\u5c55'}, {
        'code': '002670',
        'id': '002670GSJK',
        'name': '\u56fd\u76db\u91d1\u63a7'
    }, {'code': '600371', 'id': '600371WXDN', 'name': '\u4e07\u5411\u5fb7\u519c'}, {
        'code': '603608',
        'id': '603608TCSS',
        'name': '\u5929\u521b\u65f6\u5c1a'
    }, {'code': '002349', 'id': '002349JHZY', 'name': '\u7cbe\u534e\u5236\u836f'}, {
        'code': '300059',
        'id': '300059DFCF',
        'name': '\u4e1c\u65b9\u8d22\u5bcc'
    }, {'code': '300193', 'id': '300193JSKJ', 'name': '\u4f73\u58eb\u79d1\u6280'}, {
        'code': '002482',
        'id': '002482GTJT',
        'name': '\u5e7f\u7530\u96c6\u56e2'
    }, {'code': '000796', 'id': '000796KSLY', 'name': '\u51ef\u6492\u65c5\u6e38'}, {
        'code': '600108',
        'id': '600108YSJT',
        'name': '\u4e9a\u76db\u96c6\u56e2'
    }, {'code': '000863', 'id': '000863SXGF', 'name': '\u4e09\u6e58\u80a1\u4efd'}, {
        'code': '300016',
        'id': '300016BLYY',
        'name': '\u5317\u9646\u836f\u4e1a'
    }, {'code': '300464', 'id': '300464XHJM', 'name': '\u661f\u5fbd\u7cbe\u5bc6'}, {
        'code': '002628',
        'id': '002628CDLQ',
        'name': '\u6210\u90fd\u8def\u6865'
    }, {'code': '600598', 'id': '600598BDH', 'name': '\u5317\u5927\u8352'}, {
        'code': '002635',
        'id': '002635AJKJ',
        'name': '\u5b89\u6d01\u79d1\u6280'
    }, {'code': '002614', 'id': '002614MFL', 'name': '\u8499\u53d1\u5229'}, {
        'code': '600038',
        'id': '600038ZZGF',
        'name': '\u4e2d\u76f4\u80a1\u4efd'
    }, {'code': '000890', 'id': '000890F E S', 'name': '\u6cd5 \u5c14 \u80dc'}, {
        'code': '600814',
        'id': '600814HZJB',
        'name': '\u676d\u5dde\u89e3\u767e'
    }, {'code': '002166', 'id': '002166LYSW', 'name': '\u83b1\u8335\u751f\u7269'}, {
        'code': '002012',
        'id': '002012KEGF',
        'name': '\u51ef\u6069\u80a1\u4efd'
    }, {'code': '002105', 'id': '002105XLJK', 'name': '\u4fe1\u9686\u5065\u5eb7'}, {
        'code': '600501',
        'id': '600501HTCG',
        'name': '\u822a\u5929\u6668\u5149'
    }, {'code': '300444', 'id': '300444SJDQ', 'name': '\u53cc\u6770\u7535\u6c14'}, {
        'code': '000737',
        'id': '000737NFHG',
        'name': '\u5357\u98ce\u5316\u5de5'
    }, {'code': '002141', 'id': '002141RSCW', 'name': '\u84c9\u80dc\u8d85\u5fae'}, {
        'code': '002243',
        'id': '002243TCLX',
        'name': '\u901a\u4ea7\u4e3d\u661f'
    }, {'code': '300516', 'id': '300516JZY', 'name': '\u4e45\u4e4b\u6d0b'}, {
        'code': '000858',
        'id': '000858W L Y',
        'name': '\u4e94 \u7cae \u6db2'
    }, {'code': '000936', 'id': '000936HXGF', 'name': '\u534e\u897f\u80a1\u4efd'}, {
        'code': '002162',
        'id': '002162YXJK',
        'name': '\u60a6\u5fc3\u5065\u5eb7'
    }, {'code': '000430', 'id': '000430ZJJ', 'name': '\u5f20\u5bb6\u754c'}, {
        'code': '002003',
        'id': '002003WXGF',
        'name': '\u4f1f\u661f\u80a1\u4efd'
    }, {'code': '002495', 'id': '002495JLGF', 'name': '\u4f73\u9686\u80a1\u4efd'}, {
        'code': '002305',
        'id': '002305NGZY',
        'name': '\u5357\u56fd\u7f6e\u4e1a'
    }, {'code': '600543', 'id': '600543MGGF', 'name': '\u83ab\u9ad8\u80a1\u4efd'}, {
        'code': '601607',
        'id': '601607SHYY',
        'name': '\u4e0a\u6d77\u533b\u836f'
    }, {'code': '002245', 'id': '002245AYSC', 'name': '\u6fb3\u6d0b\u987a\u660c'}, {
        'code': '000005',
        'id': '000005SJXY',
        'name': '\u4e16\u7eaa\u661f\u6e90'
    }, {'code': '002626', 'id': '002626JDW', 'name': '\u91d1\u8fbe\u5a01'}, {
        'code': '600353',
        'id': '600353XGGF',
        'name': '\u65ed\u5149\u80a1\u4efd'
    }, {'code': '600291', 'id': '600291XSGF', 'name': '\u897f\u6c34\u80a1\u4efd'}, {
        'code': '002072',
        'id': '002072KRD',
        'name': '\u51ef\u745e\u5fb7'
    }, {'code': '000018', 'id': '000018SZCC', 'name': '\u795e\u5dde\u957f\u57ce'}, {
        'code': '000016',
        'id': '000016SKJ\uff21',
        'name': '\u6df1\u5eb7\u4f73\uff21'
    }, {'code': '600199', 'id': '600199JZZJ', 'name': '\u91d1\u79cd\u5b50\u9152'}, {
        'code': '600485',
        'id': '600485XWJT',
        'name': '\u4fe1\u5a01\u96c6\u56e2'
    }, {'code': '600143', 'id': '600143JFKJ', 'name': '\u91d1\u53d1\u79d1\u6280'}, {
        'code': '600153',
        'id': '600153JFGF',
        'name': '\u5efa\u53d1\u80a1\u4efd'
    }, {'code': '600809', 'id': '600809SXFJ', 'name': '\u5c71\u897f\u6c7e\u9152'}, {
        'code': '002469',
        'id': '002469SWGC',
        'name': '\u4e09\u7ef4\u5de5\u7a0b'
    }, {'code': '002651', 'id': '002651LJGF', 'name': '\u5229\u541b\u80a1\u4efd'}, {
        'code': '600499',
        'id': '600499KDJN',
        'name': '\u79d1\u8fbe\u6d01\u80fd'
    }, {'code': '002084', 'id': '002084HOWY', 'name': '\u6d77\u9e25\u536b\u6d74'}, {
        'code': '600976',
        'id': '600976JMJT',
        'name': '\u5065\u6c11\u96c6\u56e2'
    }, {'code': '000930', 'id': '000930ZLSH', 'name': '\u4e2d\u7cae\u751f\u5316'}, {
        'code': '000722',
        'id': '000722HNFZ',
        'name': '\u6e56\u5357\u53d1\u5c55'
    }, {'code': '300189', 'id': '300189SNJY', 'name': '\u795e\u519c\u57fa\u56e0'}, {
        'code': '300121',
        'id': '300121YGHT',
        'name': '\u9633\u8c37\u534e\u6cf0'
    }, {'code': '600609', 'id': '600609JBQC', 'name': '\u91d1\u676f\u6c7d\u8f66'}, {
        'code': '002374',
        'id': '002374LPGF',
        'name': '\u4e3d\u9e4f\u80a1\u4efd'
    }, {'code': '002073', 'id': '002073RKGF', 'name': '\u8f6f\u63a7\u80a1\u4efd'}, {
        'code': '000750',
        'id': '000750GHZQ',
        'name': '\u56fd\u6d77\u8bc1\u5238'
    }, {'code': '300021', 'id': '300021DYJS', 'name': '\u5927\u79b9\u8282\u6c34'}, {
        'code': '002712',
        'id': '002712SMCM',
        'name': '\u601d\u7f8e\u4f20\u5a92'
    }, {'code': '600215', 'id': '600215CCJK', 'name': '\u957f\u6625\u7ecf\u5f00'}, {
        'code': '002246',
        'id': '002246BHGF',
        'name': '\u5317\u5316\u80a1\u4efd'
    }, {'code': '600297', 'id': '600297GHQC', 'name': '\u5e7f\u6c47\u6c7d\u8f66'}, {
        'code': '300318',
        'id': '300318BHCX',
        'name': '\u535a\u6656\u521b\u65b0'
    }, {'code': '600584', 'id': '600584CDKJ', 'name': '\u957f\u7535\u79d1\u6280'}, {
        'code': '600372',
        'id': '600372ZHDZ',
        'name': '\u4e2d\u822a\u7535\u5b50'
    }, {'code': '000151', 'id': '000151ZCGF', 'name': '\u4e2d\u6210\u80a1\u4efd'}, {
        'code': '600079',
        'id': '600079RFYY',
        'name': '\u4eba\u798f\u533b\u836f'
    }, {'code': '002026', 'id': '002026SDWD', 'name': '\u5c71\u4e1c\u5a01\u8fbe'}, {
        'code': '600611',
        'id': '600611DZJT',
        'name': '\u5927\u4f17\u4ea4\u901a'
    }, {'code': '000633', 'id': '000633*STHJ', 'name': '*ST\u5408\u91d1'}, {
        'code': '000990',
        'id': '000990CZGF',
        'name': '\u8bda\u5fd7\u80a1\u4efd'
    }, {'code': '600619', 'id': '600619HLGF', 'name': '\u6d77\u7acb\u80a1\u4efd'}, {
        'code': '601127',
        'id': '601127XKGF',
        'name': '\u5c0f\u5eb7\u80a1\u4efd'
    }, {'code': '603199', 'id': '603199JHLY', 'name': '\u4e5d\u534e\u65c5\u6e38'}, {
        'code': '600380',
        'id': '600380JKY',
        'name': '\u5065\u5eb7\u5143'
    }, {'code': '603198', 'id': '603198YJGJ', 'name': '\u8fce\u9a7e\u8d21\u9152'}, {
        'code': '002288',
        'id': '002288CHKJ',
        'name': '\u8d85\u534e\u79d1\u6280'
    }, {'code': '000596', 'id': '000596GJGJ', 'name': '\u53e4\u4e95\u8d21\u9152'}, {
        'code': '603998',
        'id': '603998FSZY',
        'name': '\u65b9\u76db\u5236\u836f'
    }, {'code': '000605', 'id': '000605BHGF', 'name': '\u6e24\u6d77\u80a1\u4efd'}, {
        'code': '600392',
        'id': '600392SHZY',
        'name': '\u76db\u548c\u8d44\u6e90'
    }, {'code': '600997', 'id': '600997KLGF', 'name': '\u5f00\u6ee6\u80a1\u4efd'}, {
        'code': '300239',
        'id': '300239DBSW',
        'name': '\u4e1c\u5b9d\u751f\u7269'
    }, {'code': '300242', 'id': '300242MJLH', 'name': '\u660e\u5bb6\u8054\u5408'}, {
        'code': '002680',
        'id': '002680CSSW',
        'name': '\u957f\u751f\u751f\u7269'
    }, {'code': '600141', 'id': '600141XFJT', 'name': '\u5174\u53d1\u96c6\u56e2'}, {
        'code': '000544',
        'id': '000544ZYHB',
        'name': '\u4e2d\u539f\u73af\u4fdd'
    }, {'code': '300363', 'id': '300363BTGF', 'name': '\u535a\u817e\u80a1\u4efd'}, {
        'code': '300436',
        'id': '300436GST',
        'name': '\u5e7f\u751f\u5802'
    }, {'code': '600894', 'id': '600894GRGF', 'name': '\u5e7f\u65e5\u80a1\u4efd'}, {
        'code': '000785',
        'id': '000785WHZS',
        'name': '\u6b66\u6c49\u4e2d\u5546'
    }, {'code': '603299', 'id': '603299JSGF', 'name': '\u4e95\u795e\u80a1\u4efd'}, {
        'code': '002556',
        'id': '002556HLGF',
        'name': '\u8f89\u9686\u80a1\u4efd'
    }, {'code': '600999', 'id': '600999ZSZQ', 'name': '\u62db\u5546\u8bc1\u5238'}, {
        'code': '002437',
        'id': '002437YHYY',
        'name': '\u8a89\u8861\u836f\u4e1a'
    }, {'code': '600096', 'id': '600096YTH', 'name': '\u4e91\u5929\u5316'}, {
        'code': '600838',
        'id': '600838SHJB',
        'name': '\u4e0a\u6d77\u4e5d\u767e'
    }, {'code': '600123', 'id': '600123LHKC', 'name': '\u5170\u82b1\u79d1\u521b'}, {
        'code': '600388',
        'id': '600388LJHB',
        'name': '\u9f99\u51c0\u73af\u4fdd'
    }, {'code': '600463', 'id': '600463KGGF', 'name': '\u7a7a\u6e2f\u80a1\u4efd'}, {
        'code': '600175',
        'id': '600175MDNY',
        'name': '\u7f8e\u90fd\u80fd\u6e90'
    }, {'code': '000425', 'id': '000425XGJX', 'name': '\u5f90\u5de5\u673a\u68b0'}, {
        'code': '002413',
        'id': '002413LKFW',
        'name': '\u96f7\u79d1\u9632\u52a1'
    }, {'code': '002290', 'id': '002290HSXC', 'name': '\u79be\u76db\u65b0\u6750'}, {
        'code': '600223',
        'id': '600223LSZY',
        'name': '\u9c81\u5546\u7f6e\u4e1a'
    }, {'code': '002189', 'id': '002189LDGD', 'name': '\u5229\u8fbe\u5149\u7535'}, {
        'code': '300218',
        'id': '300218ALGF',
        'name': '\u5b89\u5229\u80a1\u4efd'
    }, {'code': '300458', 'id': '300458QZKJ', 'name': '\u5168\u5fd7\u79d1\u6280'}, {
        'code': '300440',
        'id': '300440YDKJ',
        'name': '\u8fd0\u8fbe\u79d1\u6280'
    }, {'code': '002118', 'id': '002118ZXYY', 'name': '\u7d2b\u946b\u836f\u4e1a'}, {
        'code': '002317',
        'id': '002317ZSYY',
        'name': '\u4f17\u751f\u836f\u4e1a'
    }, {'code': '603822', 'id': '603822JAHB', 'name': '\u5609\u6fb3\u73af\u4fdd'}, {
        'code': '600886',
        'id': '600886GTDL',
        'name': '\u56fd\u6295\u7535\u529b'
    }, {'code': '000806', 'id': '000806YHSW', 'name': '\u94f6\u6cb3\u751f\u7269'}, {
        'code': '002538',
        'id': '002538SET',
        'name': '\u53f8\u5c14\u7279'
    }, {'code': '300228', 'id': '300228FRTZ', 'name': '\u5bcc\u745e\u7279\u88c5'}, {
        'code': '300346',
        'id': '300346NDGD',
        'name': '\u5357\u5927\u5149\u7535'
    }, {'code': '300104', 'id': '300104LSW', 'name': '\u4e50\u89c6\u7f51'}, {
        'code': '000920',
        'id': '000920NFHT',
        'name': '\u5357\u65b9\u6c47\u901a'
    }, {'code': '000955', 'id': '000955XLKG', 'name': '\u6b23\u9f99\u63a7\u80a1'}, {
        'code': '600763',
        'id': '600763TCYL',
        'name': '\u901a\u7b56\u533b\u7597'
    }, {'code': '600819', 'id': '600819YPBL', 'name': '\u8000\u76ae\u73bb\u7483'}, {
        'code': '300270',
        'id': '300270ZWDZ',
        'name': '\u4e2d\u5a01\u7535\u5b50'
    }, {'code': '300456', 'id': '300456NWKJ', 'name': '\u8010\u5a01\u79d1\u6280'}, {
        'code': '600742',
        'id': '600742YQFW',
        'name': '\u4e00\u6c7d\u5bcc\u7ef4'
    }, {'code': '000861', 'id': '000861HYGF', 'name': '\u6d77\u5370\u80a1\u4efd'}, {
        'code': '603169',
        'id': '603169LSZZ',
        'name': '\u5170\u77f3\u91cd\u88c5'
    }, {'code': '000410', 'id': '000410SYJC', 'name': '\u6c88\u9633\u673a\u5e8a'}, {
        'code': '000529',
        'id': '000529GHKG',
        'name': '\u5e7f\u5f18\u63a7\u80a1'
    }, {'code': '300358', 'id': '300358CTKJ', 'name': '\u695a\u5929\u79d1\u6280'}, {
        'code': '300140',
        'id': '300140QYZB',
        'name': '\u542f\u6e90\u88c5\u5907'
    }, {'code': '000048', 'id': '000048KDE', 'name': '\u5eb7\u8fbe\u5c14'}, {
        'code': '000616',
        'id': '000616HHTZ',
        'name': '\u6d77\u822a\u6295\u8d44'
    }, {'code': '000686', 'id': '000686DBZQ', 'name': '\u4e1c\u5317\u8bc1\u5238'}, {
        'code': '300325',
        'id': '300325DWXC',
        'name': '\u5fb7\u5a01\u65b0\u6750'
    }, {'code': '002340', 'id': '002340GLM', 'name': '\u683c\u6797\u7f8e'}, {
        'code': '002742',
        'id': '002742SSTC',
        'name': '\u4e09\u5723\u7279\u6750'
    }, {'code': '603377', 'id': '603377DFSS', 'name': '\u4e1c\u65b9\u65f6\u5c1a'}, {
        'code': '600435',
        'id': '600435BFDH',
        'name': '\u5317\u65b9\u5bfc\u822a'
    }, {'code': '603606', 'id': '603606DFDL', 'name': '\u4e1c\u65b9\u7535\u7f06'}, {
        'code': '000301',
        'id': '000301DFSC',
        'name': '\u4e1c\u65b9\u5e02\u573a'
    }, {'code': '300491', 'id': '300491THKJ', 'name': '\u901a\u5408\u79d1\u6280'}, {
        'code': '600477',
        'id': '600477HXGG',
        'name': '\u676d\u8427\u94a2\u6784'
    }, {'code': '600462', 'id': '600462JYGF', 'name': '\u4e5d\u6709\u80a1\u4efd'}, {
        'code': '000417',
        'id': '000417HFBH',
        'name': '\u5408\u80a5\u767e\u8d27'
    }, {'code': '600639', 'id': '600639PDJQ', 'name': '\u6d66\u4e1c\u91d1\u6865'}, {
        'code': '600881',
        'id': '600881YTJT',
        'name': '\u4e9a\u6cf0\u96c6\u56e2'
    }, {'code': '600724', 'id': '600724NBFD', 'name': '\u5b81\u6ce2\u5bcc\u8fbe'}, {
        'code': '600277',
        'id': '600277YLJN',
        'name': '\u4ebf\u5229\u6d01\u80fd'
    }, {'code': '300131', 'id': '300131YTZK', 'name': '\u82f1\u5510\u667a\u63a7'}, {
        'code': '300362',
        'id': '300362TXHJ',
        'name': '\u5929\u7fd4\u73af\u5883'
    }, {'code': '300474', 'id': '300474JJW', 'name': '\u666f\u5609\u5fae'}, {
        'code': '002596',
        'id': '002596HNRZ',
        'name': '\u6d77\u5357\u745e\u6cfd'
    }, {'code': '300010', 'id': '300010LSC', 'name': '\u7acb\u601d\u8fb0'}, {
        'code': '600865',
        'id': '600865BDJT',
        'name': '\u767e\u5927\u96c6\u56e2'
    }, {'code': '300043', 'id': '300043XHYL', 'name': '\u661f\u8f89\u5a31\u4e50'}, {
        'code': '600781',
        'id': '600781FRYY',
        'name': '\u8f85\u4ec1\u836f\u4e1a'
    }, {'code': '600747', 'id': '600747DLKG', 'name': '\u5927\u8fde\u63a7\u80a1'}, {
        'code': '002229',
        'id': '002229HBGF',
        'name': '\u9e3f\u535a\u80a1\u4efd'
    }, {'code': '600749', 'id': '600749XCLY', 'name': '\u897f\u85cf\u65c5\u6e38'}, {
        'code': '600157',
        'id': '600157YTNY',
        'name': '\u6c38\u6cf0\u80fd\u6e90'
    }, {'code': '002500', 'id': '002500SXZQ', 'name': '\u5c71\u897f\u8bc1\u5238'}, {
        'code': '000792',
        'id': '000792YHGF',
        'name': '\u76d0\u6e56\u80a1\u4efd'
    }, {'code': '000695', 'id': '000695BHNY', 'name': '\u6ee8\u6d77\u80fd\u6e90'}, {
        'code': '600067',
        'id': '600067GCDT',
        'name': '\u51a0\u57ce\u5927\u901a'
    }, {'code': '600449', 'id': '600449NXJC', 'name': '\u5b81\u590f\u5efa\u6750'}, {
        'code': '000698',
        'id': '000698SYHG',
        'name': '\u6c88\u9633\u5316\u5de5'
    }, {'code': '603005', 'id': '603005JFKJ', 'name': '\u6676\u65b9\u79d1\u6280'}, {
        'code': '002394',
        'id': '002394LFGF',
        'name': '\u8054\u53d1\u80a1\u4efd'
    }, {'code': '600022', 'id': '600022SDGT', 'name': '\u5c71\u4e1c\u94a2\u94c1'}, {
        'code': '600126',
        'id': '600126HGGF',
        'name': '\u676d\u94a2\u80a1\u4efd'
    }, {'code': '600657', 'id': '600657XDDC', 'name': '\u4fe1\u8fbe\u5730\u4ea7'}, {
        'code': '603600',
        'id': '603600YYGF',
        'name': '\u6c38\u827a\u80a1\u4efd'
    }, {'code': '600170', 'id': '600170SHJG', 'name': '\u4e0a\u6d77\u5efa\u5de5'}, {
        'code': '002308',
        'id': '002308WCGF',
        'name': '\u5a01\u521b\u80a1\u4efd'
    }, {'code': '600513', 'id': '600513LHYY', 'name': '\u8054\u73af\u836f\u4e1a'}, {
        'code': '600273',
        'id': '600273JHNY',
        'name': '\u5609\u5316\u80fd\u6e90'
    }, {'code': '601611', 'id': '601611ZGHJ', 'name': '\u4e2d\u56fd\u6838\u5efa'}, {
        'code': '600765',
        'id': '600765ZHZJ',
        'name': '\u4e2d\u822a\u91cd\u673a'
    }, {'code': '000068', 'id': '000068HKSG', 'name': '\u534e\u63a7\u8d5b\u683c'}, {
        'code': '600184',
        'id': '600184GDGF',
        'name': '\u5149\u7535\u80a1\u4efd'
    }, {'code': '002157', 'id': '002157ZBKJ', 'name': '\u6b63\u90a6\u79d1\u6280'}, {
        'code': '600551',
        'id': '600551SDCB',
        'name': '\u65f6\u4ee3\u51fa\u7248'
    }, {'code': '600992', 'id': '600992GSGF', 'name': '\u8d35\u7ef3\u80a1\u4efd'}, {
        'code': '300479',
        'id': '300479SSDZ',
        'name': '\u795e\u601d\u7535\u5b50'
    }, {'code': '600696', 'id': '600696PTP', 'name': '\u5339\u51f8\u5339'}, {
        'code': '300494',
        'id': '300494STWL',
        'name': '\u76db\u5929\u7f51\u7edc'
    }, {'code': '000833', 'id': '000833GTGF', 'name': '\u8d35\u7cd6\u80a1\u4efd'}, {
        'code': '002300',
        'id': '002300TYDL',
        'name': '\u592a\u9633\u7535\u7f06'
    }, {'code': '600171', 'id': '600171SHBL', 'name': '\u4e0a\u6d77\u8d1d\u5cad'}, {
        'code': '000965',
        'id': '000965TBJJ',
        'name': '\u5929\u4fdd\u57fa\u5efa'
    }, {'code': '300429', 'id': '300429QLXC', 'name': '\u5f3a\u529b\u65b0\u6750'}, {
        'code': '600681',
        'id': '600681BCNY',
        'name': '\u767e\u5ddd\u80fd\u6e90'
    }, {'code': '000732', 'id': '000732THJT', 'name': '\u6cf0\u79be\u96c6\u56e2'}, {
        'code': '002090',
        'id': '002090JZKJ',
        'name': '\u91d1\u667a\u79d1\u6280'
    }, {'code': '600676', 'id': '600676JYGF', 'name': '\u4ea4\u8fd0\u80a1\u4efd'}, {
        'code': '002648',
        'id': '002648WXSH',
        'name': '\u536b\u661f\u77f3\u5316'
    }, {'code': '000712', 'id': '000712JLGF', 'name': '\u9526\u9f99\u80a1\u4efd'}, {
        'code': '000811',
        'id': '000811YTBL',
        'name': '\u70df\u53f0\u51b0\u8f6e'
    }, {'code': '603919', 'id': '603919JHJ', 'name': '\u91d1\u5fbd\u9152'}, {
        'code': '600594',
        'id': '600594YBZY',
        'name': '\u76ca\u4f70\u5236\u836f'
    }, {'code': '600566', 'id': '600566JCYY', 'name': '\u6d4e\u5ddd\u836f\u4e1a'}, {
        'code': '300168',
        'id': '300168WDXX',
        'name': '\u4e07\u8fbe\u4fe1\u606f'
    }, {'code': '600771', 'id': '600771GYY', 'name': '\u5e7f\u8a89\u8fdc'}, {
        'code': '002453',
        'id': '002453TMJH',
        'name': '\u5929\u9a6c\u7cbe\u5316'
    }, {'code': '000780', 'id': '000780PZNY', 'name': '\u5e73\u5e84\u80fd\u6e90'}, {
        'code': '600662',
        'id': '600662QSKG',
        'name': '\u5f3a\u751f\u63a7\u80a1'
    }, {'code': '600664', 'id': '600664HYGF', 'name': '\u54c8\u836f\u80a1\u4efd'}, {
        'code': '002028',
        'id': '002028SYDQ',
        'name': '\u601d\u6e90\u7535\u6c14'
    }, {'code': '002128', 'id': '002128LTMY', 'name': '\u9732\u5929\u7164\u4e1a'}, {
        'code': '600684',
        'id': '600684ZJSY',
        'name': '\u73e0\u6c5f\u5b9e\u4e1a'
    }, {'code': '000933', 'id': '000933*STSH', 'name': '*ST\u795e\u706b'}, {
        'code': '600917',
        'id': '600917ZQRQ',
        'name': '\u91cd\u5e86\u71c3\u6c14'
    }, {'code': '300212', 'id': '300212YHL', 'name': '\u6613\u534e\u5f55'}, {
        'code': '300141',
        'id': '300141HSDQ',
        'name': '\u548c\u987a\u7535\u6c14'
    }, {'code': '600714', 'id': '600714JRKY', 'name': '\u91d1\u745e\u77ff\u4e1a'}, {
        'code': '002689',
        'id': '002689YDZN',
        'name': '\u8fdc\u5927\u667a\u80fd'
    }, {'code': '300438', 'id': '300438PHNY', 'name': '\u9e4f\u8f89\u80fd\u6e90'}, {
        'code': '300381',
        'id': '300381YDL',
        'name': '\u6ea2\u591a\u5229'
    }, {'code': '601099', 'id': '601099TPY', 'name': '\u592a\u5e73\u6d0b'}, {
        'code': '600074',
        'id': '600074BQL',
        'name': '\u4fdd\u5343\u91cc'
    }, {'code': '600864', 'id': '600864HTGF', 'name': '\u54c8\u6295\u80a1\u4efd'}, {
        'code': '002434',
        'id': '002434WLY',
        'name': '\u4e07\u91cc\u626c'
    }, {'code': '002051', 'id': '002051ZGGJ', 'name': '\u4e2d\u5de5\u56fd\u9645'}, {
        'code': '600936',
        'id': '600936GXGD',
        'name': '\u5e7f\u897f\u5e7f\u7535'
    }, {'code': '002091', 'id': '002091JSGT', 'name': '\u6c5f\u82cf\u56fd\u6cf0'}, {
        'code': '002345',
        'id': '002345CHJ',
        'name': '\u6f6e\u5b8f\u57fa'
    }, {'code': '601678', 'id': '601678BHGF', 'name': '\u6ee8\u5316\u80a1\u4efd'}, {
        'code': '600206',
        'id': '600206YYXC',
        'name': '\u6709\u7814\u65b0\u6750'
    }, {'code': '000552', 'id': '000552JYMD', 'name': '\u9756\u8fdc\u7164\u7535'}, {
        'code': '002531',
        'id': '002531TSFN',
        'name': '\u5929\u987a\u98ce\u80fd'
    }, {'code': '601333', 'id': '601333GSTL', 'name': '\u5e7f\u6df1\u94c1\u8def'}, {
        'code': '000996',
        'id': '000996ZGZQ',
        'name': '\u4e2d\u56fd\u4e2d\u671f'
    }, {'code': '600803', 'id': '600803XAGF', 'name': '\u65b0\u5965\u80a1\u4efd'}, {
        'code': '002083',
        'id': '002083FRGF',
        'name': '\u5b5a\u65e5\u80a1\u4efd'
    }, {'code': '000921', 'id': '000921HXKL', 'name': '\u6d77\u4fe1\u79d1\u9f99'}, {
        'code': '300439',
        'id': '300439MKSW',
        'name': '\u7f8e\u5eb7\u751f\u7269'
    }, {'code': '000979', 'id': '000979ZHGF', 'name': '\u4e2d\u5f18\u80a1\u4efd'}, {
        'code': '002082',
        'id': '002082DLXC',
        'name': '\u680b\u6881\u65b0\u6750'
    }, {'code': '000795', 'id': '000795YLH', 'name': '\u82f1\u6d1b\u534e'}, {
        'code': '002618',
        'id': '002618DBKJ',
        'name': '\u4e39\u90a6\u79d1\u6280'
    }, {'code': '002541', 'id': '002541HLGG', 'name': '\u9e3f\u8def\u94a2\u6784'}, {
        'code': '000543',
        'id': '000543WNDL',
        'name': '\u7696\u80fd\u7535\u529b'
    }, {'code': '600507', 'id': '600507FDTG', 'name': '\u65b9\u5927\u7279\u94a2'}, {
        'code': '300182',
        'id': '300182JCGF',
        'name': '\u6377\u6210\u80a1\u4efd'
    }, {'code': '300477', 'id': '300477HZKJ', 'name': '\u5408\u7eb5\u79d1\u6280'}, {
        'code': '603737',
        'id': '603737SKS',
        'name': '\u4e09\u68f5\u6811'
    }, {'code': '603616', 'id': '603616HJHS', 'name': '\u97e9\u5efa\u6cb3\u5c71'}, {
        'code': '002284',
        'id': '002284YTGF',
        'name': '\u4e9a\u592a\u80a1\u4efd'
    }, {'code': '002075', 'id': '002075SGGF', 'name': '\u6c99\u94a2\u80a1\u4efd'}, {
        'code': '600225',
        'id': '600225TJSJ',
        'name': '\u5929\u6d25\u677e\u6c5f'
    }, {'code': '603868', 'id': '603868FKDQ', 'name': '\u98de\u79d1\u7535\u5668'}, {
        'code': '600105',
        'id': '600105YDGF',
        'name': '\u6c38\u9f0e\u80a1\u4efd'
    }, {'code': '000799', 'id': '000799JGJ', 'name': '\u9152\u9b3c\u9152'}, {
        'code': '300018',
        'id': '300018ZYGF',
        'name': '\u4e2d\u5143\u80a1\u4efd'
    }, {'code': '603311', 'id': '603311JHHJ', 'name': '\u91d1\u6d77\u73af\u5883'}, {
        'code': '000090',
        'id': '000090TJJT',
        'name': '\u5929\u5065\u96c6\u56e2'
    }, {'code': '000815', 'id': '000815MLY', 'name': '\u7f8e\u5229\u4e91'}, {
        'code': '600827',
        'id': '600827BLGF',
        'name': '\u767e\u8054\u80a1\u4efd'
    }, {'code': '002527', 'id': '002527XSD', 'name': '\u65b0\u65f6\u8fbe'}, {
        'code': '300057',
        'id': '300057WSGF',
        'name': '\u4e07\u987a\u80a1\u4efd'
    }, {'code': '002034', 'id': '002034M X D', 'name': '\u7f8e \u6b23 \u8fbe'}, {
        'code': '002395',
        'id': '002395SXGF',
        'name': '\u53cc\u8c61\u80a1\u4efd'
    }, {'code': '600200', 'id': '600200JSWZ', 'name': '\u6c5f\u82cf\u5434\u4e2d'}, {
        'code': '600208',
        'id': '600208XHZB',
        'name': '\u65b0\u6e56\u4e2d\u5b9d'
    }, {'code': '600354', 'id': '600354DHZY', 'name': '\u6566\u714c\u79cd\u4e1a'}, {
        'code': '601636',
        'id': '601636QBJT',
        'name': '\u65d7\u6ee8\u96c6\u56e2'
    }, {'code': '300064', 'id': '300064YJGS', 'name': '\u8c6b\u91d1\u521a\u77f3'}, {
        'code': '601666',
        'id': '601666PMGF',
        'name': '\u5e73\u7164\u80a1\u4efd'
    }, {'code': '600679', 'id': '600679SHFH', 'name': '\u4e0a\u6d77\u51e4\u51f0'}, {
        'code': '300139',
        'id': '300139XCKJ',
        'name': '\u6653\u7a0b\u79d1\u6280'
    }, {'code': '002597', 'id': '002597JHSY', 'name': '\u91d1\u79be\u5b9e\u4e1a'}, {
        'code': '000592',
        'id': '000592PTFZ',
        'name': '\u5e73\u6f6d\u53d1\u5c55'
    }, {'code': '300457', 'id': '300457YHKJ', 'name': '\u8d62\u5408\u79d1\u6280'}, {
        'code': '601225',
        'id': '601225SXMY',
        'name': '\u9655\u897f\u7164\u4e1a'
    }, {'code': '601669', 'id': '601669ZGDJ', 'name': '\u4e2d\u56fd\u7535\u5efa'}, {
        'code': '002311',
        'id': '002311HDJT',
        'name': '\u6d77\u5927\u96c6\u56e2'
    }, {'code': '002136', 'id': '002136A N D', 'name': '\u5b89 \u7eb3 \u8fbe'}, {
        'code': '600767',
        'id': '600767YSYL',
        'name': '\u8fd0\u76db\u533b\u7597'
    }, {'code': '600626', 'id': '600626SDGF', 'name': '\u7533\u8fbe\u80a1\u4efd'}, {
        'code': '600716',
        'id': '600716FHGF',
        'name': '\u51e4\u51f0\u80a1\u4efd'
    }, {'code': '000783', 'id': '000783CJZQ', 'name': '\u957f\u6c5f\u8bc1\u5238'}, {
        'code': '002036',
        'id': '002036LCDZ',
        'name': '\u8054\u521b\u7535\u5b50'
    }, {'code': '002234', 'id': '002234MHGF', 'name': '\u6c11\u548c\u80a1\u4efd'}, {
        'code': '300152',
        'id': '300152KRHJ',
        'name': '\u79d1\u878d\u73af\u5883'
    }, {'code': '300174', 'id': '300174YLGF', 'name': '\u5143\u529b\u80a1\u4efd'}, {
        'code': '600841',
        'id': '600841SCGF',
        'name': '\u4e0a\u67f4\u80a1\u4efd'
    }, {'code': '600307', 'id': '600307JGHX', 'name': '\u9152\u94a2\u5b8f\u5174'}, {
        'code': '600077',
        'id': '600077SDGF',
        'name': '\u5b8b\u90fd\u80a1\u4efd'
    }, {'code': '600037', 'id': '600037GHYX', 'name': '\u6b4c\u534e\u6709\u7ebf'}, {
        'code': '002418',
        'id': '002418KSGF',
        'name': '\u5eb7\u76db\u80a1\u4efd'
    }, {'code': '002424', 'id': '002424GZBL', 'name': '\u8d35\u5dde\u767e\u7075'}, {
        'code': '603528',
        'id': '603528DLKJ',
        'name': '\u591a\u4f26\u79d1\u6280'
    }, {'code': '002454', 'id': '002454SZGF', 'name': '\u677e\u829d\u80a1\u4efd'}, {
        'code': '300004',
        'id': '300004NFGF',
        'name': '\u5357\u98ce\u80a1\u4efd'
    }, {'code': '300517', 'id': '300517HBZK', 'name': '\u6d77\u6ce2\u91cd\u79d1'}, {
        'code': '601999',
        'id': '601999CBCM',
        'name': '\u51fa\u7248\u4f20\u5a92'
    }, {'code': '600592', 'id': '600592LXGF', 'name': '\u9f99\u6eaa\u80a1\u4efd'}, {
        'code': '300511',
        'id': '300511XRSW',
        'name': '\u96ea\u6995\u751f\u7269'
    }, {'code': '601908', 'id': '601908JYT', 'name': '\u4eac\u8fd0\u901a'}, {
        'code': '002736',
        'id': '002736GXZQ',
        'name': '\u56fd\u4fe1\u8bc1\u5238'
    }, {'code': '600602', 'id': '600602YSZL', 'name': '\u4e91\u8d5b\u667a\u8054'}, {
        'code': '002432',
        'id': '002432JAYL',
        'name': '\u4e5d\u5b89\u533b\u7597'
    }, {'code': '600641', 'id': '600641WYQY', 'name': '\u4e07\u4e1a\u4f01\u4e1a'}, {
        'code': '002369',
        'id': '002369ZYKJ',
        'name': '\u5353\u7ffc\u79d1\u6280'
    }, {'code': '300301', 'id': '300301CFJT', 'name': '\u957f\u65b9\u96c6\u56e2'}, {
        'code': '600694',
        'id': '600694DSGF',
        'name': '\u5927\u5546\u80a1\u4efd'
    }, {'code': '002791', 'id': '002791JLWJ', 'name': '\u575a\u6717\u4e94\u91d1'}, {
        'code': '000967',
        'id': '000967YFHJ',
        'name': '\u76c8\u5cf0\u73af\u5883'
    }, {'code': '300347', 'id': '300347TGYY', 'name': '\u6cf0\u683c\u533b\u836f'}, {
        'code': '000533',
        'id': '000533W J L',
        'name': '\u4e07 \u5bb6 \u4e50'
    }, {'code': '600791', 'id': '600791JNZY', 'name': '\u4eac\u80fd\u7f6e\u4e1a'}, {
        'code': '002264',
        'id': '002264X H D',
        'name': '\u65b0 \u534e \u90fd'
    }, {'code': '601996', 'id': '601996FLJT', 'name': '\u4e30\u6797\u96c6\u56e2'}, {
        'code': '600586',
        'id': '600586JJKJ',
        'name': '\u91d1\u6676\u79d1\u6280'
    }, {'code': '300074', 'id': '300074HPGF', 'name': '\u534e\u5e73\u80a1\u4efd'}, {
        'code': '600967',
        'id': '600967BFCY',
        'name': '\u5317\u65b9\u521b\u4e1a'
    }, {'code': '000017', 'id': '000017SZHA', 'name': '\u6df1\u4e2d\u534eA'}, {
        'code': '000838',
        'id': '000838CXFZ',
        'name': '\u8d22\u4fe1\u53d1\u5c55'
    }, {'code': '002348', 'id': '002348GLGF', 'name': '\u9ad8\u4e50\u80a1\u4efd'}, {
        'code': '603901',
        'id': '603901YCZN',
        'name': '\u6c38\u521b\u667a\u80fd'
    }, {'code': '603339', 'id': '603339SFLL', 'name': '\u56db\u65b9\u51b7\u94fe'}, {
        'code': '002133',
        'id': '002133GYJT',
        'name': '\u5e7f\u5b87\u96c6\u56e2'
    }, {'code': '603188', 'id': '603188YBGF', 'name': '\u4e9a\u90a6\u80a1\u4efd'}, {
        'code': '603869',
        'id': '603869BBWL',
        'name': '\u5317\u90e8\u6e7e\u65c5'
    }, {'code': '002343', 'id': '002343CWCM', 'name': '\u6148\u6587\u4f20\u5a92'}, {
        'code': '600239',
        'id': '600239YNCT',
        'name': '\u4e91\u5357\u57ce\u6295'
    }, {'code': '002431', 'id': '002431ZLGF', 'name': '\u68d5\u6988\u80a1\u4efd'}, {
        'code': '002792',
        'id': '002792TYTX',
        'name': '\u901a\u5b87\u901a\u8baf'
    }, {'code': '000718', 'id': '000718SNHQ', 'name': '\u82cf\u5b81\u73af\u7403'}, {
        'code': '600774',
        'id': '600774HSJT',
        'name': '\u6c49\u5546\u96c6\u56e2'
    }, {'code': '300030', 'id': '300030YPYL', 'name': '\u9633\u666e\u533b\u7597'}, {
        'code': '600389',
        'id': '600389JSGF',
        'name': '\u6c5f\u5c71\u80a1\u4efd'
    }, {'code': '300026', 'id': '300026HRYY', 'name': '\u7ea2\u65e5\u836f\u4e1a'}, {
        'code': '002551',
        'id': '002551SRYL',
        'name': '\u5c1a\u8363\u533b\u7597'
    }, {'code': '000608', 'id': '000608YGGF', 'name': '\u9633\u5149\u80a1\u4efd'}, {
        'code': '600068',
        'id': '600068GZB',
        'name': '\u845b\u6d32\u575d'
    }, {'code': '000007', 'id': '000007QXH', 'name': '\u5168\u65b0\u597d'}, {
        'code': '002277',
        'id': '002277YAGF',
        'name': '\u53cb\u963f\u80a1\u4efd'
    }, {'code': '601555', 'id': '601555DWZQ', 'name': '\u4e1c\u5434\u8bc1\u5238'}, {
        'code': '600628',
        'id': '600628XSJ',
        'name': '\u65b0\u4e16\u754c'
    }, {'code': '603589', 'id': '603589KZJ', 'name': '\u53e3\u5b50\u7a96'}, {
        'code': '002285',
        'id': '002285SLX',
        'name': '\u4e16\u8054\u884c'
    }, {'code': '002565', 'id': '002565SHLX', 'name': '\u4e0a\u6d77\u7eff\u65b0'}, {
        'code': '600082',
        'id': '600082HTFZ',
        'name': '\u6d77\u6cf0\u53d1\u5c55'
    }, {'code': '601688', 'id': '601688HTZQ', 'name': '\u534e\u6cf0\u8bc1\u5238'}, {
        'code': '002667',
        'id': '002667AZGF',
        'name': '\u978d\u91cd\u80a1\u4efd'
    }, {'code': '300333', 'id': '300333ZRKJ', 'name': '\u5146\u65e5\u79d1\u6280'}, {
        'code': '002203',
        'id': '002203HLGF',
        'name': '\u6d77\u4eae\u80a1\u4efd'
    }, {'code': '002291', 'id': '002291XQL', 'name': '\u661f\u671f\u516d'}, {
        'code': '002396',
        'id': '002396XWRJ',
        'name': '\u661f\u7f51\u9510\u6377'
    }, {'code': '002168', 'id': '002168SZHC', 'name': '\u6df1\u5733\u60e0\u7a0b'}, {
        'code': '600648',
        'id': '600648WGQ',
        'name': '\u5916\u9ad8\u6865'
    }, {'code': '300356', 'id': '300356GYKJ', 'name': '\u5149\u4e00\u79d1\u6280'}, {
        'code': '600178',
        'id': '600178DADL',
        'name': '\u4e1c\u5b89\u52a8\u529b'
    }, {'code': '600168', 'id': '600168WHKG', 'name': '\u6b66\u6c49\u63a7\u80a1'}, {
        'code': '600470',
        'id': '600470LGHG',
        'name': '\u516d\u56fd\u5316\u5de5'
    }, {'code': '600075', 'id': '600075XJTY', 'name': '\u65b0\u7586\u5929\u4e1a'}, {
        'code': '300220',
        'id': '300220JYJG',
        'name': '\u91d1\u8fd0\u6fc0\u5149'
    }, {'code': '600162', 'id': '600162XJKG', 'name': '\u9999\u6c5f\u63a7\u80a1'}, {
        'code': '603398',
        'id': '603398BBYZ',
        'name': '\u90a6\u5b9d\u76ca\u667a'
    }, {'code': '600645', 'id': '600645ZYXH', 'name': '\u4e2d\u6e90\u534f\u548c'}, {
        'code': '002149',
        'id': '002149XBCL',
        'name': '\u897f\u90e8\u6750\u6599'
    }, {'code': '300114', 'id': '300114ZHDC', 'name': '\u4e2d\u822a\u7535\u6d4b'}, {
        'code': '000932',
        'id': '000932HLGT',
        'name': '\u534e\u83f1\u94a2\u94c1'
    }, {'code': '002598', 'id': '002598SDZG', 'name': '\u5c71\u4e1c\u7ae0\u9f13'}, {
        'code': '000031',
        'id': '000031ZLDC',
        'name': '\u4e2d\u7cae\u5730\u4ea7'
    }, {'code': '300280', 'id': '300280NTDY', 'name': '\u5357\u901a\u953b\u538b'}, {
        'code': '002341',
        'id': '002341XLKJ',
        'name': '\u65b0\u7eb6\u79d1\u6280'
    }, {'code': '300049', 'id': '300049FRGF', 'name': '\u798f\u745e\u80a1\u4efd'}, {
        'code': '002124',
        'id': '002124TBGF',
        'name': '\u5929\u90a6\u80a1\u4efd'
    }, {'code': '600757', 'id': '600757CJCM', 'name': '\u957f\u6c5f\u4f20\u5a92'}, {
        'code': '000038',
        'id': '000038SDT',
        'name': '\u6df1\u5927\u901a'
    }, {'code': '300196', 'id': '300196CHGF', 'name': '\u957f\u6d77\u80a1\u4efd'}, {
        'code': '603028',
        'id': '603028SFT',
        'name': '\u8d5b\u798f\u5929'
    }, {'code': '002799', 'id': '002799HQYW', 'name': '\u73af\u7403\u5370\u52a1'}, {
        'code': '601618',
        'id': '601618ZGZY',
        'name': '\u4e2d\u56fd\u4e2d\u51b6'
    }, {'code': '300167', 'id': '300167DWSX', 'name': '\u8fea\u5a01\u89c6\u8baf'}, {
        'code': '600458',
        'id': '600458SDXC',
        'name': '\u65f6\u4ee3\u65b0\u6750'
    }, {'code': '002692', 'id': '002692YCDL', 'name': '\u8fdc\u7a0b\u7535\u7f06'}, {
        'code': '603686',
        'id': '603686LMHW',
        'name': '\u9f99\u9a6c\u73af\u536b'
    }, {'code': '300285', 'id': '300285GCCL', 'name': '\u56fd\u74f7\u6750\u6599'}, {
        'code': '000897',
        'id': '000897JBFZ',
        'name': '\u6d25\u6ee8\u53d1\u5c55'
    }, {'code': '600312', 'id': '600312PGDQ', 'name': '\u5e73\u9ad8\u7535\u6c14'}, {
        'code': '002522',
        'id': '002522ZJZC',
        'name': '\u6d59\u6c5f\u4f17\u6210'
    }, {'code': '300181', 'id': '300181ZLYY', 'name': '\u4f50\u529b\u836f\u4e1a'}, {
        'code': '000928',
        'id': '000928ZGGJ',
        'name': '\u4e2d\u94a2\u56fd\u9645'
    }, {'code': '002747', 'id': '002747ASD', 'name': '\u57c3\u65af\u987f'}, {
        'code': '000911',
        'id': '000911NNTY',
        'name': '\u5357\u5b81\u7cd6\u4e1a'
    }, {'code': '600853', 'id': '600853LJGF', 'name': '\u9f99\u5efa\u80a1\u4efd'}, {
        'code': '300292',
        'id': '300292WTKG',
        'name': '\u5434\u901a\u63a7\u80a1'
    }, {'code': '300513', 'id': '300513HTSD', 'name': '\u6052\u6cf0\u5b9e\u8fbe'}, {
        'code': '600738',
        'id': '600738LZMB',
        'name': '\u5170\u5dde\u6c11\u767e'
    }, {'code': '300244', 'id': '300244DAZD', 'name': '\u8fea\u5b89\u8bca\u65ad'}, {
        'code': '600697',
        'id': '600697OYJT',
        'name': '\u6b27\u4e9a\u96c6\u56e2'
    }, {'code': '600261', 'id': '600261YGZM', 'name': '\u9633\u5149\u7167\u660e'}, {
        'code': '000768',
        'id': '000768ZHFJ',
        'name': '\u4e2d\u822a\u98de\u673a'
    }, {'code': '002044', 'id': '002044MNJK', 'name': '\u7f8e\u5e74\u5065\u5eb7'}, {
        'code': '000065',
        'id': '000065BFGJ',
        'name': '\u5317\u65b9\u56fd\u9645'
    }, {'code': '600059', 'id': '600059GYLS', 'name': '\u53e4\u8d8a\u9f99\u5c71'}, {
        'code': '002581',
        'id': '002581WMYY',
        'name': '\u672a\u540d\u533b\u836f'
    }, {'code': '300508', 'id': '300508WHGF', 'name': '\u7ef4\u5b8f\u80a1\u4efd'}, {
        'code': '000519',
        'id': '000519JNHJ',
        'name': '\u6c5f\u5357\u7ea2\u7bad'
    }, {'code': '002796', 'id': '002796SJKJ', 'name': '\u4e16\u5609\u79d1\u6280'}, {
        'code': '002258',
        'id': '002258LEHX',
        'name': '\u5229\u5c14\u5316\u5b66'
    }, {'code': '603766', 'id': '603766LXTY', 'name': '\u9686\u946b\u901a\u7528'}, {
        'code': '000860',
        'id': '000860SXNY',
        'name': '\u987a\u946b\u519c\u4e1a'
    }, {'code': '000862', 'id': '000862YXNY', 'name': '\u94f6\u661f\u80fd\u6e90'}, {
        'code': '601015',
        'id': '601015SXHM',
        'name': '\u9655\u897f\u9ed1\u732b'
    }, {'code': '600831', 'id': '600831GDWL', 'name': '\u5e7f\u7535\u7f51\u7edc'}, {
        'code': '600654',
        'id': '600654ZAX',
        'name': '\u4e2d\u5b89\u6d88'
    }, {'code': '603968', 'id': '603968CHGF', 'name': '\u918b\u5316\u80a1\u4efd'}, {
        'code': '300502',
        'id': '300502XYS',
        'name': '\u65b0\u6613\u76db'
    }, {'code': '600784', 'id': '600784LYTZ', 'name': '\u9c81\u94f6\u6295\u8d44'}, {
        'code': '600965',
        'id': '600965FCGF',
        'name': '\u798f\u6210\u80a1\u4efd'
    }, {'code': '002472', 'id': '002472SHCD', 'name': '\u53cc\u73af\u4f20\u52a8'}, {
        'code': '300519',
        'id': '300519XGYY',
        'name': '\u65b0\u5149\u836f\u4e1a'
    }, {'code': '002644', 'id': '002644FCZY', 'name': '\u4f5b\u6148\u5236\u836f'}, {
        'code': '300039',
        'id': '300039SHKB',
        'name': '\u4e0a\u6d77\u51ef\u5b9d'
    }, {'code': '300476', 'id': '300476SHKJ', 'name': '\u80dc\u5b8f\u79d1\u6280'}, {
        'code': '600395',
        'id': '600395PJGF',
        'name': '\u76d8\u6c5f\u80a1\u4efd'
    }, {'code': '601336', 'id': '601336XHBX', 'name': '\u65b0\u534e\u4fdd\u9669'}, {
        'code': '000888',
        'id': '000888EMS\uff21',
        'name': '\u5ce8\u7709\u5c71\uff21'
    }, {'code': '000915', 'id': '000915SDHT', 'name': '\u5c71\u5927\u534e\u7279'}, {
        'code': '600188',
        'id': '600188YZMY',
        'name': '\u5156\u5dde\u7164\u4e1a'
    }, {'code': '601588', 'id': '601588BCSY', 'name': '\u5317\u8fb0\u5b9e\u4e1a'}, {
        'code': '600971',
        'id': '600971HYMD',
        'name': '\u6052\u6e90\u7164\u7535'
    }, {'code': '300331', 'id': '300331SDWG', 'name': '\u82cf\u5927\u7ef4\u683c'}, {
        'code': '600879',
        'id': '600879HTDZ',
        'name': '\u822a\u5929\u7535\u5b50'
    }, {'code': '600743', 'id': '600743HYDC', 'name': '\u534e\u8fdc\u5730\u4ea7'}, {
        'code': '002056',
        'id': '002056HDDC',
        'name': '\u6a2a\u5e97\u4e1c\u78c1'
    }, {'code': '002795', 'id': '002795YHZK', 'name': '\u6c38\u548c\u667a\u63a7'}, {
        'code': '600692',
        'id': '600692YTGF',
        'name': '\u4e9a\u901a\u80a1\u4efd'
    }, {'code': '600808', 'id': '600808MGGF', 'name': '\u9a6c\u94a2\u80a1\u4efd'}, {
        'code': '300388',
        'id': '300388GZHB',
        'name': '\u56fd\u796f\u73af\u4fdd'
    }, {'code': '000635', 'id': '000635Y L T', 'name': '\u82f1 \u529b \u7279'}, {
        'code': '300385',
        'id': '300385XLHJ',
        'name': '\u96ea\u6d6a\u73af\u5883'
    }, {'code': '300497', 'id': '300497FXGF', 'name': '\u5bcc\u7965\u80a1\u4efd'}, {
        'code': '600569',
        'id': '600569AYGT',
        'name': '\u5b89\u9633\u94a2\u94c1'
    }, {'code': '002458', 'id': '002458YSGF', 'name': '\u76ca\u751f\u80a1\u4efd'}, {
        'code': '600877',
        'id': '600877ZGJL',
        'name': '\u4e2d\u56fd\u5609\u9675'
    }, {'code': '000012', 'id': '000012N B\uff21', 'name': '\u5357 \u73bb\uff21'}, {
        'code': '000585',
        'id': '000585DBDQ',
        'name': '\u4e1c\u5317\u7535\u6c14'
    }, {'code': '603718', 'id': '603718HLSW', 'name': '\u6d77\u5229\u751f\u7269'}, {
        'code': '000798',
        'id': '000798ZSYY',
        'name': '\u4e2d\u6c34\u6e14\u4e1a'
    }, {'code': '601233', 'id': '601233TKGF', 'name': '\u6850\u6606\u80a1\u4efd'}, {
        'code': '002125',
        'id': '002125XTDH',
        'name': '\u6e58\u6f6d\u7535\u5316'
    }, {'code': '000821', 'id': '000821JSQJ', 'name': '\u4eac\u5c71\u8f7b\u673a'}, {
        'code': '300500',
        'id': '300500SZSJ',
        'name': '\u82cf\u5dde\u8bbe\u8ba1'
    }, {'code': '002179', 'id': '002179ZHGD', 'name': '\u4e2d\u822a\u5149\u7535'}, {
        'code': '002780',
        'id': '002780SFHW',
        'name': '\u4e09\u592b\u6237\u5916'
    }, {'code': '000885', 'id': '000885TLSN', 'name': '\u540c\u529b\u6c34\u6ce5'}, {
        'code': '300084',
        'id': '300084HMKJ',
        'name': '\u6d77\u9ed8\u79d1\u6280'
    }, {'code': '001979', 'id': '001979ZSSK', 'name': '\u62db\u5546\u86c7\u53e3'}, {
        'code': '002723',
        'id': '002723JLT',
        'name': '\u91d1\u83b1\u7279'
    }, {'code': '002282', 'id': '002282BSGJ', 'name': '\u535a\u6df1\u5de5\u5177'}, {
        'code': '300352',
        'id': '300352BXY',
        'name': '\u5317\u4fe1\u6e90'
    }, {'code': '601788', 'id': '601788GDZQ', 'name': '\u5149\u5927\u8bc1\u5238'}, {
        'code': '300237',
        'id': '300237MCKJ',
        'name': '\u7f8e\u6668\u79d1\u6280'
    }, {'code': '002371', 'id': '002371QXDZ', 'name': '\u4e03\u661f\u7535\u5b50'}, {
        'code': '300510',
        'id': '300510JGDQ',
        'name': '\u91d1\u51a0\u7535\u6c14'
    }, {'code': '000981', 'id': '000981YYGF', 'name': '\u94f6\u4ebf\u80a1\u4efd'}, {
        'code': '002563',
        'id': '002563SMFS',
        'name': '\u68ee\u9a6c\u670d\u9970'
    }, {'code': '000797', 'id': '000797ZGWY', 'name': '\u4e2d\u56fd\u6b66\u5937'}, {
        'code': '000985',
        'id': '000985DQHK',
        'name': '\u5927\u5e86\u534e\u79d1'
    }, {'code': '300410', 'id': '300410ZYKJ', 'name': '\u6b63\u4e1a\u79d1\u6280'}, {
        'code': '600882',
        'id': '600882GZGF',
        'name': '\u5e7f\u6cfd\u80a1\u4efd'
    }, {'code': '002307', 'id': '002307BXLQ', 'name': '\u5317\u65b0\u8def\u6865'}, {
        'code': '603701',
        'id': '603701DHGF',
        'name': '\u5fb7\u5b8f\u80a1\u4efd'
    }, {'code': '002529', 'id': '002529HYJX', 'name': '\u6d77\u6e90\u673a\u68b0'}, {
        'code': '000656',
        'id': '000656JKGF',
        'name': '\u91d1\u79d1\u80a1\u4efd'
    }, {'code': '002800', 'id': '002800TSGF', 'name': '\u5929\u987a\u80a1\u4efd'}, {
        'code': '600185',
        'id': '600185GLDC',
        'name': '\u683c\u529b\u5730\u4ea7'
    }, {'code': '600919', 'id': '600919JSYX', 'name': '\u6c5f\u82cf\u94f6\u884c'}, {
        'code': '603069',
        'id': '603069HQJT',
        'name': '\u6d77\u6c7d\u96c6\u56e2'
    }, {'code': '600476', 'id': '600476XYKJ', 'name': '\u6e58\u90ae\u79d1\u6280'}, {
        'code': '002683',
        'id': '002683HDBP',
        'name': '\u5b8f\u5927\u7206\u7834'
    }, {'code': '600782', 'id': '600782XGGF', 'name': '\u65b0\u94a2\u80a1\u4efd'}, {
        'code': '000925',
        'id': '000925ZHKJ',
        'name': '\u4f17\u5408\u79d1\u6280'
    }, {'code': '002244', 'id': '002244BJJT', 'name': '\u6ee8\u6c5f\u96c6\u56e2'}, {
        'code': '600665',
        'id': '600665TDY',
        'name': '\u5929\u5730\u6e90'
    }, {'code': '002503', 'id': '002503SYT', 'name': '\u641c\u4e8e\u7279'}, {
        'code': '603588',
        'id': '603588GNHJ',
        'name': '\u9ad8\u80fd\u73af\u5883'
    }, {'code': '600159', 'id': '600159DLDC', 'name': '\u5927\u9f99\u5730\u4ea7'}, {
        'code': '603300',
        'id': '603300HTKJ',
        'name': '\u534e\u94c1\u79d1\u6280'
    }, {'code': '300025', 'id': '300025HXCY', 'name': '\u534e\u661f\u521b\u4e1a'}, {
        'code': '603568',
        'id': '603568WMHB',
        'name': '\u4f1f\u660e\u73af\u4fdd'
    }, {'code': '603799', 'id': '603799HYGY', 'name': '\u534e\u53cb\u94b4\u4e1a'}, {
        'code': '600391',
        'id': '600391CFKJ',
        'name': '\u6210\u53d1\u79d1\u6280'
    }, {'code': '000029', 'id': '000029SSF\uff21', 'name': '\u6df1\u6df1\u623f\uff21'}, {
        'code': '300478',
        'id': '300478HZGX',
        'name': '\u676d\u5dde\u9ad8\u65b0'
    }, {'code': '603131', 'id': '603131SHHG', 'name': '\u4e0a\u6d77\u6caa\u5de5'}, {
        'code': '600207',
        'id': '600207ACGK',
        'name': '\u5b89\u5f69\u9ad8\u79d1'
    }, {'code': '002638', 'id': '002638QSGD', 'name': '\u52e4\u4e0a\u5149\u7535'}, {
        'code': '600823',
        'id': '600823SMGF',
        'name': '\u4e16\u8302\u80a1\u4efd'
    }, {'code': '300432', 'id': '300432FLJG', 'name': '\u5bcc\u4e34\u7cbe\u5de5'}, {
        'code': '002150',
        'id': '002150TRZB',
        'name': '\u901a\u6da6\u88c5\u5907'
    }, {'code': '002131', 'id': '002131LOGF', 'name': '\u5229\u6b27\u80a1\u4efd'}, {
        'code': '002332',
        'id': '002332XJZY',
        'name': '\u4ed9\u741a\u5236\u836f'
    }, {'code': '002373', 'id': '002373QFKJ', 'name': '\u5343\u65b9\u79d1\u6280'}, {
        'code': '300119',
        'id': '300119RPSW',
        'name': '\u745e\u666e\u751f\u7269'
    }, {'code': '000906', 'id': '000906WCZT', 'name': '\u7269\u4ea7\u4e2d\u62d3'}, {
        'code': '000056',
        'id': '000056HTGJ',
        'name': '\u7687\u5ead\u56fd\u9645'
    }, {'code': '600596', 'id': '600596XAGF', 'name': '\u65b0\u5b89\u80a1\u4efd'}, {
        'code': '603020',
        'id': '603020APGF',
        'name': '\u7231\u666e\u80a1\u4efd'
    }, {'code': '002743', 'id': '002743FHGG', 'name': '\u5bcc\u714c\u94a2\u6784'}, {
        'code': '002178',
        'id': '002178YHZN',
        'name': '\u5ef6\u534e\u667a\u80fd'
    }, {'code': '600620', 'id': '600620TCGF', 'name': '\u5929\u5bb8\u80a1\u4efd'}, {
        'code': '300465',
        'id': '300465GWD',
        'name': '\u9ad8\u4f1f\u8fbe'
    }, {'code': '601003', 'id': '601003LGGF', 'name': '\u67f3\u94a2\u80a1\u4efd'}, {
        'code': '600748',
        'id': '600748SSFZ',
        'name': '\u4e0a\u5b9e\u53d1\u5c55'
    }, {'code': '000036', 'id': '000036HLKG', 'name': '\u534e\u8054\u63a7\u80a1'}, {
        'code': '002381',
        'id': '002381SJGF',
        'name': '\u53cc\u7bad\u80a1\u4efd'
    }, {'code': '600266', 'id': '600266BJCJ', 'name': '\u5317\u4eac\u57ce\u5efa'}, {
        'code': '002675',
        'id': '002675DCYY',
        'name': '\u4e1c\u8bda\u836f\u4e1a'
    }, {'code': '000926', 'id': '000926FXGF', 'name': '\u798f\u661f\u80a1\u4efd'}, {
        'code': '600590',
        'id': '600590THKJ',
        'name': '\u6cf0\u8c6a\u79d1\u6280'
    }, {'code': '600287', 'id': '600287JSST', 'name': '\u6c5f\u82cf\u821c\u5929'}, {
        'code': '000153',
        'id': '000153FYYY',
        'name': '\u4e30\u539f\u836f\u4e1a'
    }, {'code': '300312', 'id': '300312BXJZ', 'name': '\u90a6\u8baf\u6280\u672f'}, {
        'code': '300277',
        'id': '300277HLX',
        'name': '\u6d77\u8054\u8baf'
    }, {'code': '002676', 'id': '002676SWGF', 'name': '\u987a\u5a01\u80a1\u4efd'}, {
        'code': '600512',
        'id': '600512TDJS',
        'name': '\u817e\u8fbe\u5efa\u8bbe'
    }, {'code': '600368', 'id': '600368WZJT', 'name': '\u4e94\u6d32\u4ea4\u901a'}, {
        'code': '000728',
        'id': '000728GYZQ',
        'name': '\u56fd\u5143\u8bc1\u5238'
    }, {'code': '002732', 'id': '002732YTRY', 'name': '\u71d5\u5858\u4e73\u4e1a'}, {
        'code': '600213',
        'id': '600213YXKC',
        'name': '\u4e9a\u661f\u5ba2\u8f66'
    }, {'code': '002775', 'id': '002775WKYL', 'name': '\u6587\u79d1\u56ed\u6797'}, {
        'code': '600302',
        'id': '600302BZGF',
        'name': '\u6807\u51c6\u80a1\u4efd'
    }, {'code': '300509', 'id': '300509XMX', 'name': '\u65b0\u7f8e\u661f'}, {
        'code': '600663',
        'id': '600663LJZ',
        'name': '\u9646\u5bb6\u5634'
    }, {'code': '002605', 'id': '002605YJPK', 'name': '\u59da\u8bb0\u6251\u514b'}, {
        'code': '002046',
        'id': '002046ZYKJ',
        'name': '\u8f74\u7814\u79d1\u6280'
    }, {'code': '002566', 'id': '002566YSYY', 'name': '\u76ca\u76db\u836f\u4e1a'}, {
        'code': '002524',
        'id': '002524GZJT',
        'name': '\u5149\u6b63\u96c6\u56e2'
    }, {'code': '600078', 'id': '600078CXGF', 'name': '\u6f84\u661f\u80a1\u4efd'}, {
        'code': '300326',
        'id': '300326KLT',
        'name': '\u51ef\u5229\u6cf0'
    }, {'code': '300505', 'id': '300505CJN', 'name': '\u5ddd\u91d1\u8bfa'}, {
        'code': '600640',
        'id': '600640HBKG',
        'name': '\u53f7\u767e\u63a7\u80a1'
    }, {'code': '002182', 'id': '002182YHJS', 'name': '\u4e91\u6d77\u91d1\u5c5e'}, {
        'code': '300459',
        'id': '300459JKYL',
        'name': '\u91d1\u79d1\u5a31\u4e50'
    }, {'code': '600588', 'id': '600588YYWL', 'name': '\u7528\u53cb\u7f51\u7edc'}, {
        'code': '300303',
        'id': '300303JFGD',
        'name': '\u805a\u98de\u5149\u7535'
    }, {'code': '603861', 'id': '603861BYDQ', 'name': '\u767d\u4e91\u7535\u5668'}, {
        'code': '000638',
        'id': '000638WFFZ',
        'name': '\u4e07\u65b9\u53d1\u5c55'
    }, {'code': '600643', 'id': '600643AJJT', 'name': '\u7231\u5efa\u96c6\u56e2'}, {
        'code': '600246',
        'id': '600246WTDC',
        'name': '\u4e07\u901a\u5730\u4ea7'
    }, {'code': '600698', 'id': '600698HNTY', 'name': '\u6e56\u5357\u5929\u96c1'}, {
        'code': '603369',
        'id': '603369JSY',
        'name': '\u4eca\u4e16\u7f18'
    }, {'code': '000909', 'id': '000909SYKJ', 'name': '\u6570\u6e90\u79d1\u6280'}, {
        'code': '000509',
        'id': '000509HSKG',
        'name': '\u534e\u5851\u63a7\u80a1'
    }, {'code': '600820', 'id': '600820SDGF', 'name': '\u96a7\u9053\u80a1\u4efd'}, {
        'code': '300495',
        'id': '300495MSST',
        'name': '\u7f8e\u5c1a\u751f\u6001'
    }, {'code': '300499', 'id': '300499GLGF', 'name': '\u9ad8\u6f9c\u80a1\u4efd'}, {
        'code': '600452',
        'id': '600452FLDL',
        'name': '\u6daa\u9675\u7535\u529b'
    }, {'code': '000937', 'id': '000937JZNY', 'name': '\u5180\u4e2d\u80fd\u6e90'}, {
        'code': '000019',
        'id': '000019SSB\uff21',
        'name': '\u6df1\u6df1\u5b9d\uff21'
    }, {'code': '300503', 'id': '300503HZJD', 'name': '\u660a\u5fd7\u673a\u7535'}, {
        'code': '000514',
        'id': '000514Y K F',
        'name': '\u6e1d \u5f00 \u53d1'
    }, {'code': '002797', 'id': '002797DYCY', 'name': '\u7b2c\u4e00\u521b\u4e1a'}, {
        'code': '000006',
        'id': '000006SZY\uff21',
        'name': '\u6df1\u632f\u4e1a\uff21'
    }, {'code': '000595', 'id': '000595BTSY', 'name': '\u5b9d\u5854\u5b9e\u4e1a'}, {
        'code': '000626',
        'id': '000626RYJT',
        'name': '\u5982\u610f\u96c6\u56e2'
    }, {'code': '002146', 'id': '002146RSFZ', 'name': '\u8363\u76db\u53d1\u5c55'}, {
        'code': '600376',
        'id': '600376SKGF',
        'name': '\u9996\u5f00\u80a1\u4efd'
    }, {'code': '002606', 'id': '002606DLDC', 'name': '\u5927\u8fde\u7535\u74f7'}, {
        'code': '002356',
        'id': '002356HMJT',
        'name': '\u8d6b\u7f8e\u96c6\u56e2'
    }, {'code': '000709', 'id': '000709HGGF', 'name': '\u6cb3\u94a2\u80a1\u4efd'}, {
        'code': '600325',
        'id': '600325HFGF',
        'name': '\u534e\u53d1\u80a1\u4efd'
    }, {'code': '300395', 'id': '300395FLH', 'name': '\u83f2\u5229\u534e'}, {
        'code': '600708',
        'id': '600708GMDC',
        'name': '\u5149\u660e\u5730\u4ea7'
    }, {'code': '300507', 'id': '300507SACG', 'name': '\u82cf\u5965\u4f20\u611f'}, {
        'code': '600348',
        'id': '600348YQMY',
        'name': '\u9633\u6cc9\u7164\u4e1a'
    }, {'code': '601997', 'id': '601997GYYX', 'name': '\u8d35\u9633\u94f6\u884c'}, {
        'code': '600683',
        'id': '600683JTFZ',
        'name': '\u4eac\u6295\u53d1\u5c55'
    }, {'code': '600383', 'id': '600383JDJT', 'name': '\u91d1\u5730\u96c6\u56e2'}, {
        'code': '601238',
        'id': '601238GQJT',
        'name': '\u5e7f\u6c7d\u96c6\u56e2'
    }, {'code': '002110', 'id': '002110SGMG', 'name': '\u4e09\u94a2\u95fd\u5149'}, {
        'code': '600532',
        'id': '600532HDKY',
        'name': '\u5b8f\u8fbe\u77ff\u4e1a'
    }, {'code': '002047', 'id': '002047BYGF', 'name': '\u5b9d\u9e70\u80a1\u4efd'}, {
        'code': '300428',
        'id': '300428STXC',
        'name': '\u56db\u901a\u65b0\u6750'
    }, {'code': '600048', 'id': '600048BLDC', 'name': '\u4fdd\u5229\u5730\u4ea7'}, {
        'code': '300185',
        'id': '300185TYZG',
        'name': '\u901a\u88d5\u91cd\u5de5'
    }, {'code': '600533', 'id': '600533QXJS', 'name': '\u6816\u971e\u5efa\u8bbe'}, {
        'code': '300512',
        'id': '300512ZYGF',
        'name': '\u4e2d\u4e9a\u80a1\u4efd'
    }, {'code': '600272', 'id': '600272KKSY', 'name': '\u5f00\u5f00\u5b9e\u4e1a'}, {
        'code': '002584',
        'id': '002584XLKX',
        'name': '\u897f\u9647\u79d1\u5b66'
    }, {'code': '000011', 'id': '000011SWYA', 'name': '\u6df1\u7269\u4e1aA'}, {
        'code': '000983',
        'id': '000983XSMD',
        'name': '\u897f\u5c71\u7164\u7535'
    }, {'code': '002328', 'id': '002328XPGF', 'name': '\u65b0\u670b\u80a1\u4efd'}, {
        'code': '600155',
        'id': '600155BSGF',
        'name': '\u5b9d\u7855\u80a1\u4efd'
    }, {'code': '300282', 'id': '300282HGGF', 'name': '\u6c47\u51a0\u80a1\u4efd'}, {
        'code': '002201',
        'id': '002201JDXC',
        'name': '\u4e5d\u9f0e\u65b0\u6750'
    }, {'code': '600833', 'id': '600833DYYY', 'name': '\u7b2c\u4e00\u533b\u836f'}, {
        'code': '300116',
        'id': '300116JRXF',
        'name': '\u575a\u745e\u6d88\u9632'
    }, {'code': '601699', 'id': '601699LAHN', 'name': '\u6f5e\u5b89\u73af\u80fd'}, {
        'code': '300020',
        'id': '300020YJGF',
        'name': '\u94f6\u6c5f\u80a1\u4efd'
    }, {'code': '002779', 'id': '002779ZJKJ', 'name': '\u4e2d\u575a\u79d1\u6280'}, {
        'code': '300489',
        'id': '300489ZFGF',
        'name': '\u4e2d\u98de\u80a1\u4efd'
    }, {'code': '601001', 'id': '601001DTMY', 'name': '\u5927\u540c\u7164\u4e1a'}, {
        'code': '002733',
        'id': '002733XTGF',
        'name': '\u96c4\u97ec\u80a1\u4efd'
    }, {'code': '000756', 'id': '000756XHZY', 'name': '\u65b0\u534e\u5236\u836f'}, {
        'code': '600052',
        'id': '600052ZJGS',
        'name': '\u6d59\u6c5f\u5e7f\u53a6'
    }, {'code': '002208', 'id': '002208HFCJ', 'name': '\u5408\u80a5\u57ce\u5efa'}, {
        'code': '603011',
        'id': '603011HDZN',
        'name': '\u5408\u953b\u667a\u80fd'
    }, {'code': '002476', 'id': '002476BMGF', 'name': '\u5b9d\u83ab\u80a1\u4efd'}, {
        'code': '603108',
        'id': '603108RDYL',
        'name': '\u6da6\u8fbe\u533b\u7597'
    }, {'code': '600606', 'id': '600606LDKG', 'name': '\u7eff\u5730\u63a7\u80a1'}, {
        'code': '600755',
        'id': '600755SMGM',
        'name': '\u53a6\u95e8\u56fd\u8d38'
    }, {'code': '600310', 'id': '600310GDDL', 'name': '\u6842\u4e1c\u7535\u529b'}, {
        'code': '002365',
        'id': '002365YAYY',
        'name': '\u6c38\u5b89\u836f\u4e1a'
    }, {'code': '000002', 'id': '000002W K\uff21', 'name': '\u4e07 \u79d1\uff21'}, {
        'code': '000573',
        'id': '000573YHY\uff21',
        'name': '\u7ca4\u5b8f\u8fdc\uff21'
    }, {'code': '600740', 'id': '600740SXJH', 'name': '\u5c71\u897f\u7126\u5316'}, {
        'code': '603368',
        'id': '603368LZYY',
        'name': '\u67f3\u5dde\u533b\u836f'
    }, {'code': '000402', 'id': '000402J R J', 'name': '\u91d1 \u878d \u8857'}, {
        'code': '002490',
        'id': '002490SDML',
        'name': '\u5c71\u4e1c\u58a8\u9f99'
    }, {'code': '300506', 'id': '300506MJH', 'name': '\u540d\u5bb6\u6c47'}, {
        'code': '600622',
        'id': '600622JBJT',
        'name': '\u5609\u5b9d\u96c6\u56e2'
    }, {'code': '601155', 'id': '601155XCKG', 'name': '\u65b0\u57ce\u63a7\u80a1'}, {
        'code': '000736',
        'id': '000736ZFDC',
        'name': '\u4e2d\u623f\u5730\u4ea7'
    }, {'code': '002409', 'id': '002409YKKJ', 'name': '\u96c5\u514b\u79d1\u6280'}, {
        'code': '000918',
        'id': '000918JKC',
        'name': '\u5609\u51ef\u57ce'
    }, {'code': '002113', 'id': '002113TRSY', 'name': '\u5929\u6da6\u6570\u5a31'}, {
        'code': '002703',
        'id': '002703ZJSB',
        'name': '\u6d59\u6c5f\u4e16\u5b9d'
    }, {'code': '600149', 'id': '600149LFFZ', 'name': '\u5eca\u574a\u53d1\u5c55'}, {
        'code': '300038',
        'id': '300038MTN',
        'name': '\u6885\u6cf0\u8bfa'
    }, {'code': '600278', 'id': '600278DFCY', 'name': '\u4e1c\u65b9\u521b\u4e1a'}];
    //==========================END TODO!============================
}
