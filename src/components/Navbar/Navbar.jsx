import React from 'react'
import Logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id:3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id:3,
    name: "Electronics",
    link: "/#",
  },
]

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      {/* Upper Navbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
              <img src={Logo} alt="Logo" className='w-10 uppercase' />
              Phoenix-Shop
            </a>
          </div>
          {/* Search Bar */}
          <div className='flex justify-between items-center gap-4 '>
            <div className='relative group hidden sm:block '>
              <input
                type="text"
                placeholder='search'
                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400'
              />
              <IoMdSearch
                className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'
              />
            </div>
            <div>
            
            {/* Order Button */}
            <button
                onClick={() => alert("Ordering not available yet")}
                className='bg-gradient-to-r from-primary to-secondary transition-all 
                duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 
                group'
            >
            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
            <FaShoppingCart 
            className='text-xl text-white drop-shadow-sm cursor-pointer '
            />
            </button>
          </div>

            {/* Darkmode switch */}
            <div>
                <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower navbar */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data)=>(
              <li>
                <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
