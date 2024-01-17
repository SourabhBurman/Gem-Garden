import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Pages/AllRoutes';
import About from './Components/About';

function App() {
  return (
    <div className="App">
    
      <Navbar />
      <AllRoutes />
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
