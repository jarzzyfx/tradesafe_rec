import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './global';
import { ClientDetails, Clients, NewClient, Homepage, Auth} from './views';

function App() {
  return (
    <div className="app">
    
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/auth' element={<Auth/>}/>
          {/* <Route path="/clients" >
            <Route index element={<Clients/>}/>
            <Route path=":id" element={<ClientDetails/>}/>
          </Route> */}
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
