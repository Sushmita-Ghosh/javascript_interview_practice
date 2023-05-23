# javascript_interview_practice
This repository contains interview questions for javascript


Practice questions for Javascript Interview:

[Apurv's List](https://ak-javascript-slides.netlify.app/#0)

## TABLE OF CONTENTS: 

| Serial No  | Topic Name |
| ------------- | ------------- |
| 1  |[THROTTLING](#hoc)|
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

<a name="hoc"></a><h2>HIGHER ORDER COMPONENT</h2>
---

<br>
Higher Order Component in React is defined a component which takes another component as input and may or may not return another component.
  
<b>For example :</b> Suppose you have two buttons to design – Login & Register – So you can design a button component – then pass it to another higher order component which will have additional functionalities like – styling – on Click – then the text

### Code :

```Hello.jsx```
```javascript
function Hello() {
  return <div>Hello</div>;
}

export default Hello;
```

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

```App.jsx```
```javascript
import "./App.css";
import ContainerHoc from "./components/ContainerHoc";
import Hello from "./components/Hello";

function App() {
  const SampleComponent = ContainerHoc(Hello);

  return (
    <>
      <SampleComponent />
    </>
  );
}

export default App;

```

 [YT](https://www.youtube.com/watch?v=o22KRrxab18&list=PLmcRO0ZwQv4QMslGJQg7N8AzaHkC5pJ4t&index=28) 

---

<a name="se"></a><h2>SYNTHETIC EVENTS</h2>
---

In order to work across multiple browsers, react has create a wrapper around native browser events.
* Whenever a event occurs in the application, react listens to it and then wraps the event with an interface - which will provide the same functionality as native browser events.
* Why? By doing so, they have avoided creating multiple implementations for multiple methods for multiple browsers.


``` Advantages```
* Provides cross browser feasibility
* it increases the performance of the application as React reuses the event object.

<b>For Example</b> 
  
<b>Syntax:</b>
```e.preventDefault()``` prevents all the default behavior by the browser.

```e.stopPropagation()``` prevents the call to the parent component whenever a child component gets called.

Here ‘e’ is a synthetic event, a cross-browser object. It is made with a wrapper around the actual event of the browser. 

```javascript
function App() {
    const onClickHandler = (e) => {
    // here e is the synthetic event
        console.log(e);
    }
    return (
        <div className="App">
            <button onClick={onClickHandler}>
                Click
            </button>
        </div>
    );
}
  
export default App;
```

[YT](https://www.youtube.com/watch?v=o22KRrxab18&list=PLmcRO0ZwQv4QMslGJQg7N8AzaHkC5pJ4t&index=28) 

[Ref](https://www.geeksforgeeks.org/what-are-synthetic-events-in-reactjs/)

<REF2](https://itnext.io/deep-dive-into-syntheticevent-in-react-325486d9baad)

---


<a name="fccc"></a><h2>FUNCTIONAL VS CLASS COMPONENTS</h2>
---
<br>
So in react, before the introduction of hooks in 16.8 version - Functional components did not have state -
So we had to write class components for any kind of data manipulation through state and props.

* But after hooks got introducted we got useState(for any kind of state changes) & useEffect for any lifecycle methods.

* Since functional components are simple Javascript functions so the it is easier to read and test out them, Like useeffect alone can handle 3 lifecycle methods but in class components we have to write three different methods to
achive the scenario

* Also like class components are internally transformed into functional components only while computation so using fucntional components reduces this extra step of convertion hence we are encouraged to use fucntional componnets over class coponents

 [YT](https://www.youtube.com/watch?v=65BsgzQR-rU) 


---


<a name="sm"></a><h2>STRICT MODE</h2>
---
<br>

Strict Mode is a react developer tool (means it only runs in development mode) for identifying possible problems in apllication. It provides deprication checks and warning messages whenever any such code is written in an application. 

* Doesn't render any UI, just for development check.
* Since it is a development tool, only works in developement mode - doesn't effect production build whatsoever.
* In order to identify and detect any problems within the application and show warning messages, StrictMode renders every component inside the application twice.
* unsafe lifecycle methods - if a legacy code has unsafe methods , it detects it and shows warnings.
* helpful debugging tool.

 [GFG](https://www.geeksforgeeks.org/what-is-strictmode-in-react/)


---



### YOUTUBE PLAYLIST:
* [Technical Suneja](https://www.youtube.com/watch?v=sOZwwL_-cBA&list=PL_HlKez9XCSM0bs8P7LtCTGh4rghAD2im)
* [JS CAFE](https://www.youtube.com/@js_cafe/playlists)
