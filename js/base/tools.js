/**
 * 配置全局工具类
 */
define(['store', 'jquery.cookie'], function (store) {
    return {
        /**
         * [setCookie description] 设置cookie
         * @param {[type]} name  [description]
         * @param {[type]} value [description]
         * @param {[type]} day   [description]
         * @param {[type]} path  [description]
         */
        setCookie: function (name, value, day, path) {
            if (!name && !value) {
                throw new Error('设置cookie 参数不存在！');
            }
            day = day || 7;
            $.cookie(name, value, {
                expires: day
            });
        },
        /**
         * [getCookie description] 获取cookie
         * @param  {[type]} name [description]
         * @return {[type]}      [description]
         */
        getCookie: function (name) {
            if (!name) {
                throw new Error('获取cookie name不存在！');
            }
            var values = $.cookie(name);
            if (values != undefined) {
                return values;
            } else {
                return false;
            }
        },
        /**
         * [removeCookie description] 删除cookie
         * @param  {[type]} name [description]
         * @return {[type]}      [description]
         */
        removeCookie: function (name) {
            if (!name) {
                throw new Error('删除cookie name不存在！');
            }
            $.removeCookie(name);
        },
        /**
         * [checkLogin description] 检测用户是否登录
         * @return {[type]} [description]
         */
        checkLogin: function () {
            return this.getCookie('member_info');
        },
        /**
         * [ajax description]  ajax异步请求
         * @param  {[type]} args               [ {url: '' , type : '' dataType : ''data : {} } 集合]
         * @param  {[type]} successCallback    [成功时的回调]
         * @param  {[type]} beforeSendCallback [ajax发送请求前的回调]
         * @param  {[type]} completeCallbacl   [不管成功与否的回调]
         */
        ajax: function (args, successCallback, beforeSendCallback, completeCallbacl) {
                if (!args.url) {
                    throw new Error('ajax参数错误！');
                }
                var _THIS_ = new Object();
                $.extend(_THIS_, {
                    url: null,
                    type: 'get',
                    dataType: 'jsonp',
                    data: null,
                    beforeSend: function () {
                        typeof beforeSendCallback === 'function' && beforeSendCallback.call(this);
                    },
                    complete: function () {
                        typeof completeCallbacl === 'function' && completeCallbacl.call(this);
                    },
                    success: function (data) {
                        typeof successCallback === 'function' && successCallback.call(this, data);
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log(XMLHttpRequest, textStatus, errorThrown)
                        throw new Error(args.url + '系统错误！');
                    }
                }, args);
                _THIS_.data.route_mark = 'web';
                $.ajax(_THIS_);
        },
        /**
         * [formatNumber description] 格式化大位数字  超过万 显示  xx万  xx亿
         * @param  {[type]} value [description]  值
         * @param  {[type]} n     [description]  保留几位小数  默认2
         * @param  {[type]} f     [description]  是否需要格式  默认true
         * @return {[type]}       [description]
         */
        formatNumber: function (value, n, f) {
            var curNum = Number(value);
            var unit = '';
            var symbol = '';
            var renum = '';
            n = n || 2;
            f = f || '1';
            if (curNum != null || curNum != undefined) {
                if (curNum >= 0) {
                    symbol = '';
                } else {
                    symbol = '-';
                    curNum = Math.abs(curNum);
                }
                if (curNum) {
                    if (f != '0') {
                        if (curNum >= 100000000) {
                            curNum = curNum / 100000000;
                            unit = '亿';
                            renum = curNum.toFixed(n)
                        } else if (curNum >= 10000) {
                            curNum = curNum / 10000;
                            unit = '万';
                            renum = curNum.toFixed(n)
                        } else if (curNum < 10000) {
                            renum = curNum.toFixed(n);
                            // renum = curNum;
                        }
                    }
                } else {
                    renum = '0';
                }
            }
            return symbol + renum + unit;
        },
        /**
         * [favNumber description] 格式化大位数字  超过万 显示  xx万  xx亿
         * @param  {[type]} value [description]  值
         * @param  {[type]} n     [description]  保留几位小数  默认2
         * @param  {[type]} f     [description]  是否需要格式  默认true
         * @return {[type]}       [description]
         */
        favNumber: function (value, n, f) {
            var curNum = Number(value);
            var unit = '';
            var symbol = '';
            var renum = '';
            n = n || 2;
            f = f || '1';
            if (curNum != null || curNum != undefined) {
                if (curNum >= 0) {
                    symbol = '';
                } else {
                    symbol = '-';
                    curNum = Math.abs(curNum);
                }
                if (curNum) {
                    if (f != '0') {
                        if (curNum >= 1000000) {
                            curNum = curNum / 10000;
                            unit = '万';
                            renum = curNum.toFixed(n)
                        } else if (curNum < 1000000) {
                            renum = curNum;
                        }
                    }
                } else {
                    renum = '0';
                }
            }
            return symbol + renum + unit;
        },
        /**
         * [UrlEncode description] url编码处理
         * @param {[type]} url [description]
         */
        UrlEncode: function (url) {
            if (!url) {
                throw new Error('编码处理参数错误！');
            }
            return encodeURIComponent(url);
        },
        /**
         * [UrlDecode description] url解码处理
         * @param {[type]} url [description]
         */
        UrlDecode: function (url) {
            if (!url) {
                throw new Error('解码处理参数错误！');
            }
            return decodeURIComponent(url);
        },
        /**
         * [getUrlArgs description]  获取url中的参数
         * @return {[type]} [description] {Object}
         * {
         *    has: 'url中是否有参数',
         *    data: {'返回对象'}
         * }
         */
        getUrlArgs: function () {
            var url = location.search.replace(/#.*$/, ''); //获取url中"?"符后的字串
            var result = {
                has: false, //url中是否有传参数
                data: {} //如果has是true,则data里有值
            };
            if (url.indexOf("?") != -1) {
                result.has = true;
                url = url.substr(1);
                result.data = this.queryToJson(url);
            }
            return result;
        },
        /**
         * [queryToJson description] 把query格式的数据转换成json格式
         * @param  {[type]} querystr [description] query格式参数 name=aa&sex=man
         * @param  {[type]} decode   [description] 参数值是否解码，默认为true
         * @return {[type]}          [description] {Object} {name:'aa',sex:'man'}
         */
        queryToJson: function (querystr, decode) {
            if (!querystr) {
                throw new Error('queryToJson参数错误');
            }
            if (typeof decode != 'boolean') {
                decode = true;
            }
            var result = {};
            var arr = querystr.split("&");
            for (var i = 0, len = arr.length; i < len; i++) {
                var itemarr = arr[i].split('=');
                if (decode) {
                    result[itemarr[0]] = this.UrlDecode(itemarr[1]);
                } else {
                    result[itemarr[0]] = itemarr[1];
                }
            }
            return result;
        },
        /**
         * [checkPhone description] 手机号验证
         * @param  {[type]} value [description]
         * @return {[type]}       [description]
         */
        checkPhone: function (value) {
            if (!value) {
                throw new Error('checkPhone参数错误！');
            }
            return /^1[3|4|5|7|8]\d{9}$/.test(value);
        },
        /**
         * [checkCode description] 检测是否为股票代码
         * @param  {[type]} value [description]
         * @return {[type]}       [description]
         */
        checkCode: function (value) {
            if (!value) {
                throw new Error('checkCode参数错误！');
            }
            return /^\d{6}$/.test(value);
        },
        /**
         * [GetLength description] 获取字符串长度
         * @param {[type]} str [description]
         */
        GetLength: function (str) {
            if (!str) {
                throw new Error('GetLength参数错误');
            }
            var realLength = 0,
                len = str.length,
                charCode = -1;
            for (var i = 0; i < len; i++) {
                charCode = str.charCodeAt(i);
                if (charCode > 0 && charCode <= 128) {
                    realLength += 1;
                } else {
                    realLength += 2;
                }
            }
            return realLength;
        },
        /**
         * [CutStr description] 截取字符长度
         * @param {[type]} str [description]
         * @param {[type]} len [description]
         * 包含中英文字符，中文字符算俩个，英文字符算一个
         */
        CutStr: function (str, len) {
            if (!str) {
                throw new Error('CutStr参数错误');
            }
            var char_length = 0;
            len = len || 20;
            for (var i = 0, lens = str.length; i < lens; i++) {
                var son_str = str.charCodeAt(i);
                (son_str > 0 && son_str <= 128) ? char_length += 1: char_length += 2;
                if (i == lens - 1) {
                    if (char_length > len) {
                        return str.substr(0, len / 2) + "...";
                        break;
                    } else if (char_length == len) {
                        return str
                    }
                }
            }
        },
        /**
         * [getText description] 实现超出字符省略
         * @param  {[type]} str [description]
         * @param  {[type]} len [description]
         * @return {[type]}     [description]
         */
        getText: function (str, len) {
            if (!str && !len) {
                throw new Error('getText参数错误！');
            }
            if (this.GetLength(str) >= len) {
                var str = this.CutStr(str, len);
                return str
            } else {
                return str
            }
        },
        /**
         * [Point description] 自动添加小数点后两位
         * @param {[type]} val [description] 格式化的值
         * @param {[type]} len [description] 小数点的位数
         * @param {[type]} str [description] 默认不添加%,1表示添加
         */
        Point: function (val, len, str) {
            val = val.toString();
            if (!val) {
                throw new Error('Point参数错误！');
            }
            var strI = /^\d+$/;
            var pNum = parseFloat(val, 10);
            if (isNaN(val) || val == '') {
                return val;
            } else if (strI.test(pNum)) {
                len == 1 ? pNum = pNum + '.0' : pNum = pNum + '.00';
                return str == 1 ? pNum + '%' : pNum
            } else {
                var pNum = pNum.toFixed(2);
                return str == 1 ? pNum + '%' : pNum
            }
        },
        /**
         * [Identity description]老师身份判断
         * @param {[type]} v [description]
         */
        Identity: function (value) {
            if (!value) {
                throw new Error('Identity参数错误！');
            }
            var colorArr = this.getCookie('colorArr');
            if (colorArr.length) {
                for (var i = 0, len = colorArr.length; i < len; i++) {
                    if (value == colorArr[i].type_id) {
                        return {
                            type_name: colorArr[i].type_name,
                            type_color: colorArr[i].type_color
                        };
                    }
                }
            }
        },
        /**
         * [stripScript description] 过滤特殊字符
         * @param  {[type]} s [description]
         * @return {[type]}   [description]
         */
        stripScript: function (s) {
            var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~]");
            var rs = "",
                len = s.length;
            for (var i = 0; i < len; i++) {
                rs = rs + s.substr(i, 1).replace(pattern, '');
            }
            return rs;
        },
        /**
         * [getHost description] 获取当前host地址
         * @return {[type]} [description]
         */
        getHost: function () {
            return window.location.origin ? window.location.origin : window.location.protocol + '//' + window.location.host;
        },
        /**
         * [outLogin description] 处理key过期
         * @return {[type]} [description]
         */
        outLogin: function (layers) {
            layers.toast('回话已过期，请重新登录！', 500);
            if (this.getCookie('member_info')) {
                this.removeCookie('member_info');
            }
            setTimeout(function () {
                window.location.href = '/stockCenter.html';
            }, 700);
        },
        /**
         * [loadMore description]加载更多
         * @param  {[type]}   bottomH  [description]距底部的值
         * @param  {[type]}   stop     [description]开关
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
        loadMore: function (bottomH, stop, callback) {
            if (!bottomH) {
                throw new Error('bottomH参数错误！');
            }
            totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop() + bottomH);
            if ($(document).height() <= totalheight) {
                if (stop == true) {
                    stop = false;
                    $(".discussList").show();
                    $(".discussList span").html("<i></i>加载更多")
                    typeof callback === 'function' && callback.call(this);
                }
            }
        },
        GetQueryStringInStr: function (url, name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var new_url = url.split("?");
            if (new_url.length > 1) {
                new_url = '?' + new_url[1];
                var r = new_url.substr(1).match(reg);
                if (r != null) return unescape(r[2]);
                return null;
            } else {
                return null;
            }
        },
        /**
         * 函数去抖: 避免函数重复执行
         * @param method 待执行的目标函数的引用
         * @param wait 延迟执行时间, 若无默认 500 ms
         */
        debounce: function (method, wait) {
            clearTimeout(method.tId);
            method.tId = setTimeout(function () {
                method();
            }, wait || 500);
        },
        /**
         * [toFixed description] toDecimal 强制补全小数点后两位
         * @param  {[type]} value    [description]  value
         * @return {[type]}          [description]
         */
        toDecimal: function (value) {
            var f = parseFloat(value, 10);
            if (isNaN(f)) {
                return false;
            }
            var f = Math.round(value * 100) / 100;
            var str = f.toString();
            var rs = str.indexOf('.');
            if (rs < 0) {
                rs = str.length;
                str += '.';
            }
            while (str.length <= rs + 2) {
                str += '0';
            }
            return str;
        }
    }
});