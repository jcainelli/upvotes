import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom' 

import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Rodape from './componentes/Rodape'
import Contatos from './componentes/Contatos'
import Cadastro from './componentes/Cadastro'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />
        
        <Route path='/' exact component={Inicio} /> 
        <Route path='/contato' component={Contatos} />
        <Route path='/cadastro' component={Cadastro}/>''
        
        <Rodape />
      </div>
    </BrowserRouter>

  );
}

export default App;
