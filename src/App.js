import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Myapp from './Pages/Myapp';
import EditUser from './Components/Edituser';
function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
          <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/About" element={<About />}  />
          <Route path="/Contact" element={<Contact />}  />
          <Route path="/Edit/:id" element={<EditUser />}  />
          </Routes>  
      </Router>
      
    </div>
  );
}

export default App;
