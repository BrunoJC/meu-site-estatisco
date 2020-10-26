import { render } from '@testing-library/react';
import React, { useState, useEffect,Component } from 'react';
import api from './api'
import App from './App'

class Pesquisa extends React.Component {
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
        
        
        var nomeFilme = this.state.value
        return nomeFilme
        
        event.preventDefault();
       
        
        
      }
    
      render() {
        
        return (
            
          <form onSubmit={this.handleSubmit}>
            <label>
              Filme:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Enviar" />
          </form>
          
        );
      }
    }
    
    export default Pesquisa;
    
    