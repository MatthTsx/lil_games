import React from 'react'
import type { _2Props } from '../providers/Screen'
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
        <div className='absolute flex flex-col justify-center items-center gap-4 w-full group -bottom-2'>
          <div className='flex  justify-center items-center gap-4 w-full -bottom-12 absolute opacity-45
          group-hover:opacity-100 group-hover:bottom-8 transition-all duration-300'>
            <div className='w-[125%] h-72 bg-gradient-to-t from-black to-transparent absolute via-black blur-2xl'/>

            {Buttons.map((B,i) => (
              <button key={i} onClick={() => Props.func(B.value)}
              className= '_Buttons peer'
              >{B.name}</button>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home