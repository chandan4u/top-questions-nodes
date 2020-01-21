function Node(value){
    this.value = value
    this.next = null
}

function reverse(root) {
    var previous = null
    while(root){
        temp = root.next
        root.next = previous
        previous = root
        root = temp
    }
    return previous
}

function insert(root, value) {
    node = new Node(value)
    console.log(node)
    current = root
    while(current.next) {
        current = current.next
    }
    current.next = node
    return root
}

list = new Node(10)
list.next = new Node(20)
list.next.next = new Node(30)
list.next.next.next = new Node(40)

console.log(JSON.stringify(list))

res = reverse(list)

console.log(JSON.stringify(res))

ff = insert(res, 90)
console.log(JSON.stringify(ff))