const desktopmenu= document.querySelector('.desktop-menu');
const navbaremail= document.querySelector('.navbar-email');

navbaremail.addEventListener('click', () => {
    desktopmenu.classList.toggle("inactive")
})