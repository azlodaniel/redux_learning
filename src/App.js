import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Details } from './features/details/Details';
import './App.css';

function App(props) {
  const { store: { reducerManager } } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter reducerManager={reducerManager}/>
        <Details reducerManager={reducerManager}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
