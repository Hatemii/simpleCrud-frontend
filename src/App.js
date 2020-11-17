import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserComponent from "./components/UserComponent"
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import ViewStudent from "./components/ViewStudent"
import CreateStudent from "./components/CreateStudent"
import UpdateStudent from './components/UpdateStudent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">

          <Switch>
            <Route path="/" exact component={UserComponent}></Route>
            <Route path="/students" component={UserComponent}></Route>
            <Route path="/view-student/:id" component={ViewStudent}></Route>
            <Route path="/add-student/:id" component={CreateStudent}></Route>
            <Route path="/update-student/:id" component={UpdateStudent}></Route>
          </Switch>

        </div>
        <FooterComponent />
      </Router>
    </div >
  );
}

export default App;
