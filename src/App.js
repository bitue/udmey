import React from 'react';

import './App.css';
import Logo from './Componants/logo/logo';
 import Header from "./Componants/Header/Header"
import Main from './Componants/Main/main';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <Logo></Logo>
          <Header></Header>
          <Main></Main>
          
        </div>
      </header>
    </div>
  )
}

export default App;
