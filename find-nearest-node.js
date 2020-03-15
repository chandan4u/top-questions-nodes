
function Node(value) {
    this.left = null
    this.right = null
    this.value = value
}

function closestLeafNode(root, value) {
    if (root == null) {
        return 0
    }
    let temp = {}
    return getClosestLeaf(root, value, temp, 0)
}

function getClosestLeaf(root, value, temp, level) {
    if (root == null) {
        return 0
    }
    if(root.value == value) {
        minDistance = getMinDistanceFromLeaf(root, 0)
        for(let i = level-1; i>=0; i--) {
            minDistance = Math.min(minDistance, level - i + getMinDistanceFromLeaf(temp[i], 0))
        }
        console.log(minDistance)
    }
    
    temp[level] = root
    getClosestLeaf(root.left, value, temp, level+1)
    getClosestLeaf(root.right, value, temp, level+1)
}

min = 999
function getMinDistanceFromLeaf(node, level) {
    if (node == null) {
        return
    }
    if(node.left == null && node.right == null) {
        if (min > level) {
            min = level
        }
    }
    getMinDistanceFromLeaf(node.left, level+1)
    getMinDistanceFromLeaf(node.right, level+1)
    return min
}

treeNode = new Node(2)
treeNode.right = new Node(9)
treeNode.left = new Node(7)
treeNode.left.left = new Node(10)
treeNode.left.left.left = new Node(12)
treeNode.left.left.left.left = new Node(14)
treeNode.left.right = new Node(6)
treeNode.left.right.left = new Node(5)
treeNode.left.right.left.left = new Node(4)
treeNode.left.right.left.left.left = new Node(3)
treeNode.left.right.left.left.left.left = new Node(2)


let value = 6
closestLeafNode(treeNode, value)
