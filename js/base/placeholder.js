/**
 * jquery.palceholder 低版本 IE placeholder 模拟实现
 */
var args = function ($) {
    $.fn.placeholder = function () {
        var supportPlaceholder = 'placeholder' in document.createElement('input'); //浏览器是否支持placeholder
        return this.each(function () {
            var _this = this; // input
            if (!supportPlaceholder) {
                $(_this).siblings("label")
                    .click(function () {
                        $(this).hide();
                        $(_this).focus()[0];
                    })
                    .show();
                _this.onfocus = function () {
                    $(_this).siblings("label").hide();
                };
                _this.onblur = function () {
                    if ($.trim(_this.value) == "") {
                        $(_this).siblings("label").show();
                    } else {
                        $(_this).siblings("label").hide();
                    }
                };
            }
        });
    };
}
// 模块化标准兼容
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
})(args);