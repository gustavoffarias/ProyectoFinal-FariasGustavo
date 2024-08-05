import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

const ItemDetail = ({products}) => {

    const { id } = useParams(); 

    const [productSelected, setproductSelected] = useState({});

    useEffect(() => {
        const prodSelected = products.find(el => el.id === parseInt(id));
        setproductSelected(prodSelected);

    },[]);

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if(quantity < productSelected.stock) { setQuantity(quantity + 1) };
    };

    const decrement = () => {
        if(quantity > 1) {setQuantity(quantity - 1)};
    };

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } =  useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {id, nombre, precio};

        addItem(item, quantity);
    }

    return (
        <>  
            <h1>Detalle del producto</h1>
            <div className='prodDetail'>
                <img src={`.${productSelected.img}`} alt=""/>
                <div className="divProdDetail">
                    <p>{productSelected.nombre}</p>
                    <p>{productSelected.categoria}</p>
                    <p>${productSelected.precio}</p>
                    <div className="goCart"> 
                        <div className="itemCount">
                            <button onClick={decrement}>-</button>
                            <h3>{quantity}</h3>
                            <button onClick={increment}>+</button>
                        </div>
                        <div>
                            <button className="socialbutton sb-ca" onClick={() => handleOnAdd(quantity)} disabled={!productSelected.stock}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;