# Commonly asked polyfills for interviews:

## Reference:

- [RoadsideCoder](https://www.youtube.com/watch?v=Th3rZjfKKhI)

## Table of Contents:

| Serial No | Topic Name |
| 1 | [map() polyfill](#map-polyfill) |
| 2 | [filter() polyfill](#filter-polyfill) |
| 3 | [reduce() polyfill](#reduce-polyfill) |
| 4 | [call() polyfill](#call-polyfill) |
| 5 | [apply() polyfill](#apply-polyfill) |
| 6 | [bind() polyfill](#bind-polyfill) |
| 7 | [once() polyfill](#once-polyfill) |
| 8 | [memoize() polyfill](#memoize-polyfill) |
| 9 | [promise() polyfill](#promise-polyfill) |
| 10 | [promise.all() polyfill](#promise-all-polyfill) |
| 11 | [debounce() polyfill](#debounce-polyfill) |
| 12 | [throttle() polyfill](#throttle-polyfill) |

## Topics

## <a name="map-polyfill"></a><h2>map() polyfill</h2>

<br>

#### Working of Map & Pointers to keep in mind:

Before writing the map polyfill , lets understand how the map function behaves:

- It takes in a callback with 3 inputs -> number (value present at current index), index, arr
- How we call the map - we do (arr.map((val, i, arr) => {}))
- So our map function must be a part of any of the arrays - that means it should be part of the prototype itself.
- Why do we use this ? this in the context will refer to the array
- so val -> this[i] ; i -> i ; arr -> this

[REF]()

---

## <a name="filter-polyfill"></a><h2>filter() polyfill</h2>

<br>

[REF]()

---

## <a name="reduce-polyfill"></a><h2>reduce() polyfill</h2>

<br>

[REF]()

---

## <a name="call-polyfill"></a><h2>call() polyfill</h2>

<br>

[REF]()

---

## <a name="apply-polyfill"></a><h2>apply() polyfill</h2>

<br>

[REF]()

---

## <a name="bind-polyfill"></a><h2>bind() polyfill</h2>

<br>

[REF]()

---

## <a name="once-polyfill"></a><h2>once() polyfill</h2>

<br>

[REF]()

---

## <a name="memoize-polyfill"></a><h2>memoize() polyfill</h2>

<br>

[REF]()

---

## <a name="promise-polyfill"></a><h2>promise() polyfill</h2>

<br>

[REF]()

---

## <a name="promise-all-polyfill"></a><h2>promise.all() polyfill</h2>

<br>

[REF]()

---

## <a name="debounce-polyfill"></a><h2>debounce() polyfill</h2>

<br>

[REF]()

---

## <a name="throttle-polyfill"></a><h2>throttle() polyfill</h2>

<br>

[REF]()

---
