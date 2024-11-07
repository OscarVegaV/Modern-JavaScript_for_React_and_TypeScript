// ** Arrow Function **

// Defines 'sum' as an arrow function with default parameter values of 0
const sum = (num1 = 0, num2 = 0) => console.log(num1 + num2); // Logs the sum of 'num1' and 'num2'

// Calling the arrow function with different arguments
sum(10, 20);   // Expected Output: 30
sum(100, 31);  // Expected Output: 131
sum(10);       // Expected Output: 10 (num2 defaults to 0)
