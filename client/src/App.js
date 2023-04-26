
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './global';
import { Auth} from './views';
import Homepage from './pages/Homepage/Homepage';
import Darshboard from './views/Dashboard/Darshboard';
import Clients from './views/Dashboard/Clients/Clients';

function App() {
  return (
    <div className="app">
    
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/dashboard' element={<Darshboard/>}/>
        <Route path='/dashboard/clients' element={<Clients/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
