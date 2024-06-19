import React, { useState } from "react";
import Header from "../../Components/Dashbord/Header";
import PreviewSec from "../../Components/PreviewSection/PreviewSec";
import { useAuth0 } from "@auth0/auth0-react";
import { useMenuContext } from "../../context/MenuContextProvider";
import Makeoffer from "../../Components/PreviewSection/Makeoffer";
import { useParams } from "react-router-dom";

const Preview = () => {
  const { showMenu, setShowMenu } = useMenuContext();
  const [show, setshow] = useState(false);
  const { user } = useAuth0();
  const params = useParams();

  return (
    <div>
      <div className="flex h-screen relative">
        {show && (
          <div className="absolute w-full top-[100px] flex justify-center">
            <Makeoffer id={params.id} show={show} setshow={setshow} />
          </div>
        )}

        <div className={`w-[100%] overflow-y-scroll border-l-2 bg-[#050618]  px-6 pb-10 text-white ${show ? "blur-lg" : ""}`}>
          <Header
            Username={user?.given_name}
            UserImg={user?.picture}
            isnav={showMenu}
            setisnav={setShowMenu}
          />
          <div className="border mt-6 border-[#0ca2e739]"></div>
          <PreviewSec show={show} setshow={setshow} />
        </div>
      </div>
    </div>
  );
};

export default Preview;
