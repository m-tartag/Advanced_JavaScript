function SimpleAdding(num) {
  let counter = 0;
  for (let i = num; i > 0; i--) {
    counter += i;
  }
  return counter;
}

// keep this function call here
console.log(SimpleAdding(8));
