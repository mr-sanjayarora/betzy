import React from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const page = () => {
    return (
        <div>
            <div className='flex justify-between items-start p-5'>
                <Image src={'/static/img/logo.png'} width={150} height={100} alt='Brand Logo' draggable={false} />
                <div className=''>
                    <ul className={`menu menu-horizontal bg-base-200 rounded-box ${sora.className} text-xs cut-border`}>
                        <li>
                            <a>
                                <Image src={'/static/img/casino-chips.svg'} className='inline' width={20} height={20} alt='' draggable={false}/>
                                <span>100/500</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Image src={'/static/img/player-name.svg'} className='inline' width={20} height={20} alt='' draggable={false}/>
                                <span>Alfred Derek</span>
                            </a>
                        </li>
                        <li></li>
                        <li>
                            <a>
                                <Image src={'/static/img/group.svg'} className='inline' width={20} height={20} alt='' draggable={false}/>
                                <span>6/8</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Image src={'/static/img/cards.svg'} className='inline' width={20} height={20} alt='' draggable={false}/>
                                <span>Game Rule</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className="menu bg-base-200 rounded-box navigation">
                    <li>
                        <a>
                            <Image src={'/static/img/buttons/burger-bar.svg'} width={24} height={24} alt='Menu' />
                        </a>
                    </li>
                    <span className='divider'></span>
                    <li>
                        <a>
                            <Image src={'/static/img/buttons/stats.svg'} width={24} height={24} alt='Stats' />
                        </a>
                    </li>
                    <span className='divider'></span>
                    <li>
                        <a>
                            <Image src={'/static/img/buttons/poker.svg'} width={24} height={24} alt='Stats' />
                        </a>
                    </li>
                    <span className='divider'></span>
                    <li>
                        <a>
                            <Image src={'/static/img/buttons/chat.svg'} width={24} height={24} alt='Stats' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default page