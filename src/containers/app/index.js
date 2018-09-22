import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Home from '../home';
import Prepping from '../prepping';
import { EquipmentDetails } from '../equipment';

const App = () => (
  <div className="base">
    <div className="navbar navbar--style">
      <NavLink activeClassName="navbarLinkActive" to="/home" className="navbar__link">
        <span className="navbar--link">Front page</span>
      </NavLink>
      <div className="navbar__linkSeparator" />
      <NavLink activeClassName="navbarLinkActive" to="/prepping" className="navbar__link">
        <span className="navbar--link">Prepping</span>
      </NavLink>
      <span className="navbar__linkSeparator" />
      <NavLink activeClassName="navbarLinkActive" to="/equipment" className="navbar__link">
        <span className="navbar--link">Equipment</span>
      </NavLink>
    </div>

    <main className="main main--style">
      <div className="mainInner">
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/prepping" component={Prepping} />
        <Route exact path="/equipment" component={EquipmentDetails} />
      </div>
    </main>
  </div>
);

export default App;
