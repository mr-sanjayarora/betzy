import React from 'react'
import Image from 'next/image'
import { Carter_One, Roboto } from "next/font/google";
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const carterOne = Carter_One({
  subsets: ["latin"],
  weight: "400", // Carter One only has 400
  variable: "--font-carter-one",
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Regular, Medium, Bold
  display: 'swap', // Optional but recommended
})

const Sidebar = () => {
  const isSelected = (item: string) => {
    return item === 'Poker'; // Example: 'Poker' is selected
  }
  return (
    <div className='md:w-72 -left-72 md:left-0 absolute h-full pl-3 pt-5'>
      <Image className='mb-6' src={'/static/img/logo.png'} width={150} height={100} alt='Brand Logo' draggable={false}/>
      <div className='menu bg-[#1b100e] rounded-xl w-full pb-5 relative'>
        <ul>
          <li>
            <h2 className={`menu-title ${carterOne.className} text-lg`}>Games</h2>
            <ul className={roboto.className}>
              <li className='menu-item cut-border'>
                <a className='flex items-center'>
                  <Image className='me-2' src={'/static/img/coin-flip.svg'} width={20} height={20} alt='coin' draggable={false}/>
                  <span className='text-base'>Coin flip</span>
                </a>
              </li>
              <li className={'menu-item cut-border btn-gradient' + (isSelected('Poker') ? ' selected' : '')}>
                <a className='flex items-center'>
                  <Image className='me-2' src={'/static/img/poker.svg'} width={20} height={20} alt='poker' draggable={false}/>
                  <span className='text-base'>Poker</span>
                </a>
              </li>
              <li className='menu-item cut-border'>
                <a className='flex items-center'>
                  <Image className='me-2' src={'/static/img/roulette.svg'} width={20} height={20} alt='roulette' draggable={false}/>
                  <span className='text-base'>Roulette</span>
                </a>
              </li>
              <li className='menu-item cut-border'>
                <a className='flex items-center'>
                  <Image className='me-2' src={'/static/img/crash.svg'} width={20} height={20} alt='crash' draggable={false}/>
                  <span className='text-base'>Crash</span>
                </a>
              </li>
              <li className='menu-item cut-border'>
                <a className='flex items-center'>
                  <Image className='me-2' src={'/static/img/mines.svg'} width={20} height={20} alt='mines' draggable={false}/>
                  <span className='text-base'>Mines</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h2 className={`menu-title ${carterOne.className} text-lg`}>Others</h2>
            <ul className={roboto.className}>
              <li className='menu-item cut-border'>
                <a className='flex items-center'>
                  <Image className='me-2' src={'/static/img/treasury.svg'} width={20} height={20} alt='treasury' draggable={false}/>
                  <span className='text-base'>Treasury</span>
                </a>
              </li>
              <li className='menu-item cut-border'>
                <a className='flex items-center'>
                  <Image className='me-2' src={'/static/img/promotions.svg'} width={20} height={20} alt='promotions' draggable={false}/>
                  <span className='text-base'>Promotions</span>
                </a>
              </li>
              <li className='menu-item cut-border'>
                <a className='flex items-center'>
                  <Image className='me-2' src={'/static/img/help.svg'} width={20} height={20} alt='help' draggable={false}/>
                  <span className='text-base'>Help & Support</span>
                </a>
              </li>
              <li className='menu-item cut-border'>
                <a className='flex items-center'>
                  <Image className='me-2' src={'/static/img/settings.svg'} width={20} height={20} alt='settings' draggable={false}/>
                  <span className='text-base'>Settings</span>
                </a>
              </li>
              <li className='menu-item cut-border'>
                <a className='flex items-center'>
                  <Image className='me-2' src={'/static/img/logout.svg'} width={20} height={20} alt='logout' draggable={false}/>
                  <span className='text-base'>Logout</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className='mt-10 flex'>
          <div className='w-1/2'>
            <Image className='transform scale-x-[-1] absolute bottom-0 left-0' draggable={false} src={'/static/img/sidebar.png'} width={140} height={100} alt='sidebar'/>
          </div>
          <div>
            <li>
              <a>
                <Instagram size={16}/> Instagram
              </a>
            </li>
            <li>
              <a>
                <Linkedin size={16}/> Linkedin
              </a>
            </li>
            <li>
              <a>
                <Twitter size={16}/> Twitter
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar