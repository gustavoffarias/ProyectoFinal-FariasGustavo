import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const ItemDetail = ({products}) => {

    const { id } = useParams(); 

    const [productSelected, setproductSelected] = useState({});

    useEffect(() => {
        const prodSelected = products.find(el => el.id === parseInt(id));
        setproductSelected(prodSelected);

    },[]);

    return (
        <>
            <div className='prodDetai'>
                <p>{productSelected.nombre}</p>
                <p>{productSelected.categoria}</p>
                <p>${productSelected.precio}</p>
                <Link to={`/NavegaLasRutas-FariasGustavo/detalle/${productSelected.id}`}>
                    <button>Comprar</button>
                </Link>
            </div>
        </>
    );
};

export default ItemDetail;