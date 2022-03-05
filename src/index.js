import './styles/index.scss';
import $ from 'jquery';
class Init {
    navHolderList = document.querySelector('.navigation__holder__list');
    burgerMenu = document.querySelector('.menu__btn');
    perks = document.querySelectorAll('.download__holder__perks__perk');
    openMenuFlag = false;

    constructor() {
        this.burgerMenu.addEventListener('click', () => {
            this._burgerAnimation();
            this._toggleMenu();
        });
        this._toggleDownload();
    }

    _burgerAnimation() {
        this.burgerMenu.classList.toggle('menu__btn--open');
    }

    _toggleMenu() {
        this.navHolderList.classList.toggle('navigation__holder__list--open');
        this.openMenuFlag = true;
    }
    _toggleDownload() {
        this.perks.forEach((perk) => {
            perk.addEventListener('mouseenter', () => {
                $(perk).children('p').slideDown();
            });
            perk.addEventListener('mouseleave', () => {
                $(perk).children('p').slideUp();
            });
        });
    }
}

document.onload = new Init();
