import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import ItemsListContainer from "./component/ItemsListContainer/ItemsListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemsListContainer />} />
          <Route
            path="/category/:categoryId"
            element={<ItemsListContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
