import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './HomeNinja';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateBlog from './CreateBlogNinja';
import BlogDetails from './BlogDetails';
import Notfound from './NotFound';

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
          <Route path = "/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
