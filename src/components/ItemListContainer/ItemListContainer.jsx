import Cards from '../Cards/Cards.jsx'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <div id='cardsContainer'>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    )
}

export default ItemListContainer;

