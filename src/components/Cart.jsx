import React from "react";
import { useAppContext } from "./Context";

const Cart = () => {

    const { cart, products, createOrder } = useAppContext();

    const handleCart = () => {
        console.log("Productos del carrito", cart);
        createOrder();
    }

    return (
        <>
            <div className="cart">
            {
                cart.map ((el) => {
                    return(
                        <div className='itemCart' key={el.id}>
                            <img src={el.img} alt=""/>

                                <h2>{el.nombre}</h2>
                                <p>{el.categoria}</p>
                                <p>${el.precio}</p>
                            
                        </div>
                    )
                })
            }            
            </div>
            <button className="socialbutton sb-ca"  onClick={() => handleCart()}>
                Comprar
            </button>
        </>
        

    );
};

export default Cart;