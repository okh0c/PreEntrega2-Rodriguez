import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './components/CartContext/CartContext';
 

function App() {
  return (

    <CartProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda!" />} />
        <Route path="/category/:categoryName" element={<ItemListContainer greeting="Explora nuestras categorías!" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
