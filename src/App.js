import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje';

/*function Mensaje(props){
  var element = <h1>hola {props.msg}</h1>
  return element
}*/


class MiComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('HOLA ' + this.state.value);
 
    event.preventDefault();
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="Submit" value="OK" />
        
     
      </form>
    );
  }
}

export default MiComponente;
