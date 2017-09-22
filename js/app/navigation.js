/**
 * 主窗口全局主题配置
 */
require(['vue','bootstrap', 'jquery.metisMenu', 'jquery.slimscroll', 'layui'], function (Vue) {
    var main = {
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
        },
        /* 原始js */
        getEvent:function(){
            $('#side-menu').metisMenu();
            // 打开右侧边栏
            $('.right-sidebar-toggle').click(function () {
                $('#right-sidebar').toggleClass('sidebar-open');
            });
        
            // 右侧边栏使用slimscroll
            $('.sidebar-container').slimScroll({
                height: '100%',
                railOpacity: 0.4,
                wheelStep: 10
            });
        
           /*  // 打开聊天窗口
            $('.open-small-chat').click(function () {
                $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
                $('.small-chat-box').toggleClass('active');
            });
        
            // 聊天窗口使用slimscroll
            $('.small-chat-box .content').slimScroll({
                height: '234px',
                railOpacity: 0.4
            });
         */
            // Small todo handler
            $('.check-link').click(function () {
                var button = $(this).find('i');
                var label = $(this).next('span');
                button.toggleClass('fa-check-square').toggleClass('fa-square-o');
                label.toggleClass('todo-completed');
                return false;
            });
        
            //固定菜单栏
            $(function () {
                $('.sidebar-collapse').slimScroll({
                    height: '100%',
                    railOpacity: 0.9,
                    alwaysVisible: false
                });
            });
        
        
            // 菜单切换
            $('.navbar-minimalize').click(function () {
                $("body").toggleClass("mini-navbar");
                SmoothlyMenu();
            });
        
        
            // 侧边栏高度
            function fix_height() {
                var heightWithoutNavbar = $("body > #wrapper").height() - 61;
                $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");
            }
            fix_height();
        
            $(window).bind("load resize click scroll", function () {
                if (!$("body").hasClass('body-small')) {
                    fix_height();
                }
            });
        
            //侧边栏滚动
            $(window).scroll(function () {
                if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
                    $('#right-sidebar').addClass('sidebar-top');
                } else {
                    $('#right-sidebar').removeClass('sidebar-top');
                }
            });
        
            $('.full-height-scroll').slimScroll({
                height: '100%'
            });
        
            $('#side-menu>li').click(function () {
                if ($('body').hasClass('mini-navbar')) {
                    NavToggle();
                }
            });
            $('#side-menu>li li a').click(function () {
                if ($(window).width() < 769) {
                    NavToggle();
                }
            });
        
            $('.nav-close').click(NavToggle);
        
            //ios浏览器兼容性处理
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                $('#content-main').css('overflow-y', 'auto');
            }
        
            $(window).bind("load resize", function () {
                if ($(this).width() < 769) {
                    $('body').addClass('mini-navbar');
                    $('.navbar-static-side').fadeIn();
                }
            });
        
            function NavToggle() {
                //$('.navbar-minimalize').trigger('click');
            }
        
            function SmoothlyMenu() {
                if (!$('body').hasClass('mini-navbar')) {
                    $('#side-menu').hide();
                    setTimeout(
                        function () {
                            $('#side-menu').fadeIn(500);
                        }, 100);
                } else if ($('body').hasClass('fixed-sidebar')) {
                    $('#side-menu').hide();
                    setTimeout(
                        function () {
                            $('#side-menu').fadeIn(500);
                        }, 300);
                } else {
                    $('#side-menu').removeAttr('style');
                }
            }
        
            $('#fixednavbar').click(function () {
                if ($('#fixednavbar').is(':checked')) {
                    $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
                    $("body").removeClass('boxed-layout');
                    $("body").addClass('fixed-nav');
                    $('#boxedlayout').prop('checked', false);
        
                    if (localStorageSupport) {
                        localStorage.setItem("boxedlayout", 'off');
                    }
        
                    if (localStorageSupport) {
                        localStorage.setItem("fixednavbar", 'on');
                    }
                } else {
                    $(".navbar-fixed-top").removeClass('navbar-fixed-top').addClass('navbar-static-top');
                    $("body").removeClass('fixed-nav');
        
                    if (localStorageSupport) {
                        localStorage.setItem("fixednavbar", 'off');
                    }
                }
            });
        
        
            // 收起左侧菜单
            $('#collapsemenu').click(function () {
                if ($('#collapsemenu').is(':checked')) {
                    $("body").addClass('mini-navbar');
                    SmoothlyMenu();
        
                    if (localStorageSupport) {
                        localStorage.setItem("collapse_menu", 'on');
                    }
        
                } else {
                    $("body").removeClass('mini-navbar');
                    SmoothlyMenu();
        
                    if (localStorageSupport) {
                        localStorage.setItem("collapse_menu", 'off');
                    }
                }
            });
        
            // 固定宽度
            $('#boxedlayout').click(function () {
                if ($('#boxedlayout').is(':checked')) {
                    $("body").addClass('boxed-layout');
                    $('#fixednavbar').prop('checked', false);
                    $(".navbar-fixed-top").removeClass('navbar-fixed-top').addClass('navbar-static-top');
                    $("body").removeClass('fixed-nav');
                    if (localStorageSupport) {
                        localStorage.setItem("fixednavbar", 'off');
                    }
        
        
                    if (localStorageSupport) {
                        localStorage.setItem("boxedlayout", 'on');
                    }
                } else {
                    $("body").removeClass('boxed-layout');
        
                    if (localStorageSupport) {
                        localStorage.setItem("boxedlayout", 'off');
                    }
                }
            });
        
            // 默认主题
            $('.s-skin-0').click(function () {
                $("body").removeClass("skin-1");
                $("body").removeClass("skin-2");
                $("body").removeClass("skin-3");
                return false;
            });
        
            // 蓝色主题
            $('.s-skin-1').click(function () {
                $("body").removeClass("skin-2");
                $("body").removeClass("skin-3");
                $("body").addClass("skin-1");
                return false;
            });
        
            // 黄色主题
            $('.s-skin-3').click(function () {
                $("body").removeClass("skin-1");
                $("body").removeClass("skin-2");
                $("body").addClass("skin-3");
                return false;
            });
        
            if (localStorageSupport) {
                var collapse = localStorage.getItem("collapse_menu");
                var fixednavbar = localStorage.getItem("fixednavbar");
                var boxedlayout = localStorage.getItem("boxedlayout");
        
                if (collapse == 'on') {
                    $('#collapsemenu').prop('checked', 'checked')
                }
                if (fixednavbar == 'on') {
                    $('#fixednavbar').prop('checked', 'checked')
                }
                if (boxedlayout == 'on') {
                    $('#boxedlayout').prop('checked', 'checked')
                }
            }
        
            if (localStorageSupport) {
        
                var collapse = localStorage.getItem("collapse_menu");
                var fixednavbar = localStorage.getItem("fixednavbar");
                var boxedlayout = localStorage.getItem("boxedlayout");
        
                var body = $('body');
        
                if (collapse == 'on') {
                    if (!body.hasClass('body-small')) {
                        body.addClass('mini-navbar');
                    }
                }
        
                if (fixednavbar == 'on') {
                    $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
                    body.addClass('fixed-nav');
                }
        
                if (boxedlayout == 'on') {
                    body.addClass('boxed-layout');
                }
            }
        
            //判断浏览器是否支持html5本地存储
            function localStorageSupport() {
                return (('localStorage' in window) && window['localStorage'] !== null)
            }
        
            //计算元素集合的总宽度
            function calSumWidth(elements) {
                var width = 0;
                $(elements).each(function () {
                    width += $(this).outerWidth(true);
                });
                return width;
            }
            //滚动到指定选项卡
            function scrollToTab(element) {
                var marginLeftVal = calSumWidth($(element).prevAll()), marginRightVal = calSumWidth($(element).nextAll());
                // 可视区域非tab宽度
                var tabOuterWidth = calSumWidth($(".content-tabs").children().not(".J_menuTabs"));
                //可视区域tab宽度
                var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
                //实际滚动宽度
                var scrollVal = 0;
                if ($(".page-tabs-content").outerWidth() < visibleWidth) {
                    scrollVal = 0;
                } else if (marginRightVal <= (visibleWidth - $(element).outerWidth(true) - $(element).next().outerWidth(true))) {
                    if ((visibleWidth - $(element).next().outerWidth(true)) > marginRightVal) {
                        scrollVal = marginLeftVal;
                        var tabElement = element;
                        while ((scrollVal - $(tabElement).outerWidth()) > ($(".page-tabs-content").outerWidth() - visibleWidth)) {
                            scrollVal -= $(tabElement).prev().outerWidth();
                            tabElement = $(tabElement).prev();
                        }
                    }
                } else if (marginLeftVal > (visibleWidth - $(element).outerWidth(true) - $(element).prev().outerWidth(true))) {
                    scrollVal = marginLeftVal - $(element).prev().outerWidth(true);
                }
                $('.page-tabs-content').animate({
                    marginLeft: 0 - scrollVal + 'px'
                }, "fast");
            }
            //查看左侧隐藏的选项卡
            function scrollTabLeft() {
                var marginLeftVal = Math.abs(parseInt($('.page-tabs-content').css('margin-left')));
                // 可视区域非tab宽度
                var tabOuterWidth = calSumWidth($(".content-tabs").children().not(".J_menuTabs"));
                //可视区域tab宽度
                var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
                //实际滚动宽度
                var scrollVal = 0;
                if ($(".page-tabs-content").width() < visibleWidth) {
                    return false;
                } else {
                    var tabElement = $(".J_menuTab:first");
                    var offsetVal = 0;
                    while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {//找到离当前tab最近的元素
                        offsetVal += $(tabElement).outerWidth(true);
                        tabElement = $(tabElement).next();
                    }
                    offsetVal = 0;
                    if (calSumWidth($(tabElement).prevAll()) > visibleWidth) {
                        while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
                            offsetVal += $(tabElement).outerWidth(true);
                            tabElement = $(tabElement).prev();
                        }
                        scrollVal = calSumWidth($(tabElement).prevAll());
                    }
                }
                $('.page-tabs-content').animate({
                    marginLeft: 0 - scrollVal + 'px'
                }, "fast");
            }
            //查看右侧隐藏的选项卡
            function scrollTabRight() {
                var marginLeftVal = Math.abs(parseInt($('.page-tabs-content').css('margin-left')));
                // 可视区域非tab宽度
                var tabOuterWidth = calSumWidth($(".content-tabs").children().not(".J_menuTabs"));
                //可视区域tab宽度
                var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
                //实际滚动宽度
                var scrollVal = 0;
                if ($(".page-tabs-content").width() < visibleWidth) {
                    return false;
                } else {
                    var tabElement = $(".J_menuTab:first");
                    var offsetVal = 0;
                    while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {//找到离当前tab最近的元素
                        offsetVal += $(tabElement).outerWidth(true);
                        tabElement = $(tabElement).next();
                    }
                    offsetVal = 0;
                    while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
                        offsetVal += $(tabElement).outerWidth(true);
                        tabElement = $(tabElement).next();
                    }
                    scrollVal = calSumWidth($(tabElement).prevAll());
                    if (scrollVal > 0) {
                        $('.page-tabs-content').animate({
                            marginLeft: 0 - scrollVal + 'px'
                        }, "fast");
                    }
                }
            }
        
            //通过遍历给菜单项加上data-index属性
            $(".J_menuItem").each(function (index) {
                if (!$(this).attr('data-index')) {
                    $(this).attr('data-index', index);
                }
            });
        
            function menuItem() {
                // 获取标识数据
                var dataUrl = $(this).attr('href'),
                    dataIndex = $(this).data('index'),
                    menuName = $.trim($(this).text()),
                    flag = true;
                    var a;
                    menuName.indexOf('(') > 0  ? a = menuName.indexOf('(') : a = menuName.length;
                    menuName = menuName.substring(0,a);
               /*  if (dataUrl == undefined || $.trim(dataUrl).length == 0) return false; */
                    $("#content-main").html(menuName);
                // 选项卡菜单已存在
                $('.J_menuTab').each(function () {
                    if ($(this).data('id') == menuName) {
                        if (!$(this).hasClass('active')) {
                            $(this).addClass('active').siblings('.J_menuTab').removeClass('active');
                            scrollToTab(this);
                            // 显示tab对应的内容区
                            $('.J_mainContent .J_iframe').each(function () {
                                if ($(this).data('id') == menuName) {
                                    $(this).show().siblings('.J_iframe').hide();
                                    $("#content-main").html(menuName);
                                    return false;
                                }
                            });
                        }
                        flag = false;
                        return false;
                    }
                });
        
                // 选项卡菜单不存在
                if (flag) {
                    var str = '<a href="javascript:;" class="active J_menuTab" data-id="' + menuName + '">' + menuName + ' <i class="iconfont icon-delete"></i></a>';
                    $('.J_menuTab').removeClass('active');
                    $("#content-main").html(menuName);
                    // 添加选项卡对应的iframe
                    /* var str1 = '<iframe class="J_iframe" name="iframe' + dataIndex + '" width="100%" height="100%" src="' + dataUrl + '" frameborder="0" data-id="' + dataUrl + '" seamless></iframe>';
                    $('.J_mainContent').find('iframe.J_iframe').hide().parents('.J_mainContent').append(str1); */
                    // 添加选项卡
                    $('.J_menuTabs .page-tabs-content').append(str);
                    scrollToTab($('.J_menuTab.active'));
                }
                return false;
            }
        
            $('.J_menuItem').on('click', menuItem);
        
            // 关闭选项卡菜单
            function closeTab() {
                var closeTabId = $(this).parents('.J_menuTab').data('id');
                var currentWidth = $(this).parents('.J_menuTab').width();
                // 当前元素处于活动状态
                if ($(this).parents('.J_menuTab').hasClass('active')) {
        
                    // 当前元素后面有同辈元素，使后面的一个元素处于活动状态
                    if ($(this).parents('.J_menuTab').next('.J_menuTab').size()) {
        
                        var activeId = $(this).parents('.J_menuTab').next('.J_menuTab:eq(0)').data('id');


                        $('#content-main').html(activeId);
                        $(this).parents('.J_menuTab').next('.J_menuTab:eq(0)').addClass('active');
                        $('.J_mainContent .J_iframe').each(function () {
                            if ($(this).data('id') == activeId) {
                                $(this).show().siblings('.J_iframe').hide();
                                return false;
                            }
                        });
        
                        var marginLeftVal = parseInt($('.page-tabs-content').css('margin-left'));
                        if (marginLeftVal < 0) {
                            $('.page-tabs-content').animate({
                                marginLeft: (marginLeftVal + currentWidth) + 'px'
                            }, "fast");
                        }
        
                        //  移除当前选项卡
                        $(this).parents('.J_menuTab').remove();
        
                        // 移除tab对应的内容区
                        $('.J_mainContent .J_iframe').each(function () {
                            if ($(this).data('id') == closeTabId) {
                                $(this).remove();
                                return false;
                            }
                        });
                    }
        
                    // 当前元素后面没有同辈元素，使当前元素的上一个元素处于活动状态
                    if ($(this).parents('.J_menuTab').prev('.J_menuTab').size()) {
                        var activeId = $(this).parents('.J_menuTab').prev('.J_menuTab:last').data('id');
                        $('#content-main').html(activeId);
                        $(this).parents('.J_menuTab').prev('.J_menuTab:last').addClass('active');
                        $('.J_mainContent .J_iframe').each(function () {
                            if ($(this).data('id') == activeId) {
                                $(this).show().siblings('.J_iframe').hide();
                                return false;
                            }
                        });
        
                        //  移除当前选项卡
                        $(this).parents('.J_menuTab').remove();
        
                        // 移除tab对应的内容区
                        $('.J_mainContent .J_iframe').each(function () {
                            if ($(this).data('id') == closeTabId) {
                                $(this).remove();
                                return false;
                            }
                        });
                    }
                }
                // 当前元素不处于活动状态
                else {
                    //  移除当前选项卡
                    $(this).parents('.J_menuTab').remove();
        
                    // 移除相应tab对应的内容区
                    $('.J_mainContent .J_iframe').each(function () {
                        if ($(this).data('id') == closeTabId) {
                            $(this).remove();
                            return false;
                        }
                    });
                    scrollToTab($('.J_menuTab.active'));
                }
                return false;
            }
        
            $('.J_menuTabs').on('click', '.J_menuTab i', closeTab);
        
            //关闭其他选项卡
            function closeOtherTabs() {
                $('.page-tabs-content').children("[data-id]").not(":first").not(".active").each(function () {
                    $('.J_iframe[data-id="' + $(this).data('id') + '"]').remove();
                    $(this).remove();
                });
                $('.page-tabs-content').css("margin-left", "0");
            }
            $('.J_tabCloseOther').on('click', closeOtherTabs);
        
            //滚动到已激活的选项卡
            function showActiveTab() {
                scrollToTab($('.J_menuTab.active'));
            }
            $('.J_tabShowActive').on('click', showActiveTab);
        
        
            // 点击选项卡菜单
            function activeTab() {
                if (!$(this).hasClass('active')) {
                    var currentId = $(this).data('id');
                    $('#content-main').html(currentId);
                    // 显示tab对应的内容区
                    $('.J_mainContent .J_iframe').each(function () {
                        if ($(this).data('id') == currentId) {
                            $(this).show().siblings('.J_iframe').hide();
                            return false;
                        }
                    });
                    $(this).addClass('active').siblings('.J_menuTab').removeClass('active');
                    scrollToTab(this);
                }
            }
        
            $('.J_menuTabs').on('click', '.J_menuTab', activeTab);
        
            //刷新iframe
            function refreshTab() {
                var target = $('.J_iframe[data-id="' + $(this).data('id') + '"]');
                var url = target.attr('src');
            }
        
            $('.J_menuTabs').on('dblclick', '.J_menuTab', refreshTab);
        
            // 左移按扭
            $('.J_tabLeft').on('click', scrollTabLeft);
        
            // 右移按扭
            $('.J_tabRight').on('click', scrollTabRight);
        
            // 关闭全部
            $('.J_tabCloseAll').on('click', function () {
                $('.page-tabs-content').children("[data-id]").not(":first").each(function () {
                    $('.J_iframe[data-id="' + $(this).data('id') + '"]').remove();
                    $(this).remove();
                });
                $('.page-tabs-content').children("[data-id]:first").each(function () {
                    $('.J_iframe[data-id="' + $(this).data('id') + '"]').show();
                    $(this).addClass("active");
                });
                $('.page-tabs-content').css("margin-left", "0");
            });
        },
        /* vue初始化数据 */
        getNavData:function(that){
            var navData = [
                {name:'全部',num:'999+'},
                {name:'部分回收资源',num:'998',child:[
                    {name:'市场部一组',num:'300',child:[
                        {name:'市场部一组1',num:150},
                        {name:'市场部一组2',num:150}
                    ]},
                    {name:'市场部二组',num:'500',child:[
                        {name:'市场部二组1',num:150},
                        {name:'市场部二组2',num:150}
                    ]},
                ]},
                {name:'意向客户',num:'999'},
                {name:'共享给我的客户',num:'999'},
                {name:'下属的客户',num:'999'},
                {name:'转移给我的客户',num:'999'},
                {name:'一开客户',num:'999'},
                {name:'客户池',num:'999'}
            ];
            that.list = navData;
        },
        /* 实例化 */
        init: function(){
            main.getEvent();
            main.select();
            main.tableInfo();
        }
    };
    /* 注册vue */
    var vm = new Vue({
        el:'#wrapper',
        data:{
            list:''
        },
        created:function(){
            main.getNavData(this);
        },
        mounted:function(){
            main.init();
        }
    });
});