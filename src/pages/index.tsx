import { type NextPage } from "next";
import { useState } from "react";
import { _3D } from "~/classes/Main3D/_3D";
import { Main3D } from "~/interfaces/providers";
import Screen from "~/interfaces/providers/Screen";

const Home: NextPage = () => {
  
  const [id, setId] = useState(0);

  return (
    <>
      <Main3D room={id}>
        <Screen id={id} func={setId}/>
      </Main3D>
    </>
  )

};

export default Home;
