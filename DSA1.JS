// Sum of Digits of a number
let rem = 0,
  sum = 0,
  n = 1568;

while (n > 0) {
  rem = n % 10;
  sum = sum + rem;
  n = Math.floor(n / 10);
}

console.log("Sum of digits: " + sum);
