// Get - accessing a node in a DLL by its position
// You can now work from either the head or the tail depending on which end the value you are looking for tends to.

// Pseudocode
/**
 * If the index is less than 0 or greater or equal to the length, return null
 * If the index is less than or equal to half the length of the list
 *      Loop through the list starting from the head and loop towards the middle
 *      Return the node once it is found
 * If the index is greater than half the length of the list
 *      Loop through the list starting from the tail and loop towards the middle
 *      Return the node once it is found
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
        this.length++
        return this
    }
    pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }

    shift() {
        if(this.length === 0) return undefined
        let oldHead = this.head
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if(index < 0 || index >= this.length) return null
        let count, current
        if(index <= this.length/2) {
            console.log("Working from start")
            count = 0
            current = this.head
            while(count != index) {
                current = current.next
                count++
        }
        } else {
            console.log("Working from end")
            count = this.length - 1
            current = this.tail
            while(count !== index) {
                current = current.prev
                count--
            }
        }
        return current
    }
}