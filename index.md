vue 和 react 的区别：
1.
Vue核心思想是渐进式的双向数据绑定的MVVM框架
React核心思想是组件化、单向数据流、声明式渲染，既不是MVC框架也不是MVVM框
2.react的单项数据流：
react的单向数据流是从父组件传递数据给子组件，通过改变父组件的数据从而触发子组件的更新，这样做的好处是可以形成回溯，可以清晰的找出数据的来源。
3.MVVM和MVC区别
MVVC模型、视图、控制器
MVVM viewmodel 处理逻辑使得返回的东西符合视图的需求

Vue和react的diff算法不同：
1.
Vue和react两者都是同级比较，但是Vue如果元素一样但是class不一样，他会认为是两个不同的节点。react就会认为是同一节点
2.
虚拟DOM：
本质是对象，用来描述真实DOM
3.
diff算法实质是对比算法，通过对比新旧虚拟DOM，找出发生改变的节点从而渲染真实DOM，而不渲染没发生改变的节点，提高性能减少对真实DOM的操作
4.
Vuediff算法是采用了首尾指针对比的方法，react则采用的是从左到右依次比对方法，如一个数组首尾元素发生替换，Vue会直接将首尾进行替换，react则会依次比对导致其他元素也会跟着移动

Vue和react的组件上的写法不同
1.
Vue是通过template来写的，react通过jsx来写的


Vue2和Vue3区别

vue2用的是defindproperty  vue3用的是proxy，用于解决Vue2中的不能监听对象的新增，以及数组的痛点。

webpack几大核心：
1.
入口(entry),出口(ouput),plugins(处理插件)，module(处理loader) mode(分辨生产环境or开发环境) devtool(定位错误的位置方便调试)
plugins 通过new一个实例来使用，数据通过参数传递
module  是通过module.rules来加入loader，module.rules是一个数组，loader是通过对象的形式写入这个数组中，对象中属性test是匹配文件规则的，use是放入loader名的

2.常见的loader：less-loader  file-loader style-loader css-loader ts-loader label-loader url-loader
3.常见的插件：
cleanWebpackPlugin 每次build会把多余的文件删除掉，不用每次手动删除dist文件夹
HtmlWebpackPlugin 会在打包后的文件夹自动生成index.html
DefinePlugin 定义全局变量的





