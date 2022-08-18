class Animal{
    static flag(){
        return 123
    };// es7支持静态属性 es6 只支持静态方法
    constructor(name){
        this.name=name;
        this.eat='吃肉';
    }
    say(){
        console.log('say')
        console.log(this);// es6规范里 如果单独调用原型上的方法，this是不存在的
    }
}
//类不能当做函数调用
// let animal = new Animal();
// animal.say();
// console.log(Animal.flag())


class Tiger extends Animal{// 实例 + 原型

}

let tiger = new Tiger('王五');
tiger.say()
console.log(tiger.eat,tiger.name,Tiger.flag());// 静态方法可以被类继承，不能被实例继承