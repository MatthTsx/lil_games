import React from 'react'
import { _2Props } from '../providers/Screen'
import { Buttons } from '~/constants/HomeButtons'

export interface Props extends _2Props{
  color: string
}

function Home({...Props} : Props) {
  return (
    <>
      <div className='fixed w-full h-full z-[-100000000] top-0'
      style={{
        backgroundColor: Props.color
      }}/>

      <div className='flex flex-col w-full h-full justify-center items-center gap-4'>
        <div className='absolute flex flex-col justify-center items-center gap-4 right-8 bottom-8'>
          {Buttons.map((B,i) => (
            <button key={i} onClick={() => Props.func(B.value)}
            className= '_Buttons peer'
            style={{
              marginRight: `${i * 5}rem`
            }}
            >{B.name}</button>
          ))}
          <div className='peer-hover:opacity-50 top-48 left-48 transition-all duration-500 blur-3xl w-64 h-72 absolute z-[-1]
          peer-hover:top-16 peer-hover:left-16 opacity-0 bg-gradient-to-br from-cyan-400 to-blue-500'/>
        </div>
      </div>
    </>
  )
}

export default Home