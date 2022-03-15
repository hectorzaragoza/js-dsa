// Tree traversal
// Given any tree, How do we visit any node, once?
// Remember, trees can be unsorted.
// What would our path be to visit each node once? What's the most efficient path?

// Two Main Ways to Traverse a tree
//  1) Breadth-first Search (Horizontal approach, Breadth is across childrens, at each lower level, look to all children at that level)
//  2) Depth-first Search (Vertical approach)
//      a. in order
//      b. pre order
//      c. Post Order

// Breadth First Search Intro (BFS)
// Visit every node (each sibling) on a level, before moving down a level. I am working horizontally.
// To do a BFS, we are going to do this iteratively by modelling a queue using a list or an array

// Pesudocode
/**
 * Create a queue (this can be an array) and a variable to store the values of nodes visited
 * Place the root node in the queue
 * Loop as long as there is anything in the queue
 *      Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
 *      If there is a left property on the node dequeued - add it to the queue
 *      If there is a right property on the node dequeued - add it to the queue
 * Return the variable that stores the values
 */

// BFS method on a bST class
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value)
        if(this.root === null) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while(true) {
                if(value === current.value) return undefined
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if(current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
    find(value) {
        if(this.root === null) return false
        let current = this.root, found = false
        while(current && !found) {
            if(value < current.value) {
                current = current.left
            } else if(value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        if(!found) return undefined
        return current
    }
    BFS() {
        let data = [],
        queue = [],
        node = this.root
        queue.push(node.value)
        while(queue.length) {
            node = queue.shift()
            data.push(node)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }
}