import { createContext, useContext, useState } from "react";
import fetchData from './fectchData.jsx';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCwwhGoPwGC4bJhfqM4ipi9gB3N1Z7ZFx0",
    authDomain: "react-flex-62325-gf.firebaseapp.com",
    projectId: "react-flex-62325-gf",
    storageBucket: "react-flex-62325-gf.appspot.com",
    messagingSenderId: "308289583473",
    appId: "1:308289583473:web:c76444843dc14bd37a9ed0",
    measurementId: "G-PXNGGMEBQK"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollection = collection(db, "products");
const orderCollection = collection(db, "orders");

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    function upData(){    
        
        getDocs(productsCollection).then(snapshot => {
            let arrProds = snapshot.docs.map(el => el.data());
            setProducts(arrProds);
        }).catch(err => console.log(err));

        // fetchData()
        //     .then(response =>{
        //     setProducts(response);
        //     })
        //     .catch(err => console.error(err));

    };

    function addCart(id){

        const auxCart = [...cart];
    
        const addedProduct = products.find(el => el.id === id)
    
        auxCart.push(addedProduct);
        setCart(auxCart);

    };

    function createOrder() {

        if(cart.length > 0) {

            const newOrder = {
                nombre: "Gustavo Farias",
                tel: 3513351351,
                mail: "gf@mail.com",
                productos: cart,
            };
    
            addDoc(orderCollection, newOrder).then(response => {
                console.log("Orden creada correctamente, id: " + response.id)
                setCart([]);
            }).catch(err => console.log(err));
        
        } else {
            console.log("Carrito vacio, no podes crear ordenes")
        }
    }

    
    return(
        <AppContext.Provider value={{ products, cart, setCart, upData, addCart, createOrder}}>
            {props.children}
        </AppContext.Provider>
    );

};