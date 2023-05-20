import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { _3D } from '~/classes/Main3D/_3D'

interface Props {
    room: number,
    children: ReactNode
}

function Main3D({...Props} : Props) {
    const firstLoad = useRef(true)
    const __load = useRef(true)
    const [__3D, set__3D] = useState<_3D>()
    const [fps, setFps] = useState(0);
  
    useEffect(() => {
      if(!firstLoad.current) return
      firstLoad.current = false
      set__3D(new _3D(
        document.getElementById("canvas"),
        Props.room
      ))
    },[firstLoad])
  
    useEffect(() => { //TODO: remover isso, ou n
        if(!__load.current || !__3D) return
        __load.current = false
        __3D?._Timer.on('update', () => {setFps(__3D._Timer.fps)})
        console.log(__3D);
    },[__3D])
  
    useEffect(() => {
      if(!__3D) return
      __3D._roomId = Props.room
      __3D._World.update()
      console.log(Props.room)
    }, [Props.room])

    return (
      <>
        <main>
          <canvas id="canvas" className="fixed -z-50 pointer-events-none"/>
          {Props.children}
          <div className='m-4 w-12 h-6 opacity-75 text-white flex items-center justify-center absolute bottom-0 text-xs
          '>fps: {fps}</div>
        </main>
      </>
    );
}

export default Main3D