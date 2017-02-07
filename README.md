# Assignment - Callback Functions 

> Define and use callback functions

[![Build Status](https://travis-ci.org/helio-training/fs-corejs-functions-callbacks.svg?branch=solutions)](https://travis-ci.org/helio-training/fs-corejs-functions-callbacks)

## Introduction

Callback functions make JavaScript asynchronous.  Thus far, we've create synchronous code that executes from top to bottom linearly.  This is actually problematic with JS/Node in general.      


### What is a callback?

The simplest definition of a callback is a function that takes a single parameter error.  

If you were to define what a callback function looks like by creating a function expression it would most likely look like:
 
```js
const callback = (err) => {
  if(err) throw err;
};
```

### Using callbacks as arguments

The callback in a function is usually the last parameter.  The arguments that are passed to the callback function are variadic.  However, every callback has as the first parameter an error object.  Determining if a piece of code has generated an error is done by comparing the error object to a truthy value.   

In the example below, the callback function is an anonymous function that is called when the function hs completed.  The result is either an error, or the file object is populated with information(data).

```js
import FS from 'fs';

FS.readFile('somepath', {}, (err, file) => {
  if(err) throw err;
  
  // Do something with the file
});
```

### Defining a callback

Defining a callback as a parameter in a function we create is simple.  Take for example this formatting function.

```js
const format = (message = '', callback) => {
  // Do some formatting
  const result = message.toUpperCase();
  
  return callback(null, message);
};

// Using the format function

format('Hello', (err, result) => {
  if(err) throw err;
  console.log(result);
});
```

The name of the parameter for the callback is arbitrary. However, `callback` is usually used a visual indicator that we should expect a callback.

Our example also includes a formatted message as the `result` argument in the callback.  Notice when we call the callback in our format function that we pass a `null` as the first parameter indicating that there wasn't an error.

## Assignment

1. Create an object literal and export it the default
2. Create an  `add` function
    1. The `add` function should take three parameters.  The first two are the numbers (default the numbers to 0), and the last parameter is the callback function.
    2. Implement the add function to perform the addition and call the callback with the result
3. Create `multiply` function
    1. The `multiply` function should take three parameters like the `add` function.  The callback should return the result.
    2. Instead of using the `*` operator. Use the `add` function. (Say we wanted 5 * 3, the add function would run 3 times and give us a total.  The purpose of using the add function instead of the multiply operator is to work with callbacks and observe the cone of shame)
    3. Use the callback to return the result of the operation
