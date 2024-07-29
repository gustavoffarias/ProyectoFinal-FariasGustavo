import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import FilterCategoryButton from "./FilterCategoryButton.jsx"

function FIlterCategory({ products }) {

    const { categoria } = useParams(); 

    const [productSelected, setProductSelected] = useState([]);   

    useEffect(() => {
        const prodSelected = products.filter(el => el.categoria === categoria);
        setProductSelected(prodSelected);

    },[]);

    return (
        <>  
            <div id='cardsContainer'>
                <h1>{categoria}</h1>
                <div className="ItemList">

                    {
                        productSelected.length === 0 
                        ?
                        <p>Cargando...</p>
                        :
                        productSelected.map(el => {
                            return(
                                <div className='cards' key={el.id}>
                                    <img src={`.${el.img}`} alt=""/>
                                    <h2>{el.nombre}</h2>
                                    <p>{el.categoria}</p>
                                    <p>${el.precio}</p>
                                    <Link to={`/NavegaLasRutas-FariasGustavo/detalle/${el.id}`}>
                                        <button className="socialbutton sb-ca">Ver Producto</button>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default FIlterCategory;