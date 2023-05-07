import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './HomeNinja';

const welcomeGreetings = "Welcome to Note Management";
function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <h1>{welcomeGreetings}</h1>
        <Home/ >
      </div>
    </div>
  );
}

export default App;
