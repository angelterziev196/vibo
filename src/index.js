import './styles/index.scss';

class Burger {
    navHolderList = document.querySelector('.navigation__holder__list');
    burgerMenu = document.querySelector('.menu__btn');
    openMenuFlag = false;

    constructor() {
        this.burgerMenu.addEventListener('click', () => {
            this._burgerAnimation();
            this._toggleMenu();
        });
    }

    _burgerAnimation() {
        this.burgerMenu.classList.toggle('menu__btn--open');
    }

    _toggleMenu() {
        this.navHolderList.classList.toggle('navigation__holder__list--open');
        this.openMenuFlag = true;
    }
}

document.onload = new Burger();
