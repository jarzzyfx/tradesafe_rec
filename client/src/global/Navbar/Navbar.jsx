import React, { useState } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = ()=>{
    setIsActive(!isActive)
  }
  return (
    <nav>
        <div className="logo">
            <h1>Trade</h1>
            <span>Safe</span>
            <h1>.</h1>
        </div>
    
        <div className="buttons">
            <span className={!isActive ? " buttons__light": " buttons__light  right"}></span>
            <button onClick={handleToggle} className="switch__btn" >
                <Link className={isActive ? "btn_txt":"btn_txt active"} to="/">New</Link>
            </button>
            <button onClick={handleToggle} className="switch__btn "><Link className={!isActive ? "btn_txt":"btn_txt active"} to="/clients">Clients</Link></button>
        </div>
    </nav>
  )
}

export default Navbar