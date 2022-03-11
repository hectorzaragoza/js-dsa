// Trees
// A data structure that consists of nodes in a parent/child relationship
// nodes are connected via "branches"
// Each node can point to more than 1 node.
// Top most node is the "root" node.

// Linked Lists are linear. (1 path)
// Trees are nonlinear (There are more than 1 paths)
// A singly linked list (is a special case of a tree)
// Can't have a node point to a sibling.
// Has to have ONE root.

// Terminology: Root, Child, Parent, Sibling, Leaf(a node with no children), edge (the connection between one node and another)

// Applications: 
/**
 * HTML Dom
 * Network Routing
 * Abstract syntax tree
 * Artificial Intelligence (decision trees)
 * folders in Operating Systems (directories)
 */

// We are going to focus on binary search trees
// Binary tree, a node can have a maximum of two children nodes
// BSTs are used to store data that can be sorted and compared
// If working with integers, all numbers less than parent node, are to the left, all numbers greater than parent,
// are located to the right of the parent

// Searching a BST
// The way this is sorted makes it easy to search for things and insert (a la divide and conque like in binary search,
// because you can essentially eliminate half of the data points at each iteration because you look if the element of 
// interest is less than or greater than the node value.)

// Binary Search Tree has a root and a Node has a value and a pointer to the left and the right.
class Node {
    constructor(value) {
        this.value = value
        this.left = left
        this.right = right
    }
}

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
}

let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)

// Pseudocode for inserting a node. (can be done iteratively or recursively)
/**
 * Create a new node
 * Starting at the root
 *      Check if there is a root, if not - the new node becomes the root
 *      If there is a root, check if the value of the new node is greater than or less than the value of the root
 *      If it is greater
 *          Check to see if there is a node to the right
 *                 If there is, mode to that node and repeat these steps
 *                 If there is not, add that node as the right property
 *      If it is less
 *          Check to see if there is a node to the left
 *              If there is, mode to that node and repeat these steps
 *              If there is not, add that node as the left property
 */

// Pseudocode for Finding a node in a BST
/**
 * Starting at the root
 *      Check if there is a root, if not- we're done searching!
 *      If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done
 *      If not, check to see if the value is greater than or less than the value of the root
 *      If it is greater,
 *          Check to see if there is a node to the right
 *              If there is, move to that node and repeat these steps
 *              if there is not, we are done searching
 *      If it is less
 *          Check to see if there is a node to the left
 *              If there is, mode to that node and repeat the steps
 *              If there is not, we're done searching
 */

//Big O of BST
/** Best and average case
 * Insertion O of log n
 * Searching O of log n
 * Not guaranteed
 */