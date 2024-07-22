
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import fetchData from './components/fectchData.jsx';
import { useEffect, useState } from 'react';
import FIlterCategory from './components/FilterCategory.jsx';

function App() {
  const user = {
    nombre: "Gustavo",
    apellido: "Farias"
  };

  const [products, setProducts] = useState([]);

  const [] = useState('todos');

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
      <ItemListContainer usuario={user} products={products} />
    </>
  );
};

export default App;
