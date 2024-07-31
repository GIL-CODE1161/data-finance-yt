import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
      <div className='w-full py-[10rem] px-4 bg-white'>
          <div className='max-w-[1240] mx-auto grid grid-cols-3 gap-8'>
              <div className='w-full flex flex-col shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt='description'></img>
                  <h2 className='font-bold py-8 text-center text-2xl '>Single User</h2>
                  <p className='text-4xl text-center font-bold'>$149</p>
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                      <p className='py-2 border-b mx-8 '>1 Granted User</p>
                      <p className='py-2 border-b mx-8 '>Send up to 2GB</p>
                  </div>
                  <button className='bg-[#00df9a] font-medium w-[200px] rounded-md my-6 mx-auto text-black py-3 px-6 '>Start Trial</button>
              </div>
              <div className='w-full flex flex-col bg-gray-100 shadow-xl p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-20 mx-auto mt-[-3rem] bg-white bg-transparent' src={double} alt='description'></img>
                  <h2 className='font-bold py-8 text-center text-2xl '>Partnership</h2>
                  <p className='text-4xl text-center font-bold'>$199</p>
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>1TB storage</p>
                      <p className='py-2 border-b mx-8 '>3 Users Allowed</p>
                      <p className='py-2 border-b mx-8 '>Send up to 10GB</p>
                  </div>
                  <button className='bg-black font-medium w-[200px] rounded-md my-6 mx-auto text-[#00df9a] py-3 px-6 '>Start Trial</button>
              </div>
              <div className='w-full flex flex-col shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt='description'></img>
                  <h2 className='font-bold py-8 text-center text-2xl '>Group Account</h2>
                  <p className='text-4xl text-center font-bold'>$299</p>
                  <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'> 5 TB storage</p>
                      <p className='py-2 border-b mx-8 '>10 Users Allowed</p>
                      <p className='py-2 border-b mx-8 '>Send up to 20GB</p>
                  </div>
                  <button className='bg-[#00df9a] font-medium w-[200px] rounded-md my-6 mx-auto text-black py-3 px-6 '>Start Trial</button>
              </div>
          </div>
          
    </div>
  )
}

export default Cards