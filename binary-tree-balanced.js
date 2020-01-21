
// Dmax - Dmin <= 1

function Node(value) {
    this.left = null
    this.right = null
    this.value = value
}

function maxDepth(root){
    if(root == null) {
        return 0
    }
    return 1+ Math.max(maxDepth(root.left), maxDepth(root.right))
}

function minDepth(root){
    if(root == null) {
        return 0
    }
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}

function isBalancedTree(root) {
    if(root ==null) {
        return 0
    }
    console.log(maxDepth(root), minDepth(root))
    return maxDepth(root) - minDepth(root) <= 1
}



treeNode =new Node(10)
treeNode.right=new Node(20)
treeNode.right.right=new Node(30)
treeNode.right.left=new Node(15)
treeNode.left = new Node(5)
treeNode.left.right = new Node(8)
treeNode.left.left = new Node(3)
treeNode.left.left.left = new Node(1)
treeNode.left.left.left.result = new Node(2)
result = isBalancedTree(treeNode)
console.log(result)