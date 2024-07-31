import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
      <div className='w-full bg-white py-16 px-4 '>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
              <img className='w-[500px] my-4 mx-auto' src={laptop} alt='description'></img>
              <div className='flex flex-col justify-center'>
                  <p className='font-bold text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
                  <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
                  <p>
                      Data analytics help a business optimize its performance,
                      perform more efficiently, maximize profit,
                      or make more strategically-guided decisions.
                      The techniques and processes of data analytics have
                      been automated into mechanical processes an
                      algorithms that work over raw data for human consumption
                  </p>
                  <button className='bg-black text-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'>Get Started </button>
              </div>
              
          </div>
    </div>
  )
}

export default Analytics