


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

## How do objects and arrays work? (Through the lens of Big O)
- Explain why adding elements to the beginning of an array is costly
- compare and contrast runtime for arrays and objects and their built-in methods.

-- Big O of objects
Unordered, key value pairs
- fast access, for insertion and removal, Both of these, and Access have O(1) and Searching has O(n)
- .keys, .entries, .hasOwnProperty
- The fact that it does not have an order, it does make them by default fast as opposed to array where the order matters.

-- Big O of Arrays (ordered lists)
- Each element has a numeric value as its index. Use them when you need order. (But also consider linked lists)
- Insertion and Removal, Big O depends
- Searching is O(n)
- Access is O(1)
- Push and pop are always faster than shift and unshift.
- Big O of Array Methods
    -  foreach, filter, map, reduce O(N)
    - sort - O(N*log N) for some of them.

## Algorithms and Problem Solving Patterns
- How can you go about figuring out to solve problems?
- What are some code archetypes to look out for?

What is an algorithm?
- a process or set of steps to accomplish a certain task.
- It's the foundation for being a successful problem solver and developer.

How to improve?
1) Devise a plan for solving problems
2) Master common problem solving patterns

### Problem solving
    - Understand the problem
    - Explore concrete examples
    - Break it down
    - Solve / Simplify
    - Look back and refactor

1) Understanding the problem.
    - Before jumpin into the code. Make sure you ask clarifying questions to get a clear understanding of the problem. (Keep in mind the edge cases)
    a) Can I restate the problem in my own words?
    b) What are the inputs that go into the problem?
    c) What are the outputs?
    d) Can the outputs be determined from the inputs? Do I have enough information to answer this problem?
    e) How should I label the important pieces of data that are a part of the problem?

2) Exploring concrete examples
    - Examples also provide sanity checks that your eventual solution works how it should.
    - e.g. User Stories, Unit Tests
    - Start with simple examples
    - Progress to more complex examples
    - Explore examples with empty inputs, then with invalid inputs.

3) Break it down
    - little comments, pseudocode.
    - Interviewers want to hear how you think and communicate your process.
    - Explicitly write out the steps you need to take.
    - Forces you to think about the code you'll write before you write it, and helps you catch any linkgering conceptual issues or misunderstandings before you dive in.

4) Solve or Simplify
    - Solve the problem, if you can't solve a simpler problem. Maybe ignore the part that is difficult for you, focus on what you know how to do and then return to incorporate the harder part that you know you might get stuck on instead of getting stuck  on the hard part and not making any progress whatsoever.

5) Look back and refactor (Maybe has the most room for growth as a developer)
    - can you check the result
    - can you derive the answer differently
    - can you understand it at a glance
    - can you use the result or method for some other problem?
    - can you improve the performance of your solution?
    - can you think of other ways to refactor?
    - How have other people solved this problem?

Recap!
- Understand the problem!
- You can ask questions (clarifying) of your interview. 
- Take the time to think through the problem and potential solutions and edge cases
- How do you handle errors?


## Problem Solving Patterns
- Master common problem solving patterns
    - Some patterns include: 
        - Frequency counter
        - Multiple pointers
        - sliding window
        - Divide and Conquer
        - Dynamic Programming
        - Greedy Algorithms
        - Backtracking
        - More...

## Recursion
- Iterative is the counterpart to Recursion
- Martin and the Dragon Story
- Two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive functions
- Use helper method recursion and pure recursion to solve more difficult problems

## Searching Algorithms

## Sorting Algorithms
- Rearranging item in a collection so that the items are in some kind of order.
- Ex. sorting numbers in desc or asc
    - names alphabetically
    - sort by any kind of attribute.

- Why learn this?
    - Sorting is an incredibly common task, so it's good to know how it works.
    - There are many ways of sorting things, each with their own advantages and disadvantages.

- We covered the elementary (or quadratic) sorting algorithms...Bubble, Insertion, Selection
- Worst case is O(n^2) time complexity and have a space complexity of O(1)
- All these are roughly equivalent


# Intermediate Sorting Algorithms
- They are faster but more complex than the elementary ones. (Don't be scared)
- Merge Sort, Quick Sort, Radix Sort. (These scale well)
- These can improve time complexity from O(n^2) to O(n log n)
- There is a tradoff between efficiency and simplicity
- The more efficient algorithms are much less simple, and generally take longer to understand.
- Comparison sorts, we are comparing two items at most at one time. (All the ones we've seen)






MISC
### 9 Tips for Technical Phone Interview with Clement Mihailescu (Operational Tips)
1. GET IN THE ZONE. Respect the game before the game.
2. Find a good location, that is private and quiet.
3. Find out all the details about the interview, test as much as you can beforehand, utilize your recruiter.
4. Make sure you have a good audio setp
5. Check if the interviewer AND you can hear each other well.
6. There can be latency, minimize the amount of pauses in your sentences,
pass off the conversation to interviewer by finishing your sentences with, does that make sense?
7. If you need to think, tell them. But not too often( interviewers usually want to hear you think out loud)
8. Highlight what youre talking about on the screen
9. Ask for next steps

# Data Structures
- Collections of values, the relationships among them, and the functions or operations that can be applied to the data.
- Different data structures excel at different things.
- Different ways of storing same type of data but relate them in different ways with different methods to act upon them.

### Singly Linked Lists
## Big O of Singly Linked Lists (Great for insertion or removal if you don't need random access)
- Insertion - O(1)
- removal, it depends O(1) or O(N)
- Searching O(N)
- Access O(N)

- RECAP
- Excellent alternative to arrays when insertion and deletion at the beginning are frequently required
- Arrays contain a built in index whereas Linked Lists do not
- The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues