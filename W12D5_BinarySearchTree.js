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
     * BFS order: horizontal rows top-down left-to-right.
     * Converts this BST into an array following Breadth First Search order.
     * Example on the fullTree var:
     * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
     * @param {Node} current The current node during the traversal of this tree.
     * @returns {Array<number>} The data of all nodes in BFS order.
     */
    toArrLevelorder(current = this.root) {
        let outputData = []; // stores node.data
        let treeNodeQueue = []; // stores node

        treeNodeQueue.push(current);

        while (treeNodeQueue.length != 0) {
            let tempNode = treeNodeQueue.shift(); // accesses the 1st node in treeNodeQueue
            outputData.push(tempNode.data);
            if (tempNode.left) {
                treeNodeQueue.push(tempNode.left);
            }
            if (tempNode.right) {
                treeNodeQueue.push(tempNode.right);
            }
        }
        return outputData;
    }

    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root) {
        let count = 0;
        if(node) {
            count++;
            count += this.size(node.left);
            count += this.size(node.right);
        }
        return count;
    }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(node = this.root) {
        let heightLeft = 0;
        let heightRight = 0;
        if(node.left) {
            heightLeft = this.height(node.left);
        }
        if(node.right) {
            heightRight = this.height(node.right);
        }
        return heightLeft > heightRight ? heightLeft+1 : heightRight+1;
    }

    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     */
    isFull(node = this.root) {
        if(node.left && node.right) {
            if(this.isFull(node.left) && this.isFull(node.right)) {
                return true;
            } else {
                return false;
            }
        } else if ((node.left && !node.right) || (!node.left && node.right)) {
            return false;
        } else {
            return true;
        }
    }

    toArrInorder(node = this.root, vals = []) {
        if (node) {
            this.toArrInorder(node.left, vals); // traverses to the left
            vals.push(node.data);
            this.toArrInorder(node.right, vals); // traverses to the right
        }
        return vals;
    }

    toArrPostorder(node = this.root, vals = []) {
        if (node) {
            this.toArrPostorder(node.left, vals);
            this.toArrPostorder(node.right, vals)
            vals.push(node.data);
        }
        return vals;
    }

    insert(newVal) {
        const node = new BSTNode(newVal);

        if (this.isEmpty()) {
            this.root = node;
            return this;
        }

        let current = this.root;

        while (true) {
            if (newVal <= current.data) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }

                current = current.left;
            } else {
                // newVal is greater than current.data
                if (current.right === null) {
                    current.right = node;
                    return this;
                }

                current = current.right;
            }
        }
    }

    insertRecursive(newVal, curr = this.root) {
        if (this.isEmpty()) {
            this.root = new BSTNode(newVal);
            return this;
        }

        if (newVal > curr.data) {
            if (curr.right === null) {
                curr.right = new BSTNode(newVal);
                return this;
            }
            return this.insertRecursive(newVal, curr.right);
        }

        if (curr.left === null) {
            curr.left = new BSTNode(newVal);
            return this;
        }
        return this.insertRecursive(newVal, curr.left);
    }

    contains(searchVal) {
        let current = this.root;

        while (current) {
            if (current.data === searchVal) {
                return true;
            }

            if (searchVal < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    containsRecursive(searchVal, current = this.root) {
        if (current === null) {
            return false;
        }

        if (current.data === searchVal) {
            return true;
        }

        if (searchVal < current.data) {
            return this.containsRecursive(searchVal, current.left);
        }

        if (searchVal > current.data) {
            return this.containsRecursive(searchVal, current.right);
        }
    }

    range(startNode = this.root) {
        if (!startNode) {
            return null;
        }
        return this.max(startNode) - this.min(startNode);
    }

    isEmpty() {
        return this.root === null;
    }

    min(current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.left) {
            current = current.left;
        }
        return current.data;
    }

    minRecursive(current = this.root) {
        if (current === null) {
            return null;
        }

        if (current.left === null) {
            return current.data;
        }
        return this.minRecursive(current.left);
    }

    max(current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.right) {
            current = current.right;
        }
        return current.data;
    }

    maxRecursive(current = this.root) {
        if (current === null) {
            return null;
        }

        if (current.right === null) {
            return current.data;
        }
        return this.maxRecursive(current.right);
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

/* fullTree
                root
              <-- 25 -->
            /            \
          15             50
        /    \          /    \
      10      22      35      70
    /   \    /  \    /  \   /  \
   4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90);

// console.log(fullTree.toArrPreorder());
// console.log(fullTree.toArrInorder());
// console.log(fullTree.toArrPostorder());
// console.log(fullTree.toArrLevelorder());
// console.log(fullTree.size());
// console.log(fullTree.height());
console.log(twoLevelTree.isFull());
console.log(threeLevelTree.isFull());
console.log(fullTree.isFull());