import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
       <div className="App">

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">About</Link>
            </li>
            <li>
              <Link to="/saved">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </Router>
  );
}

export default App;
