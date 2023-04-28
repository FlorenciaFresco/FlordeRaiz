import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Flor de Raiz" />} />
          <Route path='/categoria/:categoryName' element={<ItemListContainer />} />
          <Route path='deatail/:idProd' element={<ItemDetailContainer />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;