import React, { useEffect, useState } from 'react';
import ItemList from './ItemList.jsx';
import FilterCategoryButton from './FilterCategoryButton.jsx';

const ItemListContainer = ({usuario, products}) => {

    const {nombre, apellido} = usuario;

    return (
        <>
            <h1>Bienvenido {nombre} {apellido}</h1>

            <FilterCategoryButton />

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

