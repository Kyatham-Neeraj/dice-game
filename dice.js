//*******dice1********/
var randomNumber1 = Math.floor(Math.random()*6)+1; // 1-6
 
var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = randomDiceImage ; //diceimagesource1-6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//**********dice2********/
var randomNumber2 = Math.floor(Math.random()*6)+1;
 
var randomImageSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//******declaring winnner*****
if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "🏅Player 1 won" ;
}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 won🏅" ;
}
else {
    document.querySelector("h1").innerHTML = "draw🫱‍🫲" ;
}
