import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    console.log(body);

    const elvenShieldRecipe = {
        leatherStrips: 2,
        ironIngot: 1,
        refinedMoonstone: 4,
    };

    const elvenGauntlets = {
        ...elvenShieldRecipe,

        leatherSkin: 3,
    };

    console.log(elvenGauntlets);
    console.log(elvenShieldRecipe);
});
