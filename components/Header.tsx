import React from 'react'
import {SearchIcon, BellIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import Image from 'next/image'

function Header() {
  return (
    <header className='flex items-center space-x-2 md:space-x-10'><h3>Header</h3>
    <div>
      <nav>
        <ul className='hidden space-x-4 md:flex'>
          <li className='nav-link'>Home</li>
          <li className='nav-link'>Shop</li>
          <li className='nav-link'>Manage Pets</li>
          <li className='nav-link'>About</li>
        </ul>
      </nav>
    </div>
    <div className='flex items-center space-x-4 text-sm font-light'>
    <SearchIcon className='hidden h-6 w-6 sm:inline'/> 
    <BellIcon className='h-6 w-6'/>
    <Link href="/account" passHref><AccButton /></Link>
    
    </div>
    </header>
  )
}

const AccButton = React.forwardRef(({ onClick, href}, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image 
      alt="Picture of the author"
      width={30}
      height={30}
      src={require('../assets/account.png')}/>
    </a>
  )
})

export default Header