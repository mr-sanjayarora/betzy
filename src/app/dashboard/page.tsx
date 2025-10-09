'use client'

import React from 'react'
import { Sora, Quicksand, Carter_One } from 'next/font/google'
import Card, { CardData } from '../components/Card'
import PokerRoom from '../components/PokerRoom'
import Image from 'next/image'
import cardsData from '../../data/cards.json' // import JSON

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const carterOne = Carter_One({
  subsets: ["latin"],
  weight: "400", // Carter One only has 400
  variable: "--font-carter-one",
});

const Page = () => {
  const handleJoin = (id: number) => {
    alert(`Joining table #${id}`)
  }

  // Ensure TypeScript knows the type
  const cards: CardData[] = cardsData as CardData[]

  return (
    <div className="">
      <div className='flex justify-between items-center'>
        <div className=''>
          <h2 className={`${sora.className} font-semibold text-xl`}>
            Live <span className="text-primary font-bold">Betzy</span> Poker Games
          </h2>
          <p className={`${sora.className} text-sm mb-4`}>
            Join public games happening right now!
          </p>
        </div>
        <div className=''>
          <button className="btn btn-primary-outlined btn-gradient py-6 me-2"><Image src={'/static/img/setting.svg'} width={20} height={20} alt='notification' draggable={false}/></button>
          <button className={`btn btn-primary py-6 ${sora.className} font-normal`}>+ Create Room</button>
        </div>
      </div>

      <p className={`${quicksand.className} text-lg`}>Showing <span className='font-bold text-primary'>{cards.length}</span> results.</p>

      <div className='md:flex flex-col md:flex-row items-start justify-between gap-4 mt-3'>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[100vh] overflow-y-auto">
          {cards.map((card) => (
            <Card key={card.id} data={card} onJoin={handleJoin} />
          ))}
        </div>
        <div className='md:w-1/3 btn-primary-outlined rounded-3xl p-6 mt-5 md:mt-0 poker-room-info h-[90vh] relative'>
          <PokerRoom sora={carterOne} quicksand={quicksand} />
        </div>
      </div>
    </div>
  )
}

export default Page