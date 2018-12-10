const banner = document.querySelector('#page-banner')

console.log('#page-banner node type is: ' + banner.nodeType)
console.log('#page-banner node type is: ' + banner.nodeName)
console.log('#page-banner has child is: ' + banner.hasChildNodes())

//kopi seluruh isi node didalam page-banner kedalam clonebanner
const clonedBanner = banner.cloneNode(true)
console.log(clonedBanner)
