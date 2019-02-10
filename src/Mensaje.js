import React, { Component } from 'react';



class Mensaje extends Component {
    render(){
        return (
        <div>
        Nombre: <input> type="text" value={this.state.value} onChange={this.handleChange} </input> <br/>
        Hola Nombre;
        </div>
        )
    }
  }

 
  export default Mensaje;