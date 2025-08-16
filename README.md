# FC2-recursion-higherOrderFunctions-study
Practice test for HOF/ Recursion assessment 

# Study Guide: Higher Order Functions, Callbacks, and Recursion

## Higher Order Functions
### Key Concepts
- A function that takes one or more functions as arguments
- Or returns a function as its result
- Treats functions as first-class citizens

### Examples
```javascript
// Takes a function as argument
function higherOrderFunc(callback) {
  callback();
}

// Returns a function
function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  };
}
```

### Common Higher Order Functions
- `map()` - transforms each element in an array
- `filter()` - selects elements that meet a condition
- `reduce()` - reduces array to a single value
- `forEach()` - executes a function for each element

## Callbacks
### Key Concepts
- A function passed into another function as an argument
- Executed inside the outer function
- Used for asynchronous operations, event handling, etc.

### Examples
```javascript
// Simple callback
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
```



## Recursion
### Key Concepts
- A function that calls itself
- Must have a base case to stop recursion
- Each call should work on a smaller problem

### Examples
```javascript
// Factorial
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

// Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### Recursion vs Iteration
- Recursion can be more elegant but may use more memory
- Some problems are naturally recursive (tree traversal, etc.)
- Watch for stack overflow with deep recursion



## Tail Call Optimization (TCO)

### What is Tail Call Optimization?
- A compiler optimization that reuses the current stack frame for a recursive call when:
  1. The recursive call is the last operation in the function (tail position)
  2. There's no additional computation after the recursive call
  3. The return value is directly returned from the recursive call

### Benefits
- Prevents stack overflow for deep recursion
- Reduces memory usage
- Enables efficient recursive solutions to problems

### Examples

**Non-Tail Call (Not optimized):**
```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // Multiplication happens after recursion
}
```

**Tail Call Version (Optimizable):**
```javascript
function factorial(n, accumulator = 1) {
  if (n <= 1) return accumulator;
  return factorial(n - 1, n * accumulator); // No operations after recursion
}
```

### Key Requirements for TCO
1. The recursive call must be in tail position
2. No operations can occur after the recursive call
3. The recursive call must return its value directly

### Browser Support
- Proper TCO is part of ES6 but only implemented in Safari
- Other browsers may not optimize (but the pattern is still good practice)

## Higher Order Functions Reference Sheet

### 1. `map()`
**Purpose:** Transform each element in an array  
**Syntax:**
```javascript
// Traditional function
array.map(function(element, index, array) {
  return transformedElement;
});

// Arrow function
array.map((element, index, array) => transformedElement);
```

### 2. `filter()`
**Purpose:** Select elements that meet a condition  
**Syntax:**
```javascript
// Traditional function
array.filter(function(element, index, array) {
  return condition;
});

// Arrow function
array.filter((element, index, array) => condition);
```

### 3. `reduce()`
**Purpose:** Reduce array to a single value  
**Syntax:**
```javascript
// Traditional function
array.reduce(function(accumulator, current, index, array) {
  return updatedAccumulator;
}, initialValue);

// Arrow function
array.reduce((acc, current, index, array) => updatedAccumulator, initialValue);
```

### 4. `forEach()`
**Purpose:** Execute a function for each element  
**Syntax:**
```javascript
// Traditional function
array.forEach(function(element, index, array) {
  // perform operation
});

// Arrow function
array.forEach((element, index, array) => {
  // perform operation
});
```

### 5. `find()`
**Purpose:** Find first element that matches condition  
**Syntax:**
```javascript
// Traditional function
array.find(function(element, index, array) {
  return condition;
});

// Arrow function
array.find((element, index, array) => condition);
```

### 6. `some()`
**Purpose:** Test if any element passes condition  
**Syntax:**
```javascript
// Traditional function
array.some(function(element, index, array) {
  return condition;
});

// Arrow function
array.some((element, index, array) => condition);
```

### 7. `every()`
**Purpose:** Test if all elements pass condition  
**Syntax:**
```javascript
// Traditional function
array.every(function(element, index, array) {
  return condition;
});

// Arrow function
array.every((element, index, array) => condition);
```

### 8. `sort()`
**Purpose:** Sort array elements  
**Syntax:**
```javascript
// Traditional function
array.sort(function(a, b) {
  return a - b; // For numbers
});

// Arrow function
array.sort((a, b) => a - b);
```

## Pattern Comparison

### Traditional vs Arrow Function Examples

**Traditional:**
```javascript
const squared = numbers.map(function(num) {
  return num * num;
});

const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
```

**Arrow Functions:**
```javascript
const squared = numbers.map(num => num * num);
const evens = numbers.filter(num => num % 2 === 0);
```

## Common Use Cases Table

| Method    | Best For                          | Returns            |
|-----------|-----------------------------------|--------------------|
| `map()`   | Transforming data                 | New array          |
| `filter()`| Selecting subset of data          | New array          |
| `reduce()`| Aggregating values                | Single value       |
| `forEach()`| Side effects (no return needed)  | undefined          |
| `find()`  | Finding first matching element    | Element or undefined |
| `some()`  | Checking if any elements match    | Boolean            |
| `every()` | Checking if all elements match    | Boolean            |


## Common Pitfalls
- Forgetting the base case in recursion (infinite recursion)
- Not returning from recursive calls
- Callback hell/pyramid of doom (nested callbacks)
- Assuming callbacks execute immediately (they often don't in async code)



## Examples with Syntax Filled in for those who may need it 
# Higher Order Functions Reference Sheet with Examples

## 1. `map()`
**Purpose:** Transform each element in an array  
**Syntax:**
```javascript
// Traditional function
const squared = [1, 2, 3].map(function(num) {
  return num * num;
});
// squared = [1, 4, 9]

// Arrow function
const doubled = [1, 2, 3].map(num => num * 2);
// doubled = [2, 4, 6]
```

## 2. `filter()`
**Purpose:** Select elements that meet a condition  
**Syntax:**
```javascript
// Traditional function
const evens = [1, 2, 3, 4].filter(function(num) {
  return num % 2 === 0;
});
// evens = [2, 4]

// Arrow function
const shortWords = ['hello', 'hi', 'goodbye'].filter(word => word.length < 5);
// shortWords = ['hi']
```

## 3. `reduce()`
**Purpose:** Reduce array to a single value  
**Syntax:**
```javascript
// Traditional function
const sum = [1, 2, 3].reduce(function(acc, num) {
  return acc + num;
}, 0);
// sum = 6

// Arrow function
const product = [1, 2, 3, 4].reduce((acc, num) => acc * num, 1);
// product = 24
```

## 4. `forEach()`
**Purpose:** Execute a function for each element  
**Syntax:**
```javascript
// Traditional function
[1, 2, 3].forEach(function(num) {
  console.log(num);
});
// Logs: 1, 2, 3 (returns undefined)

// Arrow function
let total = 0;
[1, 2, 3].forEach(num => total += num);
// total = 6 (returns undefined)
```

## 5. `find()`
**Purpose:** Find first element that matches condition  
**Syntax:**
```javascript
// Traditional function
const firstEven = [1, 3, 4, 5, 6].find(function(num) {
  return num % 2 === 0;
});
// firstEven = 4

// Arrow function
const firstLongWord = ['hi', 'hello', 'hey'].find(word => word.length > 3);
// firstLongWord = 'hello'
```

## 6. `some()`
**Purpose:** Test if any element passes condition  
**Syntax:**
```javascript
// Traditional function
const hasNegative = [1, 2, -3, 4].some(function(num) {
  return num < 0;
});
// hasNegative = true

// Arrow function
const hasEven = [1, 3, 5].some(num => num % 2 === 0);
// hasEven = false
```

## 7. `every()`
**Purpose:** Test if all elements pass condition  
**Syntax:
```javascript
// Traditional function
const allPositive = [1, 2, 3].every(function(num) {
  return num > 0;
});
// allPositive = true

// Arrow function
const allShort = ['hi', 'hey', 'yo'].every(word => word.length < 4);
// allShort = true
```

## 8. `sort()`
**Purpose:** Sort array elements  
**Syntax:**
```javascript
// Traditional function
const nums = [3, 1, 4, 2].sort(function(a, b) {
  return a - b;
});
// nums = [1, 2, 3, 4]

// Arrow function
const words = ['banana', 'apple', 'cherry'].sort((a, b) => a.localeCompare(b));
// words = ['apple', 'banana', 'cherry']
```

## Practical Examples with Comments

```javascript
// Transform array of temperatures from C to F
const celsius = [0, 15, 30];
const fahrenheit = celsius.map(c => c * 9/5 + 32);
// fahrenheit = [32, 59, 86]

// Filter out falsy values
const mixed = [0, 'hello', '', 42, false];
const truthy = mixed.filter(Boolean);
// truthy = ['hello', 42]

// Count occurrences with reduce
const votes = ['yes', 'no', 'yes', 'yes'];
const tally = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});
// tally = {yes: 3, no: 1}
```

