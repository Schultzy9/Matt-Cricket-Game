

$(document).on('turbolinks:load', function() {

  let team1Runs = 0;
  let team1Wickets = 0;
  let team1Overs = 0;
  let team1TotalBalls = 0;
  let team2Runs = 0;
  let team2Wickets = 0;
  let team2Overs = 0;
  let team2TotalBalls = 0;
  let player1Turn = true;

  const setScorecard = function () {
    $('#team1runs').text('Runs : ' + team1Runs);
    $('#team2runs').text('Runs : ' + team2Runs);
    $('#team1wickets').text('Wickets : ' + team1Wickets);
    $('#team2wickets').text('Wickets : ' + team2Wickets);
    $('#team1overs').text('Overs : ' + team1Overs);
    $('#team2overs').text('Overs : ' + team2Overs);
  }

  const bowlBallTeam1 = function() {
    ballResult = Math.floor(Math.random() * 6) + 1
    if (ballResult !== 5) {
      team1Runs += ballResult;
    } else {
      team1Wickets += 1;
    }
    team1TotalBalls += 1;
  }

  const bowlBallTeam2 = function() {
    ballResult = Math.floor(Math.random() * 6) + 1
    if (ballResult !== 5) {
      team2Runs += ballResult;
    } else {
      team2Wickets += 1;
    }
    team2TotalBalls += 1;
  }

  const setOvers = function (){
    if (player1Turn === true) {
      let overs = Math.floor(team1TotalBalls / 6)
      let balls = team1TotalBalls % 6
      team1Overs = (`${overs}.${balls}`)
    } else {
      let overs = Math.floor(team2TotalBalls / 6)
      let balls = team2TotalBalls % 6
      team2Overs = (`${overs}.${balls}`)
    }
  }

  const checkResult = function() {
    if (team1Wickets === 10 && team2Wickets === 10) {
      $('#result').text('Team 1 wins')
    } else if (team2Runs > team1Runs) {
      $('#result').text('Team 2 wins')
    }
  }

  $('#bowl').on('click', function() {
    if (player1Turn === true && team1Wickets < 10) {
      bowlBallTeam1();
    } else if (team2Wickets <10 && team2Runs <= team1Runs) {
      player1Turn = false;
      bowlBallTeam2();
    }
    setOvers();
    setScorecard();
    checkResult();
  });

  setScorecard();

});
