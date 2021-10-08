function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) { let bookCount = books.filter((book) => { 
 const [borrow] = book.borrows; 
 return !borrow.returned }); 
 return bookCount.length 
}

function getMostCommonGenres(books) {
  let genres = books.map((book) => book.genre);
  const genreObj = genres.reduce((acc, genre) => {
  let name = genre.name;
    if(acc[genre] === undefined){
      acc[genre] = 0;
      
    } 
    acc[genre]++ 
    return acc
  }, {});
   const genreArray = Object.keys(genreObj).map(genre => {
      return {name:genre, count:genreObj[genre]} 
    })
    const sorted = genreArray.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1 ) 
    
    return sorted.slice(0, 5);
  }



function getMostPopularBooks(books) {
  const bookList = books.map(book => {return {name:book.title, count:book.borrows.length}}) 
  let list = bookList.sort((listedA, listedB) => listedA.count > listedB.count ? -1 : 1)
  return list.slice(0, 5);
} 



function getCount(books, Id) {
  let bookArray = books.filter(book=> book.authorId === Id);
   let count = 0
    bookArray.forEach(bookA => count += bookA.borrows.length) 
    return count
 }
function getMostPopularAuthors(books, authors) {
  const authorList = authors.map(author => {return {name: author.name.first + " " + author.name.last,  
  count: getCount(books, author.id)} }) ; 
  
  let list = authorList.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1) 
   return list.slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
