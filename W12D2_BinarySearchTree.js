class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains(searchVal) {
        if(this.isEmpty()) {
            return false;
        }
        let currentNode = this.root;
        while(currentNode) {
            if(currentNode.data == searchVal) {
                return true;
            } else if (currentNode.data > searchVal) {
                currentNode = currentNode.left;
            } else if (currentNode.data < searchVal) {
                currentNode = currentNode.right;
            } 
        }
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if(this.isEmpty()) {
            return false;
        }
        let currentNode = current;
        if (currentNode == null) {
            return false;
        } else if (currentNode.data == searchVal) {
            return true;
        } else if (currentNode.data > searchVal) {
            currentNode = currentNode.left;
            return this.containsRecursive(searchVal, currentNode);
        } else if (currentNode.data < searchVal) {
            currentNode = currentNode.right;
            return this.containsRecursive(searchVal, currentNode);
        }
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) {
        if(this.isEmpty()) {
            return 0;
        }
        let maxPointer = startNode;
        let minPointer = startNode;
        let maxValue, minValue;
        while(maxPointer) {
            maxValue = maxPointer.data;
            maxPointer = maxPointer.right;
        }
        while(minPointer) {
            minValue = minPointer.data;
            minPointer = minPointer.left;
        }
        return maxValue - minValue;
    }

    isEmpty() {
        return !this.root ? true : false;
    }

    min(current = this.root) { 
        while(current.left) {
            current = current.left;
        }
        return current.data;
    }

    minRecursive(current = this.root) { 
        if(current.left) {
            return this.minRecursive(current.left);
        } else {
            return current.data;
        }
    }

    max(current = this.root) { 
        while(current.right) {
            current = current.right;
        }
        return current.data;
    }

    maxRecursive(current = this.root) { 
        if(current.right) {
            return this.maxRecursive(current.right);
        }
        return current.data;
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
// console.log(emptyTree.isEmpty());
// console.log(oneNodeTree.isEmpty());
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
    /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
        /   \
        5     15
        / \    / \
        2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);
// console.log(threeLevelTree.min());
// console.log(threeLevelTree.max());
// console.log(threeLevelTree.print());
// console.log(threeLevelTree.minRecursive());
// console.log(threeLevelTree.maxRecursive());
let testNode = threeLevelTree.root.right;
console.log(threeLevelTree.range(testNode));

/* fullTree
                    root
                <-- 25 -->
            /            \
            15             50
        /    \         /    \
        10     22      35     70
    /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
// const fullTree = new BinarySearchTree();
// fullTree
//   .insert(25)
//   .insert(15)
//   .insert(10)
//   .insert(22)
//   .insert(4)
//   .insert(12)
//   .insert(18)
//   .insert(24)
//   .insert(50)
//   .insert(35)
//   .insert(70)
//   .insert(31)
//   .insert(44)
//   .insert(66)
//   .insert(90);