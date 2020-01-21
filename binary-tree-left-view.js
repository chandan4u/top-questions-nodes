function Node(value){
    this.left = null
    this.right = null
    this.value = value
}

function getLeftViewTree(root, level, result) {
    if(root == null) {
        return 
    }
    getLeftViewTree(root.left, level+1, result)
    getLeftViewTree(root.right, level+1, result)
    if(result[level] == undefined) {
        result[level] = root.value
    }
}

treeNode =new Node(10)
treeNode.right=new Node(20)
treeNode.left = new Node(5)
treeNode.left.right = new Node(8)
treeNode.left.left = new Node(3)
treeNode.left.left.left = new Node(1)
var result = {}
getLeftViewTree(treeNode, 1, result)
console.log(result)
