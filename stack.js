function Node(value) {
    this.value = value
    this.next = null
}

class Stack {
    constructor() {
        this.top = null
    }

    push(value) {
        let node = new Node(value)
        if(this.top) {
            node.next = this.top
            this.top = node
        } else {
            this.top = node
        }
        console.log(this.top)
    }

    pop(){
        if(this.top) {
            let popItem = this.top
            this.top = this.top.next
            console.log(this.top)
            return popItem.value
        }
    }
}

ss = new Stack()
ss.push(10)
ss.push(20)
dd =ss.pop()
console.log(dd)