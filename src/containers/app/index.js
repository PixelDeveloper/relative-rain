import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import Prepping from '../prepping';
import { EquipmentDetails } from '../equipment';

const App = () => (
  <div className="base">
    <div className="navbar navbar--style">
      <Link to="/" className="navbar__link">
        <span className="navbar--link">Front page</span>
      </Link>
      <div className="navbar__linkSeparator" />
      <Link to="/prepping" className="navbar__link">
        <span className="navbar--link">Prepping</span>
      </Link>
      <span className="navbar__linkSeparator" />
      <Link to="/equipment" className="navbar__link">
        <span className="navbar--link">Equipment</span>
      </Link>
    </div>

    <main className="main main--style">
      <div className="mainInner">
        <Route exact path="/" component={Home} />
        <Route exact path="/prepping" component={Prepping} />
        <Route exact path="/equipment" component={EquipmentDetails} />
      </div>
    </main>
  </div>
);

export default App;
