

/*generate the number of dice and the winner of the round*/
var winner = 0;
var numberDice1 = Math.floor((Math.random()*6)+1);
var numberDice2 = Math.floor((Math.random()*6)+1);

function theWinner(){
   
       
        if (numberDice1===numberDice2){
            winner = 0;}
               
        else if (numberDice1>numberDice2){
            winner = 1;
                }
        else {winner = 2};
        return winner;
                
}


/*change the dice*/



/*h1 behavior*/
function changeHeader(winner){
    if (winner === 0){
        document.querySelector("h1").textContent = "No winner, play again";
        document.querySelector("h1").style.fontSize = "6rem";
    }
    else if(winner!=0){
    document.querySelector("h1").textContent = `Player ${winner} wins!`;
    
    var img = document.createElement("img");
    img.src = "/images/victoryflag.png";
    document.querySelector("h1").appendChild(img);
    document.querySelector("h1 img").className = "victoryFlag";
    }
}

function diceImages(numberDice1, numberDice2){
    document.getElementsByClassName("img1")[0].setAttribute("src", `./images/dice${numberDice1}.png`);
    document.getElementsByClassName("img2")[0].setAttribute("src", `./images/dice${numberDice2}.png`);

}

theWinner();
diceImages(numberDice1,numberDice2);
changeHeader(winner);
