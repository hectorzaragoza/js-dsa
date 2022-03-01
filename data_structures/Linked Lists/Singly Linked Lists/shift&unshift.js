// Shift
// Removing a new node from the beginning of the Linked List

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
    // Popping pseudocode
    // If there are no nodes in the list, return undefined
    // Loop through the list until you reach the tail
    // Set the next property of the 2nd to last node to be null
    // Set the tail to be the 2nd to last node
    // Decrement the length of the list by 1
    // Return the value of the node removed
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

    // Simple traverse method example
    // traverse() {
    //     let current = this.head
    //     while(current) {
    //         console.log(current.val)
    //         current = current.next
    //     }
    // } 
    
    // Shifting Pseudocode
    // If there are no nodes, return undefined
    // Store the current head property in a variable
    // Set the head property to be the current head's next property
    // Decrement the length by 1
    // Return the value of the node removed
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

    // Unshifting
    // Adding a new node to the beginning of the Linked List
    // This function should accept a value
    // Create a new node using the value passed to the function
    // if there is no head property on the list, set the head and tail to be the newly created node
    // Otherwise set the newly created node's next property to be the current head property on the list
    // Set the head property on the list to be that newly created node
    // Increment the length of the list by 1
    // Return the linked list
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
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye!")

// console.log("Actual linked list: ", list)
// console.log(list.traverse())
// console.log("Pop: ", list.pop())
// console.log("Shift: ", list.shift())
// list.shift()
// console.log("list: ", list)
// list.push(100)
// console.log("list: ", list)