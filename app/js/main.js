const likeButton = document.querySelector('.footer__like');
const heartImage = document.querySelector('.footer__hearth__main');
const hiddenImages = document.querySelectorAll('.hidden');

let isLiked = false;

likeButton.addEventListener('click', () => {
  if (isLiked) {
    likeButton.textContent = 'мне нравится (0)';
    hiddenImages.forEach(image => {
      image.classList.add('hidden');
      hiddenImages.forEach(image => {
        image.classList.add('hidden');
        image.classList.remove('visible');
      });
    });
  } else {
    likeButton.textContent = 'мне нравится (1)';
    hiddenImages.forEach(image => {
      image.classList.remove('hidden');
      hiddenImages.forEach(image => {
        image.classList.remove('hidden');
        image.classList.add('visible');
      });
    });
  }
  isLiked = !isLiked;
});

heartImage.addEventListener('click', () => {
  likeButton.click();
});
