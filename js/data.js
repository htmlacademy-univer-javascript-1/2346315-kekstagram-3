import {getRandomNumber} from './util.js';
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
  const photos = [];
  for (let i = 0; i <= 24; i++){
    const object = randomObject(i);
    photos[i] = object;
  }
  return photos;
}


//console.log(randomDescription());


export {randomObject, randomDescription};

