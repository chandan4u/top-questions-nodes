class Tree {
    constructor(value) {
        this.Left = null
        this.Right = null
        this.Value  =  value
    }

    insert(value) {
        if(value > this.Value) {
            if(this.Right == null){
                this.Right = new Tree(value)
            } else {
                this.Right.insert(value)
            }
        } else { 
            if(this.Left ==null){
                this.Left = new Tree(value)
            } else {
                this.Left.insert(value)
            }
        }
    }
}

treeNode = new Tree(10)

treeNode.insert(5)
treeNode.insert(15)
treeNode.insert(12)
treeNode.insert(20)
treeNode.insert(18)
treeNode.insert(19)
treeNode.insert(17)
treeNode.insert(16)