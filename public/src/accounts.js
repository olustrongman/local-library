function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id); 
  return found
}

function sortAccountsByLastName(accounts) {
  const sorted = accounts.sort((accountA, accountB) => (accountA.name.last < accountB.name.last ? -1 : 1));
  return sorted
}
function getTotalNumberOfBorrows(account, books) {
 return books.map((book) => book.borrows).flat().filter((ids) => ids.id === account.id).length;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed=[];
  books.forEach(book => {
    let borrowArray = book.borrows;
    if (borrowArray.find(borrow => borrow.id === account.id && borrow.returned === false)) {
      booksPossessed.push(book);
    }
  })
  
  booksPossessed.forEach(book=>{
    let author = authors.find(person => person.id === book.authorId);
    book['author'] = author;
  })
  console.log(booksPossessed);
  return booksPossessed;
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
