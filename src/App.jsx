import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetail from './components/ItemDetail.jsx';
import NotFoundRoute from './components/NotFoundRoute.jsx';
import NotFoundProds from './components/NotFoundProds.jsx';
import FIlterCategory from './components/FilterCategory.jsx';
import { ContextProvider } from './components/Context.jsx';

function App() {
  const user = {
    nombre: "Gustavo",
    apellido: "Farias",
    email: "gff@hotmail.com",
    isLoggedIn: true
  };

  useEffect(() => {

  },[]);

  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <NavBar  />
          <Routes>
            <Route path="/ProyectoFinal-FariasGustavo/*" element={<NotFoundRoute />} />
            <Route path="/ProyectoFinal-FariasGustavo/detalle/*" element={<NotFoundProds />} />
            <Route path="/ProyectoFinal-FariasGustavo/" element={<Home />} /> 
            <Route path="/ProyectoFinal-FariasGustavo/home/" element={<Home />} />
            <Route path="/ProyectoFinal-FariasGustavo/products" element={<ItemListContainer usuario={user} />} />         
            <Route path="/ProyectoFinal-FariasGustavo/detalle/:id" element={<ItemDetail />} />
            <Route path="/ProyectoFinal-FariasGustavo/categoria/Todos" element={<ItemListContainer usuario={user} />} />
            <Route path="/ProyectoFinal-FariasGustavo/categoria/:categoria" element={<FIlterCategory />} />
          </Routes>
        </ContextProvider>  
        <Footer />    
      </BrowserRouter>
      
      
    </>
  );
};

export default App;
