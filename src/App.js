import React from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';


function App() {

  return (
    <div className="App">
    
      <React.Fragment>
        <NavBar />
      </React.Fragment>

      <ItemListContainer greeting={'Bienvenidos'} />
    </div>
  );


}


export default App;
