let searchInp = document.querySelector(".search-inp")
console.log(searchInp)
let searchIcon = document.querySelector(".search-icon")
console.log(searchIcon);

searchIcon.addEventListener("click", function(){
    searchInp.classList.toggle("myStyle")
})
