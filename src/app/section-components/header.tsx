import Image from "next/image";
import { Sora, Roboto } from "next/font/google";
import React from 'react'

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
  return (
    <div className='ms-[280px] p-5'>
      <div className="navbar">
        <div className="navbar-start flex gap-0">
          <a className={`btn btn-primary-outlined btn-gradient border-0 rounded-r-[0!important] ${sora.variable}`}>Sports</a>
          <a className={`btn btn-primary rounded-l-[0!important] ${sora.variable}`}>Casino</a>
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
          <Image className='me-2' src={'/static/img/bell.svg'} width={20} height={20} alt='notification'/>
          <a className={`btn btn-primary-outlined btn-gradient ${roboto.variable} font-normal`}>Sign Up</a>
          <a className={`btn btn-primary ${roboto.variable} font-normal`}>Sign In</a>
        </div>
      </div>
    </div>
  )
}

export default Header