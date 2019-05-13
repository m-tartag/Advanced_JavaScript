// function multiply(item) {
//   return item * 3;
// }

// const arr = [1, 2, 3];
// const newArr = arr.map(multiply);

// console.log(newArr);

// What you have
// const officers = [
//   { id: 20, name: 'Captain Piett' },
//   { id: 24, name: 'General Veers' },
//   { id: 56, name: 'Admiral Ozzel' },
//   { id: 88, name: 'Commander Jerjerrod' },
//   {},
// ];
// Show Me
// [20, 24, 56, 88]

// Different ways to do it

// FOR EACH

// const officersIds = [];
// officers.forEach(function(officer) {
//   officersIds.push(officer.id);
// });

// console.log(officersIds);

// Notice how you have to create an empty array beforehand?
// Let’s see what it looks like when using .map()
// const newIds = [];
// const officersIds = officers.map(function(officer) {
//   newIds.push(officer.id);
// });

// console.log(newIds);

// console.log(officers.map(officer => officer.id === 20));

const words = [
  {
    word: 'apple',
  },
  {
    word: 'banana',
  },
  {
    word: 'orange',
  },
  [],
  [],
];

const no = words.filter(function(word) {
  return word.length === 0;
});
const yes = words.filter(function(word) {
  return word.length === undefined;
});

console.log(no);
console.log(yes);
