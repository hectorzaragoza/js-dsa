// Stacks and Queues
/**
 * Both are abstract data structures, collections of data. (They are concepts, LIFO and FIFO)
 * Stack are LIFO data structure, Last in First out.
 * Queue are First in First out.
 * 
 * ..You could implement a stack using a linked list
 * ..we've seen this before in the call stack (for to manage function invocations), Undo/Redo in paint, history object in your browser
 * There is more than one way to implement a stack
 */

let stack = []

stack.push("google")
stack.push("instagram")
stack.push("youtube")

stack.pop() 

//Using push and pop on an array creates a stack. Since, push adds to the end and pops removes from the end.

// Unshift and shift will add and remove from the beginning of the array.
stack.unshift("create new file")
stack.unshift("resized file")

stack.shift()
// You can add and remove as long as it follows the LIFO and FIFO
// Remember that adding and removing to an array at the beginning, has to reindex every element so it's not very efficient,
// compared to using a linked list.

// Linked List Implementation
// Pseudocode
/**
 * The function should accept a value
 * Create a new node with that value
 * If there are no nodes in the stack, set the first and last property to be the newly created node
 * If there is at least one node, create a variable that stores the current first property on the stack
 * Reset the first property to be the newly created node
 * Set the next property on the node to be the previously created variable
 * Increment the size of the stack by 1
 */

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    // Pop pseudocode
    /**
     * If there are no nodes in the stack, return null
     * Create a temp variable to store the first property on the stack
     * If there is only 1 node, set the first and last property to be null
     * If there is more than one node, set the first property to be the next property on the current first
     * Decrement the size by 1
     * Return the value of the node removed
     */
    pop() {
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

// Big O of Stacks
/**
 * Insertion Constant O of 1
 * Removal O of 1
 * Searching O of N
 * Access O of N
 * The first two are what matter since you care about how you can deal with the last added element to a stack, LIFO and 
 * via a linked list, we are inserting or removing from the beginning which is the same every time regardless of the length of the 
 * data strtucture so we get constant time.
 */