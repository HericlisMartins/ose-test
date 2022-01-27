import React, { useEffect } from 'react';
import logo from './logo.svg';
import "./App.css"
import { Commits } from './Commits';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>OSE React Test</code>
        </p>
      </header>
      <Commits owner='magento' repo="magento2" per_page={10} sha="2.4-develop" />
    </div>
  );
}

export default App;
