import psp from "prompt-sync-plus";

const prompt = psp();
// Sum of Digits of a number
/* let rem = 0,
  sum = 0,
  n = 1568;

while (n > 0) {
  rem = n % 10;
  sum = sum + rem;
  n = Math.floor(n / 10);
}

console.log("Sum of digits: " + sum);
 */
/* ----------------------------------------------------------------------------- */
// Number of Digits of a number
/* let count = 0;
let n = 1568;
while (n > 0) {
  n = Math.floor(n / 10);
  count++;
}
console.log("Number of digits: " + count); */

/* ----------------------------------------------------------------------------- */
// Reverse a number
/* let rem = 0;
let rev = 0;
let n = 1568;
while (n > 0) {
  rem = n % 10;
  rev = rev * 10 + rem;
  n = Math.floor(n / 10);
}
console.log("Reverse of a number: " + rev); */
/* ----------------------------------------------------------------------------- */

// Strong Number
/* let n = 145,
  fact = 1,
  sum = 0,
  rem = 0,
  ncopy = n,
  count = 0;

while (n > 0) {
  count++;
  rem = n % 10;
  n = Math.floor(n / 10);
  fact = 1;
  for (let i = 1; i <= rem; i++) {
    fact = fact * i;
  }
  sum += fact;
}
if (sum === ncopy) console.log("Yes");
else console.log("No"); */

/* ----------------------------------------------------------------------------- */
// Strong Number using function
/* function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

function isStrongNumber(n) {
  let sum = 0,
    temp = n;

  while (temp > 0) {
    sum += factorial(temp % 10); // Add factorial of each digit
    temp = Math.floor(temp / 10); // Remove last digit
  }

  return sum === n ? "Yes" : "No"; // Return result
} */
/* ----------------------------------------------------------------------------- */
