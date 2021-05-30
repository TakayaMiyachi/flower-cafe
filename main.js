const ham = document.getElementById('ham');
const menu = document.getElementById('menu');
ham.addEventListener('click', function() {
  ham.classList.toggle('clicked');
  menu.classList.toggle('clicked');
})