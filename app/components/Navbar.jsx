'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [theme, setTheme] = useState("light")
  const sideMenuRef = useRef()

  // 🌓 Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    }
  }, [])

  // 🔘 Theme toggle function
  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)"
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)"
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? "bg-white/50 dark:bg-gray-900/60 backdrop-blur shadow-sm" : ""}`}
      >
        <a href="#top">
          <Image src={assets.logo} alt='' className='w-28 cursor-pointer mr-14' />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-sm px-12 py-3 
          ${isScroll ? "" : "bg-white/50 dark:bg-gray-900/60 shadow-sm"}`}
        >
          <li><a className='font-Ovo dark:text-white' href="#top">Home</a></li>
          <li><a className='font-Ovo dark:text-white' href="#about">About me</a></li>
          <li><a className='font-Ovo dark:text-white' href="#projects">Projects</a></li>
          <li><a className='font-Ovo dark:text-white' href="#contact">Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-8'>
          {/* 🌓 Dark Mode Toggle */}
          <button onClick={toggleTheme}>
            <Image
              src={theme === "light" ? assets.moon_icon : assets.sun_icon}
              alt="theme toggle"
              className="w-6 cursor-pointer"
            />
          </button>

          <a
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-sm dark:border-gray-300 dark:text-white'
            href="#contact"
          >
            Contact <Image src={assets.arrow_icon} alt='' className='w-3' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6 dark:invert' />
          </button>
        </div>

        {/* ---------Mobile Menu---------- */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed 
          -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-100 dark:bg-gray-900 transition duration-500'
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer dark:invert' />
          </div>

          <li><a className='font-Ovo dark:text-white' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo dark:text-white' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo dark:text-white' onClick={closeMenu} href="#projects">Projects</a></li>
          <li><a className='font-Ovo dark:text-white' onClick={closeMenu} href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
