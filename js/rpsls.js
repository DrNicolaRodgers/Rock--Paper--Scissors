var winningStreak =0;
$("#rock").click(function(){
	play("rock");
});

$("#paper").click(function(){
	play("paper");
});

$("#scissors").click(function(){
	play("scissors");
});

$("#lizard").click(function(){
	play("lizard");
});

$("#spock").click(function(){
	play("spock");
});


$("#finish").click(function(){
	$("#computer").html("");
	$("#output").text("Bye!!");
	$("#streak").text("");
	
});

var play = function play(player){

document.getElementById("bye").style.display = "block";

if (player !== null){
    player = player.toLowerCase();
}

var choices = ["rock","paper","scissors", "lizard", "spock"];
var computer = choices[Math.floor(Math.random()*5)];

var img = new Image();
varSrc = "img/"+computer+".png";
img.src = varSrc;
$("#computer").html(img);

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
    winningStreak = 0;
 }
  $("#output").text(result);
  $("#streak").text("Your winning streak is: " +winningStreak);
};


