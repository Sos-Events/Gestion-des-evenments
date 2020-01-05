import React,{Component} from 'react';
import logo from './images.jpg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        Bienvenue dans notre site de gestion des événements !!
        </h1>
        <a
          className="App-link"
          
          target="_blank"
          rel="noopener noreferrer"
        >
          All events 
        </a>
      </header>
    </div>
  );
}



export default App;
