import CartWidget from "./CartWidget.jsx"

function NavBar() {
    
    return (
        <nav>
            <h3>ecommerce</h3>
            <ul>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>Productos</button>
                </li>
                <li>
                    <button>Contactos</button>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar