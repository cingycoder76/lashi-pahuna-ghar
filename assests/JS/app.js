// Select the toggler button and the navbar
const toggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('#navbarNav');

// Add event listener for toggling the navbar
toggler.addEventListener('click', () => {
  navbar.classList.toggle('show');
});
