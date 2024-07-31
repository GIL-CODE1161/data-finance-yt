import React from 'react'
import { FaDribbbleSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8  text-gray-300'>
          <div>
              <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
          <p className='py-4'>Data Analytics eliminates guesswork and manual tasks.
              Be it choosing the right content, planning marketing campaigns, or developing products.
              Organizations can use the insights they gain from data analytics to make informed decisions.
              Thus, leading to better outcomes and customer satisfaction.</p>
          <div className='flex justify-between md:w-[75%] my-6'>
             <FaDribbbleSquare size={30}/>
              <FaFacebookSquare size={30}/>
              <FaTwitterSquare size={30}/>
              <FaGithubSquare size={30}/>
              <FaInstagramSquare size={30}/>
          </div>
          </div>
          <div className='lg:col-span-2 flex justify justify-between mt-6'>
              <div>
                  <h6 className='font-medium text-gray-400'>Solutions</h6>
                  <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                  </ul>
              </div>
              <div>
                  <h6 className='font-medium text-gray-400'>Support</h6>
                  <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                  </ul>
              </div>
              <div>
                  <h6 className='font-medium text-gray-400'>Company</h6>
                  <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blogs</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Career</li>
                  </ul>
              </div>
              <div>
                  <h6 className='font-medium text-gray-400'>Legal</h6>
                  <ul>
                    <li className='py-2 text-sm'>Claims</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                  </ul>
              </div>
              
          </div>
    </div>
  )
}

export default Footer