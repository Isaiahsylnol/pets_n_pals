import React, { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function Header(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user: currentUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState();
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleSignOut = async () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className="p-4 shadow bg-[#56788f] text-white top-0 z-20 sticky">
      <nav>
        <a href="/" className="absolute">
          <Image
            src={require(`/assets/logo-badge.png`)}
            alt="Pets'N Pals Logo"
            width={132}
            height={34}
            className="object-contain"
          />
        </a>
        <section className="MOBILE-MENU flex lg:hidden justify-end">
          <div className={isNavOpen ? "w-full top-0 z-10" : "hidden"}>
            <ul className="flex flex-col text-2xl  mt-16 space-y-14 uppercase">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/manage-pets">Manage Pets</Link>
              </li>
              <li>
                <Link href="/subscriptions">Subscriptions</Link>
              </li>
              <div className="grid grid-cols-2 max-w-fit">
                <li className="flex">
                  <Link href="/profile">
                    <UserCircleIcon className="h-7 w-7 text-white hover:text-slate-300" />
                  </Link>
                </li>
                <li className="pr-4 hover:text-slate-300">
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
              </div>
            </ul>
          </div>
          <div
            className="space-y-2 md:hidden flex flex-col float-right z-10 mt-1 mr-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>
        </section>
        <ul className="DESKTOP-MENU hidden space-x-4 md:flex justify-end">
          <li>
            <Link href="/">
              <a className="rounded-lg text-lg font-semibold p-3 duration-300 hover:text-slate-300">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a className="rounded-lg text-lg font-semibold p-3 duration-300 hover:text-slate-300">
                Shop
              </a>
            </Link>
          </li>
          <li>
            <Link href="/manage-pets">
              <a className="rounded-lg text-lg font-semibold p-3 duration-300 hover:text-slate-300">
                Manage Pets
              </a>
            </Link>
          </li>
          <li>
            <Link href="/subscriptions">
              <a className="rounded-lg text-lg font-semibold p-3 duration-300 hover:text-slate-300">
                Subscriptions
              </a>
            </Link>
          </li>
          {user ? (
            <li className="p-1 hover:text-slate-300">
              <button onClick={handleSignOut}>Sign out</button>
            </li>
          ) : null}
          <li className="flex justify-end">
            <Link href="/profile">
              <UserCircleIcon className="h-7 w-7 text-white hover:text-slate-300" />
            </Link>
          </li>
          <li className="pr-4 hover:text-slate-300">
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

export default Header;
