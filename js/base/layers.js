/**
 * 配置 layer 弹出层公共方法
 */
define(['layer'], function (layer) {
    var BaseUrl = (window.location.origin || (window.location.protocol + '//' + window.location.host)) + '/js/';
    layer.config({
        path: BaseUrl + 'libs/layui/css/modules/layer/'
    });
    return {
        /**
         * [open description] 公用弹出组件
         * @param  {[type]}   args     [description] [{type:1,title:false,closeBtn:0,shadeClose: false,area: ['700px','350px'],content: Object}]
         * @param  {Function} successCallBack [description] 回调传入 layero 对象 当前层index(用于close)
         * @return {[type]}            [description]
         */
        open: function (args, successCallBack) {
            if (!args.content) {
                throw new Error('弹出组件缺少参数');
            }
            var _THIS_ = new Object();
            $.extend(_THIS_, {
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: false,
                area: ['700px', '350px'],
                content: null,
                resize: false,
                success: function (layero, index) {
                    typeof successCallBack === 'function' && successCallBack.call(this, layero, index);
                }
            }, args);
            layer.open(_THIS_);
        },
        /**
         * [closedAll description] 关闭全部的弹出层
         * @return {[type]} [description]
         */
        closedAll: function () {
            layer.closeAll();
        },
        /**
         * [alert description] alert弹出层
         * @param  {[type]} msg [description]
         * @return {[type]}     [description]
         */
        alert: function (msg) {
            if (!msg) {
                throw new Error('alert缺少msg对象！');
            }
            layer.alert(msg);
        },
        /**
         * [confirm description] confirm选择框
         * @param  {[type]}   msg      [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
        confirm: function (msg, callback) {
            if (!msg) {
                throw new Error('缺少msg对象！');
            }
            layer.confirm(msg, function (index) {
                typeof callback === 'function' && callback.call(this, index);
            });
        },
        /**
         * [closed description] 关闭指定层
         * @param  {[type]} index [description]
         * @return {[type]}       [description]
         */
        closed: function (index) {
            if (index != undefined && index != null) {
                layer.close(index);
            }
        },
        /**
         * [toast description] toast提示
         * @param  {[type]} msg  [description]
         * @param  {[type]} time [description]
         * @return {[type]}      [description]
         */
        toast:function(msg,time){
            time = time || 2000;
            if(!msg){
                throw new Error('toast缺少msg对象！')
            }
            layer.msg(msg,{time:time});
        },
        /**
         * [load description] loading
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
        load:function(callback){
            // layer.open({
            //     type: 3,
            //     content: '<span style="display: block;padding-top: 27px;text-align: center;">加载中...</span>'
            // })
           return layer.load();
        }
    }
});