import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/index';

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
