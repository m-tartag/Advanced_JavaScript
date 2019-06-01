const numbers = [4, 9, 16, 25, 29];
const first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
