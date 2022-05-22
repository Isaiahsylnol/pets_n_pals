import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="flex flex-cols-1 w-full bg-orange-400 items-center justify-center border-t border-black">
       <div className='grid grid-rows-2 w-full gap-y-8 mt-8'>
       <h3 className='flex justify-center text-3xl mt-8'>Subscribe to our Newsletter</h3>
       <form className='justify-center flex items-center justify-center gap-5'>
          <input type="email" name="email" />
        <input type="submit" value="Submit" />
      </form>
        <div className="flex items-center justify-center mx-auto">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 w-full">
        <div className="justify-center p-6 text-base">
          <a href="#" className='text-xl'>Contact</a>
        </div>
        <div className="justify-center p-6 text-base">
          <a href="#" className='text-xl'>About Us</a>
        </div>
        <div className="justify-center p-6 text-base">
          <a href="#" className='text-xl'>Careers</a>
        </div>
        <div className="justify-center p-6 text-base">
          <a href="#" className='text-xl'>Privacy</a>
        </div>
      </div>
        </div>
        <a
          className="flex items-center justify-center p-4"
          href="#"
          rel="noopener noreferrer">
            © 2020 Copyright:{' '}
          Isaiah Sylvester
        </a>
       </div>
      </footer>
  )
}

export default Footer