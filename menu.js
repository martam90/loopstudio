
(function () {
    let menu = document.querySelector('.nav__menu-bottom');
    let btnOpen = document.querySelector('.btn-open');
    let btnClose = document.querySelector('.btn-close');

    btnOpen.addEventListener('click', () => {
        menu.classList.add('active');
    });

    btnClose.addEventListener('click', () => {
        menu.classList.remove('active');
    });
})();