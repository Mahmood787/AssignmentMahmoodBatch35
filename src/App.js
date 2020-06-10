import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(prop) {
  let [count, setcount] =React.useState(0);
  function addd(){
    setcount(count+1);
  }

  return (
    <div className="App">
      This app is created by {prop.name}
      <h1>{count}</h1>
      <button onClick={addd}>add</button>
    </div>
  );
}

export default App;
