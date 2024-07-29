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
            <h1>Detalle del producto</h1>
            <div className='prodDetail'>
                <img src={`.${productSelected.img}`} alt=""/>
                <div className="divProdDetail">
                    <p>{productSelected.nombre}</p>
                    <p>{productSelected.categoria}</p>
                    <p>${productSelected.precio}</p>
                    <Link to={`/NavegaLasRutas-FariasGustavo/detalle/${productSelected.id}`}>
                        <button className="socialbutton sb-ca">Comprar</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;