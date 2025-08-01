# 2665. Counter II

**Difficulty:** Easy  
**Premium** 🔒  
**Companies:** *(not listed)*

## Problem

Write a function `createCounter`. It should accept an initial integer `init`. It should return an object with three functions:

- `increment()`: Increases the current value by 1 and then returns it.
- `decrement()`: Reduces the current value by 1 and then returns it.
- `reset()`: Sets the current value to `init` and then returns it.

---

## Examples

### Example 1

**Input:**  
`init = 5`  
`calls = ["increment","reset","decrement"]`

**Output:**  
`[6, 5, 4]`

**Explanation:**
```js
const counter = createCounter(5);
counter.increment(); // 6
counter.reset();     // 5
counter.decrement(); // 4
```

---

### Example 2

**Input:**  
`init = 0`  
`calls = ["increment","increment","decrement","reset","reset"]`

**Output:**  
`[1, 2, 1, 0, 0]`

**Explanation:**
```js
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset();     // 0
counter.reset();     // 0
```

---

## Constraints

- `-1000 <= init <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i]` is one of `"increment"`, `"decrement"`, and `"reset"`