import React, { useState } from 'react'
import LeftNavbar from './LeftNavbar'
import EarningCards from './EarningCards'
import Header from './Header'
import Cradites from './Cradites'
import { useAuth0 } from "@auth0/auth0-react";
import Auctionrooms from '../AuctionRoom/Auctionrooms'
import Highestbidder from '../AuctionRoom/Highestbidder'
import Createauction from '../AuctionRoom/Createauction' 
import Offers from './Offers'

function Dashbord() {
    const [isnav, setisnav] = useState(false)
    const [show, setshow] = useState(false);
    const { user } = useAuth0();
    const [data,setdata] = useState(null) ; 
    const [avg,setavg] = useState(0) ;
    const [total,settotal] = useState(0) ; 
    const [totalearn,settotalearn] = useState(0) ; 
    const [credits,setcredits] = useState(0) ; 


    // https://devauction.onrender.com/profile

    const response = async () => {

        const res = await fetch("https://devauction.onrender.com/profile", {
            method: "POST",
            body: JSON.stringify({email : user.email}),
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            },
        })

        const data =  await res.json() 
        setdata(data) ; 
        setcredits(data.userData.Profile.Credits)

        let avgspend = 0 ; 
        let totalspend = 0  ; 
        const arr1 = data.userData.Profile.Spendings

        if(arr1.length != 0 ) {
            for(let i = 0 ; i < arr1.length ; i++ )
            {
                totalspend = totalspend + arr1[i].Amount ; 
            }
            avgspend = totalspend/arr1.length ; 
            setavg(avgspend) ;
            settotal(totalspend) ;
        }

        let totalEarn = 0 ; 
        const arr2 = data.userData.Profile.Earnings  

        if(arr2.length != 0 )
        {
            for(let i = 0 ; i < arr2.length ; i++ )
            {
                totalEarn = totalEarn + arr2[i].Amount ;
            }
            settotalearn(totalEarn) ;
        }
      }

      response();

      
      

    return (
        <div className=' '>

            <div id="main" className='flex h-screen'>
                
                {
                    show &&
                    <div className='absolute w-full flex justify-center  ' >
                        <Createauction show={show} setshow={setshow}/>
                    </div>
                } 
                {/* navbar */}

                <LeftNavbar show={show} isnav={isnav} setisnav={setisnav} />

                <div className={`w-[100%] overflow-y-scroll md:basis-[80%] border-l-2 border-[#4b4c59] bg-[#050618] mg:px-10 pb-10 text-white ${show ? "blur-xl" : ""}`}>
                    <Header isnav={isnav} setisnav={setisnav} />    

                    {/* earnings cards */}
                    <EarningCards earningAmount={totalearn} spandAmount={total} avgAmount={avg} />

                    {/* <Auction /> */}
                    <Auctionrooms show={show} setshow={setshow} />
                    <Highestbidder />
                    <Cradites credits={credits} />
                </div>
            </div>

        </div>
    )
}

export default Dashbord