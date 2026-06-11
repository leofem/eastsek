const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
navToggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
