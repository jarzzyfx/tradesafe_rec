import { useField } from 'formik'
import React from 'react'
import "./CustomInput.css"

const CustomInput = ({label, ...props}) => {

    const [field, meta, ] = useField(props);

  return (
     <div className="form_group">
    
                        <label htmlFor="firstName">{label}</label>
                          {
        meta.touched && meta.error && (<span className="err">{meta.error}</span>)
      }
                        <input {...field} {...props} className={`input $meta.touched && meta.error ? "errinp" : ""`}/>
    </div>
  )
}

export default CustomInput