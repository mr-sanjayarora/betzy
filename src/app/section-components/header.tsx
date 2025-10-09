'use client';
import Image from "next/image";
import { Sora, Roboto } from "next/font/google";
import React, {useState, useEffect} from 'react'

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});


const Header = () => {
  const [mode, setMode] = useState<'sports' | 'casino'>('casino');
  const handleModeChange = (newMode: 'sports' | 'casino') => {
    setMode(newMode);
  }
  return (
    <div className='md:ml-72 ml-0 p-5'>
      <div className="navbar p-0">
        <div className="navbar-start flex gap-0">
          <a onClick={() => handleModeChange('sports')} className={`btn ${mode == 'sports' ? 'btn-primary' : 'btn-primary-outlined btn-gradient'} border-0 rounded-r-[0!important] ${sora.className}`}>Sports</a>
          <a onClick={() => handleModeChange('casino')} className={`btn ${mode == 'casino' ? 'btn-primary': 'btn-primary-outlined btn-gradient'} rounded-l-[0!important] ${sora.className}`}>Casino</a>
        </div>
        <div className="navbar-center hidden lg:flex w-1/2">
          <label className="input w-full cut-border">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className='w-full' placeholder="Search tables, players, or tournaments" />
          </label>
        </div>
        <div className="navbar-end flex gap-3">
          <button className="btn btn-primary-outlined btn-gradient"><Image src={'/static/img/bell.svg'} width={20} height={20} alt='notification' draggable={false}/></button>
          <a className={`btn btn-primary-outlined btn-gradient ${roboto.className} font-normal`}>Sign Up</a>
          <a className={`btn btn-primary ${roboto.className} font-normal`}>Sign In</a>
        </div>
      </div>
    </div>
  )
}

export default Header