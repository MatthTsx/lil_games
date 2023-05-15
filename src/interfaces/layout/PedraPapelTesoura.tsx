import React from 'react'
import { _2Props } from '../providers/Screen'

function PedraPapelTesoura({...Props} : _2Props) {
  return (
    <div className='w-full h-full'>
      <button onClick={() => Props.func(0)}>Home</button>
    </div>
  )
}

export default PedraPapelTesoura