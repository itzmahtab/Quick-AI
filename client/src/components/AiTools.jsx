import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {
    const navigate = useNavigate()
    const {user} = useUser()
  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24'>
  <div className='text-center '> 
          <h2 className='text-slate-700 text-[42px] font-semibold'>
            Powerful AI Tools
        </h2>
        <p className='text-gray-500 text-lg mt-4 max-w-2xl mx-auto'>
            Explore our suite of AI tools designed to enhance your content creation process. 
        </p>
  </div>
  <div className='flex flex-wrap mt-10 justify-center '>
    {AiToolsData.map((tool, index) =>(
        <div key={index} className='p-8 m-4 maz-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer' onClick={()=>user && navigate(tool.path)}>
            <tool.Icon className='w-12 h-12 p-3 text-white rounded-xl'/>

        </div>

   ) ) }

  </div>
      
    </div>
  )
}

export default AiTools

