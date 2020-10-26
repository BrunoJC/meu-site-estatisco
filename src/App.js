import React, { useState, useEffect,Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Pesquisa from './pesquisa'
import api from './api'
import Apps from './pesqui';

var teste = ''

class App extends Component{

  constructor() {
    super();
    this.state = {filmes:[], filmeEscolhido : ''};
    this.enviaForm = this.enviaForm.bind(this);
    this.setFilme = this.setFilme.bind(this);
  }

   
  
  
  async pegandoUrl(escolha){
    
    const response = await api.get(escolha);
    console.log('p',teste)
    this.setState({ filmes: response.data })
  }

  enviaForm(evento) {
    evento.preventDefault()
    var escolhaFilme = this.state.filmeEscolhido;
    teste = escolhaFilme;
    teste = String(teste)
    this.pegandoUrl(teste)
    console.log(teste)
    return escolhaFilme;
    
    
  } 

  setFilme(evento){
    this.setState({filmeEscolhido:evento.target.value});

  }

  

  render(){

    const { filmes } = this.state;

    return(

      <div className="main">
 
        <h1>MOVIES</h1>

         
        <div className='Form'>

              <form onSubmit={this.enviaForm}>
                  <input type="text" value={this.state.filmeEscolhido} onChange={this.setFilme} />
            
                  <button type='submit'>Pesquisar</button>
              </form>
        </div>

        
        <table className='tabela'>
        
          <tr>
          <td>Titulo</td>
          <td>Tipo</td>
          <td>Lançamento</td>
          <td>Duração</td>
          </tr>
          
          {filmes.map(filme => (

            <tr key={filme.show.id}>
                <td>{filme.show.name}</td>
                <td>{filme.show.type}</td>
                <td>{filme.show.premiered}</td>
                <td>{filme.show.runtime} Minutos</td>
              
            </tr>
           
          ) )}

        </table>
      </div>
    );
  };
};

export default App;
