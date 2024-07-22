import React from "react";
import Item from "./item";

const ItemList = ({products}) => {
    return (
        <div className="itemList">
        {
            products.map ((el, index) => {
                return(
                    <Item index={index} nombre={el.nombre} precio={el.precio} img={el.img} />
                )
            })
        }
        </div>

    );
};

export default ItemList;