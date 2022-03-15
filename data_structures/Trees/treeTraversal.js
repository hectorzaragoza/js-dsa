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

