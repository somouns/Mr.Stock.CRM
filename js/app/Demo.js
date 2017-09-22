/**
 * Created by Administrator on 2017-09-18.
 */
require(["vue", "layui", "layer" , "text!../../popup/affirm.html"], function (Vue, layui, layer, affirm) {

    var home = {
        init: function() {
            // 声明json对象
            var option = [
                {name: '詹姆斯', age: 25, time: 1112505789871},
                {name: 'james', age: 24, time: 1412505789871}
            ];
            // 将数据传递给vue实例
            vue.option = option;
            //console.log(vue.option);
            //console.log(vue.message + 1);
        },
        open: function() {
            // 触发点击事件,调用layer弹出层
            $(".login").click(function() {
                //layer.msg("hello world!");
                layer.open({
                    type: 1,
                    area: ['700px', '350px'],
                    content: affirm
                }, function(affirm) {
                    $(".closed").click(function () {
                        layer.closed(affirm);
                    })
                })
            })
        },
        /* 下拉选择框 */
        select: function() {
            var filterA = $(".filter-a");
            // 点击选择框
            filterA.on("click", function() {
                var filterUl = $(this).siblings(".filter-ul"),
                    filterI = $(this).children("i");
                filterI.addClass("rotate-i");
                filterUl.show();
            });
            // 点击空白区域隐藏下拉框
            $(document).click(function (e) {
                var cont = $('.examine-select'), // 设置目标区域
                    contUl = $('.filter-ul'),
                    contI = $(".filter-a i");
                if (!cont.is(e.target) && cont.has(e.target).length === 0) {
                    // 图标旋转还原
                    contI.removeClass("rotate-i");
                    // 隐藏当前列表
                    contUl.hide();
                }
            });
        },
        /* 表格渲染 + 注册element */
        tableInfo: function() {
            layui.use(['table','element'], function(){
                var table = layui.table,
                    element = layui.element;
                //展示已知数据
                table.render({
                    elem: '#demo'
                    ,data: [{
                        "id": "10001"
                        ,"username": "杜甫"
                        ,"email": "xianxin@layui.com"
                        ,"sex": "男"
                        ,"city": "浙江杭州"
                        ,"sign": "人生恰似一场修行"
                        ,"experience": "116"
                        ,"ip": "192.168.0.8"
                        ,"logins": "108"
                        ,"joinTime": "2016-10-14"
                    }, {
                        "id": "10002"
                        ,"username": "李白"
                        ,"email": "xianxin@layui.com"
                        ,"sex": "男"
                        ,"city": "浙江杭州"
                        ,"sign": "人生恰似一场修行"
                        ,"experience": "12"
                        ,"ip": "192.168.0.8"
                        ,"logins": "106"
                        ,"joinTime": "2016-10-14"
                        ,"LAY_CHECKED": true
                    }, {
                        "id": "10003"
                        ,"username": "王勃"
                        ,"email": "xianxin@layui.com"
                        ,"sex": "男"
                        ,"city": "浙江杭州"
                        ,"sign": "人生恰似一场修行"
                        ,"experience": "65"
                        ,"ip": "192.168.0.8"
                        ,"logins": "106"
                        ,"joinTime": "2016-10-14"
                    }, {
                        "id": "10004"
                        ,"username": "贤心"
                        ,"email": "xianxin@layui.com"
                        ,"sex": "男"
                        ,"city": "浙江杭州"
                        ,"sign": "人生恰似一场修行"
                        ,"experience": "666"
                        ,"ip": "192.168.0.8"
                        ,"logins": "106"
                        ,"joinTime": "2016-10-14"
                    }, {
                        "id": "10005"
                        ,"username": "贤心"
                        ,"email": "xianxin@layui.com"
                        ,"sex": "男"
                        ,"city": "浙江杭州"
                        ,"sign": "人生恰似一场修行"
                        ,"experience": "86"
                        ,"ip": "192.168.0.8"
                        ,"logins": "106"
                        ,"joinTime": "2016-10-14"
                    }, {
                        "id": "10006"
                        ,"username": "贤心"
                        ,"email": "xianxin@layui.com"
                        ,"sex": "男"
                        ,"city": "浙江杭州"
                        ,"sign": "人生恰似一场修行"
                        ,"experience": "12"
                        ,"ip": "192.168.0.8"
                        ,"logins": "106"
                        ,"joinTime": "2016-10-14"
                    }, {
                        "id": "10007"
                        ,"username": "贤心"
                        ,"email": "xianxin@layui.com"
                        ,"sex": "男"
                        ,"city": "浙江杭州"
                        ,"sign": "人生恰似一场修行"
                        ,"experience": "16"
                        ,"ip": "192.168.0.8"
                        ,"logins": "106"
                        ,"joinTime": "2016-10-14"
                    }, {
                        "id": "10008"
                        ,"username": "贤心"
                        ,"email": "xianxin@layui.com"
                        ,"sex": "男"
                        ,"city": "浙江杭州"
                        ,"sign": "人生恰似一场修行"
                        ,"experience": "106"
                        ,"ip": "192.168.0.8"
                        ,"logins": "106"
                        ,"joinTime": "2016-10-14"
                    }]
                    ,height: 272
                    ,cols: [[ //标题栏
                        {checkbox: true, LAY_CHECKED: true} //默认全选
                        ,{field: 'id', title: 'ID', width: 80, sort: true}
                        ,{field: 'username', title: '用户名', width: 120}
                        ,{field: 'email', title: '邮箱', width: 150}
                        ,{field: 'sign', title: '签名', width: 150}
                        ,{field: 'sex', title: '性别', width: 80}
                        ,{field: 'city', title: '城市', width: 100}
                        ,{field: 'experience', title: '积分', width: 80, sort: true}
                    ]]
                    ,skin: 'row' //表格风格
                    ,even: true
                    ,page: true //是否显示分页
                    ,limits: [5, 7, 10]
                    ,limit: 6 //每页默认显示的数量
                });
            });
        }
    };
    var _init = function() {
        home.init();
        home.open();
        home.select();
        home.tableInfo();
    };
    /**
     * 注册全局过滤组件
     */
    Vue.filter("isMaxLen", function (str, len) {
        /**
         *  输入的只有中文,一个中文占两个字符
         *  @param str 传入的字符串
         *  @param len 限制的字符串的长度
         */
        var regexp = /[^\x00-\xff]/g, // 正则表达式匹配中文
            strLen = str.replace(regexp, "aa").length; // 获取字符串字节长度
        if (strLen <= len) { // 当字符串字节长度小于指定的字节长度时
            return str;
        }
        // 假设指定长度内都是中文
        var m = Math.floor(len/2);
        for (var i = m, j = str.length; i < j; i++) {
            // 当截取字符串字节长度满足指定的字节长度
            if (str.substring(0, i).replace(regexp, "aa").length >= 0) {
                return str.substring(0, i);
            }
        }
        return str;
    });
    /**
     * 实例化vue组件
     */
    var vue = new Vue({
        el: "#app",
        data: {
            message: 25,
            option: []
        },
        methods: {
            open: function() {
                layer.msg("world");
            }
        },
        filters: {
            /**
             *  将日期转换成"yyyy-mm-dd"格式
             *  @param ym yyyy-mm
             *  @param md mm-dd
             *  @param 默认 yyyy-mm-dd
             */
            ConvertDate: function(strDate, sye) {
                // 非空等情况的判断
                if (strDate == null || strDate == "" || strDate == "0") {
                    return ("");
                }
                else {
                    try {
                        // 获取日期对象
                        var ExDate = new Date(strDate);
                        // 获取年
                        var yyyy = ExDate.getFullYear();
                        // 获取月, 不足10前面处理加0: 如09
                        var mm = ExDate.getMonth() + 1; mm = mm < 10 ? "0" + mm : mm;
                        // 获取日, 不足10前面处理加0: 如09
                        var dd = ExDate.getDate(); dd = dd < 10 ? "0" + dd : dd;
                        switch (sye) {
                            case "ym":
                                return yyyy + "-" + mm;
                                break;
                            case "md":
                                return mm + "-" + dd;
                                break;
                            default:
                                return yyyy + "-" + mm + "-" + dd;
                                break;
                        }
                    }
                    catch (e) {
                        return ("")
                    }
                }
            }
        }
    });
    _init();
});