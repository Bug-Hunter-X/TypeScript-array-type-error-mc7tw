# TypeScript array type error
This example demonstrates a common TypeScript error that occurs when passing an array to a function that expects a string. The `greeter` function is defined to accept a string as an argument, but the `user` variable is an array of strings.  This leads to a type error during compilation.

The solution involves modifying the `greeter` function to correctly handle the array of strings, either by iterating through it or by adjusting the function's signature to accept an array.