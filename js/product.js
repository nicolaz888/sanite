let urlParams = window.location.search;

if (urlParams) {
    urlParams = urlParams.substring(1);
    let arrUrlParams = urlParams.split('&');
    let productParam = arrUrlParams[0].split('=')[1];

    if (productParam) {
        // const product = getProduct(productParam);
        const product = products.find(element => element.id === productParam);

        if (product) {

            const isFirstTypeCategory = !productParam.includes('guantes') && !productParam.includes('tapabocas') && !productParam.includes('mascaras');

            if (isFirstTypeCategory) {
                // h1
                let pageTitle = document.getElementById('product-title');
                pageTitle.textContent = product.name;

                //ref
                if (product.ref) {
                    document.getElementById('product-ref').textContent = product.ref;
                }

                // img
                let pageImage = document.getElementById('product-image');
                pageImage.src = product.image;
                console.log('hola putos!');

                //description
                let pageDescription = document.getElementById('product-description');
                pageDescription.textContent = product.description;

                //talla
                if (product.talla) {
                    document.getElementById('p-talla').style.display = 'block';
                    document.getElementById('product-talla').textContent = product.talla;
                }

                //largo
                if (product.largo) {
                    document.getElementById('p-largo').style.display = 'block';
                    document.getElementById('product-largo').textContent = product.largo;
                }

                //ancho
                if (product.ancho) {
                    document.getElementById('p-ancho').style.display = 'block';
                    document.getElementById('product-ancho').textContent = product.ancho;
                }

                //largoManga
                if (product.largoManga) {
                    document.getElementById('p-largo-manga').style.display = 'block';
                    document.getElementById('product-largo-manga').textContent = product.largoManga;
                }

                //anchoManga
                if (product.anchoManga) {
                    document.getElementById('p-ancho-manga').style.display = 'block';
                    document.getElementById('product-ancho-manga').textContent = product.anchoManga;
                }

                //largoCamisa
                if (product.largoCamisa) {
                    document.getElementById('p-largo-camisa').style.display = 'block';
                    document.getElementById('product-largo-camisa').textContent = product.largoCamisa;
                }

                //anchoCamisa
                if (product.anchoCamisa) {
                    document.getElementById('p-ancho-camisa').style.display = 'block';
                    document.getElementById('product-ancho-camisa').textContent = product.anchoCamisa;
                }

                //diametro
                if (product.diametro) {
                    document.getElementById('p-diametro').style.display = 'block';
                    document.getElementById('product-diametro').textContent = product.diametro;
                }

                //calibre
                if (product.calibre) {
                    document.getElementById('p-calibre').style.display = 'block';
                    document.getElementById('product-calibre').textContent = product.calibre;
                }

                //tela
                if (product.tela) {
                    document.getElementById('p-tela').style.display = 'block';
                    document.getElementById('product-tela').textContent = product.tela;
                }

                //telaComp
                if (product.telaComp) {
                    document.getElementById('p-tela-comp').style.display = 'block';
                    document.getElementById('product-tela-comp').textContent = product.telaComp;
                }

                //vidaProductiva
                if (product.vidaProductiva) {
                    document.getElementById('p-vida-productiva').style.display = 'block';
                    document.getElementById('product-vida-productiva').textContent = product.vidaProductiva;
                }

                //clasificacionDelRiesgo
                if (product.clasificacionDelRiesgo) {
                    document.getElementById('div-clasificacion-del-riesgo').style.display = 'block';
                    document.getElementById('product-clasificacion-del-riesgo').textContent = product.clasificacionDelRiesgo;
                }

                //tallaPersonalizada
                if (product.tallaPersonalizada) {
                    document.getElementById('div-talla-personalizada').style.display = 'block';
                    document.getElementById('product-talla-personalizada').textContent = product.tallaPersonalizada;
                }

                //almacenamiento
                if (product.almacenamiento) {
                    document.getElementById('product-almacenamiento').textContent = product.almacenamiento;
                }

                //presentacion
                if (product.presentacion) {
                    document.getElementById('product-presentacion').textContent = product.presentacion;
                }
            }
            // son guantes o mascaras
            else {
                document.getElementById('main-row-one').style.display = 'none';
                document.getElementById('main-row-two').style.display = 'flex';

                // h1
                let pageTitle = document.getElementById('product-title-x');
                pageTitle.textContent = product.name;

                //grid
                if (product.subProducts) {
                    for (const subProduct of product.subProducts) {
                        document.getElementById('main-row-two').innerHTML += `
                            <div class="col-12 col-md-6 mt-3" style="text-align: center">
                                <img src="${subProduct.image}" class="img-fluid mb-2" alt="">
                                <p style="text-align: center; font-weight: 600; margin-bottom: 0px">${subProduct.name}</p>
                                <p style="text-align: center; font-style: italic">${subProduct.description}</p>
                            </div>
                        `
                    }
                }
            }
        }
    }
}
else {
    console.log('NADA');
}

if (isLangEn) {
    let content = document.getElementById('div-product-info').innerHTML;
    let replaced = content.replace('Talla', '')
        .replace('??NICA', 'ONE size fits all')
        .replace('Largo', 'Length')
        .replace('Ancho', 'Width')
        .replace('Largo Manga', 'Sleeve Length')
        .replace('Ancho Manga', 'Sleeve Width')
        .replace('Largo Camisa', 'T-Shirt Length')
        .replace('Ancho Camisa', 'T-Shirt Width')
        .replace('Di??metro', 'Diameter')
        .replace('Calibre', 'Weight')
        .replace('Tela', 'Fabric')
        .replace('Tela Comp', 'Complementary Fabric')
        .replace('Vida Productiva', 'Expected product lifetime')
        .replace('Clasificaci??n del Riesgo', 'Risk Classification')
        .replace('Talla Personalizada', 'Personalized size')
        .replace('a??os', 'years')
        .replace('Mant??ngase en lugar limpio, fresco y seco', 'Keep it in a clean,dry, and cool place')
        .replace('Cont??ctenos', 'Contact')
        .replace('Producto', 'DISPOSABLE')
        .replace('DESECHABLE', 'product')
        .replace('Presentaci??n', 'Presentation')
        .replace('Las dimensiones, presentaci??n y especificaciones t??cnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente', 'The product???s dimensions, presentation, and technical specifications can be adjusted according to the client???s needs.')
        .replace('Paq', 'Package')
        .replace('Almacenamiento', 'Storage');
    document.getElementById('div-product-info').innerHTML = replaced;

    content = document.getElementById('main-sanite').innerHTML;
    replaced = content.replace('Color Azul', 'Blue')
        .replace('Atr??s', 'Back');
    document.getElementById('main-sanite').innerHTML = replaced;
}