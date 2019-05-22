// Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// PROTOTYPES for Book
// 1. getSummary

Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// 2. getAge

Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old.`;
};

// 3. Revise

Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instatiate an Object
const book1 = new Book('Power', 'Mike Marc', '2019');
const book2 = new Book('Dreamer', 'Lisa Lowes', '1999');

book1.revise('1943');
console.log(book1.getSummary());
console.log(book2.getAge());
