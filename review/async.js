// ASYNC Practice

const fruits = ['Apple', 'Banana', 'Orange', 'Strawberry'];
fruits.forEach(function(val) {
  console.log(`FRONT${val}BACK`);
});

// SAME AS THIS

function callback(val) {
  console.log(`FRONT${val}BACK`);
}

fruits.forEach(callback);
