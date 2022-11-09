
//collapsing searchbar
let searchInp = document.querySelector(".search-inp")
console.log(searchInp)
let searchIcon = document.querySelector(".search-icon")
console.log(searchIcon);

searchIcon.addEventListener("click", function(){
    searchInp.classList.toggle("myStyle")
})

// slider
let previous = document.querySelector(".arrow-left")
let next = document.querySelector(".arrow-right")
let imgDiv = document.querySelector(".slider")
let slidesArray = document.getElementsByClassName("slider-card")
let dotsArray = document.getElementsByClassName("dot")
console.log(imgDiv);
console.log(slidesArray.length, "slides");
console.log(dotsArray.length, "dots");
let clickCounter = 0
// 



previous.addEventListener("click", function(){
    if(clickCounter == 0){
        console.log("clicked previous");
        clickCounter =slidesArray.length - 1
        let transitionAmount = clickCounter * -100
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "1s"
        // dotsArray[clickCounter].style.backgroundColor= "red"
        console.log(clickCounter);
        dotsArray[clickCounter].style.backgroundColor= "#8172D5"
        for(let i = 0; i < dotsArray.length; i++){
            if(dotsArray[i] != dotsArray[clickCounter]){
                dotsArray[i].style.background="none"
            }}
    }else{
        console.log("clicked previous");
        clickCounter--
        let transitionAmount = clickCounter * -100
        console.log(`translateX(${transitionAmount}%)`)
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "2s"
        console.log(clickCounter);
        dotsArray[clickCounter].style.backgroundColor= "#8172D5"
        for(let i = 0; i < dotsArray.length; i++){
            if(dotsArray[i] != dotsArray[clickCounter]){
                dotsArray[i].style.background="none"
            }}
    }
})

next.addEventListener("click", function(){
    if(clickCounter == slidesArray.length - 1){
        console.log("clicked next");
        clickCounter = 0
        let transitionAmount = 0
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "1s"
        console.log(clickCounter);
        dotsArray[clickCounter].style.backgroundColor= "#8172D5"
        for(let i = 0; i < dotsArray.length; i++){
            if(dotsArray[i] != dotsArray[clickCounter]){
                dotsArray[i].style.background="none"
            }}
    }else{
        console.log("clicked next");
        clickCounter++
        let transitionAmount = clickCounter * -100
        console.log(`translateX(${transitionAmount}%)`)
        imgDiv.style.transform =`translateX(${transitionAmount}%)`
        imgDiv.style.transitionDuration = "2s"
        console.log(clickCounter);
        dotsArray[clickCounter].style.backgroundColor= "#8172D5"
        for(let i = 0; i < dotsArray.length; i++){
            if(dotsArray[i] != dotsArray[clickCounter]){
                dotsArray[i].style.background="none"
            }}
    }
})


console.log(clickCounter);


// imaginary API

let data = [
    {
        img: 'https://images.unsplash.com/photo-1616832880699-8541b04005ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW58ZW58MHx8MHx8&w=1000&q=80',
        txt1: 'Capital Confidential: ‘Big Short’ author contemplates taking on Brexit',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        txt1: 'U.K. assets are too hot to handle right now, top investors say',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://images.unsplash.com/photo-1556474688-479399d655d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        txt1: 'Europe’s largest money manager warns of an investment industry liquidity crisis',
        txt2: 'Oct. 25, 2019 at 4:17 a.m. ET'

    },
    {
        img: 'https://thumbs.dreamstime.com/b/st-louis-united-states-america-14026911.jpg',
        txt1: 'Short-seller Muddy Waters attacks litigation fund Burford',
        txt2: 'Oct. 23, 2019 at 3:55 a.m. ET '

    },

    {
        img: 'https://oec.world/api/image?slug=partner&memberSlug=usa&size=splash',
        txt1: 'Wall Street falls on stalling economic rebound, stimulus impasse',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://www.voyanyc.com/viajar-a-estados-unidos/wp-content/uploads/2019/01/Visitar-Estados-Unidos-Nueva-York-@Voy-a-USA-e1546360282652.jpg',
        txt1: 'Exclusive: U.S. offers tariff truce if Airbus repays billions in aid, sources say',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://transporteca.de/wp-content/uploads/2018/03/USA-IMPORT.jpg',
        txt1: 'New York could emerge the winner from Brexit derivatives clash',
        txt2: 'Oct. 25, 2019 at 4:17 a.m. ET'

    },
    {
        img: 'https://media.istockphoto.com/photos/times-square-in-nyc-picture-id1070531042?k=20&m=1070531042&s=612x612&w=0&h=F4JVYzCuPFkIJ66iGCFC9imrLOY6CO5D42uqEltg75M=',
        txt1: 'Analysis: Imported tortillas? Big Mexican farmers fear cuts will hit harvests',
        txt2: 'Oct. 23, 2019 at 3:55 a.m. ET '
    },
]

//creating cards

let cardsArray = document.getElementsByClassName("card");
let img = document.getElementsByClassName("card-img-top");
let cardText = document.getElementsByClassName("card-text")
let cardDate = document.getElementsByClassName("card-date");
let cardsDiv =document.querySelector(".sect-2-cards");
console.log(cardsArray[0]);

function fillCards(){
    for(let i = 0;  i < cardsArray.length; i++){
        img[i].src = data[i].img;
        cardText[i].innerHTML = data[i].txt1;
        cardDate[i].innerHTML = data[i].txt2;
    }
}
fillCards()

//collapsing text
