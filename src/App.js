import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './HomeNinja';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// const welcomeGreetings = "Welcome to Note Management";
function App() {
  
  return (
    <Router>
    <div className='App'>
      <Navbar/>
      <div className='content'>
        {/* <h1>{welcomeGreetings}</h1> */}
        <Switch>
          <Route path = '/'>
            <Home/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
