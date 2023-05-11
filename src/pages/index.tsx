import { type NextPage } from "next";
import { useState } from "react";
import { _3D } from "~/classes/Main3D/_3D";
import { Main3D } from "~/interfaces/providers";

const Home: NextPage = () => {
  
  const [id, setId] = useState(0);

  return (
    <>
      <Main3D room={id}>
        <div className="z-50 fixed top-0">
          <button onClick={() => setId(id == 0 ? 1 : 0)}>aaa</button>
        </div>
      </Main3D>
    </>
  )

};

export default Home;
