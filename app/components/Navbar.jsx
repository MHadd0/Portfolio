'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const sideMenuRef = useRef()

 
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)"
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)"
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
    className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
    ${isScroll ? "bg-white dark:bg-[var(--background)] backdrop-blur shadow-sm" : ""}`}
    >
    <a href="#top">
        <Image src={assets.logo} alt='' className='w-28 cursor-pointer mr-14' />
    </a>

    <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-sm px-12 py-3 
        ${isScroll ? "" : "bg-white dark:bg-[var(--background)] shadow-sm"}`}
    >
        <li><a className='font-Ovo text-black dark:text-[var(--text)]' href="#top">Home</a></li>
        <li><a className='font-Ovo text-black dark:text-[var(--text)]' href="#about">About me</a></li>
        <li><a className='font-Ovo text-black dark:text-[var(--text)]' href="#projects">Projects</a></li>
        <li><a className='font-Ovo text-black dark:text-[var(--text)]' href="#contact">Contact Me</a></li>
    </ul>

    <div className='flex items-center gap-8'>
        {/* Dark Mode Toggle */}
        <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full"
        >
        {isDarkMode ? (
            <Image src={assets.sun_icon} alt="Light Mode" className="w-6" />
        ) : (
            <Image src={assets.moon_icon} alt="Dark Mode" className="w-6" />
        )}
        </button>

        <a
        className='hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-sm 
                    border border-gray-500 text-gray-900  bg-white 
                    hover:bg-gray-100 hover:border-gray-700'
        href="#contact"
        >
        Contact <Image src={assets.arrow_icon} alt='' className='w-3' />
        </a>

        <button className='block md:hidden ml-3' onClick={openMenu}>
        <Image src={assets.menu_black} alt='' className='w-6 ' />
        <Image src={assets.menu_white} alt='' className='w-6 hidden ' />
        </button>
    </div>

    {/* ---------Mobile Menu---------- */}
    <ul
        ref={sideMenuRef}
        className='flex md:hidden flex-col gap-4 py-20 px-10 fixed 
        -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-100  transition duration-500'
    >
        <div className='absolute right-6 top-6' onClick={closeMenu}>
        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer ' />
        <Image src={assets.close_white} alt='' className='w-5 cursor-pointer hidden ' />
        </div>

        <li><a className='font-Ovo text-black' onClick={closeMenu} href="#top">Home</a></li>
        <li><a className='font-Ovo text-black' onClick={closeMenu} href="#about">About me</a></li>
        <li><a className='font-Ovo text-black' onClick={closeMenu} href="#projects">Projects</a></li>
        <li><a className='font-Ovo text-black' onClick={closeMenu} href="#contact">Contact Me</a></li>
    </ul>
    </nav>

  )
}

export default Navbar
