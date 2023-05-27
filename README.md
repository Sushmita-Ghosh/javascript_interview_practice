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
| 14  |[DEBOUNCING](#fccc)|




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
```
App.jsx
```
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


<a name="T"></a><h2>THROTLLING</h2>
---

<br>
Throlling is a mechanism to limit the execution of a even handler function.
  
<b>For example :</b> Search Box - in application - here the number of calls to the api are limited by applying a delay so we can reduce the overhead on the server, and limit the number of api calls  to the server. 

### Code :


```ContainerHoc.jsx```
```javascript
export default function ContainerHoc(component) {
  const Component = component;
  return function (props) {
    return (
      <div>
        <h1> Inside HOC</h1>
        {/* yahan props pass krna mandatory hai */}
        <Component {...props} />
      </div>
    );
  };
}
```

 [YT](https://www.youtube.com/watch?v=o22KRrxab18&list=PLmcRO0ZwQv4QMslGJQg7N8AzaHkC5pJ4t&index=28) 

---




### YOUTUBE PLAYLIST:
* [Technical Suneja](https://www.youtube.com/watch?v=sOZwwL_-cBA&list=PL_HlKez9XCSM0bs8P7LtCTGh4rghAD2im)
* [JS CAFE](https://www.youtube.com/@js_cafe/playlists)
* [ROADSIDE CODER](https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=10)
