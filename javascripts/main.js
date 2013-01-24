function start(){
var player = prompt("Rock, paper, scissors, lizard or spock?");
}
if (player !== null){
    player = player.toLowerCase();
  } 

var choices = ["rock","paper","scissors", "lizard", "spock"];
var computer = choices[Math.floor(Math.random()*5)];

var win = "Your "+player+" beats "+computer+". You win.";
var lose = "Your "+player+" loses to "+computer+". You lose.";
var draw = "A draw: "+player+" on "+computer+".";

if(player === "rock"){
    switch(computer){
        
      case "scissors":
      result = win;
      break;

      case "paper":
      result = lose;
      break;

      case "rock":
      result = draw;
      break;
      
      case "lizard":
      result = win;
      break;

      case "spock":
      result = lose;
      break;
    }
}

else if(player === "paper"){

    switch(computer){
        
      case "scissors":
      result = lose;
      break;

      case "paper":
      result = draw;
      break;

      case "rock":
      result = win;
      break;
      
      case "lizard":
      result = lose;
      break;

      case "spock":
      result = win;
      break;
    }
}
else if(player === "scissors"){
   
    switch(computer){
        
      case "scissors":
      result = draw;
      break;

      case "paper":
      result = win;
      break;

      case "rock":
      result = lose;
      break;
      
      case "lizard":
      result = win;
      break;

      case "spock":
      result = lose;
      break;
    }
}

else if(player === "lizard"){
   
    switch(computer){
        
      case "scissors":
      result = lose;
      break;

      case "paper":
      result = win;
      break;

      case "rock":
      result = lose;
      break;
      
      case "lizard":
      result = draw;
      break;

      case "spock":
      result = win;
      break;
    }
}

else if(player === "spock"){
   
    switch(computer){
        
      case "scissors":
      result = win;
      break;

      case "paper":
      result = lose;
      break;

      case "rock":
      result = win;
      break;
      
      case "lizard":
      result = lose;
      break;

      case "spock":
      result = draw;
      break;
    }
}
else if(player === null){
  console.log ("Bye!");
}
else{
  console.log("I said rock, paper, scissors, lizard or spock!")
}
return result;

}
