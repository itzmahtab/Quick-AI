import { useClerk, useUser } from '@clerk/clerk-react'
import React from 'react'

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser()
  const { signOut, openUserProfile } = useClerk()

  return (
    <div
      className={`w-60 bg-white border-r border-gray-300 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'
      } transition-all duration-300 ease-in-out`}
    >
      {user ? (
        <div className='my-7 w-full'>  
          <img src={user.imageUrl} className='w-13 rounded-full mx-auto' alt="" />
          <h1 className='mt-1 text-center'>
            {user.fullName} 
          </h1>
        </div>
      ) : (
        <div className="my-7 text-gray-500">Loading...</div>
      )}
    </div>
  )
}

export default Sidebar
