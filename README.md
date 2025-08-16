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

## Practice Problems
1. Write a higher-order function that applies a callback to each element of an array and returns a new array
2. Create a recursive function to calculate the sum of all numbers from 1 to n
3. Implement a `filter` function using recursion
4. Write a function that takes a callback and a value, and applies the callback multiple times (e.g., `applyN(f, n, x)` = f(f(...f(x))) n times)

## Common Pitfalls
- Forgetting the base case in recursion (infinite recursion)
- Not returning from recursive calls
- Callback hell/pyramid of doom (nested callbacks)
- Assuming callbacks execute immediately (they often don't in async code)

