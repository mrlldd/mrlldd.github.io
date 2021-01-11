import React from 'react';
import './App.css';
import BackgroundCanvas from './components/BackgroundCanvas/BackgroundCanvas';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import CV from './components/CV/CV';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BackgroundCanvas>
          <Route path="/me" component={Dashboard} />
          <Route path="/cv" component={CV} />
          <Redirect to="/me" />
        </BackgroundCanvas>
      </BrowserRouter>
    </div>
  );
}

export default App;
