/**
 * Created by Administrator on 2017-09-18.
 */
require(["vue", "layer" , "text!../../popup/affirm.html"], function (Vue, layer, affirm) {
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
    var home = {
        init: function() {
            // 声明json对象
            var option = [
                {name: '詹姆斯', age: 25, time: 1112505789871},
                {name: 'james', age: 24, time: 1412505789871}
            ];
            // 将数据传递给vue实例
            vue.option = option;
            console.log(vue.option);
            console.log(vue.message + 1);
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
        }
    };

    var _init = function() {
        home.init();
        home.open();
    };
    _init();
});