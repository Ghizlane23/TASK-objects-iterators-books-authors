const authors = require("./authors.json");
const books = require("./books.json");

/**************************************************************
 * getBookById(bookId, books):
 * - receives a bookId
 * - recieves an array of book objects
 * - returns the book object that matches that id
 * - returns undefined if no matching book is found
 ****************************************************************/
function getBookById(bookId, books) {
  const bId = books.find((book) => book.id == bookId);
  return bId;
}
console.log(getBookById(12, books));

/**************************************************************
 * getAuthorByName(authorName, authors):
 * - receives an authorName
 * - recieves an array of author objects
 * - returns the author that matches that name (CASE INSENSITIVE)
 * - returns undefined if no matching author is found
 ****************************************************************/
function getAuthorByName(authorName, authors) {
  const authorN = authorName.toLowerCase();
  const res = authors.find(
    (author) => author.name.toLocaleLowerCase() === authorN
  );
  return res;
}

console.log(getAuthorByName("J.K. Rowling", authors));

/**************************************************************
 * bookCountsByAuthor(authors):
 * - receives an array of authors
 * - returns an array of objects with the format:
 *    [{ author: <NAME>, bookCount: <NUMBER_OF_BOOKS> }]
 ****************************************************************/
function bookCountsByAuthor(authors) {
  return authors.map((author) => {
    return { name: author.name, bookCount: author.books.length };
  });
}

console.log(bookCountsByAuthor(authors));

/**************************************************************
 * booksByColor(books):
 * - receives an array of books
 * - returns an object where the keys are colors
 *   and the values are arrays of book titles:
 *    { <COLOR>: [<BOOK_TITLES>] }
 ****************************************************************/
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
function booksByColor(books) {
  // const colors = {};
  // books.forEach((book) => {
  //   if (colors[book.color]) {
  //     colors[book.color].push(book.title);
  //   } else {
  //     colors[book.color] = [];
  //     colors[book.color].push(book.title);
  //   }
  // });
  // return colors;
  const bookColors = {};
  books.forEach((book) => {
    if (bookColors[book.color]) {
      bookColors[book.color].push(book.title);
    } else {
      bookColors[book.color] = [];
      bookColors[book.color].push(book.title);
    }
  });
  return bookColors;
}
console.log(booksByColor(books));

/**************************************************************
 * titlesByAuthorName(authorName, authors, books):
 * - receives an authorName
 * - recieves an array of author objects
 * - recieves an array of book objects
 * - returns an array of the titles of the books written by that author:
 *    ["The Hitchhikers Guide", "The Meaning of Liff"]
 ****************************************************************/
console.log("---------------------------");

function titlesByAuthorName(authorName, authors, books) {
  //   const res = authors.find((author) => author.name === authorName);
  //   const result = res.books;
  //   const b = books.filter((book) => result.includes(book.id));
  //   const allTitles = b.map((book) => book.title);

  //   return allTitles;
  const bookIds = authors.find((author) => authorName === author.name).books;
  const titlesb = books
    .filter((book) => bookIds.includes(book.id))
    .map((book) => book.title);

  return titlesb;
}
console.log(titlesByAuthorName("George R.R. Martin", authors, books));

/**************************************************************
 * mostProlificAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author with the most books
 *
 * Note: assume there will never be a tie
 ****************************************************************/
function mostProlificAuthor(authors) {
  const mostPro = authors.map((author) => {
    let sum = author.books.length;
    return {
      name: author.name,
      sum: sum,
    };
  });
  const result = mostPro.reduce((acc, cur) => {
    return acc.sum > cur.sum ? acc : cur;
  });
  return result.name;

  // const result = mostPro.sort((a, b) => {
  //   return b.sum - a.sum;
  // });
  // return result[0].name;
}

console.log(mostProlificAuthor(authors));

/**************************************************************
 * relatedBooks(bookId, authors, books):
 * - receives a bookId
 * - receives a list of authors
 * - receives a list of books
 * - returns a list of the titles of all the books by
 *   the same author as the book with bookId
 *   (including the original book)
 *
 * e.g. Let's send in bookId 37 ("The Shining Girls" by Lauren Beukes):
 *      relatedBooks(37);
 * We should get back all of Lauren Beukes's books:
 *      ["The Shining Girls", "Zoo City"]
 *
 * NOTE: YOU NEED TO TAKE INTO ACCOUNT BOOKS WITH MULTIPLE AUTHORS
 *
 * e.g. Let's send in bookId 46 ("Good Omens" by Terry Pratchett and Neil Gaiman):
 *      relatedBooks(46);
 * We should get back all of Neil Gaiman's books AND all of Terry Pratchett's books:
 *      ["Good Omens", "Good Omens", "Neverwhere", "Coraline", "The Color of Magic", "The Hogfather", "Wee Free Men", "The Long Earth", "The Long War", "The Long Mars"]
 *
 * BONUS: REMOVE DUPLICATE BOOKS
 ****************************************************************/
function relatedBooks(bookId, authors, books) {
  const bookAuthor = books.find((book) => bookId === book.id).authors;

  const booklist = authors.filter((author) => author.id === bookAuthor.id);
  return booklist;
}
console.log(relatedBooks(37, authors, books));
/**************************************************************
 * friendliestAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author that has
 *   co-authored the greatest number of books
 ****************************************************************/
function friendliestAuthor(authors) {
  // Your code goes here
}
// console.log(friendliestAuthor(authors));

module.exports = {
  getBookById,
  getAuthorByName,
  bookCountsByAuthor,
  booksByColor,
  titlesByAuthorName,
  mostProlificAuthor,
  relatedBooks,
  friendliestAuthor,
};
