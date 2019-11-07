import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Shop from './pages/Shop';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={About} />
      <Route path="/shop" exact component={Shop} />
    </Switch>
  );
}

export default App;
