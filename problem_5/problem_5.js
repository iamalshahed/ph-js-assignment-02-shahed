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

const result = resultReport([]);
console.log(result);
