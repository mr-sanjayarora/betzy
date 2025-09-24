import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='md:w-[250px] -left-[250px] md:left-0 fixed h-full p-5'>
        <Image className='mb-6' src={'/static/img/logo.png'} width={150} height={100} alt='Brand Logo'/>
        <div className='gradient-border-container sidebar'>
            <h2 className='p-4 pb-0'>Games</h2>
            <div className='p-4 grid gap-2'>
                <span className='flex p-2 gap-4 border border-gray-500 bg-[#ffffff1a]'>
                    <Image src={'/static/img/card.png'} width={20} height={20} alt='card'/>
                    Coin flip
                </span>
                <span className='flex p-2 gap-4 border border-gray-500 bg-[#ffffff1a]'>
                    <Image src={'/static/img/card.png'} width={20} height={20} alt='card'/>
                    Poker
                </span>
                <span className='flex p-2 gap-4 border border-gray-500 bg-[#ffffff1a]'>
                    <Image src={'/static/img/card.png'} width={20} height={20} alt='card'/>
                    Roulette
                </span>
                <span className='flex p-2 gap-4 border border-gray-500 bg-[#ffffff1a]'>
                    <Image src={'/static/img/card.png'} width={20} height={20} alt='card'/>
                    Crash
                </span>
                <span className='flex p-2 gap-4 border border-gray-500 bg-[#ffffff1a]'>
                    <Image src={'/static/img/card.png'} width={20} height={20} alt='card'/>
                    Mines
                </span>
            </div>
            <h2 className='p-4 pb-0'>Others</h2>
            <div className='p-4 grid gap-2'>
                <span className='flex p-2 gap-4 border border-gray-500 bg-[#ffffff1a]'>
                    <Image src={'/static/img/card.png'} width={20} height={20} alt='card'/>
                    Treasury
                </span>
                <span className='flex p-2 gap-4 border border-gray-500 bg-[#ffffff1a]'>
                    <Image src={'/static/img/card.png'} width={20} height={20} alt='card'/>
                    Promotions
                </span>
                <span className='flex p-2 gap-4 border border-gray-500 bg-[#ffffff1a]'>
                    <Image src={'/static/img/card.png'} width={20} height={20} alt='card'/>
                    Help & Support
                </span>
                <span className='flex p-2 gap-4 border border-gray-500 bg-[#ffffff1a]'>
                    <Image src={'/static/img/card.png'} width={20} height={20} alt='card'/>
                    Settings
                </span>
                <span className='flex p-2 gap-4 border border-gray-500 bg-[#ffffff1a]'>
                    <Image src={'/static/img/card.png'} width={20} height={20} alt='card'/>
                    Logout
                </span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar