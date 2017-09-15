!(function () {
    var BaseUrl = './js/';
    
    requirejs.config({
        baseUrl: BaseUrl,
        paths: {
            //--------------公共库----------------------
            'vue'                :       'libs/vue/vue.min',// vuejs
            'layui'              :       'libs/layui/layui',// layui 库
            'text'               :       'libs/require/require.text',// require.text
            'moment'             :       'libs/moment/moment_2.18.1',// 时间处理库
            'moment-zh-cn'       :       'libs/moment/zh-cn',
            'layer'              :       'libs/layui/lay/modules/layer',// 弹出层
            'layerpage'          :       'libs/layui/lay/modules/laypage',// 分页
            'jquery.cookie'      :       'libs/jquery/jquery.cookie', // 设置 cookie
            'jquery.SuperSlide'  :       'libs/jquery/jquery.SuperSlide.2.1',// 轮播
            'jquery.Jcrop'       :       'libs/jquery/jquery.Jcrop',// 图像剪裁
            'jquery.metisMenu'   :       'libs/jquery/jquery.metisMenu',//折叠菜单
            'jquery.slimscroll'  :       'libs/jquery/jquery.slimscroll.min',// 滚动条
            'lazyload'           :       'libs/jquery/jquery.lazyload.min',// 图片懒加载
            'validform'          :       'libs/jquery/validform_v5.3.2',// 表单验证
            'store'              :       'libs/store/store.min',// localStorage 、sessionStorage
            'bootstrap'          :       'libs/bootstrap/bootstrap.min',// bootstrap
            //--------------封装方法----------------------
            'ajaxurl'            :       'base/ajaxurl',// 全局 ajax url
            'layers'             :       'base/layers',// 弹出层
            'tools'              :       'base/tools',// 工具类
            'page'               :       'base/page',// 分页类
            'slide'              :       'base/slide',// tab 切换 幻灯片
            'placeholder'        :       'base/placeholder',// placeholder 实现
            'formate'            :       'base/formate',// 时间格式化类
        },
        shim: {
            'layui': {
                init: function(){
                    return this.layui.config({dir:'/js/libs/layui/'});
                }
            }
        },
        urlArgs: new Date().getTime() //"v=1.0"
    });
})();

window.jQuery && define('jquery', [], function () {
    return window.jQuery;
});