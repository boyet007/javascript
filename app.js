const wrap = document.querySelector('#wrapper')

//cari query class di li yang kedua 
const wrap2 = document.querySelector('#book-list li:nth-child(2) .name')

//hanya dokumenyang pertama ditampilkan
var books = document.querySelector('#book-list li .name')

//dokumen semua ditampilkan
books = document.querySelectorAll('#book-list li .name')

//tampilkan setiap bagian dari array
Array.from(books).forEach(function(book) {
    console.log(book)
})
console.log(books)