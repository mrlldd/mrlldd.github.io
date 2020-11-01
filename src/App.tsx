import React from 'react';
import './App.css';
import BackgroundCanvas from './components/BackgroundCanvas';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CV from './components/CV';

function App() {
  return (
    <div className="App">
      <BackgroundCanvas>
        <BrowserRouter>
          <Switch>
            <Route exact path="/cv" component={CV} />
            <Route exact path="/" component={Dashboard} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </BackgroundCanvas>
    </div>
  );
}

export default App;
