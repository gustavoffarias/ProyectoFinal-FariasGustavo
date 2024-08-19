import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

function NavBar() {
    
    return (
        <nav>
            <Link to="/ProyectoFinal-FariasGustavo/">
                <h3>CarMarket</h3>
            </Link>
            <ul>
                <li>
                    <Link to="/ProyectoFinal-FariasGustavo/home">
                        <button className="socialbutton sb-na">Home</button>
                    </Link>
                </li>
                <li>
                    <Link to="/ProyectoFinal-FariasGustavo/products">
                        <button className="socialbutton sb-na">Productos</button>
                    </Link>
                </li>
                <li>
                    <Link to="/ProyectoFinal-FariasGustavo/contact">
                        <button className="socialbutton sb-na">Contactos</button>
                    </Link>
                </li>
            </ul>
            <Link to="/ProyectoFinal-FariasGustavo/cart">
                <CartWidget />
            </Link>
        </nav>
    )
}

export default NavBar