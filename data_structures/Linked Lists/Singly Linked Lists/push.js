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