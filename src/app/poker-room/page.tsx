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
                <div className=''>
                    <Image src={'/static/img/logo.png'} className='absolute' width={150} height={100} alt='Brand Logo' draggable={false} />
                </div>
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
                <div>
                    <ul className="absolute right-5 menu bg-base-200 rounded-box navigation hidden md:block bg-gradient border border-t-2 border-b-2">
                        <li>
                            <a>
                                <Image src={'/static/img/buttons/burger-bar.svg'} width={18} height={18} alt='Menu' />
                            </a>
                        </li>
                        <span className='divider'></span>
                        <li>
                            <a>
                                <Image src={'/static/img/buttons/stats.svg'} width={18} height={18} alt='Stats' />
                            </a>
                        </li>
                        <span className='divider'></span>
                        <li>
                            <a>
                                <Image src={'/static/img/buttons/poker.svg'} width={18} height={18} alt='Stats' />
                            </a>
                        </li>
                        <span className='divider'></span>
                        <li>
                            <a>
                                <Image src={'/static/img/buttons/chat.svg'} width={18} height={18} alt='Stats' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='game-table flex items-center justify-center xl:h-[calc(100vh-15vh)] h-[calc(100vh-30vh)] absolute top-0 left-0 w-full -translate-0'>
                <div className='relative z-20 w-[calc(1000px-40px)] h-full'>
                    <div className='absolute left-0 top-1/2 -translate-y-1/2'>
                        <div className='text-center flex flex-col items-center'>
                            <Image src={'/static/img/player3.png'} width={80} height={80} alt='player 1' />
                            <div className='bg-player p-1 h-16 w-20 -mt-2 z-30 relative'>
                                <span className={`${sora.className} text-xs`}>Ella</span>
                                <h2 className={`${carterOne.className} text-sm`}>12000</h2>
                            </div>
                        </div>
                    </div>
                    <div className='absolute left-60 top-20'>
                        <div className='text-center flex flex-col items-center'>
                            <Image src={'/static/img/player2.png'} width={80} height={80} alt='player 1' />
                            <div className='bg-player p-1 h-16 w-20 -mt-2 z-30 relative'>
                                <span className={`${sora.className} text-xs`}>Zoe</span>
                                <h2 className={`${carterOne.className} text-sm`}>12000</h2>
                            </div>
                        </div>
                    </div>
                    <div className='absolute right-60 top-20'>
                        <div className='text-center flex flex-col items-center'>
                            <Image src={'/static/img/player3.png'} width={80} height={80} alt='player 1' />
                            <div className='bg-player p-1 h-16 w-20 -mt-2 z-30 relative'>
                                <span className={`${sora.className} text-xs`}>Theo</span>
                                <h2 className={`${carterOne.className} text-sm`}>12000</h2>
                            </div>
                        </div>
                    </div>
                    <div className='absolute right-0 top-1/2 -translate-y-1/2'>
                        <div className='text-center flex flex-col items-center'>
                            <Image src={'/static/img/player4.png'} width={80} height={80} alt='player 1' />
                            <div className='bg-player p-1 h-16 w-20 -mt-2 z-30 relative'>
                                <span className={`${sora.className} text-xs`}>You</span>
                                <h2 className={`${carterOne.className} text-sm`}>12000</h2>
                            </div>
                        </div>
                    </div>
                    <div className='absolute left-60 bottom-15'>
                        <div className='text-center flex flex-col items-center'>
                            <Image src={'/static/img/player5.png'} width={80} height={80} alt='player 1' />
                            <div className='bg-player p-1 h-16 w-20 -mt-2 z-30 relative'>
                                <span className={`${sora.className} text-xs`}>Sophie</span>
                                <h2 className={`${carterOne.className} text-sm`}>12000</h2>
                            </div>
                        </div>
                    </div>
                    <div className='absolute right-60 bottom-15'>
                        <div className='text-center flex flex-col items-center'>
                            <Image src={'/static/img/player1.png'} width={80} height={80} alt='player 1' />
                            <div className='bg-player p-1 h-16 w-20 -mt-2 z-30 relative'>
                                <span className={`${sora.className} text-xs`}>Harper</span>
                                <h2 className={`${carterOne.className} text-sm`}>12000</h2>
                            </div>
                        </div>
                    </div>
                    <div className="radial-progress absolute -right-20 top-1/2 -translate-y-1/2" style={{"--value": 50, "--thickness": "0.3rem"}} aria-valuenow={50} role="progressbar">
                        <div className='flex flex-col items-center'>
                            <Image src={'/static/img/timer.svg'} width={15} height={5} alt=''/>
                            <span className={`${carterOne.className} text-[10px] text-center mt-1 leading-3`}>16<br/>Sec</span>
                        </div>
                    </div>
                </div>
                <div className='absolute left-1/2 top-1/2 -translate-1/2 cards flex gap-2 z-10'>
                    <div className='w-20 h-28 border rounded-md border-dashed text-xs flex justify-center items-center'>
                        card 1
                    </div>
                    <div className='w-20 h-28 border rounded-md border-dashed text-xs flex justify-center items-center'>
                        card 2
                    </div>
                    <div className='w-20 h-28 border rounded-md border-dashed text-xs flex justify-center items-center'>
                        card 3
                    </div>
                    <div className='w-20 h-28 border rounded-md border-dashed text-xs flex justify-center items-center'>
                        card 4
                    </div>
                    <div className='w-20 h-28 border rounded-md border-dashed text-xs flex justify-center items-center'>
                        card 5
                    </div>
                </div>
                <div className='absolute z-0'>
                    <Image src={'/static/img/table-bed.svg'} width={1000} height={100} alt='poker-table' />
                </div>
            </div>
            <div className='footer-bar flex flex-row items-center md:gap-8 gap-4 absolute bottom-2 left-1/2 -translate-x-1/2'>
                <div className='md:flex gap-2 hidden'>
                    <button className={`btn uppercase ${sora.className} w-28 h-14 text-sm btn-room-left`}>Min</button>
                    <button className={`btn uppercase ${sora.className} w-28 h-14 text-sm btn-room-left`}>Half</button>
                </div>
                <div className='flex gap-2 items-baseline-last'>
                    <button className={`btn uppercase ${sora.className} md:w-28 md:h-14 md:text-sm text-xs btn-room-left`}>Check</button>
                    <div className='flex flex-col text-center'>
                        <span className={`uppercase ${sora.className} mb-4 text-xs btn-room py-2`}>Win: $3,74.0</span>
                        <button className={`btn uppercase ${sora.className} md:w-40 md:h-14  md:text-sm text-xs btn-fold`}>Fold</button>
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
                        <span className={`uppercase ${sora.className} mb-4 text-xs btn-room-left py-2`}>Bet: $1,44.0</span>
                        <button className={`btn uppercase ${sora.className} md:w-40 md:h-14 md:text-sm text-xs btn-rise`}>Rise</button>
                    </div>
                    <button className={`btn uppercase ${sora.className} md:w-28 md:h-14 md:text-sm text-xs btn-room`}>Call</button>
                </div>
                <div className='md:flex gap-2 hidden items-baseline-last'>
                    <button className={`btn uppercase ${sora.className} w-28 h-14 text-sm btn-room`}>Pot</button>
                    <button className={`btn uppercase ${sora.className} w-28 h-14 text-sm btn-room`}>All In</button>
                </div>
            </div>
        </div>
    )
}

export default page