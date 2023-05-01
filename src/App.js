import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

const welcomeGreetings = "Welcome to Note Management";
function App() {
  
  return (
    <div className='App'>
      <div className='content'>
        <h1>{welcomeGreetings}</h1>
        <Navbar/>
        <a href='/'>Return Home</a>
      </div>
    </div>
  );
}

export default App;
