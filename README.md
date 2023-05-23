# javascript_interview_practice
This repository contains interview questions for javascript


Practice questions for Javascript Interview:

[Apurv's List](https://ak-javascript-slides.netlify.app/#0)

## TABLE OF CONTENTS: 

| Serial No  | Topic Name |
| ------------- | ------------- |
| 1  |[THROTTLING](#t)|
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

<a name="t"></a><h2>THROTLLING</h2>
---

<br>
Higher Order Component in React is defined a component which takes another component as input and may or may not return another component.
  
<b>For example :</b> Suppose you have two buttons to design – Login & Register – So you can design a button component – then pass it to another higher order component which will have additional functionalities like – styling – on Click – then the text

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
