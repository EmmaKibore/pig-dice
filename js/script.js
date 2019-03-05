//Business logic
var player1Rolls = [];
var player2Rolls = [];
var player1RoundScore = [];
var player2RoundScore = [];
var player1RoundCollection = [];
var player2RoundCollection = [];
var player1Total = [];
var player2Total = [];
var total1 = 0;
var total2 = 0;
var sum = 0;
var summ = 0;



var numbers=[0];
function randomMath(){
  var number=Math.floor(Math.random()*6) + 1;
  numbers.unshift(number);
  document.getElementById("player-1-round").innerHTML=numbers[0];

  if(number >1){
    player1Rolls.push(number);
    sum = 0;
    player1Rolls.forEach(function(roll){
      sum = sum + roll;
    })
  }
  else{
    player1Rolls = [];
    sum = 0;
    $(document).ready(function(){
      $("#roll1").attr("disabled", true);
      $("#roll2").attr("disabled", false);
      $("#hold1").attr("disabled", true);
      $("#hold2").attr("disabled", false);
    })
  }
}

var numbers=[0];
function randomMathP2(){
  var number2=Math.floor(Math.random()*6) + 1;
  numbers.unshift(number2);
  document.getElementById("player-2-round").innerHTML=numbers[0];

  if(number2 >1){
    player2Rolls.push(number2);
    summ = 0;
    player2Rolls.forEach(function(rol){
      summ = summ + rol;
    })
    player2RoundScore.length = 0;
    player2RoundScore.push(summ);
    document.getElementById('round-total-2').innerHTML = player2RoundScore;
  }
  else{
    player2RoundScore.length = 0;
    player2Rolls = [];
    var summ = 0;
    $(document).ready(function(){
      $("#roll2").attr("disabled", true);
      $("#roll1").attr("disabled", false);
      $("#hold2").attr("disabled", true);
      $("#hold1").attr("disabled", false);
    })
  }
}

function storing1(){
  player1RoundScore.length = 0;
  player1RoundScore.push(sum);
  document.getElementById('round-total-1').innerHTML = player1RoundScore;
}

function collection1(){
  player1RoundCollection.push(parseInt(player1RoundScore));
  player1RoundScore.length = 0;
}

function collection2(){
  player2RoundCollection.push(parseInt(player2RoundScore));
  player2RoundScore.length = 0;
}

function totaling1(){
  total1 = 0;
  player1RoundCollection.forEach(function(collect){
    total1 = total1 + collect;
  })
  player1Total.length = 0;
  player1Total.push(total1);
  document.getElementById('held-total-1').innerHTML = player1Total;
}

function totaling2(){
  total2 = 0;
  player2RoundCollection.forEach(function(collect){
    total2 = total2 + collect;
  })
  player2Total.length = 0;
  player2Total.push(total2);
  document.getElementById('held-total-2').innerHTML = player2Total;
}

function determine(){
  if (player2Total > 99){
    alert("Wow! Player Two You have won!")
  }
  else if(player1Total > 99){
    alert("Wow! Player One You have won!")
  }
}





//UI logic
$(document).ready(function(){
  $('.players').submit(function(event){
    event.preventDefault();
    var name1 = $('.player1Name').val();
    var name2 = $('.player2Name').val();

    $('#name1').text(name1);
    $('#name2').text(name2);
  })
  $('#roll1').click(function(){
    randomMath();
    storing1();
    $("#hold1").attr("disabled", false);
  })

  $('#roll2').click(function(){
    randomMathP2();
  })

  $('#hold1').click(function(){
    collection1();
    totaling1();
    determine();
    player1Rolls.length = 0;
    document.getElementById('round-total-1').innerHTML = player1RoundScore;
    $("#roll1").attr("disabled", true);
    $("#roll2").attr("disabled", false);
    $("#hold1").attr("disabled", true);
    $("#hold2").attr("disabled", false);
  })

  $('#hold2').click(function(){
    collection2();
    totaling2();
    determine();
    player2Rolls.length = 0;
    document.getElementById('round-total-2').innerHTML = player2RoundScore;
    $("#roll2").attr("disabled", true);
    $("#roll1").attr("disabled", false);
    $("#hold2").attr("disabled", true);
    $("#hold1").attr("disabled", false);
  })
})
