const navbarToggler = document.querySelector('.navbar-toggler');
const navbarHamburger = document.querySelector('#navbar-hamburger');
const navbarClose = document.querySelector('#navbar-close');

navbarToggler.addEventListener('click', () => {
  navbarHamburger.classList.toggle('d-none');
  navbarClose.classList.toggle('d-block');
});

function show_message() {
  alert("YOUR SEAT IS RESERVED!")
}

const d1 = new Date();
document.getElementById("tday1").innerHTML = d1.getDate() +"/" +Number(d1.getMonth()+1) +"/" + d1.getFullYear();

const d2 = new Date();
document.getElementById("tday2").innerHTML = d2.getDate() +"/" +Number(d2.getMonth()+1) +"/" + d2.getFullYear();

