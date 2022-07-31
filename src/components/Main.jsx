import React from 'react'
import Typed from 'react-typed'
import koalaVideo from '../assets/koala.mp4'

const Main = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video className='object-cover h-full w-full absolute -z-10' src={koalaVideo} autoPlay loop muted/>
        <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center md:text-4xl sm:text-2xl lg:text-5xl text-2xl font-bold md:py-6'>
            <Typed 
                className='mb-2'
                strings={['BEST', 'SAFEST', 'AFFODABLE']}  
                typeSpeed={120} 
                backSpeed={200} 
                loop
            />
            <p>
                CITY TO HOLIDAY IN THE WORLD!
            </p>
            
        </div>
    </div>
  )
}

export default Main