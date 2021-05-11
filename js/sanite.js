
const arrCategories = ['grid-category-kits', 'grid-category-batas', 'grid-category-accesorios', 'grid-category-guantes', 'grid-category-mascaras']

/**
 * Function to hide the navbar-collapse or burger menu when clicked
 */
$(function () {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });

    // let a = 'About' + '\xa0\xa0\xa0\xa0\xa0' + '|';
    // let nosotros = document.getElementById('nav-link-nosotros');
    // nosotros.text = a;

    // alert("The language is: " + navigator.language);

    let arrCatalogoCategories = document.querySelectorAll('.catalogo-list-sanite div');

    for (let i = 0; i < arrCatalogoCategories.length; i++) {
        let category = arrCatalogoCategories[i];
        category.onclick = () => {
            // alert('grid-' + category.id);
            hideCategories()
            document.getElementById('grid-' + category.id).style.display = 'block';
        };
    }

    function hideCategories() {
        for (let i = 0; i < arrCategories.length; i++) {
            const element = arrCategories[i];
            document.getElementById(element).style.display = 'none';
        }
    }
});