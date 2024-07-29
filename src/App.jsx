

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import fetchData from './components/fectchData.jsx';
import ItemDetail from './components/ItemDetail.jsx';
import NotFoundRoute from './components/NotFoundRoute.jsx';
import NotFoundProds from './components/NotFoundProds.jsx';
import FIlterCategory from './components/FilterCategory.jsx';

function App() {
  const user = {
    nombre: "Gustavo",
    apellido: "Farias"
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetchData()
    .then(response =>{
      setProducts(response);
    })
    .catch(err => console.error(err)
  );

  },[]);

  return (
    <>
      <BrowserRouter>
        <NavBar  />
        <Routes>
          <Route path="/NavegaLasRutas-FariasGustavo/*" element={<NotFoundRoute />} />
          <Route path="/NavegaLasRutas-FariasGustavo/detalle/*" element={<NotFoundProds />} />
          <Route path="/NavegaLasRutas-FariasGustavo/" element={<ItemListContainer usuario={user} products={products} />} /> 
          <Route path="/NavegaLasRutas-FariasGustavo/home/" element={<Home />} />
          <Route path="/NavegaLasRutas-FariasGustavo/products" element={<ItemListContainer usuario={user} products={products} />} />         
          <Route path="/NavegaLasRutas-FariasGustavo/detalle/:id" element={<ItemDetail products={products} />} />
          <Route path="/NavegaLasRutas-FariasGustavo/categoria/Todos" element={<ItemListContainer usuario={user} products={products} />} />
          <Route path="/NavegaLasRutas-FariasGustavo/categoria/:categoria" element={<FIlterCategory products={products} />} />
        </Routes>  
        <Footer />    
      </BrowserRouter>
      
      
    </>
  );
};

export default App;
