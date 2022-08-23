
import {initMixin} from './init'

// Vue核心代码,只是一个Vue的声明
function Vue(options) {
    //进行Vue的初始化操作
    this._init(options)
}
// 通过引入文件的方法，给Vue原型添加方法
initMixin(Vue);
export default Vue;