// Doubly Linked List
// All that you do is add a pointer to the previous node, in addition to the pointer to the next node that you already had.
// Head and tail, no index, no random access, but every node has a pointer to the previous and next nodes, or null if it's the head or tail nodes.

// What makes a doubly linked list easier to work with, is that you can traverse starting from the head OR the tail.
// Because a DLL is bidirectional. (.previous())
// Since you now have to account for a next and a previous, you do USE more memory

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
}