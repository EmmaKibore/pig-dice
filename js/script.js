//business logic
var firstPlayer = "";
var secondPlayer = "";
var dice = [1,2,3,4,5,6]
var throwdice = function () {
  return Math.floor(Math.random()*6 + 1);
}


function player(turn) {
  this.roll = 0;
  this.roundscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}
//checking for firstPlayer
player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.roundscore = 0;
    alert("sorry " + this.firstPlayerName + ", your turn is over sucker!")

  } else {
    this.roundscore += this.roll;
  }
}
// Hold
player.prototype.hold =function () {
  this.totalscore += this.roundscore
  this.roundscore = 0;
  //this.changeturn();
  alert(this.firstPlayerName + ",your turn is over,next player!");
  }
//check for 100
firstPlayer.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert (this.firstPlayerName + "you are the winner!");
  }
}
player.prototype.newGame = function () {
  this.roll = 0;
  this.roundscore = 0;
  this.totalscore = 0;
  this.firstPlayer = "";
}
};
