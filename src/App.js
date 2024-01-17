// import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Pages/AllRoutes';
import {Gifts} from './Components/Gifts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Gifts />
    </div>
  );
}

export default App;
