// Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = () =>
    `${this.title} was written by ${this.author} in ${this.year}.`;
}

// getSummary

Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Instatiate an Object
const book1 = new Book('Power', 'Mike Marc', '2019');

console.log(book1.getSummary());
