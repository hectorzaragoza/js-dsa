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
    // Depth First Search (DFS)
// Working vertically first
// 3 steps for any node, visit the node itself (value), traverse left side, and traverse the right side.
// Pesudocode for a recursive solution
/**
 * Create a variable to store the values of nodes visited
 * Store the root of the BST ina variable called current
 * Write a helper function which accepts a node
 *      Push the value of the node to the variable that stores the values
 *      If the node has a left property, call the helper function with the left property on the node
 *      If the node has a right property, call the helper function with the right property on the node
 * Invode the helper function with the current variable
 * Return the array of values
 */
    DFSPPreOrder() {
        let data = []
        let current = this.root
        function traverse(node) {
            data.push(node.value)
            if(node.left) {
                traverse(node.left)
            }
            if(node.right) {
                traverse(node.right)
            }
        }
        traverse(current)
        return data
    }
    //How we traverse, will have a significant impact on the output of our array.
    // Go all the way down on the left, explore left and right, bubble up, then explore all down the right, explore left and right, bubble up, the root is the last thing that is visited.
    // Same pseudocode as before except we traverse left and right first and then push the node to the array
    DFSPostOrder() {
        let data = []
        function traverse(node) {
            if(node.left) {
                traverse(node.left)
            }
            if(node.right) {
                traverse(node.right)
            }
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }
    // DFS InOrder
    // Entire left side, visit the node, then the entire right side
    DFSInOrder() {
        let data = []
        // Same as the other but the order of traversal and push is different
        function traverse(node){
            if(node.left) {
                traverse(node.left)
                data.push(node.value)
            }
            if(node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root)
        return data
    }
}


