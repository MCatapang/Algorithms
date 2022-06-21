/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) { 
        const newDLLNode = new DLLNode(data);
        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
        }
        return this;
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) { 
        const newDLLNode = new DLLNode(data);
        if(this.isEmpty()) {
            this.head = newDLLNode;
            this.tail = null;
        } else {
            let currentNode = this.head;
            while(currentNode.next != null) {
                currentNode = currentNode.next;
            }
            newDLLNode.prev = currentNode;
            currentNode.next = newDLLNode;
        }
        this.tail = newDLLNode;
        return this;
    }

    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() { 
        let counter = 1;
        let runner = this.head;
        while(runner.next != null) {
            counter++;
            runner = runner.next;
        }
        let powerWalker = this.head;
        let halfwayPoint = counter/2;
        while(halfwayPoint > 1) {
            powerWalker = powerWalker.next;
            halfwayPoint--;
        }
        powerWalker.prev.next = powerWalker.next;
        powerWalker.next.prev = powerWalker.prev;
        return powerWalker.data;
    }

    isEmpty() {
        return this.head === null;
    }

    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }
}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
    -5,
    -10,
    4,
    -3,
    6,
    1,
    -7,
]);

console.log(unorderedList.toArray());
console.log(unorderedList.removeMiddleNode());
console.log(unorderedList.toArray());