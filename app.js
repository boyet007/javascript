var books = document.querySelectorAll('#book-list li .name')

console.log(books)

Array.from(books).forEach(function(book) {
    //console.log(book.textContent)

    //tambahkan setiap judul dengan (booktitle)
    book.textContent += ' (book title)'
})

const bookList = document.querySelector('#book-list')

//overwrite semua element dengan text
bookList.innerHTML = '<h2>Books and More Books ... </h2>'

//tambahkan elemen di dalam elemen
bookList.innerHTML += '<p>This how you add HTML</p>'

//tampilan pure html
console.log(bookList.innerHTML)

