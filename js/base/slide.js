/**
 * SuperSlide组件 适用于 幻灯片  tab切换等
 */
define(['jquery.SuperSlide'], function () {
    return {
        /**
         * [slide description]  slide
         * @param  {[type]} elem          [description]  容器父节点
         * @param  {[type]} arg           [description]  传入SuperSlide配置参数
         * @param  {[type]} endcallback   [description]  动画结束后的回调
         * @param  {[type]} startcallback [description]  动画开始时的回调
         * @return {[type]}               [description]
         */
        slide: function (elem, arg, endcallback, startcallback) {
            if (!arg && !elem) {
                throw new Error('slide参数不存在');
            }
            var _THIS_ = new Object();
            $.extend(_THIS_, {
                titCell: null,
                targetCell: null,
                trigger: 'click',
                titOnClassName: 'active',
                endFun: function (i, c) {
                    typeof endcallback === 'function' && endcallback.call(this, i, c);
                },
                startFun: function (i, c) {
                    typeof startcallback === 'function' && startcallback.call(this, i, c);
                }
            }, arg);
            $(elem).length && $(elem).slide(_THIS_);
        }
    }
})