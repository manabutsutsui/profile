'use strict'
{
  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const three = document.querySelector('.three');
  const four = document.querySelector('.four');

  one.addEventListener('click', () => {
    two.classList.toggle('appear');
    one.classList.toggle('appear');
  });

  three.addEventListener('click', () => {
    four.classList.toggle('appear');
    three.classList.toggle('appear');
  });
}