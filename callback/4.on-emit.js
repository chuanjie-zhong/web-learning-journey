//发布订阅模式 主要分为两部分 on emit
// on 就是把一些函数维护到一个数组中
// emit 就是让数组中的方法依次执行

let fs = require('fs');
let school ={}
let event ={//订阅和发布没有明显的关联，靠中介来实现
    arr:[],
    on(fn){
        this.arr.push(fn)
    },
    emit(){
        console.log(this.arr)
        this.arr.forEach(fn=>fn())
    }
    
}
event.on(function () {//订阅
    console.log('读取完毕')
})
event.on(function () {
    if(Object.keys(school).length==2){
        console.log(school)
    }
})




fs.readFile('./name.txt','utf8',function (err,data) {
    school.name = data;
    event.emit();//发布
})
fs.readFile('./age.txt','utf8',function (err,data) {
    school.age = data
    event.emit();
})

