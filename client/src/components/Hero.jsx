import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {

    const navigate = useNavigate()

  return (
    <div className='px-4 sm:px-20 xl:px-32  relative  inline-flex flex-col w-full  justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>

        <div className='text-center mb-6'>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-semibold mx-auto leading-[1.2] '>
                Create amazing content with <br/>
                <span className='text-primary '>
                     AI Tools
                </span>
            </h1>
            <p>
                Explore our AI tools to write articles, generate images, remove backgrounds, and more. Join our community to share ideas and get inspired.
            </p>
        </div>
        <div className='flex flex-wrap justify-center gap-4 text-sm  max-sm:text-xs'>
            <button onClick={()=> navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg  hover:scale-102 active:scale-95 transition cursor-pointer'>Start creating now</button>
            <button className='bg-white px-10 py-3 rounded-lg  hover:scale-102 active:scale-95 transition cursor-pointer'>  Watch Demo</button>
        </div>
        <div className='flex items-center justify-center mt-6 text-gray-500'>
            <img src={assets.user_group} alt=""  className='h-8'/>
            <span className='text-sm text-gray-600 ml-2'>Join 1000+ users</span>

        </div>
      
    </div>
  )
}

export default Hero
