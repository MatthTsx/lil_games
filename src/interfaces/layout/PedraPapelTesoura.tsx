import React from 'react'
import { _2Props } from '../providers/Screen'
import * as PPT from '~/scripts/PPT'

function PedraPapelTesoura({...Props} : _2Props) {
  return (
    <div className='w-full h-full'>
      <button onClick={() => Props.func(0)}>Home</button>
      <button onClick={() => PPT.getPPT({choice: 1})}>a</button>
    </div>
  )
}

export default PedraPapelTesoura