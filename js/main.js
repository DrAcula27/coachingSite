const navToggleBtn = document.querySelector('#hamburgerBtn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('#nav');

if (navToggleBtn && navLinks) {
  navToggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navbar.classList.toggle('aln-fs');
  });
}
