var diceImages = [dice1:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice
                  dice2:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice
                  dice3:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice
                  dice4:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice
                  dice5:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice
                  dice6:https/home/emmah/Desktop/moringa-school-projects/Pig-Dice]

var firstPlayer = "";
var secondPlayer = "";

var throwdice = function () {
  return Math.floor(6 * Math.random())+1;
}

function player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}
