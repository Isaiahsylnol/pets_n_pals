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
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const handleSignOut = async () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className="h-16 lg:h-auto items-center justify-between bg-white top-0 z-10 py-4 sticky">
      <a href="/" className="absolute ml-4 -mt-1">
        <Image
          src={require(`/assets/logo-4.png`)}
          alt="Pets'N Pals Logo"
          width={100}
          height={40}
        />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden justify-end">
          <div
            className={isNavOpen ? "w-full top-0 z-10 bg-orange-400" : "hidden"}
          >
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase text-4xl">
                <Link href="/" className="text-4xl">
                  <a className="rounded-lg p-3 duration-300 hover:bg-blue-500">
                    Home
                  </a>
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/manage_pets">Manage Pets</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/about">About</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/subscriptions">Subscriptions</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/profile" passHref>
                  <AccButton />
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="space-y-2 lg:hidden flex flex-col float-right absolute z-10 mt-1 mr-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-6 lg:flex justify-end">
          <li>
            <Link href="/">
              <a className="rounded-lg text-lg font-semibold p-3 duration-300 hover:text-orange-500">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a className="rounded-lg text-lg font-semibold p-3 duration-300 hover:text-orange-500">
                Shop
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a className="rounded-lg text-lg font-semibold p-3 duration-300 hover:text-orange-500">
                Manage Pets
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a className="rounded-lg text-lg font-semibold p-3 duration-300 hover:text-orange-500">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a className="rounded-lg text-lg font-semibold p-3 duration-300 hover:text-orange-500">
                Subscriptions
              </a>
            </Link>
          </li>
          <li className="flex justify-end">
            <Link href="/profile" passHref>
              <AccButton />
            </Link>
          </li>
          <li className="pr-4">
            <a href="/cart">
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
              </svg>{" "}
              {props.countCartItems ? (
                <div className="bg-red-500 rounded-full w-6 h-6 text-white text-center -mt-8 ml-3">
                  {props.countCartItems}{" "}
                </div>
              ) : null}
            </a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
     
    `}</style>
    </div>
  );
}

const AccButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image
        alt="Profile Icon"
        width={25}
        height={25}
        src={require("../assets/account.png")}
      />
    </a>
  );
});

export default Header;
