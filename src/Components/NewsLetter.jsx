import React from 'react'

const NewsLetter = () => {
  return (
      <div className='w-full text-white py-16 px-4'>
          <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
              <div className='lg:col-span-2 my-4'>
                  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold  py-2'> Want tips and tricks to optimize your flow?</h1>
                  <p>Sign up to our news letter and stay up to date</p>
              </div>
              <div className='my-4'>
                  <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                      <input className="p-3 text-black rounded-md flex"type='email' placeholder='Enter email' />
                      <button className='bg-[#00df9a] font-medium w-[200px] rounded-md my-6 mx-auto text-black py-3 ml-4'>Notify me</button>
                  </div>
                  <p> We care about the protection of your Data. Read our{" "}
                  <span className='text-[#00df9a]'>Privacy policy</span></p>
                  
              </div> 
              
          </div>
      </div>
  )
}

export default NewsLetter