// Queue
/**
 * FIFO data structure concept
 * // Waiting in line to get into a multiplayer game
 * // Background tasks
 * // Uploading resources
 * // Printing queue (what you send first, will get printed first before the next file)
 * // Getting into a concert, restaurant
 */

// Many ways to implement a queue, but rule is FIFO
// Building a queue with an array
let q = []
// start by adding to the end
q.push("First")
q.push("Second")
q.push("Third")
// We want to remove from the begining with shift
q.shift()
q.shift()
q.shift()
// But this would reindex
q.unshift("First")
q.unshift("Second")
q.unshift("Second")
q.pop()
q.pop()
q.pop()

// You could do Push combined with Shift or Unshift combined with Pop. These follow the FIFO principal

// Queue implementation using a Singly Linked List (removing from the end has to iterate through the entire SLL because it's one directional)
// Enqueue and Dequeue

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    // Enqueue Pseudocode
    // This function accepts some value
    // Create a new node using the value passed to the function
    // If there are no nodes in the queue, set this node to be the first and last property of the queue
    // Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
    enqueue(val) {
        let newNode = new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    // Dequeue pseudocode
    // If there is no property, just return null
    // Store the first property in a variable
    // See if the first is the same as the last(check if there is only 1 node). If so, set the first and last to be null
    // If there is more than 1 node, set the first property to be the next property of first
    // Decrement the size by 1
    // Return the value of the node dequeued
    dequeue() {
        if(!this.first) return null
        let temp = this.first
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

// Big O of Queues
// Insertion and Removal are what matter 
// Insertion and Removal are both constant runtime O of 1
// Searching and Access don't really fit for this ds but are O of N.

/**
 * Queue is FIFO
 * Stack is LIFO
 * basically using combinations of push pop and shift and unshift
 * Useful for processing tasks and are foundational for more complex data structures
 */