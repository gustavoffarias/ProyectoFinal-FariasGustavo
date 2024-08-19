import { createContext, useContext, useState } from "react";
import fetchData from './fectchData.jsx';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    function upData(){        
        fetchData()
            .then(response =>{
            setProducts(response);
            })
            .catch(err => console.error(err));
    };

    function addCart(id){
        const auxCart = [...cart];
    
        const addedProduct = products.find(el => el.id === id)
    
        auxCart.push(addedProduct);
        setCart(auxCart);
        console.log("ver",auxCart);
    };
    
    return(
        <AppContext.Provider value={{ products, cart, upData, addCart}}>
            {props.children}
        </AppContext.Provider>
    );

};