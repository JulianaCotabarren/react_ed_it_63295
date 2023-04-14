import React, { Component } from 'react';
import ComponenteFuncional from './ComponenteFuncional';
import PasarProps from './PasarProps';

export default class ComponenteClase extends Component {
  state={
    datoString: "Yo tambien soy un dato de tipo string"
  };

  render(){
    return <>
        <h1>Componente Clase</h1>
        <p>Puedo tener objeto state</p>
        <ComponenteFuncional nombre="Pepe"/>
        <PasarProps string={this.state.datoString}/>
      </>;
  }
}