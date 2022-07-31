import React from 'react'
import tourGuide from '../assets/tourGuide.jpg'
import { FaAward } from 'react-icons/fa'
const Services = () => {
  return (
    <div className='w-full bg-white py-16 px-16 lg:px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 bg-transparent' src={tourGuide} alt='/' />
            <div className='flex flex-col lg:justify-center text-center lg:text-left'>
                <p className='text-black font-bold flex items-center text-center justify-center lg:justify-start lg:text-left'><FaAward className='mr-2 text-[#FFC300]' size={30} />#1 Holiday Company For 2022</p>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Planning For A Holiday ?</h1>
                <p>Book with us for an amazing experience!</p>
                {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Get Strated</button> */}
            </div>
        </div>
    </div>
  )
}

export default Services