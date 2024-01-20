import './App.css';

import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Pages/AllRoutes';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
    
      <Navbar />
      <AllRoutes />
      <Footer />
   
    </div>
  );
}

export default App;
