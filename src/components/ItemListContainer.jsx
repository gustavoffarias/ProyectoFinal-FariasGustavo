import React, { useState } from 'react';
import ItemList from './ItemList.jsx';
import FIlterCategory from './FilterCategory.jsx';


const ItemListContainer = ({usuario, products}) => {

    const {nombre, apellido} = usuario;

    const [filterCategoryState, setfilterCategoryState] = useState('todos');

    return (
        <>
            <h1>Bienvenidos {nombre} {apellido}</h1>

            <FIlterCategory filterCategoryState={filterCategoryState} setfilterCategoryState={setfilterCategoryState} />

            <div id='cardsContainer'>
            {
                products.length === 0 ?
                    <p>Cargando...</p>
                    :
                    <ItemList products={products} />
            }
            </div>
        </>
    )
}

export default ItemListContainer;

