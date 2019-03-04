var numbers=[0];
function randomMath(){
  var number=Math.floor(Math.random()*6) + 1;
  numbers.unshift(number);
  document.getElementById("player-1-round").innerHTML=numbers[0];
}

var numbers=[0];
function randomMathP2(){
  var number=Math.floor(Math.random()*6) + 1;
  numbers.unshift(number);
  document.getElementById("player-2-round").innerHTML=numbers[0];
}
