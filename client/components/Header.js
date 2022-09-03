import React, { useEffect, useContext } from 'react'
import {SearchIcon, BellIcon, CogIcon} from '@heroicons/react/solid';
import { useDispatch } from "react-redux";
import { logout } from "../slices/auth";
import Link from 'next/link';
import Image from 'next/image'
// import { getAuth, signOut } from "firebase/auth";
// import { Context } from '../context/index'
 import { useRouter } from 'next/router'

function Header() {
  const dispatch = useDispatch();
  const router = useRouter()
  //const { dispatch } = useContext(Context)

  const handleSignOut = async () => {
    dispatch(logout())
    router.push("/login")
  };
  
  return (
    <header className='flex items-center space-x-2 md:space-x-10 z-40 bg-white'>
      <h3>Header</h3>
    <div>
      <nav>
        <ul className='hidden space-x-4 md:flex'>
          <li className='nav-link'><Link href="/" >Home</Link></li>
          <li className='nav-link'><Link href="/shop" >Shop</Link></li>
          <li className='nav-link'><Link href="/manage_pets" >Manage Pets</Link></li>
          <li className='nav-link'><Link href="/about" >About</Link></li>
          <li className='nav-link'><Link href="/subscriptions" >Subscriptions</Link></li>
        </ul>
      </nav>
    </div>
    <div className='flex items-center space-x-4 text-sm font-light'>
    <SearchIcon className='hidden h-6 w-6 sm:inline'/> 
    <BellIcon className='h-6 w-6'/>
    <Link href="/profile" passHref><AccButton /></Link>
    <CogIcon className='h-6 w-6' onClick={handleSignOut}>
    <div>
 
    <div className="dropdown">
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
      </ul>
    </div>
 
</div>
    </CogIcon>
    
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