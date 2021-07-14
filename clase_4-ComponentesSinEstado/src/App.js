import React from 'react';
import Items from './components/Items';

function App() {
  return (

    <React.Fragment>
    {/* <> */} 
      <div className="App">
      <h1>Este es un proyecto hecho con React</h1>
      <p>Tener en cuenta que todo lo escribamos acá es el contenido que vemos despues en la pagina</p>
        <ul>
          < Items />
        </ul>
        <footer></footer>
      </div>



      <ul>
        <li>Items de la segunda lista</li>
        <li>Items de la segunda lista</li>
        <li>Items de la segunda lista</li>
      </ul>
    {/* </>   */}
    </React.Fragment>  



  );
}

export default App;
