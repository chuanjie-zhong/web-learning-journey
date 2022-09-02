
/**
 * element 存储的是数据
 * next 存储的是下一个人的指针
 */
class Node {
    constructor(element,next){
        this.element = element;
        this.next = next;
    }
}

// 存储数据 add 添加 remove 删除 set 修改  get 获取
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(element){
        // 1.添加的时候创造一个添加的节点，让这个节点的next指向前一个人的next
        // 2.让前一个人的next指向他自己

        let head = this.head;//把当前的头拿出来

        // 
        new Node(element,)


        this.size++;
    }

}