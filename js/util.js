function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}
function stringLengthMax (string, length) {
  return string.length <= length;
}

function stringLengthMin (string, length) {
  return string.length >= length;
}

export {getRandomNumber, stringLengthMax, stringLengthMin};
