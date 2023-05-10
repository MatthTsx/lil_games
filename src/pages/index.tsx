import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { _3D } from "~/classes/Main3D/_3D";

const Home: NextPage = () => {
  const firstLoad = useRef(true)
  const [__3D, set__3D] = useState<_3D>()

  useEffect(() => {
    if(!firstLoad.current) return
    firstLoad.current = false
    set__3D(new _3D(
      document.getElementById("canvas")
    ))
  },[firstLoad])


  return (
    <>
      <main>
        <canvas id="canvas"/>
      </main>
    </>
  );
};

export default Home;
