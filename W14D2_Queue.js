/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
        return this.size();
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() { 
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() { 
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { 
        return this.items.length == 0;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() { 
        return this.items.length;
    }
}

/* Rebuild the above class using a linked list instead of an array. */

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(item) {
        const newNode = new QueueNode(item);
        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let runner = this.head;
            while(runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return this.size();
    }

    dequeue() { 
        let firstOfList = this.head;
        let restOfList = this.head.next;
        this.head = restOfList;
        return firstOfList;
    }

    front() { 
        return this.head;
    }

    isEmpty() { 
        return this.head == null;
    }

    size() { 
        let count = 0;
        let runner = this.head;
        while(runner) {
            count++;
            runner = runner.next;
        }
        return count;
    }
}

// const newQueue = new Queue();
// console.log(newQueue.isEmpty());
// console.log(newQueue.enqueue(123));
// console.log(newQueue.enqueue(23));
// console.log(newQueue.enqueue(1241));
// console.log(newQueue.dequeue());
// console.log(newQueue.size());
// console.log(newQueue.front());

const newList = new LinkedQueue();
console.log(newList.isEmpty());
console.log(newList.size());
console.log(newList.enqueue(123));
console.log(newList.enqueue(4431));
console.log(newList.enqueue(0));
console.log(newList.front());
console.log(newList.dequeue());
console.log(newList.front());
console.log(newList.size());