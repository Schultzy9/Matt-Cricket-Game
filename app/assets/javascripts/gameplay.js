

$(document).ready(function() {

  let team1Runs = 0;
  let team1Wickets = 0;
  let team1Overs = 0;
  let team1TotalBalls = 0;

  let team2Runs = 0;
  let team2Wickets = 0;
  let team2Overs = 0;
  let team2TotalBalls = 0;

  let player1Turn = true;

  const team1BatterScores = [
    { runs: 0, balls: 0, out: false, batting: true },
    { runs: 0, balls: 0, out: false, batting: true },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false }
  ]

  const team2BatterScores = [
    { runs: 0, balls: 0, out: false, batting: true },
    { runs: 0, balls: 0, out: false, batting: true },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false },
    { runs: 0, balls: 0, out: false, batting: false }
  ]

  let currentBatsmenRuns = 0
  let currentBatsmenBalls = 0



  const setScorecard = function () {
    $('#team1runs').text('Runs : ' + team1Runs);
    $('#team2runs').text('Runs : ' + team2Runs);
    $('#team1wickets').text('Wickets : ' + team1Wickets);
    $('#team2wickets').text('Wickets : ' + team2Wickets);
    $('#team1overs').text('Overs : ' + team1Overs);
    $('#team2overs').text('Overs : ' + team2Overs);
    playerBatting();
  }

  const playerBatting = function () {
      $('#team1player1').text(gon.t1p1 + ': ' + team1BatterScores[0].runs + ' (' + team1BatterScores[0].balls + ')');
      $('#team1player2').text(gon.t1p2 + ': ' + team1BatterScores[1].runs + ' (' + team1BatterScores[1].balls + ')');
      $('#team1player3').text(gon.t1p3 + ': ' + team1BatterScores[2].runs + ' (' + team1BatterScores[2].balls + ')');
      $('#team1player4').text(gon.t1p4 + ': ' + team1BatterScores[3].runs + ' (' + team1BatterScores[3].balls + ')');
      $('#team1player5').text(gon.t1p5 + ': ' + team1BatterScores[4].runs + ' (' + team1BatterScores[4].balls + ')');
      $('#team1player6').text(gon.t1p6 + ': ' + team1BatterScores[5].runs + ' (' + team1BatterScores[5].balls + ')');
      $('#team1player7').text(gon.t1p7 + ': ' + team1BatterScores[6].runs + ' (' + team1BatterScores[6].balls + ')');
      $('#team1player8').text(gon.t1p8 + ': ' + team1BatterScores[7].runs + ' (' + team1BatterScores[7].balls + ')');
      $('#team1player9').text(gon.t1p9 + ': ' + team1BatterScores[8].runs + ' (' + team1BatterScores[8].balls + ')');
      $('#team1player10').text(gon.t1p10 + ': ' + team1BatterScores[9].runs + ' (' + team1BatterScores[9].balls + ')');
      $('#team2player1').text(gon.t2p1 + ': ' + team2BatterScores[0].runs + ' (' + team2BatterScores[0].balls + ')');
      $('#team2player2').text(gon.t2p2 + ': ' + team2BatterScores[1].runs + ' (' + team2BatterScores[1].balls + ')');
      $('#team2player3').text(gon.t2p3 + ': ' + team2BatterScores[2].runs + ' (' + team2BatterScores[2].balls + ')');
      $('#team2player4').text(gon.t2p4 + ': ' + team2BatterScores[3].runs + ' (' + team2BatterScores[3].balls + ')');
      $('#team2player5').text(gon.t2p5 + ': ' + team2BatterScores[4].runs + ' (' + team2BatterScores[4].balls + ')');
      $('#team2player6').text(gon.t2p6 + ': ' + team2BatterScores[5].runs + ' (' + team2BatterScores[5].balls + ')');
      $('#team2player7').text(gon.t2p7 + ': ' + team2BatterScores[6].runs + ' (' + team2BatterScores[6].balls + ')');
      $('#team2player8').text(gon.t2p8 + ': ' + team2BatterScores[7].runs + ' (' + team2BatterScores[7].balls + ')');
      $('#team2player9').text(gon.t2p9 + ': ' + team2BatterScores[8].runs + ' (' + team2BatterScores[8].balls + ')');
      $('#team2player10').text(gon.t2p10 + ': ' + team2BatterScores[9].runs + ' (' + team2BatterScores[9].balls + ')');
  }

  const assignRuns = function() {
    if (player1Turn === true) {
      team1BatterScores[team1Wickets]['runs'] = currentBatsmenRuns;
      team1BatterScores[team1Wickets]['balls'] = currentBatsmenBalls;
    } else {
      team2BatterScores[team2Wickets]['runs'] = currentBatsmenRuns;
      team2BatterScores[team2Wickets]['balls'] = currentBatsmenBalls;
    }
  }


  const bowlBallTeam1 = function() {
    ballResult = Math.floor(Math.random() * 6) + 1
    if (ballResult !== 5) {
      team1Runs += ballResult;
      currentBatsmenRuns += ballResult;
      currentBatsmenBalls += 1
      assignRuns();
    } else {
      currentBatsmenBalls += 1
      assignRuns();
      team1Wickets += 1;
      currentBatsmenRuns = 0;
      currentBatsmenBalls = 0;
    }
    team1TotalBalls += 1;
  }

  const bowlBallTeam2 = function() {
    ballResult = Math.floor(Math.random() * 6) + 1
    if (ballResult !== 5) {
      team2Runs += ballResult;
      currentBatsmenRuns += ballResult;
      currentBatsmenBalls += 1;
      assignRuns();
    } else {
      currentBatsmenBalls += 1
      assignRuns();
      team2Wickets += 1;
      currentBatsmenRuns = 0;
      currentBatsmenBalls = 0;
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
