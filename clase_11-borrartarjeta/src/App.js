import { Component } from 'react';
import './App.css';
import Child from './Components/Child';
import nombres from './Resources/names.json';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contador: 1,
      items: []
    }
  }

  agregarTarjeta() {
      this.state.items.push({id: this.state.contador, nombre: nombres[Math.floor(Math.random()*nombres.length)]});
      console.log("valor generado al azar: " + Math.floor(Math.random()*nombres.length));
      console.log(this.state.items);
      this.setState({contador: this.state.contador + 1, items: this.state.items});
  }

  borrarItem(idItem) {
    console.log("Item a eliminar: " + idItem);
    let resultado = this.state.items.filter((item)=> {
      return item.id !== idItem
    })  
    this.setState({items: resultado});
  }

  render() {
    return (
      <div className="App">
        Id item a crear: {this.state.contador}<br/>
        <button onClick={this.agregarTarjeta.bind(this)}>Agregar</button>
        {
          this.state.items.map((item) => 
            (
              <Child onDelete={this.borrarItem.bind(this)} key={item.id} id={item.id} nombre={item.nombre}/>         
            )
          )
        }
        
      </div>
    );
  }
}


