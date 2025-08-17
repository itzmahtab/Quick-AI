import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight} from 'lucide-react'
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'


const Navbar = () => {
    const navigate = useNavigate()

    const { user } = useUser()
    const {openSignIn} = useClerk()
    const {openSignUp} = useClerk()
    const { signOut } = useClerk()  


  return (
    <div className='fixes z-5 w-full backdrop-blur-2xl flex justify-between items-center bg-[url(/gradientBackground.png)]   py-3  px-4 sm:px-20 xl:px-32 cursor-pointer'>
      
      <img   src={assets.logo} alt="logo"  className=' cursor-pointer w-32 sm:w-44' onClick={()=>
        navigate('/')
      }/>

    {
        user ? <UserButton/> : (
          <button onClick={openSignIn} className='flex items-center gap-2 text-sm cursor-pointer bg-primary text-white px-10 py-2.5 rounded-full
       hover:bg-blue-700 transition-colors duration-300'>
 Get Started
        <ArrowRight className='w-4 h-4 '/>
      </button>
        )
    }

    
    </div>
  )
}

export default Navbar
