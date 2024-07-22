import React from "react";

const Item = ({nombre, precio, img, index}) => {
    return (
        <div className='cards' key={index}>
            <img src={img} alt=""/>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button>Agregar</button>
        </div>
    );
};

export default Item;