import Navbar from './Component/Navbar';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import About from './Pages/About';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      
      <Routes>
             
                <Route element={<Home />} path='/'  /> 
                <Route element={<About />} path='/about'  /> 
                <Route element={<Home />} path='/'  /> 
                <Route element={<Home />} path='/'  /> 
                {/* <Route exact path="/" component={} /> 
                <Route exact path="/live" component={live}/> */}
            
         </Routes>
         </Router>
    </div>
  );
}

export default App;
