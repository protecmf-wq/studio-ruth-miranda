const botaoMenu = document.querySelector('.menu');
const menuNavegacao = document.querySelector('.menu-navegacao');

botaoMenu.addEventListener('click', function () {
    menuNavegacao.classList.toggle('ativo');
});

const linksMenu = document.querySelectorAll('.menu-navegacao a');

linksMenu.forEach(function (link) {
    link.addEventListener('click', function () {
        menuNavegacao.classList.remove('ativo');
    });
});