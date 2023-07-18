const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});

window.addEventListener('scroll', scrollHandler);

function scrollHandler() {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const distance = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (distance < windowHeight - 200) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}
