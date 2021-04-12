import './App.css';
import MiComponente from './MiComponente';
import React from 'react';

export default class App extends React.Component {

  contactos = [
    {id: 1, nombre: "Juan", apellido: "Perez", color: "red"}, 
    {id: 2, nombre: "Carla", apellido: "Fernandez", color: "blue"},
    {id: 3, nombre: "Maria", apellido: "Garcia", color: "green"},
    {id: 4, nombre: "Esteban", apellido: "Cataldo", color: "purple"}];

  render() {
    return (
      <div className="App">{
        this.contactos.map((item) => (
              <MiComponente 
                key={item.id} 
                nombre={item.nombre} 
                apellido={item.apellido} 
                color={item.color}/>  
          )
        )
      }
      </div>
    );
  }
}

