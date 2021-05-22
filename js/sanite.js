
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

// english content
const lang = navigator.language || navigator.userLanguage;

if (lang.includes('en')) {

    document.getElementById('a-home').innerHTML = 'Home &nbsp;&nbsp; <span style="font-weight: normal !important;">|</span>'
    document.getElementById('a-who-we-are').innerHTML = 'Who We Are &nbsp;&nbsp; <span style="font-weight: normal !important;">|</span>'
    document.getElementById('a-clientes-and-vendors').innerHTML = 'Vendors &nbsp;&nbsp; <span style="font-weight: normal !important;">|</span>'
    document.getElementById('a-contact').innerHTML = 'Contact &nbsp;&nbsp; <span style="font-weight: normal !important;">|</span>'

    document.getElementById('intro-sanite').innerHTML = 'Production, export and distribution of <span style="font-weight: 900;">medical devices and consumables</span>, with competitive prices and global reach';

    document.getElementById('h-catalogo').textContent = 'Catalogue'

    document.getElementById('category-batas-vestidos-delantales').textContent = 'Robes, Dresses and Aprons';
    document.getElementById('category-paquetes-y-kits').textContent = 'Packages and Kits';
    document.getElementById('category-accesorios').textContent = 'Accessories';
    document.getElementById('category-accesorios').style.fontWeight = 600;
    document.getElementById('category-guantes').textContent = 'Gloves';
    document.getElementById('category-guantes').style.fontWeight = 600;
    document.getElementById('category-mascaras').textContent = 'Masks';
    document.getElementById('category-mascaras').style.fontWeight = 600;

    document.getElementById('p-who-we-are').textContent = 'SANITE is a company dedicated to the production, import, distribution and supply of medical disposables and consumables. We are part of a business group with more than 14 years of experience in the health industry, sales over US$8M, and global operations.';

    document.getElementById('a-ver-catalogo').textContent = 'See Catalogue'

    document.getElementById('h-proveedores-clientes').textContent = 'CLIENTS AND VENDORS'

    document.getElementById('h-informacion-contacto').textContent = 'CONTACT INFORMATION'
    document.getElementById('h-direccion').textContent = 'Address: Av Carrera 19 #100-45 ; Of 10124'
    document.getElementById('h-telefono').textContent = 'Phone: (+57)-310-783-5337'
    document.getElementById('h-correo').textContent = 'Mail: info@sanite.co'

    document.getElementById('name').placeholder = 'Name'
    document.getElementById('email').placeholder = 'Mail'
    document.getElementById('celular').placeholder = 'Phone'
    document.getElementById('empresa').placeholder = 'Company'
    document.getElementById('pais').placeholder = 'Country'
    document.getElementById('ciudad').placeholder = 'City'
    document.getElementById('message').placeholder = 'Message'
    document.getElementById('enviar').textContent = 'Submit'

    document.getElementById('autorizacion').innerHTML = 'Authorization of <a style="color: var(--color-third-sanite);" target="_blank" href="./assets/documents/210419-politica-de-tratamiento-de-datos-sanite.pdf">personal data processing</a>';

}