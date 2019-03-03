//business logic
var diceImages = [dice1:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice
                  dice2:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice
                  dice3:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice
                  dice4:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice
                  dice5:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice
                  dice6:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice]

var firstPlayer = "";
var secondPlayer = "";
var dice = [1,2,3,4,5,6]
var throwdice = function () {
  return Math.floor(Math.random *6());
}


function player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}
//checking for firstPlayer
player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("sorry " + this.firstPlayerName + ",you rolled a 1! your turn is over sucker!")

  } else {
    this.tempscore += this.roll;
  }
}
// Hold
player.prototype.hold =function () {
  this.totalscore += this.tempscore
  this.tempscore = 0;
  //this.changeturn();
  alert(this.firstPlayerName + ",your turn is over,next player!");
  }
}
//check for 100
firstPlayer.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert (this.firstPlayerName + "you are the winner!");
  }
}
