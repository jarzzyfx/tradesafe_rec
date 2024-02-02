import React from 'react'
import {MoreVertical} from 'lucide-react'

const UserProfile = () => {
  const user = localStorage.getItem("user")
  console.log(JSON.parse(user.email))

  return (
      <div className="flex items-center gap-2">
        <div className="h-[60px] w-[100px] rounded-full bg-gray-400"></div>
        <div className="flex flex-col h-[50px] justify-between w-full">
          <h3 className='font-semibold text-lg capitalize'>john doe</h3>
          <p className="text-md lowercase">{JSON.parse(user.email)}</p>

        </div>
        <button className="pt-2 pb-2 hover:bg-gray-100 transition rounded-md"><MoreVertical className='h-4'/></button>
      </div>
  )
}

export default UserProfile