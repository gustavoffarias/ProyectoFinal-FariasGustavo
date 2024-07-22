import ItemList from './itemList.jsx';

const ItemListContainer = ({usuario, products}) => {

    const {nombre, apellido} = usuario;

    return (
        <>
            <h1>Bienvenidos {nombre} {apellido}</h1>
            <div id='cardsContainer'>
            {
                products.length === 0 ?
                    <p>Cargando...</p>
                    :
                    <ItemList products={products} />
            }
            </div>
        </>
    )
}

export default ItemListContainer;

