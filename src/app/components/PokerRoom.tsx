'use client';
import Image from 'next/image'
import React, {useState} from 'react'

interface RoomProps {
    sora: {
        className: string
    }
    quicksand: {
        className: string
    }
}

const PokerRoom: React.FC<RoomProps> = ({ sora, quicksand }) => {
    const [mode, setMode] = useState<'table' | 'group'>('table');
      const handleModeChange = (newMode: 'table' | 'group') => {
        setMode(newMode);
      }
    return (
        <div className='z-50 relative'>
            <h2 className={`${sora.className} font-semibold italic text-primary text-xl mb-2 flex items-center`}><Image src={'/static/img/spade.svg'} className='inline me-1' width={20} height={0} alt='' draggable={false}/> TurboJax</h2>
            <p className={`${quicksand.className} text-xs text-gray-400`}>Room id: <span className='underline'>ABHJNE129KPM</span></p>
            <p className={`${quicksand.className} text-xs text-gray-400`}>Open to all</p>
            <div className="mt-1 w-full flex gap-0 relative">
                <a onClick={() => handleModeChange('group')} className={`btn py-6 font-normal ${mode == 'group' ? 'btn-primary' : 'btn-primary-outlined btn-gradient'} w-1/2 py-4 border-0 rounded-r-[0!important] ${sora.className}`}>Group View</a>
                <span className='btn-primary w-3 h-3 absolute rotate-45 top-1/2 left-1/2 -translate-1/2 btn-separator'></span>
                <a onClick={() => handleModeChange('table')} className={`btn py-6 font-normal ${mode == 'table' ? 'btn-primary': 'btn-primary-outlined btn-gradient'} w-1/2 rounded-l-[0!important] ${sora.className}`}>Table View</a>
            </div>
        </div>
    )
}

export default PokerRoom