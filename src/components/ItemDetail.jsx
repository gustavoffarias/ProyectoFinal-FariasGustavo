import React from "react";
import Item from "./Item";

const ItemDetail = ({products}) => {
    return (
        <div className="ItemList">
        {
            products.map ((el) => {
                return(
                    <Item key={el.id} id={el.id} nombre={el.nombre} precio={el.precio} img={el.img} categoria={el.categoria} />
                )
            })
        }
        </div>
    );
};

export default ItemDetail;