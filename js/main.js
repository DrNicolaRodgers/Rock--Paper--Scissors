var winningStreak =0;

$('#myDiv').click(function(){
var player = prompt("Rock, paper, scissors, lizard or spock?");

if (player !== null){
    player = player.toLowerCase();
}

var choices = ["rock","paper","scissors", "lizard", "spock"];
var computer = choices[Math.floor(Math.random()*5)];

var win = "Your "+player+" beats "+computer+". You win!";
var lose = "Your "+player+" loses to "+computer+". Epic Fail!!";
var draw = "A draw: "+player+" on "+computer+". (Just as bad as losing really)";

if(player === computer){
    result = draw;
}

else if(player === "rock"){
    switch(computer){
        
      case "scissors":
      case "lizard":
      result = win;
      break;

      case "paper":
      case "spock":
      result = lose;
      break;
    }
}

else if(player === "paper"){

    switch(computer){
        
      case "scissors":
      case"lizard":
      result = lose;
      break;

      case "rock":
      case "spock":
      result = win;
      break;
    }
}
else if(player === "scissors"){
   
    switch(computer){

      case "paper":
      case "lizard":
      result = win;
      break;

      case "rock":
      case "spock":
      result = lose;
      break;
    }
}

else if(player === "lizard"){
   
    switch(computer){
        
      case "scissors":
      case "rock":
      result = lose;
      break;

      case "paper":
      case "spock":
      result = win;
      break;
    }
}

else if(player === "spock"){
   
    switch(computer){
        
      case "scissors":
      case "rock":
      result = win;
      break;

      case "paper":
      case "lizard":
      result = lose;
      break;
    }
}
else if(player === null){
  result = "Bye!";
}
else{
  result = "I said rock, paper, scissors, lizard or spock!";
}

if (result === win){
    winningStreak = winningStreak + 1;
}
 else{
    winningStreak = winningStreak-1;
 }
  $("#output").text(result);
  $("#streak").text("Your winning streak is: " +winningStreak);
});


