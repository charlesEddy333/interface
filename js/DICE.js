var player1 = "Player 1";
var player2 = "Player 2";



function editName(){
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change Player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
      
    document.querySelector("p.Player2").innerHTML = player2;
}


function rollDice(){
    
        var randomNumber1 = Math.floor(Math.random() *6) + 1;
      

        var dice = "images/" + "dice" + randomNumber1 + ".png";
         var img1= document.querySelectorAll("img")[0];
         img1.setAttribute("src",dice);
      
         var randomNumber2 = Math.floor(Math.random() *6) + 1;
      

         var dice = "images/" + "dice" + randomNumber2 + ".png";
          var img2= document.querySelectorAll("img")[1];
          img2.setAttribute("src",dice);

          if(randomNumber1 === randomNumber2){
            document.querySelector("h1").innerHTML = "Draw!";

          }

          
          else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML
                            = (player2 + " WINS!");
        }

        else {
            document.querySelector("h1").innerHTML
                            = (player1 + " WINS!");
        }


    
}
