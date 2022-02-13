import './styles/index.scss';

class Burger {
    nav__holder = document.querySelector('.navigation__holder__list');
    burger__menu = document.querySelector('.menu__btn');

    constructor() {
        this.burger__menu.addEventListener('click', () => {
            this._burgerAnimation();
            this._toggleMenu();
        });
    }

    _burgerAnimation() {
        this.burger__menu.classList.toggle('menu__btn--open');
    }

    _toggleMenu() {
        this.nav__holder.classList.toggle('navigation__holder__list--open');
    }
}

document.onload = new Burger();
