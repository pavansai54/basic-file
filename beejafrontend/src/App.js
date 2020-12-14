import React from 'react';
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import history from './history';
import {loginpage} from "./component/LoginPage";
import {homepage} from "./component/HomePage";
import {listofemployee} from "./component/ListOfEmployee";
import {createofemployee} from "./component/CreateEmployee";
import './App.css';

function App() {
  return (
    
    <Router history={history}>
    <Switch>
    <Route exact path="/" component={loginpage}/>
    <Route exact path="/home" component={homepage}/>
    <Route exact path="/list" component={listofemployee}/>
    <Route exact path="/adding" component={createofemployee}/>
    </Switch>
    </Router>
  );
}

export default App;
