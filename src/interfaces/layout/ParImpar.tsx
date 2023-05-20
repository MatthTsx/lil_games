import React, { useState } from 'react'
import { _2Props } from '../providers/Screen'
import getParOrImpar, { P, P_ } from '~/scripts/ParImpar'
import HomeButton from './HomeButton'

function ParImpar({...Props} : _2Props) {
  const [IP, setIP] = useState<P_>()
  const [value, setValue] = useState<number>(0)
  const [IPchoice, setIPchoice] = useState<P>(P.Impar)

  return (
    <div className='w-full h-full absolute justify-center items-center flex'>
      <HomeButton func={Props.func}/>
      <div className='items-center justify-center flex flex-col gap-y-4 absolute bottom-8'>
        <div className='flex items-center justify-center gap-4'>
          <span className='text-xl bg-black text-orange-400 p-2 py-1 rounded-md w-16 text-center'>
            {IP ? IP.value < 10 ? "0" + IP?.value : IP?.value : 0}
          </span>
          <span className='text-xl bg-black text-orange-400 p-2 py-1 rounded-md w-16 text-center'>
            {IP?.winner == 1? "win" : "lose"}</span>
        </div>

        <div className='flex items-center justify-center gap-2'>
          <button className='w-8 h-8 flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100 transition-all
          scale-95 hover:scale-105' disabled={value >= 10}
          onClick={() => setValue(value + 1)}>
            <div className='w-1.5 h-6 bg-green-400 absolute rounded-sm'/>
            <div className='w-1.5 h-6 bg-green-500 rotate-90 rounded-sm'/>
          </button>
          <p className='text-xl w-10 h-10 bg-black flex items-center justify-center text-orange-400
          rounded-lg'>{value}</p>
          <button className='w-8 h-8 flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100 transition-all
          scale-95 hover:scale-105' onClick={() => setValue(value - 1)}
          disabled={value <= 0}>
            <div className='bg-red-500 w-1.5 h-6 rotate-90 rounded-sm'/>
          </button>
        </div>
        <div className='flex gap-4 items-center justify-center'>
          <button className={`_IPButton ${IPchoice == P.Par && '_IPBtnActivate'}`} onClick={() => setIPchoice(P.Par)} disabled={IPchoice == P.Par}>Par</button>
          <button onClick={() => setIP(getParOrImpar(value, IPchoice))}
          className='_IPButton opacity-100 hover:opacity-100'>Check</button>
          <button className={`_IPButton ${IPchoice == P.Impar && '_IPBtnActivate'}`} onClick={() => setIPchoice(P.Impar)} disabled={IPchoice == P.Impar}>Impar</button>
        </div>
      </div>
    </div>
  )
}

export default ParImpar