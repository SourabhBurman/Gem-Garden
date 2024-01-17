import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Pages/AllRoutes';
import Abouts from './Components/Abouts';
import Bestseller from './Components/Bestseller';
import {Gifts} from './Components/Gifts';

function App() {
  return (
    <div className="App">
    
      <Navbar />
      <AllRoutes />
      <Bestseller/>
      <Abouts/>
      <Footer/>
      <Gifts />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
