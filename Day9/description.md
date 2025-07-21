## 2703. Return Length of Arguments Passed

**Difficulty:** Easy  
**Premium Problem**  
**Companies:** _Not specified_

---

### Problem Statement

Write a function `argumentsLength` that returns the count of arguments passed to it.

---

### Examples

#### Example 1

**Input:**  
`args = [5]`

**Output:**  
`1`

**Explanation:**

```javascript
argumentsLength(5) // 1
```

One value was passed to the function so it should return `1`.

---

#### Example 2

**Input:**  
`args = [{}, null, "3"]`

**Output:**  
`3`

**Explanation:**

```javascript
argumentsLength({}, null, '3') // 3
```

Three values were passed to the function so it should return `3`.

---

### Constraints

- `args` is a valid JSON array
- `0 <= args.length <= 100`
