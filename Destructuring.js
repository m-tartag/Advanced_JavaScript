// Destructuring

const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
  firstName: 'John',
  lastName: 'Smith',
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log('lastName :', lastName);

// Destructuring + RENAME

const Obj = {
  first: 'Matt',
  last: 'Tartaglia',
};

const { first: FNAME, last: LNAME } = Obj;

console.log('FNAME :', FNAME);
console.log('LNAME :', LNAME);
