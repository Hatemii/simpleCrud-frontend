import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StudentComponent from './components/Students/StudentComponent';
import CreateStudent from './components/Students/CreateStudent';
import UpdateStudent from './components/Students/UpdateStudent';
import HeaderComponent from "./components/HeaderAndFooter/HeaderComponent"
import FooterComponent from "./components/HeaderAndFooter/FooterComponent"
import BachelorComponent from "./components/Bachelor/BachelorComponent"
import CreateBachelorStudyField from './components/Bachelor/CreateBachelorStudyFields';
import UpdateFields from "./components/Bachelor/UpdateFields"
import ViewStudent from './components/Students/ViewStudent';
import Home from './components/Home/Home';
import MasterComponents from './components/Master/MasterComponents';
import CreateMasterField from './components/Master/CreateMasterField';
import UpdateMasterFiled from "./components/Master/UpdateMasterField"

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />

        <Router>
          <Route path="/" exact component={Home}></Route>

          <div className="container">
            <Route path="/students" component={StudentComponent}></Route>
            <Route path="/add-student/:id" component={CreateStudent}></Route>
            <Route path="/view-student/:id" component={ViewStudent}></Route>
            <Route path="/update-student/:id" component={UpdateStudent}></Route>

            <Route path="/bachelor" exact component={BachelorComponent}></Route>
            <Route path="/add-bachelorField/:id" component={CreateBachelorStudyField}></Route>
            <Route path="/update-study-field/:id" component={UpdateFields}></Route>


            <Route path="/master" exact component={MasterComponents}></Route>
            <Route path="/add-masterField/:id" exact component={CreateMasterField}></Route>
            <Route path="/update-study-field/:id" exact component={UpdateMasterFiled}></Route>

          </div>

        </Router>

        <FooterComponent />
      </div >
    );
  }
}
