const products = [
    {
        id: 'bata-paciente-sin-manga',
        name: 'Bata Paciente Sin Manga',
        image: './assets/images/products/BATA-PACIENTE-SIN-MANGA.jpg',
        description: 'Bata desechable paciente adulto elaborada en tela sms antifluido sin mangas, con dos tiras de amarre.'
    },
    {
        id: 'bata-paciente-con-manga',
        name: 'Bata Paciente Con Manga',
        image: './assets/images/products/BATA-PACIENTE-CON-MANGA.jpg',
        description: 'Bata desechable paciente adulto elaborada en tela sms antifluido con manga y puño'
    }
];

let urlParams = window.location.search;

if (urlParams) {
    urlParams = urlParams.substring(1);
    let arrUrlParams = urlParams.split('&');
    let productParam = arrUrlParams[0].split('=')[1];

    if (productParam) {
        // const product = getProduct(productParam);
        const product = products.find(element => element.id === productParam);

        if (product) {
            // h1
            let pageTitle = document.getElementById('product-title');
            pageTitle.textContent = product.name;

            // img
            let pageImage = document.getElementById('product-image');
            pageImage.src = product.image;
            console.log('hola putos!');

            //description
            let pageDescription = document.getElementById('product-description');
            pageDescription.textContent = product.description;
        }
    }
}
else {
    console.log('NADA');
}
