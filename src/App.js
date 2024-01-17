import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Pages/AllRoutes';
import Abouts from './Components/Abouts';
import Bestseller from './Components/Bestseller';

function App() {
  return (
    <div className="App">
    
      <Navbar />
      <AllRoutes />
      <Bestseller/>
      <Abouts/>
      <Footer/>
    </div>
  );
}

export default App;
