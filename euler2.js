//

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

1. Calculate the fibonacci up to 4,000,000
2. Find even numbers in that loop 
3. Sum Even Numbers together
// //

let fib = [0, 1];
let i = 0;
let sum = 0;
while (fib[0] + fib [1] < 4000000)