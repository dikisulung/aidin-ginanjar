let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
};

// typed js //
const typed = new Typed('.multiple-text', {
  strings: [
    'Process Engineer',
    'Field Engineer',
    'Production Supervisor',
    'Operator Production',
    'Chemical Education',
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
