import React, { useEffect } from 'react'
import type { _2Props } from '../providers/Screen'
import * as PPT from '~/scripts/PPT'
import HomeButton from './HomeButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandBackFist, faHand, faHandScissors } from '@fortawesome/free-solid-svg-icons'
import { sleep } from '~/scripts/utils'

function PedraPapelTesoura({...Props} : _2Props) {
  const [choice, setChoice] = React.useState<PPT.Choice>(PPT.Choice.rock)
  const [resp, setResp] = React.useState<PPT.resp>();
  const [showResp, setShowResp] = React.useState(false)

  useEffect(() => {
    if(!showResp) return
    sleep(1000).then(() => setShowResp(false) )
  }, [showResp])

  return (
  <div className='w-full h-full absolute justify-center items-center flex'>
      <HomeButton func={Props.func}/>

    {resp?.winner && showResp &&
    <div className='absolute top-8 font-semibold text-2xl _WinStatusPPT'>
      {resp.winner == 1 ? "won" : resp.winner == 2 ? "tied" : "lost"}
    </div>
    }

    <div className={`${showResp && 'blurAnimation'}`}>
      {resp?.choice && 
      <FontAwesomeIcon icon={resp.choice == 1 ? faHandBackFist : resp.choice == 2 ? faHand : faHandScissors} className='w-8 h-8'/>
      }
    </div>

    <div className='flex gap-4 absolute w-full bottom-4 items-center justify-center'>
      <div className='flex gap-4'>
        {[...Array(3)].map((i, k) => (
          <button key={k} className='border p-3 border-black flex items-center justify-center transition-all
          border-dotted scale-100 hover:scale-105 bg-red-500 overflow-hidden opacity-50 w-16 h-16'
          style={{
            opacity: `${choice == k + 1 ? "1" : "0.5"}`,
          }}
          onClick={() => setChoice(k + 1)}>
            <div className='absolute w-full h-full bg-orange-500 blur-lg -z-10'/>
            <FontAwesomeIcon icon={k == 0 ? faHandBackFist : k == 1 ? faHand : faHandScissors} className='w-8 h-8'/>
          </button>
        ))}
      </div>
    </div>


    <button onClick={() => {
      setResp( PPT.getPPT({choice}) )
      setShowResp( true )
    }}
    className='absolute bottom-8 right-8 text-lg font-bold px-3 py-1.5
    bg-red-500 rounded-2xl cursor-pointer opacity-80 hover:opacity-100 transition-all scale-95 hover:scale-105
    flex items-center justify-center overflow-hidden'
    disabled={showResp}>
      <div className='absolute w-full h-full bg-orange-500 blur-lg -z-10'/>
      Play
    </button>
  </div>
  )
}

export default PedraPapelTesoura