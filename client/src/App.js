import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './global';
import { Clients, NewClient } from './views';

function App() {
  return (
    <div className="app">
     <Navbar/>
      <Routes>
        <Route path="/" element={<NewClient/>}/>
        <Route path="/clients" element={<Clients/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
