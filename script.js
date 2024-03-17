let btn = document.getElementsByClassName('btn')[0];
let navbar = document.getElementsByClassName('navbar-links')[0];
btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
