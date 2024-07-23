import React from "react";
import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <div className="ItemList">
        {
            products.map ((el, index) => {
                return(
                    <Item index={index} nombre={el.nombre} precio={el.precio} img={el.img} categoria={el.categoria} />
                )
            })
        }
        </div>

    );
};

export default ItemList;