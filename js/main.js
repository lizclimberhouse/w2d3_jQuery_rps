$(document).ready( function() {

  var won = 0
  var lost = 0
  var tied = 0
  var games = 0
  var score = 0

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
    score = ""
    $('#user').text(userChoice)
    $('#comp').text(compChoice)
    $('#tied').text(tied)
    $('#lost').text(lost)    
    $('#won').text(won)
    $('#result').text(win_loose)
    $('#total_games').text(games)
    $('#score').text(score)
  })
  
  $('.choice').click( function() {
    var userChoice = this.id
    var compChoice = Math.random(1); // there is a rounding issue here, if the compChoice is .667 or .334 etc it outputs a number instead of a r-p-s answer
      switch(true) {
        case (compChoice < 0.33):
          compChoice = "rock"
          break
        case (compChoice > 0.33) && (compChoice < 0.66):
          compChoice = "paper"
          break
        case (compChoice > 0.66):
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
    }
    else if (userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "rock" ) {
      win_loose = "You Loose"
      lost += 1
      games += 1
      $('#lost').text(lost)
    }
    else {
      win_loose = "You Win!"
      won += 1
      games += 1
      $('#won').text(won)
    }
    $('#result').text(win_loose)
    $('#total_games').text(games)
    score = won + '/' + games
    $('#score').text(score)
  }
})
