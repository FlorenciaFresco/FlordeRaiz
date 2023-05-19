import React from 'react';
import './App.css';
import NavBar from '../src/component/NavBar/NavBar';
import ItemListContainer from '../src/component/ItemListContainer/ItemListContainer';
import CartView from '../src/component/CartView/CartView';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from '../src/component/ItemDetailContainer/ItemDetailContainer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';
import Footer from '../src/component/Footer/index';
import CheckOut from '../src/component/CheckOut/CheckOut';
import Inicio from './pages/Inicio';



function App() {

  return (
    <>
      <CartContextProvider>
        <HashRouter>
          <NavBar />
          <main>
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/item/:itemid" element={<ItemDetailContainer greeting="Detalle de producto" />} />
              <Route path="/" element={<ItemListContainer greeting="Menú de JIMP iTech" />} />
              <Route path="/cart" element={<CartView greeting="Este es su carrito" />} />
              {/* <Route path="/coderhouse-react" exact component={<ItemListContainer greeting="Bienvenido a JIMP iTech!"/>} /> */}
              <Route path="/category/:category" element={<ItemListContainer greeting="Categoría" />} />
            </Routes>
            <hr />
            <div className="back1">
              <div className="back1 back2">
                <div className="back1 back3">
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </HashRouter>
      </CartContextProvider>
    </>
  );
}

export default App;