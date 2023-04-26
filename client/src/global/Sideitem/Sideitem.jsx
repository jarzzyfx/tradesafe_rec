import React from 'react'
import { Link } from 'react-router-dom'

const Sideitem = ({icon, text, href}) => {
  return (
    <Link to={href} className='p-4 rounded-md w-full flex items-center gap-4 hover:bg-gray-100 hover:cursor-pointer'> 
        {icon}
        <h3 className=" text-md capitalize">{text}</h3>
    </Link>
  )
}

export default Sideitem