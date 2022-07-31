import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[90px] bg-white'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full text-black'>
            <div>
                <h1 className='text-lg sm:text-2xl font-sans'>VISIT SYDNEY</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex items-center'>
                    <li>Home</li>
                    <li>Tour Guide</li>
                    <li>Plan A Holiday</li>
                    <li>About</li>
                    {/* <button className='ml-4 bg-slate-400 rounded-3xl p-4 text-sm'>BOOK NOW</button> */}
                </ul>
            </div>

            {/* Hamburger Menu */}
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu className='text-black' size={30} /> : <AiOutlineClose className='text-black' size={30} /> }
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'w-full h-[50vh] py-16 bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'hidden'}>
                <ul>
                    <li className='text-xl'>Home</li>
                    <li className='text-xl'>Tour Guide</li>
                    <li className='text-xl'>Plan A Holiday</li>
                    <li className='text-xl'>About</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar