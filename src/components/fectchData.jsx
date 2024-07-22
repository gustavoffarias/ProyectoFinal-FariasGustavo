const products = [
    {
        id: 1,
        nombre: "AceiteMinera",
        precio: 10,
        categoria: "Aceites",
        img: "./src/assets/img/AceiteMineral1003.png"
    },
    {
        id: 2,
        nombre: "AceiteSemiSintetico",
        precio: 12,
        categoria: "Aceites",
        img: "./src/assets/img/AceiteSemiSintetico1002.png"

    },
    {
        id: 3,
        nombre: "AceiteSintetico",
        precio: 15,
        categoria: "Aceites",
        img: "./src/assets/img/AceiteSintetico1001.png"

    },
    {
        id: 4,
        nombre: "FiltrodeAireAut",
        precio: 20,
        categoria: "Filtros",
        img: "./src/assets/img/FiltrodeAireAuto2001.png"

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