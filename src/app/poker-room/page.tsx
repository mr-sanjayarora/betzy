import React from 'react'
import Image from 'next/image'
import { Sora, Carter_One } from 'next/font/google'

const carterOne = Carter_One({
    subsets: ["latin"],
    weight: "400", // Carter One only has 400
    variable: "--font-carter-one",
});

const sora = Sora({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

const page = () => {
    return (
        <div>
            <div className='topbar flex justify-between items-start p-5'>
                <Image src={'/static/img/logo.png'} width={150} height={100} alt='Brand Logo' draggable={false} />
                <div className='flex-col items-center hidden md:flex'>
                    <ul className={`menu menu-horizontal bg-base-200 rounded-box ${sora.className} text-xs cut-border bg-gradient`}>
                        <li>
                            <a>
                                <Image src={'/static/img/casino-chips.svg'} className='inline' width={20} height={20} alt='' draggable={false} />
                                <span>100/500</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Image src={'/static/img/player-name.svg'} className='inline' width={20} height={20} alt='' draggable={false} />
                                <span>Alfred Derek</span>
                            </a>
                        </li>
                        <li className='w-24'></li>
                        <li>
                            <a>
                                <Image src={'/static/img/group.svg'} className='inline' width={20} height={20} alt='' draggable={false} />
                                <span>6/8</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Image src={'/static/img/cards.svg'} className='inline' width={20} height={20} alt='' draggable={false} />
                                <span>Game Rule</span>
                            </a>
                        </li>
                    </ul>
                    <div className='player-name mt-2'>
                        <h2 className={`mt-1 ${carterOne.className} italic text-lg text-primary flex items-center`}>
                            <Image src={'/static/img/spade.svg'} className='inline me-1' width={20} height={0} alt='' draggable={false} />
                            TurboJax
                        </h2>
                    </div>
                </div>
                <ul className="menu bg-base-200 rounded-box navigation hidden md:block bg-gradient border border-t-2 border-b-2">
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
            <div className='table'>
                
            </div>
            <div className='footer-bar flex flex-row items-center md:gap-8 gap-4 absolute bottom-5 left-1/2 -translate-x-1/2'>
                <div className='md:flex gap-2 hidden'>
                    <button className={`btn uppercase ${sora.className} w-28 h-14 text-sm skew-x-6 rounded-md bg-gradient border-l-0`}>Min</button>
                    <button className={`btn uppercase ${sora.className} w-28 h-14 text-sm skew-x-6 rounded-md bg-gradient border-l-0`}>Half</button>
                </div>
                <div className='flex gap-2 items-baseline-last'>
                    <button className={`btn uppercase ${sora.className} md:w-28 md:h-14 md:text-sm text-xs skew-x-6 rounded-md bg-gradient border-l-0`}>Check</button>
                    <div className='flex flex-col text-center'>
                        <span className={`uppercase ${sora.className} mb-4 text-xs`}>Win: $3,74.0</span>
                        <button className={`btn uppercase ${sora.className} md:w-40 md:h-14  md:text-sm text-xs skew-x-6 rounded-md bg-red`}>Fold</button>
                    </div>
                </div>
                <div className='player-name md:w-36 w-26 flex flex-col justify-center items-center text-center '>
                    <div className='w-20 md:w-36 h-20 md:h-36 bg-gradient rounded-full overflow-hidden border'>
                        <Image src={'/static/img/player1.png'} width={141} height={141} alt='' />
                    </div>
                    <h2 className={`mt-1 text-lg`}>
                        <span className={`${carterOne.className} `}>Dazz</span>{' '}<span className={`text-white ${sora.className} text-sm`}>(You)</span>
                    </h2>
                </div>
                <div className='flex gap-2 items-baseline-last'>
                    <div className='flex flex-col text-center'>
                        <span className={`uppercase ${sora.className} mb-4 text-xs`}>Bet: $1,44.0</span>
                        <button className={`btn uppercase ${sora.className} md:w-40 md:h-14 md:text-sm text-xs -skew-x-6 rounded-md bg-yellow`}>Rise</button>
                    </div>
                    <button className={`btn uppercase ${sora.className} md:w-28 md:h-14 md:text-sm text-xs -skew-x-6 rounded-md bg-gradient border-r-0`}>Call</button>
                </div>
                <div className='md:flex gap-2 hidden items-baseline-last'>
                    <button className={`btn uppercase ${sora.className} w-28 h-14 text-sm -skew-x-6 rounded-md bg-gradient border-r-0`}>Pot</button>
                    <button className={`btn uppercase ${sora.className} w-28 h-14 text-sm -skew-x-6 rounded-md bg-gradient border-r-0`}>All In</button>
                </div>
            </div>
        </div>
    )
}

export default page