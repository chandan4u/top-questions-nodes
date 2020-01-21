function Node(value) {
    this.left = null
    this.right= null
    this.value = value
}
var depth = 1
function getDepthTree(root, level) {
    if(root == null) {
        return
    }
    getDepthTree(root.left, level+1)
    getDepthTree(root.right, level+1)
    if(root.left == null && root.right == null) {
        if(level > depth) {
            depth = level
        }
    }
    return depth
}

treeNode =new Node(10)
treeNode.right=new Node(20)
treeNode.left = new Node(5)
treeNode.left.right = new Node(8)
treeNode.left.left = new Node(3)
treeNode.left.left.left = new Node(1)
console.log(treeNode)

result = getDepthTree(treeNode, 1)
console.log(result)