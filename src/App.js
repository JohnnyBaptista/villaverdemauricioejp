import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App__Aside"></div>

        <div className="App__Form">

          

          <div className="FormTitle">
            <a href="#" className="FormTitle__Link FormTitle__Link--Active">Login Administrador</a>
          </div>

          <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Usuário</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Entre com o usuário" name="name"/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Senha</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Entre com a senha" name="password"/>
              </div> 
              <div className="FormField">
                <button className="FormField__Button alignbutton">Entrar</button>
              </div>
              <div className="ejcomp">© 2019 - Desenvolvido por EJComp | Empresa Júnior da Computação.</div>
            </form>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
