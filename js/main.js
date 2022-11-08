
//collapsing searchbar
let searchInp = document.querySelector(".search-inp")
console.log(searchInp)
let searchIcon = document.querySelector(".search-icon")
console.log(searchIcon);

searchIcon.addEventListener("click", function(){
    searchInp.classList.toggle("myStyle")
})

// slider
let previous = document.querySelector(".previous")
let next = document.querySelector(".next")
let imgDiv = document.querySelector(".slider")
let slidesArray = document.getElementsByClassName("slider-card")
console.log(slidesArray.length);
console.log(imgDiv);

let clickCounter = 0

previous.addEventListener("click", function(){
    if(clickCounter == 0){
        clickCounter =slidesArray.length - 1
        let transitionAmount = clickCounter * -100
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "0s"
    }else{
        clickCounter--
        let transitionAmount = clickCounter * -100
        console.log(`translateX(${transitionAmount}%)`)
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "2s"
    }
})

next.addEventListener("click", function(){
    if(clickCounter >= slidesArray.length - 1){
        clickCounter = 0
        let transitionAmount = 0
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "0s"
    }else{
        clickCounter++
        let transitionAmount = clickCounter * -100
        console.log(`translateX(${transitionAmount}%)`)
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "2s"
    }
})


console.log(clickCounter);
