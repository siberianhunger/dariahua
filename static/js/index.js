const toTopButton = document.querySelector('.top');

document.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    toTopButton.classList.add('active');
  } else {
    toTopButton.classList.remove('active');
  }
});
