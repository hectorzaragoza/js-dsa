// Removing a node from the end of a Linked List
// To do so, you have to assign a new tail, but you have to traverse from the beginning since you have no 
// pointer to the previous node from the tail...(limitation of a singly linked list)

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
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye!")

console.log("Actual linked list: ", list)
// console.log(list.traverse())
console.log("Pop: ", list.pop())