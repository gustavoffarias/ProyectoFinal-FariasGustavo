import React from "react";

const Item = ({nombre, precio, img, index, categoria}) => {
    return (
        <div className='cards' key={index}>
            <img src={img} alt=""/>
            <h2>{nombre}</h2>
            <p>{categoria}</p>
            <p>${precio}</p>
            <button>Agregar</button>
        </div>
    );
};

export default Item;