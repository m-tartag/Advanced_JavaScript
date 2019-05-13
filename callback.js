const result = undefined;

function add(a, b, sum) {
  sum = a + b;
}

// No CallBacks

setTimeout(() => add(2, 3, result), 1000);

console.log('Synchronus result', result);
console.log('Running More Code');

// Using Callbacks

function addWithCallback(a, b, sum, callback) {
  sum = a + b;
  callback(sum);
}

function printResult(value) {
  console.log(`Callback Result: ${value}`);
}

setTimeout(() => addWithCallback(2, 3, result, printResult), 1000);
console.log('Second');
