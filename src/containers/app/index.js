import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Equipment from '../equipment';
import Weather from '../weather';

const App = () => (
  <div>
    <div className="navbar navbar--style">
      <Link to="/" className="navbar__link">
        <span className="navbar--link">Home</span>
      </Link>
      <div className="navbar__linkSeparator" />
      <Link to="/about-us" className="navbar__link">
        <span className="navbar--link">About</span>
      </Link>
      <span className="navbar__linkSeparator" />
      <Link to="/equipment" className="navbar__link">
        <span className="navbar--link">Equipment</span>
      </Link>
      <span className="navbar__linkSeparator" />
      <Link to="/weather" className="navbar__link">
        <span className="navbar--link">Weather</span>
      </Link>
    </div>

    <main className="main main--style">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/equipment" component={Equipment} />
      <Route exact path="/weather" component={Weather} />
    </main>
  </div>
);

export default App;
