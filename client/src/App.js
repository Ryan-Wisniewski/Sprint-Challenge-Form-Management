import React from 'react';

import Login from './components/Login'
import Register from './components/Register'
import FoodCard from './components/FoodCard'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>test</h1>
        <Login />
        <Register />
        <FoodCard />
      </header>
    </div>
  );
}

export default App;
