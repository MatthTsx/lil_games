import React, { useState } from 'react'
import { _2Props } from '../providers/Screen'
import getParOrImpar, { P, P_ } from '~/scripts/ParImpar'

function ParImpar({...Props} : _2Props) {
  const [IP, setIP] = useState<P_>()
  const [value, setValue] = useState<number>(0)

  return (
    <div className='w-full h-full'>
      <button onClick={() => Props.func(0)}>Home</button>
      <button onClick={() => setIP(getParOrImpar(value))}>Aq</button>
      <input type='number' onChange={(e) => setValue(parseInt(e.target.value))}/>
      <div>o programa escolhei: {IP?.value} e vc {IP?.escolha == IP?.resp ? "perdeu" : "ganhou"}</div>
    </div>
  )
}

export default ParImpar