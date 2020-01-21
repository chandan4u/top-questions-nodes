function Node(value) {
    this.left = null
    this.right = null
    this.value = value
}

function getTopViewTree(root, hrt, result) {
    if(root ==null){
        return
    }
    result[hrt] = root.value
    getTopViewTree(root.left, hrt-1, result)
    getTopViewTree(root.right, hrt+1, result)
}

treeNode =new Node(10)
treeNode.right=new Node(20)
treeNode.left = new Node(5)
treeNode.left.right = new Node(8)
treeNode.left.left = new Node(3)
treeNode.left.left.right = new Node(4)
treeNode.left.left.left = new Node(1)
var result = {}
getTopViewTree(treeNode, 0, result)
console.log(result)