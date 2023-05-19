import React from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import Cart from './component/Cart/Cart';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Todos nuestros productos'}/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Productos por categoria'} />} />
          <Route path="/item/:itemId" element={ <ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;