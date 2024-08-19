import React from "react";
import { Link } from "react-router-dom"
import { useAppContext } from "./Context";

const Item = ({nombre, precio, img, id, categoria}) => {

    const { addCart } = useAppContext();

    return (
        <div className='cards' key={id}>
            <img src={img} alt=""/>
            <h2>{nombre}</h2>
            <p>{categoria}</p>
            <p>${precio}</p>
            <button className="socialbutton sb-ca" onClick={() => addCart(id)} >Agregar al carrito</button>
            <Link to={`/ProyectoFinal-FariasGustavo/detalle/${id}`}>
                <button className="socialbutton sb-ca">Ver Producto</button>
            </Link>
        </div>
    );
};

export default Item;