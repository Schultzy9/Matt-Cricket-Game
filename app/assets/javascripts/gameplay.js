let team1runs = 0;
let team1wickets = 0;
let team1overs = 0;
let team1totalballs = 0;
let team2runs = 0;
let team2wickets = 0;
let team2overs = 0;
let team2totalballs = 0;
let player1turn = true;

$(document).on('turbolinks:load', function() {

  const setScorecard = function () {
    $('#team1runs').text('Runs : ' + team1runs);
    $('#team2runs').text('Runs : ' + team2runs);
    $('#team1wickets').text('Wickets : ' + team1wickets);
    $('#team2wickets').text('Wickets : ' + team2wickets);
    $('#team1overs').text('Overs : ' + team1overs);
    $('#team2overs').text('Overs : ' + team2overs);
  }

  const bowlBallTeam1 = function() {
    ballResult = Math.floor(Math.random() * 6) + 1
    if (ballResult !== 5) {
      team1runs += ballResult;
    } else {
      team1wickets += 1;
    }
    team1totalballs += 1;
  }

  const bowlBallTeam2 = function() {
    ballResult = Math.floor(Math.random() * 6) + 1
    if (ballResult !== 5) {
      team2runs += ballResult;
    } else {
      team2wickets += 1;
    }
    team2totalballs += 1;
  }

  const setOvers = function (){
    if (player1turn === true) {
      let overs = Math.floor(team1totalballs / 6)
      let balls = team1totalballs % 6
      team1overs = (`${overs}.${balls}`)
    } else {
      let overs = Math.floor(team2totalballs / 6)
      let balls = team2totalballs % 6
      team2overs = (`${overs}.${balls}`)
    }
  }

  const checkResult = function() {
    if (team1wickets === 10 && team2wickets === 10) {
      $('#result').text('Team 1 wins')
    } else if (team2runs > team1runs) {
      $('#result').text('Team 2 wins')
    }
  }

  $('#bowl').on('click', function() {
    if (player1turn === true && team1wickets < 10) {
      bowlBallTeam1();
    } else if (team2wickets <10 && team2runs <= team1runs) {
      player1turn = false;
      bowlBallTeam2();
    }
    setOvers();
    setScorecard();
    checkResult();
  });

  setScorecard();

});
