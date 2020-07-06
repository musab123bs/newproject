burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
menuList = document.querySelector('.menu-list')


burger.addEventListener('click', () => {
    menuList.classList.toggle('v-class-reponse');
    navbar.classList.toggle('h-class-response');
})