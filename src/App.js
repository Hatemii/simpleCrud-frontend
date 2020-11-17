import './App.css';
import UserComponent from "./components/UserComponent"
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import ViewStudent from "./components/ViewStudent"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



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
          </Switch>

        </div>
        <FooterComponent />
      </Router>
    </div >
  );
}

export default App;
