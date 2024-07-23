

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import fetchData from './components/fectchData.jsx';


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
      <NavBar  />
      <BrowserRouter>
        <Routes>
          <Route path="/NavegaLasRutas-FariasGustavo/lista" element={<ItemListContainer usuario={user} products={products} />} />
        </Routes>      
      </BrowserRouter>
      
      
    </>
  );
};

export default App;
