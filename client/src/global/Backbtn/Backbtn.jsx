import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Backbtn.css"

const Backbtn = ({urlpath}) => {
    const navigate = useNavigate();
    const nav = (path) => {
        console.log(path)
        navigate(path)
    }
  return (
    <header className='back'>
        <button onClick={()=>nav(urlpath)} className="btn">Back</button>
    </header>
  )
}

export default Backbtn