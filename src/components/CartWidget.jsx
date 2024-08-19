import { IoMdCart } from "react-icons/io";
import { useAppContext } from "./Context";

const CartWidget = () => {

    const {cart} = useAppContext();

    return (    
        <div className="cartWidget" onClick={() => console.log("Productos del carrito", cart)}>
            <IoMdCart />
            <p>{cart.length}</p>
        </div>
    )
}

export default CartWidget