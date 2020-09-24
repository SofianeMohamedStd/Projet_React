import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Allgames from './components/Allgames';
import Onegame from './components/Onegame';
import CreateGame from "./components/CreateGame";

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path="/" component={Allgames}/>
    <Route path="/game/:id" component={Onegame} />
    <Route path={"/ajoutG/"} component={CreateGame} />
   
   </Switch>
    </Router>
            </div>
       
  );
}

export default App;
