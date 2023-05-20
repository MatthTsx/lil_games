import React, { type Dispatch, type SetStateAction } from 'react'
import GetScreen from '../layout/getScreen'

export interface _2Props {
    id : number
    func: Dispatch<SetStateAction<number>>
}

function Screen({...Props} : _2Props) {

  return (
    <>
      <div className='absolute h-screen w-screen top-0 overflow-hidden'>
          <GetScreen {...Props}/>
      </div>
    </>
  )
}

export default Screen