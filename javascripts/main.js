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

if(player === "rock"){
    switch(computer){
        
      case "scissors" || "lizard":
      result = win;
      break;

      case "paper" || "spock":
      result = lose;
      break;

      case "rock":
      result = draw;
      break;
    }
}

else if(player === "paper"){

    switch(computer){
        
      case "scissors" || "lizard":
      result = lose;
      break;

      case "paper":
      result = draw;
      break;

      case "rock" || "spock":
      result = win;
      break;
    }
}
else if(player === "scissors"){
   
    switch(computer){
        
      case "scissors":
      result = draw;
      break;

      case "paper" || "lizard":
      result = win;
      break;

      case "rock" || "spock":
      result = lose;
      break;
    }
}

else if(player === "lizard"){
   
    switch(computer){
        
      case "scissors" || "rock":
      result = lose;
      break;

      case "paper" || "spock":
      result = win;
      break;

      case "lizard":
      result = draw;
      break;
    }
}

else if(player === "spock"){
   
    switch(computer){
        
      case "scissors" || "rock":
      result = win;
      break;

      case "paper" || "lizard":
      result = lose;
      break;

      case "spock":
      result = draw;
      break;
    }
}
else if(player === null){
  result = "Bye!";
}
else{
  result = "I said rock, paper, scissors, lizard or spock!";
}
var winningStreak = 0;
while (result === win){
    winningStreak = winningStreak + 1;
}
else{
    winningStreak=0;
}
  $("#output").text(result);
  $("#streak").text("Your winning streak is: "winningStreak);
});


