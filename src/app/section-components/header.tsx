import { Bell } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='header ms-[250px] p-5'>
        <div className='flex justify-between items-center'>
            <div className='sport-mode'>
                <button className='px-4 py-2 border-[#D53E2A] rounded-l-xl border'>Sports</button>
                <button className='px-4 py-2 bg-[#D53E2A] border-[#D53E2A] border rounded-l-none rounded-xl'>Casino</button>
            </div>
            <div className='input hidden md:block'>
                <span>
                    <input placeholder='Search tables, players or tournaments'/>
                </span>
            </div>
            <div className='user flex gap-3 items-center justify-between'>
                <Bell className='inline border-[#D53E2A] rounded-xl border w-12 h-10 p-2'/>
                <button className='px-3 py-2 border-[#D53E2A] rounded-xl border md:block hidden'>Sign Up</button>
                <button className='px-3 py-2 bg-[#D53E2A] border-[#D53E2A] border rounded-xl'>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Header