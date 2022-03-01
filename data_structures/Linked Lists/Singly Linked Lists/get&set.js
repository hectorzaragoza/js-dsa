// Retrieving a node by it's position in the linked list by th number of its position (like indexes)

// Get Pseudocode
// This function should accept an index
// If the index is less than zero or greater than or equal to the length of the list, return null
// Loop through the list until you reach the index and return the node at that specific index

// Set Pseudocode
// Changing the value of a node based on it's position in the Linked List
// Need two parameters, one for the index and one for the value.

class Node  {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(!this.head) {
            return undefined
        } 
        let current = this.head
        let newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
        console.log(current.val)
        console.log(newTail.val)
    }
    shift() {
        if(!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return currentHead
    }
    unshift(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index) {
            current = current.next
            counter++
        }
        return current
    }
    set(index, val) {
        // Set pseudocode
        // This function should accept a value and an index
        // Use your get function to find the specific node.
        // If the node is not found, return false
        // If the node is found, set the value of that node to be the value passed to the function and return true
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye!")
list.push("Band")