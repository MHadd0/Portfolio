'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  const fullText = "Hi, I'm Matthew Haddad"
  const [displayedText, setDisplayedText] = useState('')
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    let index = 0

    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(intervalId)
        setIsFinished(true)
      }
    }, 90)

    return () => clearInterval(intervalId)
  }, [])

  const renderTypedText = () => {
    if (isFinished) {
      return (
        <>
          {"Hi, I'm "}
          <span className='text-blue-800'>Matthew</span> Haddad
        </>
      )
    }
    return displayedText
  }

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        {renderTypedText()}
      </h1>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Data Analyst</h3>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-sm bg-black text-white flex items-center gap2'>
          contact me <Image src={assets.right_arrow} alt='' className='w-4 mx-2' />
        </a>
      </div>
    </div>
  )
}

export default Header
