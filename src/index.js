import './styles/index.scss';

class Burger {
    navHolderList = document.querySelector('.navigation__holder__list');
    burgerMenu = document.querySelector('.menu__btn');
    openMenuFlag = false;

    constructor() {
        this._click();
    }

    _click() {
        this.burgerMenu.addEventListener('click', () => {
            this.burgerMenu.classList.toggle('menu__btn--open');

            this.navHolderList.classList.toggle(
                'navigation__holder__list--open',
            );
        });
    }
}

document.onload = new Burger();
