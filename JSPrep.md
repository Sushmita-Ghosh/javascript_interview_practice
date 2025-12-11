# JavaScript Senior Interview 1-Week Detailed Revision Plan

## Table of Contents

1. [Day 1: Core JS Concepts & Language Fundamentals](#day-1-core-js-concepts--language-fundamentals)
2. [Day 2: ES6+ & Modern JS Features](#day-2-es6--modern-js-features)
3. [Day 3: Objects, Arrays & Functional JS](#day-3-objects-arrays--functional-js)
4. [Day 4: Async, Event Loop & Promises](#day-4-async-event-loop--promises)
5. [Day 5: Memory, Performance & Patterns](#day-5-memory-performance--patterns)
6. [Day 6: Browser, DOM & Frontend Concepts](#day-6-browser-dom--frontend-concepts)
7. [Day 7: Coding Exercises & Revision](#day-7-coding-exercises--revision)

---

## Day 1: Core JS Concepts & Language Fundamentals

### 1. Difference between `var`, `let`, and `const`

**Answer (Senior-level explanation):**

- `var` is function-scoped, which means it is accessible anywhere within the function it is declared. Historically, this caused many subtle bugs, especially in loops and asynchronous callbacks, because `var` does not respect block scope.
- `let` is block-scoped, meaning it only exists within the nearest set of `{}` braces. It prevents accidental redeclaration and limits exposure to only where it’s needed.
- `const` is also block-scoped and must be initialized at declaration. Its value cannot be reassigned, but objects and arrays declared with `const` can still have their properties or elements mutated. This allows immutability at the reference level while retaining flexibility for internal state.

**Example:**

```js
function testVarLetConst() {
  var x = 1;
  if (true) {
    var x = 2; // same variable, overrides previous x
    let y = 3; // block scoped
    const z = 4; // block scoped and immutable reference
  }
  console.log(x); // 2
  // console.log(y); // ReferenceError
  // console.log(z); // ReferenceError
}
```

**Best practice:** Always use `const` by default, `let` when mutation is required, and avoid `var`.

**Resource:** [MDN var, let, const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

---

### 2. Explain hoisting with examples

**Answer:**

- Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function) during the compilation phase. This applies to both variables and function declarations.
- Important nuance: **initializations are not hoisted**, only declarations.

**Examples:**

```js
console.log(a); // undefined
var a = 5; // declaration hoisted, initialization stays here

console.log(b); // ReferenceError
let b = 10; // in temporal dead zone until initialized

function foo() {
  console.log("foo");
}
foo(); // works fine, function declarations hoisted fully
```

- **Takeaway:** Understanding hoisting prevents subtle runtime errors. Hoisting explains why `var` variables are undefined when accessed before declaration, while `let` and `const` throw a ReferenceError.

**Resource:** [MDN Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

---

### 3. Closures — memory implications

**Answer:**

- A **closure** occurs when a function retains access to its lexical scope even after the outer function has executed. This allows private variables and encapsulation, which is powerful for modular code.
- Memory implication: Closures keep variables alive in memory as long as the inner function exists. If these closures reference heavy objects or DOM elements and are not cleaned up, they can cause memory leaks.

**Example:**

```js
function counter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}

const c = counter();
c(); // 1
c(); // 2
```

- Even after `counter()` execution finishes, `count` persists because of the closure.

**Best practice:**

- Avoid holding unnecessary references in closures.
- Nullify or detach event listeners or DOM references when not needed.

**Resource:** [MDN Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

### 4. Explain `this` in JS

**Answer:**

- `this` is a dynamic reference to the context in which a function is executed, not where it is defined. The value depends on **how a function is called**:

  1. **Global context:** `this` points to `window` in browsers or `global` in Node.
  2. **Object method:** `this` points to the object that invoked the method.
  3. **Constructor function / class:** `this` points to the instance created with `new`.
  4. **Arrow functions:** `this` is lexically bound; it inherits from the enclosing scope.

**Example:**

```js
const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
  arrowGreet: () => console.log(this.name), // inherits from outer scope
};
obj.greet(); // Alice
obj.arrowGreet(); // undefined (depends on outer scope)
```

- **Senior insight:** Understanding `this` is critical for event handling, object-oriented design, and avoiding subtle bugs in callbacks and async code.

**Resource:** [MDN this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

---

### 5. Difference between `==` and `===`

**Answer:**

- `==` checks equality after **type coercion**; it converts one or both operands to a common type.
- `===` checks **strict equality** without converting types.
- For clean, predictable code, always prefer `===`.

**Examples:**

```js
5 == "5"; // true, string coerced to number
5 === "5"; // false, types differ
null == undefined; // true
null === undefined; // false
```

- **Senior insight:** Interviews often include tricky cases like `0 == false`, `'' == 0`. Being precise shows understanding of type coercion rules.

**Resource:** [MDN Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

---

### 6–20: [Additional Day 1 questions] (To be detailed in the same format)

- Include closures, scopes, hoisting, `this`, type coercion, symbols, BigInt, primitive vs reference, variable shadowing, temporal dead zone, etc.
- Each with **code examples, explanation, edge cases, best practices, and MDN references**.

---

## Day 2: ES6+ & Modern JS Features

### 1. Arrow Functions vs Regular Functions

**Answer:**

- Arrow functions provide a concise syntax and **lexically bind `this`**, meaning they inherit `this` from the enclosing context, unlike regular functions which determine `this` based on how they are called.
- **Pros:** shorter syntax, avoids common `this` pitfalls.
- **Cons:** cannot be used as constructors, no `arguments` object.

**Example:**

```js
const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
  arrowGreet: () => console.log(this.name),
};
obj.greet(); // Alice
obj.arrowGreet(); // undefined (lexical `this`)
```

- **Resource:** [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

### 2. Rest & Spread Operators

**Answer:**

- **Rest (`...args`)** collects multiple arguments into an array. Useful for variadic functions.
- **Spread (`...array`)** expands an array or object into individual elements.

**Examples:**

```js
// Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // 6

// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1,2,3,4]
```

- **Senior insight:** Spread is excellent for immutable updates; rest simplifies function signatures.
- **Resource:** [MDN Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

### 3. Destructuring Arrays & Objects

**Answer:**

- Allows extracting values from arrays or properties from objects into distinct variables.
- Makes code cleaner and avoids repetitive access.

**Examples:**

```js
const arr = [1, 2, 3];
const [a, b] = arr; // a=1, b=2

const obj = { name: "Alice", age: 25 };
const { name, age } = obj; // name='Alice', age=25
```

- **Edge cases:** nested destructuring, default values, renaming properties.
- **Resource:** [MDN Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

### 4. Template Literals

**Answer:**

- Multi-line strings and string interpolation using backticks.
- Can include expressions and function calls.

**Example:**

```js
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!
```

- **Resource:** [MDN Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

---

### 5. Default Parameters

**Answer:**

- Function parameters can have default values to handle undefined arguments.
- Reduces need for checks inside function.

**Example:**

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
greet("Alice"); // Hello, Alice
```

- **Resource:** [MDN Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

---

### 6. Optional Chaining (`?.`) & Nullish Coalescing (`??`)

**Answer:**

- `?.` prevents errors when accessing nested properties if an intermediate is null/undefined.
- `??` provides a default value only when left-hand side is `null` or `undefined`.

**Examples:**

```js
const user = { address: { city: "NY" } };
console.log(user.address?.city); // NY
console.log(user.contact?.phone); // undefined

const value = null ?? "default"; // 'default'
```

- **Resource:** [MDN Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

---

### 7. Modules (`import/export`)

**Answer:**

- ES6 modules allow splitting code into reusable files.
- `export` exposes functions/objects, `import` brings them in.
- Supports static imports (compile-time) and dynamic imports (runtime).

**Example:**

```js
// utils.js
export const sum = (a, b) => a + b;

// main.js
import { sum } from "./utils.js";
console.log(sum(2, 3)); // 5
```

- **Resource:** [MDN Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

---

### 8. Generators & Iterators

**Answer:**

- **Generators** allow pausing/resuming functions with `yield`. Useful for lazy evaluation and asynchronous flows.
- **Iterators** define a standard way to traverse a collection.

**Example:**

```js
function* gen() {
  yield 1;
  yield 2;
}
const g = gen();
console.log(g.next().value); // 1
console.log(g.next().value); // 2
```

- **Resource:** [MDN Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

---

### 9. `for...of` vs `for...in`

**Answer:**

- `for...in` iterates over keys/properties of an object.
- `for...of` iterates over iterable values (arrays, strings, sets).

**Example:**

```js
const arr = [10, 20];
for (let i in arr) console.log(i); // 0,1
for (let val of arr) console.log(val); // 10,20
```

- **Resource:** [MDN for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

---

### 10. Well-known Symbols

**Answer:**

- Symbols like `Symbol.iterator` customize default behavior of objects.
- Used for defining protocols like iteration, async iteration.

**Example:**

```js
const obj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  },
};
for (let val of obj) console.log(val); // 1,2
```

- **Resource:** [MDN Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

---

**Remaining Day 2 questions (11–20)** can continue in the same style with detailed explanations, code examples, edge cases, best practices, and references.

## Day 3: Objects, Arrays & Functional JS

- Cover array methods, object methods, prototypes, higher-order functions, currying, partial application, immutability.
- Include **examples, performance considerations, edge cases**.

## Day 4: Async, Event Loop & Promises

- Event loop detailed with microtasks/macrotasks explanation, promise behavior, async/await, debounce/throttle, fetch, XHR, error handling.
- **Code snippets and visualization tips**.

## Day 5: Memory, Performance & Patterns

- Garbage collection, memory leaks, closures, debounce/throttle, module pattern, singleton, factory, observer, memoization, pub/sub.
- Include **real-world scenarios** and best practices.

## Day 6: Browser, DOM & Frontend Concepts

- Event bubbling/capturing, reflow/repaint, localStorage/sessionStorage/cookies, CORS, DOM manipulation, performance optimization, virtual DOM.
- Include **code examples and practical tips**.

## Day 7: Coding Exercises & Revision

- Array/string manipulation, recursion, memoization, Promise concurrency, autocomplete/search filters, sorting/searching.
- Include **implementation, edge cases, complexity analysis, and performance notes**.

---

**Note:** This Markdown file is structured for senior-level interview prep with **detailed explanations and code examples** for each question. The full content for **all 140+ questions** can be expanded in the same detailed style for every day.
