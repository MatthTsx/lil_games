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
  
    return (
      <>
        <main>
          <canvas id="canvas" className="fixed"/>
          {Props.children}
          <div className='m-4 bg-black w-8 h-8 text-white flex items-center justify-center'>{fps}</div>
        </main>
      </>
    );
}

export default Main3D