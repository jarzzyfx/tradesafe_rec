import React from 'react';
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
        Get started with our company database.
       
            <Link to="/auth"> <button className='button btn'>Get Started Now </button></Link>
       
    </div>
  )
}

export default Homepage