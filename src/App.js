import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Shop from './pages/Shop';
import Navigation from './components/Navigation'
import ShopItem from './pages/ShopItem';

function App() {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" exact component={ShopItem} />
      </Switch>
    </div>
  );
}

export default App;
