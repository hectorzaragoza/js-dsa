// Adding a node in a DLL by a certain position

// Pseudocode
/**
- If the index is less than zero or greater than or equal to the length return false
- if the index is 0, unshift
- if the index is the same as the length, push
- Use the get method to access the index - 1
- set the next and prev properties on the correct nodes to link everything together
- increment the length
- Return true
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

    set(index, val) {
        let foundNode = this.get(index)
        if(foundNode != null) {
            foundNode.val = val
            return true
        }
        return false
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(val)
        if(index === this.length)  return !!this.push(val)
        
        let newNode = new Node(val)
        let beforeNode = this.get(index-1)
        let afterNode = beforeNode.next

        beforeNode.next = newNode, newNode.prev = beforeNode
        newNode.next = afterNode, afterNode.prev = newNode
        this.length++
        return true
    }
}