"use client"
import { useState, useEffect, useRef, useCallback } from 'react';
import { signOut } from "../actions/auth.actions"
import { useRouter } from "next/navigation";

export function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownToggleRef = useRef<HTMLButtonElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const handleSignout = async () => {
    try {
      await signOut();
      return new Promise((resolve) => {
        setTimeout(() => {
          router.push('/home');
          resolve(null);
        }, 0);
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleDropdownToggle = useCallback(() => {
    setDropdownOpen(!dropdownOpen);
  }, [dropdownOpen]);

  useEffect(() => {
    if (dropdownToggleRef.current) {
      dropdownToggleRef.current.addEventListener('click', handleDropdownToggle);
    }

    return () => {
      if (dropdownToggleRef.current) {
        dropdownToggleRef.current.removeEventListener('click', handleDropdownToggle);
      }
    };
  }, [handleDropdownToggle]);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown" >
            <ul style ={{position:'absolute', zIndex:1,marginLeft: '74em', marginTop:'20px'}} className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  ref={dropdownToggleRef}
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Account
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  ref={dropdownMenuRef}
                  style={{
                    display: dropdownOpen ? 'block' : 'none',
                    zIndex:1000
                  }}
                  className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        History
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      onClick={(evt) => {
                        handleSignout().then(() => {
                          evt.preventDefault();
                        });
                      }}
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

