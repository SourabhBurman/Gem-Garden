import './App.css';

import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Pages/AllRoutes';
import Footer from './Components/Footer';
import { useState } from 'react';





function App() {
  const [query,setQuery] = useState("");
  return (
    <div className="App">
    
      <Navbar setQuery={setQuery}/>
      <AllRoutes query={query}/>
      <Footer />
   
      
   
    </div>
  );
}

export default App;
