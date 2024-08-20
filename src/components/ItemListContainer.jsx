import React, { useEffect, useState } from 'react';
import ItemList from './ItemList.jsx';
import FilterCategoryButton from './FilterCategoryButton.jsx';
import Loader from './Loader.jsx';
import { useAppContext } from './Context.jsx';

const ItemListContainer = (usuario) => {

    const {nombre, apellido} = usuario;

    const {upData, cart, products} = useAppContext();

    useEffect(() => {
        upData();
    })

    return (
        <>
            <h1>Bienvenido {nombre} {apellido}</h1>

            <FilterCategoryButton />

            <div id='cardsContainer'>
            {
                products.length === 0 ?
                    <Loader />
                    :
                    <ItemList />
            }
            </div>
        </>
    )
}

export default ItemListContainer;

