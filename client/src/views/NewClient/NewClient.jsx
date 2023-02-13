import React from 'react';
import './NewClient.css'
import {inputdata} from '../../inputdata.js'
import Inputfield from './Components/Inputfield/Inputfield';
import { Link } from 'react-router-dom';

const NewClient = () => {
  console.log(inputdata)
  return (
    <div className="Task__input__container">
        <form className="Task__input__box">
          {inputdata.map(data => {
            return(<Inputfield inpItem={data}/>)
          })}
           <button className="btn ">
                    <Link to="#">Create client</Link>
                </button>
        </form>
    </div>
  )
}

export default NewClient