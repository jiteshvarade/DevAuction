import React from 'react'
import Header from '../../Components/Dashbord/Header'
import PreviewSec from '../../Components/PreviewSection/PreviewSec'
import { useAuth0 } from "@auth0/auth0-react";
import { useMenuContext } from "../../context/MenuContextProvider";


const Preview = () => { 
  const { showMenu, setShowMenu } = useMenuContext();
  const { user } = useAuth0();
  

  return (
    <div>
        <div className='flex h-screen'>
            {/* <LeftNavbar/> */} 

            <div className='w-[100%] overflow-y-scroll border-l-2 bg-[#050618]  px-6 pb-10 text-white'>
                <Header
                Username={user?.given_name}
                UserImg={user?.picture}
                isnav={showMenu}
                setisnav={setShowMenu}
                />
                <div className='border mt-6 border-[#0ca2e739]' ></div>
                <PreviewSec/>
            </div>            
        </div> 
      
    </div>
  )
}

export default Preview
