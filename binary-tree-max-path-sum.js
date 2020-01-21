function Node(value) {
    this.left = null
    this.right = null
    this.value = value
}

var max = 0
var secMax = 0
function getMaxPathSumOfTree(root) {
    if (root == null) {
        return
    }
    if (root.value > secMax) {
        secMax = root.value
        if (secMax > max) {
            temp = max
            max = secMax
            secMax = temp
        }
    }
    getMaxPathSumOfTree(root.left)
    getMaxPathSumOfTree(root.right)
    return max + secMax
}

treeNode = new Node(10)
treeNode.right = new Node(40)
treeNode.right.right = new Node(100)
treeNode.left = new Node(5)
treeNode.left.right = new Node(8)
treeNode.left.left = new Node(3)
treeNode.left.left.left = new Node(1)
result = getMaxPathSumOfTree(treeNode)
console.log(result)