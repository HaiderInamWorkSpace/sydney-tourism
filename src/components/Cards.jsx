import React from 'react'
// import single from '../assets/single.png'
// import double from '../assets/double.png'
// import triple from '../assets/triple.png'
import { GiModernCity } from 'react-icons/gi'
import { MdFlightTakeoff } from 'react-icons/md'
import { RiHotelBedFill } from 'react-icons/md'

const Cards = () => {
  return (
    <div className='bg-white w-full'>
        <div className='w-full py-16 px-16 lg:px-4 bg-white max-w-[1240px] mx-auto'>
        <h1 className='text-center'>Customized Travel Plans</h1>
        <div className='grid md:grid-cols-3 gap-8 pt-16'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt='/' /> */}
                <h2 className='text-2xl font-bold text-center py-8'>Single</h2>
                <p className='text-center text-4xl font-bold'>1500$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Flight</p>
                    <p className='py-2 border-b mx-8'>Hotel</p>
                    <p className='py-2 border-b mx-8'>Sydney City Tour</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Book</button>
            </div>
            <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 bg-transparent mx-auto mt-[-3rem] bg-white' src={double} alt='/' /> */}
                <h2 className='text-2xl font-bold text-center py-8'>Family</h2>
                <p className='text-center text-4xl font-bold'>3000$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Flights</p>
                    <p className='py-2 border-b mx-8'>Hotel</p>
                    <p className='py-2 border-b mx-8'>Sydney + Wollongong</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Book</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt='/' /> */}
                <h2 className='text-2xl font-bold text-center py-8'>Group</h2>
                <p className='text-center text-4xl font-bold'>5000$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Flights</p>
                    <p className='py-2 border-b mx-8'>Hotels</p>
                    <p className='py-2 border-b mx-8'>Sydeny + Wolllongong + Newcastle</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Book</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cards
