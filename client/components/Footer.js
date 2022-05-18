import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="flex flex-cols-1 w-full items-center justify-center border-t border-black">
       <div className='grid grid-rows-1 w-full gap-y-14'>
        <div className="flex items-center justify-center gap-2 ">
        <div className="grid grid-cols-1 gap-6 p-11 md:grid-cols-2 lg:grid-cols-4 w-full">
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
        <h3 className='flex justify-center text-3xl'>Subscribe to our Newsletter</h3>
        <form className='justify-center flex items-center justify-center gap-5'>
          <input type="email" name="email" />
        <input type="submit" value="Submit" />
      </form>
        <a
          className="flex items-center justify-center gap-2 p-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer">
            © 2020 Copyright:{' '}
          Isaiah Sylvester
        </a>
       </div>
      </footer>
  )
}

export default Footer