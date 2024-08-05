import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: []
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    if(!isInCart(item, id)) {
      setCart(prev => [...prev, {...item, quantity}])
    } else {
      console.error('El producto ya fue agregado')
    };
  }

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter(prod => prod.id !== itemId);
  }

  const clearCart = () => {
    setCart([]);
  }

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  }

  return (
    <CartContext.Provider value = {{ cart, addItem, removeItem, clearCart}}>
      {children}
    </CartContext.Provider>
  );

}


/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwwhGoPwGC4bJhfqM4ipi9gB3N1Z7ZFx0",
  authDomain: "react-flex-62325-gf.firebaseapp.com",
  projectId: "react-flex-62325-gf",
  storageBucket: "react-flex-62325-gf.appspot.com",
  messagingSenderId: "308289583473",
  appId: "1:308289583473:web:c76444843dc14bd37a9ed0",
  measurementId: "G-PXNGGMEBQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/