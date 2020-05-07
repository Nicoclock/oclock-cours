import React from 'react';
import {Switch, Route, Redirect, NavLink} from "react-router-dom";

import {SocleJS, ReactJS} from "./cours";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink className="App-link" to="/js">Socle JS</NavLink>
        <NavLink className="App-link" to="/react">ReactJS</NavLink>
      </header>
      <main className="App-main">
        <Switch>
          <Route path="/js" exact component={SocleJS} />
          <Route path="/react" exact component={ReactJS} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
