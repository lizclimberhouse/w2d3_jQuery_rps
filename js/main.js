console.log("this JS is working")
// #TODO - the percecnts don't work and I can't figure out how to fix them
$(document).ready( function() {

  // var result = $('#result')
  var won = 0
  var lost = 0
  var tied = 0
  var games = 0
  // var won_per = $('#per_won')
  // var per_won = 0
  // var lost_per = $('#per_lost')
  // var per_lost = 0
  // var tied_per = $('#per_tied')
  // var per_tied = 0

  // var result = document.getElementById('result')
  // var times_won = document.getElementById('won')
  // var won = 0
  // var times_lost = document.getElementById('lost')
  // var lost = 0
  // var times_tied = document.getElementById('tied')
  // var tied = 0
  // var games = 0
  // var won_per = document.getElementById('per_won')
  // var per_won = 0
  // var lost_per = document.getElementById('per_lost')
  // var per_lost = 0
  // var tied_per = document.getElementById('per_tied')
  // var per_tied = 0

  $('#clear_btn').click( function() {
    compChoice = ""
    userChoice = ""
    user = ""
    comp = ""
    tied = null
    lost = null
    won = null
    win_loose = ""
    games = null
    $('#user').text(userChoice)
    $('#comp').text(compChoice)
    $('#tied').text(tied)
    $('#lost').text(lost)    
    $('#won').text(won)
    $('#result').text(win_loose)
    $('#total_games').text(games)
  })
  
  $('.choice').click( function() {
    var userChoice = this.id
    var compChoice = Math.random(1); // = Math.floor(Math.random() * compArr.length)
      switch(true) {
        case (compChoice < 0.33):
          compChoice = "rock"
          break
        case (compChoice > 0.34) && (compChoice < 0.66):
          compChoice = "paper"
          break
        case (compChoice > 0.67):
          compChoice = "scissors"
      }
    $('#user').text(userChoice)
    $('#comp').text(compChoice)
    assess(userChoice, compChoice)
  })

  function assess(userChoice, compChoice) {
    if (userChoice === compChoice) {
      win_loose = "You Tied"
      tied += 1
      games += 1
      $('#tied').text(tied)
      // per_tied = Math.round((tied/games) * 100) + '%'
      // tied_per.innerHTML = per_tied
    }
    else if (userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "rock" ) {
      win_loose = "You Loose"
      lost += 1
      games += 1
      $('#lost').text(lost)      // per_lost = Math.round((lost/games) * 100) + '%'
      // lost_per.innerHTML = per_lost
    }
    else {
      win_loose = "You Win!"
      won += 1
      games += 1
      $('#won').text(won)      // per_won = Math.round((won/games) * 100) + '%'
      // won_per.innerHTML = per_won
    }
    $('#result').text(win_loose)
    $('#total_games').text(games)
  }

  // function clickButton {
  //   var id = this.id
  //     if(this.id == "reset") {
  //         playerWins.length = 0;
  //         document.getElementById("playerscore").innerHTML = playerWins.length
  //         compWins.length = 0;
  //         document.getElementById("compscore").innerHTML = compWins.length
  //       } else document.getElementById("choice").innerHTML = "You chose " + id
  //     playerChoice.unshift(this.id)
  //     compAssign(compChoice.unshift)
  //     assess(playerChoice[0], compChoice)
  //   }
})
  // debugger //binding.pry DO NOT LEAVE debuggers in code. It will only work in the console, but dont leave it all the same.