const products = [
    {
        id: 1,
        nombre: "Aceite Mineral",
        precio: 25000,
        categoria: "Aceites",
        img: "./src/assets/img/AceiteMineral1003.png"
    },
    {
        id: 2,
        nombre: "Aceite SemiSintetico",
        precio: 35000,
        categoria: "Aceites",
        img: "./src/assets/img/AceiteSemiSintetico1002.png"

    },
    {
        id: 3,
        nombre: "Aceite Sintetico",
        precio: 55000,
        categoria: "Aceites",
        img: "./src/assets/img/AceiteSintetico1001.png"

    },
    {
        id: 4,
        nombre: "Filtro Aire Auto",
        precio: 15000,
        categoria: "Filtros",
        img: "./src/assets/img/FiltrodeAireAuto2001.png"

    },    
    {
        id: 5,
        nombre: "Filtro Combustible Auto",
        precio: 20000,
        categoria: "Filtros",
        img: "./src/assets/img/FiltrodeCombustibleAuto2002.png"

    },
    {
        id: 6,
        nombre: "Filtro Combustible Auto",
        precio: 100000,
        categoria: "Cubiertas",
        img: "./src/assets/img/CubiertaAuto3001.png"

    },
    {
        id: 7,
        nombre: "Filtro Combustible Auto",
        precio: 95000,
        categoria: "Cubiertas",
        img: "./src/assets/img/CubiertaAuto3002.png"

    },
];

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
};

export default fetchData