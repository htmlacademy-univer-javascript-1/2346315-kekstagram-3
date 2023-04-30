function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}
const stringLength = (str, maxLenght) => str.length <= maxLenght;

function randomObject(a) {
  return {
    id: a + 1,
    url: a + 1,
    description: 'Великолепно',
    likes: getRandomNumber(15, 2000),
    comments: getRandomNumber(0, 200),
  };
}
function randomDescription(){
  let photos = [];
  for (let i = 0; i <= 24; i++){
    const object = randomObject(i);
    photos[i] = object;
  }
  return photos;
}


console.log(randomDescription());
