import React from 'react';
import './App.css';
import menu from './imagens/menu-hamburguer.svg';
import bell from './imagens/sino.svg';
import profile from './imagens/imagem1.jpg';
import {ReactComponent as Carro} from './imagens/carro.svg';
import {ReactComponent as Coracao} from './imagens/coracao.svg';
import {ReactComponent as Envelope} from './imagens/envelope.svg';
import {ReactComponent as Pulso} from './imagens/pulso.svg';
import {ReactComponent as Acento} from './imagens/acento.svg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={menu} alt="hamburguer" className="icon-header" />

        <div className="icon-container">
          <img src={bell} alt="sino" className="icon-header" />
        </div>
      </header>

      <div className="container-profile">
        <img src={profile} alt="profile" className="img-profile" />
        <div className="container-data">
          <p>Daniel Quite</p>
          <p>+29 0228 3850</p>
          <p>Tátá</p>
        </div>
      </div>

      <div className="menu-options">
        <div className="options">
          <Carro className="img-options" />  
          <p>Ride</p>
        </div>
        <div className="options">
          <Envelope className="img-options" />  
          <p>Ride</p>
        </div>
        <div className="options">
          <Coracao className="img-options" />  
          <p>Ride</p>
        </div>
        <div className="options">
          <Pulso className="img-options" />  
          <p>Ride</p>
        </div>
      </div>

      <p className="new-ride">New ride reguest!</p>

      <div className="container-ride">
        <Acento className="acento"/>

        <div className='ride'>
          <div className="data-ride">
            <p>Jeck, N.</p>
            <p>aaaaaaaa</p>
          </div>
          <img src={profile} alt="imagem" className="profile-image-small"/>
        </div>
      </div>

      <div>
        
      </div>


    </div>
  );
}

export default App;
