const ItemListContainer = ({greeting}) => {
    const cadsContainer = document.getElementById("cadsContainer")
    const productCard = document.createElement("div");
    productCard.innerHTML = `
        <img src="" class="" alt="">
        <div class="">
            <h5 class="">Prueba1</h5>
            <h6>Prueba2</h6>
            <span>Prueba3</span><br>
            <span>Prueba4</span><br>
            <button class="" id="" style="width: 100%; margin-top:5%;" >Comprar</button>
        </div>`;

    root.appendChild(productCard);
        
    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;

