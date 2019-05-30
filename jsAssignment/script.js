const numbers = [
  67,
  80,
  65,
  79,
  86,
  66,
  75,
  71,
  81,
  69,
  90,
  79,
  68,
  65,
  73,
  88,
];

// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
// Using a for loop:
// Using the forEach method:
// Using the map method:

// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
// Answer:

const Filterer = numbers.filter(function(num) {
  return num > 72 && num < 88;
});

console.log('Filterer :', Filterer);
// 3. Display the product of all numbers using reduce
// Answer:

const Reducer = numbers.reduce(function(acc, total) {
  return acc + total;
});

console.log('Reducer :', Reducer);
