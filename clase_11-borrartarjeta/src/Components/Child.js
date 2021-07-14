import {Component} from 'react';

export default class Child extends Component {
    constructor() {
        super();
        this.state = {
            color: "black"
        }
    }

    cambiarColor(nuevoColor) {
        this.setState({color: nuevoColor});
    }
    

    render() {
        return (
            <div className="Tarjeta" style={{borderColor: this.state.color}}
                onMouseEnter={this.cambiarColor.bind(this, "red")}
                onMouseLeave={this.cambiarColor.bind(this, "black")}
                onClick={this.props.onDelete.bind(this, this.props.id)}
                >
                ({this.props.id}) - {this.props.nombre}
            </div>
        )
    }
}