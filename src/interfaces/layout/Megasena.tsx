import React, { useEffect } from 'react'
import { _2Props } from '../providers/Screen'
import GetMegaNumbers from '~/scripts/MegaSena'
import HomeButton from './HomeButton'
import { sleep } from '~/scripts/utils'

function Megasena({...Props} : _2Props) {
  const [Numbers, setNumbers] = React.useState<Array<number>>([])
  const [activate, setActivate] = React.useState(false)

  useEffect(() => {
    if(!activate) return
    sleep(750).then(() => setActivate(false))
  }, [activate])

  return (
    <>
      <div className='w-full h-full absolute justify-center items-center flex'>
        <HomeButton func={Props.func}/>
        <div className='items-center justify-center flex flex-col gap-y-4 absolute bottom-16'>
          <div className='flex gap-8'>
            {Numbers.map((number, index) => (
              <div key={index} className={`megacenaResp ${activate && 'megacenaKeyFrames'}`} style={{
                animationDelay: `${0 * index}ms`
                }}>
                {number < 10 ? "0" + number : number}
              </div>
            ))}
          </div>
          <button onClick={() => {setNumbers(GetMegaNumbers()); setActivate(true)}}
          disabled={activate} className='bg-gradient-to-t p-2 rounded-md text-xl opacity-75 transition-all
          hover:opacity-100 scale-95 hover:scale-100 via-orange-600 to-yellow-600 from-red-500 '
          style={{
            pointerEvents: `${activate? "none" : "auto"}`,
          }}>
            Roda Roda</button>
        </div>
      </div>
    </>
  )
}

export default Megasena