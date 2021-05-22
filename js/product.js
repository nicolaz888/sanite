const isLangEn = lang.includes('en');

const products = [
    {
        no: 1,
        ref: 'RQ1',
        id: 'bata-paciente-sin-manga',
        name: isLangEn ? 'Batita' : 'Bata Paciente Sin Manga',
        image: './assets/images/products/BATA-PACIENTE-SIN-MANGA.jpg',
        description: 'Bata desechable paciente adulto elaborada en tela sms antifluido sin mangas, con dos tiras de amarre.',
        talla: 'ÚNICA',
        largo: '100 cm',
        ancho: '140 cm',
        calibre: '30g',
        tela: 'sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 10'
    },
    {
        no: 2,
        ref: 'RQ2, RQ3, RQ4, RQ5',
        id: 'bata-paciente-con-manga',
        name: 'Bata Paciente Con Manga',
        image: './assets/images/products/BATA-PACIENTE-CON-MANGA.jpg',
        description: 'Bata desechable paciente adulto elaborada en tela sms antifluido con manga y puño',
        talla: 'ÚNICA',
        largo: '100 cm',
        ancho: '140 cm',
        largoManga: '32 cm',
        anchoManga: '60 cm',
        calibre: '30g',
        tela: 'sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 10'
    },
    {
        no: 3,
        ref: 'RQ6, RQ7',
        id: 'bata-quirurgica-esteril-y-no-esteril',
        name: 'Bata Quirúrgica Estéril y No Estéril',
        image: './assets/images/products/BATA-QUIRURGICA.jpg',
        description: 'Bata desechable quirúrgica elaborada en tela sms antifluido manga puño blanco',
        talla: 'ÚNICA',
        largo: '100 cm',
        ancho: '70 cm',
        largoManga: '32 cm',
        anchoManga: '60 cm',
        calibre: '30g',
        tela: 'sms',
        telaComp: 'Algodon (puños)',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 5'
    },
    {
        no: 4,
        ref: 'RQ8',
        id: 'bata-quirurgica-laminada',
        name: 'Bata Quirúrgica Laminada',
        image: './assets/images/products/BATA-QUIRURGICA-LAMINADA-LIZA.jpg',
        description: 'Bata quirúrgica laminada elaborada en tela sms antifluido con dos tiras de amarre.',
        talla: 'ÚNICA',
        largo: '120 cm',
        ancho: '70 cm',
        largoManga: '32 cm',
        anchoManga: '60 cm',
        calibre: '30g',
        tela: 'sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 5'
    },
    {
        no: 5,
        ref: 'RQ9',
        id: 'bata-odontologico-con-cremallera',
        name: 'Bata Odontólogo Con Cremallera',
        image: './assets/images/products/BATA-ODONTOLOGO-CON-CREMALLERA.jpg',
        description: 'Bata desechable para odontologo adulto elaborada en tela sms antifluido con cremallera y puño blanco de algodón.',
        talla: 'ÚNICA',
        calibre: '30g',
        tela: 'sms - smms',
        telaComp: 'Cremallera',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 10'
    },
    {
        no: 6,
        ref: 'RQ10',
        id: 'vestido-medico-quirurgico',
        name: 'Vestido Médico Quirúrgico',
        image: './assets/images/products/VESTIDO-MEDICO-QUIRURGICO.jpg',
        description: 'Pijama Vesitido cirujano elaborada en tela sms antifluido.',
        talla: 'ÚNICA',
        largoCamisa: '100 cm',
        anchoCamisa: '75 cm',
        calibre: '30g',
        tela: 'sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 5'
    },
    {
        no: 7,
        ref: 'RQ21',
        id: 'delantal-impermeable-manga-larga',
        name: 'Delantal Impermeable Manga Larga',
        image: './assets/images/products/Delanta-impermeable-TEMP- (2).jpg',
        description: 'Delantal elaborado en tela sms antifluido de con dos tiras de amarre.',
        talla: 'ÚNICA',
        largo: '120 cm',
        ancho: '80 cm',
        calibre: '30g',
        tela: 'sms - smms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 1'
    },
    {
        no: 8,
        ref: 'RQ11',
        id: 'sabana-resortada',
        name: 'Sábana Resortada',
        image: './assets/images/products/SABANA-RESORTADA.jpg',
        description: 'Sábana resortada elaborada en tela sms antifluido.',
        talla: 'ÚNICA',
        largo: '200 cm',
        ancho: '90 cm',
        calibre: '30g',
        tela: 'sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 10'
    },
    {
        no: 9,
        ref: 'RQ12',
        id: 'kit-cirujano-esteril',
        name: 'Kit Cirujano Estéril',
        image: './assets/images/products/kit-cirujano.jpg',
        description: 'Kit para cirujano estéril elaborada en tela sms antifluido el Kit incluye: Gorro soldex, tapabocas, vestido y polaina. Empacado y sellado en papel grado médico, indicador químico, esterilizado en oxido de etileno Kit Cirujano Estéril (GORRO SOLDEX, TAPABOCAS, VESTIDO, POLAINA) Color Azul Vestido quirúrgico compuesto por blusa cuello redondo manga corta, en sms 35 gramos , con bolsillo tipo aplique; Pantalón resortado en la cintura bolsillo en la parte posterior, tela resistente a fluidos, talla l, gorro cirujano con toalla absorbente; Tapabocas de amarradera doble filtro; Polainas sencillas.',
        talla: 'ÚNICA',
        largo: '200 cm',
        ancho: '90 cm',
        calibre: '35g',
        tela: 'sms - ss - smms',
        vidaProductiva: '2 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 1'
    },
    {
        no: 10,
        ref: 'RQ22',
        id: 'kit-abierto-laparotomia-esteril',
        name: 'Kit Abierto Laparotomía Estéril',
        image: './assets/images/products/KIT-ABIERTO-LAPAROTOMIA.jpg',
        description: 'Paquete de laparatomía para procedimientos quirúrgicos empacado y sellado en papel grado médico, indicador químico, esterilizado en oxido de etileno.',
        clasificacionDelRiesgo: 'CLASE I : X',
        calibre: '35g',
        tela: 'sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 1',
        contenido:
            [
                '3 Batas QX SMS L ,Azul 35g Estandar Estériles',
                '2 Sabanas Planas SMS 1,45 x 1,50 m, azul 35 G CA',
                '6 Wypall regular x 60, 44 x 25 cm / Unidad',
                '1 Campo QX Ato SMS 1, 45 x 2,40 m, Fenestra de 20 x 30 cm CA',
                '1 Envolvedora Poliuretano con refuerzo 160 x 2 m',
                '1 Bolsa para Sutura',
                '1 Funda de Mayo Poliuretano con refuerzo 1,35 x 0,6 m',
                '4 Campos QX CDO SMS 0,52 x 0,72 m Azul GR CA',
                '1 Indicador MULT O.E/ Und'
            ]
    },
    {
        no: 11,
        ref: 'RQ23',
        id: 'campo-quirurgico',
        name: 'Campo Quirúrgico',
        image: './assets/images/products/CAMPO-QX-ATO.jpg',
        description: 'Campo quirúrgico fabricado en tela antifluido no tejida.',
        tallaPersonalizada: 'Según especificación del cliente',
        calibre: '35g',
        tela: 'sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 500',
    },
    {
        no: 12,
        ref: 'RQ13',
        id: 'gorro-cirujano',
        name: 'Gorro Cirujano',
        image: './assets/images/products/GORRO-CIRUJANO.jpg',
        description: 'Gorro Cirujano fabricado en tela antifluido no tejida.',
        talla: 'ÚNICA',
        largo: '24 cm',
        ancho: '13',
        calibre: 'sms 30gr/ ss 15gr',
        tela: 'ss - sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 100',
    },
    {
        no: 13,
        ref: 'RQ14',
        id: 'gorro-tipo-oruga',
        name: 'Gorro Tipo Oruga',
        image: './assets/images/products/GORRO-QUIRURGICO-AZUL.jpg',
        description: 'Gorro tipo oruga fabricado en tela antifluido no tejida.',
        talla: 'ÚNICA',
        diametro: '27 cm',
        calibre: '13 - 27 g',
        tela: 'ss',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 1',
    },
    {
        no: 14,
        ref: 'RQ15',
        id: 'babero-desechable',
        name: 'Babero Desechable',
        image: './assets/images/products/BABERO-DESECHABLE.jpg',
        description: 'Babero desechable para paciente adulto elaborado en tela sms antifluido con dos tiras de amarre.',
        talla: 'ÚNICA',
        largo: '47 cm',
        ancho: '40 cm',
        calibre: '30g',
        tela: 'sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 1',
    },
    {
        no: 15,
        ref: 'RQ16',
        id: 'polaina-cosida',
        name: 'Polaina Cosida',
        image: './assets/images/products/POLAINA-SMS.jpg',
        description: 'Polaina fabricada en tela antifluido no tejida.',
        talla: 'ÚNICA',
        largo: '40 cm',
        ancho: '20 cm',
        calibre: '35g',
        tela: 'sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 50',
    },
    {
        no: 16,
        ref: 'RQ17, RQ18',
        id: 'polaina-termosellada',
        name: 'Polaina Termosellada (Con y sin antideslizante)',
        image: './assets/images/products/POLAINAS-ANTI.jpg',
        description: 'Polaina fabricada en tela antifluido no tejida con antideslizantes en la parte inferior.',
        talla: 'ÚNICA',
        largo: '40 cm',
        ancho: '20 cm',
        calibre: '35g',
        tela: 'sms - smms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Paq x 50 Pares',
    },
    {
        no: 17,
        ref: 'RQ19, RQ20, RQ21',
        id: 'tela-sms',
        name: 'Tela SMS',
        image: './assets/images/products/TELA-SMS.jpg',
        description: 'Tela SMS - tela antifluido no tejida.',
        talla: 'ÚNICA',
        ancho: '1 o 2 m',
        calibre: '30g',
        tela: 'sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: 'Rollo',
    },
    {
        no: 18,
        ref: 'P1',
        id: 'guantes-esteriles',
        name: 'Guantes Estériles',
    },
    {
        no: 19,
        ref: 'P2',
        id: 'guantes-de-latex',
        name: 'Guantes de Látex',
    },
    {
        no: 20,
        ref: 'P3',
        id: 'guantes-de-nitrilo',
        name: 'Guantes de Nitrilo',
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

            //almacenamiento
            if (product.almacenamiento) {
                document.getElementById('product-almacenamiento').textContent = product.almacenamiento;
            }

            //almacenamiento
            if (product.presentacion) {
                document.getElementById('product-presentacion').textContent = product.presentacion;
            }
        }
    }
}
else {
    console.log('NADA');
}
