function totalFine(fare) {
  // check input is number or not
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }

  const fine = fare + (fare * 20) / 100 + 30;
  return fine;
}


function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  const character = str.split(" ").join("").toUpperCase();
  return character;
}


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


function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  if (marks.length === 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0,
    };
  }

  let sum = 0;
  let passCount = 0;
  let failCount = 0;

  for (let mark of marks) {
    sum += mark;
    if (mark >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }

  let average = sum / marks.length;
  let finalScore = Math.round(average);

  const resultObj = {
    finalScore: finalScore,
    pass: passCount,
    fail: failCount,
  };
  return resultObj;
}