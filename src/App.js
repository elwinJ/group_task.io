import './App.css';
import LandingPage from './Pages/LandingPage'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        

        <div className="app_content">
            <Switch>
              <Route exact path="/">
                <Redirect to="/landing" />
              </Route>
              
              <Route path="/landing">
              <LandingPage/>
              </Route>



              <Route  path="/about">
                <About/>
              </Route>

              <Route  path="/contact">
                <Contact/>
              </Route>

          

            </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
