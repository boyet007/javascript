var btns = document.querySelectorAll('#book-list .delete')
Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const li = e.target.parentElement
        li.parentNode.removeChild(li)
    })
})

const link = document.querySelector('#page-banner a')

link.addEventListener('click', function(e) {
    //mencegah browser ngelink ke server lain..
    e.preventDefault();
    console.log('navgitation to ', e.target.textContent, ' was prevented')
})