import {initState} from './state.js'
export function initMixin(Vue) {
    //初始化流程
    Vue.prototype._init = function (options) {
        // console.log(options)

        // 数据的劫持
        const vm = this;// vue中使用 this.$options 指代的就是用户传递的属性
        vm.$options = options;

        //初始化状态
        initState(vm)//分割代码





        // 如果用户传入了el属性  需要将页面渲染出来
        // 如果用户传入了el 就要实现挂载流程
        if(vm.$options.el){

        }
    }

    Vue.prototype.$mount = function (el) {
    
    }
}