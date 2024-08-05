import { useState } from "react";

function ItemCount ({ stock, initial, handleOnAdd}) {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < stock) { setQuantity(quantity + 1) };
    };

    const decrement = () => {
        if(quantity > 1) {setQuantity(quantity - 1)};
    };

    return(
        <div className="goCart"> 
            <div className="itemCount">
                <button onClick={decrement}>-</button>
                <h3>{quantity}</h3>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button className="socialbutton sb-ca" onClick={() => handleOnAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;