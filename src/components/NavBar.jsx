import { Link } from "react-router-dom"
import CartWidget from "./CartWidget.jsx"

function NavBar() {
    
    return (
        <nav>
            <Link to="/NavegaLasRutas-FariasGustavo/">
                <h3>ecommerce</h3>
            </Link>
            <ul>
                <li>
                    <Link to="/NavegaLasRutas-FariasGustavo/">
                        <button>Home</button>
                    </Link>
                </li>
                <li>
                    <Link to="/NavegaLasRutas-FariasGustavo/products">
                        <button>Productos</button>
                    </Link>
                </li>
                <li>
                    <Link to="/NavegaLasRutas-FariasGustavo/contact">
                        <button>Contactos</button>
                    </Link>
                </li>
            </ul>
            <Link to="/NavegaLasRutas-FariasGustavo/cart">
                <CartWidget />
            </Link>
        </nav>
    )
}

export default NavBar