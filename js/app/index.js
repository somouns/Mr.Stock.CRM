/**
 * Created by Administrator on 2017-09-18.
 */
require(["vue", "layer"], function (Vue, layer) {
    var vue = new Vue({
        el: "#app",
        data: {
            message: 25,
            option: []
        },
        methods: {

        }
    });
    var home = {
        init: function() {
            // 声明json对象
            var option = [
                {name: 'lucy', age: 25},
                {name: 'james', age: 24}
            ];
            // 将数据传递给vue实例
            vue.option = option;
            console.log(vue.option);
            console.log(vue.message + 1);
        },
        open: function() {
            // 触发点击时间,调用layer弹出层
            $(".alert-mess").click(function() {
                layer.msg("world");
            })
        }
    };

    var _init = function() {
        home.init();
        home.open();
    };
    _init();
});