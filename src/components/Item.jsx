import React from "react";
import { Link } from "react-router-dom"

const Item = ({nombre, precio, img, id, categoria}) => {
    return (
        <div className='cards' key={id}>
            <img src={img} alt=""/>
            <h2>{nombre}</h2>
            <p>{categoria}</p>
            <p>${precio}</p>
            <Link to={`/NavegaLasRutas-FariasGustavo/detalle/${id}`}>
                <button>Ver Producto</button>
            </Link>
        </div>
    );
};

export default Item;