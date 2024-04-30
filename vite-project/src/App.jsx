import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import discordBackground from './assets/discord-background.png';


// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={discordLogo} alt="Discord Logo" className="navbar-logo"/>
        <img src={menuIcon} alt="Menu Icon" className="navbar-menu-icon" />
      </nav>
      <div className="content">
        <h1 className="content-title">IMAGINE A PLACE</h1>
        <p className="content-paragraph">
        Where you can belong to bWhere you can belong to Where you can belong to Where you can belong to Where you can belong to Where you can belong to Where you can belong to 
        </p>
        <button className="content-button">Download</button>
        <button className="content-button">Open Discord</button>

      </div>

        <img src= {discordBackground} alt="Discord Background" className="discord-background"/>
    </div>
  );
}

export default App;