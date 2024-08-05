const products = [
    {
        id: 1,
        nombre: "Aceite Mineral",
        precio: 25000,
        categoria: "Aceites",
        stock: 10,
        img: "./src/img/AceiteMineral1003.png"
    },
    {
        id: 2,
        nombre: "Aceite SemiSintetico",
        precio: 35000,
        categoria: "Aceites",
        stock: 5,
        img: "./src/img/AceiteSemiSintetico1002.png"

    },
    {
        id: 3,
        nombre: "Aceite Sintetico",
        precio: 55000,
        categoria: "Aceites",
        stock: 15,
        img: "./src/img/AceiteSintetico1001.png"

    },
    {
        id: 4,
        nombre: "Filtro Aire Auto",
        precio: 15000,
        categoria: "Filtros",
        stock: 100,
        img: "./src/img/FiltrodeAireAuto2001.png"

    },    
    {
        id: 5,
        nombre: "Filtro Combustible Auto",
        precio: 20000,
        categoria: "Filtros",
        stock: 20,
        img: "./src/img/FiltrodeCombustibleAuto2002.png"

    },
    {
        id: 6,
        nombre: "Cubierta Auto",
        precio: 100000,
        categoria: "Cubiertas",
        stock: 2,
        img: "./src/img/CubiertaAuto3001.png"

    },
    {
        id: 7,
        nombre: "Cubierta Auto",
        precio: 95000,
        categoria: "Cubiertas",
        stock: 4,
        img: "./src/img/CubiertaAuto3002.png"

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