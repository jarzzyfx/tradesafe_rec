import React from 'react'
import UserProfile from '../UserProfile/UserProfile'
import Sideitem from '../Sideitem/Sideitem'
import { CreditCard, User } from 'lucide-react'
import { Users } from 'lucide-react'
import { MessageSquare } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen border-r-2 border-gray-400">
      <h2 className='font-bold text-3xl mb-8 mt-4'>User Dashboard</h2>
        <UserProfile/>
        <div className="f-full mb-[30px] mt-[20px] h-[2px] bg-gray-400"></div>

        <div className="flex flex-col w-full gap-8 p-2">
          <Sideitem icon={<User className='w-6 h-6'/>} href="/dashboard" text='Dashboard'/>
          <Sideitem icon={<Users className='w-6 h-6'/>} href="/dashboard/clients" text='Clients'/>
          <Sideitem icon={<CreditCard className='w-6 h-6'/>} href="/dashboard/payments" text='Payments'/>
          <Sideitem icon={<MessageSquare className='w-6 h-6'/>} href="/dashboard/messages" text='Messages'/>
        </div>


    </div>
  )
}

export default Sidebar