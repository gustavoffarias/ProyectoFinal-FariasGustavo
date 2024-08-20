import { IoMdCart } from "react-icons/io";
import { useAppContext } from "./Context";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {cart, createOrder} = useAppContext();

    return (  
        <Link to={`/ProyectoFinal-FariasGustavo/carrito`}>  
            <div className="cartWidget">
                <IoMdCart />
                <p>{cart.length}</p>
            </div>
        </Link>
    )
}

export default CartWidget