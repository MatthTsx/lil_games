import React from 'react'
import { _2Props } from '../providers/Screen'
import GetMegaNumbers from '~/scripts/MegaSena'

function Megasena({...Props} : _2Props) {
  return (
    <>
      
      <div className='w-full h-full'>
        <button onClick={() => Props.func(0)}>Home</button>
        <button onClick={() => console.log(GetMegaNumbers())}>Array</button>
      </div>
    </>
  )
}

export default Megasena