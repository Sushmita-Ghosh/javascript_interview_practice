# javascript_interview_practice
This repository contains interview questions for javascript


Practice questions for Javascript Interview:

[Apurv's List](https://ak-javascript-slides.netlify.app/#0)

## TABLE OF CONTENTS: 

| Serial No  | Topic Name |
| ------------- | ------------- |
| 1  |[DEBOUNCING](#d)|✔
| 2  |[MEMOIZATION](#se)|
| 3  |[SPREAD VS REST](#fccc)|
| 4  |[ASYNC, AWAIT, PROMISES, CALLBACK](#sm)|
| 5  |[CLOSURES](#c)|✔
| 6  |[CALL, APPLY, BIND](#cab)|✔
| 7  |[MAP, FILTER, REDUCE](#fccc)|
| 8  |[UNDEFINED, NOT DEFINED](#fccc)|
| 9  |[PROTOTYPES](#fccc)|
| 10  |[MAP, SET, WEAKMAP, WEAKSET](#fccc)|
| 11  |[HOISTING](#fccc)|
| 12  |[EVENT BUBBLING, CAPTURING, PROPAGATION](#fccc)|
| 13  |[CURRYING, INFINITE CURRYING](#fccc)|
| 14  |[THROTTLING](#t)|✔
| 15  |[THIS KEYWORD](#this)|✔
| 16  |[PROMISES](#p)|✔
| 17  |[ASYNC VS DEFER](#ad)|✔



## TOPICS:
---

<a name="d"></a><h2>DEBOUNCING</h2>
---

<br>
Limits the exceution of a function call , and waits for a certain amount of time before calling it again.
  
<b>For example :</b> Search Box - in application - here the number of calls to the api are limited by applying a delay so we can reduce the overhead on the server, and limit the number of api calls  to the server. 

### Code :
```
For below code to work use npm install lodash
```

```Debouncing.jsx```
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
```App.jsx```
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
``` Debouncing Polyfill ```
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


<a name="t"></a><h2>THROTLLING</h2>
---

<br>
Throlling is a mechanism to limit the execution of a even handler function when events are triggered continuously due to user action- like click of a button
  
<b>For example :</b> Say on scroll we are triggering an event which calls an Api( so it is an expensive function) - we can limit the calls of the event by using throllling function.

### Code :


```Throttling Pollyfill```
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
<a name="c"></a><h2>CLOSURES</h2>
---

<br>

### Lexical Scope

Lexical scope means a variable defined outside a function can be accessible within a function but opposite is not true, variables declared inside function caanot be accessed outside


### CLOSURE

* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
* In other words, a closure gives you access to an outer function's scope from an inner function.
*  In JavaScript, closures are created every time a function is created, at function creation time.

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

makeFunc()()

```
*In the above example we are able to access the name which is defined in outer scope even after the function display name has been returned.*

### USE:

* Closures make it possible for JS to have private variables.

### What will be the output?

```javascript
let count= 0
(function printCount(){
    if(count===0){
        let count=1 // shadowing
        console.log(count); // 1
    }
    console.log(count); // 0
})()
```

***Output***
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

*The above function is time consuming- We can use closures to optimize the time taken by them - The issue is that the looping is happening every time we are calling the function- as there is new reference to the a variable created everytime.*

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

*We are not doing the heaving operation - hence the time reduced is very very high as can be seen below - it is now in* ***ms*** 

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

*The above code will create a new refernce to i each time the function inner is called.

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



Module.publicMethod() // runs successfully
Module.privateMethod() // give us an error
```

### MAKE THE BELOW FUNCTION RUN ONLY ONCE:

```javascript
let view;

function likeTheVideo(){
    view= "Sushmita Ghosh"
    console.log("Subscribe to " + view);
}

likeTheVideo()
```

*We can use closures to do the same - we can create a local variable "called" which will keep an count of how many time the function has run.

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

*Everytime we call the isSubscribed function we are referencing the same called variable.

### ONCE POLYFILL:

* We can write a more generic function for the above function.


### CACHING & MEMOIZATION:


### DIFFERENCE BETWEEN CLOSURE & SCOPE:

* Whenever we create a function within another function, then the inner function is the closure. This closure is usually returned so that it can use the outer function's variable at a later time. ( Global, outer & local scopes)

* A scope in js defined what variable you have access to - Local & global ( 2 kinds)

 [YT](https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10) 

---


<a name="this"></a><h2>THIS KEYWORD</h2>
---

<br>

### THIS KEYWORD (IMPLICIT BINDING):

* Depends on the context that we are refering to - based on which it's value changes.


### THIS INSIDE FUNCTION:

* For normal function this is taken - from the context to which it is referening to.
* For arrow functions this refers to the outer normal function


<b>For example :</b> 

### Code :

*
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

*
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

* In the aboove funtion, this refers to "childObj response

```javascript
$ node this.js
Suzuna is undefined years old 
```

* Replacing with Arrow Functions:

 [YT](https://www.youtube.com/watch?v=rv7Q11KWmKU&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=7&ab_channel=RoadsideCoder) 

---
<a name="cab"></a><h2>CALL, APPLY, BIND</h2>
---

<br>

### 


<b>For example :</b> 

### Code :

```jsx

```

 [YT]() 

---

<a name="p"></a><h2>PROMISES</h2>
---

<br>

### 


<b>For example :</b> 

### Code :

```jsx

```

 [YT]() 

---


<a name="ad"></a><h2>ASYNC VS DEFER</h2>
---

<br>

### How does script loading happen in our webpage?
* A html file as soon as it gets the script tag it starts to download and execute the js file. This will interrupt the html parsing causing an initial delay in html rendering and eventually time to load.

 
 ```Async``` tag will start to download the js file parallely to html rendering but it blocks rendering after it is downloaded so blocking time is just the time it requires for executing and not downloading.

##### What happens when you add a async attribute?
* Make par­al­lel requests to fetch the files.
* Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
* Exe­cute the indi­vid­ual scripts the moment the files are downloaded.

```Defer``` tag will parallely download the js file and will execute it once the html rendering is done. So no delay in html rendering.

##### What happens when you add defer attribute?
* Make par­al­lel requests to fetch the indi­vid­ual files.
* Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
* Fin­ish pars­ing the doc­u­ment even if the script files have downloaded.
* Exe­cute each script in the order they were encoun­tered in the document.


#####  When to use defer and async attributes on the <script> tag?

```Defer attribute```:It will guarantee all the scripts will execute after the HTML parsing.The defer attribute is useful when the script is used for DOM manipulations.

```Async attribute```: It does not guarantee that all the scripts will execute after the HTML parsing. The async attribute is useful when the script is not used for DOM manipulation (google ads link)

##### Which is the best place to place your script tag in script file ?

###### Async tag in head tag ?
Async tag will always be independent so adding to head also wont make it much efficient.

###### Defer tag in head tag ?
Conventionally all tags are kept in body but keeping the script tag in head with defer will help a lot as during rendering , the js file will be downloaded parallely and on completion of rendering js execution will start immidiately( we dont have to wait for js download again when rendering ends). This is kind of prefetching assets.

![image](https://github.com/Sushmita-Ghosh/javascript_interview_practice/assets/82622059/b635a494-d510-4df4-b50b-a1e8fe9ab76d)

 [SAGAR GIRI'S POST](https://www.linkedin.com/posts/sagargiri07_js-javascript-coding-activity-7121365637754494976-NyyI?utm_source=share&utm_medium=member_desktop) 

---



### YOUTUBE PLAYLIST:
* [Technical Suneja](https://www.youtube.com/watch?v=sOZwwL_-cBA&list=PL_HlKez9XCSM0bs8P7LtCTGh4rghAD2im)
* [JS CAFE](https://www.youtube.com/@js_cafe/playlists)
* [ROADSIDE CODER](https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10)
* [FREECODECAMP](https://www.youtube.com/watch?v=XBTJDpT2XaI&t=190s)
