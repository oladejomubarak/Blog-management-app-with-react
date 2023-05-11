import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './HomeNinja';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateBlog from './CreateBlogNinja';

// const welcomeGreetings = "Welcome to Note Management";
function App() {
  
  return (
    <Router>
    <div className='App'>
      <Navbar/>
      <div className='content'>
        {/* <h1>{welcomeGreetings}</h1> */}
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/create">
            <CreateBlog />
          </Route>
          <Route path = "/blog-details/:id">
            <CreateBlog />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
