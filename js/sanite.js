const lang = navigator.language || navigator.userLanguage;

const isLangEn = lang.includes('en');

const products = [
    {
        no: 1,
        ref: 'RQ1',
        id: 'bata-paciente-sin-manga',
        name: isLangEn ? 'Sleeveless Patient Gown' : 'Bata Paciente Sin Manga',
        image: './assets/images/products/BATA-PACIENTE-SIN-MANGA.jpg',
        description: isLangEn ? 'Sleeveless disposable adult patient gown made of waterproof SMS fabric, with two tie straps.' : 'Bata desechable paciente adulto elaborada en tela sms antifluido sin mangas, con dos tiras de amarre.',
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
        name: isLangEn ? 'Patient Gown With Sleeves' : 'Bata Paciente Con Manga',
        image: './assets/images/products/BATA-PACIENTE-CON-MANGA.jpg',
        description: isLangEn ? 'Disposable adult patient gown made of waterproof SMS fabric, with sleeves and cuffs.' : 'Bata desechable paciente adulto elaborada en tela sms antifluido con manga y puño',
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
        name: isLangEn ? 'Sterile and Non-Sterile Surgical Gown' : 'Bata Quirúrgica Estéril y No Estéril',
        image: './assets/images/products/BATA-QUIRURGICA.jpg',
        description: isLangEn ? 'Disposable surgical gown made of waterproof SMS fabric, with white cuffs.' : 'Bata desechable quirúrgica elaborada en tela sms antifluido manga puño blanco',
        talla: 'ÚNICA',
        largo: '100 cm',
        ancho: '70 cm',
        largoManga: '32 cm',
        anchoManga: '60 cm',
        calibre: '30g',
        tela: 'sms',
        telaComp: isLangEn ? 'Cotton (cuffs)' : 'Algodon (puños)',
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
        name: isLangEn ? 'Laminated Surgical Gown' : 'Bata Quirúrgica Laminada',
        image: './assets/images/products/BATA-QUIRURGICA-LAMINADA-LIZA.jpg',
        description: isLangEn ? 'Laminated surgical gown made of SMS waterproof fabric with two tie straps.' : 'Bata quirúrgica laminada elaborada en tela sms antifluido con dos tiras de amarre.',
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
        name: isLangEn ? 'Dentist Gown with Zipper' : 'Bata Odontólogo Con Cremallera',
        image: './assets/images/products/BATA-ODONTOLOGO-CON-CREMALLERA.jpg',
        description: isLangEn ? 'Disposable dentist gown for adults made of waterproof SMS fabric, with a zipper and white cotton cuffs.' : 'Bata desechable para odontologo adulto elaborada en tela sms antifluido con cremallera y puño blanco de algodón.',
        talla: 'ÚNICA',
        calibre: '30g',
        tela: 'sms - smms',
        telaComp: isLangEn ? 'Zipper' : 'Cremallera',
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
        name: isLangEn ? 'Surgical scrubs ' : 'Vestido Médico Quirúrgico',
        image: './assets/images/products/VESTIDO-MEDICO-QUIRURGICO.jpg',
        description: isLangEn ? 'Surgical scrubs made of waterproof SMS.' : 'Pijama Vesitido cirujano elaborada en tela sms antifluido.',
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
        name: isLangEn ? 'Long Sleeve Waterproof Apron' : 'Delantal Impermeable Manga Larga',
        image: './assets/images/products/Delanta-impermeable-TEMP- (2).jpg',
        description: isLangEn ? 'Apron made of waterproof SMS fabric with two tie straps.' : 'Delantal elaborado en tela sms antifluido de con dos tiras de amarre.',
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
        name: isLangEn ? 'Fitted Sheet' : 'Sábana Resortada',
        image: './assets/images/products/SABANA-RESORTADA.jpg',
        description: isLangEn ? 'Fitted sheet made of waterproof SMS fabric.' : 'Sábana resortada elaborada en tela sms antifluido.',
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
        name: isLangEn ? 'Sterile Surgeon Kit' : 'Kit Cirujano Estéril',
        image: './assets/images/products/kit-cirujano.png',
        description: isLangEn ? 'Sterile surgeon kit made of SMS waterproof fabric. It includes: Soldex cap, surgical mask, scrubs, and surgical shoes.' : 'Kit para cirujano estéril elaborada en tela sms antifluido el Kit incluye: Gorro soldex, tapabocas, vestido y polaina. Empacado y sellado en papel grado médico, indicador químico, esterilizado en oxido de etileno Kit Cirujano Estéril (GORRO SOLDEX, TAPABOCAS, VESTIDO, POLAINA) Color Azul Vestido quirúrgico compuesto por blusa cuello redondo manga corta, en sms 35 gramos , con bolsillo tipo aplique; Pantalón resortado en la cintura bolsillo en la parte posterior, tela resistente a fluidos, talla l, gorro cirujano con toalla absorbente; Tapabocas de amarradera doble filtro; Polainas sencillas.',
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
        name: isLangEn ? 'Laparotomy Kit' : 'Kit Abierto Laparotomía Estéril',
        image: './assets/images/products/KIT-ABIERTO-LAPAROTOMIA.jpg',
        description: isLangEn ? 'Laparotomy kit for surgical procedures packed and sealed in medical grade paper, chemical indicator, sterilized using ethylene oxide.' : 'Paquete de laparatomía para procedimientos quirúrgicos empacado y sellado en papel grado médico, indicador químico, esterilizado en oxido de etileno.',
        clasificacionDelRiesgo: isLangEn ? 'CLASS I : X' : 'CLASE I : X',
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
        name: isLangEn ? 'Surgical Field' : 'Campo Quirúrgico',
        image: './assets/images/products/CAMPO-QX-ATO.jpg',
        description: isLangEn ? 'Surgical field made of non-woven waterproof fabric.' : 'Campo quirúrgico fabricado en tela antifluido no tejida.',
        tallaPersonalizada: isLangEn ? 'Upon request' : 'Según especificación del cliente',
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
        name: isLangEn ? 'Surgical Cap' : 'Gorro Cirujano',
        image: './assets/images/products/GORRO-CIRUJANO.jpg',
        description: isLangEn ? 'Surgical Cap made of non-woven waterproof fabric.' : 'Gorro Cirujano fabricado en tela antifluido no tejida.',
        talla: 'ÚNICA',
        largo: '24 cm',
        ancho: '13 cm',
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
        name: isLangEn ? 'Surgical head cover' : 'Gorro Tipo Oruga',
        image: './assets/images/products/GORRO-QUIRURGICO-AZUL.jpg',
        description: isLangEn ? 'Surgical head cover made in non-woven waterproof fabric.' : 'Gorro tipo oruga fabricado en tela antifluido no tejida.',
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
        name: isLangEn ? 'Disposable dental bib' : 'Babero Desechable',
        image: './assets/images/products/BABERO-DESECHABLE.jpg',
        description: isLangEn ? 'Disposable bib for adult patients made of waterproof SMS fabric, with two tie straps.' : 'Babero desechable para paciente adulto elaborado en tela sms antifluido con dos tiras de amarre.',
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
        name: isLangEn ? 'Surgical Shoes' : 'Polaina Cosida',
        image: './assets/images/products/POLAINA-SMS.jpg',
        description: isLangEn ? 'Surgical shoes made of waterproof non-woven fabric.' : 'Polaina fabricada en tela antifluido no tejida.',
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
        name: isLangEn ? 'Heat-sealed surgical shoes with and without anti-slip.' : 'Polaina Termosellada (Con y sin antideslizante)',
        image: './assets/images/products/POLAINAS-ANTI.jpg',
        description: isLangEn ? 'Surgical shoes made of waterproof non-woven fabric with anti-slip on the bottom.' : 'Polaina fabricada en tela antifluido no tejida con antideslizantes en la parte inferior.',
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
        name: isLangEn ? 'SMS Fabric' : 'Tela SMS',
        image: './assets/images/products/TELA-SMS.jpg',
        description: isLangEn ? 'Waterproof non-woven SMS fabric.' : 'Tela SMS - tela antifluido no tejida.',
        talla: 'ÚNICA',
        ancho: isLangEn ? '1 or 2 meters' : '1 o 2 m',
        calibre: '30g',
        tela: 'sms',
        vidaProductiva: '5 años',
        almacenamiento: 'Manténgase en lugar limpio, fresco y seco',
        esDesechable: true,
        mensajeDimensiones: 'Las dimensiones, presentación y especificaciones técnicas del producto pueden ser ajustadas de acuerdo con la necesidad del cliente',
        presentacion: isLangEn ? '1 Roll' : 'Rollo',
    },
    {
        no: 18,
        ref: 'P1',
        id: 'guantes-esteriles',
        name: isLangEn ? 'Sterile Gloves' : 'Guantes Estériles',
        subProducts: [
            {
                name: 'Alfa Safe',
                description: isLangEn ? 'Low Powder Surgical Gloves' : 'Guantes quirúrgico Bajo en Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 1-100.jpg',
            },
            {
                name: 'Alfa Safe',
                description: isLangEn ? 'Powder free Surgical Gloves' : 'Guantes quirúrgico Sin Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 41-100.jpg',
            },
            {
                name: 'Medispo',
                description: isLangEn ? 'Powder free Surgical Gloves' : 'Guantes quirúrgico Sin en Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 42-100.jpg',
            },
            {
                name: 'Supreme',
                description: isLangEn ? 'Sterile Surgical Gloves' : 'Guante quirúrgico Esteril',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 43-100.jpg',
            },
            {
                name: 'Well',
                description: isLangEn ? 'Sterile Surgical Gloves' : 'Guantes quirúrgico Estériles',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 44-100.jpg',
            },
            {
                name: 'Well',
                description: isLangEn ? 'Powder free Surgical Gloves' : 'Guantes quirúrgico Estériles',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 45-100.jpg',
            },
            {
                name: 'M&H Care',
                description: isLangEn ? 'Low Powder Surgical Gloves' : 'Guantes quirúrgico bajo en Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 46-100.jpg',
            },
            {
                name: 'M&H Care',
                description: isLangEn ? 'Powder free Surgical Gloves' : 'Guantes quirúrgico Sin Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 47-100.jpg',
            }
        ]
    },
    {
        no: 19,
        ref: 'P2',
        id: 'guantes-de-latex',
        name: isLangEn ? 'Latex Gloves' : 'Guantes de Látex',
        subProducts: [
            {
                name: 'Alfa Safe',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 2-100.jpg',
            },
            {
                name: 'Alfa Safe',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 3-100.jpg',
            },
            {
                name: 'Biofit',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 4-100.jpg',
            },
            {
                name: 'Precision Care',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 5-100.jpg',
            },
            {
                name: 'Dura Glove',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 6-100.jpg',
            },
            {
                name: 'Nipro',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 7-100.jpg',
            },
            {
                name: 'M&H Care',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 8-100.jpg',
            },
            {
                name: 'Ukaint',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 9-100.jpg',
            },
            {
                name: 'Examtex',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 10-100.jpg',
            }
            ,
            {
                name: 'Examtex',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 11-100.jpg',
            }
            ,
            {
                name: 'Maxter',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 12-100.jpg',
            }
            ,
            {
                name: 'Well',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 13-100.jpg',
            }
            ,
            {
                name: 'Precision Care',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 14-100.jpg',
            }
            ,
            {
                name: 'Otal',
                description: isLangEn ? 'Latex gloves with powder' : 'Guantes de látex Con Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 15-100.jpg',
            }
        ]
    },
    {
        no: 20,
        ref: 'P3',
        id: 'guantes-de-nitrilo',
        name: isLangEn ? 'Nitrile Gloves' : 'Guantes de Nitrilo',
        subProducts: [
            {
                name: 'SmartGuard',
                description: isLangEn ? 'Powder Free Nitrile Gloves' : 'Guantes de Nitrilo Sin Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 16-100.jpg',
            },
            {
                name: 'Dura Glove',
                description: isLangEn ? 'Powder Free Nitrile Gloves' : 'Guantes de Nitrilo Sin Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 17-100.jpg',
            },
            {
                name: 'Nipro',
                description: isLangEn ? 'Powder Free Nitrile Gloves' : 'Guantes de Nitrilo Sin Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 18-100.jpg',
            },
            {
                name: 'Protexion',
                description: isLangEn ? 'Powder Free Nitrile Gloves' : 'Guantes de Nitrilo Sin Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 35-100.jpg',
            },
            {
                name: 'M&H Care',
                description: isLangEn ? 'Powder Free Nitrile Gloves' : 'Guantes de Nitrilo Sin Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 19-100.jpg',
            },
            {
                name: 'Ukaint',
                description: isLangEn ? 'Powder Free Nitrile Gloves' : 'Guantes de Nitrilo Sin Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 20-100.jpg',
            },
            {
                name: 'Alfa Safe',
                description: isLangEn ? 'Powder Free Nitrile Gloves' : 'Guantes de Nitrilo Sin Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 21-100.jpg',
            },
            {
                name: 'Well',
                description: isLangEn ? 'Powder Free Nitrile Gloves' : 'Guantes de Nitrilo Sin Talco',
                image: './assets/images/products/300x/Guantes y tapabocasArtboard 22-100.jpg',
            }
        ]
    }
];

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
});

let arrCatalogoCategories = document.querySelectorAll('.catalogo-list-sanite div');

for (let i = 0; i < arrCatalogoCategories.length; i++) {
    let category = arrCatalogoCategories[i];
    category.onclick = () => {
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

if (lang.includes('en')) {

    document.getElementById('a-home').innerHTML = 'Home &nbsp;&nbsp; <span style="font-weight: normal !important;">|</span>'
    document.getElementById('a-who-we-are').innerHTML = 'Who We Are &nbsp;&nbsp; <span style="font-weight: normal !important;">|</span>'
    document.getElementById('a-clientes-and-vendors').innerHTML = 'Vendors &nbsp;&nbsp; <span style="font-weight: normal !important;">|</span>'
    document.getElementById('a-contact').innerHTML = 'Contact &nbsp;&nbsp; <span style="font-weight: normal !important;">|</span>'

    document.getElementById('h-informacion-contacto').textContent = 'CONTACT INFORMATION'
    document.getElementById('h-direccion').textContent = 'Address: Av Carrera 19 #100-45 ; Of 10124'
    document.getElementById('h-telefono').textContent = 'Phone: (+57)-310-783-5337'
    document.getElementById('h-correo').textContent = 'Mail: info@sanite.co'
    document.getElementById('h-contacto').textContent = 'CONTACT'

    document.getElementById('name').placeholder = 'Name'
    document.getElementById('email').placeholder = 'Mail'
    document.getElementById('celular').placeholder = 'Phone'
    document.getElementById('empresa').placeholder = 'Company'
    document.getElementById('pais').placeholder = 'Country'
    document.getElementById('ciudad').placeholder = 'City'
    document.getElementById('message').placeholder = 'Message'
    document.getElementById('enviar').textContent = 'Submit'

    document.getElementById('autorizacion').innerHTML = 'Authorization of <a style="color: var(--color-third-sanite);" target="_blank" href="./assets/documents/210419-politica-de-tratamiento-de-datos-sanite.pdf">personal data processing</a>';

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

    document.getElementById('a-ver-catalogo').textContent = 'See Catalogue';

    document.getElementById('h-proveedores-clientes').textContent = 'CLIENTS AND VENDORS';
    document.getElementById('h-quienes-somos').textContent = 'Who We Are?';

    // catalogo nombres
    for (const product of products) {
        let element = document.getElementById(product.id);

        if (element) {
            element.textContent = product.name;
        }
    }


}