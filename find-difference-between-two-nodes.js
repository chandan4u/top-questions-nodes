
function Node(value) {
    this.left = null
    this.right = null
    this.value = value
}

function closestLeafNode(root, xNode, yNode) {
    if (root == null) {
        return 0
    }
    let temp = {}
    return getClosestLeaf(root, xNode, yNode, temp, 0)
}

function getClosestLeaf(root, xNode, yNode, temp, level) {
    if (root == null) {
        return 0
    }
    if(root.value == xNode) {
        minDistance = getMinDistanceFromLeaf(root,yNode, 0)
        
        // Back-order or parent iteration
        for(let i = level-1; i>=0; i--) {
            minDistance = Math.min(minDistance, level - i + getMinDistanceFromLeaf(temp[i],yNode, 0))
        }
        console.log(minDistance)
    }
    
    temp[level] = root
    getClosestLeaf(root.left, xNode, yNode, temp, level+1)
    getClosestLeaf(root.right, xNode, yNode, temp, level+1)
}

loc = 999
function getMinDistanceFromLeaf(node, yNode, level) {
    if (node == null) {
        return 0
    }

    getMinDistanceFromLeaf(node.left, yNode, level+1)
    getMinDistanceFromLeaf(node.right, yNode, level+1)

    if(node.value == yNode) {
        loc = level
    }
    return loc
}

treeNode = new Node(2)
treeNode.right = new Node(9)
treeNode.right.right = new Node(30)
treeNode.left = new Node(7)
treeNode.left.left = new Node(10)
treeNode.left.left.left = new Node(12)
treeNode.left.left.left.left = new Node(14)
treeNode.left.right = new Node(6)
treeNode.left.right.left = new Node(5)
treeNode.left.right.left.left = new Node(4)
treeNode.left.right.left.left.left = new Node(3)
treeNode.left.right.left.left.left.left = new Node(2)


let xNode = 30
let yNode = 5
closestLeafNode(treeNode, xNode, yNode)
