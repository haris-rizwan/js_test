
(function(){

var container = document.querySelector("#main");
var imgs = ["elk.png","falcon.png","osprey.png","sturgeon.png","turkey.png","warbler.png"]


for(i=0; i<12;i++){

    var gameDivs = document.createElement("div");
    gameDivs.setAttribute("id", i);
    gameDivs.setAttribute("class","front back");
    gameDivs.addEventListener("click" , flipCard);
    container.appendChild(gameDivs);

};




function flipCard(){

    this.classList.toggle("front");
    // var rndImg = imgs[Math.floor(Math.random()*imgs.length)];
    // this.style={background:(rndImg)}


    console.log(this);
    // console.log(rndmNum);

    

};

})();