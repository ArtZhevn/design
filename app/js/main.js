const likeButton = document.querySelector('.footer__like');
const heartImage = document.querySelector('.footer__hearth__main');
const hiddenImages = document.querySelectorAll('.hidden');

let isLiked = false;

likeButton.addEventListener('click', () => {
  if (isLiked) {
    likeButton.textContent = 'Мне нравится (0)';
    hiddenImages.forEach(image => {
      image.classList.add('hidden');
    });
  } else {
    likeButton.textContent = 'Мне нравится (1)';
    hiddenImages.forEach(image => {
      image.classList.remove('hidden');
    });
  }
  isLiked = !isLiked;
});

heartImage.addEventListener('click', () => {
  likeButton.click();
});
