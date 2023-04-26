import React from 'react';
import './Inputfield.css';

const Inputfield = ({inpItem}) => {
  return (
    <div className="inpField">
     <input type={inpItem.inp_type} id={inpItem.id} name={inpItem.inp_name} className="Input " autocomplete="off"placeholder=" "/>
        <label className="form__label" for={inpItem.id}>{inpItem.inp_text}</label>
     </div>
  )
}

export default Inputfield