function Node(value) {
    this.value = value
    this.next = null
}

class Queue {
    constructor () {
        this.head = null
    }

    enqueue (item) {
        let node = new Node(item)
        if(!this.head) {
            this.head = node
        } else {
           let current = this.head
           while(current.next) {
                current = current.next
           }
           current.next = node
        }
        console.log(JSON.stringify(this))
    }

    dequeue () {
        if(!this.head) {
            console.log("Empty")
        } else {
            let itemToPop = this.head.data
            this.head = this.head.next
            return itemToPop
        }
    }
}