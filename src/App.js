import React from 'react';
import logo from './logo.svg';
import './App.css';
import './my.css';

function App (prop){
  return (
    <div>
      <h2>Hello {prop.name}</h2>
      <h4>Your fav fruits are</h4>
      <ul>
        <li>Apple</li>
        <li>Oranges</li>
        <li>Bananas</li>        
      </ul>
      <h4>your fav sports are</h4>
      <ol>
        <li>Cricket</li>
        <li>Football</li>
      </ol>

    </div>
  )
}

export default App;
