import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StudentComponent from './components/Students/StudentComponent';
import ViewStudent from './components/Students/ViewStudent';
import CreateStudent from './components/Students/CreateStudent';
import UpdateStudent from './components/Students/UpdateStudent';
import HeaderComponent from "./components/HeaderAndFooter/HeaderComponent"
import FooterComponent from "./components/HeaderAndFooter/FooterComponent"
import BachelorComponent from "./components/Bachelor/BachelorComponent"
import CreateBachelorStudyField from './components/Bachelor/CreateBachelorStudyFields';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <HeaderComponent />

          <div className="container">
            <Switch>
              <Route path="/" exact component={StudentComponent}></Route>
              <Route path="/students" component={StudentComponent}></Route>
              <Route path="/view-student/:id" component={ViewStudent}></Route>
              <Route path="/add-student/:id" component={CreateStudent}></Route>
              <Route path="/update-student/:id" component={UpdateStudent}></Route>

              <Route path="/bachelor" exact component={BachelorComponent}></Route>
              <Route path="/add-bachelorField/_add" component={CreateBachelorStudyField}></Route>


            </Switch>
          </div>

          <FooterComponent />
        </Router>
      </div >
    );
  }
}
