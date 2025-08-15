function totalFine(fare) {
  // check input is number or not
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }

  const fine = fare + (fare * 20) / 100 + 30;
  return fine;
}
const fine = totalFine(200);
console.log(fine);
