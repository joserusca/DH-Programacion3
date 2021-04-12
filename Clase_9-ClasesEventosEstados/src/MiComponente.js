import React, { Component } from 'react';

class MiComponente extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            colorBordeOriginal: this.props.color,
            colorBorde: this.props.color,
            colorFondo: 'grey',
        }
    }
    // state = {
    //     color: 'blue'
    // }

    CambiarColorFondo = (nuevoColor) => {        
        if(this.state.colorFondo===this.state.colorFondoOriginal) 
            this.setState({ colorFondo: nuevoColor}); 
        else 
            this.setState({ colorFondo: this.state.colorFondoOriginal});
    }

    CambiarColorBorde = (nuevoColor) => {        
        if(this.state.colorBorde===this.state.colorBordeOriginal) 
            this.setState({ colorBorde: nuevoColor}); 
        else 
            this.setState({ colorBorde: this.state.colorBordeOriginal});
    }

    render() {
        const {nombre, apellido } = this.props;
        return (
            <div 
                className="Tarjeta" 
                style={{ 
                    borderColor: this.state.colorBorde, 
                    backgroundColor: this.state.colorFondo,
                }}
                onClick={() => this.CambiarColorBorde("orange")}
                onMouseEnter={() => this.CambiarColorFondo("lightgrey")}
                onMouseLeave={() => this.CambiarColorFondo("grey")} 
                
            >
                <div>Mi Componente</div>
                <div>{nombre}</div>
                <div>{apellido}</div>
            </div>
        );
    }
}

export default MiComponente;