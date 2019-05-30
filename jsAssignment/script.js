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

(function ForLoop() {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(String.fromCharCode(numbers[i]));
  }

  document.getElementById('oneA').innerHTML = result;
})();

// Using the forEach method:

(function ForEachLoop() {
  const result = [];
  numbers.forEach(function(num) {
    result.push(String.fromCharCode(num));
  });
  document.getElementById('oneB').innerHTML = result;
})();

// Using the map method:

(function Mapper() {
  const result = [];
  numbers.map(function(num) {
    result.push(String.fromCharCode(num));
  });

  document.getElementById('oneC').innerHTML = result;
})();

// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
// Answer:

(function Filterer() {
  document.getElementById('two').innerHTML = numbers.filter(function(num) {
    return num > 72 && num < 88;
  });
})();

// 3. Display the product of all numbers using reduce
// Answer:

(function Reducer() {
  document.getElementById('three').innerHTML = numbers.reduce(function(
    acc,
    total
  ) {
    return acc * total;
  });
})();
