/** @format */

document.querySelector('.menu').addEventListener('click', () => {
  document.querySelectorAll('.target').forEach((item) => {
    item.classList.toggle('change');
  });
});

const icons = document.querySelectorAll('.hero__icons i');
let i = 1;

const inter = setInterval(() => {
  i++;

  const icon = document.querySelector('.hero__icons .change');
  icon.classList.remove('change');

  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;

    //clearInterval(inter); << only run once
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}, 3000);
