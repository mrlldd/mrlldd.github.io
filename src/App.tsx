import React from 'react';
import './App.css';
import BackgroundCanvas from './components/BackgroundCanvas/BackgroundCanvas';
import Dashboard from './components/Dashboard/Dashboard';
import {
  BrowserRouter,
  Redirect,
  Route,
  Router,
  Switch,
  useHistory,
} from 'react-router-dom';
import CV from './components/CV/CV';

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <BackgroundCanvas>
        <Router history={history}>
          <Switch>
            <Route exact path="/cv" component={CV} />
            <Route exact path="/" component={Dashboard} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </BackgroundCanvas>
    </div>
  );
}

export default App;
