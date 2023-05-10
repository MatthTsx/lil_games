import { type NextPage } from "next";
import { _3D } from "~/classes/Main3D/_3D";
import { Main3D } from "~/interfaces/providers";

const Home: NextPage = () => {
  
  return (
    <>
      <Main3D room={1}>
        <div className="z-50 fixed">azul</div>
      </Main3D>
    </>
  )

};

export default Home;
