### DSA

- Big O Notation
- Analyzing performance
- Problem Solving Approach
- Problem Solving Patterns
- Recursion
- Searching Algorithms
- Sorting Algorithms
    - Bubble, Selection, Insertion, Merge, Quick, Radix
- Intro to Data Structures
- Singly, Doubly linked lists
- Stacks and Queues
- Binary Search Trees
- Tree Traversal
- Binary Heaps
- Hash Tables
- Graphs/Graph Traversal
- Dijkstra's Algorithm

## Big O Notation
Define Time and Space complexity

- How do you decide on what solution is best for a particular problem?
- Big O helps you decide what's best. Helps you classify different categories of performance.

- Tradeoffs of different approaches when scaling. Performance matters.

- Formalize fuzzy counting
    - how the runtime of an algorithm grows as the inputs grow (input size, and time relative to that input). What is the general trend of time consumption as you increase n?
    - could be Linear, quadratic, constant, something else.

    - Big O deals with the worst case scenario. The upper bound.
    - In the second solution, the number of operations does not change as n grows. In the first, it does. The num of operations is a multiple of n.

O(n) time grows at a constant growth rate relative to n. O(n^2) as n grows, runtime grows at a faster pace, roughly n*n.

## Simplifying Big O operations
- O(2n) becomes O(n) because the number of operation will grow as factor of n.

- O(500) becomes O(1), this is a constant runtime because regardles of what n is, the number of operations remains the same. 

- O(13n^2) becomes O(n^2)

* Remember we are looking at trends, so constants dont really matter as we are looking from outer space... O(n^2 + 5n + 8) is just O(n^2) because the constants dont really affect the trend as the size grows!

Big O Shorthands
1. Arithmetic operations are constant
2. Variable Assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. The complexity is the length of the loop times the complexity of whatever happens inside of the loop. (nested loop could potentially be n squared.)

### Space complexity (The amount of memory that is taken up. (by the algorithm, not the inputs))

* We know that n grows so we don't care about that in space complexity, we care that as n grows, how much space is taken up by our algorithm.

- Most primitives are constant space (booleans, numbers, undefined, null)
- Strings require O(n) space (where n is the string length)
- Reference types are generall O(n) where n is the length (for arrays) or the number of keys (for objects)

## Logarithms

a Log is the inverse of exponents.
log base 2 (8) = 3;

This says, 2 to what power, equals 8?

The same as saying 2^3 = 8.

Rule of thumb:
- The binary logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

Certain searching algos have log time complexity
Efficient sorting algos involve logs
Recursion sometimes involves log space complexity.

Recap:
- To analyze performance of an algorithm, we use Big O notation.
- Big O can give us a high level understanding of the time or space complexity of an algorithm.
- We don't care about precision but only general trends (linear, quadratic, constant)
- Time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm.