import React, { useEffect, useState } from "react";
import { SearchIcon, BellIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth";
import Link from "next/link";
import Image from "next/image";
// import { getAuth, signOut } from "firebase/auth";
// import { Context } from '../context/index'
import { useRouter } from "next/router";

function Header(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user: currentUser } = useSelector((state) => state.auth);

  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(currentUser);
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, [currentUser]);

  const handleSignOut = async () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <header className="flex items-center space-x-2 md:space-x-10 z-40 bg-white">
      <a href="/">
        <Image
          src={require(`/assets/logo-4.png`)}
          alt="Vercel Logo"
          width={100}
          height={40}
        />
      </a>
      <div>
        <nav>
          <ul className="hidden space-x-4 md:flex">
            <li className="nav-link">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="nav-link">
              <Link href="/manage_pets">Manage Pets</Link>
            </li>
            <li className="nav-link">
              <Link href="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link href="/subscriptions">Subscriptions</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <BellIcon className="h-6 w-6" />
        <Link href="/profile" passHref>
          <AccButton />
        </Link>
        
          <a href="/cart" className="w-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          </a>
          {props.countCartItems ? (<div className="bg-red-500 rounded-full w-6 h-6 text-white text-center">{props.countCartItems} </div>) : null}
        {user ? (
            <svg
            onClick={handleSignOut}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        ) : null}
      </div>
    </header>
  );
}

const AccButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image
        alt="Profile Icon"
        width={30}
        height={30}
        src={require("../assets/account.png")}
      />
    </a>
  );
});

export default Header;
