import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Pages/AllRoutes';
import {Gifts} from './Components/Gifts';

function App() {
  return (
    <div className="App">
    
      <Navbar />
      <AllRoutes />
      <Gifts />
      <Footer/>
    </div>
  );
}

export default App;
