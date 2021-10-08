function findAuthorById(authors, id) {
  let authorObj = authors.find((author) => author.id === id); 
  return authorObj
}

function findBookById(books, id) {
  const bookObj = books.find((book) => book.id === id);
  return bookObj
}

function partitionBooksByBorrowedStatus(books) {
  let bookStatus = [];
  const booksreturned = books.filter((book) => book.borrows[0].returned);
  const loanedOut = books.filter((book) => !book.borrows[0].returned); 
  let borrowStatus = [loanedOut,booksreturned];
  return borrowStatus
  }


function getBorrowersForBook(book, accounts) { 
  let result = book.borrows.map((borrows) =>
   { let account = accounts.find((account) => account.id === borrows.id); 
    return { ...borrows, ...account }; }); 
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
