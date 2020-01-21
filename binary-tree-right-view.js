function Node(value){
    this.left = null
    this.right = null
    this.value = value
}

function getRightViewTree(root, level, result) {
    if(root == null) {
        return 
    }
    getRightViewTree(root.left, level+1, result)
    getRightViewTree(root.right, level+1, result)
    result[level] = root.value
}

treeNode =new Node(10)
treeNode.right=new Node(20)
treeNode.left = new Node(5)
treeNode.left.right = new Node(8)
treeNode.left.left = new Node(3)
treeNode.left.left.left = new Node(1)
var result = {}
getRightViewTree(treeNode, 1, result)
console.log(result)
