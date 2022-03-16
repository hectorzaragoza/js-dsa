// Binary Heaps
// Heaps are another category of trees, with special additional considerations
// Two types: Min and Max Heaps

// Use cases:

// Very similar to a binary search tree
// In a MaxBinaryHeap, parent nodes are always larger than child nodes
// In a MinBinaryHeap, parent nodes are always smaller than child nodes

// Unlike a BST, there is no order of smaller on left or larger on right, but this focuses more on the parent child relationship rather than direction.

/**
 * MaxBH
 * Each parent has at most two child nodes
 * The value of each parent node is always larger than its child nodes
 * In a MBH the parent is greater than the children, but there are no guarantees between sibling nodes
 * a BH is as compact as possible. All the children of each node are as full as they can be and left children are filled out first
 *      *Every left and right is filled before we move down...
 */

// We will implement a Priority Queue, using a Binary Heap. Heaps are often used to do graph traversal algorithms.