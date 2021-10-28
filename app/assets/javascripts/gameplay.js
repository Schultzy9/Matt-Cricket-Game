const team1BatterScores = [
  { runs: 0, balls: 0, out: false, batting: true, notouts: 0, name: gon.t1p1, rating: gon.t1p1rating },
  { runs: 0, balls: 0, out: false, batting: true, notouts: 0, name: gon.t1p2, rating: gon.t1p2rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t1p3, rating: gon.t1p3rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t1p4, rating: gon.t1p4rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t1p5, rating: gon.t1p5rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t1p6, rating: gon.t1p6rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t1p7, rating: gon.t1p7rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t1p8, rating: gon.t1p8rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t1p9, rating: gon.t1p9rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t1p10, rating: gon.t1p10rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t1p11, rating: gon.t1p11rating }
]

const team2BatterScores = [
  { runs: 0, balls: 0, out: false, batting: true, notouts: 0, name: gon.t2p1, rating: gon.t2p1rating },
  { runs: 0, balls: 0, out: false, batting: true, notouts: 0, name: gon.t2p2, rating: gon.t2p2rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t2p3, rating: gon.t2p3rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t2p4, rating: gon.t2p4rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t2p5, rating: gon.t2p5rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t2p6, rating: gon.t2p6rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t2p7, rating: gon.t2p7rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t2p8, rating: gon.t2p8rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t2p9, rating: gon.t2p9rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t2p10, rating: gon.t2p10rating },
  { runs: 0, balls: 0, out: false, batting: false, notouts: 0, name: gon.t2p11, rating: gon.t2p11rating }
]

const ratingConversion = [
  [1, 1, 1, 2, 3, 4, 5, 5, 5, 6],
  [1, 1, 1, 2, 2, 3, 4, 5, 5, 6],
  [1, 1, 1, 2, 2, 3, 3, 4, 5, 6],
  [1, 1, 1, 2, 2, 3, 4, 4, 5, 6],
  [1, 1, 2, 2, 3, 4, 4, 5, 6, 6]
]

  let bat1 = { batsmen: team1BatterScores[0], strike: true};
  let bat2 = { batsmen: team1BatterScores[1], strike: false};

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

  let y = 0;

  let gameOver = false;

  const updateScores = function() {
    if (ballResult === 1 || ballResult === 3) {
      if (bat1.strike === true) {
        bat1.strike = false;
        bat2.strike = true;
        bat1.batsmen.runs += ballResult;
        bat1.batsmen.balls += 1;
      } else {
        bat1.strike = true;
        bat2.strike = false;
        bat2.batsmen.runs += ballResult;
        bat2.batsmen.balls += 1;
      }
    } else if (ballResult === 2|| ballResult === 4 || ballResult === 6) {
      if (bat1.strike === true) {
        bat1.batsmen.runs += ballResult;
        bat1.batsmen.balls += 1;
      } else {
        bat2.batsmen.runs += ballResult;
        bat2.batsmen.balls += 1;
      }
    } else if (ballResult === 5 && player1Turn === true) {
      if (bat1.strike === true) {
        bat1.batsmen.balls += 1;
        bat1.batsmen.out = true;
        let x = 0
        if (team1Wickets !== 10) {
          while (team1BatterScores[x].out === true || team1BatterScores[x].batting === true) {
            x += 1;
            bat1.batsmen = team1BatterScores[x];
          }
          team1BatterScores[x].batting = true;
        }
      } else {
        bat2.batsmen.balls += 1;
        bat2.batsmen.out = true;
        let x = 0
        if (team1Wickets !== 10) {
          while (team1BatterScores[x].out === true || team1BatterScores[x].batting === true) {
            x += 1;
            bat2.batsmen = team1BatterScores[x];
          }
          team1BatterScores[x].batting = true;
        }
      }
    } else if (ballResult === 5 && player1Turn === false) {
      if (bat1.strike === true) {
        bat1.batsmen.balls += 1;
        bat1.batsmen.out = true;
        let x = 0
        if (team2Wickets !== 10) {
          while (team2BatterScores[x].out === true || team2BatterScores[x].batting === true) {
            x += 1;
            bat1.batsmen = team2BatterScores[x];
          }
          team2BatterScores[x].batting = true;
        }
      } else {
        bat2.batsmen.balls += 1;
        bat2.batsmen.out = true;
        let x = 0
        if (team2Wickets !== 10) {
          while (team2BatterScores[x].out === true || team2BatterScores[x].batting === true) {
            x += 1;
            bat2.batsmen = team2BatterScores[x];
          }
          team2BatterScores[x].batting = true;
        }
      }
    }
    if (player1Turn === true && team1TotalBalls % 6 === 0) {
      if (bat1.strike === true) {
        bat1.strike = false;
        bat2.strike = true;
      } else {
        bat1.strike = true;
        bat2.strike = false;
      }
    } else if (player1Turn === false && team2TotalBalls % 6 === 0) {
      if (bat1.strike === true) {
        bat1.strike = false;
        bat2.strike = true;
      } else {
        bat1.strike = true;
        bat2.strike = false;
      }
    }
  }

  const setScorecard = function () {
    $('#team1runs').text('Runs : ' + team1Runs);
    $('#team2runs').text('Runs : ' + team2Runs);
    $('#team1wickets').text('Wickets : ' + team1Wickets);
    $('#team2wickets').text('Wickets : ' + team2Wickets);
    $('#team1overs').text('Overs : ' + team1Overs);
    $('#team2overs').text('Overs : ' + team2Overs);
    setDisplay();
  }

  const setDisplay = function () {
      $('#team1player1').text(gon.t1p1 + ': ');
      $('#team1player2').text(gon.t1p2 + ': ');
      $('#team1player3').text(gon.t1p3 + ': ');
      $('#team1player4').text(gon.t1p4 + ': ');
      $('#team1player5').text(gon.t1p5 + ': ');
      $('#team1player6').text(gon.t1p6 + ': ');
      $('#team1player7').text(gon.t1p7 + ': ');
      $('#team1player8').text(gon.t1p8 + ': ');
      $('#team1player9').text(gon.t1p9 + ': ');
      $('#team1player10').text(gon.t1p10 + ': ');
      $('#team1player11').text(gon.t1p11 + ': ');
      $('#team2player1').text(gon.t2p1 + ': ');
      $('#team2player2').text(gon.t2p2 + ': ');
      $('#team2player3').text(gon.t2p3 + ': ');
      $('#team2player4').text(gon.t2p4 + ': ');
      $('#team2player5').text(gon.t2p5 + ': ');
      $('#team2player6').text(gon.t2p6 + ': ');
      $('#team2player7').text(gon.t2p7 + ': ');
      $('#team2player8').text(gon.t2p8 + ': ');
      $('#team2player9').text(gon.t2p9 + ': ');
      $('#team2player10').text(gon.t2p10 + ': ');
      $('#team2player11').text(gon.t2p11 + ': ');
      $('#team1player1score').text(team1BatterScores[0].runs + ' (' + team1BatterScores[0].balls + ')');
      $('#team1player2score').text(team1BatterScores[1].runs + ' (' + team1BatterScores[1].balls + ')');
      $('#team1player3score').text(team1BatterScores[2].runs + ' (' + team1BatterScores[2].balls + ')');
      $('#team1player4score').text(team1BatterScores[3].runs + ' (' + team1BatterScores[3].balls + ')');
      $('#team1player5score').text(team1BatterScores[4].runs + ' (' + team1BatterScores[4].balls + ')');
      $('#team1player6score').text(team1BatterScores[5].runs + ' (' + team1BatterScores[5].balls + ')');
      $('#team1player7score').text(team1BatterScores[6].runs + ' (' + team1BatterScores[6].balls + ')');
      $('#team1player8score').text(team1BatterScores[7].runs + ' (' + team1BatterScores[7].balls + ')');
      $('#team1player9score').text(team1BatterScores[8].runs + ' (' + team1BatterScores[8].balls + ')');
      $('#team1player10score').text(team1BatterScores[9].runs + ' (' + team1BatterScores[9].balls + ')');
      $('#team1player11score').text(team1BatterScores[10].runs + ' (' + team1BatterScores[10].balls + ')');
      $('#team2player1score').text(team2BatterScores[0].runs + ' (' + team2BatterScores[0].balls + ')');
      $('#team2player2score').text(team2BatterScores[1].runs + ' (' + team2BatterScores[1].balls + ')');
      $('#team2player3score').text(team2BatterScores[2].runs + ' (' + team2BatterScores[2].balls + ')');
      $('#team2player4score').text(team2BatterScores[3].runs + ' (' + team2BatterScores[3].balls + ')');
      $('#team2player5score').text(team2BatterScores[4].runs + ' (' + team2BatterScores[4].balls + ')');
      $('#team2player6score').text(team2BatterScores[5].runs + ' (' + team2BatterScores[5].balls + ')');
      $('#team2player7score').text(team2BatterScores[6].runs + ' (' + team2BatterScores[6].balls + ')');
      $('#team2player8score').text(team2BatterScores[7].runs + ' (' + team2BatterScores[7].balls + ')');
      $('#team2player9score').text(team2BatterScores[8].runs + ' (' + team2BatterScores[8].balls + ')');
      $('#team2player10score').text(team2BatterScores[9].runs + ' (' + team2BatterScores[9].balls + ')');
      $('#team2player11score').text(team2BatterScores[10].runs + ' (' + team2BatterScores[10].balls + ')');
  }

  const bowlBallTeam1 = function() {
    let num = Math.floor(Math.random() * 10);
    if (bat1.strike === true) {
      ballResult = ratingConversion[bat1.batsmen.rating - 1][num]
    } else {
      ballResult = ratingConversion[bat2.batsmen.rating - 1][num]
    }
    if (ballResult !== 5) {
      team1Runs += ballResult;
      $('#lastball').text('Last ball: ' + ballResult)
    } else {
      team1Wickets += 1;
      $('#lastball').text('Last ball: W')
    }
    team1TotalBalls += 1;
    updateScores();
    setScorecard();
  }

  const bowlBallTeam2 = function() {
    let num = Math.floor(Math.random() * 10);
    if (bat1.strike === true) {
      ballResult = ratingConversion[bat1.batsmen.rating - 1][num]
    } else {
      ballResult = ratingConversion[bat2.batsmen.rating - 1][num]
    }
    if (ballResult !== 5) {
      team2Runs += ballResult;
      $('#lastball').text('Last ball: ' + ballResult)
    } else {
      team2Wickets += 1;
      $('#lastball').text('Last ball: W')
    }
    team2TotalBalls += 1;
    updateScores();
    setScorecard();
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

  const checkNotOuts = function () {
    for (let i = 0; i < 11; i++) {
      if (team1BatterScores[i].out === false) {
        team1BatterScores[i].notouts = 1;
      }
      if (team2BatterScores[i].out === false) {
        team2BatterScores[i].notouts = 1;
      }
    }
  }

  const checkResult = function() {
    if (team1Wickets === 10 && team2Wickets === 10) {
      $('#result').text(gon.t1 + ' wins!')
      checkNotOuts();
      $('#submit').show();
      $('#winningTeam').text('team1')
      gameOver = true;
    } else if (team2Runs > team1Runs) {
      $('#result').text(gon.t2 + ' wins!')
      checkNotOuts();
      $('#submit').show();
      $('#winningTeam').text('team2')
      gameOver = true;
    }
  }

  const highlightBatters = function() {
    for (let x = 0; x < team1BatterScores.length; x++) {
      if (team1BatterScores[x].batting === true && team1BatterScores[x].out === false) {
        $("#team1player" + ( x + 1)).attr('class', 'current-batter')
        $("#team1player" + ( x + 1) + "score").attr('class', 'current-batter')
      } else if (team1BatterScores[x].batting === true && team1BatterScores[x].out === true) {
        $("#team1player" + ( x + 1)).attr('class', 'out-batter')
        $("#team1player" + ( x + 1) + "score").attr('class', 'out-batter')
      }
      if (player1Turn === false && team2BatterScores[x].batting === true && team2BatterScores[x].out === false) {
        $("#team2player" + ( x + 1)).attr('class', 'current-batter')
        $("#team2player" + ( x + 1) + "score").attr('class', 'current-batter')
      } else if (player1Turn === false && team2BatterScores[x].batting === true && team2BatterScores[x].out === true) {
        $("#team2player" + ( x + 1)).attr('class', 'out-batter')
        $("#team2player" + ( x + 1) + "score").attr('class', 'out-batter')
      }
    }
  }

  const setStrike = function() {
    if (bat1.strike === true) {
      $("#strike").text("On Strike: " + bat1.batsmen.name)
    } else {
      $("#strike").text("On Strike: " + bat2.batsmen.name)
    }
  }

//CLICK ON BOWL BALL TO PLAY GAME

  $('#bowl').on('click', function() {
    if (player1Turn === true && team1Wickets < 10) {
      bowlBallTeam1();
    } else if (team2Wickets <10 && team2Runs <= team1Runs) {
      if (y === 0) {
        bat1 = { batsmen: team2BatterScores[0], strike: true};
        bat2 = { batsmen: team2BatterScores[1], strike: false};
        y += 1;
      }
      player1Turn = false;
      bowlBallTeam2();
    }
    setOvers();
    setScorecard();
    checkResult();
    highlightBatters();
    setStrike();
  });

  $('#submit').on('click', function() {
    if (gameOver === true) {
      $('#t1p1Runs').text(team1BatterScores[0].runs)
      $('#t1p2Runs').text(team1BatterScores[1].runs)
      $('#t1p3Runs').text(team1BatterScores[2].runs)
      $('#t1p4Runs').text(team1BatterScores[3].runs)
      $('#t1p5Runs').text(team1BatterScores[4].runs)
      $('#t1p6Runs').text(team1BatterScores[5].runs)
      $('#t1p7Runs').text(team1BatterScores[6].runs)
      $('#t1p8Runs').text(team1BatterScores[7].runs)
      $('#t1p9Runs').text(team1BatterScores[8].runs)
      $('#t1p10Runs').text(team1BatterScores[9].runs)
      $('#t1p11Runs').text(team1BatterScores[10].runs)
      $('#t2p1Runs').text(team2BatterScores[0].runs)
      $('#t2p2Runs').text(team2BatterScores[1].runs)
      $('#t2p3Runs').text(team2BatterScores[2].runs)
      $('#t2p4Runs').text(team2BatterScores[3].runs)
      $('#t2p5Runs').text(team2BatterScores[4].runs)
      $('#t2p6Runs').text(team2BatterScores[5].runs)
      $('#t2p7Runs').text(team2BatterScores[6].runs)
      $('#t2p8Runs').text(team2BatterScores[7].runs)
      $('#t2p9Runs').text(team2BatterScores[8].runs)
      $('#t2p10Runs').text(team2BatterScores[9].runs)
      $('#t2p11Runs').text(team2BatterScores[10].runs)
      $('#t1p1NotOuts').text(team1BatterScores[0].notouts)
      $('#t1p2NotOuts').text(team1BatterScores[1].notouts)
      $('#t1p3NotOuts').text(team1BatterScores[2].notouts)
      $('#t1p4NotOuts').text(team1BatterScores[3].notouts)
      $('#t1p5NotOuts').text(team1BatterScores[4].notouts)
      $('#t1p6NotOuts').text(team1BatterScores[5].notouts)
      $('#t1p7NotOuts').text(team1BatterScores[6].notouts)
      $('#t1p8NotOuts').text(team1BatterScores[7].notouts)
      $('#t1p9NotOuts').text(team1BatterScores[8].notouts)
      $('#t1p10NotOuts').text(team1BatterScores[9].notouts)
      $('#t1p11NotOuts').text(team2BatterScores[10].notouts)
      $('#t2p1NotOuts').text(team2BatterScores[0].notouts)
      $('#t2p2NotOuts').text(team2BatterScores[1].notouts)
      $('#t2p3NotOuts').text(team2BatterScores[2].notouts)
      $('#t2p4NotOuts').text(team2BatterScores[3].notouts)
      $('#t2p5NotOuts').text(team2BatterScores[4].notouts)
      $('#t2p6NotOuts').text(team2BatterScores[5].notouts)
      $('#t2p7NotOuts').text(team2BatterScores[6].notouts)
      $('#t2p8NotOuts').text(team2BatterScores[7].notouts)
      $('#t2p9NotOuts').text(team2BatterScores[8].notouts)
      $('#t2p10NotOuts').text(team2BatterScores[9].notouts)
      $('#t2p11NotOuts').text(team2BatterScores[10].notouts)
    }
  });

//EASTER EGG

const checkCatGame = function() {
  if (gon.t1 == 'Meow' && gon.t2 == 'Meow-Meow') {
    alert('WARNING - do not continue if you suffer from photosensitive epilepsy');
    $('.team-list').addClass('cat-game');
    $('.scores').addClass('cat-game2');
    $('.scorecard').addClass('cat-game-scorecard');
    $('.first-team').addClass('cat-game-teams1');
    $('.second-team').addClass('cat-game-teams2');
  }
}

//SETUP FOR GAME

  checkCatGame();
  setScorecard();
  setStrike();
  $('#submit').hide();


});
