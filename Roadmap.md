# JavaScript Senior Interview 1-Week Revision Plan

---

## Day 1: Core JS Concepts & Language Fundamentals

**Topics to Revise:**

- Scope: global, function, block
- Hoisting: variables & functions
- Closures and memory
- `this`, `call`, `apply`, `bind`
- Type coercion, `==` vs `===`
- Symbols, BigInt, primitive vs reference types

**Example Questions:**

1. Difference between `var`, `let`, `const`
2. Explain hoisting with examples
3. Closures — memory implications
4. Explain `this` in arrow functions vs normal functions
5. What is the prototype chain?
6. `__proto__` vs `prototype`
7. Truthy vs falsy values
8. Difference between primitive and reference types
9. What is the difference between `null` and `undefined`?
10. How does scope affect garbage collection?
11. Explain dynamic vs lexical scope
12. How do you prevent memory leaks with closures?
13. Difference between function declaration and expression
14. Differences between `==` and `===`
15. Use cases for Symbols
16. What is `BigInt` and when to use it
17. Variable shadowing example
18. Explain temporal dead zone
19. What is block scope?
20. Difference between global object in Node vs browser

---

## Day 2: ES6+ & Modern JS Features

**Topics to Revise:**

- Arrow functions & lexical `this`
- Default parameters
- Template literals
- Destructuring arrays & objects
- Rest & spread operators
- Modules (`import/export`)
- Optional chaining & nullish coalescing
- Generators and iterators
- `for...of` and `for...in`
- Symbols & well-known symbols

**Example Questions:**

1. Arrow vs normal function `this` binding
2. Explain rest & spread operators
3. Array & object destructuring
4. Default parameters with examples
5. Template literals & tagged templates
6. Optional chaining `?.`
7. Nullish coalescing `??`
8. Modules vs scripts in JS
9. Dynamic imports
10. Generator function example
11. Explain iterators
12. `for...in` vs `for...of`
13. Symbols in ES6
14. Well-known symbols like `Symbol.iterator`
15. How to make a function iterable
16. Example using spread for shallow copy
17. Difference between shallow copy and deep copy
18. How `const` works with objects and arrays
19. Using template literals for multi-line strings
20. Real-world use cases of destructuring

---

## Day 3: Objects, Arrays & Functional JS

**Topics to Revise:**

- Array methods: `map`, `filter`, `reduce`, `some`, `every`, `find`
- Object methods: `keys`, `values`, `entries`, `assign`, `freeze`
- Prototypes & inheritance
- Deep vs shallow copy
- Higher-order functions
- Currying & partial application
- Immutability & spread/rest patterns

**Example Questions:**

1. Implement `map` from scratch
2. Implement `filter` from scratch
3. Implement `reduce` from scratch
4. Difference between `Object.keys` and `Object.entries`
5. Prototype chain explanation
6. How to deep clone an object
7. Shallow vs deep copy
8. Currying example
9. Partial application example
10. Higher-order functions example
11. Difference between `forEach` and `map`
12. Array deduplication
13. Difference between `Set` and `Map`
14. Using `reduce` to sum an array
15. Functional programming concepts
16. Immutability in arrays and objects
17. Example of chaining array methods
18. Flatten nested array
19. Transform object keys/values
20. Difference between mutable and immutable data

---

## Day 4: Async, Event Loop & Promises

**Topics to Revise:**

- Event loop
- Microtasks vs macrotasks
- `setTimeout`, `setInterval`, `requestAnimationFrame`
- Promises, async/await
- `Promise.all`, `Promise.race`, `Promise.allSettled`
- Error handling in async code
- Debounce & throttle
- Cancelable async requests
- Fetch API & XHR
- Callbacks vs promises

**Example Questions:**

1. Explain the event loop
2. Difference between microtasks and macrotasks
3. Output of async console.log examples
4. Difference between `setTimeout` and `requestAnimationFrame`
5. Implement debounce function
6. Implement throttle function
7. Difference between callbacks and promises
8. Convert callback to promise
9. How async/await works under the hood
10. Implement `Promise.all` from scratch
11. Implement `Promise.race` from scratch
12. Cancel a fetch request
13. Explain try/catch with async
14. Error propagation in async chains
15. Use cases for `Promise.allSettled`
16. Chaining promises
17. Common pitfalls with async/await
18. Async in loops
19. Difference between `.then` and `await`
20. Event delegation in async code

---

## Day 5: Memory, Performance & Patterns

**Topics to Revise:**

- Garbage collection
- Memory leaks
- Closures & scope
- Performance pitfalls
- Debounce & throttle
- Module pattern
- Singleton, Factory, Observer
- Memoization
- Pub/Sub pattern
- Higher-order patterns

**Example Questions:**

1. What is garbage collection in JS?
2. How do closures cause memory leaks?
3. Optimize large array loops
4. Debounce vs throttle
5. Explain module pattern
6. Singleton pattern in JS
7. Factory pattern example
8. Observer pattern example
9. Memoization function
10. Pub/Sub implementation
11. How to prevent memory leaks
12. Compare for vs forEach vs map performance
13. When to use weak maps/weak sets
14. Lazy evaluation examples
15. Recursion vs iteration
16. How to profile JS performance
17. Frontend vs backend performance considerations
18. Throttling scroll events
19. Explain event delegation
20. Difference between call stack and task queue

---

## Day 6: Browser, DOM & Frontend Concepts

**Topics to Revise:**

- Event bubbling and capturing
- Reflow & repaint
- LocalStorage, SessionStorage, Cookies
- CORS & Same-Origin Policy
- Fetch API
- DOM manipulation best practices
- Performance optimizations
- Debounce in UI
- Virtual DOM (React)
- Closures in event handlers

**Example Questions:**

1. Event bubbling vs capturing
2. What causes reflow/repaint
3. localStorage vs sessionStorage vs cookies
4. How CORS works
5. Same-Origin Policy explanation
6. Fetch vs XHR
7. How to debounce input events
8. How closures work in event listeners
9. DOM traversal and manipulation
10. Optimizing list rendering
11. Lazy loading images
12. Throttle scroll events
13. Event delegation example
14. Memory leaks in DOM
15. Explain virtual DOM
16. Difference between innerHTML vs textContent
17. Adding/removing event listeners
18. Performance of querySelector vs getElementById
19. Replacing DOM nodes efficiently
20. Use of requestAnimationFrame

---

## Day 7: Coding Exercises & Revision

**Topics to Revise:**

- Array/String manipulation
- Object/Map/Set problems
- Recursion problems
- Memoization
- Promise-based concurrency
- Small system design in JS (autocomplete, filters)
- Sorting & searching
- Event handling exercises
- Edge cases & performance
- Debounce, throttle, async patterns

**Example Questions:**

1. Implement debounce in JS
2. Implement throttle in JS
3. Flatten a nested array
4. Remove duplicates from array
5. Deep clone an object
6. Implement autocomplete search
7. Reverse a string
8. Reverse words in a string
9. Implement memoization
10. Implement Promise.all from scratch
11. Merge two sorted arrays
12. Count frequency of array elements
13. Find missing number in array
14. Check if string is palindrome
15. Implement a queue using two stacks
16. Find largest sum subarray
17. Implement event emitter/pub-sub
18. Convert nested object to flat object
19. Sort array of objects by key
20. Implement simple caching function

---

**Tips:**

- Spend 3–4 hours daily combining **concept revision + coding practice**.
- Make small notes for tricky behaviors like closures, `this`, event loop.
- Use **LeetCode, CodeSignal, HackerRank** for hands-on practice.
- For frontend JS, implement small components like search filters, autocomplete, etc.
