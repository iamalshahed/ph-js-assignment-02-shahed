const player1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };

const player2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  let scored1 = player1.foul + player1.cardY + player1.cardR;
  let scored2 = player2.foul + player2.cardY + player2.cardR;

  if (scored1 < scored2) {
    return player1.name;
  } else if (scored2 < scored1) {
    return player2.name;
  } else {
    return "Tie";
  }
}

const finalResult = bestTeam(player1, player2);
console.log(finalResult);
