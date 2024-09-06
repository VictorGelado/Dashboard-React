import React from 'react';
import './App.css';
import imagem from './imagens/imagem1.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>&lt;</p>
          <i className="fas fa-chart-line"></i>
        </div>
        <h1>Ride</h1>

        <div className="dates">
          <div className="date">
            <p>26</p>
            <p>May</p>
          </div>
          <div className="date">
            <p>27</p>
            <p>May</p>
          </div>
          <div className="date-selected">
            <i className="fas fa-calendar-alt"></i>
            <div>
              <p>28</p>
              <p>May</p>
            </div>
          </div>
          <div className="date">
            <p>29</p>
            <p>May</p>
          </div>
          <div className="date">
            <p>30</p>
            <p>May</p>
          </div>
        </div>
      </header>

      <div className='notifications'>
        <div className='icons'>
          <i class="fa-solid fa-wifi"></i>
          <i class="fa-solid fa-envelope"></i>
          <i class="fa-solid fa-bolt"></i>
        </div>

        <div className='imgs'>
          <img src={imagem} alt='foto'/>
          <img src={imagem} alt='foto'/>
        </div>
      </div>

      <div className="container-locale">
        <div className="locale">
          <div className="select"></div>
          <p>Chicago</p>
        </div>
        <p>20.00</p>
      </div>

      <div className="container-locale container-locale1">
        <div className="locale">
          <div className="select select2"></div>
          <p>Oak park</p>
        </div>
        <p>20.00</p>
      </div>


      <div className='notifications notifications2'>
        <div className='icons'>
          <i class="fa-solid fa-wifi"></i>
          <i class="fa-solid fa-bolt"></i>
        </div>

        <div className='imgs'>
          <i class="fa-solid fa-person"></i>
          <img src={imagem} alt='foto'/>
          <img src={imagem} alt='foto'/>
        </div>
      </div>

      <div className="container-locale container-locale2">
        <div className="locale">
          <div className="select"></div>
          <p>New York</p>
        </div>
        <p>20.00</p>
      </div>

      <div className="container-locale container-locale1">
        <div className="locale">
          <div className="select select2"></div>
          <p>Park Avenue</p>
        </div>
        <p>20.00</p>
      </div>



    </div>
  );
}

export default App;
