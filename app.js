var titles = document.getElementsByClassName('title')

//console.log(Array.isArray(titles)) --> false
//console.log(Array.isArray(Array.from(titles))) --> true

// titles.array.forEach(item => {
//     console.log(item)
// });

Array.from(titles).forEach(function(item){
    console.log(item)
})