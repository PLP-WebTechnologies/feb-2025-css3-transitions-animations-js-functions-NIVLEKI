const animateBtn = document.getElementById('animateBtn');
const image = document.getElementById('image');
const message = document.getElementById('message');

function storePreferences(action) {
  localStorage.setItem('animation', action);
}

function getPreferences() {
  return localStorage.getItem('animation');
}

function applyStoredAnimation() {
  const storedAnimation = getPreferences();
  if (storedAnimation === 'grow') {
    animateBtn.classList.add('grow-animation');
    message.innerText = 'Button animation triggered earlier!';
  } else if (storedAnimation === 'bounce') {
    image.classList.add('bounce-animation');
    message.innerText = 'Image animation triggered earlier!';
  }
}

function triggerAnimation() {
  animateBtn.classList.add('grow-animation');
  storePreferences('grow');

  setTimeout(() => {
    image.classList.add('bounce-animation');
    storePreferences('bounce');
  }, 500);

  message.innerText = 'Let’s animate and have fun!';
}

applyStoredAnimation();
animateBtn.addEventListener('click', triggerAnimation);
