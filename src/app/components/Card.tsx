import React from 'react'
import Image from 'next/image'
import { Quicksand, Carter_One } from 'next/font/google'

const carterOne = Carter_One({
  subsets: ["latin"],
  weight: "400", // Carter One only has 400
  variable: "--font-carter-one",
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// Match your JSON structure
export interface CardData {
  id: number
  title: string
  blinds: string
  player: string
  seats: string
  image: string
  joinable: boolean
}

interface CardProps {
  data: CardData
  onJoin?: (id: number) => void
}

const Card: React.FC<CardProps> = ({ data, onJoin }) => {
  const { id, title, blinds, player, seats, image, joinable } = data

  return (
    <div
      className={`${quicksand.className} relative card text-white rounded-2xl p-2 border border-[#2C1A1A]
      shadow-[0_0_15px_rgba(255,0,0,0.15)] hover:shadow-[0_0_25px_rgba(255,80,0,0.4)]
      transition-all duration-300 group overflow-hidden btn-primary-outlined`}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>

      {/* Title + Blinds */}
      <div className="relative z-10">
        <h2 className={`mt-1 ${carterOne.className} italic text-lg text-primary flex items-center`}>
          <Image src={'/static/img/spade.svg'} className='inline me-1' width={20} height={0} alt='' draggable={false}/>
          {title}
        </h2>
      </div>

      {/* Player Info */}
      <div className="text-sm mb-8 text-white mt-2 relative z-10">
        <p className='font-semibold'><Image src={'/static/img/casino-chips.svg'} className='inline me-1' width={16} height={16} alt='' draggable={false}/> {blinds}</p>
        <p className='mt-2 text-xs'><Image src={'/static/img/player-name.svg'} className='inline me-1' width={16} height={16} alt='' draggable={false}/> {player}</p>
        <p className='mt-2 text-xs'><Image src={'/static/img/group.svg'} className='inline me-1' width={16} height={16} alt='' draggable={false}/> {seats}</p>
      </div>

      {/* Image Section */}
      <div className="absolute -bottom-4 right-0 mb-4 z-10">
        <Image
          src={`/static/img${image}`}
          alt={title}
          width={140}
          height={120}
          draggable={false}
          className="rounded-xl object-contain"
        />
      </div>

      {/* Join Button */}
      <button
        disabled={!joinable}
        onClick={() => joinable && onJoin?.(id)}
        className={`relative text-xs z-10 mt-4 w-14 py-2 rounded-lg font-medium 
          transition-all duration-200 text-white bg-gradient-to-t from-[#FF4500] to-[#FF2200] hover:brightness-110 cursor-pointer`}
      >
        Join
      </button>
    </div>
  )
}

export default Card