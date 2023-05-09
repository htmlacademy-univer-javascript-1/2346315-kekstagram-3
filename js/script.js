const sample = document.querySelector('#picture').content.querySelector('.picture');
const photosContainer = document.querySelector('.pictures');

const newElement = (url, description, likes, comments) => {
  const currentPhoto = sample.cloneNode(true);
  currentPhoto.querySelector('.picture__img').src = url;
  currentPhoto.querySelector('.picture__img').alt = description;
  currentPhoto.querySelector('.picture__comments').textContent = comments;
  currentPhoto.querySelector('.picture__likes').textContent = likes;
  return currentPhoto;
};
export const photoRender = (arr) => {
  const photosFragment = document.createDocumentFragment();
  arr.forEach(({url, description, likes, comments}) => {
    const element = newElement(url, description, likes, comments);
    photosFragment.appendChild(element);
  });

  photosContainer.appendChild(photosFragment);
};
