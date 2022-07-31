import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaTwitterSquare,
    FaInstagram
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-16 lg:px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-xl lg:text-2xl font-bold text-white'>VISIT SYDNEY</h1>
            <p className='py-4'>Family owned and operated.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
                <FaDribbbleSquare size={30} />
            </div>
        </div>
        <div className='lg:cols-span-2 flex justify-between '>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-xs px-0'>Pricing</li>
                    <li className='py-2 text-xs px-0'>Documentation</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-xs px-0'>About</li>
                    <li className='py-2 text-xs px-0'>Blog</li>
                    <li className='py-2 text-xs px-0'>Jobs</li>
                    <li className='py-2 text-xs px-0'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-xs px-0'>Claim</li>
                    <li className='py-2 text-xs px-0'>Policy</li>
                    <li className='py-2 text-xs px-0'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer