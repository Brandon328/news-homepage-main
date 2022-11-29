const menu_icon = document.querySelector('.menu-icon');
const close_menu_icon = document.querySelector('.close-menu-icon');
const nav_container = document.querySelector('.nav-container');

menu_icon.addEventListener('click', function() {
  nav_container.classList.toggle('inactive');
});

close_menu_icon.addEventListener('click', function () {
  nav_container.classList.toggle('inactive');
});