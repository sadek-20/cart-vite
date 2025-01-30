import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='fixed right-0 left-0 top-0 bg-white bg-opacity-60 backdrop-blur-md shadow z-10'>
       
    <div className='max-w-4xl mx-auto flex justify-between items-center py-4 px-4'>
         <Link to="/" className='text-xl font-semibold text-gray-700 hover:text-pink-600'>Reactify</Link>
       <div div className='flex space-x-8 text-gray-700 font-semibold'>
        <Link to="/" className='hover:text-pink-600'>Home</Link>
        <Link to="/products" className='hover:text-pink-600'>Products</Link>
        <Link to="/about"  className='hover:text-pink-600' >About</Link>
        <Link to="/contacts" className='hover:text-pink-600'>Contact</Link>
        <div className='relative'>
        <Link to="/cart" className='hover:text-pink-600'>
        
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span className='absolute -top-1 -right-1 bg-pink-600 text-white h-5 w-5 rounded-full text-center flex justify-center items-center text-xs'>0</span>
        
        </Link>
        </div>
     </div>
   </div>
   
    </div>
  )
}

export default Header