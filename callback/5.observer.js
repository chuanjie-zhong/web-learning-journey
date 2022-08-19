// 观察者模式  有观察者  肯定有被观察者  观察者需要放在被观察者中  被观察者的状态发生变化需要通知观察者，我变化了

// 内部也是基于发布订阅模式  收集观察者  状态变化后要通知观察者

class subject { //被观察者
    constructor(name){
        this.name=name;
        this.state='开心的'
        this.observer=[]
    }
    atter(o){//订阅
        this.observer.push(o)
    }
    setState(newSetState){//发布
        this.state=newSetState;
        this.observer.forEach((item=>item.update(this)))
    }
}

class observer{ // 观察者
    constructor(name){
        this.name=name;
    }
    update(sub){
        console.log(`通知${this.name}宝宝${sub.state}`)
    }
}

let father = new observer('爸爸');
let monther = new observer('妈妈');
let baby = new subject('宝宝');

baby.atter(father);
baby.atter(monther);

baby.setState('哭了')

//发布订阅和观察者模式是不一样的，观察者模式有观察和被观察的关系,发布订阅的发布和订阅两者联系不大，靠中介来实现