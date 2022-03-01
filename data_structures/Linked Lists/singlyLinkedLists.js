// Ordered
// Data structure with no indices where each node has a value and a pointer to the next node or null if it's the last one.
// Like a train.
// Contains head, tail, and length property
// Singly linked list, each node is connected ONE directionally to the next node
// Double linked list, each node is connected Bi directionally, next and previous.

// Compare these to arrays
// Lists
// Dont have indexes
// Connected via nodes with a next pointer
// Random access is not allowed (with a list, you have to traverse to the specific point you want)
// You can insert or delete a lot better than with arrays since you don't have to reindex everything

// Arrays
// Indexed in order
// Insertion and deletion can be expensive
// Can quickly be accessed at a specific index

// Starter code
// Node: piece of data in value, reference to next node - next

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
        // Function should accept a value
        // Create a new node using the value passed to the function
        // If there is no head property on the list, set the head and tail to be the newly created node
        // Otherwise set the next property on the tail to be the new node and set the tail property on the list ot be
        // the newly created node
        // Increment the length by one
        // Return the linked list
    } 
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// console.log("This is first node: ", first)

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye!")

console.log("Actual linked list: ", list)