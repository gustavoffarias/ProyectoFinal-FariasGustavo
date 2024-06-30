import CartWidget from "../CartWidget/CartWidget.jsx"

const NavBar = () => {
    return (
        <nav>
            <h3>ecommerce</h3>
            <ul>
                <li>
                    <button>Lubricantes</button>
                </li>
                <li>
                    <button>Filtros</button>
                </li>
                <li>
                    <button>Repuestos</button>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar