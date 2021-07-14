import './App.css';
import React, {Component} from 'react';
class App extends Component {
  constructor() {
    super();
    this.state={
      contador: 0,
      textHandler: 0,
    }
  }

  incrementar() {
    this.setState({contador: this.state.contador + 1})
  }

  decrementar() {
    this.setState({contador: this.state.contador - 1})
  }

  reset() {
    this.setState({contador: 0});
  }

  set() {
    this.setState({contador: parseInt(this.state.textHandler)});
  }

  changeValueHandler(event) {
    this.setState({textHandler: event.target.value});
  }

  render() {
    return (
      <div className="Container">
        <div className="Block">
          <div className="ContadorText">
          {this.state.contador}
          </div>
          <div className="ContadorButtons">
          <input type="button" onClick={this.incrementar.bind(this)} value="Incrementar"/>
          <input type="button" onClick={this.decrementar.bind(this)} value="Decrementar"/>
          <input type="button" onClick={this.reset.bind(this)} value="Reset"/>
          </div>
          <div>
            Ingrese el valor inicial: <input type="text" onChange={this.changeValueHandler.bind(this)} />
            <input type="button" onClick={this.set.bind(this)} value="Set Value"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
