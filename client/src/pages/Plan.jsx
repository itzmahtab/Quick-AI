import React from 'react'
import{ PricingTable} from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>
        <div className='text-center'>
            <h2 className='text-slate-700 text-[42px] font-semibold mb-4'>
                Choose your plan
            </h2>
            <p className='text-gray-500 max-w-lg mx-auto mb-10'>
                Start for free, upgrade as you grow. Our plans are designed to scale with your needs, ensuring you have the right tools at every stage of your journey.
            </p>

        </div>
        <div className=' mt-14 max-sm:mx-8'> 
            <PricingTable />
        </div>
      
    </div>
  )
}

export default Plan
