function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  const character = str.split(" ").join("").toUpperCase();
  return character;
}

const character = onlyCharacter("  h e llo wor   ld");
console.log(character);
