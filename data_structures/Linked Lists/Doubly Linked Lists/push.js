// Push method pseudocode
/*
- Create a new node with the value passed to the function
- if the head property is null set the head and tail to be the newly created node
- if not, set the next property on the tail to be that node
- set the previous property on the newly created node to be the old tail
- set the tail to be the newly created node
- increment the length
- return the DLL
*/

// Two classes to set up a linked list
class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length += 1
        return this
    }
}