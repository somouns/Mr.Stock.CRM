/**
 * Created by Administrator on 2017-09-20.
 */
require([], function() {
    var common = {
        /**
         * 监听用户F5按键事件
         */
        prevent: function() {
            $("body").bind("keydown",function(event){
                if (event.keyCode == 116) {
                    event.preventDefault(); //阻止默认刷新
                    location.reload();
                    //采用location.reload()在火狐下可能会有问题，火狐会保留上一次链接
                    location = location;
                }
            })
        }
    };
    var _init = function() {
        common.prevent();
    };
    _init();
});
