import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className='py-8 mt-20 border-t border-gray-300'>
        <div className='max-w-4xl mx-auto text-center text-gray-700'>
            <p className='font-light'>Thanks for your visiting </p>
            <p className='font-semibold'>Sadek &copy; {date}</p>
        </div>
    </div>
  )
}

export default Footer