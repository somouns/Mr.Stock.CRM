/**
 * 配置全局工具类
 */
define(['store', 'jquery.cookie'], function (store) {
    return {
        /**
         * 获取url地址
         */
        aUrl: function(url) {
            return window.location.href ;
        },
        /**
         * 获取URL中的request参数
         * @param name 请求的参数名
         */
        getUrlReq: function(name) {
            // 定义正则
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            // 返回匹配组组成的数组
            var r = window.location.search.substr(1).match(reg);
            // 如果请求的参数存在
            if (r != null) {
                // decodeURIComponent-解码获得的参数
                return decodeURIComponent(r[2]);
            } else {
                return "";
            }
        }
    }
});