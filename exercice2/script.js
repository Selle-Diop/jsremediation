const logo = document.getElementById('logo');
const nav = document.querySelector('nav');
const span = document.querySelector('span');









 




logo.addEventListener('click', (e) => {
    nav.classList.toggle('show-nav');
    span.innerHTML = '';

} );