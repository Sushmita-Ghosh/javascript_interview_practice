# javascript_interview_practice
This repository contains interview questions for javascript


Practice questions for Javascript Interview:

[Apurv's List](https://ak-javascript-slides.netlify.app/#0)

## TABLE OF CONTENTS: 

| Serial No  | Topic Name |
| ------------- | ------------- |
| 1  |[DEBOUNCING](#d)|
| 2  |[MEMOIZATION](#se)|
| 3  |[SPREAD VS REST](#fccc)|
| 4  |[ASYNC, AWAIT, PROMISES, CALLBACK](#sm)|
| 5  |[CLOSURES](#)|
| 6  |[CALL, APPLY, BIND](#fccc)|
| 7  |[MAP, FILTER, REDUCE](#fccc)|
| 8  |[UNDEFINED, NOT DEFINED](#fccc)|
| 9  |[PROTOTYPES](#fccc)|
| 10  |[MAP, SET, WEAKMAP, WEAKSET](#fccc)|
| 11  |[HOISTING](#fccc)|
| 12  |[EVENT BUBBLING, CAPTURING, PROPAGATION](#fccc)|
| 13  |[CURRYING, INFINITE CURRYING](#fccc)|
| 14  |[THROTTLING](#t)|




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

### Lexical Scope

Lexical scope means a variable defined outside a function can be accessible within a function but opposite is not true, variables declared inside function caanot be accessed outside

<b>For example :</b> 

### Code :

```jsx

```

 [YT](https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10) 

---




### YOUTUBE PLAYLIST:
* [Technical Suneja](https://www.youtube.com/watch?v=sOZwwL_-cBA&list=PL_HlKez9XCSM0bs8P7LtCTGh4rghAD2im)
* [JS CAFE](https://www.youtube.com/@js_cafe/playlists)
* [ROADSIDE CODER](https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10)
