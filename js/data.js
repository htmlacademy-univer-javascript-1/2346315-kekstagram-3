import {getRandomNumber} from './util.js';
function randomObject(a) {
  return {
    id: a + 1,
    url: `photos/${a + 1}.jpg`,
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
const sepia = {
  name: 'sepia',
  filter: 'sepia',
  min: 0,
  max: 1,
  step: 0.1,
  start: 1,
};

const chrome = {
  name: 'chrome',
  filter: 'grayscale',
  min: 0,
  max: 1,
  step: 0.1,
  start: 1,
};

const marvin = {
  name: 'marvin',
  filter: 'invert',
  min: 0,
  max: 100,
  step: 1,
  start: 100,
  symbol: '%',
};

const phobos = {
  name: 'phobos',
  filter: 'blur',
  min: 0,
  max: 3,
  step: 0.1,
  start: 3,
  symbol: 'px',
};

const heat = {
  name: 'heat',
  filter: 'brightness',
  min: 1,
  max: 3,
  step: 0.1,
  start: 3,
};

export const settings = [chrome, sepia, marvin, phobos, heat];
export {randomObject, randomDescription};

