# javascript_interview_practice

This repository contains interview questions for javascript

Practice questions for Javascript Interview:

[Apurv's List](https://ak-javascript-slides.netlify.app/#0)

## TABLE OF CONTENTS:

| Serial No | Topic Name                                                       |
| --------- | ---------------------------------------------------------------- |
| 1         | [DEBOUNCING](#d)                                                 |
| 2         | [MEMOIZATION](#se)                                               |
| 3         | [SPREAD VS REST](#fccc)                                          |
| 4         | [WHAT IS ES6 AND ITS FEATURES](#es6)                                                          |
| 5         | [CLOSURES](#c)                                                   |
| 6         | [CALL, APPLY, BIND](#cab)                                        |
| 7         | [MAP, FILTER, REDUCE](#mfr)                                      |
| 8         | [UNDEFINED, NOT DEFINED](#fccc)                                  |
| 9         | [PROTOTYPES](#fccc)                                              |
| 10        | [MAP, SET, WEAKMAP, WEAKSET](#fccc)                              |
| 11        | [HOISTING](#fccc)                                                |
| 12        | [EVENT BUBBLING, CAPTURING, PROPAGATION](#fccc)                  |
| 13        | [CURRYING, INFINITE CURRYING](#fccc)                             |
| 14        | [THROTTLING](#t)                                                 |
| 15        | [THIS KEYWORD](#this)                                            |
| 16        | [PROMISES](#p)                                                   |
| 17        | [ASYNC VS DEFER](#ad)                                            |
| 18        | [HOW DO WE ACHIEVE ASYCNHRONOUS ACTIVITY IN JS? EVENT LOOP](#el) |
| 19        | [ASYNC AWAIT](#aa)                                               |
| 20        | [PROMISE CHAINING AND ERROR HANDLING](#pceh)                     |

## TOPICS:

---

## <a name="d"></a><h2>DEBOUNCING</h2>

<br>
Limits the exceution of a function call , and waits for a certain amount of time before calling it again.
  
<b>For example :</b> Search Box - in application - here the number of calls to the api are limited by applying a delay so we can reduce the overhead on the server, and limit the number of api calls  to the server.

### Code :

```
For below code to work use npm install lodash
```

`Debouncing.jsx`

```jsx
import { useState } from "react";
import debounce from "lodash/debounce";

function Debouncing() {
  const [pressedCount, setPressedCount] = useState(0);
  const [triggerCount, setTriggerCount] = useState(0);

  const onButtonClick = () => {
    setPressedCount(pressedCount + 1);
    debouncedCount();
  };

  const debouncedCount = debounce(() => {
    setTriggerCount(triggerCount + 1);
  }, 800);
  return (
    <>
      <button onClick={onButtonClick}>Increment</button>
      <p>
        Button Pressed <span>{pressedCount}</span> times
      </p>
      <p>
        Triggered <span>{triggerCount}</span> times
      </p>
    </>
  );
}

export default Debouncing;
```

`App.jsx`

```jsx
import "./App.css";
import Debouncing from "./components/Debouncing";

function App() {
  return (
    <>
      <Debouncing />
    </>
  );
}

export default App;
```

`Debouncing Polyfill`

```jsx
const myDebounce = (cb, wait) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, wait);
  };
};

const debouncedCount = myDebounce(() => {
  setTriggerCount(triggerCount + 1);
}, 800);
```

[Blog](https://www.upbeatcode.com/react/how-to-use-lodash-in-react/#:~:text=Lodash%20provides%20functional%20programming%20helpers,cluttering%20up%20the%20global%20namespace.)
[YT](https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10&t=204s)

---

## <a name="t"></a><h2>THROTLLING</h2>

<br>
Throlling is a mechanism to limit the execution of a even handler function when events are triggered continuously due to user action- like click of a button
  
<b>For example :</b> Say on scroll we are triggering an event which calls an Api( so it is an expensive function) - we can limit the calls of the event by using throllling function.

### Code :

`Throttling Pollyfill`

```jsx
const myThrottle = (cb, delay) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime(); // we get current time
    if (now - last < delay) return; // if the current time - last time we triggeres < delay we return
    last = now; // if it is greater set the last to current time , triggered time
    return cb(...args); // execute the callback we return
  };
};

const throttledCount = myThrottle(() => {
  setTriggerCount(triggerCount + 1);
}, 1000);
```

[YT](https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10)

---

## <a name="c"></a><h2>CLOSURES</h2>

<br>

### Lexical Scope

Lexical scope means a variable defined outside a function can be accessible within a function but opposite is not true, variables declared inside function caanot be accessed outside

### CLOSURE

- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
- In other words, a closure gives you access to an outer function's scope from an inner function.
- In JavaScript, closures are created every time a function is created, at function creation time.

<b>For example :</b>

### Code :

```javascript
function makeFunc() {
  const name = "Sushmita";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

//const myFunc = makeFunc();
//myFunc();

makeFunc()();
```

_In the above example we are able to access the name which is defined in outer scope even after the function display name has been returned._

### USE:

- Closures make it possible for JS to have private variables.

### What will be the output?

```javascript
let count = 0(function printCount() {
  if (count === 0) {
    let count = 1; // shadowing
    console.log(count); // 1
  }
  console.log(count); // 0
})();
```

**_Output_**
1
0

### Write a funtion that will allow you to do the below:

```javascript
var addSix = createBase(6);
addSix(10); // 16
addSix(21); //27
```

```javascript
function createBase(x) {
  return function (y) {
    console.log(x + y);
  };
}
```

### TIME OPTIMIZATION

```javascript
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");
console.time("12");
find(6);
console.timeEnd("12");
```

![image](https://github.com/Sushmita-Ghosh/javascript_interview_practice/assets/82622059/854f6981-2a4e-4e3d-ab9c-849f0698843b)

_The above function is time consuming- We can use closures to optimize the time taken by them - The issue is that the looping is happening every time we are calling the function- as there is new reference to the a variable created everytime._

```javascript
function find() {
  let a = [];
  for (let i = 0; i < 100000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");
```

_We are not doing the heaving operation - hence the time reduced is very very high as can be seen below - it is now in_ **_ms_**

![image](https://github.com/Sushmita-Ghosh/javascript_interview_practice/assets/82622059/9c4e48a7-df7c-4fe3-bd65-36ce24f6e823)

### HOW CAN WE SOLVE THE FAMOUS SETTIMEOUT QUES USING VAR?

```javascript
for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}
```

\*The above code will create a new refernce to i each time the function inner is called.

### PRIVATE COUNTER USING CLOSURE

```javascript
function counter() {
  var _counter = 0; // Here counter is a private variable

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrieve,
  };
}

const c = counter(); // created a private counter
c.add(5);
c.add(10);

console.log(c.retrieve());
```

```javascript
$ node script.js
Counter = 15
```

### MODULE PATTERN

```javascript
var Module = (function () {
  function privateMethod() {
    // do something which you do not want the user to access directly.
    // suppose we have an API call which we do not want to access to the iser, we can keep it here
  }
  return {
    publicMethod: function () {
      // can call the private Method
    },
  };
})();

Module.publicMethod(); // runs successfully
Module.privateMethod(); // give us an error
```

### MAKE THE BELOW FUNCTION RUN ONLY ONCE:

```javascript
let view;

function likeTheVideo() {
  view = "Sushmita Ghosh";
  console.log("Subscribe to " + view);
}

likeTheVideo();
```

\*We can use closures to do the same - we can create a local variable "called" which will keep an count of how many time the function has run.

```javascript
let view;

function likeTheVideo() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already Subcribed to Sushmita's Channel");
    } else {
      view = "Sushmita Ghosh";
      console.log("Subscribe to " + view);
      called++;
    }
  };
}

let isSubscribed = likeTheVideo();
isSubscribed();
isSubscribed();
```

```jsx
$ node script.js
Subscribe to Sushmita Ghosh
Already Subcribed to Sushmita's Channel
```

\*Everytime we call the isSubscribed function we are referencing the same called variable.

### ONCE POLYFILL:

- We can write a more generic function for the above function.

### CACHING & MEMOIZATION:

### DIFFERENCE BETWEEN CLOSURE & SCOPE:

- Whenever we create a function within another function, then the inner function is the closure. This closure is usually returned so that it can use the outer function's variable at a later time. ( Global, outer & local scopes)

- A scope in js defined what variable you have access to - Local & global ( 2 kinds)

[YT](https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10)

---

## <a name="this"></a><h2>THIS KEYWORD</h2>

<br>

### THIS KEYWORD (IMPLICIT BINDING):

- Depends on the context that we are refering to - based on which it's value changes.

### THIS INSIDE FUNCTION:

- For normal function this is taken - from the context to which it is referening to.
- For arrow functions this refers to the outer normal function

<b>For example :</b>

### Code :

-

```jsx
let user = {
  name: "Sews",
  age: 24,
  getDetails() {
    console.log(this.name + " is " + this.age + " years old ");
  },
};

user.getDetails();
```

```javascript
$ node this.js
Sews is 24 years old
```

-

```javascript
let user = {
  name: "Sews",
  age: 24,
  childObj: {
    newName: "Suzuna",
    getDetails() {
      console.log(this.newName + " Nd " + this.name);
    },
  },
};

user.childObj.getDetails();
```

- In the aboove funtion, this refers to "childObj response

```javascript
$ node this.js
Suzuna is undefined years old
```

- Replacing with Arrow Functions:

[YT](https://www.youtube.com/watch?v=rv7Q11KWmKU&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=7&ab_channel=RoadsideCoder)

---

## <a name="cab"></a><h2>CALL, APPLY, BIND</h2>

<br>

### Code :

```jsx

```

[YT]()

---

## <a name="p"></a><h2>PROMISES</h2>

<br>

### SYNCHRONOUS CODE VS ASYNCHRONOUS CODE

- line by line
- js is a single-threaded language - it can't execute two tasks (like setTimeout) in parallel - what it does is it first runs all of our synchronous code and then setTimeout code will be executed
- setTimeout is part of API - so even if the time given to setTimeout is 0ms, the order remains the same.
- The above concept is of the event loop

### WHAT ARE CALLBACKS?

- Since JS is single-threaded, for any task where we need to wait for some time (asynchronous task) we do need callbacks
- callbacks are functions which can be executed at a later point of time.

```javascript
setTimeout(() => {
  console.log("Hello World");
}, 5000);
```

### WHAT IS CALLBACK HELL/PYRAMID OF DOOM?

- In a real-world application we might run into situations where we have a dependency of tasks on one another - say for example APIs trying to create order, payment, order summary, etc all these different APIs are dependent on one another but if we write the code - it gets ugly and difficult to understand. - which is called callback hell.

- Callback nested within one another is callback hell, resulting in code growing horizontally.
- This kind of structure is also known as the pyramid of doom.

### WHAT IS INVERSION OF CONTROL?

Inversion of control is losing control over our code when using callbacks.
Two issues while using callbacks

1 - Callback hell
When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell.

2 - Inversion of control
The callback function is passed to another callback, this way we lose control of our code. We don't know what is happening behind the scenes and the program becomes challenging to maintain.
That process is called inversion of control.

### PROMISES:

1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
   2.1.1) **A promise is an object that represents the eventual completion/failure of an asynchronous operation.**
   2.1.2) They are just syntactical sugar to the ugly code that callbacks bring into the picture. But under the hood all the working remains same.
   2.2) A promise has 3 states: pending | fulfilled | rejected.
   2.3) As soon as the promise is fulfilled/rejected => It updates the empty object which is assigned undefined in the pending state.
   2.4) A promise resolves only once and it is immutable.
   2.5) Using .then() we can control when we call the cb(callback) function.
   2.6) A promise object has two things - PromiseState(pending/fulfilled) & PromiseData(data)
   2.7) fetch returns a promise

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()
   ![image](https://github.com/Sushmita-Ghosh/javascript_interview_practice/assets/82622059/9951dbb1-f995-4413-a44d-f700e4be0b84)

1) A Promise is an object that represents the eventual completion or failure of an asynchronous operations.
2) Importance of promise is that we do not loose the control of the program, a promise object is immutable and can be send anywhere without worrying about changes, also it resolves only once either to success or failure.
3) How we initialise promise?

   ```javascript
   let p = new Promise(function (resolve) {});
   console.log(p);
   ```

   ```javascript
   Promise { <pending> }
   ```

### CODE:

```javascript
function myAsyncFn() {
  let p = new Promise(function (resolve) {
    resolve("hi there");
  });
  return p;
}

const value = myAsyncFn();
value.then(function (data) {
  console.log(value);
  console.log(data);
});
```

#### OUTPUT:

```jsx
Promise { 'hi there' }
hi there
```

[YT AKSHAY](https://www.youtube.com/watch?v=yEKtJGha3yM)
[AKSHAY PROMISES](https://www.youtube.com/watch?v=ap-6PPAuK1Y&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=3&t=779s)

---

## <a name="ad"></a><h2>ASYNC VS DEFER</h2>

<br>

### How does script loading happen in our webpage?

- A html file as soon as it gets the script tag it starts to download and execute the js file. This will interrupt the html parsing causing an initial delay in html rendering and eventually time to load.

`Async` tag will start to download the js file parallely to html rendering but it blocks rendering after it is downloaded so blocking time is just the time it requires for executing and not downloading.

##### What happens when you add a async attribute?

- Make par­al­lel requests to fetch the files.
- Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
- Exe­cute the indi­vid­ual scripts the moment the files are downloaded.

`Defer` tag will parallely download the js file and will execute it once the html rendering is done. So no delay in html rendering.

##### What happens when you add defer attribute?

- Make par­al­lel requests to fetch the indi­vid­ual files.
- Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
- Fin­ish pars­ing the doc­u­ment even if the script files have downloaded.
- Exe­cute each script in the order they were encoun­tered in the document.

##### When to use defer and async attributes on the <script> tag?

`Defer attribute`:It will guarantee all the scripts will execute after the HTML parsing.The defer attribute is useful when the script is used for DOM manipulations.

`Async attribute`: It does not guarantee that all the scripts will execute after the HTML parsing. The async attribute is useful when the script is not used for DOM manipulation (google ads link)

##### Which is the best place to place your script tag in the script file?

###### Async tag in the head tag?

The Async tag will always be independent so adding to the head also won't make it much more efficient.

###### Defer tag in head tag ?

Conventionally all tags are kept in body but keeping the script tag in head with defer will help a lot as during rendering, the js file will be downloaded parallelly and on completion of rendering js execution will start immediately ( we dont have to wait for js download again when rendering ends). This is kind of prefetching assets.

![image](https://github.com/Sushmita-Ghosh/javascript_interview_practice/assets/82622059/b635a494-d510-4df4-b50b-a1e8fe9ab76d)

[SAGAR GIRI'S POST](https://www.linkedin.com/posts/sagargiri07_js-javascript-coding-activity-7121365637754494976-NyyI?utm_source=share&utm_medium=member_desktop)

---

## <a name="el"></a><h2>HOW DO WE ACHIEVE ASYCNHRONOUS ACTIVITY IN JS? EVENT LOOP</h2>

<br>

### SINCE JS IS SINGLE-THREADED, HOW DO WE ACHIEVE ACHIEVE ASYCNHRONOUS ACTIVITY IN JS?

Even though JS is single-threaded ( just like the human brain). JS can do things parallelly by delegating the tasks & also context switch between tasks if need be( the net time to do both things would still be the same).

- JS does this by using async functions.

### WHAT IS ASYNCHRONOUS FUNCTION?

- They are functions that can be executed parallelly with other sets of tasks probably after a certain amount of time. - eg setTimeout, fs.readFile( reads file from your system), fetch ( to fetch data from API endpoint)

### Code :

```jsx
function findSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

function findSumTill100(n) {
  let sumTill100 = findSum(100);
  console.log(sumTill100);
}

setTimeout(findSumTill100, 1000);
console.log("hello world");
```

`OUTPUT`

```jsx
hello world
4950
```

`readFile`

```javascript
const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("Will this be printed first?");
```

`OUTPUT`

```jsx
Will this be printed first?
Hi There ! Hello from a.txt
```

- 4 major things contribute to the async activity of JS: [VISUALISE](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
  - Call Stack - responsible for running each line of code
  - Web Apis - provided by browser - have added functionality - not necessarily part of Javascript - In case of setTImeout - webapis help to execute the time frame - ie (number of miliseconds)
  - Callback Queue - once the wait is completed , it is pushed to the callback queue and it waits.
  - Event Loop - checks when the main thread is idle and it is pushed on to the callback stack to execute. It's job is to check if there is something in the callback queue - if yes puts to the call stack.

### REAL USE OF CALLBACKS :

For synch code - without callbacks also we can suffice , but with asyn functions we need them

---

## <a name="aa"></a><h2>ASYNC AWAIT</h2>

<br>
Async Await is just syntactical sugar - also uses Promises and callbacks behind the hood.

### CODE:

```jsx
function myAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    setTimeout(function () {
      resolve("hi there!");
    }, 3000);
  });
  return p;
}

async function main() {
  const p = myAsyncFunction();
  console.log(p);
  const value = await myAsyncFunction();
  console.log(value);
}

main();
console.log("main");
```

#### OUTPUT:

```jsx
Promise { <pending> }
main
hi there!
```

[YT]()

---

## <a name="pceh"></a><h2>PROMISE CHAINING AND ERROR HANDLING</h2>

<br>

### PROMISE CREATION:

- The .then part is how we consume promises, we can create our own promise as well.
- promises can be created by calling the `Promise` constructor
- the `Promise` constructor takes in two parameters - resolve & reject
- as the name suggests we can resolve the promise when a condition is met and send the value - which can be accessible when we do a .then.
- we can reject a promise and pass in a error to it.

### Code :

- Suppose we have a promise which creates an order ( which will have return an orderId) if it it gets resolved correctly or will be rejected if the cart does not meet the validations.

```javascript
// Consuming the promise - generally we worry about this step.
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); //orderID

promise.then(function (orderId) {
  console.log(orderId);
  // proceedToPayment(orderId);
});

// Creating the promise

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //  we will check if our cart is validated
    // if not we will reject the promise
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // once the cart is validated we can create an order and resolve with orderID
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function validateCart(cart) {
  if (cart) {
    return true; // here we can check if cart is empty
  } else return false;
}
```

- Till the time our promise is resolved - it will be in **pending** state
- We can handle error using the **.catch** method , and we can pass a failure callback to it as well.

```javascript
promise
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err);
  });
```

### PROMISE CHAINING:

- As the name suggests we can keep chaining our promises with the **.then** callback.
- Each time we chain we can access the value of resolve of the previous promise passed onto the next.
- One common mistake is - whatever we need to pass onto the chain we need to return it. - we can either return a value or the promise itself - which will be resolved.

```js
const cart = ["apple", "banana"];

const promise = createOrder(cart); //orderID

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment done successfully");
  });
}
```

[YT](https://namastedev.com/learn/namaste-javascript/ep-03-creating-a-promise-chaining-error-handling)

---

## <a name="mfr"></a><h2>MAP, FILTER, REDUCE</h2>

<br>

### MAP:

- Map is used to iterate over the array and apply the callback function to each one and return a new array.

### Code :

```javascript
const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => {
  return num * 3;
});
```

### FILTER:

- Applies the function as a conditional to the array - based on true from the condition the element is pushed onto the array.

### Code :

```javascript
const nums = [1, 2, 3, 4];

const moreThanTwo = nums.filter((num, i, arr) => {
  return num > 2;
});
```

### REDUCE:

The reduce method reduces the array of values to just one value. It will execute the callback on each element of the array.

### Code :

```javascript
const nums = [1, 2, 3, 4];

const moreThanTwo = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
```

[YT - @RoadSideCoder](https://www.youtube.com/watch?v=dGq0gi0wv64&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=2)

- Also see [FOLDER](https://github.com/Sushmita-Ghosh/javascript_interview_practice/tree/master/map_filter_reduce)

---

## <a name="es6"></a><h2>WHAT IS ES6 AND ITS FEATURES</h2>

<be>

Es6 comes with significant changes to Javascript Language

### Code :

```jsx

```

[YT]()

---


## <a name=""></a><h2></h2>

<br>

### Code :

```jsx

```

[YT]()

---

### YOUTUBE PLAYLIST:

- [Technical Suneja](https://www.youtube.com/watch?v=sOZwwL_-cBA&list=PL_HlKez9XCSM0bs8P7LtCTGh4rghAD2im)
- [JS CAFE](https://www.youtube.com/@js_cafe/playlists)
- [ROADSIDE CODER](https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10)
- [FREECODECAMP](https://www.youtube.com/watch?v=XBTJDpT2XaI&t=190s)
- [AKSHAY SAINI](https://namastedev.com/learn/namaste-javascript)
